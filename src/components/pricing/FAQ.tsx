import type {FAQ} from "../../@types/faq";

export interface FAQProps {
    title?: string;
    content: FAQ[];
}

export function FAQ({title, content}: FAQProps) {


    return (
        <section className="pricing-FAQ">
            <h3 className="pricing-FAQ__title">FAQ {title ? title : ''}</h3>
            <div className="pricing-FAQ__wrapper">
                {content.map((QA , i) => (
                    <div className="pricing-FAQ__item" key={i}>
                        <p  className="pricing-FAQ__item__question">{QA.question}</p>
                        <p  className="pricing-FAQ__item__answer">{QA.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}