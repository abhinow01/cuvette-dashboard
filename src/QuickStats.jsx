import React from 'react';

const QuickStatistics = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid rgb(235,240,245)',
    borderRadius: '10px',
    width: '717px',
    marginTop: '10px'
  };

  const headingStyle = {
    color: 'var(--primary-text, #1E272E)',
    fontFamily: 'DM Sans',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '28px', /* 175% */
    letterSpacing: '-0.32px'
  };

  const statsContainerStyle = {
    display: 'flex',
    paddingBottom: '5px'
  };

  const statStyle = {
    flex: '1',
    borderRight: '1px solid rgb(235,240,245)',
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
      <div style={{color: 'var(--primary-text, #1E272E)',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '28px', /* 175% */
    letterSpacing: '-0.32px',
    padding:'10px'}}>
        Quick Statistics
      </div>
      <div style={statsContainerStyle}>
        <div style={statStyle}>
          <div  style={imageStyle}> 🏆 </div> 
          <div style={{color: 'var(--primary-text, #1E272E)',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: '28px', /* 175% */
            letterSpacing: '-0.32px'}} >
            12,890
            <div style={{color: '#9EAAB7',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal', /* 175% */
            letterSpacing: '-0.32px'}}>
            YOUR RANK
            </div>
          </div>
        </div>
        <div style={statStyle}>
        <div  style={imageStyle}> 📋 </div> 
          <div style={{color: 'var(--primary-text, #1E272E)',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: '28px', /* 175% */
            letterSpacing: '-0.32px'}}>
            37%
           <div style={{color: '#9EAAB7',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal', /* 175% */
            letterSpacing: '-0.32px'}}>PERCENTILE </div>
          </div>
        </div>
        <div style={statStyle}>
        <div  style={imageStyle}> ✅ </div> 
          <div style={{color: 'var(--primary-text, #1E272E)',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: '28px', /* 175% */
            letterSpacing: '-0.32px'}}>
            07/15
            <div style= {{color: '#9EAAB7',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal', /* 175% */
            letterSpacing: '-0.32px'}}>CORRECT ANSWER</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickStatistics;
