import './nav-bar.scss';
import {MobileNav} from "./MobileNav.tsx";
import {DesktopNav} from "./DesktopNav.tsx";

// Both navs are always rendered: the CSS ("lg" breakpoint) decides which one is visible
export function NavBar() {
    return (
        <>
            <MobileNav/>
            <DesktopNav/>
        </>
    )
}
