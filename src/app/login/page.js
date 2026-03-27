'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Bike, Check } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import styles from './login.module.css';

export default function LoginPage() {
  const router = useRouter();
  const { user, login, loaded } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [demoLoading, setDemoLoading] = useState(false);
  const [demoSuccess, setDemoSuccess] = useState(false);

  const DEMO_EMAIL = 'admin@mundodoscapacetes.com.br';
  const DEMO_PASSWORD = 'senha123';
  const DEMO_NAME = 'Admin Demo';

  // Redirect if already logged in
  useEffect(() => {
    if (loaded && user) {
      router.push('/');
    }
  }, [loaded, user, router]);

  const performLogin = (userData) => {
    login(userData);
    setDemoSuccess(true);
    setTimeout(() => router.push('/'), 1200);
  };

  const handleLogin = (e) => {
    e?.preventDefault();
    if (!email || !password) return;

    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
      performLogin({ name: DEMO_NAME, email: DEMO_EMAIL });
    } else {
      // For any other credentials, use email prefix as name
      const displayName = email.split('@')[0].replace(/[._-]/g, ' ');
      const capitalizedName = displayName.replace(/\b\w/g, l => l.toUpperCase());
      performLogin({ name: capitalizedName, email });
    }
  };

  const handleSignup = (e) => {
    e?.preventDefault();
    if (!name || !email || !password) return;
    performLogin({ name, email });
  };

  const handleDemoLogin = () => {
    setDemoLoading(true);

    setTimeout(() => {
      setEmail(DEMO_EMAIL);
    }, 300);

    setTimeout(() => {
      setPassword(DEMO_PASSWORD);
    }, 700);

    setTimeout(() => {
      setDemoLoading(false);
      performLogin({ name: DEMO_NAME, email: DEMO_EMAIL });
    }, 1200);
  };

  // Don't render form while checking auth
  if (!loaded || user) return null;

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.card}>

          {/* Success overlay */}
          {demoSuccess && (
            <div style={{
              position: 'absolute', inset: 0, zIndex: 10,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              background: 'var(--bg-card)', borderRadius: 'var(--radius-xl)',
              animation: 'fadeIn 0.4s ease',
            }}>
              <div style={{
                width: 64, height: 64, borderRadius: '50%',
                background: 'var(--accent-gradient-soft)', border: '2px solid var(--accent-primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem',
              }}>
                <Check size={32} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                Bem-vindo(a)!
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Redirecionando para a página inicial...
              </p>
            </div>
          )}

          <div className={styles.header}>
            <span className={styles.icon}><Bike size={28} /></span>
            <h1 className={styles.title}>{isLogin ? 'Entrar' : 'Criar Conta'}</h1>
            <p className={styles.subtitle}>
              {isLogin ? 'Acesse sua conta Mundo dos Capacetes' : 'Crie sua conta e comece a comprar'}
            </p>
          </div>

          <div className={styles.socialButtons}>
            <button className={styles.socialBtn}>
              <span>G</span> {isLogin ? 'Entrar' : 'Cadastrar'} com Google
            </button>
            <button className={styles.socialBtn}>
              <span>f</span> {isLogin ? 'Entrar' : 'Cadastrar'} com Facebook
            </button>
          </div>

          <div className={styles.divider}><span>ou usar e-mail</span></div>

          {isLogin && (
            <div style={{ marginBottom: '1.5rem' }}>
              <button
                type="button"
                className="btn btn-outline"
                disabled={demoLoading}
                style={{
                  width: '100%',
                  borderColor: 'var(--accent-primary)',
                  color: 'var(--accent-primary)',
                  opacity: demoLoading ? 0.7 : 1,
                  cursor: demoLoading ? 'wait' : 'pointer',
                }}
                onClick={handleDemoLogin}
              >
                {demoLoading ? '⏳ Conectando...' : '🚀 Entrar com Conta Demo'}
              </button>
              <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                E-mail: admin@mundodoscapacetes.com.br · Senha: senha123
              </p>
            </div>
          )}

          <form className={styles.form} onSubmit={isLogin ? handleLogin : handleSignup}>
            {!isLogin && (
              <div className={styles.formGroup}>
                <label>Nome completo</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}
            <div className={styles.formGroup}>
              <label>E-mail</label>
              <input
                type="email"
                className="input"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {!isLogin && (
              <div className={styles.formGroup}>
                <label>CPF</label>
                <input type="text" className="input" placeholder="000.000.000-00" />
              </div>
            )}
            <div className={styles.formGroup}>
              <label>Senha</label>
              <input
                type="password"
                className="input"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {!isLogin && (
              <div className={styles.formGroup}>
                <label>Confirmar Senha</label>
                <input type="password" className="input" placeholder="••••••••" />
              </div>
            )}

            {isLogin && (
              <div className={styles.forgotRow}>
                <label className={styles.checkbox}>
                  <input type="checkbox" /> Lembrar de mim
                </label>
                <a href="#" className={styles.forgotLink}>Esqueceu a senha?</a>
              </div>
            )}

            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
              {isLogin ? 'Entrar →' : 'Criar Conta →'}
            </button>
          </form>

          <p className={styles.switchText}>
            {isLogin ? 'Não tem conta?' : 'Já tem conta?'}
            <button onClick={() => setIsLogin(!isLogin)} className={styles.switchBtn}>
              {isLogin ? 'Criar conta' : 'Fazer login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

