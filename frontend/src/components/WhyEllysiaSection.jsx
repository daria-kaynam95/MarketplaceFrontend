import './WhyEllysiaSection.css';
import perfumeImg from '../assets/WhyEllysia.png';

export default function WhyEllysiaSection() {
    return (
        <section className="why-ellysia">
            <h2 className="why-ellysia-title">Why Ellysia?</h2>

            <div className="why-ellysia-content">
                <ul className="why-ellysia-list left">
                    <li>Multi-Brand Comparison Tool</li>
                    <li>Fragrance Layering Tips</li>
                    <li>Mobile App With Bonuses</li>
                </ul>

                <div className="why-ellysia-perfume-card">
                    <img src={perfumeImg} alt="Perfume Bottle" className="why-ellysia-perfume-img" />
                </div>

                <ul className="why-ellysia-list right">
                    <li>Fast And Reliable Shipping</li>
                    <li>New Arrivals Every Month</li>
                    <li>Real-Time Order Tracking</li>
                </ul>
            </div>
        </section>
    );
}

