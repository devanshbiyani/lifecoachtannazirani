import { services, serviceInfo, getServiceBySlug } from '../../lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return services.map(s => ({ service: s.slug }));
}

export async function generateMetadata({ params }: { params: { service: string } }) {
  const service = getServiceBySlug(params.service);
  if (!service) return { title: 'Not Found' };
  return {
    title: `${service.name} | Tannaz Irani`,
    description: `Professional ${service.name} in India. ${service.description}`,
    keywords: [`${service.slug}`, 'life coaching', 'india', 'tannaz irani'],
  };
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const service = getServiceBySlug(params.service);
  if (!service) notFound();

  // Unique key areas for each service
  const keyAreas = {
    'life-mindset-coaching': ['Overcome mental blocks', 'Unlock potential', 'Build confidence', 'Personal transformation'],
    'relationship-counselling': ['Resolve conflicts', 'Strengthen bonds', 'Communication skills', 'Relationship healing'],
    'parenting-coaching': ['Conscious parenting', 'Emotional intelligence for kids', 'Healthy family dynamics', 'Raising mindful children'],
    'bollywood-career-mentorship': ['Audition tips', 'Industry insights', 'Acting skills', 'Career guidance'],
    'motivational-speaker': ['Inspiring talks', 'Corporate events', 'Social causes', 'Motivational content'],
  }[service.slug] || [];

  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className={`flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 px-4 py-20 md:py-0 ${service.color}`}>
        <div className="text-center w-full">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">{service.name} in India</h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto px-2">{service.description}</p>
          <div className="relative w-full max-w-[600px] mx-auto mb-8">
            <Image src={`/images/${service.slug}.jpg`} alt={service.name} width={600} height={400} className="rounded-lg shadow-lg w-full h-auto" />
          </div>
          <a href="#book" className="inline-block px-8 py-4 bg-emerald-500 text-white rounded-lg text-lg hover:bg-emerald-600 transition-colors">Book a Session</a>
        </div>
      </section>

      {/* Key Areas */}
      <section className="py-12 md:py-16 px-4 bg-slate-800">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-8 md:mb-12">Key Areas of Focus</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
          {keyAreas.map((area, i) => (
            <div key={i} className="p-6 bg-slate-900 rounded-lg text-white text-center shadow-md">
              <h3 className="text-lg md:text-xl font-semibold">{area}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 md:py-16 px-4 bg-slate-900">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-8 md:mb-12">Benefits You'll Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto text-white">
          <div className="text-center p-4">
            <p className="text-base md:text-lg">Personal growth through NLP techniques.</p>
          </div>
          <div className="text-center p-4">
            <p className="text-base md:text-lg">Structured sessions for tangible results.</p>
          </div>
          <div className="text-center p-4">
            <p className="text-base md:text-lg">Experienced guidance from Tannaz Irani.</p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 md:py-16 px-4 bg-slate-800">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-8 md:mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center text-white">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Assessment</h3>
            <p className="text-sm md:text-base text-gray-300">Understand your needs in the initial consultation.</p>
          </div>
          <div className="text-center text-white">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Coaching Sessions</h3>
            <p className="text-sm md:text-base text-gray-300">Receive personalized, transformative sessions.</p>
          </div>
          <div className="text-center text-white">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Follow-up</h3>
            <p className="text-sm md:text-base text-gray-300">Get ongoing support and resources.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 px-4 bg-slate-900">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-8 md:mb-12">Client Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-slate-800 rounded-lg text-white">
            <p className="mb-4 italic">"Transformed my mindset completely."</p>
            <p className="font-semibold">- Happy Client</p>
          </div>
          <div className="p-6 bg-slate-800 rounded-lg text-white">
            <p className="mb-4 italic">"Highly recommend for personal growth."</p>
            <p className="font-semibold">- Satisfied Client</p>
          </div>
          <div className="p-6 bg-slate-800 rounded-lg text-white">
            <p className="mb-4 italic">"Professional and effective coaching."</p>
            <p className="font-semibold">- Loyal Client</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 md:py-16 px-4 bg-slate-800" id="book">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-8 md:mb-12">Pricing</h2>
        <div className="flex flex-col items-center text-center text-white">
          <div className="mb-8 w-full">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Private Sessions</h3>
            <p className="text-2xl md:text-3xl font-bold text-emerald-400 mb-2">₹3,499 <span className="text-lg font-normal text-white">per session</span></p>
            <p className="text-sm md:text-base text-gray-300">{serviceInfo.duration} via {serviceInfo.mode}</p>
            <p className="text-sm md:text-base text-gray-300">Uses {serviceInfo.methodology}</p>
          </div>
          <a href="/contact" className="inline-block px-8 py-4 bg-emerald-500 text-white rounded-lg text-lg hover:bg-emerald-600 transition-colors">Book Now</a>
        </div>
      </section>
    </div>
  );
}