import type {PricingGroup} from "../@types/pricing";
import type {MainOffer} from "../@types/main-offer";
import type {FAQ} from "../@types/faq";

export const streamingMenu: PricingGroup[] = [
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
];

export const streamingOffers: MainOffer[] = [
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

export const streamingFAQ: FAQ[] = [
    {question:'Quels sont les délais ?', answer:'Ils dépendent du volume et de l’animation. Le planning précis est confirmé après le questionnaire et le devis.'},
    {question:'Combien de révisions sont prévues ?', answer:'Le nombre de séries de retours est précisé au devis selon le périmètre retenu.'},
    {question:'Quels fichiers vais-je recevoir ?', answer:'Des fichiers optimisés pour leur usage : PNG, GIF ou formats vidéo selon les éléments statiques et animés.'},
    {question:'Est-ce compatible avec Twitch et OBS ?', answer:'Oui. Les dimensions et formats sont préparés pour les plateformes et outils indiqués dans le questionnaire, notamment Twitch et OBS.'},
    {question:'Quels sont les droits d’utilisation ?', answer:'Les droits d’utilisation pour ta chaîne et tes plateformes sont précisés clairement dans le devis.'},
];
