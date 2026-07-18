export default function WhyChooseUs() {
  return (
    <section className="bg-black px-8 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-5xl font-bold">
          Why Choose Us
        </h2>

        <p className="mb-12 text-center text-gray-400">
          We deliver smart AI solutions that help your business grow.
        </p>

        <div className="grid gap-6 md:grid-cols-4">

          <div className="rounded-2xl border border-blue-500/30 bg-gray-900 p-6 text-center">
            <div className="mb-4 text-5xl">⚡</div>
            <h3 className="text-xl font-bold">Fast Delivery</h3>
            <p className="mt-3 text-gray-400">
              Quick project completion with high quality.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-500/30 bg-gray-900 p-6 text-center">
            <div className="mb-4 text-5xl">🤖</div>
            <h3 className="text-xl font-bold">AI Experts</h3>
            <p className="mt-3 text-gray-400">
              Modern AI automation and chatbot solutions.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-500/30 bg-gray-900 p-6 text-center">
            <div className="mb-4 text-5xl">🔒</div>
            <h3 className="text-xl font-bold">Secure</h3>
            <p className="mt-3 text-gray-400">
              Safe, reliable and scalable systems.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-500/30 bg-gray-900 p-6 text-center">
            <div className="mb-4 text-5xl">💬</div>
            <h3 className="text-xl font-bold">24/7 Support</h3>
            <p className="mt-3 text-gray-400">
              We're always here to help our clients.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
