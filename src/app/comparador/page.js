'use client';
import { useState } from 'react';
import Link from 'next/link';
import { products } from '@/data/products';
import styles from './comparador.module.css';

export default function ComparadorPage() {
  const [selected, setSelected] = useState([null, null, null]);

  const handleSelect = (index, productId) => {
    const newSelected = [...selected];
    newSelected[index] = productId ? products.find(p => p.id === parseInt(productId)) : null;
    setSelected(newSelected);
  };

  const activeProducts = selected.filter(Boolean);
  const formatPrice = (p) => p.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.icon}>⚖️</span>
          <h1 className="section-title">Comparador de Capacetes</h1>
          <p className="section-subtitle">Selecione até 3 capacetes para comparar lado a lado</p>
        </div>

        <div className={styles.selectors}>
          {[0, 1, 2].map(i => (
            <div key={i} className={styles.selectorCard}>
              <select
                value={selected[i]?.id || ''}
                onChange={e => handleSelect(i, e.target.value)}
                className={styles.select}
              >
                <option value="">Selecione um capacete</option>
                {products.map(p => (
                  <option key={p.id} value={p.id}>{p.brand} - {p.name}</option>
                ))}
              </select>
              {selected[i] && (
                <div className={styles.selectedPreview}>
                  <span style={{ fontSize: '3rem', opacity: 0.3 }}>🪖</span>
                  <strong>{selected[i].name}</strong>
                  <span className={styles.previewPrice}>{formatPrice(selected[i].price)}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {activeProducts.length >= 2 && (
          <div className={styles.comparisonTable}>
            <div className={styles.compRow}>
              <div className={styles.compLabel}>Produto</div>
              {activeProducts.map(p => <div key={p.id} className={styles.compValue}><strong>{p.name}</strong></div>)}
            </div>
            <div className={styles.compRow}>
              <div className={styles.compLabel}>Marca</div>
              {activeProducts.map(p => <div key={p.id} className={styles.compValue}>{p.brand}</div>)}
            </div>
            <div className={styles.compRow}>
              <div className={styles.compLabel}>Tipo</div>
              {activeProducts.map(p => <div key={p.id} className={styles.compValue} style={{textTransform: 'capitalize'}}>{p.type}</div>)}
            </div>
            <div className={styles.compRow}>
              <div className={styles.compLabel}>Preço</div>
              {activeProducts.map(p => <div key={p.id} className={styles.compValue}><span className={styles.priceHighlight}>{formatPrice(p.price)}</span></div>)}
            </div>
            <div className={styles.compRow}>
              <div className={styles.compLabel}>Avaliação</div>
              {activeProducts.map(p => <div key={p.id} className={styles.compValue}>⭐ {p.rating} ({p.reviews})</div>)}
            </div>
            <div className={styles.compRow}>
              <div className={styles.compLabel}>Certificações</div>
              {activeProducts.map(p => (
                <div key={p.id} className={styles.compValue}>
                  <div className={styles.certList}>
                    {p.certifications.map(c => <span key={c} className="badge badge-cert">{c}</span>)}
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.compRow}>
              <div className={styles.compLabel}>Material</div>
              {activeProducts.map(p => <div key={p.id} className={styles.compValue}>{p.material}</div>)}
            </div>
            <div className={styles.compRow}>
              <div className={styles.compLabel}>Peso</div>
              {activeProducts.map(p => <div key={p.id} className={styles.compValue}>{p.weight}</div>)}
            </div>
            <div className={styles.compRow}>
              <div className={styles.compLabel}>Tamanhos</div>
              {activeProducts.map(p => <div key={p.id} className={styles.compValue}>{p.sizes.join(', ')}</div>)}
            </div>
            <div className={styles.compRow}>
              <div className={styles.compLabel}>Cores</div>
              {activeProducts.map(p => <div key={p.id} className={styles.compValue}>{p.colors.map(c => c.name).join(', ')}</div>)}
            </div>
            <div className={styles.compRow}>
              <div className={styles.compLabel}>Ideal para</div>
              {activeProducts.map(p => <div key={p.id} className={styles.compValue}>{p.bestFor.join(', ')}</div>)}
            </div>
            <div className={styles.compRow}>
              <div className={styles.compLabel}>Vida Útil</div>
              {activeProducts.map(p => <div key={p.id} className={styles.compValue}>{p.lifespan}</div>)}
            </div>
            <div className={styles.compRow}>
              <div className={styles.compLabel}></div>
              {activeProducts.map(p => (
                <div key={p.id} className={styles.compValue}>
                  <Link href={`/produto/${p.id}`} className="btn btn-primary btn-sm">Ver Produto</Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeProducts.length < 2 && (
          <div className={styles.emptyState}>
            <span style={{ fontSize: '3rem' }}>⚖️</span>
            <h3>Selecione pelo menos 2 capacetes para comparar</h3>
            <p>Use os seletores acima para escolher os capacetes que deseja comparar lado a lado.</p>
          </div>
        )}
      </div>
    </div>
  );
}
