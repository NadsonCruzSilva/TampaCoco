'use client';
import { useState } from 'react';
import styles from './login.module.css';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.header}>
            <span className={styles.icon}>🏍️</span>
            <h1 className={styles.title}>{isLogin ? 'Entrar' : 'Criar Conta'}</h1>
            <p className={styles.subtitle}>
              {isLogin ? 'Acesse sua conta TampaCoco' : 'Crie sua conta e comece a comprar'}
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

          <div className={styles.divider}><span>ou</span></div>

          <form className={styles.form} onSubmit={e => e.preventDefault()}>
            {!isLogin && (
              <div className={styles.formGroup}>
                <label>Nome completo</label>
                <input type="text" className="input" placeholder="Seu nome" />
              </div>
            )}
            <div className={styles.formGroup}>
              <label>E-mail</label>
              <input type="email" className="input" placeholder="seu@email.com" />
            </div>
            {!isLogin && (
              <div className={styles.formGroup}>
                <label>CPF</label>
                <input type="text" className="input" placeholder="000.000.000-00" />
              </div>
            )}
            <div className={styles.formGroup}>
              <label>Senha</label>
              <input type="password" className="input" placeholder="••••••••" />
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
