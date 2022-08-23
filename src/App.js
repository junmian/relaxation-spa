import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import BookAppointment from "./pages/BookAppointment";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        {/* <Routes> is new in React Router Version 6 */}
        {/* <Switch> has been replaced with <Routes> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/bookAppointment" element={<BookAppointment />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
