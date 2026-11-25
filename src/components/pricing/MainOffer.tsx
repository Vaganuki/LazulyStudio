import type {MainOffer} from "../../@types/main-offer";

export interface MainOfferProps {
    data: MainOffer[];
}

export function MainOffer({data} : MainOfferProps) {
    return (
        <div  className="pricing-main-offer__wrapper">
            {data.map((offer: MainOffer) => (
                <div  className="pricing-main-offer__item" key={offer.title}>
                    <div  className="pricing-main-offer__item__header" style={{backgroundColor:`var(--${offer.headerColor})`}}>
                        <h4  className="pricing-main-offer__item__header__title">{offer.title}</h4>
                        <span  className="pricing-main-offer__item__header__price">{offer.price}</span>
                    </div>
                    <ul  className="pricing-main-offer__content">
                        {offer.content.map((c, idx) => {
                            return (
                                <li  className="pricing-main-offer__content__data" key={idx}>{c.startsWith('offert') ? <b>{c}</b> :( <>{c}</> )}</li>
                            )
                        })}
                    </ul>
                </div>
            ))}
        </div>
    )
}