import React from 'react';

export default function MilestoneTracker({ submissions }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px' }}>
      <h3>Submissions, Feedback & Milestone Tracking</h3>
      {submissions.length === 0 ? (
        <p>No submissions recorded yet.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: '#f5f5f5' }}>
              <th style={{ padding: '8px' }}>Assignment</th>
              <th style={{ padding: '8px' }}>Milestone</th>
              <th style={{ padding: '8px' }}>Student</th>
              <th style={{ padding: '8px' }}>Repo</th>
              <th style={{ padding: '8px' }}>Status</th>
              <th style={{ padding: '8px' }}>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((sub) => (
              <tr key={sub.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '8px' }}>{sub.assignment_title}</td>
                <td style={{ padding: '8px' }}><code>{sub.milestone_tag}</code></td>
                <td style={{ padding: '8px' }}>{sub.student_name}</td>
                <td style={{ padding: '8px' }}>
                  <a href={sub.github_link} target="_blank" rel="noreferrer">Repo Link</a>
                </td>
                <td style={{ padding: '8px' }}><strong>{sub.status}</strong></td>
                <td style={{ padding: '8px' }}>{sub.feedback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}