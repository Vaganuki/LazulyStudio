import type {HotOffer, TrustedItem} from "../@types/homepage";

export const hotOffers: HotOffer[] = [
    {
        category: 'Streaming',
        color: "lilac",
        name: 'Pack pro',
        price: 820,
        description: '4 scènes overlay  • bannière • photo profil • 8 emotes • 6 alertes et bien plus',
        duration: '3-4 semaines',
        pic: '/visuels/maenyl-4-card.jpg'
    },
    {
        category: 'business',
        color: "salmon",
        name: 'Identité visuelle',
        price: 800,
        description: 'Logo principal + variantes • Palette & typographies • guide d’utilisation',
        duration: '4–5 semaines • 2 séries de révisions',
        pic: '/visuels/maenyl-4-card.jpg'
    },
];

export const trustedItems: TrustedItem[] = [
    {category: 'BUSINESS', title: 'BLA BLA BLA', description: 'Natalia, fondatrice du salon de thé Bergamotte', mainColor:'salmon', secondaryColor:'lilac'},
    {category: 'STREAMING', title: 'BLA BLA BLA', description: 'Hedikka, VTubeuse Twitch', mainColor:'lilac', secondaryColor:'green'},
    {category: 'Illustration', title: 'BLA BLA BLA', description: 'Fabien, auteur de Dark Fantasy', mainColor:'green', secondaryColor:'salmon'},
];
