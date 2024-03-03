import React, { useState } from "react";
import ReactDOM from "react-dom";
import style from "../../ComponentStyles/AgeVerifierStyle/ageVerifierModalStyle.module.css";

const AgeVerifierModal = ({ modalOpen, setPageClickable }) => {
  const [birthYear, setBirthYear] = useState('');
  const [ageVerified, setAgeVerified] = useState(null);

  const handleInputChange = (event) => {
    setBirthYear(event.target.value);
  };
  
  const verifyAge = (e) => {
    e.preventDefault();
    const currentYear = new Date().getFullYear();
    const enteredYear = parseInt(birthYear);
    const age = currentYear - enteredYear;

    if (age >= 21) {
      setAgeVerified(true);
         //if of age-21 or over they can freely browse the site
      setPageClickable(true);
    } else {
        /*if under age - under 21 the modal content changes and all of the links are disabled
        and the user cannot access the page
        */
      setAgeVerified(false);
    }
  };

  if (!modalOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <section className={style.modalContainer}>
      {!ageVerified && (
        <div>
          <h1>Verify Age for A Boozy Experience</h1>
          <label htmlFor="birthYear">Enter your birth date &nbsp;:</label> &nbsp;
          <input
            type="date"
            id="birthYear"
            max="2025-01-01"
            value={birthYear}
            onChange={handleInputChange}
          />
          <button className={style.verifyAge} onClick={(e) => verifyAge(e)}>Verify Age</button>
          {!ageVerified ? <p>You must be 21 or older to proceed.</p> : null}

        </div>
      )}
    </section>,
    document.getElementById("ageVerifierModal")
  );
};

export default AgeVerifierModal;
