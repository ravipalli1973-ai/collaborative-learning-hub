import React, { useState, useEffect } from 'react';
import { fetchAssignments, fetchSubmissions } from './api';
import SubmissionForm from './components/SubmissionForm';
import MilestoneTracker from './components/MilestoneTracker';

export default function App() {
  const [assignments, setAssignments] = useState([]);
  const [submissions, setSubmissions] = useState([]);

  const loadData = async () => {
    try {
      const [a, s] = await Promise.all([fetchAssignments(), fetchSubmissions()]);
      setAssignments(Array.isArray(a) ? a : []);
      setSubmissions(Array.isArray(s) ? s : []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => { loadData(); }, []);

  return (
    <main style={{ maxWidth: '850px', margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      <header>
        <h2>Collaborative Learning & Project Hub</h2>
        <p>Submit assignments, view reviewer feedback, and track milestone progression.</p>
      </header>
      <SubmissionForm assignments={assignments} onSubmitted={loadData} />
      <MilestoneTracker submissions={submissions} />
    </main>
  );
}