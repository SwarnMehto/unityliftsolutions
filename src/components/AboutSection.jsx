import aboutImg from "../assets/images/about.png";

export default function AboutSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
        <div>
          <img
            src={aboutImg}
            alt="About Unity Lift Solutions"
            className="h-full min-h-[380px] w-full rounded-3xl object-cover shadow-xl"
          />
        </div>

        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-amber-500">
            About Company
          </p>
          <h2 className="text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            Trusted Lift Experts With Complete End-To-End Service
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            We deliver safe, elegant and high-performance elevator solutions
            with installation, modernization, AMC and breakdown support.
            Our focus is quality engineering, smooth operation and customer trust.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-bold text-slate-900">
                Custom Design
              </h3>
              <p className="text-slate-600">
                Lift solutions as per building type, size and budget.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-bold text-slate-900">
                Reliable Support
              </h3>
              <p className="text-slate-600">
                Quick response maintenance and service assistance.
              </p>
            </div>
          </div>

          <a
            href="/about"
            className="mt-8 inline-block rounded-xl bg-amber-400 px-6 py-3 font-semibold text-slate-900 transition hover:scale-105"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}