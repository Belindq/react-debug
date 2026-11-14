import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const initialChecks = [
  { id: 'water', label: 'Check the underwater crop', done: true },
  { id: 'lens', label: 'Check the binocular mask', done: false },
  { id: 'sunset', label: 'Check the sunset colors', done: false },
];

function SceneChecklist() {
  const [checks, setChecks] = useState(initialChecks);
  const [draft, setDraft] = useState('');
  const remaining = checks.filter((check) => check.done).length;

  function addCheck(event) {
    event.preventDefault();
    const label = draft.trim();
    const newCheck = { id: crypto.randomUUID(), label, done: false };
    setChecks((current) => [...current, newCheck]);
  }

  function toggleCheck(id) {
    setChecks((current) =>
      current.map((check) => (check.id === id ? { ...check, done: !check.done } : check)),
    );
  }

  function removeCheck(id) {
    setChecks((current) => current.filter((check) => check.id === id));
  }

  return (
    <main>
      <h1>Scene checklist</h1>
      <p className="summary" role="status">{remaining} remaining</p>

      <form onSubmit={addCheck}>
        <label htmlFor="check-name">New check</label>
        <div className="input-row">
          <input
            id="check-name"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
          />
          <button type="submit">Add</button>
        </div>
      </form>

      <ul>
        {checks.map((check) => (
          <li key={check.id}>
            <label>
              <input
                type="checkbox"
                checked={check.done}
                onChange={() => toggleCheck(check.id)}
              />
              {check.label}
            </label>
            <button
              type="button"
              className="remove"
              aria-label={check.label ? `Remove ${check.label}` : 'Remove unnamed check'}
              onClick={() => removeCheck(check.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      {checks.length === 0 && <p>No checks yet.</p>}
    </main>
  );
}

createRoot(document.getElementById('root')).render(<SceneChecklist />);
