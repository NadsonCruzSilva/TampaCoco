'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { blogPosts, getPostBySlug } from '@/data/blog';

export default function BlogPostPage() {
  const params = useParams();
  const post = getPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="container section" style={{ textAlign: 'center' }}>
        <h1>Artigo não encontrado</h1>
        <Link href="/blog" className="btn btn-primary" style={{ marginTop: '1rem' }}>Voltar ao Blog</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem 0 4rem' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <nav style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
          <Link href="/" style={{ color: 'var(--text-secondary)' }}>Home</Link> /{' '}
          <Link href="/blog" style={{ color: 'var(--text-secondary)' }}>Blog</Link> /{' '}
          <span>{post.title}</span>
        </nav>

        <div style={{
          background: 'var(--bg-tertiary)',
          borderRadius: 'var(--radius-xl)',
          height: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '2rem'
        }}>
          <span style={{ fontSize: '4rem', opacity: 0.3 }}>📰</span>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem' }}>
          <span style={{
            padding: '0.25rem 0.75rem',
            background: 'var(--accent-gradient-soft)',
            border: '1px solid var(--border-accent)',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.75rem',
            fontWeight: '600',
            color: 'var(--accent-primary)'
          }}>{post.category}</span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{post.readTime}</span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            {new Date(post.date).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}
          </span>
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
          fontWeight: '700',
          lineHeight: '1.2',
          marginBottom: '1rem'
        }}>{post.title}</h1>

        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.7' }}>
          {post.excerpt}
        </p>

        {post.content ? (
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.8' }}>
            {post.content.split('\n\n').map((paragraph, i) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={i} style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: '600', color: 'var(--text-primary)', margin: '2rem 0 1rem' }}>{paragraph.replace('## ', '')}</h2>;
              }
              if (paragraph.startsWith('### ')) {
                return <h3 key={i} style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-primary)', margin: '1.5rem 0 0.75rem' }}>{paragraph.replace('### ', '')}</h3>;
              }
              return <p key={i} style={{ marginBottom: '1rem' }}>{paragraph}</p>;
            })}
          </div>
        ) : (
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem',
            textAlign: 'center',
            color: 'var(--text-muted)'
          }}>
            <p>📝 Conteúdo completo em breve. Volte em poucos dias!</p>
          </div>
        )}

        <div style={{
          marginTop: '3rem',
          padding: '2rem',
          background: 'var(--accent-gradient-soft)',
          border: '1px solid var(--border-accent)',
          borderRadius: 'var(--radius-xl)',
          textAlign: 'center'
        }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: '600', marginBottom: '0.5rem' }}>
            Precisa de ajuda para escolher?
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>
            Faça nosso quiz e descubra o capacete ideal para o seu perfil.
          </p>
          <Link href="/helmguide" className="btn btn-primary">Fazer o HelmGuide →</Link>
        </div>
      </div>
    </div>
  );
}
