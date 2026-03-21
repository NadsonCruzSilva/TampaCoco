import Link from 'next/link';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : null;

  const formatPrice = (price) =>
    price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const stars = '★'.repeat(Math.floor(product.rating)) +
    (product.rating % 1 >= 0.5 ? '½' : '') +
    '☆'.repeat(5 - Math.ceil(product.rating));

  return (
    <Link href={`/produto/${product.id}`} className={styles.productCard}>
      <div className={styles.imageWrap}>
        <span className={styles.placeholder}>🪖</span>
        <div className={styles.badges}>
          {product.certifications.map(cert => (
            <span key={cert} className="badge badge-cert">{cert}</span>
          ))}
        </div>
        {discount && (
          <span className={styles.discount}>-{discount}%</span>
        )}
      </div>
      <div className={styles.info}>
        <span className={styles.brandName}>{product.brand}</span>
        <h3 className={styles.productName}>{product.name}</h3>
        <div className={styles.ratingRow}>
          <span className="stars">{stars}</span>
          <span className={styles.ratingValue}>{product.rating}</span>
          <span className={styles.reviewCount}>({product.reviews})</span>
        </div>
        <div className={styles.priceRow}>
          <span className={styles.price}>{formatPrice(product.price)}</span>
          {product.oldPrice && (
            <span className={styles.oldPrice}>{formatPrice(product.oldPrice)}</span>
          )}
        </div>
        <span className={styles.installment}>
          ou 12x de {formatPrice(product.price / 12)}
        </span>
      </div>
    </Link>
  );
}
