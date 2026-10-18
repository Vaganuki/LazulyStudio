import type {MainOffer} from "../../@types/mainOffer";

export interface MainOfferProps {
    data: MainOffer[];
}

export function MainOffer({data} : MainOfferProps) {
    return (
        <div  className="pricing-mainOffer__wrapper">
            {data.map((offer: MainOffer) => (
                <div  className="pricing-mainOffer__item">
                    <div  className="pricing-mainOffer__item__header" style={{backgroundColor:`var(--${offer.headerColor})`}}>
                        <h4  className="pricing-mainOffer__item__header__title">{offer.title}</h4>
                        <span  className="pricing-mainOffer__item__header__price">{offer.price}</span>
                    </div>
                    <ul  className="pricing-mainOffer__content">
                        {offer.content.map((c, idx) => {
                            return (
                                <li  className="pricing-mainOffer__content__data" key={idx}>{c.startsWith('offert') ? <b>{c}</b> :( <>{c}</> )}</li>
                            )
                        })}
                    </ul>
                </div>
            ))}
        </div>
    )
}