import type {FAQ} from "../../@types/faq";

export interface FAQProps {
    title?: string;
    content: FAQ[];
}

export function FAQ({title, content}: FAQProps) {


    return (
        <section className="pricing-faq">
            <h3 className="pricing-faq__title">FAQ {title ? title : ''}</h3>
            <div className="pricing-faq__wrapper">
                {content.map((QA , i) => (
                    <div className="pricing-faq__item" key={i}>
                        <p  className="pricing-faq__item__question">{QA.question}</p>
                        <p  className="pricing-faq__item__answer">{QA.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}