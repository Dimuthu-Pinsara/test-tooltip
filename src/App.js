import './App.css';
import { useEffect } from "react";
import { initTipNixTooltip } from "tipnix";
import "tipnix/tipnix.css"; 

function App() {

  useEffect(() => {
    initTipNixTooltip({
      backgroundColor: "#000000",
      textColor: "#ffffff",
      fontSize: "16px",
      animation: "wobble",
      width: "225px",
      padding: "10px",
      parentWrapElement: ".body"
    });
  }, []);

  return (
    <div
        className="tipnix"
        tipnix-bg="#00aaff"
        tipnix-text-color="#ffffff"
        tipnix-font-size="18px"
        tipnix-text="Tipnix working with the classic Next.js pages router."
        tipnix-width="200px"
        tipnix-padding="16px"
        tipnix-animation="wobble"
        style={{ marginTop: 30 }}
      >
        <span>Hover me (Next Pages)</span>
      </div>
  );
}

export default App;
