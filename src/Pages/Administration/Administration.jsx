import React, { useState } from 'react';
import PlanTrainings from 'Components/PlanTrainings/PlanTrainings';
import Analysis from 'Components/Analysis/Analysis';
import AddCoach from 'Components/AddCoach/AddCoach';
// import Simile from 'Components/Simile/Simile';
import {
  BTN
} from './Administration.styled';

const Administration = () => {
  const [showPlan, setShowPlan] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [showCoach, setShowCoach] = useState(false);
  // const [showSimile, setShowSimile] = useState(false);

  const handleShowPlan = () => {
    if (showPlan) {
      setShowPlan(false);
      setShowAnalysis(false);
      setShowCoach(false);
      // setShowSimile(false);
      return;
    }
    setShowPlan(true);
    setShowAnalysis(false);
    setShowCoach(false);
    // setShowSimile(false);
    return;
  };

  const handleShowAnalysis = () => {
    if (showAnalysis) {
      setShowPlan(false);
      setShowAnalysis(false);
      setShowCoach(false);
      // setShowSimile(false);
      return;
    }
    setShowPlan(false);
    setShowAnalysis(true);
    setShowCoach(false);
    // setShowSimile(false);
    return;
  };
  const handleShowAddCoach = () => {
    if (showCoach) {
      setShowPlan(false);
      setShowAnalysis(false);
      setShowCoach(false);
      // setShowSimile(false);
      return;
    }
    setShowPlan(false);
    setShowAnalysis(false);
    setShowCoach(true);
    // setShowSimile(false);
    return;
  };

  // const handleShowSimile = () => {
  //   if (showSimile) {
  //     setShowPlan(false);
  //     setShowAnalysis(false);
  //     setShowCoach(false);
  //     setShowSimile(false);
  //     return;
  //   }
  //   setShowPlan(false);
  //   setShowAnalysis(false);
  //   setShowCoach(false);
  //   setShowSimile(true);
  //   return;
  // };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <BTN onClick={handleShowPlan} className={showPlan ? 'active' : ''}>План</BTN>
        <BTN onClick={handleShowAddCoach} className={showCoach ? 'active' : ''}>Тренери</BTN>
        <BTN onClick={handleShowAnalysis} className={showAnalysis ? 'active' : ''}>Аналіз</BTN>
        {/* <BTN onClick={handleShowSimile} className={showSimile ? 'active' : ''}>Порівняння</BTN> */}
        </div>
      <div>
        {showPlan ? <PlanTrainings /> : null}
        {showCoach ? <AddCoach /> : null}
        {showAnalysis ? <Analysis/> : null}
        {/* {showSimile ? <Simile/> : null} */}
      </div>
    </div>
  )
}

export default Administration;