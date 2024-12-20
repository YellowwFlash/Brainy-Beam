import useLocalSessionStorage from "@hooks/useLocalSessionStorage";
import { useState } from "react";
import './App.css';

function App() {
  const [value, setValue, setStorage] = useLocalSessionStorage("data", "");
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue("");
    setStorage(event.target.checked ? localStorage : sessionStorage);
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    setValue(newValue);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Storage Manager</h1>
      <p className="app-description">Toggle between localStorage and sessionStorage while managing your input data.</p>

      <div className="input-wrapper">
        <label htmlFor="storage-input" className="input-label">Enter Your Data:</label>
        <input
          id="storage-input"
          type="text"
          className="input-field"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>

      <div className="storage-display">
        <p className="storage-text">
          <strong>Preview from storage: </strong> {value || "Nothing stored yet."}
        </p>
      </div>

      <div className="toggle-wrapper">
        <label htmlFor="storage-toggle" className="checkbox-label">
          <input
            id="storage-toggle"
            type="checkbox"
            className="checkbox"
            onChange={handleChange}
          />
          Use localStorage
        </label>
      </div>

      <footer className="footer">
        <p className="footer-text">Crafted with ❤️</p>
      </footer>
    </div>
  );
}

export default App;
