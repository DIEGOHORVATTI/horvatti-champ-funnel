import PageLayout from '@/react-app/components/PageLayout';
import { ArrowRight, Mail, Phone } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
  description: string;
  comingSoon?: boolean;
}

export default function PlaceholderPage({ title, description, comingSoon = true }: PlaceholderPageProps) {
  return (
    <PageLayout title={title}>
      <div className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            {title}
          </h1>
          
          {comingSoon ? (
            <>
              <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                Em Breve
              </div>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Esta página está sendo desenvolvida. {description}
              </p>
              <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md mx-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fique por dentro das novidades</h3>
                <p className="text-gray-600 mb-6">Entre em contato conosco para mais informações.</p>
                <div className="space-y-3">
                  <a 
                    href="mailto:contato@horvattichamp.com" 
                    className="flex items-center justify-center w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    contato@horvattichamp.com
                  </a>
                  <a 
                    href="tel:+5511999999999" 
                    className="flex items-center justify-center w-full border border-emerald-600 text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    (11) 99999-9999
                  </a>
                </div>
              </div>
            </>
          ) : (
            <>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                {description}
              </p>
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-xl hover:bg-emerald-700 transition-all duration-200 font-semibold text-lg inline-flex items-center">
                Entrar em Contato <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
