
const React = require('react');

const Index = ({ logs }) => (
  <div>

  <div className="container">
      <h1 className="title">Captain's Log Index</h1>
      <ul className="log-list">
        {logs.map((log) => (
          <li key={log._id} className="log-item">
            <a href={`/logs/${log._id}`} className="log-link">{log.title}</a>
          </li>
        ))}
      </ul>
      <a href="/logs/new" className="create-link">Create New Log</a>
    </div>
  </div>
);

module.exports = Index;