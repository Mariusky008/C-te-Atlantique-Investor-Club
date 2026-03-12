import React, { useState } from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface QualificationTunnelProps {
  isOpen: boolean;
  onClose: () => void;
}

const QualificationTunnel: React.FC<QualificationTunnelProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    budget: '',
    horizon: '',
    experience: '',
    email: ''
  });

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Final submission logic would go here
      // For demo, we'll just close and redirect to member area (simulating success)
      onClose();
      navigate('/member-area');
    }
  };

  const updateField = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-club-blue/90 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
        {/* Progress Bar */}
        <div className="h-2 bg-gray-100 w-full">
          <div 
            className="h-full bg-club-gold transition-all duration-500 ease-out"
            style={{ width: `${(step / 4) * 100}%` }}
          ></div>
        </div>

        {/* Header */}
        <div className="p-8 pb-0 flex justify-between items-center">
          <h3 className="text-xl font-serif font-bold text-club-blue">
            {step === 1 && "Votre profil d'investisseur"}
            {step === 2 && "Vos objectifs"}
            {step === 3 && "Votre expérience"}
            {step === 4 && "Accès au dossier"}
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 flex-1 overflow-y-auto">
          {step === 1 && (
            <div className="space-y-4">
              <p className="text-gray-600 mb-6">Quel budget envisagez-vous d'investir dans ce projet immobilier ?</p>
              {[
                "Moins de 50 000 €",
                "50 000 € - 100 000 €",
                "100 000 € - 200 000 €",
                "Plus de 200 000 €"
              ].map((option) => (
                <button
                  key={option}
                  onClick={() => { updateField('budget', option); handleNext(); }}
                  className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-club-gold hover:bg-club-gold/5 transition-all flex justify-between items-center group"
                >
                  <span className="font-medium text-gray-700 group-hover:text-club-blue">{option}</span>
                  <ArrowRight size={18} className="text-gray-300 group-hover:text-club-gold opacity-0 group-hover:opacity-100 transition-all" />
                </button>
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <p className="text-gray-600 mb-6">Quel est votre horizon d'investissement ?</p>
              {[
                "Court terme (< 3 ans)",
                "Moyen terme (3 - 7 ans)",
                "Long terme (8 - 15 ans)",
                "Patrimonial (Transmission)"
              ].map((option) => (
                <button
                  key={option}
                  onClick={() => { updateField('horizon', option); handleNext(); }}
                  className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-club-gold hover:bg-club-gold/5 transition-all flex justify-between items-center group"
                >
                  <span className="font-medium text-gray-700 group-hover:text-club-blue">{option}</span>
                  <ArrowRight size={18} className="text-gray-300 group-hover:text-club-gold opacity-0 group-hover:opacity-100 transition-all" />
                </button>
              ))}
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <p className="text-gray-600 mb-6">Avez-vous déjà investi dans l'immobilier ?</p>
              {[
                "Non, c'est mon premier investissement",
                "Oui, résidence principale uniquement",
                "Oui, j'ai déjà fait du locatif",
                "Oui, je suis un investisseur aguerri"
              ].map((option) => (
                <button
                  key={option}
                  onClick={() => { updateField('experience', option); handleNext(); }}
                  className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-club-gold hover:bg-club-gold/5 transition-all flex justify-between items-center group"
                >
                  <span className="font-medium text-gray-700 group-hover:text-club-blue">{option}</span>
                  <ArrowRight size={18} className="text-gray-300 group-hover:text-club-gold opacity-0 group-hover:opacity-100 transition-all" />
                </button>
              ))}
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                <Check size={32} />
              </div>
              <h4 className="text-2xl font-serif font-bold text-club-blue mb-2">Profil validé</h4>
              <p className="text-gray-600 mb-8">
                Votre profil correspond aux critères du club. Entrez votre email pour recevoir votre invitation et accéder au dossier complet.
              </p>
              
              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="votre@email.com" 
                  className="w-full p-4 rounded-xl border border-gray-300 focus:border-club-gold focus:ring-2 focus:ring-club-gold/20 outline-none transition-all"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                />
                <button 
                  onClick={handleNext}
                  className="w-full bg-club-gold text-white py-4 rounded-xl font-bold text-lg hover:bg-club-gold-light transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                >
                  Accéder à l'Espace Membre
                </button>
                <p className="text-xs text-gray-400 mt-4">
                  En cliquant, vous acceptez de recevoir des informations sur nos opportunités d'investissement. Vos données restent confidentielles.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QualificationTunnel;
