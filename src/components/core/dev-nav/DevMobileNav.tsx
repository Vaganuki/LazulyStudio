import './dev-nav.scss';
import {Link} from "react-router";
import {ROUTES} from "../../../router.tsx";
import {useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function DevMobileNav() {

    const root = useRef(null);
    const logoRef = useRef(null);
    const tl = useRef(null);

    useGSAP(
        ()=> {
            const logo = logoRef.current;
            const items = gsap.utils.toArray('.dev-nav__item');
            //@ts-ignore
            tl.current = gsap.timeline( {paused: true} ).fromTo(
                items,
                {
                    //@ts-ignore
                    y: (i,el) => logo.offsetTop - el.offsetTop,
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
        },
        {scope: root}
    );

    const toggle = () => {
        const t = tl.current;
        //@ts-ignore
        if (t.reversed() || t.progress === 0) t.play();
        //@ts-ignore
        else t.reverse();
    }

    return (
        <nav className="dev mobile-nav" ref={root}>
            <Link to={ROUTES.HOME} className="dev-nav__item">HOME</Link>
            <Link to={ROUTES.STREAMING} className="dev-nav__item">STREAMING</Link>
            <Link to={ROUTES.BUSINESS} className="dev-nav__item">BUSINESS</Link>
            <Link to={ROUTES.ILLUSTRATION} className="dev-nav__item">ILLUSTRATION</Link>
            <button className="dev-nav__logo" ref={logoRef} onClick={toggle}>LAZULY<br/>STUDIO</button>
        </nav>
    )
}