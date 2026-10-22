import React, { useState } from 'react';
import { submitProject } from '../api';

export default function SubmissionForm({ assignments, onSubmitted }) {
  const [form, setForm] = useState({
    assignment_id: '',
    student_name: '',
    github_link: '',
    code_submission: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.assignment_id) return alert('Select an assignment');
    await submitProject(form);
    alert('Submitted successfully!');
    setForm({ assignment_id: '', student_name: '', github_link: '', code_submission: '' });
    onSubmitted();
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px', marginBottom: '20px' }}>
      <h3>Submit Programming Assignment</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <select
          value={form.assignment_id}
          onChange={(e) => setForm({ ...form, assignment_id: e.target.value })}
          required
        >
          <option value="">Select Assignment</option>
          {assignments.map((a) => (
            <option key={a.id} value={a.id}>{a.title} ({a.milestone_tag})</option>
          ))}
        </select>
        <input
          placeholder="Student Name"
          value={form.student_name}
          onChange={(e) => setForm({ ...form, student_name: e.target.value })}
          required
        />
        <input
          placeholder="GitHub Repository URL"
          value={form.github_link}
          onChange={(e) => setForm({ ...form, github_link: e.target.value })}
          required
        />
        <textarea
          placeholder="Code snippet / notes"
          value={form.code_submission}
          onChange={(e) => setForm({ ...form, code_submission: e.target.value })}
          rows={4}
        />
        <button type="submit" style={{ padding: '8px', cursor: 'pointer' }}>Submit Code</button>
      </form>
    </div>
  );
}