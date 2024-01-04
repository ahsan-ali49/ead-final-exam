import './App.css';
import Footer from './components/Footer';
import {Route, Routes} from "react-router-dom";
import AllProducts from "./components/AllProducts";
import { NavBar } from './components/NavBar';
import { Services } from './components/Services';

export default function App() {
    return (
        <div>
            <NavBar/>
                <Routes>
                    <Route path={"/"} element={<AllProducts />}></Route>
                </Routes>
                <Services/>
            <Footer/>
        </div>
    );
}
