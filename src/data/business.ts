import type {PricingGroup} from "../@types/pricing";
import type {MainOffer} from "../@types/mainOffer";
import type {FAQ} from "../@types/faq";

export const businessMenu: PricingGroup[] = [
    {
        title:'Logo',
        items: [
            {content: 'Création d’un logo personnalisé. Livrables : PNG, JPG, PDF + SVG — fond transparent + version fond clair/foncé.', price:'350 €'},
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
            {content: 'Création d’une affiche illustrée. Livrables : PDF prêt à l’impression + JPG/PNG pour diffusion numérique.', price:'180 €'},
        ],
        headerColor:'salmon',
    },
    {
        title:'Mascotte',
        items: [
            {content: 'Création d’un logo personnalisé. Livrables : PNG, JPG, PDF + SVG — fond transparent + version fond clair/foncé.', price:'350 €'},
        ],
        headerColor:'yellow',
    },
    {
        title:'Pattern / Motifs',
        items: [
            {content: 'Création d’un motif personnalisé et répétable. Livrables : PNG + JPG haute définition + fichier motif répétable.', price:'180 €'},
        ],
        headerColor:'lilac',
    },
];

export const businessOffers: MainOffer[] = [
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

export const businessFAQ: FAQ[] = [
    {question: 'Quels sont les délais ?', answer:'Ils dépendent du volume et de l’animation. Le planning précis est confirmé après le questionnaire et le devis.'},
    {question: 'Combien de révisions sont prévues ?', answer:'Le nombre de séries de retours est précisé au devis selon le périmètre retenu.'},
    {question: 'Quels fichiers vais-je recevoir ?', answer:'Des fichiers optimisés pour leur usage : PNG, GIF ou formats vidéo selon les éléments statiques et animés.'},
    {question: 'Est-ce compatible avec Twitch et OBS ?', answer:'Oui. Les dimensions et formats sont préparés pour les plateformes et outils indiqués dans le questionnaire, notamment Twitch et OBS.'},
    {question: 'Quels sont les droits d’utilisation ?', answer:'Les droits d’utilisation pour ta chaîne et tes plateformes sont précisés clairement dans le devis.'},
];
