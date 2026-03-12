import { 
  Globe, 
  CalendarCheck, 
  Key, 
  Sparkles, 
  Heart, 
  BarChart3,
  Percent,
  Handshake,
  CheckCircle2
} from 'lucide-react';

const ConciergeSection = () => {
  return (
    <section className="py-24 bg-club-sand-dark" id="conciergerie">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-club-gold font-bold uppercase tracking-widest text-sm mb-2 block">Gestion opérationnelle</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-club-blue">Conciergerie intégrée : Une gestion clé en main</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            La villa est exploitée en location saisonnière haut de gamme via une conciergerie professionnelle intégrée au projet. 
            L’objectif est double : maximiser le taux d’occupation et garantir une expérience haut de gamme aux locataires, 
            tout en offrant aux investisseurs une gestion totalement passive.
          </p>
        </div>

        {/* Missions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Globe,
              title: "Commercialisation",
              items: ["Diffusion sur Airbnb, Booking & plateformes spécialisées", "Optimisation des annonces", "Gestion dynamique des tarifs (Yield Management)"]
            },
            {
              icon: CalendarCheck,
              title: "Gestion des réservations",
              items: ["Traitement des demandes 7j/7", "Communication multilingue avec les voyageurs", "Validation et organisation des séjours"]
            },
            {
              icon: Key,
              title: "Accueil des locataires",
              items: ["Check-in / Check-out personnalisés", "Présentation détaillée du bien", "Assistance 24/7 pendant le séjour"]
            },
            {
              icon: Sparkles,
              title: "Entretien du bien",
              items: ["Ménage professionnel hôtelier", "Gestion du linge de maison", "Contrôle qualité après chaque séjour", "Maintenance préventive"]
            },
            {
              icon: Heart,
              title: "Expérience client",
              items: ["Guide d'accueil et recommandations locales", "Services additionnels (chef à domicile, etc.)", "Gestion proactive des avis clients"]
            },
            {
              icon: BarChart3,
              title: "Optimisation & Reporting",
              items: ["Maximisation du taux d'occupation", "Ciblage clientèle premium (international, familles)", "Reporting mensuel détaillé aux investisseurs"]
            }
          ].map((mission, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-club-blue/5 rounded-full flex items-center justify-center text-club-blue mb-6">
                <mission.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-club-blue mb-4">{mission.title}</h3>
              <ul className="space-y-3">
                {mission.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-600 text-sm">
                    <span className="mr-2 text-club-gold mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Business Model Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Rémunération */}
          <div className="bg-club-blue text-white p-10 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Percent size={120} />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-serif font-bold mb-6">Rémunération de la conciergerie</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-bold text-club-gold">20%</span>
                <span className="ml-3 text-xl text-gray-300">du chiffre d’affaires locatif</span>
              </div>
              <p className="text-gray-300 mb-6">Une rémunération à la performance qui inclut l'intégralité des services de gestion :</p>
              <ul className="space-y-3">
                {["Commercialisation complète", "Gestion des réservations & voyageurs", "Accueil physique & Départ", "Organisation du ménage & blanchisserie", "Suivi opérationnel & maintenance légère"].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-200">
                    <CheckCircle2 size={18} className="text-club-gold mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Alignement des intérêts */}
          <div className="bg-white p-10 rounded-2xl border border-gray-200 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5 text-club-blue">
              <Handshake size={120} />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-serif font-bold mb-6 text-club-blue">Alignement des intérêts</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Pour garantir une implication totale, la société opératrice détient également <span className="font-bold text-club-blue">5 % des parts de la SCI</span>.
              </p>
              <div className="bg-club-sand p-6 rounded-xl mb-6">
                <h4 className="font-bold text-club-blue mb-3">Pourquoi c'est important ?</h4>
                <p className="text-sm text-gray-600">
                  Cette participation au capital aligne directement les intérêts de l’opérateur avec ceux des investisseurs. 
                  La société opératrice est ainsi financièrement incitée à la réussite du projet et à la <span className="font-bold">valorisation du bien sur le long terme</span>.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-club-blue mb-3">Contrepartie de l'entrée au capital :</h4>
                <div className="flex flex-wrap gap-2">
                  {["Structuration juridique", "Recherche du bien", "Sélection rigoureuse", "Mise en relation investisseurs", "Organisation acquisition"].map((tag, i) => (
                    <span key={i} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Benefits Summary */}
        <div className="mt-16 text-center bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-club-blue mb-6">Avantages exclusifs pour les investisseurs</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-3">😴</div>
              <h4 className="font-bold text-gray-800 mb-2">100% Passif</h4>
              <p className="text-sm text-gray-500">Aucune gestion quotidienne, aucune contrainte locative.</p>
            </div>
            <div>
              <div className="text-4xl mb-3">💎</div>
              <h4 className="font-bold text-gray-800 mb-2">Qualité Hôtelière</h4>
              <p className="text-sm text-gray-500">Exploitation professionnelle garantissant la valorisation du bien.</p>
            </div>
            <div>
              <div className="text-4xl mb-3">📊</div>
              <h4 className="font-bold text-gray-800 mb-2">Transparence Totale</h4>
              <p className="text-sm text-gray-500">Accès aux chiffres : CA, taux d'occupation, dépenses, résultats.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ConciergeSection;
