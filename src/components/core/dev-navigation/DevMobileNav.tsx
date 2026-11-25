import {Link} from "react-router";
import {ROUTES} from "../../../router.tsx";
import {useRef, useState} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(useGSAP);

// Must match the "lg" breakpoint of src/styles/_breakpoints.scss (desktop nav takes over from 992px)
const MOBILE_QUERY = '(max-width: 991.98px)';

export function DevMobileNav() {

    const root = useRef(null);
    const logoRef = useRef<HTMLButtonElement | null>(null);
    const tl = useRef<gsap.core.Timeline|null>(null);
    const [isOpen, setIsOpen] = useState(false);

    useGSAP(
        ()=> {
            // matchMedia: the timeline only exists on mobile and is rebuilt (with fresh offsets) when the screen changes
            const mm = gsap.matchMedia();

            mm.add(MOBILE_QUERY, () => {
                const logo = logoRef.current;
                const items = gsap.utils.toArray<HTMLElement>('.mobile-nav__item');

                if(!logo) return;
                tl.current = gsap.timeline( {paused: true} ).fromTo(
                    items,
                    {
                        y: (_,el) => logo.offsetTop - el.offsetTop,
                    },
                    {
                        y: 0,
                        duration: 0.9,
                        ease: "back.out",
                        stagger: {
                            each: 0.1,
                            from:'end',
                        },
                    }
                );

                return () => {
                    tl.current = null;
                    setIsOpen(false);
                };
            });

            return () => mm.revert();
        },
        {scope: root}
    );

    const toggle = async ()  => {
        const t = tl.current;
        if(!t) return;
        if(t.reversed() || !t.progress() ) {
            setIsOpen(true);
            await t.play();
        }
        else {
            setIsOpen(false);
            await t.reverse();
        }
    }

    const close = () => {
        if(isOpen) toggle();
    }

    // Hidden links (stacked behind the logo) must not be reachable with the keyboard / screen readers
    const itemProps = {
        className: 'mobile-nav__item',
        tabIndex: isOpen ? 0 : -1,
        'aria-hidden': !isOpen,
        onClick: close,
    };

    return (
        <nav className="mobile-nav" ref={root} aria-label="Navigation principale">
            <Link to={ROUTES.HOME} {...itemProps}>HOME</Link>
            <Link to={ROUTES.STREAMING} {...itemProps}>STREAMING</Link>
            <Link to={ROUTES.BUSINESS} {...itemProps}>BUSINESS</Link>
            <Link to={ROUTES.ILLUSTRATION} {...itemProps}>ILLUSTRATION</Link>
            <button className="mobile-nav__logo" ref={logoRef} onClick={toggle} aria-expanded={isOpen}>LAZULY<br/>STUDIO</button>
        </nav>
    )
}
