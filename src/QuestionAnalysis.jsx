import React from "react";

function QuestionAnalysis(){
return (
    <>
    <div style={{
        display: "flex",
        flexDirection:"column",
        maxWidth: "300px",
        border: '1px solid rgb(235,240,245)'
    }}>
    <div style={{
        color: 'var(--primary-text, #1E272E)',        
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '28px' ,/* 175% */
        letterSpacing: '-0.32px',
        padding: '10px'
    }}>
    Question Analysis 
    </div>
    <div style={{
        padding: '10px',
        color: 'var(--secondary-text, #566474)',
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '150%', /* 21px */
        letterSpacing: '-0.28px'
    }}>
        You scored 7 question correct out of 15 . <div style={{
            color: 'var(--secondary-text, #566474)',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '150%', /* 21px */
            letterSpacing: '-0.28px'
        }}>However it still needs improvement </div>
    </div>
    <center>
    <div style={{
        
    }}><img src="/assets/questionanalysis.png" /></div>
    </center>
    </div>
    
    </>
)
}

export default QuestionAnalysis;