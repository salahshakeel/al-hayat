import logo from "./logo.svg";
import { useEffect } from "react";
import "./App.css";
import Index from "./pages/Home/Index";
import ProductionIndex from "./pages/ProductionDepartment/Index";
import Menu from "./pages/PunchingDepartment/Menu";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Header from "./components/Header";
import Production from "./pages/PunchingDepartment/Production/Production";
import Sampling from "./pages/PunchingDepartment/Sampling/Sampling";
import SamplingArticle from "./pages/PunchingDepartment/Sampling/SamplingArticle";
import ProductionArticle from "./pages/PunchingDepartment/Production/ProductionArticle";
import Cutting from "./pages/CuttingDepartment/Cutting";
import CuttingArticle from "./pages/CuttingDepartment/CuttingArticle";
import SubNavbar from "./components/SubNavbar";
import NavbarComponent from "./components/NavbarComponent";
import CuttingArticleId from "./pages/CuttingDepartment/CuttingArticleId";
import Cropping from "./pages/CroppingDepartment/Cropping";
import Finishing from "./pages/FinishingDepartment/Finishing";
import { setTheme } from "flowbite-react/lib/esm/theme-store";
import ProductionArticleTable from "./pages/PunchingDepartment/Production/ProductionArticleTable";
function App() {
  useEffect(() => {
    // Force light mode
    document.body.style.backgroundColor = "#F3F4F6";
    document.body.style.color = "black";
    setTheme("light");
    // Add more styles as needed
  }, []); // Run this effect only once when the component mounts

  return (
    <div className="App">
      <Router>
        <NavbarComponent />

        <div className="">
          <section class="bg-gray-100 dark:bg-gray-100 h-screen">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center text-gray-900 dark:text-black lg:py-16">
              <Routes>
                <Route path="/" exact element={<Index />} />
                <Route path="/Cutting" element={<Cutting />} />
                <Route path="/Cutting/Article" element={<CuttingArticle />} />
                <Route
                  path="/Cutting/Article/Id"
                  element={<CuttingArticleId />}
                />
                <Route path="/Punching" element={<Menu />} />
                <Route path="/Punching/Sampling" element={<Sampling />} />
                <Route path="/Punching/Production" element={<Production />} />
                <Route path="/Cropping" element={<Cropping />} />
                <Route path="/Finishing" element={<Finishing />} />

                <Route path="/Production" element={<ProductionIndex />} />
                <Route
                  path="/Punching/Sampling/Article"
                  element={<SamplingArticle />}
                />
                <Route
                  path="/Punching/Production/Article/:key"
                  element={<ProductionArticle />}
                />
                <Route
                  path="/Punching/Production/Article/:key/:title"
                  element={<ProductionArticleTable />}
                />
              </Routes>
            </div>
          </section>
        </div>
      </Router>
    </div>
  );
}

export default App;
