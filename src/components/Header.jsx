'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/catalogo', label: 'Catálogo' },
    { href: '/helmguide', label: 'HelmGuide' },
    { href: '/helmsize', label: 'HelmSize' },
    { href: '/certificacoes', label: 'Certificações' },
    { href: '/comparador', label: 'Comparador' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoIcon}>🏍️</span>
            <span className={styles.logoText}>TampaCoco</span>
          </Link>

          <nav className={styles.nav}>
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <Link href="/carrinho" className={styles.iconBtn}>
              🛒
              {totalItems > 0 && <span className={styles.cartCount}>{totalItems}</span>}
            </Link>
            <Link href="/login" className={styles.iconBtn}>
              👤
            </Link>
            <button
              className={styles.menuToggle}
              onClick={() => setMobileOpen(true)}
              aria-label="Menu"
            >
              <span className={styles.menuBar}></span>
              <span className={styles.menuBar}></span>
              <span className={styles.menuBar}></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}>
        <button className={styles.mobileClose} onClick={() => setMobileOpen(false)}>✕</button>
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={styles.mobileNavLink}
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link href="/carrinho" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>
          🛒 Carrinho {totalItems > 0 && `(${totalItems})`}
        </Link>
        <Link href="/login" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>
          👤 Minha Conta
        </Link>
      </div>
    </>
  );
}
