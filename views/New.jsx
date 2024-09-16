const React = require('react');

const New = () => (

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

      /* Title styles */
      .title {
        color: white;
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
        color: #00ffff;
        font-size: 1.5em;
        text-decoration: none;
        font-weight: bold;
      }

      .log-link:hover {
        color:#00ffff;
        text-decoration: underline;
      }

      /* Create link styled with a touch of yellow */
      .create-link {
        display: block;
        margin: 20px 0;
        padding: 10px;
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

      /* Styles for larger input and textarea */
      input[type="text"] {
        width: 100%;
        padding: 12px;
        font-size: 1.2em;
        margin-top: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
      }

      textarea {
        width: 97%;
        height: 150px;
        padding: 12px;
        font-size: 1.2em;
        margin-top: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
      }

      input[type="checkbox"] {
        margin-left: 10px;
      }

      form label {
        display: block;
        margin: 15px 0;
        font-size: 1.2em;
      }
    `}</style>

    <div className="container">
      <h1>Create New Log</h1>
      <form action="/logs" method="POST">
        <label>Title: <input type="text" name="title" /></label><br />
        <label>Entry: <textarea name="entry"></textarea></label><br />
        <label>Ship is Broken: <input type="checkbox" name="shipIsBroken" /></label><br />
        <input type="submit" className="create-link" value="Create Log" />
      </form>
      <a href="/logs" className="create-link">Back to Index</a>
    </div>
  </div>
)
module.exports = New;