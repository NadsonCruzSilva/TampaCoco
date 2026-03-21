import Link from 'next/link';
import { blogPosts } from '@/data/blog';
import styles from './blog.module.css';

export const metadata = {
  title: 'Blog HelmSafe — Dicas e Segurança | TampaCoco',
  description: 'Artigos sobre segurança, certificações, guias de compra e dicas para motociclistas.',
};

export default function BlogPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.icon}>📚</span>
          <h1 className="section-title">Blog HelmSafe</h1>
          <p className="section-subtitle">Dicas, guias e tudo sobre segurança para motociclistas</p>
        </div>

        <div className={styles.grid}>
          {blogPosts.map((post, i) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className={`${styles.postCard} ${i === 0 ? styles.featured : ''}`}>
              <div className={styles.postImage}>
                <span style={{ fontSize: '3rem', opacity: 0.3 }}>📰</span>
              </div>
              <div className={styles.postInfo}>
                <div className={styles.postMeta}>
                  <span className={styles.category}>{post.category}</span>
                  <span className={styles.readTime}>{post.readTime}</span>
                </div>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
                <span className={styles.postDate}>{new Date(post.date).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
