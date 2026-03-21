import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <section className="bg-slate-950 px-4 pb-16 pt-36 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Legal
          </p>
          <h1 className="text-4xl font-extrabold md:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            Your privacy matters to us. This Privacy Policy explains how Unity
            Lift Solutions collects, uses, and protects your information when
            you use our website or contact us for services.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 text-slate-800">
        <div className="mx-auto max-w-5xl space-y-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
          <div>
            <h2 className="text-2xl font-bold">1. Information We Collect</h2>
            <p className="mt-3 leading-8 text-slate-600">
              We may collect basic information such as your name, phone number,
              email address, business details, and service requirements when you
              fill out a contact form, request a quotation, or communicate with
              us directly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">2. How We Use Your Information</h2>
            <p className="mt-3 leading-8 text-slate-600">
              We use your information to respond to enquiries, provide service
              details, share quotations, improve customer support, and maintain
              communication regarding installation, AMC, maintenance, or lift
              modernization services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">3. Data Protection</h2>
            <p className="mt-3 leading-8 text-slate-600">
              We take reasonable steps to protect your information from
              unauthorized access, misuse, or disclosure. However, no online
              method of transmission or storage is completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">4. Sharing of Information</h2>
            <p className="mt-3 leading-8 text-slate-600">
              We do not sell, rent, or trade your personal information to third
              parties. Your details may only be shared when required for service
              delivery, legal compliance, or trusted operational support.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">5. Cookies and Website Usage</h2>
            <p className="mt-3 leading-8 text-slate-600">
              Our website may use cookies or basic analytics tools to understand
              visitor behavior and improve website performance. These tools help
              us enhance user experience and website functionality.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">6. Third-Party Links</h2>
            <p className="mt-3 leading-8 text-slate-600">
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of such external
              websites.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">7. Your Consent</h2>
            <p className="mt-3 leading-8 text-slate-600">
              By using our website, you consent to the terms of this Privacy
              Policy and agree to the collection and use of information as
              described here.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">8. Updates to This Policy</h2>
            <p className="mt-3 leading-8 text-slate-600">
              We may update this Privacy Policy from time to time to reflect
              website, service, or legal changes. Updated versions will be
              posted on this page.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">9. Contact Us</h2>
            <p className="mt-3 leading-8 text-slate-600">
              If you have any questions regarding this Privacy Policy, you may
              contact us through our website contact page or official business
              details.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}