import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lock } from 'lucide-react';
import ConciergeSection from '../components/ConciergeSection';
import FAQSection from '../components/FAQSection';
import TrustSection from '../components/TrustSection';
import QualificationTunnel from '../components/QualificationTunnel';

const LandingPage = () => {
  const [isTunnelOpen, setIsTunnelOpen] = useState(false);

  const openTunnel = () => setIsTunnelOpen(true);

  return (
    <div className="flex flex-col min-h-screen">
      <QualificationTunnel isOpen={isTunnelOpen} onClose={() => setIsTunnelOpen(false)} />
      
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-serif font-bold text-club-blue">Côte Atlantique Investor Club</div>
          <div className="flex items-center space-x-6">
            <a href="#concept" className="text-sm font-medium hover:text-club-gold transition-colors">Concept</a>
            <a href="#pillars" className="text-sm font-medium hover:text-club-gold transition-colors">Valeur</a>
            <a href="#villa" className="text-sm font-medium hover:text-club-gold transition-colors">La Villa</a>
            <a href="#conciergerie" className="text-sm font-medium hover:text-club-gold transition-colors">Gestion</a>
            <Link to="/member-area" className="flex items-center space-x-2 text-sm font-medium text-club-gold hover:text-club-gold-light transition-colors">
              <Lock size={16} />
              <span>Espace Membre</span>
            </Link>
            <button onClick={openTunnel} className="bg-club-blue text-white px-5 py-2 rounded text-sm font-medium hover:bg-club-blue-dark transition-colors">
              Demander une invitation
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-e328701102b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Villa moderne avec piscine" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-club-blue/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-club-blue/80 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Investir dans l’immobilier d’exception autrement
          </h1>
          <p className="text-xl md:text-2xl font-light mb-10 text-gray-100 max-w-2xl mx-auto">
            Rejoignez un club privé d’investisseurs qui acquiert collectivement des villas premium sur la côte Atlantique.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button onClick={openTunnel} className="bg-club-gold text-white px-8 py-4 rounded text-lg font-medium hover:bg-club-gold-light transition-colors w-full md:w-auto">
              Demander une invitation
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded text-lg font-medium hover:bg-white/20 transition-colors w-full md:w-auto">
              Découvrir le club
            </button>
          </div>
        </div>
      </header>

      {/* Concept Section */}
      <section id="concept" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-club-blue">Un nouveau modèle d’investissement immobilier</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              L’accès à l’immobilier premium devient de plus en plus difficile pour un investisseur seul. 
              Notre club privé permet de résoudre ce problème grâce à un modèle simple : un groupe restreint d’investisseurs acquiert collectivement une villa d’exception.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Immobilier d’exception",
                desc: "Accès à des villas premium sur la côte Atlantique (Capbreton, Hossegor).",
                icon: "🏰"
              },
              {
                title: "Investissement collectif",
                desc: "Un groupe privé d’investisseurs partage l’acquisition via une SCI dédiée.",
                icon: "🤝"
              },
              {
                title: "Rendement + Usage",
                desc: "Revenus locatifs + semaines de vacances + plus-value.",
                icon: "📈"
              }
            ].map((item, i) => (
              <div key={i} className="bg-club-sand p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-serif font-bold mb-3 text-club-blue">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section id="pillars" className="py-24 bg-club-sand">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-club-blue">3 sources de valeur pour chaque membre</h2>
            <p className="text-gray-600">L’investissement repose sur trois moteurs de création de valeur.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-club-gold">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-serif font-bold text-club-blue">Vacances</h3>
                <span className="text-3xl">🏖</span>
              </div>
              <p className="text-gray-600 mb-6">1 à 2 semaines dans une villa premium.</p>
              <div className="pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Valeur moyenne</p>
                <p className="text-2xl font-bold text-club-gold">3 500 à 7 000 € / an</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-club-blue">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-serif font-bold text-club-blue">Revenus locatifs</h3>
                <span className="text-3xl">💰</span>
              </div>
              <p className="text-gray-600 mb-6">Part des revenus de location saisonnière.</p>
              <div className="pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 uppercase tracking-wide">CA annuel cible</p>
                <p className="text-2xl font-bold text-club-gold">115 000 €</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-gray-800">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-serif font-bold text-club-blue">Valorisation</h3>
                <span className="text-3xl">📈</span>
              </div>
              <p className="text-gray-600 mb-6">Valorisation moyenne historique sur la zone.</p>
              <div className="pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Croissance</p>
                <p className="text-2xl font-bold text-club-gold">3 à 5 % / an</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Section */}
      <section className="py-24 bg-club-blue text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Exemple concret d’investissement</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Pour un investissement initial de <span className="text-white font-bold">130 000 €</span>, voici la projection sur 10 ans.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-club-gold font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-lg">Revenus locatifs</h4>
                    <p className="text-gray-400">≈ 45 000 € redistribués</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-club-gold font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-lg">Valeur vacances</h4>
                    <p className="text-gray-400">≈ 35 000 € à 70 000 € d'usage</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-club-gold font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-lg">Plus-value immobilière</h4>
                    <p className="text-gray-400">≈ 40 000 € à la revente</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-sm uppercase tracking-wide text-gray-400 mb-2">Gain potentiel total (10 ans)</p>
                <p className="text-4xl font-serif font-bold text-club-gold">120 000 € à 155 000 €</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-club-gold/20 rounded-xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Intérieur villa luxe" 
                className="relative rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Villa Section */}
      <section id="villa" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-club-blue">Une villa d’exception</h2>
            <p className="text-gray-600">Située à Capbreton / Hossegor, au cœur de la zone la plus recherchée.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Villa 1" className="rounded-lg h-64 w-full object-cover" />
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Villa 2" className="rounded-lg h-64 w-full object-cover" />
            <img src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Villa 3" className="rounded-lg h-64 w-full object-cover" />
            <img src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Villa 4" className="rounded-lg h-64 w-full object-cover" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {['285 m²', '5 chambres', 'Piscine', 'Jacuzzi', 'Sauna', 'Jardin'].map((feat, i) => (
              <div key={i} className="bg-club-sand py-4 px-2 rounded-lg font-medium text-club-blue">
                {feat}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concierge Section */}
      <ConciergeSection />

      {/* Security Section */}
      <section className="py-24 bg-club-sand">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white p-12 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center text-club-blue">Un investissement structuré et sécurisé</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {[
                "SCI juridiquement encadrée",
                "Pacte d’associés",
                "Droit de préemption",
                "Valorisation par expert indépendant",
                "Reporting annuel",
                "Transparence totale"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm">✓</div>
                  <span className="text-lg text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <TrustSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-24 bg-club-blue-dark text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Rejoindre le club</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Le club accueille un nombre limité de membres. Demandez votre invitation pour accéder au dossier complet.
          </p>
          <button onClick={openTunnel} className="bg-club-gold text-white px-10 py-5 rounded text-xl font-medium hover:bg-club-gold-light transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Demander une invitation
          </button>
        </div>
      </section>

      <footer className="bg-black text-gray-500 py-12 text-center">
        <div className="container mx-auto px-6">
          <p className="mb-4 text-white font-serif text-xl">Côte Atlantique Investor Club</p>
          <p className="text-sm">© 2024 Tous droits réservés. Investir comporte des risques.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
