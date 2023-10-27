import React from 'react';
import Header from './Header';
import QuickStats from './QuickStats';
import ComparisonGraph from './ComparisonGraph';
import SubjectWiseAnalysis from './SujectWiseAnalysis';
import QuestionAnalysis from './QuestionAnalysis';
import './App.css'; // Create a CSS file for styling

function Content() {
  return (
    <div className='container'>
    <div className="content">
      <div className="column1">
        <div className="item1">
          <Header />
        </div>
        <div className="item2">
          <QuickStats />
        </div>
        <div className="item3">
          <ComparisonGraph />
        </div>
        </div>
        <div className='column2'>
        <div className="item4">
          <SubjectWiseAnalysis />
        </div>
        <div className="item5">
          <QuestionAnalysis />
        </div>
        </div>
      
    </div>
    </div>
  );
}

export default Content;
