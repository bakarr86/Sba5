
const React = require('react');

const Index = ({ logs }) => (
  <div>

<style>{`
      body {
        font-family: Arial, sans-serif;
        background-color: #f2f2f2;
        margin: 0;
        padding: 0;
      }

      /* Container styles */
      .container {
        padding: 20px;
        max-width: 800px;
        margin: 0 auto;
        background-color: black;
        color: white;
        border: 1px solid #ccc;
        border-radius: 8px;
      }

      /* Title styles with brick color */
      .title {
        color: white; /* Brick */
        text-align: center;
        font-size: 2.5em;
      }

      /* Log list styles */
      .log-list {
        list-style-type: none;
        padding: 0;
      }

      .log-item {
        margin: 10px 0;
      }

      /* Log links styled with aqua color */
      .log-link {
        color: #00ffff; /* Aqua */
        font-size: 1.5em;
        text-decoration: none;
        font-weight: bold;
      }

      .log-link:hover {
        color:#00ffff; /* Burnt orange on hover */
        text-decoration: underline;
      }

      /* Create link styled with a touch of yellow */
      .create-link {
        display: block;
        margin: 20px 0;
        padding: 10px;
        background-color: #ffdf00; /* Yellow */
        color: #b22222; /* Brick */
        text-align: center;
        text-decoration: none;
        font-weight: bold;
        border-radius: 5px;
      }

      .create-link:hover {
        background-color: #ff8c00; /* Burnt orange */
        color: #fff;
      }
    `}</style>

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