import './dev-navigation.scss';
import {DevMobileNav} from "./DevMobileNav.tsx";
import {DevDesktopNav} from "./DevDesktopNav.tsx";

// Both navs are always rendered: the CSS ("lg" breakpoint) decides which one is visible
export function DevNavigation() {
    return (
        <>
            <DevMobileNav/>
            <DevDesktopNav/>
        </>
    )
}
