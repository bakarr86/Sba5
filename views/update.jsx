//update set up
const React = require('react');
const { useState } = require('react');

const NewUpdate = ({ myOutput }) => {
  // Initialize state for the checkbox
  const [shipIsBroken, setShipIsBroken] = useState(myOutput.shipIsBroken);

  // Function to update the state when the checkbox is clicked
  const handleCheckboxChange = () => {
    setShipIsBroken(!shipIsBroken);
  };