import {createBrowserRouter} from "react-router";
import App from "./App.tsx";
import {Homepage} from "./components/homepage/Homepage.tsx";
import {StreamingPricing} from "./components/pricing/streaming/StreamingPricing.tsx";

export const ROUTES = {
    HOME : '/',
    STREAMING : '/tarifs-streaming',
} as const;

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Homepage/>
            },
            {
                path:'tarifs-streaming',
                element: <StreamingPricing/>
            }
        ]
    }
])