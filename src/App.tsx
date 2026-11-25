import './App.css'
import {Footer} from "./components/core/footer/Footer.tsx";
import {NavBar} from "./components/core/nav-bar/NavBar.tsx";
import {Outlet} from "react-router";

function App() {

    return (
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default App
