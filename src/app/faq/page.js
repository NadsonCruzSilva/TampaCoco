'use client';
import { useState } from 'react';
import { HelpCircle, MessageCircle, Mail } from 'lucide-react';
import styles from './faq.module.css';

const faqData = [
  {
    category: 'Compras',
    items: [
      { q: 'Quais formas de pagamento são aceitas?', a: 'Aceitamos Pix (com 10% de desconto), cartão de crédito em até 12x sem juros, cartão de débito e boleto bancário. Todos processados via gateway certificado PCI-DSS.' },
      { q: 'O frete é grátis?', a: 'Sim! Para compras acima de R$ 299, o frete é grátis para todo o Brasil. Para compras abaixo desse valor, oferecemos opções de frete Econômico e Expresso.' },
      { q: 'Quanto tempo leva para receber meu pedido?', a: 'O prazo varia de acordo com a opção de frete escolhida: Econômico (8-12 dias), Expresso (4-6 dias) ou Super Expresso (2-3 dias úteis).' },
      { q: 'Como aplicar um cupom de desconto?', a: 'No carrinho de compras ou na etapa final do checkout, há um campo para inserir seu cupom. O desconto é aplicado automaticamente após a validação.' },
    ]
  },
  {
    category: 'Tamanhos e Trocas',
    items: [
      { q: 'Como saber meu tamanho de capacete?', a: 'Use nossa calculadora HelmSize! Basta medir a circunferência da sua cabeça com uma fita métrica e inserir o valor. Mostramos o tamanho ideal para cada marca.' },
      { q: 'E se o capacete não servir?', a: 'Oferecemos troca gratuita em até 7 dias após o recebimento, conforme o Código de Defesa do Consumidor. Geramos a etiqueta de devolução automaticamente.' },
      { q: 'Cada marca tem um tamanho diferente?', a: 'Sim! Um "M" da Shoei pode ser diferente de um "M" da LS2. Por isso criamos o HelmSize — para você ver a equivalência exata por marca.' },
      { q: 'O capacete novo aperta no início?', a: 'É normal. O forro interno acomoda após ~20 horas de uso. Se o capacete estiver desconfortável mas sem causar dor, é o tamanho correto.' },
    ]
  },
  {
    category: 'Certificações e Segurança',
    items: [
      { q: 'O que significa a certificação INMETRO?', a: 'O INMETRO é a certificação obrigatória no Brasil. Garante que o capacete atende requisitos mínimos de impacto, retenção e campo de visão conforme norma ABNT NBR 7471.' },
      { q: 'DOT e ECE são melhores que INMETRO?', a: 'São certificações complementares com testes mais rigorosos. DOT é dos EUA e ECE da Europa. Capacetes com múltiplas certificações passaram por mais testes de segurança.' },
      { q: 'Quando devo trocar meu capacete?', a: 'A vida útil recomendada é de 5 anos a partir da data de fabricação, mesmo sem impactos visíveis. O EPS interno e os materiais degradam com o tempo, suor e raios UV.' },
      { q: 'Todos os capacetes do site são certificados?', a: 'Sim! Todos possuem no mínimo certificação INMETRO (obrigatória). Muitos possuem certificações adicionais como DOT, ECE, SNELL ou avaliação SHARP.' },
    ]
  },
  {
    category: 'Conta e Rastreamento',
    items: [
      { q: 'Como rastrear meu pedido?', a: 'Na sua conta, acesse "Meus Pedidos". Cada pedido mostra uma timeline de status com código de rastreio quando enviado. Você também recebe notificações por e-mail.' },
      { q: 'Esqueci minha senha, o que fazer?', a: 'Na tela de login, clique em "Esqueceu a senha?". Enviaremos um link de redefinição para o e-mail cadastrado.' },
      { q: 'O que são HelmPoints?', a: 'É nosso programa de fidelidade! A cada R$1,00 gasto, você ganha 1 HelmPoint. 100 pontos = R$1,00 de desconto. Ganhe pontos extras por avaliações e indicações.' },
    ]
  },
];

export default function FaqPage() {
  const [openItems, setOpenItems] = useState({});

  const toggle = (key) => {
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.icon}><HelpCircle size={36} strokeWidth={1.5} /></span>
          <h1 className="section-title">Central de Ajuda</h1>
          <p className="section-subtitle">Encontre respostas para as dúvidas mais frequentes</p>
        </div>

        <div className={styles.content}>
          {faqData.map((section, si) => (
            <div key={si} className={styles.section}>
              <h2 className={styles.categoryTitle}>{section.category}</h2>
              <div className={styles.items}>
                {section.items.map((item, ii) => {
                  const key = `${si}-${ii}`;
                  const isOpen = openItems[key];
                  return (
                    <div key={ii} className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}>
                      <button className={styles.faqQuestion} onClick={() => toggle(key)}>
                        <span>{item.q}</span>
                        <span className={styles.faqToggle}>{isOpen ? '−' : '+'}</span>
                      </button>
                      {isOpen && (
                        <div className={styles.faqAnswer}>
                          <p>{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.contact}>
          <h2>Não encontrou sua resposta?</h2>
          <p>Entre em contato com nossa equipe. Respondemos em até 2 horas no horário comercial.</p>
          <div className={styles.contactBtns}>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener" className="btn btn-primary"><MessageCircle size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.3rem' }} /> WhatsApp</a>
            <a href="mailto:contato@mundodoscapacetes.com.br" className="btn btn-secondary"><Mail size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.3rem' }} /> E-mail</a>
          </div>
        </div>
      </div>
    </div>
  );
}
