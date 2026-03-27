'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, HardHat, Banknote, Check, X } from 'lucide-react';
import styles from './carrinho.module.css';

const COUPONS = {
  'PRIMEIRA10': { discount: 0.10, label: '10% de desconto', type: 'percent' },
  'CAPACETE20': { discount: 0.20, label: '20% de desconto', type: 'percent' },
  'FRETE0': { discount: 0, label: 'Frete grátis', type: 'shipping' },
  'MUNDO50': { discount: 50, label: 'R$ 50,00 de desconto', type: 'fixed' },
};

export default function CarrinhoPage() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState('');
  const formatPrice = (p) => p.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const handleApplyCoupon = () => {
    const code = couponCode.trim().toUpperCase();
    if (!code) return;
    const coupon = COUPONS[code];
    if (coupon) {
      setAppliedCoupon({ code, ...coupon });
      setCouponError('');
    } else {
      setCouponError('Cupom inválido ou expirado');
      setAppliedCoupon(null);
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode('');
    setCouponError('');
  };

  const getDiscount = () => {
    if (!appliedCoupon) return 0;
    if (appliedCoupon.type === 'percent') return totalPrice * appliedCoupon.discount;
    if (appliedCoupon.type === 'fixed') return Math.min(appliedCoupon.discount, totalPrice);
    return 0;
  };

  const discountValue = getDiscount();
  const finalPrice = totalPrice - discountValue;

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
            {items.map((item) => (
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

            {appliedCoupon && discountValue > 0 && (
              <div className={styles.summaryRow} style={{ color: 'var(--success)' }}>
                <span>Desconto ({appliedCoupon.code})</span>
                <span>-{formatPrice(discountValue)}</span>
              </div>
            )}

            <div className={styles.summaryRow}>
              <span>Frete</span>
              <span className={styles.freeShipping}>
                {finalPrice >= 299 || (appliedCoupon && appliedCoupon.type === 'shipping') ? 'GRÁTIS' : 'A calcular'}
              </span>
            </div>

            {/* Coupon */}
            <div className={styles.couponBox}>
              {appliedCoupon ? (
                <div className={styles.couponApplied}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Check size={16} style={{ color: 'var(--success)' }} />
                    <span><strong>{appliedCoupon.code}</strong> — {appliedCoupon.label}</span>
                  </div>
                  <button onClick={removeCoupon} className={styles.couponRemove} aria-label="Remover cupom">
                    <X size={14} />
                  </button>
                </div>
              ) : (
                <>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <input
                      type="text"
                      placeholder="Cupom de desconto"
                      className="input"
                      value={couponCode}
                      onChange={(e) => { setCouponCode(e.target.value.toUpperCase()); setCouponError(''); }}
                      onKeyDown={(e) => e.key === 'Enter' && handleApplyCoupon()}
                      style={couponError ? { borderColor: 'var(--accent-secondary)' } : {}}
                    />
                    <button className="btn btn-sm btn-secondary" onClick={handleApplyCoupon}>Aplicar</button>
                  </div>
                  {couponError && <span style={{ color: 'var(--accent-secondary)', fontSize: '0.75rem', marginTop: '0.25rem' }}>{couponError}</span>}
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                    Teste: PRIMEIRA10, CAPACETE20, MUNDO50
                  </span>
                </>
              )}
            </div>

            <div className={styles.totalRow}>
              <span>Total</span>
              <span className={styles.totalPrice}>{formatPrice(finalPrice)}</span>
            </div>
            <span className={styles.pixPrice}><Banknote size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.25rem' }} /> {formatPrice(finalPrice * 0.9)} no Pix (10% off)</span>

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

