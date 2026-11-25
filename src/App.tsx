import './App.css'
import {Footer} from "./components/core/footer/Footer.tsx";
import {DevNavigation} from "./components/core/dev-navigation/DevNavigation.tsx";
import {Outlet} from "react-router";

function App() {

    return (
        <>
            <DevNavigation/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default App
