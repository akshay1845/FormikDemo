import "./App.css";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-5">
            <SignUp />
          </div>
          <div className="col-md-7 my-auto">
            <img className="img-fluid w-100" src="login.jpg" alt = "login" /> 
          </div>
        </div>
      </div>
    </>
  )}

export default App;
