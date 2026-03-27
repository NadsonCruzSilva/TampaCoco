'use client';
import Link from 'next/link';
import { useWishlist } from '@/context/WishlistContext';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Heart } from '@/components/Icon';
import styles from './favoritos.module.css';

export default function FavoritosPage() {
  const { items } = useWishlist();
  const favoriteProducts = products.filter(p => items.includes(p.id));

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.icon}><Heart size={36} strokeWidth={1.5} /></div>
          <h1 className="section-title">Meus Favoritos</h1>
          <p className="section-subtitle">
            {favoriteProducts.length > 0
              ? `Você tem ${favoriteProducts.length} ${favoriteProducts.length === 1 ? 'capacete salvo' : 'capacetes salvos'}`
              : 'Salve os capacetes que mais gostou para comparar depois'}
          </p>
        </div>

        {favoriteProducts.length > 0 ? (
          <div className={styles.grid}>
            {favoriteProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <Heart size={64} strokeWidth={1} style={{ opacity: 0.2 }} />
            <h2>Nenhum favorito ainda</h2>
            <p>Clique no ♡ nos produtos para salvá-los aqui.</p>
            <Link href="/catalogo" className="btn btn-primary btn-lg" style={{ marginTop: '1.5rem' }}>
              Explorar Catálogo →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
