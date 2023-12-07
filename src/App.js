import logo from './logo.svg';
import './App.css';
import Index from './pages/Home/Index';
import Menu from './pages/PunchingDepartment/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Production from './pages/PunchingDepartment/Production/Production';
import Sampling from './pages/PunchingDepartment/Sampling/Sampling';
import SamplingArticle from './pages/PunchingDepartment/Sampling/SamplingArticle';
import ProductionArticle from './pages/PunchingDepartment/Production/ProductionArticle';
import Cutting from './pages/CuttingDepartment/Cutting';
import CuttingArticle from './pages/CuttingDepartment/CuttingArticle';
import SubNavbar from './components/SubNavbar';
import NavbarComponent from './components/NavbarComponent';
function App() {
  return (
    <div className="App">

      

<Router>
<NavbarComponent/>

      
          <div className=''>

            
        

        <section class="bg-white dark:bg-gray-900">
        
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
           
            
         
            <Routes>
               
                <Route  path='/' exact element={<Index />} />
                <Route  path='/Cutting'  element={<Cutting />} />
                <Route  path='/Cutting/Article'  element={<CuttingArticle />} />
                <Route  path='/Punching'  element={<Menu />} />
                <Route  path='/Punching/Sampling'  element={<Sampling />} />
                <Route  path='/Punching/Production'  element={<Production />} />
                <Route  path='/Punching/Sampling/Article'  element={<SamplingArticle />} />
                <Route  path='/Punching/Production/Article'  element={<ProductionArticle />} />
                
            </Routes>  
         
        
               
            </div>
        </section>
        
            </div>
            </Router>
    </div>
  );
}

export default App;
