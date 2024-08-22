import { useRouteError, useNavigate } from "react-router-dom";
import Footer from "./../Footer/Footer.jsx";
import Navbar2 from "../Navbar/Navbar2";
import errorImg from "../../assets/error/error.png"

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate(); // Initialize the navigate hook

  console.error(error);

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div id="error-page" className="flex flex-col min-h-screen bg-[#FAFAFB]">
      <Navbar2 />
      <div className="flex items-center p-5">

        <div className="flex-grow flex flex-col flex-1 items-center justify-center text-center">
          <h2 className="lg:text-[233.239px] text-2xl font-medium text-[#EEEFF1]">404</h2> 
          <p className="lg:text-5xl font-medium mb-6">Oops...page not found</p>
          <button
            onClick={handleGoBack}
            className="btn btn-error px-6 py-2 lg:text-lg font-medium text-black transition-colors"
          >
            Go Back
          </button>
        </div>
        <img className="flex-1 w-1/2 h-1/2 rounded-xl " src={errorImg} alt="" />
      </div>
      <Footer />
    </div>
  );
}
