import React, { useState } from 'react';
import PlanTrainings from 'Components/PlanTrainings/PlanTrainings';
import Analysis from 'Components/Analysis/Analysis';

const Administration = () => {
  const [showPlan, setShowPlan] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);

  const handleShowPlan = () => {
    if (showPlan) {
      setShowPlan(false);
      setShowAnalysis(false);
      return;
    }
    setShowPlan(true);
    setShowAnalysis(false);
    return;
  };

  const handleShowAnalysis = () => {
    if (showAnalysis) {
      setShowPlan(false);
      setShowAnalysis(false);
      return;
    }
    setShowPlan(false);
    setShowAnalysis(true);
    return;
  };

  return (
    <>
      <button onClick={handleShowPlan}>План</button>
      <button onClick={handleShowAnalysis}>Аналіз</button>
      {showPlan ? <PlanTrainings /> : null}
      {showAnalysis ? <Analysis/> : null}
    </>
  )
}

export default Administration;