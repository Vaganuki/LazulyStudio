import {Link} from "react-router";
import {ROUTES} from "../../../router.tsx";
import {useRef} from "react";
import type {FocusEvent} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(useGSAP);

// Must match the "lg" breakpoint of src/styles/_breakpoints.scss (desktop nav takes over from 992px)
const DESKTOP_QUERY = '(min-width: 992px)';

export function DesktopNav() {

    const root = useRef<HTMLElement | null>(null);
    const tl = useRef<gsap.core.Timeline|null>(null);

    useGSAP(
        ()=> {
            // matchMedia: the timeline only exists on desktop, the mobile nav handles small screens
            const mm = gsap.matchMedia();

            mm.add(DESKTOP_QUERY, () => {
                // links start hidden inside the title (clipped by the wrapper) and slide out of it
                tl.current = gsap.timeline( {paused: true} ).fromTo(
                    '.desktop-nav__item',
                    {
                        yPercent: -110,
                    },
                    {
                        yPercent: 0,
                        duration: 0.5,
                        ease: "power3.out",
                        stagger: 0.06,
                    }
                );

                return () => {
                    tl.current = null;
                };
            });

            return () => mm.revert();
        },
        {scope: root}
    );

    const open = () => {
        tl.current?.play();
    }

    const close = () => {
        tl.current?.reverse();
    }

    // Keyboard users open the menu by tabbing into it, it closes once the focus leaves the nav
    const handleBlur = (e: FocusEvent<HTMLElement>) => {
        if(!root.current?.contains(e.relatedTarget)) close();
    }

    return (
        <nav className="desktop-nav" ref={root} aria-label="Navigation principale" onMouseEnter={open} onMouseLeave={close} onFocus={open} onBlur={handleBlur}>
            <div className="desktop-nav__brand">
                <Link to={ROUTES.HOME} className="desktop-nav__logo">LAZULYSTUDIO</Link>
                <ul className="desktop-nav__wrapper">
                    <li><Link to={ROUTES.STREAMING} className="desktop-nav__item">Streaming</Link></li>
                    <li><Link to={ROUTES.BUSINESS} className="desktop-nav__item">Business</Link></li>
                    <li><Link to={ROUTES.ILLUSTRATION} className="desktop-nav__item">Illustration</Link></li>
                </ul>
            </div>
        </nav>
    )
}
