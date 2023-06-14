import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/layout/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import Footer from "./Components/layout/Footer";

function App() {
  return (
    <div>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Header />
          <main className="container mx-auto px-3 pb-12">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/notfound" element={<NotFound/>} />
              <Route path="/*" element={<NotFound/>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
