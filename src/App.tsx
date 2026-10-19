import './App.css'
import {Footer} from "./components/core/footer/Footer.tsx";
import {DevNav} from "./components/core/dev-nav/DevNav.tsx";
import {Outlet} from "react-router";

function App() {

    return (
        <>
            <DevNav/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default App
