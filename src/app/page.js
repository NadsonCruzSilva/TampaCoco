import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import Icon from '@/components/Icon';
import { ShieldCheck, Target, HardHat, Ruler, Star, User } from '@/components/Icon';
import { getFeaturedProducts, types } from '@/data/products';
import styles from './page.module.css';

const testimonials = [
  { name: "Ricardo M.", info: "Comprou Shoei X-Spirit III", text: "O HelmGuide me ajudou a encontrar o capacete perfeito pro meu perfil. A calculadora de tamanho acertou em cheio — zero trocas!" },
  { name: "Ana Paula Vadinho", info: "Comprou LS2 Valiant II", text: "Nunca tinha visto um e-commerce que explica as certificações tão bem. Me senti segura na compra pela primeira vez." },
  { name: "Carlos H.", info: "Comprou AGV K6 S", text: "Atendimento pelo WhatsApp foi rápido e personalizado. Tiraram todas as minhas dúvidas sobre certificação ECE." },
];

export default function Home() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.heroTag}>
              <ShieldCheck size={16} /> Referência em Segurança
            </div>
            <h1 className={styles.heroTitle}>
              O capacete certo faz <span>toda a diferença</span>
            </h1>
            <p className={styles.heroDesc}>
              Encontre o capacete ideal com nosso quiz inteligente, calculadora de tamanho exclusiva
              e informações detalhadas sobre certificações de segurança.
            </p>
            <div className={styles.heroBtns}>
              <Link href="/helmguide" className="btn btn-primary btn-lg">
                <Target size={18} /> Fazer o Quiz HelmGuide
              </Link>
              <Link href="/catalogo" className="btn btn-secondary btn-lg">
                Ver Catálogo →
              </Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div style={{ position: 'relative', width: '100%', height: '500px' }}>
              <Image
                src="/hero.png"
                alt="Capacete de destaque"
                fill
                priority
                unoptimized
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'contain', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.15))' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.stats}>
        {[
          { value: "12+", label: "Marcas Premium" },
          { value: "5", label: "Certificações" },
          { value: "< 3%", label: "Taxa de Troca" },
          { value: "4.8", label: "Avaliação Média" },
        ].map((stat, i) => (
          <div key={i} className={styles.statCard}>
            <div className={styles.statValue}>{stat.value}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Categories */}
      <section className="section container">
        <h2 className="section-title">Encontre por Tipo</h2>
        <p className="section-subtitle">Cada tipo de capacete foi feito para uma situação diferente</p>
        <div className={styles.categories}>
          {types.map(type => (
            <Link key={type.id} href={`/catalogo?tipo=${type.id}`} className={styles.catCard}>
              <div className={styles.catCardInner}>
                <div className={styles.catCardFront}>
                  <div className={styles.catImageWrapper}>
                    <Image
                      src={`/types/${type.id}.png`}
                      alt={type.name}
                      fill
                      sizes="140px"
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <h3 className={styles.catName}>{type.name}</h3>
                </div>
                <div className={styles.catCardBack}>
                  <h3 className={styles.catNameBack}>{type.name}</h3>
                  <p className={styles.catDesc}>{type.description}</p>
                  <span className={styles.catBtn}>Ver modelos →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="section container">
        <h2 className="section-title">Destaques</h2>
        <p className="section-subtitle">Os capacetes mais vendidos e bem avaliados</p>
        <div className={styles.productGrid}>
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link href="/catalogo" className="btn btn-outline">Ver todos os capacetes →</Link>
        </div>
      </section>

      {/* Features / Diferenciais */}
      <section className="section container">
        <h2 className="section-title">Nossos Diferenciais</h2>
        <p className="section-subtitle">Ferramentas exclusivas para você fazer a melhor escolha</p>
        <div className={styles.features}>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}><Target size={32} strokeWidth={1.5} /></span>
            <h3 className={styles.featureTitle}>HelmGuide</h3>
            <p className={styles.featureDesc}>
              Quiz inteligente que analisa seu perfil, uso e orçamento para recomendar os capacetes ideais.
            </p>
            <Link href="/helmguide" className={styles.featureLink}>Fazer o quiz →</Link>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}><Ruler size={32} strokeWidth={1.5} /></span>
            <h3 className={styles.featureTitle}>HelmSize</h3>
            <p className={styles.featureDesc}>
              Calculadora de tamanho que mostra o tamanho ideal para cada marca. Chega de trocas por tamanho errado.
            </p>
            <Link href="/helmsize" className={styles.featureLink}>Calcular tamanho →</Link>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}><ShieldCheck size={32} strokeWidth={1.5} /></span>
            <h3 className={styles.featureTitle}>HelmSafe</h3>
            <p className={styles.featureDesc}>
              Glossário visual de certificações: entenda o que cada selo garante e como verificar a autenticidade.
            </p>
            <Link href="/certificacoes" className={styles.featureLink}>Ver certificações →</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section container">
        <h2 className="section-title">O que nossos clientes dizem</h2>
        <p className="section-subtitle">Avaliações reais de quem comprou e aprovou</p>
        <div className={styles.testimonials}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.testimonialCard}>
              <div className={styles.testimonialStars}>
                {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
              </div>
              <p className={styles.testimonialText}>&ldquo;{t.text}&rdquo;</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}><User size={18} /></div>
                <div>
                  <div className={styles.testimonialName}>{t.name}</div>
                  <div className={styles.testimonialInfo}>{t.info}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section container">
        <div className={styles.ctaBanner}>
          <h2 className={styles.ctaTitle}>Não sabe qual capacete escolher?</h2>
          <p className={styles.ctaDesc}>
            Nosso quiz inteligente analisa seu perfil em 4 perguntas e recomenda os melhores capacetes para você.
          </p>
          <Link href="/helmguide" className="btn btn-primary btn-lg">Começar o HelmGuide →</Link>
        </div>
      </section>
    </>
  );
}
