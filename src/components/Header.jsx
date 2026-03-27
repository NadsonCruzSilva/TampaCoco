'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useTheme } from '@/context/ThemeContext';
import { useAuth } from '@/context/AuthContext';
import { Bike, ShoppingCart, User, Sun, Moon } from '@/components/Icon';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const router = useRouter();
  const userMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close user menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setUserMenuOpen(false);
    router.push('/');
  };

  const navLinks = [
    { href: '/catalogo', label: 'Catálogo' },
    { href: '/helmguide', label: 'HelmGuide' },
    { href: '/helmsize', label: 'HelmSize' },
    { href: '/certificacoes', label: 'Certificações' },
    { href: '/comparador', label: 'Comparador' },
    { href: '/blog', label: 'Blog' },
  ];

  const userInitial = user?.name ? user.name.charAt(0).toUpperCase() : null;

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

            {/* User area */}
            {user ? (
              <div className={styles.userArea} ref={userMenuRef}>
                <button
                  className={styles.userAvatar}
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  aria-label="Menu do usuário"
                >
                  {userInitial}
                </button>
                {userMenuOpen && (
                  <div className={styles.userDropdown}>
                    <div className={styles.userDropdownHeader}>
                      <span className={styles.userDropdownAvatar}>{userInitial}</span>
                      <div>
                        <strong className={styles.userDropdownName}>{user.name}</strong>
                        <span className={styles.userDropdownEmail}>{user.email}</span>
                      </div>
                    </div>
                    <div className={styles.userDropdownDivider} />
                    <button className={styles.userDropdownItem} onClick={handleLogout}>
                      Sair da Conta
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/login" className={styles.iconBtn}>
                <User size={18} />
              </Link>
            )}

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
        {user ? (
          <>
            <div className={styles.mobileNavLink} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span className={styles.userAvatarSmall}>{userInitial}</span>
              {user.name}
            </div>
            <button
              className={styles.mobileNavLink}
              onClick={() => { handleLogout(); setMobileOpen(false); }}
              style={{ color: 'var(--accent-secondary)', cursor: 'pointer', textAlign: 'left' }}
            >
              Sair da Conta
            </button>
          </>
        ) : (
          <Link href="/login" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>
            <User size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem' }} />
            Minha Conta
          </Link>
        )}
      </div>
    </>
  );
}

