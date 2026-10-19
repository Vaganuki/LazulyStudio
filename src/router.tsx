import {createBrowserRouter} from "react-router";
import App from "./App.tsx";
import {Homepage} from "./components/homepage/Homepage.tsx";
import {StreamingPricing} from "./components/pricing/streaming/StreamingPricing.tsx";
import {BusinessPricing} from "./components/pricing/business/BusinessPricing.tsx";
import {IllustrationPricing} from "./components/pricing/illustration/IllustrationPricing.tsx";

export const ROUTES = {
    HOME : '/',
    STREAMING : '/tarifs-streaming',
    BUSINESS: '/tarifs-business',
    ILLUSTRATION: '/tarifs-illustration',
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
            },
            {
                path:'tarifs-business',
                element: <BusinessPricing/>
            },
            {
                path:'tarifs-illustration',
                element: <IllustrationPricing/>
            }
        ]
    }
])