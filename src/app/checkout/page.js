'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { Banknote, CreditCard, CreditCard as Debit, FileText, Check } from 'lucide-react';
import styles from './checkout.module.css';

export default function CheckoutPage() {
  const { items, totalPrice } = useCart();
  const [step, setStep] = useState(1);
  const formatPrice = (p) => p.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const steps = ['Endereço', 'Frete', 'Pagamento', 'Revisão'];

  if (items.length === 0) {
    return (
      <div className={styles.page}><div className="container" style={{ textAlign: 'center', padding: '5rem 0' }}>
        <h1>Carrinho vazio</h1>
        <Link href="/catalogo" className="btn btn-primary" style={{ marginTop: '1rem' }}>Voltar ao catálogo</Link>
      </div></div>
    );
  }

  return (
    <div className={styles.page}>
      <div className="container">
        <h1 className="section-title">Checkout</h1>
        <div className={styles.stepper}>
          {steps.map((s, i) => (
            <div key={i} className={`${styles.stepItem} ${step > i ? styles.stepDone : ''} ${step === i + 1 ? styles.stepActive : ''}`}>
              <div className={styles.stepCircle}>{step > i + 1 ? <Check size={14} /> : i + 1}</div>
              <span>{s}</span>
            </div>
          ))}
        </div>

        <div className={styles.layout}>
          <div className={styles.formArea}>
            {step === 1 && (
              <div className={styles.stepContent}>
                <h2>Endereço de Entrega</h2>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}><label>Nome completo</label><input className="input" placeholder="Seu nome" /></div>
                  <div className={styles.formGroup}><label>CPF</label><input className="input" placeholder="000.000.000-00" /></div>
                  <div className={styles.formGroup}><label>CEP</label><input className="input" placeholder="00000-000" /></div>
                  <div className={styles.formGroup}><label>Rua</label><input className="input" placeholder="Rua, avenida..." /></div>
                  <div className={styles.formGroup}><label>Número</label><input className="input" placeholder="123" /></div>
                  <div className={styles.formGroup}><label>Complemento</label><input className="input" placeholder="Apto, bloco..." /></div>
                  <div className={styles.formGroup}><label>Bairro</label><input className="input" placeholder="Bairro" /></div>
                  <div className={styles.formGroup}><label>Cidade</label><input className="input" placeholder="Cidade" /></div>
                  <div className={styles.formGroup}><label>Estado</label><input className="input" placeholder="UF" /></div>
                </div>
                <button className="btn btn-primary btn-lg" onClick={() => setStep(2)}>Continuar para Frete →</button>
              </div>
            )}

            {step === 2 && (
              <div className={styles.stepContent}>
                <h2>Opções de Frete</h2>
                <div className={styles.shippingOptions}>
                  {[
                    { name: 'Econômico (Correios)', price: totalPrice >= 299 ? 0 : 29.90, days: '8-12 dias' },
                    { name: 'Expresso (Jadlog)', price: totalPrice >= 299 ? 0 : 19.90, days: '4-6 dias' },
                    { name: 'Super Expresso (Total Express)', price: 49.90, days: '2-3 dias' },
                  ].map((opt, i) => (
                    <label key={i} className={styles.shippingOption}>
                      <input type="radio" name="shipping" defaultChecked={i === 0} />
                      <div className={styles.shippingInfo}>
                        <strong>{opt.name}</strong>
                        <span>{opt.days}</span>
                      </div>
                      <span className={styles.shippingPrice}>{opt.price === 0 ? 'GRÁTIS' : formatPrice(opt.price)}</span>
                    </label>
                  ))}
                </div>
                <div className={styles.stepButtons}>
                  <button className="btn btn-secondary" onClick={() => setStep(1)}>← Voltar</button>
                  <button className="btn btn-primary btn-lg" onClick={() => setStep(3)}>Continuar para Pagamento →</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className={styles.stepContent}>
                <h2>Método de Pagamento</h2>
                <div className={styles.paymentOptions}>
                  {[
                    { IconComp: Banknote, name: 'Pix', desc: '10% de desconto — aprovação instantânea' },
                    { IconComp: CreditCard, name: 'Cartão de Crédito', desc: 'Até 12x sem juros' },
                    { IconComp: Debit, name: 'Cartão de Débito', desc: 'Aprovação em até 1h' },
                    { IconComp: FileText, name: 'Boleto Bancário', desc: 'Vencimento em 3 dias úteis' },
                  ].map((opt, i) => (
                    <label key={i} className={styles.paymentOption}>
                      <input type="radio" name="payment" defaultChecked={i === 0} />
                      <span className={styles.paymentIcon}><opt.IconComp size={20} /></span>
                      <div>
                        <strong>{opt.name}</strong>
                        <span>{opt.desc}</span>
                      </div>
                    </label>
                  ))}
                </div>
                <div className={styles.stepButtons}>
                  <button className="btn btn-secondary" onClick={() => setStep(2)}>← Voltar</button>
                  <button className="btn btn-primary btn-lg" onClick={() => setStep(4)}>Revisar Pedido →</button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className={styles.stepContent}>
                <h2>Revisão do Pedido</h2>
                <div className={styles.reviewItems}>
                  {items.map(item => (
                    <div key={`${item.id}-${item.color}-${item.size}`} className={styles.reviewItem}>
                      <span>{item.quantity}x {item.name}</span>
                      <span>{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>
                <div className={styles.reviewTotal}>
                  <span>Total</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className={styles.stepButtons}>
                  <button className="btn btn-secondary" onClick={() => setStep(3)}>← Voltar</button>
                  <button className="btn btn-primary btn-lg" onClick={() => alert('Pedido confirmado! (simulação)')}>
                    <Check size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.3rem' }} /> Confirmar Pedido
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className={styles.orderSummary}>
            <h3>Resumo</h3>
            {items.map(item => (
              <div key={`${item.id}-${item.color}-${item.size}`} className={styles.summaryItem}>
                <span>{item.quantity}x {item.name}</span>
                <span>{formatPrice(item.price * item.quantity)}</span>
              </div>
            ))}
            <div className={styles.summaryTotal}>
              <span>Total</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
