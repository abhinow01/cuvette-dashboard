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
    borderBottom: '1px solid rgb(235,240,245)',
    marginBottom: '20px',
  };

  const inputStyle = {
    width: '20%',
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
              <div style={{color: '#222F3E',
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '36px',
                      fontStyle: 'normal',
                      fontWeight: '700',
                      lineHeight: 'normal',
                      letterSpacing: '-0.72px',}}>
              Update Scores
              </div>
              <div>
                <img src="/assets/html-logo.png" alt="Logo" style={{ height: '30px' }} />
              </div>
            </div>
    
            <div style={greyLine}></div>
    
            <div>
              <div style={{
                display: "flex",
                justifyContent: "space-between"
              }}>
              <div style={{
                color: 'var(--secondary-text, #566474)',
                fontFamily: 'DM Sans, sans-serif ',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '28px', /* 155.556% */
                letterSpacing:' -0.36px'
              }}>update your Rank </div>
              <input
                type="text"
                placeholder="rank "
                style={inputStyle}
                value={rank}
                onChange={handleRankChange}
              />
              </div>
              <div style={{
                display: "flex",
                justifyContent: "space-between"
              }}>
              <div style={{
                color: 'var(--secondary-text, #566474)',
                fontFamily: 'DM Sans, sans-serif ',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '28px', /* 155.556% */
                letterSpacing:' -0.36px'
              }}>update your percentile </div>
              <input
                type="text"
                placeholder="percentile"
                style={inputStyle}
                value={rank}
                onChange={handleRankChange}
              />
              </div>
              <div style={{
                display: "flex",
                justifyContent: "space-between"
              }}>
              <div style={{
                color: 'var(--secondary-text, #566474)',
                fontFamily: 'DM Sans, sans-serif ',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '28px', /* 155.556% */
                letterSpacing:' -0.36px'
              }}>update your score (out of 15) </div>
              <input
                type="text"
                placeholder="score"
                style={inputStyle}
                value={rank}
                onChange={handleRankChange}
              />
              </div>
            </div>
    
            <div style={buttonContainerStyle}>
              <button onClick={handleCloseButtonClick} style={{
                borderRadius: '5px',
                border: '1px solid var(--dark-blue, #142683)',
                padding: '8px 16px',

                
              }}>Cancel</button>
              <button style={{ marginLeft: '10px',
                            border: 'none',
                            borderRadius: '5px',
                            background: '#142683',
                            padding: '8px 16px',
                            color:"#ffffff"
            }} onClick={handleSaveButtonClick}>Save</button>
            </div>
          </div>
        </div>
      );
    }
    
    export default CustomModal;