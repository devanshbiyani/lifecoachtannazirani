import { contact } from '../../lib/data';

export const metadata = {
  title: 'Contact Us | Tannaz Irani',
  description: 'Get in touch with Tannaz Irani for professional coaching and mentorship services.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center w-full">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-8">Contact Us</h1>
        <p className="text-base md:text-xl text-gray-300 mb-8 px-2">Ready to unlock your potential? Book a session with Tannaz Irani today.</p>

        <div className="text-lg md:text-xl mb-8">
          <p className="text-gray-300 mb-2">Phone:</p>
          <a href={`tel:${contact.phone}`} className="text-2xl md:text-4xl lg:text-5xl font-bold text-emerald-500 hover:text-emerald-400 transition-colors block break-all">
            {contact.phone}
          </a>
        </div>

        <p className="text-base md:text-lg text-gray-300 mb-8 px-2">Sessions are conducted via video call and last approximately 45 minutes for only ₹3,499.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mx-auto">
          <a href="/" className="px-8 py-4 bg-emerald-500 rounded-lg text-lg hover:bg-emerald-600 transition-colors text-center">Back to Home</a>
          <a href={`tel:${contact.phone}`} className="px-8 py-4 bg-slate-700 border border-emerald-500 rounded-lg text-lg hover:bg-slate-600 transition-colors text-center">Call Now</a>
        </div>
      </div>
    </div>
  );
}