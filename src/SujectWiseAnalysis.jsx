import React from 'react';

const SubjectWiseAnalysis = () => {
  const subjects = [
    { name: 'HTML Tools,Forms,History',  accuracy: 80, color: '#438AF6' },
    { name: 'Tags and references inn HTML', accuracy: 70, color: '#FF9142' },
    { name: 'Tables and CSS references', accuracy: 90, color: '#FB5E5E' },
    { name: 'Tables and CSS basics', accuracy: 75, color: '#2EC971' },
  ];

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Subject Wise Analysis</h2>
      {subjects.map((subject, index) => (
        <div className="subject" key={index} style={subjectStyle}>
            <div style={{display: 'flex',
                        justifyContent:'space-between'}}>
          <div style={{
            color: 'var(--secondary-text, #566474)',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal',
            letterSpacing: '-0.32px'
          }}>{subject.name}</div> <div style={{color: subject.color,fontFamily: 'DM sans'}}>{subject.accuracy}</div>
          </div>
          <div className="progress" style={progressContainerStyle}>
            <div
              className="progress-bar"
              style={{ width: `${subject.accuracy}%`, backgroundColor: subject.color, height: '100%' }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

const containerStyle = {
  border: '1px solid rgb(235,240,245)',
  borderRadius:'8px',
  padding: '20px',
  maxWidth: '300px',
};

const headingStyle = {
  fontSize: '1.5em',
  marginBottom: '10px',
  color: 'var(--primary-text, #1E272E)',
 fontFamily: 'DM Sans, sans-serif',
  fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '28px', /* 175% */
    letterSpacing: '-0.32px'
};

const subjectStyle = {
   marginBottom: '20px',
};

const progressContainerStyle = {
  backgroundColor: '#eee',
  height: '10px',
  borderRadius: '5px',
  overflow: 'hidden',
};

export default SubjectWiseAnalysis;
