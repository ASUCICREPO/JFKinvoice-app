import React, { useState } from "react";
import "./App.css";
import { InvoiceCreateForm } from "./ui-components";
import { createInvoice } from "./graphql/mutations";
import { generateClient } from "aws-amplify/api";

const client = generateClient();

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (modelFields) => {
    try {
      const response = await client.graphql({
        query: createInvoice,
        variables: { input: modelFields },
      });
      setIsSubmitted(true);
      setShowModal(true);
      console.log("Form submitted successfully", response);
    } catch (error) {
      console.error("Error submitting the form", error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setIsSubmitted(false);
  };

  return (
    <div className="App">
      <div className="invoice-form">
        <InvoiceCreateForm onSubmit={handleSubmit} />
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Form Submitted Successfully!</h2>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
