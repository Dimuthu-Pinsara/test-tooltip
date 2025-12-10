import './App.css';
import Tooltip from './components/tooltip';

function App() {

  return (
    <>
      {/* <div className='test' style={{ width: "800px", border: "1px solid red", margin:"auto" }}>
        <Tooltip
          style={{margin:"auto"}}
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
      </div> */}

      <div
        className="test"
        style={{
          width: "800px",
          border: "1px solid red",
          margin: "auto",
          padding: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)", // 5 columns
          gap: "20px",
          textAlign: "center",
        }}
      >
        {[
          "Next.js pages router",
          "RTL tooltip support",
          "Grid based tooltip",
          "Reusable component",
          "Lightweight tooltip",
          "Custom animations",
          "Dynamic positioning",
          "Pure React tooltip",
          "Responsive design",
          "Tipnix tooltip engine",
        ].map((text, index) => (
          <Tooltip
            key={index}
            tipnix-bg="#00aaff"
            tipnix-text-color="#ffffff"
            tipnix-font-size="12px"
            tipnix-text={text}
            tipnix-width="200px"
            tipnix-padding="16px"
            tipnix-animation="wobble"
            tipnix-parent=".test"
          >
            <span style={{ cursor: "pointer" }}>Hover {index + 1}</span>
          </Tooltip>
        ))}
      </div>
    </>
  );
}

export default App;
