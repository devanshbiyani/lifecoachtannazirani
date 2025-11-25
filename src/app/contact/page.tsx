import { contact } from '../../lib/data';

export const metadata = {
  title: 'Contact Us | Tannaz Irani',
  description: 'Get in touch with Tannaz Irani for professional coaching and mentorship services.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Contact Us</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">Ready to unlock your potential? Book a session with Tannaz Irani today.</p>

        <div className="text-lg md:text-xl mb-8">
          <p className="text-gray-300">Phone:</p>
          <a href={`tel:${contact.phone}`} className="text-3xl md:text-5xl font-bold text-emerald-500 hover:text-emerald-400 transition-colors">
            {contact.phone}
          </a>
        </div>

        <p className="text-lg text-gray-300 mb-8">Sessions are conducted via video call and last approximately 45 minutes for only ₹3,499.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/" className="px-8 py-4 bg-emerald-500 rounded-lg text-lg hover:bg-emerald-600 transition-colors">Back to Home</a>
          <a href={`tel:${contact.phone}`} className="px-8 py-4 bg-slate-700 border border-emerald-500 rounded-lg text-lg hover:bg-slate-600 transition-colors">Call Now</a>
        </div>
      </div>
    </div>
  );
}
