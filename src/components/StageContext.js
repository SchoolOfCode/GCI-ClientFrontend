import React, { createContext, useContext, useState } from "react";

const StageContext = createContext(1);

export function StageProvider({ children }) {
  const [currentStage, setCurrentStage] = useState(1);
  function setStage(x) {
    setCurrentStage(x);
  }
  function decline() {
    setCurrentStage(6);
  }
  return (
    <StageContext.Provider value={[currentStage, setStage, decline]}>
      {children}
    </StageContext.Provider>
  );
}

export function useStageContext() {
  return useContext(StageContext);
}
