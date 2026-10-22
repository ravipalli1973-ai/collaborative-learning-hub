const BASE_URL = 'http://localhost:5000/api';

export const fetchAssignments = () => fetch(`${BASE_URL}/assignments`).then(r => r.json());
export const fetchSubmissions = () => fetch(`${BASE_URL}/submissions`).then(r => r.json());
export const submitProject = (data) =>
  fetch(`${BASE_URL}/submissions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(r => r.json());