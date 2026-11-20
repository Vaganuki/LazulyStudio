import './dev-nav.scss';
import {Link} from "react-router";
import {ROUTES} from "../../../router.tsx";
export function DevNav() {
    return (
        <nav className="dev-nav" aria-label="Navigation principale">
            <ul className="dev-nav__wrapper">
                <li><Link to={ROUTES.HOME} className="dev-nav__item">Home</Link></li>
                <li><Link to={ROUTES.STREAMING} className="dev-nav__item">Streaming</Link></li>
                <li><Link to={ROUTES.BUSINESS} className="dev-nav__item">Business</Link></li>
                <li><Link to={ROUTES.ILLUSTRATION} className="dev-nav__item">Illustration</Link></li>
            </ul>
        </nav>
    )
}
