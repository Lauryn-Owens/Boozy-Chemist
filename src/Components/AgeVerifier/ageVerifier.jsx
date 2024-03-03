import React, { useState } from "react";
import AgeVerifierModal from "./ageVerifierModal";

export default function AgeVerifier({ pageClickable,setPageClickable }) {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <AgeVerifierModal
      modalOpen={isModalOpen}
      setPageClickable={setPageClickable}
    />
  );
}
