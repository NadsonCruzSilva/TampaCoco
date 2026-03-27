'use client';
import Link from 'next/link';
import { Bike, ShieldCheck, Target, Ruler, MessageCircle, Mail, Instagram } from '@/components/Icon';
import styles from './sobre.module.css';

export default function SobrePage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.icon}><Bike size={36} strokeWidth={1.5} /></span>
          <h1 className="section-title">Sobre o Mundo dos Capacetes</h1>
          <p className="section-subtitle">Mais que uma loja. Um ecossistema de segurança para motociclistas.</p>
        </div>

        <div className={styles.story}>
          <div className={styles.storyCard}>
            <h2>Nossa Missão</h2>
            <p>
              O Mundo dos Capacetes nasceu de uma necessidade real: ajudar motociclistas brasileiros a escolher capacetes
              com informação de qualidade. Sabemos que um capacete é mais do que um acessório — é o item que
              pode salvar sua vida. Por isso, combinamos tecnologia de recomendação, educação sobre certificações
              e atendimento humanizado para garantir que cada cliente faça a melhor escolha.
            </p>
          </div>

          <div className={styles.values}>
            {[
              { icon: 'ShieldCheck', title: 'Segurança em Primeiro Lugar', desc: 'Cada capacete no nosso catálogo é verificado quanto às certificações. Não vendemos proteção sem garantia.' },
              { icon: 'Target', title: 'Recomendação Inteligente', desc: 'Nosso quiz HelmGuide analisa seu perfil para encontrar o capacete ideal — sem pressão para comprar o mais caro.' },
              { icon: 'Ruler', title: 'Tamanho Certo', desc: 'Com a calculadora HelmSize, eliminamos a principal causa de devoluções: tamanho errado.' },
              { icon: 'Award', title: 'Educação e Transparência', desc: 'O HelmSafe explica cada certificação de forma clara. Acreditamos que um consumidor informado é um consumidor seguro.' },
              { icon: 'MessageCircle', title: 'Atendimento Humano', desc: 'Nosso time está disponível no WhatsApp para tirar dúvidas sobre segurança, certificações e ajudar na escolha.' },
              { icon: 'Heart', title: 'Confiança', desc: 'Avaliações verificadas, troca fácil em 7 dias e programa de fidelidade. Construímos relacionamentos, não só vendas.' },
            ].map((v, i) => {
              const IconMap = { ShieldCheck, Target, Ruler, Award: require('lucide-react').Award, MessageCircle, Heart: require('lucide-react').Heart };
              const IconComp = IconMap[v.icon];
              return (
                <div key={i} className={styles.valueCard}>
                  <span className={styles.valueIcon}><IconComp size={24} /></span>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.contact}>
          <h2>Entre em Contato</h2>
          <p>Tem dúvidas, sugestões ou quer ser parceiro? Fale conosco!</p>
          <form className={styles.contactForm} onSubmit={e => e.preventDefault()}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}><label>Nome</label><input className="input" placeholder="Seu nome" /></div>
              <div className={styles.formGroup}><label>E-mail</label><input className="input" placeholder="seu@email.com" type="email" /></div>
            </div>
            <div className={styles.formGroup}><label>Assunto</label><input className="input" placeholder="Sobre o que deseja falar?" /></div>
            <div className={styles.formGroup}><label>Mensagem</label><textarea className="input" rows="4" placeholder="Sua mensagem..." style={{ resize: 'vertical' }}></textarea></div>
            <button type="submit" className="btn btn-primary btn-lg">Enviar Mensagem →</button>
          </form>
        </div>

        <div className={styles.channels}>
          <div className={styles.channelCard}>
            <MessageCircle size={24} /><h4>WhatsApp</h4><p>Resposta em até 2h (horário comercial)</p>
          </div>
          <div className={styles.channelCard}>
            <Mail size={24} /><h4>E-mail</h4><p>contato@mundodoscapacetes.com.br — SLA de 24h</p>
          </div>
          <div className={styles.channelCard}>
            <Instagram size={24} /><h4>Instagram</h4><p>@mundodoscapacetes — Dicas e novidades</p>
          </div>
        </div>
      </div>
    </div>
  );
}
