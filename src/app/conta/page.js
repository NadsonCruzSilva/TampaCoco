'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import styles from './conta.module.css';

export default function ContaPage() {
  const { user, loaded, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loaded && !user) {
      router.push('/login');
    }
  }, [user, loaded, router]);

  if (!loaded || !user) {
    return (
      <div className={styles.page} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <p>Carregando conta...</p>
      </div>
    );
  }

  const userInitial = user.name ? user.name.charAt(0).toUpperCase() : '👤';
  const roleText = user.role === 'admin' ? 'Administrador' : 'Cliente';

  // Keep some mock data for UI visualization since there's no backend
  const mockOrders = [
    { id: '#HLM-001234', date: '15/03/2026', status: 'Entregue', total: 'R$ 2.799,90', product: 'AGV K6 S' },
    { id: '#HLM-001189', date: '28/02/2026', status: 'Em trânsito', total: 'R$ 549,90', product: 'Norisk Grand Prix' },
  ];
  const mockAddresses = ['Rua das Flores, 123 - São Paulo/SP - CEP 01234-567'];
  const mockPoints = user.role === 'admin' ? 1250 : 350;

  return (
    <div className={styles.page}>
      <div className="container">
        <h1 className="section-title">Minha Conta</h1>

        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <div className={styles.avatar}>{userInitial}</div>
            <h2 className={styles.userName}>{user.name}</h2>
            <p className={styles.userEmail}>{user.email}</p>
            <div className={styles.pointsBadge}>
              🏆 {mockPoints} HelmPoints
            </div>
            <nav className={styles.sideNav}>
              <span className={styles.navItem}>📦 Meus Pedidos</span>
              <span className={styles.navItem}>❤️ Wishlist</span>
              <span className={styles.navItem}>📍 Endereços</span>
              <span className={styles.navItem}>👤 Dados Pessoais</span>
              <span className={styles.navItem}>🏆 HelmPoints</span>
              <span className={styles.navItem}>⭐ Avaliações</span>
              <button className={styles.navItem} onClick={logout} style={{ color: 'var(--accent-secondary)', width: '100%', textAlign: 'left', border: 'none', background: 'none', cursor: 'pointer', outline: 'none' }}>
                🚪 Sair da Conta
              </button>
            </nav>
          </aside>

          <div className={styles.content}>
            <div className={styles.sectionCard}>
              <h3>👤 Perfil</h3>
              <div style={{ display: 'flex', gap: '2rem', marginBottom: '1rem' }}>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Nome</strong>
                  <span>{user.name}</span>
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>E-mail</strong>
                  <span>{user.email}</span>
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Tipo de Conta</strong>
                  <span>{roleText}</span>
                </div>
              </div>
            </div>

            <div className={styles.sectionCard}>
              <h3>📦 Meus Pedidos</h3>
              <div className={styles.ordersList}>
                {mockOrders.map((order, i) => (
                  <div key={i} className={styles.orderItem}>
                    <div>
                      <strong>{order.id}</strong>
                      <span className={styles.orderProduct}>{order.product}</span>
                    </div>
                    <div className={styles.orderMeta}>
                      <span>{order.date}</span>
                      <span className={`${styles.status} ${order.status === 'Entregue' ? styles.statusDone : styles.statusShipping}`}>
                        {order.status}
                      </span>
                      <span>{order.total}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.sectionCard}>
              <h3>📍 Endereços Salvos</h3>
              {mockAddresses.map((addr, i) => (
                <div key={i} className={styles.addressItem}>
                  <span>🏠</span>
                  <span>{addr}</span>
                </div>
              ))}
              <button className="btn btn-sm btn-secondary" style={{ marginTop: '1rem' }}>+ Adicionar endereço</button>
            </div>

            <div className={styles.sectionCard}>
              <h3>🏆 HelmPoints</h3>
              <div className={styles.pointsInfo}>
                <div className={styles.pointsBalance}>
                  <span className={styles.pointsValue}>{mockPoints}</span>
                  <span>pontos disponíveis</span>
                </div>
                <p className={styles.pointsEquiv}>
                  Equivalente a <strong>R$ {(mockPoints / 100).toFixed(2)}</strong> em desconto
                </p>
              </div>
              <div className={styles.pointsRules}>
                <span>📍 R$ 1 gasto = 1 ponto</span>
                <span>📸 Avaliação com foto = +50 pts</span>
                <span>👥 Indicação convertida = +200 pts</span>
                <span>🎂 Aniversário = +100 pts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
