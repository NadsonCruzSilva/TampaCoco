'use client';
import { useState } from 'react';
import Link from 'next/link';
import { quizSteps } from '@/data/quiz';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import styles from './helmguide.module.css';

export default function HelmGuidePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const keys = ['experiencia', 'uso', 'prioridade', 'orcamento'];

  const handleSelect = (value) => {
    const newAnswers = { ...answers, [keys[currentStep]]: value };
    setAnswers(newAnswers);

    if (currentStep < quizSteps.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const getRecommendations = () => {
    let filtered = [...products];
    const { uso, prioridade, orcamento } = answers;

    if (uso === 'trilha') filtered = filtered.filter(p => p.type === 'offroad');
    else if (uso === 'esportivo') filtered = filtered.filter(p => ['full-face'].includes(p.type));
    else if (uso === 'urbano') filtered = filtered.filter(p => ['full-face', 'modular', 'aberto'].includes(p.type));

    if (orcamento === 'economico') filtered = filtered.filter(p => p.price <= 500);
    else if (orcamento === 'intermediario') filtered = filtered.filter(p => p.price > 500 && p.price <= 1500);
    else if (orcamento === 'premium') filtered = filtered.filter(p => p.price > 1500 && p.price <= 3000);
    else if (orcamento === 'top') filtered = filtered.filter(p => p.price > 3000);

    if (prioridade === 'seguranca') filtered.sort((a, b) => b.certifications.length - a.certifications.length);
    else if (prioridade === 'custo-beneficio') filtered.sort((a, b) => (b.rating / b.price) - (a.rating / a.price));
    else filtered.sort((a, b) => b.rating - a.rating);

    return filtered.length > 0 ? filtered.slice(0, 4) : products.slice(0, 4);
  };

  const restart = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    const recs = getRecommendations();
    return (
      <div className={styles.page}>
        <div className="container">
          <div className={styles.resultHeader}>
            <span className={styles.resultIcon}>🎯</span>
            <h1 className="section-title">Suas Recomendações</h1>
            <p className="section-subtitle">
              Com base no seu perfil, selecionamos os melhores capacetes para você
            </p>
          </div>

          <div className={styles.resultProfile}>
            <h3>Seu Perfil</h3>
            <div className={styles.profileTags}>
              {Object.entries(answers).map(([key, val]) => (
                <span key={key} className={styles.profileTag}>{val}</span>
              ))}
            </div>
          </div>

          <div className={styles.resultGrid}>
            {recs.map(p => <ProductCard key={p.id} product={p} />)}
          </div>

          <div className={styles.resultActions}>
            <button onClick={restart} className="btn btn-secondary">🔄 Refazer Quiz</button>
            <Link href="/catalogo" className="btn btn-primary">Ver todo o catálogo →</Link>
          </div>
        </div>
      </div>
    );
  }

  const step = quizSteps[currentStep];
  const progress = ((currentStep + 1) / quizSteps.length) * 100;

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.quizContainer}>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${progress}%` }}></div>
          </div>
          <div className={styles.stepInfo}>
            <span className={styles.stepCount}>Passo {currentStep + 1} de {quizSteps.length}</span>
            {currentStep > 0 && (
              <button className={styles.backBtn} onClick={() => setCurrentStep(currentStep - 1)}>← Voltar</button>
            )}
          </div>

          <div className={styles.questionBlock}>
            <h2 className={styles.question}>{step.question}</h2>
            <p className={styles.questionSub}>{step.subtitle}</p>
          </div>

          <div className={styles.options}>
            {step.options.map((opt) => (
              <button
                key={opt.value}
                className={`${styles.optionCard} ${answers[keys[currentStep]] === opt.value ? styles.optionCardActive : ''}`}
                onClick={() => handleSelect(opt.value)}
              >
                <span className={styles.optionIcon}>{opt.icon}</span>
                <div className={styles.optionText}>
                  <strong>{opt.label}</strong>
                  <span>{opt.description}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
