import { Search } from 'lucide-react';

export default function SearchBar({ value, onChange }) {
    return (
        <div className="search-wrap">
            <span className="search-icon">
                <Search size={18} strokeWidth={1.8} />
            </span>
            <input
                id="searchInput"
                type="text"
                className="search-input"
                placeholder="Search spots, dishes, vibes…"
                autoComplete="off"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}
