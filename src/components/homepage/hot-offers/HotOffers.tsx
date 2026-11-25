import './hot-offers.scss';
import {hotOffers} from "../../../data/homepage.ts";

export function HotOffers() {
    return (
        <section className="offers-section">
            <h2>OFFRES À LA UNE</h2>
            <div className="offers-container">
                {hotOffers.map((o) => (
                    <div className="offer__wrapper" key={o.name}>
                        <div className="offer__pic">
                            <img
                                src={o.pic}
                                alt={`Exemple de ${o.name}`}/>
                        </div>
                        <div className="offer__category cartouche"
                             style={{backgroundColor: `var(--${o.color})`}}>{o.category}</div>
                        <div className="offer__header">
                            <h3 className="offer__title">{o.name}</h3><span
                            className="offer__price">dès {o.price}€</span>
                        </div>
                        <p className="offer__desc">{o.description}</p>
                        <span className="offer__timing">⏱ {o.duration}</span>
                    </div>
                ))}
            </div>
            <div className="offers-contact">
                <p className="offers-contact__text">Envie d’un projet que tu ne trouves pas dans mes offres ? <br/> Pas de
                    panique, discutons de tes envies !</p>
                <button className="offers-contact__button">Contacte moi</button>
            </div>
        </section>
    );
}