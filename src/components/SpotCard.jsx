import { trackEvent } from '../utils/analytics';

export default function SpotCard({ spot, accent }) {
    return (
        <article
            className="card"
            style={{ '--card-accent': accent }}
            onClick={() => trackEvent('spot_click', {
                spot_name: spot.name,
                spot_tags: spot.tags?.join(', ')
            })}
        >
            <h3 className="card-name">{spot.name}</h3>
            {spot.note && <p className="card-note">{spot.note}</p>}
            {spot.tags?.length > 0 && (
                <div className="card-tags">
                    {spot.tags.map((tag) => (
                        <span
                            key={tag}
                            className="tag"
                            style={{
                                background: `${accent}22`,
                                color: accent,
                                border: `1px solid ${accent}44`,
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </article>
    );
}
