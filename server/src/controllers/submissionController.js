const db = require('../config/db');

exports.getSubmissions = async (req, res, next) => {
  try {
    const result = await db.query(`
      SELECT s.*, a.title AS assignment_title, a.milestone_tag
      FROM submissions s
      JOIN assignments a ON s.assignment_id = a.id
      ORDER BY s.created_at DESC
    `);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
};

exports.createSubmission = async (req, res, next) => {
  const { assignment_id, student_name, github_link, code_submission } = req.body;
  if (!assignment_id || !student_name || !github_link) {
    return res.status(400).json({ error: 'Missing required submission fields.' });
  }
  try {
    const result = await db.query(
      `INSERT INTO submissions (assignment_id, student_name, github_link, code_submission)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [assignment_id, student_name, github_link, code_submission || '']
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

exports.addFeedback = async (req, res, next) => {
  const { id } = req.params;
  const { feedback, status } = req.body;
  try {
    const result = await db.query(
      `UPDATE submissions SET feedback = $1, status = $2 WHERE id = $3 RETURNING *`,
      [feedback || 'Approved', status || 'Reviewed', id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Submission not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};