import { services, serviceInfo } from '../lib/data';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 px-4 py-20 md:py-0">
        <div className="text-center w-full">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">Unlock Your Potential with Tannaz Irani</h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto px-2">Transform your life through professional coaching in mindset, relationships, parenting, Bollywood career, and motivational speaking.</p>
          <div className="relative w-full max-w-[600px] mx-auto mb-8">
            <Image src="/images/hero.jpg" alt="Tannaz Irani" width={600} height={400} className="rounded-lg shadow-lg w-full h-auto" priority />
          </div>
          <a href="#services" className="inline-block px-8 py-4 bg-emerald-500 text-white rounded-lg text-lg hover:bg-emerald-600 transition-colors">Explore Services</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-16 px-4 bg-slate-800">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-8 md:mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 justify-items-center max-w-7xl mx-auto">
          {services.map((service) => (
            <div key={service.slug} className={`p-6 rounded-lg ${service.color} text-white text-center hover:scale-105 transition-transform cursor-pointer shadow-lg w-full`}>
              <div className="text-5xl md:text-6xl mb-4">{service.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">{service.name}</h3>
              <p className="mb-4 text-sm md:text-base">{service.description}</p>
              <a href={`/${service.slug}`} className="inline-block px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors text-sm md:text-base">Learn More</a>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8">About Tannaz Irani</h2>
          <Image src="/images/tannaz.jpg" alt="Tannaz Irani" width={300} height={300} className="mx-auto mb-8 rounded-full shadow-lg w-48 h-48 md:w-[300px] md:h-[300px] object-cover" />
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 px-2">
            With a diverse background in acting and a certification as an Advanced NLP Practitioner, Tannaz Irani brings emotional intelligence and subconscious rewiring techniques to her coaching.
            Whether it's personal transformation, relationship healing, parenting guidance, career mentorship, or inspiring audiences, Tannaz creates impactful change through her expert services.
          </p>
          <p className="text-sm md:text-lg text-gray-300">Sessions are conducted via video calls for 45 minutes at ₹3,499, or join group masterclasses for ₹499+.</p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-16 px-4 bg-slate-800">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-8 md:mb-12">Our Coaching Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center text-white">
            <div className="text-5xl md:text-6xl mb-4">1</div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Initial Consultation</h3>
            <p className="text-sm md:text-base">Discuss goals and assess needs in a free intro session.</p>
          </div>
          <div className="text-center text-white">
            <div className="text-5xl md:text-6xl mb-4">2</div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Personalized Coaching</h3>
            <p className="text-sm md:text-base">Receive tailored sessions using NLP and emotional intelligence.</p>
          </div>
          <div className="text-center text-white">
            <div className="text-5xl md:text-6xl mb-4">3</div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Ongoing Support</h3>
            <p className="text-sm md:text-base">Continue transformation with resources and check-ins.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 px-4 bg-slate-900">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-8 md:mb-12">What Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-slate-800 rounded-lg text-white">
            <p className="mb-4 italic">"Tannaz helped me overcome my mental blocks and achieve my goals."</p>
            <p className="font-semibold">- Client A</p>
          </div>
          <div className="p-6 bg-slate-800 rounded-lg text-white">
            <p className="mb-4 italic">"Her relationship counselling saved my marriage."</p>
            <p className="font-semibold">- Client B</p>
          </div>
          <div className="p-6 bg-slate-800 rounded-lg text-white">
            <p className="mb-4 italic">"As an aspiring actor, her mentorship was invaluable."</p>
            <p className="font-semibold">- Client C</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 md:py-16 px-4 bg-slate-800">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-8 md:mb-12">Pricing</h2>
        <div className="flex flex-col items-center text-center text-white gap-8">
          <div className="w-full">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">1-on-1 Sessions</h3>
            <p className="text-lg md:text-xl font-bold text-emerald-400">₹3,499 <span className="text-sm font-normal text-white">per session</span></p>
            <p className="text-sm md:text-base text-gray-300 mt-2">{serviceInfo.duration} via {serviceInfo.mode}</p>
          </div>
          <div className="w-full">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Group Masterclasses</h3>
            <p className="text-lg md:text-xl font-bold text-yellow-400">₹499+ <span className="text-sm font-normal text-white">per attendee</span></p>
            <p className="text-sm md:text-base text-gray-300 mt-2">{serviceInfo.group}</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 px-4 bg-slate-900">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-8 md:mb-12">FAQ</h2>
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-white">
            <h3 className="text-lg md:text-xl font-semibold mb-2">What is NLP?</h3>
            <p className="text-sm md:text-base text-gray-300">Neuro-Linguistic Programming is a methodology for subconscious rewiring and emotional intelligence.</p>
          </div>
          <div className="text-white">
            <h3 className="text-lg md:text-xl font-semibold mb-2">How are sessions conducted?</h3>
            <p className="text-sm md:text-base text-gray-300">Via video calls like Google Meet.</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 md:py-16 px-4 bg-emerald-500 text-white text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your Life?</h2>
        <p className="text-base md:text-xl mb-8">Contact us today to book your session.</p>
        <a href="/contact" className="inline-block px-8 py-4 bg-white text-emerald-500 rounded-lg text-lg hover:bg-gray-200 transition-colors">Contact Us</a>
      </section>
    </div>
  );
}