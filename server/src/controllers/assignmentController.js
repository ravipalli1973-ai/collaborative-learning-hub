const db = require('../config/db');

exports.getAssignments = async (req, res, next) => {
  try {
    const result = await db.query('SELECT * FROM assignments ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
};

exports.createAssignment = async (req, res, next) => {
  const { title, description, milestone_tag, deadline } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required.' });
  }
  try {
    const result = await db.query(
      `INSERT INTO assignments (title, description, milestone_tag, deadline)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [title, description, milestone_tag || 'Sprint 1', deadline || null]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};