import React, { useEffect } from "react";
import logo from "./Devfolio_Logo-Black.png";
import logo2 from "./Polygon_Logo-Colored.png"
import logo3 from "./ethindia-dark.png";
function App() {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
    <>


      <div
        className="apply-button"
        data-hackathon-slug="tsec-hacks-2024"
        data-button-theme="light"
        style={{ height: "44px", width: "312px" }}
      ></div>

      <img src={logo} alt="DEVFOLIO LOGO"></img>
      <img src={logo2} alt="POLYGON LOGO"></img>
      <img src={logo3} alt="ETHINDIA LOGO"></img>
    </>
  );
}

export default App;
