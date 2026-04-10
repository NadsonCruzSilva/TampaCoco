'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { Home, ShoppingCart, Search, User, Grid } from '@/components/Icon';
import { useState } from 'react';
import SearchModal from '@/components/SearchModal';
import styles from './BottomNav.module.css';

const navItems = [
  { href: '/', label: 'Início', icon: Home, id: 'home' },
  { href: '/catalogo', label: 'Catálogo', icon: Grid, id: 'catalogo' },
  { href: '#search', label: 'Buscar', icon: Search, id: 'search' },
  { href: '/carrinho', label: 'Carrinho', icon: ShoppingCart, id: 'carrinho' },
  { href: '/conta', label: 'Conta', icon: User, id: 'conta' },
];

export default function BottomNav() {
  const pathname = usePathname();
  const { totalItems } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className={styles.bottomNav} aria-label="Navegação principal mobile">
        {navItems.map((item) => {
          const IconComp = item.icon;
          const active = item.id !== 'search' && isActive(item.href);

          if (item.id === 'search') {
            return (
              <button
                key={item.id}
                className={styles.navItem}
                onClick={() => setSearchOpen(true)}
                aria-label="Buscar"
              >
                <span className={styles.navIcon}>
                  <IconComp size={22} />
                </span>
                <span className={styles.navLabel}>{item.label}</span>
              </button>
            );
          }

          return (
            <Link
              key={item.id}
              href={item.href}
              className={`${styles.navItem} ${active ? styles.navItemActive : ''}`}
            >
              <span className={styles.navIcon}>
                <IconComp size={22} />
                {item.id === 'carrinho' && totalItems > 0 && (
                  <span className={styles.badge}>{totalItems}</span>
                )}
              </span>
              {active && <span className={styles.activeIndicator} />}
              <span className={styles.navLabel}>{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
