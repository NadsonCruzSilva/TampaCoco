'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getProductById } from '@/data/products';
import { getCertificationById } from '@/data/certifications';
import { useCart } from '@/context/CartContext';
import styles from './produto.module.css';

export default function ProductPage() {
  const params = useParams();
  const product = getProductById(params.id);
  const { addItem } = useCart();

  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="container section" style={{ textAlign: 'center' }}>
        <h1>Produto não encontrado</h1>
        <Link href="/catalogo" className="btn btn-primary" style={{ marginTop: '1rem' }}>Voltar ao catálogo</Link>
      </div>
    );
  }

  const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : null;
  const formatPrice = (p) => p.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const handleAdd = () => {
    if (!selectedSize) return;
    addItem(product, product.colors[selectedColor].name, selectedSize, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className={styles.page}>
      <div className="container">
        <nav className={styles.breadcrumb}>
          <Link href="/">Home</Link> / <Link href="/catalogo">Catálogo</Link> / <span>{product.name}</span>
        </nav>

        <div className={styles.layout}>
          <div className={styles.gallery}>
            <div className={styles.mainImage} style={{ position: 'relative', width: '100%', minHeight: '400px' }}>
              <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'contain', padding: '2rem' }} priority />
              {discount && <span className={styles.discountBadge}>-{discount}%</span>}
            </div>
          </div>

          <div className={styles.info}>
            <div className={styles.certBadges}>
              {product.certifications.map(cert => (
                <span key={cert} className="badge badge-cert">{cert}</span>
              ))}
            </div>

            <span className={styles.brand}>{product.brand}</span>
            <h1 className={styles.name}>{product.name}</h1>

            <div className={styles.ratingRow}>
              <span className="stars">{'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}</span>
              <span className={styles.ratingValue}>{product.rating}</span>
              <span className={styles.reviewCount}>({product.reviews} avaliações)</span>
            </div>

            <div className={styles.priceBlock}>
              {product.oldPrice && <span className={styles.oldPrice}>{formatPrice(product.oldPrice)}</span>}
              <span className={styles.price}>{formatPrice(product.price)}</span>
              <span className={styles.installment}>ou 12x de {formatPrice(product.price / 12)} sem juros</span>
              <span className={styles.pix}>💚 {formatPrice(product.price * 0.9)} no Pix (10% off)</span>
            </div>

            <div className={styles.optionSection}>
              <h3 className={styles.optionTitle}>Cor</h3>
              <div className={styles.colorOptions}>
                {product.colors.map((color, i) => (
                  <button
                    key={i}
                    className={`${styles.colorBtn} ${selectedColor === i ? styles.colorBtnActive : ''}`}
                    onClick={() => setSelectedColor(i)}
                    title={color.name}
                  >
                    <span className={styles.colorSwatch} style={{ background: color.hex }}></span>
                    <span className={styles.colorName}>{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.optionSection}>
              <div className={styles.sizeHeader}>
                <h3 className={styles.optionTitle}>Tamanho</h3>
                <Link href="/helmsize" className={styles.sizeGuide}>📐 Guia de Tamanhos</Link>
              </div>
              <div className={styles.sizeOptions}>
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={`${styles.sizeBtn} ${selectedSize === size ? styles.sizeBtnActive : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >{size}</button>
                ))}
              </div>
            </div>

            <div className={styles.addToCart}>
              <div className={styles.quantityControl}>
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <button
                className={`btn btn-primary btn-lg ${styles.addBtn}`}
                onClick={handleAdd}
                disabled={!selectedSize}
              >
                {added ? '✓ Adicionado!' : '🛒 Adicionar ao Carrinho'}
              </button>
            </div>
            {!selectedSize && <p className={styles.sizeWarning}>⚠️ Selecione um tamanho</p>}

            <div className={styles.benefits}>
              <div className={styles.benefit}>🚚 Frete grátis acima de R$ 299</div>
              <div className={styles.benefit}>🔄 Troca grátis em até 7 dias</div>
              <div className={styles.benefit}>🛡️ Garantia do fabricante</div>
              <div className={styles.benefit}>💳 Até 12x sem juros</div>
            </div>
          </div>
        </div>

        <div className={styles.details}>
          <div className={styles.detailCard}>
            <h2 className={styles.detailTitle}>Descrição</h2>
            <p className={styles.detailText}>{product.description}</p>
          </div>

          <div className={styles.detailCard}>
            <h2 className={styles.detailTitle}>Características</h2>
            <ul className={styles.featureList}>
              {product.features.map((f, i) => (
                <li key={i}>✓ {f}</li>
              ))}
            </ul>
          </div>

          <div className={styles.detailCard}>
            <h2 className={styles.detailTitle}>Ficha Técnica</h2>
            <div className={styles.specTable}>
              <div className={styles.specRow}><span>Marca</span><span>{product.brand}</span></div>
              <div className={styles.specRow}><span>Material</span><span>{product.material}</span></div>
              <div className={styles.specRow}><span>Peso</span><span>{product.weight}</span></div>
              <div className={styles.specRow}><span>Tipo</span><span style={{textTransform:'capitalize'}}>{product.type}</span></div>
              <div className={styles.specRow}><span>Vida Útil</span><span>{product.lifespan}</span></div>
              <div className={styles.specRow}><span>Certificações</span><span>{product.certifications.join(', ')}</span></div>
            </div>
          </div>

          <div className={styles.detailCard}>
            <h2 className={styles.detailTitle}>🛡️ Certificações de Segurança</h2>
            <div className={styles.certDetails}>
              {product.certifications.map(certId => {
                const cert = getCertificationById(certId);
                if (!cert) return null;
                return (
                  <div key={certId} className={styles.certItem}>
                    <div className={styles.certIcon} style={{ color: cert.color }}>{cert.icon}</div>
                    <div>
                      <strong>{cert.name}</strong> — {cert.level}
                      <p className={styles.certDesc}>{cert.description.substring(0, 150)}...</p>
                      <Link href="/certificacoes" className={styles.certLink}>Saiba mais →</Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.detailCard}>
            <h2 className={styles.detailTitle}>⏰ Vida Útil do Capacete</h2>
            <p className={styles.detailText}>
              A vida útil recomendada deste capacete é de <strong>{product.lifespan}</strong> a partir da data de fabricação.
              Mesmo sem impactos visíveis, o EPS interno e os materiais de absorção degradam com o tempo, suor e raios UV.
              Substitua seu capacete ao final deste período para manter a proteção máxima.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
