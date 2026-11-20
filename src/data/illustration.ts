import type {PricingGroup} from "../@types/pricing";
import type {FAQ} from "../@types/faq";

export const illustrationMenu: PricingGroup[] = [
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

export const illustrationFAQ: FAQ[] = [
    {question:'Quels sont les délais ?', answer:'Ils dépendent du volume et de l’animation. Le planning précis est confirmé après le questionnaire et le devis.'},
    {question:'Combien de révisions sont prévues ?', answer:'Le nombre de séries de retours est précisé au devis selon le périmètre retenu.'},
    {question:'Quels fichiers vais-je recevoir ?', answer:'Des fichiers optimisés pour leur usage : PNG, GIF ou formats vidéo selon les éléments statiques et animés.'},
    {question:'Est-ce compatible avec Twitch et OBS ?', answer:'Oui. Les dimensions et formats sont préparés pour les plateformes et outils indiqués dans le questionnaire, notamment Twitch et OBS.'},
    {question:'Quels sont les droits d’utilisation ?', answer:'Les droits d’utilisation pour ta chaîne et tes plateformes sont précisés clairement dans le devis.'},
];
