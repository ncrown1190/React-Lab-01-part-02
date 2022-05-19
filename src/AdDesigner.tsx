import { useState } from "react";
import "./AdDesigner.css";

export function AdDesigner() {
  const [whatToSupport, setWhatToSupport] = useState("Strawberry");
  const [fontSize, setFontSize] = useState(18);
  const [isLightTheme, setIsLightTheme] = useState(true);

  const styles = { fontSize: fontSize + "px" };
  return (
    <div className="addDesigner">
      <h1>Ad Designer</h1>
      <div className={isLightTheme ? "ad lighter" : "ad darker"}>
        Vote For
        <h2 style={styles}>{whatToSupport}</h2>
      </div>

      <h3>What To Support</h3>
      <button
        className="flavorBtn"
        onClick={() => setWhatToSupport("Chocolate")}
      >
        Chocolate
      </button>
      <button className="flavorBtn" onClick={() => setWhatToSupport("Vanilla")}>
        Vanilla
      </button>
      <button
        className="flavorBtn"
        onClick={() => setWhatToSupport("Strawberry")}
      >
        Strawberry
      </button>

      <h3>Color Theme</h3>
      <button className="flavorBtn" onClick={() => setIsLightTheme(true)}>
        Light
      </button>
      <button className="flavorBtn" onClick={() => setIsLightTheme(false)}>
        Dark
      </button>

      <h3>Font Size</h3>
      <button className="flavorBtn" onClick={() => setFontSize(fontSize - 1)}>
        DOWN
      </button>
      <label>{fontSize}</label>
      <button className="flavorBtn" onClick={() => setFontSize(fontSize + 1)}>
        UP
      </button>
    </div>
  );
}
