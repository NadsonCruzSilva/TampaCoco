'use client';
import { certifications } from '@/data/certifications';
import Icon from '@/components/Icon';
import { ShieldCheck, Globe, Check, Search } from 'lucide-react';
import styles from './certificacoes.module.css';

function StarRating({ count }) {
  return (
    <span style={{ display: 'inline-flex', gap: '1px' }}>
      {[...Array(count)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--accent-primary)" stroke="none">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </span>
  );
}

export default function CertificacoesPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.icon}><ShieldCheck size={36} strokeWidth={1.5} /></span>
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
                <span className={styles.certIcon}><Icon name={cert.icon} size={28} /></span>
                <div>
                  <h2 className={styles.certName} style={{ color: cert.color }}>{cert.name}</h2>
                  <span className={styles.certFull}>{cert.fullName}</span>
                </div>
                <span className={styles.certLevel}>{cert.level}</span>
              </div>

              <div className={styles.certMeta}>
                <span><Globe size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.25rem' }} />{cert.country}</span>
                {cert.mandatory && <span className={styles.mandatory}>Obrigatório no Brasil</span>}
              </div>

              <p className={styles.certDescription}>{cert.description}</p>

              <div className={styles.certSection}>
                <h3><Check size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.25rem' }} /> O que garante:</h3>
                <ul>
                  {cert.whatItGuarantees.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.certSection}>
                <h3><Search size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.25rem' }} /> Como verificar:</h3>
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
              { name: 'INMETRO', impact: 2, pen: 2, rot: 0, rigor: 2 },
              { name: 'DOT', impact: 3, pen: 3, rot: 0, rigor: 3 },
              { name: 'ECE 22.06', impact: 4, pen: 3, rot: 4, rigor: 4 },
              { name: 'SNELL M2020', impact: 5, pen: 5, rot: 2, rigor: 5 },
              { name: 'SHARP', impact: 4, pen: 4, rot: 3, rigor: 4 },
            ].map((row, i) => (
              <div key={i} className={styles.compRow}>
                <span className={styles.compName}>{row.name}</span>
                <span>{row.impact > 0 ? <StarRating count={row.impact} /> : '—'}</span>
                <span>{row.pen > 0 ? <StarRating count={row.pen} /> : '—'}</span>
                <span>{row.rot > 0 ? <StarRating count={row.rot} /> : '—'}</span>
                <span>{row.rigor > 0 ? <StarRating count={row.rigor} /> : '—'}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
