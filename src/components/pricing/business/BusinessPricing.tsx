import './businessPricing.scss'
import '../pricing.scss';
import type {PricingGroup} from "../../../@types/pricing";
import type {MainOffer as MainOfferType} from "../../../@types/mainOffer";
import {FAQ, type FAQProps} from "../FAQ.tsx";
import {MainOffer} from "../MainOffer.tsx";
import {Launch} from "../Launch.tsx";

export function BusinessPricing() {
    const menu: PricingGroup[] = [
        {
            title:'Logo',
            items: [
                {content: 'Création d’un logo personnalisé. Livrables : PNG, JPG, PDF + SVG — fond transparent + version fond clair/foncé.', price:'350 €'},
            ],
            headerColor:'lilac',
        },
        {
            title:'Illustration de marque',
            items: [
                {content: 'Illustration originale pour enrichir votre identité. Format adapté au support vu ensemble. ', price:'180 €'},
            ],
            headerColor:'yellow',
        },
        {
            title:'Illustration publicitaire',
            items: [
                {content: 'Illustration destinée à une campagne ou à la promotion d’un produit/service.', price:'250 €'},
            ],
            headerColor:'green',
        },
        {
            title:'Affiche',
            items: [
                {content: 'Création d’une affiche illustrée. Livrables : PDF prêt à l’impression + JPG/PNG pour diffusion numérique.', price:'180 €'},
            ],
            headerColor:'salmon',
        },
        {
            title:'Mascotte',
            items: [
                {content: 'Création d’un logo personnalisé. Livrables : PNG, JPG, PDF + SVG — fond transparent + version fond clair/foncé.', price:'350 €'},
            ],
            headerColor:'yellow',
        },
        {
            title:'Pattern / Motifs',
            items: [
                {content: 'Création d’un motif personnalisé et répétable. Livrables : PNG + JPG haute définition + fichier motif répétable.', price:'180 €'},
            ],
            headerColor:'lilac',
        },
    ];
    const businessOffers : MainOfferType[] = [
        {
            title:'Indentité visuelle',
            price:'dès 800 €',
            content:[
                'Logo principal',
                'Déclinaison du logo avec mockup d\'exemples',
                'Palette de couleurs',
                'Typographies',
                "Guide d'utilisation de l'identité"
            ],
            headerColor:'salmon',
        }
    ];
    const businessFAQ : FAQProps = {
        title:'business',
        content:[
            {question: 'Quels sont les délais ?', answer:'Ils dépendent du volume et de l’animation. Le planning précis est confirmé après le questionnaire et le devis.'},
            {question: 'Combien de révisions sont prévues ?', answer:'Le nombre de séries de retours est précisé au devis selon le périmètre retenu.'},
            {question: 'Quels fichiers vais-je recevoir ?', answer:'Des fichiers optimisés pour leur usage : PNG, GIF ou formats vidéo selon les éléments statiques et animés.'},
            {question: 'Est-ce compatible avec Twitch et OBS ?', answer:'Oui. Les dimensions et formats sont préparés pour les plateformes et outils indiqués dans le questionnaire, notamment Twitch et OBS.'},
            {question: 'Quels sont les droits d’utilisation ?', answer:'Les droits d’utilisation pour ta chaîne et tes plateformes sont précisés clairement dans le devis.'},
        ]
    };


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
                        {menu.map((group) => (
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
            <FAQ title={businessFAQ.title} content={businessFAQ.content}/>
        </>
    )
}