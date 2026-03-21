'use client';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div className={styles.brand}>
            <span className={styles.logo}>🏍️ TampaCoco</span>
            <p>
              Seu destino para capacetes com segurança, qualidade e recomendações personalizadas.
              Cada capacete é selecionado com foco em certificações e proteção real.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialBtn} aria-label="Instagram">📷</a>
              <a href="#" className={styles.socialBtn} aria-label="Facebook">📘</a>
              <a href="#" className={styles.socialBtn} aria-label="YouTube">▶️</a>
              <a href="#" className={styles.socialBtn} aria-label="TikTok">🎵</a>
            </div>
          </div>

          <div className={styles.column}>
            <h4>Navegação</h4>
            <Link href="/catalogo">Catálogo</Link>
            <Link href="/helmguide">HelmGuide</Link>
            <Link href="/helmsize">HelmSize</Link>
            <Link href="/certificacoes">Certificações</Link>
            <Link href="/comparador">Comparador</Link>
            <Link href="/blog">Blog</Link>
          </div>

          <div className={styles.column}>
            <h4>Suporte</h4>
            <Link href="/faq">Central de Ajuda</Link>
            <Link href="/faq">Trocas e Devoluções</Link>
            <Link href="/faq">Como Rastrear Pedido</Link>
            <Link href="/faq">Política de Privacidade</Link>
            <Link href="/sobre">Sobre o TampaCoco</Link>
            <Link href="/sobre">Contato</Link>
          </div>

          <div className={styles.column}>
            <h4>Newsletter</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Receba dicas de segurança e ofertas exclusivas.
            </p>
            <div className={styles.newsletter}>
              <form className={styles.newsletterForm} onSubmit={e => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className={styles.newsletterInput}
                />
                <button type="submit" className={styles.newsletterBtn}>Assinar</button>
              </form>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomInner}>
            <p>© 2026 TampaCoco. Todos os direitos reservados.</p>
            <div className={styles.certs}>
              <span className={styles.certBadge}>🔒 SSL Seguro</span>
              <span className={styles.certBadge}>💳 PCI-DSS</span>
              <span className={styles.certBadge}>🛡️ LGPD</span>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/5511999999999?text=Olá! Preciso de ajuda para escolher um capacete."
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsapp}
        aria-label="WhatsApp"
      >
        💬
      </a>
    </>
  );
}
