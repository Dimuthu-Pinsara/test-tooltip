import './App.css';
import Tooltip from './components/tooltip';
import { useEffect } from "react";

function App() {

  useEffect(() => {
    document.body.setAttribute("dir", "rtl");
  }, []);

  return (
    <>
      <div className='test' style={{ width: "100%", border: "1px solid red" }}>
        <Tooltip
          tipnix-bg="#00aaff"
          tipnix-text-color="#ffffff"
          tipnix-font-size="12px"
          tipnix-text="Tipnix working with the classic Next.js pages router."
          tipnix-width="200px"
          tipnix-padding="16px"
          tipnix-animation="wobble"
          tipnix-parent=".test"
        >
          <span>Hover me</span>
        </Tooltip>
      </div>
    </>
  );
}

export default App;
