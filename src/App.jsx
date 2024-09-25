import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Warning from "./Warning";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const mobileCheck = /Mobi|Android/i.test(userAgent);
    setIsMobile(mobileCheck);
  }, []);
  return <>{isMobile ? <Warning /> : <Home />}</>;
};

export default App;
