import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata = {
  title: 'Mundo dos Capacetes — Capacetes com Segurança e Recomendação Inteligente',
  description: 'E-commerce especializado em capacetes para motociclistas. Encontre o capacete ideal com nosso quiz HelmGuide, calculadora de tamanho HelmSize e glossário de certificações HelmSafe.',
  keywords: 'capacete, moto, motociclista, INMETRO, DOT, ECE, SNELL, segurança, helmet',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider>
          <CartProvider>
            <Header />
            <main style={{ paddingTop: '70px', minHeight: '100vh' }}>
              {children}
            </main>
            <Footer />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
