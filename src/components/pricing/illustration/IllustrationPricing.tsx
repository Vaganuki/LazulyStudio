import './illustration-pricing.scss';
import '../pricing.scss';

import {FAQ} from "../FAQ.tsx";
import {Launch} from "../Launch.tsx";
import {illustrationFAQ, illustrationMenu} from "../../../data/illustration.ts";

export function IllustrationPricing() {

    return (
        <>
            <section className="illustration">
                <section className="pricing-hero">
                    <h2 className="pricing-hero__title">TARFIS ILLUSTRATION</h2>
                    <div className="pricing-hero__menu">
                        <button className="pricing-hero__menu__button">Voir les tarifs à l'unité</button>
                    </div>
                </section>
                <div className="pricing-menu__wrapper">
                    {illustrationMenu.map((group) => (
                        <div key={group.title} className="pricing-menu__content">
                            <div  className="pricing-menu__content__header" style={{backgroundColor:`var(--${group.headerColor})`}}>
                                <h4 className="pricing-menu__content__header__title">{group.title}</h4>
                            </div>
                            <ul  className="pricing-menu__content__item-wrapper">
                                {group.items.map(item => (
                                    <li className="pricing-menu__content__item" key={item.content}>
                                        <div className="pricing-menu__content__item__spacer">
                                            <span className="pricing-menu__content__item__cont">{item.content}</span>
                                            <span className="pricing-menu__content__item__price">{item.price}</span>
                                        </div>
                                        <span className="pricing-menu__content__item__desc">{item.description}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="pricing-main-offer__attention">ATTENTION : Les tarifs varient selon la complexité graphique.</div>
            </section>
            <Launch/>
            <FAQ title="illustration" content={illustrationFAQ}/>
        </>
    )
}