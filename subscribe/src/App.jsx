import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useFetch } from "../hooks/useFetch";
import SubscriptionForm from "./components/Molecules/SubscriptionForm/SubscriptionForm";
import "./index.css";

const App = () => {
  const { postBody } = useFetch(`${process.env.BASE_URL}/subscription`);
  const [message, setMessage] = useState(null);

  const createProduct = async (data) => {
    await postBody(`${process.env.BASE_URL}/subscription`, data)
  }

  return (
    <div className="container">
      <SubscriptionForm setMessage={setMessage} />
      <div>
        {message ? <span>{message}</span> : null}
      </div>
      <span className="disclaimer">No Spam. Unsubscribe at <span>any</span> time.</span>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById("subscription"));
