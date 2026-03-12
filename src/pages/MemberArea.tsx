import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Calculator, 
  Clock, 
  Video, 
  MessageSquare, 
  Calendar, 
  LogOut,
  Download,
  CheckCircle,
  MapPin
} from 'lucide-react';

const MemberArea = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-club-blue text-white fixed h-full z-20">
        <div className="p-6 border-b border-white/10">
          <Link to="/" className="text-xl font-serif font-bold text-white block">Investor Club</Link>
          <span className="text-xs text-club-gold uppercase tracking-wider mt-1 block">Espace Membre</span>
        </div>
        
        <nav className="p-4 space-y-2">
          {[
            { id: 'dashboard', label: 'Tableau de bord', icon: LayoutDashboard },
            { id: 'documents', label: 'Documents', icon: FileText },
            { id: 'simulator', label: 'Simulateur', icon: Calculator },
            { id: 'timeline', label: 'Avancement', icon: Clock },
            { id: 'videos', label: 'Vidéos', icon: Video },
            { id: 'forum', label: 'Forum', icon: MessageSquare },
            { id: 'calendar', label: 'Calendrier', icon: Calendar },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === item.id 
                  ? 'bg-club-gold text-white shadow-lg' 
                  : 'text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-white/10">
          <Link to="/" className="flex items-center space-x-3 px-4 py-3 text-gray-400 hover:text-white transition-colors">
            <LogOut size={20} />
            <span>Déconnexion</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              {activeTab === 'dashboard' && 'Vue d’ensemble'}
              {activeTab === 'documents' && 'Documents du projet'}
              {activeTab === 'simulator' && 'Simulateur d’investissement'}
              {activeTab === 'timeline' && 'Avancement du projet'}
              {activeTab === 'videos' && 'Médiathèque'}
              {activeTab === 'forum' && 'Discussion investisseurs'}
              {activeTab === 'calendar' && 'Événements à venir'}
            </h1>
            <p className="text-gray-500">Bienvenue, Jean-Philippe</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-gray-600">Investisseurs confirmés : 8 / 12</span>
            </div>
            <div className="w-10 h-10 bg-club-gold rounded-full flex items-center justify-center text-white font-bold">JP</div>
          </div>
        </header>

        {/* Content Area */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 min-h-[600px] p-8">
          
          {/* Dashboard View */}
          {activeTab === 'dashboard' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h3 className="text-blue-800 font-medium mb-2">Montant collecté</h3>
                  <p className="text-3xl font-bold text-club-blue">1 040 000 €</p>
                  <div className="w-full bg-blue-200 h-2 rounded-full mt-4">
                    <div className="bg-club-blue h-2 rounded-full" style={{ width: '66%' }}></div>
                  </div>
                  <p className="text-sm text-blue-600 mt-2">66% de l'objectif</p>
                </div>
                <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                  <h3 className="text-amber-800 font-medium mb-2">Prochaine étape</h3>
                  <p className="text-xl font-bold text-amber-900">Signature notaire</p>
                  <p className="text-sm text-amber-700 mt-2">Prévue le 15 Avril 2024</p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h3 className="text-green-800 font-medium mb-2">Votre statut</h3>
                  <div className="flex items-center space-x-2">
                    <CheckCircle size={20} className="text-green-600" />
                    <p className="text-xl font-bold text-green-900">Dossier validé</p>
                  </div>
                  <p className="text-sm text-green-700 mt-2">Accès complet autorisé</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Carte des projets</h3>
                <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center relative overflow-hidden">
                   <img 
                    src="https://www.sudouest.fr/redaction/infographie/2019/07/26/tourisme/carte.jpg" 
                    alt="Carte côte atlantique" 
                    className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale"
                  /> 
                  <div className="relative z-10 grid grid-cols-2 gap-8">
                    <div className="flex items-center space-x-2 bg-white px-3 py-1.5 rounded-full shadow-lg transform hover:scale-110 transition-transform cursor-pointer">
                      <MapPin className="text-red-500" size={16} />
                      <span className="font-bold text-sm">Capbreton (En cours)</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white px-3 py-1.5 rounded-full shadow-lg opacity-70">
                      <MapPin className="text-gray-500" size={16} />
                      <span className="font-medium text-sm">Biarritz (À venir)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Documents View */}
          {activeTab === 'documents' && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold mb-4">Dossier Investisseur</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {['Business Plan Complet.pdf', 'Statuts de la SCI.pdf', 'Pacte d’associés (Projet).pdf', 'Simulation Fiscale.pdf'].map((doc, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="bg-red-100 p-2 rounded text-red-600">
                        <FileText size={20} />
                      </div>
                      <span className="font-medium text-gray-700">{doc}</span>
                    </div>
                    <Download size={18} className="text-gray-400 group-hover:text-club-blue" />
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-bold mb-4 mt-8">Documents Légaux</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {['Modèle de souscription.pdf', 'KYC & Compliance.pdf'].map((doc, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 p-2 rounded text-club-blue">
                        <FileText size={20} />
                      </div>
                      <span className="font-medium text-gray-700">{doc}</span>
                    </div>
                    <Download size={18} className="text-gray-400 group-hover:text-club-blue" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Simulator View */}
          {activeTab === 'simulator' && (
            <div className="max-w-2xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold mb-6 text-center">Simulateur de Rendement</h3>
                
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Montant de votre investissement</label>
                  <input type="range" min="100000" max="300000" step="10000" className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" />
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>100k€</span>
                    <span className="font-bold text-club-blue text-lg">130 000 €</span>
                    <span>300k€</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-500 mb-1">Revenus annuels</p>
                    <p className="text-xl font-bold text-club-blue">4 850 €</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-500 mb-1">Valeur vacances</p>
                    <p className="text-xl font-bold text-club-gold">5 200 €</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-500 mb-1">Gain 10 ans</p>
                    <p className="text-xl font-bold text-green-600">145 000 €</p>
                  </div>
                </div>

                <p className="text-xs text-center text-gray-400 mt-6">* Ces chiffres sont des estimations basées sur les performances historiques et ne garantissent pas les résultats futurs.</p>
              </div>
            </div>
          )}

          {/* Timeline View */}
          {activeTab === 'timeline' && (
            <div className="relative pl-8 border-l-2 border-gray-200 space-y-12">
              {[
                { title: 'Recherche du bien', date: 'Janvier 2024', status: 'completed' },
                { title: 'Négociation & Offre', date: 'Février 2024', status: 'completed' },
                { title: 'Promesse de vente', date: 'Mars 2024', status: 'completed' },
                { title: 'Levée de fonds', date: 'En cours', status: 'current' },
                { title: 'Signature notaire', date: 'Avril 2024', status: 'pending' },
                { title: 'Travaux & Aménagement', date: 'Mai 2024', status: 'pending' },
                { title: 'Premières locations', date: 'Juin 2024', status: 'pending' },
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className={`absolute -left-[41px] w-5 h-5 rounded-full border-4 border-white ${
                    step.status === 'completed' ? 'bg-green-500' : 
                    step.status === 'current' ? 'bg-club-gold animate-pulse' : 'bg-gray-300'
                  }`}></div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <span className="text-sm text-gray-500">{step.date}</span>
                    <h4 className={`text-lg font-bold ${step.status === 'pending' ? 'text-gray-400' : 'text-gray-800'}`}>{step.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Other tabs placeholders */}
          {(activeTab === 'videos' || activeTab === 'forum' || activeTab === 'calendar') && (
            <div className="text-center py-20">
              <div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
                {activeTab === 'videos' && <Video size={40} className="text-gray-400" />}
                {activeTab === 'forum' && <MessageSquare size={40} className="text-gray-400" />}
                {activeTab === 'calendar' && <Calendar size={40} className="text-gray-400" />}
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">Contenu bientôt disponible</h3>
              <p className="text-gray-500">Cette section sera activée une fois le groupe d'investisseurs complet.</p>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default MemberArea;
