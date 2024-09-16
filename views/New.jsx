const React = require('react');

const New = () => (
<div>
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