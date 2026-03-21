'use client';
import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { products, types, brands } from '@/data/products';
import styles from './catalogo.module.css';

export default function CatalogoPage() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get('tipo') || '';

  const [selectedType, setSelectedType] = useState(initialType);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedCerts, setSelectedCerts] = useState([]);
  const [sortBy, setSortBy] = useState('featured');
  const [search, setSearch] = useState('');

  const allCerts = ["INMETRO", "DOT", "ECE", "SNELL", "SHARP"];

  const toggleCert = (cert) => {
    setSelectedCerts(prev =>
      prev.includes(cert) ? prev.filter(c => c !== cert) : [...prev, cert]
    );
  };

  const filtered = useMemo(() => {
    let result = products.filter(p => {
      if (selectedType && p.type !== selectedType) return false;
      if (selectedBrand && p.brand !== selectedBrand) return false;
      if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
      if (selectedCerts.length > 0 && !selectedCerts.every(c => p.certifications.includes(c))) return false;
      if (search) {
        const q = search.toLowerCase();
        if (!p.name.toLowerCase().includes(q) && !p.brand.toLowerCase().includes(q)) return false;
      }
      return true;
    });

    switch (sortBy) {
      case 'price-asc': result.sort((a, b) => a.price - b.price); break;
      case 'price-desc': result.sort((a, b) => b.price - a.price); break;
      case 'rating': result.sort((a, b) => b.rating - a.rating); break;
      case 'reviews': result.sort((a, b) => b.reviews - a.reviews); break;
      default: result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    return result;
  }, [selectedType, selectedBrand, priceRange, selectedCerts, sortBy, search]);

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <h1 className="section-title">Catálogo de Capacetes</h1>
            <p className="section-subtitle" style={{ marginBottom: 0 }}>
              {filtered.length} capacete{filtered.length !== 1 ? 's' : ''} encontrado{filtered.length !== 1 ? 's' : ''}
            </p>
          </div>
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="🔍 Buscar capacete..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="input"
            />
          </div>
        </div>

        <div className={styles.layout}>
          <aside className={styles.filters}>
            <div className={styles.filterSection}>
              <h3 className={styles.filterTitle}>Tipo</h3>
              <div className={styles.filterOptions}>
                <button
                  className={`${styles.filterBtn} ${!selectedType ? styles.filterBtnActive : ''}`}
                  onClick={() => setSelectedType('')}
                >Todos</button>
                {types.map(t => (
                  <button
                    key={t.id}
                    className={`${styles.filterBtn} ${selectedType === t.id ? styles.filterBtnActive : ''}`}
                    onClick={() => setSelectedType(t.id)}
                  >{t.icon} {t.name}</button>
                ))}
              </div>
            </div>

            <div className={styles.filterSection}>
              <h3 className={styles.filterTitle}>Marca</h3>
              <div className={styles.filterOptions}>
                <button
                  className={`${styles.filterBtn} ${!selectedBrand ? styles.filterBtnActive : ''}`}
                  onClick={() => setSelectedBrand('')}
                >Todas</button>
                {brands.map(b => (
                  <button
                    key={b}
                    className={`${styles.filterBtn} ${selectedBrand === b ? styles.filterBtnActive : ''}`}
                    onClick={() => setSelectedBrand(b)}
                  >{b}</button>
                ))}
              </div>
            </div>

            <div className={styles.filterSection}>
              <h3 className={styles.filterTitle}>Certificações</h3>
              <div className={styles.filterOptions}>
                {allCerts.map(c => (
                  <button
                    key={c}
                    className={`${styles.filterBtn} ${selectedCerts.includes(c) ? styles.filterBtnActive : ''}`}
                    onClick={() => toggleCert(c)}
                  >{c}</button>
                ))}
              </div>
            </div>

            <div className={styles.filterSection}>
              <h3 className={styles.filterTitle}>Faixa de Preço</h3>
              <div className={styles.priceInputs}>
                <input
                  type="number"
                  placeholder="Min"
                  value={priceRange[0] || ''}
                  onChange={e => setPriceRange([Number(e.target.value) || 0, priceRange[1]])}
                  className="input"
                />
                <span>até</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={priceRange[1] || ''}
                  onChange={e => setPriceRange([priceRange[0], Number(e.target.value) || 5000])}
                  className="input"
                />
              </div>
            </div>
          </aside>

          <div className={styles.results}>
            <div className={styles.sortBar}>
              <span className={styles.sortLabel}>Ordenar por:</span>
              <select value={sortBy} onChange={e => setSortBy(e.target.value)} className={styles.sortSelect}>
                <option value="featured">Destaques</option>
                <option value="price-asc">Menor preço</option>
                <option value="price-desc">Maior preço</option>
                <option value="rating">Melhor avaliação</option>
                <option value="reviews">Mais avaliados</option>
              </select>
            </div>

            {filtered.length > 0 ? (
              <div className={styles.grid}>
                {filtered.map(p => <ProductCard key={p.id} product={p} />)}
              </div>
            ) : (
              <div className={styles.empty}>
                <span style={{ fontSize: '3rem' }}>🔍</span>
                <h3>Nenhum capacete encontrado</h3>
                <p>Tente ajustar os filtros ou buscar por outro termo.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
