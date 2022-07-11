import './App.css';
import Navbar from './navbar/Navbar';
import Footer from './navbar/footer';
import SignIn from './signin/SignIn';
import SignUp from './signup/SignUp';
import Page from './page/Page';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useSelector} from "react-redux";

function App() {
  const myState = useSelector((state) => state.tryLogin );
  console.log(myState);

  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="profile" element={<Page details={myState}/>} />
          </Routes>
          <Footer />
      </Router>

    </>
  );

}

export default App;
