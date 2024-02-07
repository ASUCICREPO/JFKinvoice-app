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
    // try {
    //   const response = await client.graphql({
    //     query: createInvoice,
    //     variables: { input: modelFields },
    //   });
    //   setIsSubmitted(true);
    //   setShowModal(true);
    //   console.log("Form submitted successfully", response);
    // } catch (error) {
    //   console.error("Error submitting the form", error);
    // }
    try {
      // Presuming `createInvoice` is an async function that sends data to your backend

      // You might want to check the response
      setIsSubmitted(true); // Indicate submission success
      setShowModal(true); // Show the confirmation modal
    } catch (error) {
      console.error("Error submitting form: ", error);
      // Optionally handle error state here, maybe set an error message state and display it
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setIsSubmitted(false);
  };
  return (
    <div className="App">
      <div className="invoice-form">
        <h3>REQUEST FOR WORK TRAIN</h3>
        <InvoiceCreateForm onSuccess={handleSubmit} />
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
