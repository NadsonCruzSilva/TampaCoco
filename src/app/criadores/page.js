'use client';
import Image from 'next/image';
import { Bike, Instagram, Linkedin, Mail } from '@/components/Icon';
import styles from './criadores.module.css';

export default function CriadoresPage() {
  const criadores = [
    {
      id: 1,
      name: "Ruebens Sores",
      role: "Fundador & CEO",
      bio: "Com mais de 15 anos de experiência no mercado de motociclismo, Ruebens fundou o Mundo dos Capacetes com o objetivo de democratizar o acesso à segurança premium e conscientizar pilotos.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=600",
      socials: { linkedin: "#", instagram: "#", email: "mailto:joao@mundodoscapacetes.com.br" }
    },
    {
      id: 2,
      name: "João Pedro Paganotti",
      role: "Diretor de Operações",
      bio: "Especialista em e-commerce e apaixonado por motos de pequeno porte. João garante que a logística do Mundo dos Capacetes seja sempre impecável, da compra até a entrega na sua casa.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=600",
      socials: { linkedin: "#", instagram: "#", email: "mailto:maria@mundodoscapacetes.com.br" }
    },
    {
      id: 3,
      name: "Nadson da Cruz",
      role: "Especialista Ténico",
      bio: "Piloto profissional e analista de engenharia de segurança. Nadson é o cérebro por trás do nosso HelmGuide e pessoalmente avalia os capacetes do nosso catálogo para garantir a proteção máxima.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=600",
      socials: { linkedin: "#", instagram: "#", email: "mailto:carlos@mundodoscapacetes.com.br" }
    }
  ];

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.icon}>
            <Bike size={36} strokeWidth={1.5} />
          </div>
          <h1 className="section-title">Os Criadores</h1>
          <p className="section-subtitle">Conheça as pessoas apaixonadas por motos que construíram o Mundo dos Capacetes.</p>
        </div>

        <div className={styles.grid}>
          {criadores.map(criador => (
            <div key={criador.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={criador.image}
                  alt={`Foto de ${criador.name}`}
                  fill
                  unoptimized
                  style={{ objectFit: 'cover' }}
                  className={styles.image}
                />
              </div>
              <div className={styles.info}>
                <span className={styles.role}>{criador.role}</span>
                <h3 className={styles.name}>{criador.name}</h3>
                <p className={styles.bio}>{criador.bio}</p>
                <div className={styles.socials}>
                  {criador.socials.linkedin && (
                    <a href={criador.socials.linkedin} className={styles.socialBtn} aria-label="LinkedIn">
                      <Linkedin size={18} />
                    </a>
                  )}
                  {criador.socials.instagram && (
                    <a href={criador.socials.instagram} className={styles.socialBtn} aria-label="Instagram">
                      <Instagram size={18} />
                    </a>
                  )}
                  {criador.socials.email && (
                    <a href={criador.socials.email} className={styles.socialBtn} aria-label="E-mail">
                      <Mail size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.historySection}>
          <h2 className={styles.historyTitle}>A Nossa História</h2>
          <p className={styles.historyText}>
            A ideia do Mundo dos Capacetes surgiu nas estradas. Em uma viagem pelo interior do Brasil,
            percebemos que muitos motociclistas não tinham acesso à informação correta sobre o que torna
            um capacete seguro. Decidimos juntar nossa experiência de pilotagem, nossa paixão pelo
            mundo duas rodas e nossa dedicação em trazer as melhores marcas mundiais para um só lugar.
            Hoje, não vendemos apenas equipamentos — nós vendemos segurança e tranquilidade para cada quilômetro da sua viagem.
          </p>
        </div>
      </div>
    </div>
  );
}
