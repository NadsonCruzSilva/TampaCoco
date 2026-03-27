'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bike, Instagram, Facebook, Youtube, Music, Lock, CreditCard, ShieldCheck, MessageCircle } from '@/components/Icon';
import styles from './Footer.module.css';

export default function Footer() {
  const [showWa, setShowWa] = useState(false);
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div className={styles.brand}>
            <span className={styles.logo}>
              <Bike size={20} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.4rem' }} />
              Mundo dos Capacetes
            </span>
            <p>
              Seu destino para capacetes com segurança, qualidade e recomendações personalizadas.
              Cada capacete é selecionado com foco em certificações e proteção real.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialBtn} aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#" className={styles.socialBtn} aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" className={styles.socialBtn} aria-label="YouTube"><Youtube size={18} /></a>
              <a href="#" className={styles.socialBtn} aria-label="TikTok"><Music size={18} /></a>
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
            <Link href="/criadores">Os Criadores</Link>
          </div>

          <div className={styles.column}>
            <h4>Suporte</h4>
            <Link href="/faq">Central de Ajuda</Link>
            <Link href="/faq">Trocas e Devoluções</Link>
            <Link href="/faq">Como Rastrear Pedido</Link>
            <Link href="/faq">Política de Privacidade</Link>
            <Link href="/sobre">Sobre o Mundo dos Capacetes</Link>
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
            <p>© 2026 Mundo dos Capacetes. Todos os direitos reservados.</p>
            <div className={styles.certs}>
              <span className={styles.certBadge}><Lock size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.3rem' }} />SSL Seguro</span>
              <span className={styles.certBadge}><CreditCard size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.3rem' }} />PCI-DSS</span>
              <span className={styles.certBadge}><ShieldCheck size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.3rem' }} />LGPD</span>
            </div>
          </div>
        </div>
      </footer>

      <div className={styles.waContainer}>
        {showWa && (
          <div className={styles.waPopup}>
            <div className={styles.waHeader}>
              <div className={styles.waAvatar}>
                {/* 
                  Usando imagem do Unsplash como placeholder para a foto do atendente. 
                  Você pode salvar a foto que desejar na pasta /public/ como o nome attendant.jpg
                  e então alterar a propriedade src abaixo para "/attendant.jpg" (e usar a tag <Image> do Next).
                */}
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150"
                  alt="Foto do Atendente"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className={styles.waInfo}>
                <span className={styles.waName}>Jão - Atendimento</span>
                <span className={styles.waStatus}>Online agora</span>
              </div>
              <button className={styles.waClose} onClick={() => setShowWa(false)} aria-label="Fechar">
                &times;
              </button>
            </div>
            <div className={styles.waBody}>
              <p>Olá! Precisa de ajuda para escolher seu capacete ideal ou tem alguma dúvida?</p>
              <a
                href="https://wa.me/5528999620129?text=Olá! Preciso de ajuda para escolher um capacete."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '1rem', display: 'flex', justifyContent: 'center', background: '#25d366', color: '#fff', border: 'none' }}
                onClick={() => setShowWa(false)}
              >
                Continuar no WhatsApp
              </a>
            </div>
          </div>
        )}
        <button
          onClick={() => setShowWa(!showWa)}
          className={styles.whatsapp}
          aria-label="Atendimento via WhatsApp"
        >
          <MessageCircle size={28} style={{ color: '#fff' }} fill="currentColor" />
        </button>
      </div>
    </>
  );
}
