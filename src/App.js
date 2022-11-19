import "./App.css";
import React from "react";
import { UseImperativeHandleTutor } from "./tutor/useImperatifTutor/UseImperativeHandleTutor";
// import { UseRefTutor } from "./tutor/UseRefTutor";
// import { UseLayoutEffectTutor } from "./tutor/UseLayoutEffectTutor";
// import { UseStateTutor } from "./tutor/UseStateTutor";
// import { UseReducerTutor } from "./tutor/UseReducerTutor";
// import { UseEffectTutor } from "./tutor/UseEffectTutor";

function App() {
  return (
    <div className="App">
      {/* <UseStateTutor /> */}
      {/* <UseReducerTutor /> */}
      {/* <UseEffectTutor /> */}
      {/* <UseRefTutor /> */}
      {/* <UseLayoutEffectTutor /> */}
      <UseImperativeHandleTutor />
    </div>
  );
}

export default App;
