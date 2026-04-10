'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/app/page.module.css';

export default function CategoryCard({ type }) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = (e) => {
    // Don't flip if they clicked the "Ver modelos" link
    if (e.target.closest('a')) return;
    setFlipped(prev => !prev);
  };

  return (
    <div
      className={`${styles.catCard} ${flipped ? styles.catCardFlipped : ''}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={`${type.name} — toque para ver detalhes`}
    >
      <div className={styles.catCardInner}>
        <div className={styles.catCardFront}>
          <div className={styles.catImageWrapper}>
            <Image
              src={`/types/${type.id}.png`}
              alt={type.name}
              fill
              sizes="140px"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <h3 className={styles.catName}>{type.name}</h3>
          <span className={styles.catHint}>Toque para ver mais</span>
        </div>
        <div className={styles.catCardBack}>
          <h3 className={styles.catNameBack}>{type.name}</h3>
          <p className={styles.catDesc}>{type.description}</p>
          <Link
            href={`/catalogo?tipo=${type.id}`}
            className={styles.catBtn}
            onClick={e => e.stopPropagation()}
          >
            Ver modelos →
          </Link>
        </div>
      </div>
    </div>
  );
}
