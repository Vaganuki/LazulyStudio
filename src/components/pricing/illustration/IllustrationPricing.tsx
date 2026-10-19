import './illustrationPricing.scss';
import '../pricing.scss';

import type {PricingGroup} from "../../../@types/pricing";
import {FAQ, type FAQProps} from "../FAQ.tsx";
import {Launch} from "../Launch.tsx";

export function IllustrationPricing() {

    const menu : PricingGroup[] =[
        {
            title: 'PERSONNAGE',
            items: [
                {
                    content:'CHARACTER DESIGN',
                    price: '200 €',
                    description:'1 pose + focus visage',
                },
                {
                    content:'PLANCHE PERSONNAGE DESIGN',
                    price: '250 €',
                    description:'face / profil / dos',
                },
                {
                    content:'PLANCHE EXPRESSIONS',
                    price: '150 €',
                    description:'5 expressions du visage',
                },
                {
                    content:'VARIANTES DE TENUES',
                    price: '50 €',
                    description:'nouvelle tenue pour personnage existant.',
                },
            ],
            headerColor:'yellow',
        },
        {
            title: 'ILLUSTRATION',
            items: [
                {
                    content:'ILLUSTRATION PERSONNAGE AVEC FOND',
                    price: '300 €',
                    description:'Personnage + décor / environnement',
                },
                {
                    content:'ILLUSTRATION SCENIQUE',
                    price: '350 €',
                    description:'Personnage(s) + décor / environnement + composition narrative',
                },
                {
                    content:'ILLUSTRATION DE DECOR/ ENVIRONNEMENT',
                    price: '200 €',
                    description:'Scène sans personnage',
                },
                {
                    content:'DOUBLE PAGE COMPLETE',
                    price: '550 €',
                    description:'Personnage(s) + décor + composition sur double-page',
                },
            ],
            headerColor:'salmon',
        },
    ];
    const illustrationFAQ : FAQProps = {
        title:'illustration',
        content:[
            {question:'Quels sont les délais ?', answer:'Ils dépendent du volume et de l’animation. Le planning précis est confirmé après le questionnaire et le devis.'},
            {question:'Combien de révisions sont prévues ?', answer:'Le nombre de séries de retours est précisé au devis selon le périmètre retenu.'},
            {question:'Quels fichiers vais-je recevoir ?', answer:'Des fichiers optimisés pour leur usage : PNG, GIF ou formats vidéo selon les éléments statiques et animés.'},
            {question:'Est-ce compatible avec Twitch et OBS ?', answer:'Oui. Les dimensions et formats sont préparés pour les plateformes et outils indiqués dans le questionnaire, notamment Twitch et OBS.'},
            {question:'Quels sont les droits d’utilisation ?', answer:'Les droits d’utilisation pour ta chaîne et tes plateformes sont précisés clairement dans le devis.'},
        ]
    };
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
                    {menu.map((group) => (
                        <div key={group.title} className="pricing-menu__content">
                            <div  className="pricing-menu__content__header" style={{backgroundColor:`var(--${group.headerColor})`}}>
                                <h4 className="pricing-menu__content__header__title">{group.title}</h4>
                            </div>
                            <ul  className="pricing-menu__content__itemWrapper">
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
                <div className="pricing-mainOffer__attention">ATTENTION : Les tarifs varient selon la complexité graphique.</div>
            </section>
            <Launch/>
            <FAQ title={illustrationFAQ.title} content={illustrationFAQ.content}/>
        </>
    )
}