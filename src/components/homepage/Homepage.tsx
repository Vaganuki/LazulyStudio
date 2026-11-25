import {Trusted} from "./trusted/Trusted.tsx";
import {Hero} from "./hero/Hero.tsx";
import {HotOffers} from "./hot-offers/HotOffers.tsx";

export function Homepage() {
    return (
        <>
            <Hero/>
            <HotOffers/>
            <Trusted/>
        </>
    )
}