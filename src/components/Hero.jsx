import { MapPin, Utensils, Tag, Map } from 'lucide-react';

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-badge">
                <span className="hero-badge-icon"><MapPin size={12} strokeWidth={2.5} /></span>
                Kozhikode · Calicut · Kerala
            </div>
            <h1 className="hero-title">
                The Food<br />Guide
            </h1>
            <p className="hero-subtitle-ml">കോഴിക്കോടിന്റെ സ്വാദ്</p>
            <p className="hero-sub">
                A lovingly curated map of Kozhikode&apos;s finest — from dawn puttu
                kaadas to midnight mandhi spots and everything in between.
            </p>
            <div className="hero-stats">
                <div className="stat">
                    <span className="stat-icon"><Utensils size={18} strokeWidth={1.6} /></span>
                    <span className="stat-num">80+</span>
                    <span className="stat-label">Spots</span>
                </div>
                <div className="stat">
                    <span className="stat-icon"><Tag size={18} strokeWidth={1.6} /></span>
                    <span className="stat-num">11</span>
                    <span className="stat-label">Categories</span>
                </div>
                <div className="stat">
                    <span className="stat-icon"><Map size={18} strokeWidth={1.6} /></span>
                    <span className="stat-num">1</span>
                    <span className="stat-label">City</span>
                </div>
            </div>
        </section>
    );
}
