import '../pricing.scss';
import './streamingPricing.scss'

import {FAQ} from "../FAQ.tsx";
import {Launch} from "../Launch.tsx";
import {MainOffer} from "../MainOffer.tsx";
import {streamingFAQ, streamingMenu, streamingOffers} from "../../../data/streaming.ts";

export function StreamingPricing(){

    return (
        <>
            <section className="streaming">
                <section className="pricing-hero">
                    <h2 className="pricing-hero__title">TARIFS STREAMING</h2>
                    <div className="pricing-hero__menu">
                        <button className="pricing-hero__menu__button">Comparer les packs</button>
                        <button className="pricing-hero__menu__button">Voir les tarifs à l'unité</button>
                    </div>
                </section>

                <section  className="pricing-mainOffer">
                    <h3  className="pricing-mainOffer__title">LES OFFRES</h3>
                    <MainOffer data={streamingOffers}/>
                    <div  className="pricing-mainOffer__attention">ATTENTION: Les tarifs varient selon la compléxité graphique, le nombre d'éléments sur mesure et le niveau d'animation.</div>
                </section>
                <section className="pricing-menu">
                    <div className="pricing-menu__header">
                        <h3>À LA CARTE</h3>
                    </div>
                    <div className="pricing-menu__wrapper">
                        {streamingMenu.map((group) => (
                            <div key={group.title} className="pricing-menu__content">
                                <div  className="pricing-menu__content__header" style={{backgroundColor:`var(--${group.headerColor})`}}>
                                    <h4 className="pricing-menu__content__header__title">{group.title}</h4>
                                </div>
                                <ul  className="pricing-menu__content__itemWrapper">
                                    {group.items.map(item => (
                                        <li className="pricing-menu__content__item" key={item.content}>
                                            <span className="pricing-menu__content__item__desc">{item.content}</span>
                                            <span className="pricing-menu__content__item__price">{item.price}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            </section>
            <Launch/>
            <FAQ title="streaming" content={streamingFAQ}/>
        </>
    )
}