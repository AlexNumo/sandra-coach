import React, { useState } from 'react';
import PlanTrainings from 'Components/PlanTrainings/PlanTrainings';

const Administration = () => {
  const [showPlan, setShowPlan] = useState(false);

  const handleShowPlan = () => {
    if (showPlan) {
      return setShowPlan(false);
    }
    return setShowPlan(true);
  };

  return (
    <>
      <button onClick={handleShowPlan}>План</button>
      {showPlan ? <PlanTrainings/> : null}
    </>
  )
}

export default Administration;