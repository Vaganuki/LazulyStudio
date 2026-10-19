import './App.css'
import {Footer} from "./components/core/footer/Footer.tsx";
import {DevNav} from "./components/core/dev-nav/DevNav.tsx";
import {Outlet} from "react-router";
import {DevMobileNav} from "./components/core/dev-nav/DevMobileNav.tsx";

function App() {

    return (
        <>
            <DevMobileNav/>
            <DevNav/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default App
