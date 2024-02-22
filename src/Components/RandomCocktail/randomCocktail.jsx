import React, { useState } from "react";
import Modal from "./modal";

export default function RandomCocktail() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <>
      <div>
        <Modal
          modalOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        ></Modal>
      </div>
    </>
  );
}
