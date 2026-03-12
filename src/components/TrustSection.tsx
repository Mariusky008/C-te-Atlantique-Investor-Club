import { Shield, Users, History } from 'lucide-react';

const TrustSection = () => {
  return (
    <section className="py-24 bg-club-sand" id="trust">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-club-blue/5 rounded-xl transform -rotate-2"></div>
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Fondateur" 
                className="relative rounded-xl shadow-lg w-full md:max-w-md mx-auto"
              />
              <div className="absolute bottom-8 -right-4 bg-white p-6 rounded-lg shadow-xl border-l-4 border-club-gold max-w-xs hidden md:block">
                <p className="text-club-blue font-serif italic text-lg mb-2">"Mon objectif est de démocratiser l'accès à l'immobilier d'exception."</p>
                <p className="text-sm font-bold text-gray-900">— Jean-Philippe, Fondateur</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-club-blue">Pourquoi nous faire confiance</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Le Côte Atlantique Investor Club est né d'un constat simple : l'immobilier premium est souvent inaccessible, complexe à gérer et peu liquide. 
              Nous avons créé une structure qui allie sécurité juridique, transparence financière et plaisir d'usage.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-club-gold">
                    <History size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-club-blue mb-2">Expertise Locale</h3>
                  <p className="text-gray-600">
                    Plus de 10 ans d'expérience sur le marché immobilier de la côte basque et landaise. Nous sélectionnons uniquement les biens avec le plus fort potentiel de valorisation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-club-gold">
                    <Shield size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-club-blue mb-2">Sécurité Juridique</h3>
                  <p className="text-gray-600">
                    Tous nos montages sont validés par des notaires et avocats fiscalistes spécialisés. La SCI offre un cadre clair et protecteur pour chaque associé.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-club-gold">
                    <Users size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-club-blue mb-2">Communauté Privée</h3>
                  <p className="text-gray-600">
                    Rejoindre le club, c'est aussi intégrer un réseau d'investisseurs partageant les mêmes valeurs et intérêts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
