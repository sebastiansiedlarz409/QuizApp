import "./result_bar.css";

import React, { useState } from "react";

function ResultBar(props) {
  const [result, setResult] = useState(null);

  props.moveState(setResult);

  if (result != null) {
    return (
      <div
        id="result"
        className="result_bar"
        style={{ backgroundColor: result >= 50 ? "#92ca5f" : "#ed2d33" }}
      >
        Twój wynik to {result["result"]}% ({result["count"]}/
        {result["questions"]})
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default ResultBar;
