import React from 'react';

function Footer() {
  const [isVisible, setIsVisible] = React.useState(false);
  const visibleHandler = () => {
    setIsVisible(!isVisible)
  };

  return (
    <div style={{display: "flex", justifyContent: "space-around", marginTop: "100px"}}>
      <div>
        {(isVisible && <span>Видимый текст</span>)}
      </div>
      <button
        onClick={() => visibleHandler()}
      >
        {(isVisible ? "Скрыть текст" : "Показать текст")}
      </button>
    </div>
  );
}

export default Footer;