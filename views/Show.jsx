//react
const React = require('react');

const Show = ({ log }) => (
  //div container
  <div>

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