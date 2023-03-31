import React, { useState } from 'react';
import PlanTrainings from 'Components/PlanTrainings/PlanTrainings';
import Analysis from 'Components/Analysis/Analysis';
import AddCoach from 'Components/AddCoach/AddCoach';
import {
  BTN
} from './Administration.styled';

const Administration = () => {
  const [showPlan, setShowPlan] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [showCoach, setShowCoach] = useState(false);

  const handleShowPlan = () => {
    if (showPlan) {
      setShowPlan(false);
      setShowAnalysis(false);
      setShowCoach(false);
      return;
    }
    setShowPlan(true);
    setShowAnalysis(false);
    setShowCoach(false);
    return;
  };

  const handleShowAnalysis = () => {
    if (showAnalysis) {
      setShowPlan(false);
      setShowAnalysis(false);
      setShowCoach(false);
      return;
    }
    setShowPlan(false);
    setShowAnalysis(true);
    setShowCoach(false);
    return;
  };
  const handleShowAddCoach = () => {
    if (showCoach) {
      setShowPlan(false);
      setShowAnalysis(false);
      setShowCoach(false);
      return;
    }
    setShowPlan(false);
    setShowAnalysis(false);
    setShowCoach(true);
    return;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <BTN onClick={handleShowPlan} className={showPlan ? 'active' : ''}>План</BTN>
        <BTN onClick={handleShowAddCoach} className={showCoach ? 'active' : ''}>Тренери</BTN>
        <BTN onClick={handleShowAnalysis} className={showAnalysis ? 'active' : ''}>Аналіз</BTN>
        </div>
      <div>
        {showPlan ? <PlanTrainings /> : null}
        {showCoach ? <AddCoach /> : null}
        {showAnalysis ? <Analysis/> : null}
      </div>
    </div>
  )
}

export default Administration;