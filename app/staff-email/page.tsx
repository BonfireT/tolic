import { FaEnvelopeOpenText, FaExternalLinkAlt } from "react-icons/fa";

export const metadata = {
  title: "Staff Email | Tree of Life International Churches",
};

export default function StaffEmailPage() {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-md text-center" data-aos="fade-up">
        <FaEnvelopeOpenText className="mx-auto mb-6 text-emerald-500" size={40} />
        <h1 className="font-serif text-2xl sm:text-3xl mb-4">Staff Email</h1>
        <p className="text-gray-300 leading-relaxed">
          TOLIC staff and pastors can access their church email account
          through our webmail portal.
        </p>

        
          <a href="https://mail.treeoflifeinternationalchurches.org"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-600 transition-colors"
        >
          Open Staff Webmail
          <FaExternalLinkAlt size={12} />
        </a>

        <p className="mt-8 text-sm text-gray-500">
          Not staff, but need to reach us?{" "}
          
            <a href="mailto:info@treeoflifeinternationalchurches.org"
            className="underline hover:text-emerald-400"
          >
            info@treeoflifeinternationalchurches.org
          </a>
        </p>
      </div>
    </div>
  );
}