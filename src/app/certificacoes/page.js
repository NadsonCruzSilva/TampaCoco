'use client';
import { certifications } from '@/data/certifications';
import styles from './certificacoes.module.css';

export default function CertificacoesPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.icon}>🛡️</span>
          <h1 className="section-title">HelmSafe — Certificações de Segurança</h1>
          <p className="section-subtitle">
            Entenda o que cada selo garante e como verificar a autenticidade do seu capacete
          </p>
        </div>

        <div className={styles.intro}>
          <div className={styles.introCard}>
            <h2>Por que certificações importam?</h2>
            <p>
              Um capacete pode salvar sua vida — mas apenas se foi testado e certificado adequadamente.
              Certificações garantem que o capacete passou por testes rigorosos de impacto, penetração,
              retenção e campo de visão. Quanto mais certificações, mais testes o capacete passou.
            </p>
          </div>
        </div>

        <div className={styles.certGrid}>
          {certifications.map((cert) => (
            <div key={cert.id} className={styles.certCard} style={{ borderTopColor: cert.color }}>
              <div className={styles.certHeader}>
                <span className={styles.certIcon}>{cert.icon}</span>
                <div>
                  <h2 className={styles.certName} style={{ color: cert.color }}>{cert.name}</h2>
                  <span className={styles.certFull}>{cert.fullName}</span>
                </div>
                <span className={styles.certLevel}>{cert.level}</span>
              </div>

              <div className={styles.certMeta}>
                <span>🌍 {cert.country}</span>
                {cert.mandatory && <span className={styles.mandatory}>Obrigatório no Brasil</span>}
              </div>

              <p className={styles.certDescription}>{cert.description}</p>

              <div className={styles.certSection}>
                <h3>✅ O que garante:</h3>
                <ul>
                  {cert.whatItGuarantees.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.certSection}>
                <h3>🔍 Como verificar:</h3>
                <p>{cert.howToVerify}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.comparison}>
          <h2 className={styles.compTitle}>Comparação de Rigor dos Testes</h2>
          <div className={styles.compTable}>
            <div className={styles.compHeader}>
              <span>Certificação</span>
              <span>Impacto</span>
              <span>Penetração</span>
              <span>Rotacional</span>
              <span>Rigor Geral</span>
            </div>
            {[
              { name: 'INMETRO', impact: '⭐⭐', pen: '⭐⭐', rot: '—', rigor: '⭐⭐' },
              { name: 'DOT', impact: '⭐⭐⭐', pen: '⭐⭐⭐', rot: '—', rigor: '⭐⭐⭐' },
              { name: 'ECE 22.06', impact: '⭐⭐⭐⭐', pen: '⭐⭐⭐', rot: '⭐⭐⭐⭐', rigor: '⭐⭐⭐⭐' },
              { name: 'SNELL M2020', impact: '⭐⭐⭐⭐⭐', pen: '⭐⭐⭐⭐⭐', rot: '⭐⭐', rigor: '⭐⭐⭐⭐⭐' },
              { name: 'SHARP', impact: '⭐⭐⭐⭐', pen: '⭐⭐⭐⭐', rot: '⭐⭐⭐', rigor: '⭐⭐⭐⭐' },
            ].map((row, i) => (
              <div key={i} className={styles.compRow}>
                <span className={styles.compName}>{row.name}</span>
                <span>{row.impact}</span>
                <span>{row.pen}</span>
                <span>{row.rot}</span>
                <span>{row.rigor}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
