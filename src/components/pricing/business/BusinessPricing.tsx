import './businessPricing.scss'
import '../pricing.scss';
import {FAQ} from "../FAQ.tsx";
import {MainOffer} from "../MainOffer.tsx";
import {Launch} from "../Launch.tsx";
import {businessFAQ, businessMenu, businessOffers} from "../../../data/business.ts";

export function BusinessPricing() {
    return (
        <>
            <section className="business">
                <section className="pricing-hero">
                    <h2 className="pricing-hero__title">TARIFS BUSINESS</h2>
                    <div className="pricing-hero__menu">
                        <button className="pricing-hero__menu__button">Voir les tarifs à l'unité</button>
                    </div>
                </section>

                <section className="pricing-mainOffer">
                    <h3 className="pricing-mainOffer__title">UNE OFFRE CLÉ EN MAIN</h3>
                    <MainOffer data={businessOffers}/>
                    <div className="pricing-mainOffer__attention">ATTENTION: Les tarifs varient selon la compléxité graphique.</div>
                </section>
                <section className="pricing-menu">
                    <div className="pricing-menu__header">
                        <h3>À LA CARTE</h3>
                    </div>
                    <div className="pricing-menu__wrapper">
                        {businessMenu.map((group) => (
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
            <FAQ title="business" content={businessFAQ}/>
        </>
    )
}