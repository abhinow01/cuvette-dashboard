import React from 'react';

const QuickStatistics = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #ccc',
    borderRadius: '10px',
    width: '717px',
    marginTop: '10px'
  };

  const headingStyle = {
    alignSelf: 'flex-start',
    padding: '10px',
    // borderBottom: '1px solid #ccc',
  };

  const statsContainerStyle = {
    display: 'flex',
    paddingBottom: '5px'
  };

  const statStyle = {
    flex: '1',
    borderRight: '1px solid #ccc',
    padding: '10px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
  };

  const imageStyle = {
    marginRight: '10px',
  };

  return (
    <div style={containerStyle}>
      <div style={headingStyle}>
        <h2>Quick Statistics</h2>
      </div>
      <div style={statsContainerStyle}>
        <div style={statStyle}>
          <img src='./assets/html-logo.png' alt="HTML Logo" style={imageStyle} />
          <div>
            <h3>Stat 1</h3>
            <p>Some description</p>
          </div>
        </div>
        <div style={statStyle}>
        <img src='./assets/html-logo.png' alt="HTML Logo" style={imageStyle} />
          <div>
            <h3>Stat 2</h3>
            <p>Some description</p>
          </div>
        </div>
        <div style={statStyle}>
        <img src='./assets/html-logo.png' alt="HTML Logo" style={imageStyle} />
          <div>
            <h3>Stat 3</h3>
            <p>Some description</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickStatistics;
