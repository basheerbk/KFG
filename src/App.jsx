import { useState, useMemo, useEffect } from 'react';
import { CATEGORIES } from './data/spots';
import { trackEvent } from './utils/analytics';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import FilterPills from './components/FilterPills';
import CategoryBlock from './components/CategoryBlock';
import Footer from './components/Footer';

export default function App() {
  const [activeCat, setActiveCat] = useState('all');
  const [query, setQuery] = useState('');

  const visibleCategories = useMemo(() => {
    if (activeCat === 'all') return CATEGORIES;
    return CATEGORIES.filter((c) => c.id === activeCat);
  }, [activeCat]);

  // Track category changes
  useEffect(() => {
    trackEvent('category_view', {
      category_id: activeCat,
      category_label: activeCat === 'all' ? 'All' : CATEGORIES.find(c => c.id === activeCat)?.label
    });
  }, [activeCat]);

  // Track searches (with small delay to avoid spamming)
  useEffect(() => {
    if (!query.trim()) return;
    const timer = setTimeout(() => {
      trackEvent('search', { search_term: query.trim() });
    }, 1000);
    return () => clearTimeout(timer);
  }, [query]);

  // Check if any result exists (for no-results state)
  const hasResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return visibleCategories.some((cat) =>
      cat.spots.some(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          (s.note || '').toLowerCase().includes(q) ||
          (s.tags || []).some((t) => t.includes(q))
      )
    );
  }, [visibleCategories, query]);

  return (
    <>
      <Hero />

      <div className="search-section">
        <SearchBar value={query} onChange={setQuery} />
      </div>

      <FilterPills active={activeCat} onSelect={setActiveCat} />

      <main className="main">
        {hasResults ? (
          visibleCategories.map((cat) => (
            <CategoryBlock key={cat.id} category={cat} query={query} />
          ))
        ) : (
          <div className="no-results">
            <h3>No spots found 😢</h3>
            <p>Try a different search term or category.</p>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
