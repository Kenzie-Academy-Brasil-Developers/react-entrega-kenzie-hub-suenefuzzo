import { RoutesApp } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export const App = () => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  
  return (
    <>
      <RoutesApp user={user} setUser={setUser} loading={loading} setLoading={setLoading}/>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};
