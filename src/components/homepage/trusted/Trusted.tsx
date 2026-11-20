import './trusted.scss'
import {trustedItems} from "../../../data/homepage.ts";

export function Trusted() {

    return (
        <section className="trusted">
            <h2>ILS M'ONT FAIT CONFIANCE</h2>
            <div className="trusted__container">
                {trustedItems.map((item) => (
                    <div className="trusted__item" key={item.description} style={{backgroundColor:`var(--${item.mainColor})`}}>
                        <div className="trusted__item__category cartouche" style={{backgroundColor:`var(--${item.secondaryColor})`}}>{item.category}</div>
                        <h3 className="trusted__item__title">{item.title}</h3>
                        <p className="trusted__item__text">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}