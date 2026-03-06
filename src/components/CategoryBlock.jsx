import Icon from './Icon';
import SpotCard from './SpotCard';

export default function CategoryBlock({ category, query }) {
    const q = query.trim().toLowerCase();
    const spots = q
        ? category.spots.filter(
            (s) =>
                s.name.toLowerCase().includes(q) ||
                (s.note || '').toLowerCase().includes(q) ||
                (s.tags || []).some((t) => t.includes(q))
        )
        : category.spots;

    if (!spots.length) return null;

    return (
        <section className="category-block">
            <div className="category-header">
                <div className="cat-icon">
                    <Icon name={category.icon} size={22} color={category.accent} strokeWidth={1.6} />
                </div>
                <div>
                    <h2 className="cat-title" style={{ color: category.accent }}>
                        {category.title}
                    </h2>
                </div>
                <span className="cat-count">
                    {spots.length} spot{spots.length !== 1 ? 's' : ''}
                </span>
            </div>
            <div className="cards-grid">
                {spots.map((spot) => (
                    <SpotCard key={spot.name} spot={spot} accent={category.accent} />
                ))}
            </div>
        </section>
    );
}
