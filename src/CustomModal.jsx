import React, {useState} from "react";

function CustomModal({ isOpen, onClose ,updateData}) {
    const [rank, setRank] = useState('');
    const [details, setDetails] = useState('');
    const [percentile, setPercentile] = useState('');
    const [currentScore, setCurrentScore] = useState('');
  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const modalContentStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    width: '400px', // Adjust width as needed
  };

  const headerSectionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const greyLine = {
    borderBottom: '1px solid #ccc',
    marginBottom: '20px',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '20px',
  };
  const handleRankChange = (e) => {
    setRank(e.target.value);
  };

  const handleDetailsChange = (e) => {
    setDetails(e.target.value);
  };

  const handlePercentileChange = (e) => {
    setPercentile(e.target.value);
  };

  const handleScoreChange = (e) => {
    setCurrentScore(e.target.value);
  };


  const handleSaveButtonClick = () => {
    // Add code to save the details
    const newData = {
        rank:  setRank/* get rank value */,
        percentile: setPercentile/* get percentile value */,
        currentScore: setCurrentScore/* get currentScore value */
      };
      updateData(newData);
     onClose(); // Close the modal after saving
  };

  const handleCloseButtonClick = () => {
    onClose();
  };

  if (!isOpen) {
    return null; // If modal is not open, don't render anything
  }

  
    return (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <div style={headerSectionStyle}>
              <div>
                <h2>Update Scores</h2>
              </div>
              <div>
                <img src="/assets/logo.png" alt="Logo" style={{ height: '30px' }} />
              </div>
            </div>
    
            <div style={greyLine}></div>
    
            <div>
              <input
                type="text"
                placeholder="Update your rank against that"
                style={inputStyle}
                value={rank}
                onChange={handleRankChange}
              />
              <input
                type="text"
                placeholder="Enter details"
                style={inputStyle}
                value={details}
                onChange={handleDetailsChange}
              />
              <input
                type="text"
                placeholder="Update your percentile"
                style={inputStyle}
                value={percentile}
                onChange={handlePercentileChange}
              />
              <input
                type="text"
                placeholder="Update your current score (out of 15)"
                style={inputStyle}
                value={currentScore}
                onChange={handleScoreChange}
              />
            </div>
    
            <div style={buttonContainerStyle}>
              <button onClick={handleCloseButtonClick}>Cancel</button>
              <button style={{ marginLeft: '10px' }} onClick={handleSaveButtonClick}>Save</button>
            </div>
          </div>
        </div>
      );
    }
    
    export default CustomModal;