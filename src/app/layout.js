import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';
import { CartProvider } from '@/context/CartContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { AuthProvider } from '@/context/AuthContext';
import { WishlistProvider } from '@/context/WishlistContext';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata = {
  title: 'Mundo dos Capacetes — Capacetes com Segurança e Recomendação Inteligente',
  description: 'E-commerce especializado em capacetes para motociclistas. Encontre o capacete ideal com nosso quiz HelmGuide, calculadora de tamanho HelmSize e glossário de certificações HelmSafe.',
  keywords: 'capacete, moto, motociclista, INMETRO, DOT, ECE, SNELL, segurança, helmet',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider>
          <AuthProvider>
            <WishlistProvider>
              <CartProvider>
                <Header />
                <main style={{ paddingTop: '70px', minHeight: '100vh' }}>
                  {children}
                </main>
                <Footer />
                <BottomNav />
              </CartProvider>
            </WishlistProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

