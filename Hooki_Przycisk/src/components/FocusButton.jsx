import React, { useRef, useEffect } from 'react';

function FocusButton() {
  // Referencja do pola tekstowego
  const inputRef = useRef(null);
  // Referencja do przycisku
  const buttonRef = useRef(null);

  useEffect(() => {
    let colorInterval;
    if (buttonRef.current) {
      let colors = ['green', 'red', 'blue', 'purple'];
      let colorIndex = 0;
      colorInterval = setInterval(() => {
        buttonRef.current.style.backgroundColor = colors[colorIndex];
        buttonRef.current.style.color = colorIndex % 2 === 0 ? 'white' : 'black';
        colorIndex = (colorIndex + 1) % colors.length;
      }, 1000);
    }
    return () => clearInterval(colorInterval);
  }, []);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div className="focus-button-container">
      <input
        ref={inputRef}
        type="text"
        placeholder="Focus po kliknięciu"
        className="focus-input"
      />
      <button
        ref={buttonRef}
        onClick={handleFocus}
        className="focus-button"
      >
        Ustaw focus na input
      </button>
    </div>
  );
}

export default FocusButton;
