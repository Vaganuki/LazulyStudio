import '../pricing.scss';


import type {PricingGroup} from "../../../@types/pricing";
import {FAQ, type FAQProps} from "../FAQ.tsx";
import {Launch} from "../Launch.tsx";
import {MainOffer} from "../MainOffer.tsx";
import type {MainOffer as MainOfferType} from "../../../@types/mainOffer";

export function StreamingPricing(){

    const menu: PricingGroup[] = [
        {
            title: 'Intro/Outro/pause',
            items: [
                {content: 'Page simple (titre)', price: '60 €'},
                {content: 'Page complexe (décor/perso/mascotte)', price: '100 €'},
                {content: 'Page animée', price: 'sur devis'},
            ],
            headerColor: 'lilac',
        },
        {
            title: 'Packs de pages',
            items: [
                {content: 'Pack Twin - deux visuels identiques', price: '-10 %'},
                {content: 'Pack Triplet - trois visuels identiques', price: '-20 %'},
                {content: 'Pack Duo - deux visuels différents', price: '-10 %'},
                {content: 'Pack Trio - trois visuels différents', price: '-20 %'},
            ],
            headerColor: 'yellow',
        },
        {
            title: 'Visuels en live',
            items: [
                {content: 'Cadre caméra x3 (16:9 / 4:3 / 1:1)', price: '30 €'},
                {content: 'Espace tchat (cadre seul, sans coding de tchat)', price: '30 €'},
                {content: 'Overlay Live', price: '70 €'},
                {content: 'Cadre socials', price: '20 €'},
                {content: 'Pack Overlay complet', price: '-20 %'},
                {content: 'Animation', price: 'sur devis'},
            ],
            headerColor: 'green',
        },
        {
            title: 'Visuels de chaine',
            items: [
                {content: '6 panels de titre', price: '35 €'},
                {content: '6 panels XL', price: '50 €'},
                {content: 'Bannière', price: '60 €'},
                {content: 'Photo de profil', price: '50 €'},
                {content: 'Pack Visuel complet', price: '-20 %'},
            ],
            headerColor: 'salmon',
        },
        {
            title: 'Emotes et alertes',
            items: [
                {content: '1 emote ou alerte statique', price: '20 €'},
                {content: '1 emote ou alerte animée', price: '35 €'},
                {content: '5 et plus', price: '-20 %'},
            ],
            headerColor: 'yellow',
        },
        {
            title: 'Badges abonnés',
            items: [
                {content: '1 badge', price: '20 €'},
                {content: 'Pack 3 badges', price: '50 €'},
                {content: 'Pack 6 badges', price: '90 €'},
                {content: 'Pack 12 badges', price: '160 €'},
                {content: 'Variante de couleur à partir d\'une même base', price: '+5€ / variante'},
            ],
            headerColor: 'lilac',
        },
    ]

    const streamingOffers : MainOfferType[] = [
        {
            title:'Pack débutant',
            price:'dès 400 €',
            content:[
                'Intro / Outro identiques',
                'Overlay live',
                'Cadre caméra',
                'Espace tchat',
                'Cadre socials',
                'Panels',
                'Bannière',
                'Photo de profil',
                '3 emotes statiques',
                '2 alertes statiques',
            ],
            headerColor: 'yellow',
        },
        {
            title:'Pack Essentiel',
            price:'dès 650 €',
            content:[
                'Intro / Outro / Pause identiques',
                'Overlay live',
                'Cadre caméra',
                'Espace tchat',
                'Cadre socials',
                'Panels',
                'Bannière',
                'Photo de profil',
                '5 emotes statiques',
                '4 alertes statiques',
                '6 badges abonnés identiques, couleurs différentes',
            ],
            headerColor: 'green',
        },
        {
            title:'Pack Pro',
            price:'dès 820 €',
            content:[
                'Intro / Outro / Pause différents',
                'Overlay live',
                'Cadre caméra',
                'Espace tchat',
                'Cadre socials',
                'Panels',
                'Bannière',
                'Photo de profil',
                '8 emotes: 4 statiques + 4 animées',
                '6 alertes animées',
                '6 badges abonnés différents',
            ],
            headerColor: 'lilac',
        },
        {
            title:'Pack Ultime',
            price:'dès 1090 €',
            content:[
                'Intro / Outro / Pause différents',
                'Overlay live',
                'Cadre caméra',
                'Espace tchat',
                'Cadre socials',
                'Panels',
                'Bannière',
                'Photo de profil',
                'Pack Overlay Complet',
                '10 emotes: 5 statiques + 5 animées',
                '8 alertes animées',
                '12 badges abonnés différents',
                'offert: écran offline et mascotte'
            ],
            headerColor: 'salmon',
        },
    ];

    const streamFAQ : FAQProps = {
        title: 'streaming',
        content: [
            {question:'Quels sont les délais ?', answer:'Ils dépendent du volume et de l’animation. Le planning précis est confirmé après le questionnaire et le devis.'},
            {question:'Combien de révisions sont prévues ?', answer:'Le nombre de séries de retours est précisé au devis selon le périmètre retenu.'},
            {question:'Quels fichiers vais-je recevoir ?', answer:'Des fichiers optimisés pour leur usage : PNG, GIF ou formats vidéo selon les éléments statiques et animés.'},
            {question:'Est-ce compatible avec Twitch et OBS ?', answer:'Oui. Les dimensions et formats sont préparés pour les plateformes et outils indiqués dans le questionnaire, notamment Twitch et OBS.'},
            {question:'Quels sont les droits d’utilisation ?', answer:'Les droits d’utilisation pour ta chaîne et tes plateformes sont précisés clairement dans le devis.'},
         ]
    }

    return (
        <>
            <section>
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
                        {menu.map((group) => (
                            <div key={group.title} className="pricing-menu__content">
                                <div  className="pricing-menu__content__header" style={{backgroundColor:`var(--${group.headerColor})`}}>
                                    <h4 className="pricing-menu__content__header__title">{group.title}</h4>
                                </div>
                                <ul  className="pricing-mainOffer__menu__content__itemWrapper">
                                    {group.items.map(item => (
                                        <li className="pricing-mainOffer__menu__content__item" key={item.content}>
                                            <span className="pricing-mainOffer__menu__content__item__desc">{item.content}</span>
                                            <span className="pricing-mainOffer__menu__content__item__price">{item.price}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            </section>
            <Launch/>
            <FAQ title={streamFAQ.title} content={streamFAQ.content} />
        </>
    )
}