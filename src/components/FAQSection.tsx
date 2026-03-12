import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Comment fonctionne la propriété partagée ?",
      answer: "La propriété est structurée via une Société Civile Immobilière (SCI). Chaque investisseur détient des parts de la société proportionnellement à son investissement. La SCI est propriétaire du bien immobilier. Cela permet une gestion simplifiée, une fiscalité transparente et une protection juridique optimale pour tous les associés."
    },
    {
      question: "Puis-je revendre mes parts quand je le souhaite ?",
      answer: "Oui, la revente des parts est possible à tout moment. Vous pouvez proposer vos parts aux autres associés (qui bénéficient d'un droit de préemption), ou à un tiers agréé par la collectivité des associés. Le club peut également faciliter la mise en relation avec de nouveaux investisseurs potentiels."
    },
    {
      question: "Qui s'occupe de la gestion et de l'entretien ?",
      answer: "Tout est délégué. Une société de gestion spécialisée s'occupe de tout : entretien du jardin et de la piscine, ménage, maintenance, gestion des locations saisonnières, accueil des locataires. Vous n'avez rien à gérer, vous profitez simplement de vos revenus et de vos semaines de vacances."
    },
    {
      question: "Comment sont réparties les semaines d'occupation ?",
      answer: "Un calendrier équitable est mis en place chaque année. Chaque investisseur dispose de 1 à 2 semaines (selon son investissement) qu'il peut réserver en priorité. Un système de rotation permet de garantir que chacun puisse profiter des périodes les plus demandées au fil des années."
    },
    {
      question: "Quelle est la fiscalité applicable ?",
      answer: "La SCI est généralement transparente fiscalement (IR) ou peut opter pour l'IS selon la stratégie du groupe. Les revenus locatifs (bénéfices) sont imposés entre les mains des associés. Nous fournissons chaque année un rapport détaillé pour faciliter votre déclaration fiscale. Nous recommandons toutefois de consulter votre conseiller fiscal pour optimiser votre situation personnelle."
    },
    {
      question: "Que se passe-t-il si des travaux sont nécessaires ?",
      answer: "Une provision pour travaux est incluse dans le budget annuel de fonctionnement prélevé sur les revenus locatifs. Pour les gros travaux exceptionnels, une décision est prise en assemblée générale des associés. L'objectif est de maintenir le standing du bien pour garantir sa valorisation à long terme."
    }
  ];

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-club-blue">Questions fréquentes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Retrouvez les réponses aux questions les plus courantes de nos investisseurs. 
            Pour toute autre interrogation, notre équipe est à votre disposition.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-gray-100 last:border-0">
              <button
                className="flex justify-between items-center w-full py-6 text-left focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`text-lg font-medium transition-colors ${openIndex === index ? 'text-club-gold' : 'text-club-blue group-hover:text-club-gold'}`}>
                  {faq.question}
                </span>
                <span className={`ml-6 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  {openIndex === index ? (
                    <Minus size={20} className="text-club-gold" />
                  ) : (
                    <Plus size={20} className="text-gray-400 group-hover:text-club-gold" />
                  )}
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed pr-12">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
