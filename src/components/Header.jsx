'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useTheme } from '@/context/ThemeContext';
import { Bike, ShoppingCart, User, Sun, Moon } from '@/components/Icon';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();
  const { theme, toggleTheme } = useTheme();

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
            <span className={styles.logoIcon}><Bike size={20} /></span>
            <span className={styles.logoText}>Mundo dos Capacetes</span>
          </Link>

          <nav className={styles.nav}>
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <button
              className={styles.iconBtn}
              onClick={toggleTheme}
              aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <Link href="/carrinho" className={styles.iconBtn}>
              <ShoppingCart size={18} />
              {totalItems > 0 && <span className={styles.cartCount}>{totalItems}</span>}
            </Link>
            <Link href="/login" className={styles.iconBtn}>
              <User size={18} />
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
          <ShoppingCart size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem' }} />
          Carrinho {totalItems > 0 && `(${totalItems})`}
        </Link>
        <Link href="/login" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>
          <User size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem' }} />
          Minha Conta
        </Link>
      </div>
    </>
  );
}
