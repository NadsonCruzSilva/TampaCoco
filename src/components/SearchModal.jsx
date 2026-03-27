'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { products } from '@/data/products';
import { blogPosts } from '@/data/blog';
import { Search, X, HardHat, FileText } from '@/components/Icon';
import styles from './SearchModal.module.css';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      setQuery('');
    }
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();
  
  const productResults = q.length > 1 
    ? products.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.type.toLowerCase().includes(q)).slice(0, 4)
    : [];
    
  const blogResults = q.length > 1
    ? blogPosts.filter(b => b.title.toLowerCase().includes(q) || b.excerpt.toLowerCase().includes(q)).slice(0, 3)
    : [];

  const hasResults = productResults.length > 0 || blogResults.length > 0;
  const isSearching = q.length > 1;

  const formatPrice = (p) => p.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.searchBar}>
          <Search size={20} className={styles.searchIcon} />
          <input
            ref={inputRef}
            type="text"
            className={styles.input}
            placeholder="Buscar capacetes, marcas, posts..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className={styles.closeBtn} onClick={onClose}><X size={20} /></button>
        </div>

        <div className={styles.resultsArea}>
          {!isSearching && (
            <div className={styles.emptyState}>
              <Search size={48} style={{ opacity: 0.1, marginBottom: '1rem' }} />
              <p>O que você está procurando hoje?</p>
              <div className={styles.suggestions}>
                <button onClick={() => setQuery('Capacete fechado')}>Capacete fechado</button>
                <button onClick={() => setQuery('LS2')}>LS2</button>
                <button onClick={() => setQuery('Tamanho')}>Tamanho</button>
                <button onClick={() => setQuery('INMETRO')}>INMETRO</button>
              </div>
            </div>
          )}

          {isSearching && !hasResults && (
            <div className={styles.emptyState}>
              <p>Nenhum resultado encontrado para &quot;<strong>{query}</strong>&quot;</p>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Tente usar palavras mais genéricas.</span>
            </div>
          )}

          {isSearching && hasResults && (
            <div className={styles.resultsGroup}>
              {productResults.length > 0 && (
                <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>
                    <HardHat size={16} /> Produtos
                  </h3>
                  <div className={styles.productList}>
                    {productResults.map(p => (
                      <Link href={`/produto/${p.id}`} key={p.id} className={styles.productItem} onClick={onClose}>
                        <div className={styles.productImg} style={{ backgroundImage: `url(${p.image})` }}></div>
                        <div className={styles.productInfo}>
                          <span className={styles.productBrand}>{p.brand}</span>
                          <span className={styles.productName}>{p.name}</span>
                          <span className={styles.productPrice}>{formatPrice(p.price)}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {blogResults.length > 0 && (
                <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>
                    <FileText size={16} /> Blog & Artigos
                  </h3>
                  <div className={styles.blogList}>
                    {blogResults.map(b => (
                      <Link href={`/blog/${b.slug}`} key={b.id} className={styles.blogItem} onClick={onClose}>
                        <strong className={styles.blogItemTitle}>{b.title}</strong>
                        <span className={styles.blogItemExcerpt}>{b.excerpt.substring(0, 80)}...</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
