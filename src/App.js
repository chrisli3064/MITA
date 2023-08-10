import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Contact from "./pages/Contact";
function App() {



  return (
    <>
      <Navbar />
      <div className="container">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div class="social-buttons">
          <a href="https://twitter.com/davidycli" target="_blank" class="twitter-button">Twitter</a>
          <a href="https://www.linkedin.com/in/david-li-9aa210b/" target="_blank" class="linkedin-button">LinkedIn</a>
        </div>
      </div>
    </>
  )
}

export default App;
