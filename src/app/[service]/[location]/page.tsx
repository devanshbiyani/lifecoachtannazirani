import { services, getServiceBySlug } from '../../../lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return services.flatMap(s =>
    ['india'].map(location => ({ service: s.slug, location }))
  );
}

export async function generateMetadata({ params }: { params: { service: string; location: string } }) {
  const service = getServiceBySlug(params.service);
  if (!service || params.location !== 'india') return { title: 'Not Found' };
  const locationName = 'India';
  return {
    title: `${service.name} in ${locationName} | Tannaz Irani`,
    description: `Professional ${service.name} services in ${locationName}. Unlock your potential with expert coaching from Tannaz Irani.`,
    keywords: [`${service.slug}`, `${service.slug} ${params.location}`, 'life coaching', locationName.toLowerCase(), 'tannaz irani'],
  };
}

export default function ServiceLocationPage({ params }: { params: { service: string; location: string } }) {
  const service = getServiceBySlug(params.service);
  if (!service || params.location !== 'india') notFound();

  const locationName = 'India';

  // Common challenges for each service
  const commonChallenges = {
    'life-mindset-coaching': ['Mental barriers', 'Lack of confidence', 'Unclear goals', 'Emotional blocks'],
    'relationship-counselling': ['Communication gaps', 'Trust issues', 'Conflict resolution', 'Emotional intimacy'],
    'parenting-coaching': ['Parenting stress', 'Child behavior issues', 'Family dynamics', 'Emotional development'],
    'bollywood-career-mentorship': ['Audition anxiety', 'Industry networking', 'Skill gaps', 'Career direction'],
    'motivational-speaker': ['Event impact', 'Audience engagement', 'Content relevance', 'Presentation skills'],
  }[service.slug] || [];

  // Local benefits
  const localBenefits = `Serving clients in ${locationName} allows for cultural context in coaching, understanding local challenges and integrating traditional values with modern techniques.`;

  // Case study
  const caseStudy = `A client in ${locationName} overcame significant challenges using NLP practices, leading to transformative personal growth.`;

  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className={`flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 px-4 py-20 md:py-0 ${service.color}`}>
        <div className="text-center w-full">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">{service.name} in {locationName}</h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto px-2">{service.description} Tailored for {locationName} clients.</p>
          <div className="relative w-full max-w-[600px] mx-auto mb-8">
            <Image src={`/images/${service.slug}.jpg`} alt={service.name} width={600} height={400} className="rounded-lg shadow-lg w-full h-auto" />
          </div>
          <a href="#book" className="inline-block px-8 py-4 bg-emerald-500 text-white rounded-lg text-lg hover:bg-emerald-600 transition-colors">Book Now</a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 px-4 bg-slate-900">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-8 md:mb-12">Success Stories in {locationName}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-slate-800 rounded-lg text-white">
            <p className="mb-4 italic">"Life-changing experience with coaching in {locationName}."</p>
            <p className="font-semibold">- Local Client</p>
          </div>
          <div className="p-6 bg-slate-800 rounded-lg text-white">
            <p className="mb-4 italic">"Tannaz understands {locationName} culture perfectly."</p>
            <p className="font-semibold">- Satisfied Participant</p>
          </div>
          <div className="p-6 bg-slate-800 rounded-lg text-white">
            <p className="mb-4 italic">"Highly effective methods tailored for my needs."</p>
            <p className="font-semibold">- Grateful Individual</p>
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-12 md:py-16 px-4 bg-slate-800">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-8 md:mb-12">Common Challenges Addressed</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto text-white">
          {commonChallenges.map((challenge, i) => (
            <div key={i} className="p-6 bg-slate-900 rounded-lg text-center shadow-md">
              <h3 className="text-lg md:text-xl font-semibold">{challenge}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Local Benefits */}
      <section className="py-12 md:py-16 px-4 bg-slate-900">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-8 md:mb-12">Why Choose Coaching in {locationName}?</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base md:text-lg text-gray-300 leading-relaxed px-2">{localBenefits}</p>
          <p className="text-base md:text-lg text-gray-300 mt-4 px-2">Experience personalized sessions that respect and integrate local values for holistic growth.</p>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 md:py-16 px-4 bg-slate-800">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-8 md:mb-12">Our Proven Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center text-white">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Personalized Assessment</h3>
            <p className="text-sm md:text-base text-gray-300">Comprehensive evaluation of your unique situation in {locationName}.</p>
          </div>
          <div className="text-center text-white">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Targeted Coaching</h3>
            <p className="text-sm md:text-base text-gray-300">Customized sessions focusing on your specific goals.</p>
          </div>
          <div className="text-center text-white">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Sustained Transformation</h3>
            <p className="text-sm md:text-base text-gray-300">Ongoing support for long-term change.</p>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-12 md:py-16 px-4 bg-slate-900">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-8 md:mb-12">Real Case Study</h2>
        <div className="max-w-4xl mx-auto px-2">
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">{caseStudy}</p>
          <blockquote className="mt-8 text-lg md:text-xl italic text-white border-l-4 border-emerald-500 pl-4">
            "The techniques used were exactly what I needed for my growth in this context." - Anonymous Client
          </blockquote>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 px-4 bg-slate-800">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-8 md:mb-12">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-white">
            <h3 className="text-lg md:text-xl font-semibold mb-2">How many sessions do I need?</h3>
            <p className="text-sm md:text-base text-gray-300">It varies, but most clients see results within 3-5 sessions.</p>
          </div>
          <div className="text-white">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Are sessions virtual?</h3>
            <p className="text-sm md:text-base text-gray-300">Yes, conducted via Google Meet for your convenience.</p>
          </div>
          <div className="text-white">
            <h3 className="text-lg md:text-xl font-semibold mb-2">What's the methodology?</h3>
            <p className="text-sm md:text-base text-gray-300">NLP, emotional intelligence, and subconscious rewiring.</p>
          </div>
          <div className="text-white">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Can I book online?</h3>
            <p className="text-sm md:text-base text-gray-300">Yes, through Advice Bazaar or Tannaz's personal Academy website.</p>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-12 md:py-16 px-4 bg-emerald-500 text-white text-center" id="book">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="text-base md:text-xl mb-8">Book {service.name} in {locationName} today.</p>
        <a href="/contact" className="inline-block px-8 py-4 bg-white text-emerald-500 rounded-lg text-lg hover:bg-gray-200 transition-colors">Contact Us</a>
      </section>
    </div>
  );
}