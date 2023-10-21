
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import { Route, Routes } from 'react-router-dom';
import Blog from './pages/blog';
import Contact from './pages/contact';
import FurnitureDetails from './component/furniture/FurnitureDetails';

function App() {
  return (
    <>
      <Routes>
        <Route extact path={'/'} element={<Home/>}/>
        <Route extact path={'/about'} element={<About/>} />
        <Route extact path={'/blog'} element={<Blog/>} />
        <Route extact path={'/contact'} element={<Contact/>} />
        <Route extact path={'/furnitureDetails/:id/:name'} element={<FurnitureDetails/>} />
      </Routes>
    </>
  );
}

export default App;
