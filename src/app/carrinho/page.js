'use client';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, HardHat, Banknote } from 'lucide-react';
import styles from './carrinho.module.css';

export default function CarrinhoPage() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();
  const formatPrice = (p) => p.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  if (items.length === 0) {
    return (
      <div className={styles.page}>
        <div className="container">
          <div className={styles.empty}>
            <ShoppingCart size={48} strokeWidth={1} style={{ opacity: 0.4 }} />
            <h1>Seu carrinho está vazio</h1>
            <p>Explore nosso catálogo e encontre o capacete ideal para você!</p>
            <Link href="/catalogo" className="btn btn-primary btn-lg" style={{ marginTop: '1rem' }}>Ver Catálogo</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className="container">
        <h1 className="section-title">Carrinho de Compras</h1>
        <p className="section-subtitle">{totalItems} {totalItems === 1 ? 'item' : 'itens'} no carrinho</p>

        <div className={styles.layout}>
          <div className={styles.itemsList}>
            {items.map((item, i) => (
              <div key={`${item.id}-${item.color}-${item.size}`} className={styles.cartItem}>
                <div className={styles.itemImage}>
                  <HardHat size={32} strokeWidth={1} style={{ opacity: 0.3 }} />
                </div>
                <div className={styles.itemInfo}>
                  <span className={styles.itemBrand}>{item.brand}</span>
                  <h3 className={styles.itemName}>{item.name}</h3>
                  <div className={styles.itemMeta}>
                    <span>Cor: {item.color}</span>
                    <span>Tam: {item.size}</span>
                  </div>
                </div>
                <div className={styles.itemQty}>
                  <button onClick={() => updateQuantity(item.id, item.color, item.size, item.quantity - 1)}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.color, item.size, item.quantity + 1)}>+</button>
                </div>
                <div className={styles.itemPrice}>{formatPrice(item.price * item.quantity)}</div>
                <button className={styles.removeBtn} onClick={() => removeItem(item.id, item.color, item.size)}>✕</button>
              </div>
            ))}
          </div>

          <div className={styles.summary}>
            <h3 className={styles.summaryTitle}>Resumo do Pedido</h3>
            <div className={styles.summaryRow}>
              <span>Subtotal ({totalItems} itens)</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Frete</span>
              <span className={styles.freeShipping}>{totalPrice >= 299 ? 'GRÁTIS' : 'A calcular'}</span>
            </div>

            <div className={styles.couponBox}>
              <input type="text" placeholder="Cupom de desconto" className="input" />
              <button className="btn btn-sm btn-secondary">Aplicar</button>
            </div>

            <div className={styles.totalRow}>
              <span>Total</span>
              <span className={styles.totalPrice}>{formatPrice(totalPrice)}</span>
            </div>
            <span className={styles.pixPrice}><Banknote size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.25rem' }} /> {formatPrice(totalPrice * 0.9)} no Pix (10% off)</span>

            <Link href="/checkout" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '1rem' }}>
              Ir para o Checkout →
            </Link>

            <Link href="/catalogo" className={styles.keepShopping}>← Continuar comprando</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
