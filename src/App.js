import logo from "./logo.svg";
import "./App.css";
import { InvoiceCreateForm } from "./ui-components";
import { createInvoice } from "./graphql/mutations";
import { generateClient } from "aws-amplify/api";
const client = generateClient();

function App() {
  const handleSubmit = async (modelFields) => {
    try {
      // The structure for making a mutation might be different with a generated client
      // Assuming it follows a similar pattern to this
      const response = await client.graphql({
        query: createInvoice,
        variables: { input: modelFields },
      });

      console.log("Form submitted successfully", response);
    } catch (error) {
      console.error("Error submitting the form", error);
      // Handle error operations here, if necessary
    }
  };

  return (
    <div className="App">
      <InvoiceCreateForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
