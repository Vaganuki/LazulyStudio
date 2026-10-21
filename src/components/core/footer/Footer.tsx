import './footer.scss'
import {Link} from "react-router";
import {ROUTES} from "../../../router.tsx";
export function Footer() {
    return(
        <footer>
            <div className="footer__main">
                <ul className="footer__main__list-wrapper">
                    <li className="footer__main__item"><Link to={ROUTES.HOME}>Accueil</Link></li>
                    <li className="footer__main__item"><Link to={ROUTES.HOME}>Streaming</Link></li>
                    <li className="footer__main__item"><Link to={ROUTES.HOME}>Tarifs</Link></li>
                    <li className="footer__main__item"><Link to={ROUTES.HOME}>FAQ</Link></li>
                    <li className="footer__main__item"><Link to={ROUTES.HOME}>Questionnaire</Link></li>
                </ul>
            </div>
            <div className="footer__secondary">
                <ul className="footer__secondary__list-wrapper">
                    <li className="footer__secondary__item">Graphiste indépendante</li>
                    <li className="footer__secondary__item">France & à distance</li>
                    <li className="footer__secondary__item"><a href="">Instagram</a></li>
                    <li className="footer__secondary__item"><a href="">Behance</a></li>
                    <li className="footer__secondary__item"><a href="">Mentions légales</a></li>
                    <li className="footer__secondary__item">© 2026</li>
                </ul>
            </div>
        </footer>
    )
}