'use client';
import { useState } from 'react';
import { getRecommendedSize, measurementSteps } from '@/data/sizeChart';
import { Ruler, Lightbulb, Zap, Check, AlertTriangle } from 'lucide-react';
import styles from './helmsize.module.css';

export default function HelmSizePage() {
  const [measurement, setMeasurement] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    const r = getRecommendedSize(measurement);
    setResult(r);
  };

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.icon}><Ruler size={36} strokeWidth={1.5} /></span>
          <h1 className="section-title">HelmSize — Calculadora de Tamanho</h1>
          <p className="section-subtitle">
            Descubra o tamanho ideal para cada marca. Cada fabricante tem sua própria tabela!
          </p>
        </div>

        <div className={styles.howTo}>
          <h2 className={styles.howToTitle}>Como Medir sua Cabeça</h2>
          <div className={styles.steps}>
            {measurementSteps.map((s) => (
              <div key={s.step} className={styles.stepCard}>
                <div className={styles.stepNumber}>{s.step}</div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.calculator}>
          <h2 className={styles.calcTitle}>Insira sua Medida</h2>
          <form onSubmit={handleCalculate} className={styles.calcForm}>
            <div className={styles.inputGroup}>
              <input
                type="number"
                step="0.5"
                min="50"
                max="66"
                placeholder="Ex: 57"
                value={measurement}
                onChange={e => setMeasurement(e.target.value)}
                className={styles.calcInput}
                required
              />
              <span className={styles.unit}>cm</span>
            </div>
            <button type="submit" className="btn btn-primary btn-lg">Calcular Tamanho</button>
          </form>
        </div>

        {result && (
          <div className={styles.results}>
            <h2 className={styles.resultsTitle}>
              Resultado para <span>{result.measurement} cm</span>
            </h2>
            {result.isBorderline && (
              <div className={styles.borderlineAlert}>
                <AlertTriangle size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.3rem' }} /> Sua medida está em zona limítrofe entre dois tamanhos. Recomendamos o tamanho maior para conforto.
              </div>
            )}
            <div className={styles.resultTable}>
              <div className={styles.tableHeader}>
                <span>Marca</span>
                <span>Tamanho</span>
                <span>Faixa (cm)</span>
                <span>Obs.</span>
              </div>
              {Object.entries(result.results).map(([brand, data]) => (
                <div key={brand} className={`${styles.tableRow} ${data.borderline ? styles.borderlineRow : ''}`}>
                  <span className={styles.brandName}>{brand}</span>
                  <span className={styles.sizeValue}>{data.size}</span>
                  <span className={styles.rangeValue}>{data.range} cm</span>
                  <span className={styles.noteValue}>{data.borderline ? <><Zap size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> Zona limítrofe</> : <><Check size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> Ideal</>}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={styles.tips}>
          <h2 className={styles.tipsTitle}><Lightbulb size={20} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.3rem' }} /> Dicas Importantes</h2>
          <div className={styles.tipsGrid}>
            <div className={styles.tipCard}>
              <strong>Capacete novo aperta?</strong>
              <p>É normal! O forro interno acomoda após ~20 horas de uso e fica mais confortável.</p>
            </div>
            <div className={styles.tipCard}>
              <strong>Na dúvida entre dois tamanhos?</strong>
              <p>Escolha o maior. Um capacete folgado é mais perigoso que um justo, mas o conforto é importante.</p>
            </div>
            <div className={styles.tipCard}>
              <strong>Cada marca é diferente!</strong>
              <p>Um &quot;M&quot; da Shoei pode ser diferente de um &quot;M&quot; da LS2. Sempre confira a tabela da marca.</p>
            </div>
            <div className={styles.tipCard}>
              <strong>Teste do balanço</strong>
              <p>Com o capacete na cabeça, balance a cabeça. Se o capacete se mover independente, está grande.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
