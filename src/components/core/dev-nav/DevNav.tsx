import './dev-nav.scss';
import {Link} from "react-router";
import {ROUTES} from "../../../router.tsx";
export function DevNav() {
    return (
        <nav className="dev-nav">
            <ul className="dev-nav__wrapper">
                <Link to={ROUTES.HOME} className="dev-nav__item">Home</Link>
                <Link to={ROUTES.STREAMING} className="dev-nav__item">Streaming</Link>
                <Link to={ROUTES.BUSINESS} className="dev-nav__item">Business</Link>
                <Link to={ROUTES.ILLUSTRATION} className="dev-nav__item">Illustration</Link>
            </ul>
        </nav>
    )
}