import React, { useState } from "react";
import NavigationBar from "./Components/GlobalComponents/navigationBar";
import AgeVerifier from "./Components/AgeVerifier/ageVerifier";
import Footer from "./Components/GlobalComponents/footer";
import ApplicationRoutes from "./ApplicationRoutes/applicationRoutes";
import "./index.css";

function App() {
  const [pageClickable, setPageClickable] = useState(false);

  return (
    <>
      {pageClickable === false ? (
        <>
          <div className="overlay"></div>
          <AgeVerifier setPageClickable={setPageClickable} pageClickable={pageClickable}/>
        </>
      ) : (
        <>
          <div className="App">
            <NavigationBar />
            <ApplicationRoutes />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
