//react
const React = require('react');

const Show = ({ log }) => (
  //div container
  <div>
Show,jsk <style>{`
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
        color: white;
        text-align: center;
        font-size: 2.5em;
      }

      /* Paragraph text */
      p {
        font-size: 1.2em;
        line-height: 1.5em;
        margin: 10px 0;
      }

      /* Log links styled with aqua color */
      .log-link {
        color: #00ffff; /* Aqua */
        font-size: 1.2em;
        text-decoration: none;
        font-weight: bold;
        margin: 10px 5px;
      }

      .log-link:hover {
        color: #ff8c00;
        text-decoration: underline;
      }

      /* Buttons styled consistently */
      button {
        background-color: #00ffff; /* Aqua */
        border: none;
        color: white;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 1.2em;
        margin: 10px 5px;
        border-radius: 5px;
        cursor: pointer;
      }

      button a {
        color: white;
        text-decoration: none;
      }

      button:hover {
        background-color: #ff8c00; /* Burnt orange */
      }

      /* Create link styled with yellow and aligned as a button */
      .create-link {
        display: inline-block;
        margin: 20px 0;
        padding: 10px 20px;
        background-color: #ffdf00;
        color: #b22222;
        text-align: center;
        text-decoration: none;
        font-weight: bold;
        border-radius: 5px;
      }

      .create-link:hover {
        background-color: #ff8c00;
        color: #fff;
      }

      /* Flexbox for layout adjustments */
      .action-buttons {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
      }
    `}</style>
  <div className="container">
      <h1 className="title">Captain's Log - {log.title}</h1>
      <p>Entry: {log.entry}</p>
      <p>Ship is Broken: {log.shipIsBroken ? 'Yes' : 'No'}</p>

      <div className="action-buttons">
        <button><a href={`/logs/delete/${log._id}`}>Delete</a></button> 
        <a href="/logs" className="create-link">Back to Index</a>
        <button><a href={`/logs/edit/${log._id}`}>Update</a></button>
      </div>
    </div>
  </div>
);

module.exports = Show;