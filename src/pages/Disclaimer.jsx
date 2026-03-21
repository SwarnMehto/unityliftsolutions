import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Disclaimer() {
  return (
    <>
      <Navbar />

      <section className="bg-slate-950 px-4 pb-16 pt-36 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Legal
          </p>
          <h1 className="text-4xl font-extrabold md:text-6xl">Disclaimer</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            The information provided on this website is for general information
            and service awareness purposes only. Unity Lift Solutions makes
            reasonable efforts to keep information accurate and updated.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 text-slate-800">
        <div className="mx-auto max-w-5xl space-y-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
          <div>
            <h2 className="text-2xl font-bold">1. General Information</h2>
            <p className="mt-3 leading-8 text-slate-600">
              All content on this website is published in good faith and for
              general informational purposes only. We do not guarantee the
              completeness, reliability, or accuracy of every detail at all
              times.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">2. No Professional Warranty</h2>
            <p className="mt-3 leading-8 text-slate-600">
              Service descriptions, features, pricing references, and project
              details shown on this website are subject to discussion, site
              conditions, technical feasibility, and final agreement. Actual
              service scope may vary depending on project requirements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">3. External Links Disclaimer</h2>
            <p className="mt-3 leading-8 text-slate-600">
              This website may include links to other websites for convenience
              or reference. We do not control or endorse the nature, content, or
              availability of those external websites.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">4. Limitation of Liability</h2>
            <p className="mt-3 leading-8 text-slate-600">
              Unity Lift Solutions shall not be held liable for any loss or
              damage arising from the use of this website, reliance on website
              content, or temporary unavailability of the website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">5. Technical and Service Changes</h2>
            <p className="mt-3 leading-8 text-slate-600">
              We reserve the right to modify, update, or remove any content,
              service details, or website sections at any time without prior
              notice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">6. Consent</h2>
            <p className="mt-3 leading-8 text-slate-600">
              By using this website, you agree to this Disclaimer and accept its
              terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">7. Contact</h2>
            <p className="mt-3 leading-8 text-slate-600">
              For any questions related to website content, services, or legal
              information, please contact us through our official contact
              details.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}