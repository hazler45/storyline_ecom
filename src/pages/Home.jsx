import { Navbar, Main, Product, Footer } from "../components";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {

  const queryParameters = new URLSearchParams(window.location.search)
  if(queryParameters.get("payment") === "failed"){
    if(!alert("Fail to make payment"))
      window.location.href="/"
  }
  return (
    <>
      <Navbar />
      <Main />
      <Product />
      <Footer />
      <ToastContainer />
    </>
  )
}

export default Home