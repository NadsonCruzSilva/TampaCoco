import Link from 'next/link';
import styles from './conta.module.css';

export const metadata = { title: 'Minha Conta | Mundo dos Capacetes' };

export default function ContaPage() {
  const mockUser = {
    name: 'João Silva',
    email: 'joao@email.com',
    points: 350,
    orders: [
      { id: '#HLM-001234', date: '15/03/2026', status: 'Entregue', total: 'R$ 2.799,90', product: 'AGV K6 S' },
      { id: '#HLM-001189', date: '28/02/2026', status: 'Em trânsito', total: 'R$ 549,90', product: 'Norisk Grand Prix' },
    ],
    addresses: ['Rua das Flores, 123 - São Paulo/SP - CEP 01234-567'],
  };

  return (
    <div className={styles.page}>
      <div className="container">
        <h1 className="section-title">Minha Conta</h1>

        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <div className={styles.avatar}>👤</div>
            <h2 className={styles.userName}>{mockUser.name}</h2>
            <p className={styles.userEmail}>{mockUser.email}</p>
            <div className={styles.pointsBadge}>
              🏆 {mockUser.points} HelmPoints
            </div>
            <nav className={styles.sideNav}>
              <span className={styles.navItem}>📦 Meus Pedidos</span>
              <span className={styles.navItem}>❤️ Wishlist</span>
              <span className={styles.navItem}>📍 Endereços</span>
              <span className={styles.navItem}>👤 Dados Pessoais</span>
              <span className={styles.navItem}>🏆 HelmPoints</span>
              <span className={styles.navItem}>⭐ Avaliações</span>
            </nav>
          </aside>

          <div className={styles.content}>
            <div className={styles.sectionCard}>
              <h3>📦 Meus Pedidos</h3>
              <div className={styles.ordersList}>
                {mockUser.orders.map((order, i) => (
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
              {mockUser.addresses.map((addr, i) => (
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
                  <span className={styles.pointsValue}>{mockUser.points}</span>
                  <span>pontos disponíveis</span>
                </div>
                <p className={styles.pointsEquiv}>
                  Equivalente a <strong>R$ {(mockUser.points / 100).toFixed(2)}</strong> em desconto
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
