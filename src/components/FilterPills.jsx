import Icon from './Icon';
import { CATEGORIES } from '../data/spots';
import { trackEvent } from '../utils/analytics';
import { MapPin } from 'lucide-react';

const ALL_OPTION = { id: 'all', label: 'All Spots', icon: 'LayoutGrid' };
const OPTIONS = [ALL_OPTION, ...CATEGORIES];

export default function FilterPills({ active, onSelect }) {
    return (
        <div className="filters-section">
            <p className="filters-label">Browse by category</p>
            <div className="pills" role="tablist" aria-label="Food categories">
                {OPTIONS.map((opt) => (
                    <button
                        key={opt.id}
                        role="tab"
                        aria-selected={active === opt.id}
                        className={`pill${active === opt.id ? ' active' : ''}`}
                        onClick={() => {
                            onSelect(opt.id);
                            trackEvent('category_click', {
                                category_id: opt.id,
                                category_name: opt.label
                            });
                        }}
                    >
                        <span className="pill-icon">
                            <Icon name={opt.icon} size={14} strokeWidth={2} />
                        </span>
                        {opt.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
