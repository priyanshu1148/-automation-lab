export default function Services() {
  return (
    <section
      id="services"
      className="bg-black px-8 py-20 text-white"
    >
      <h2 className="mb-4 text-center text-5xl font-bold">
        Our Services
      </h2>

      <p className="mb-12 text-center text-gray-400">
        Smart AI solutions for modern businesses.
      </p>

      <div className="grid gap-8 md:grid-cols-3">

        <div className="rounded-2xl border border-blue-500/30 bg-gray-900/70 p-8 shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-blue-500/50">
          <div className="mb-4 text-5xl">🤖</div>
          <h3 className="text-2xl font-bold">AI Chatbots</h3>
          <p className="mt-4 text-gray-400">
            Intelligent chatbots for customer support and lead generation.
          </p>
        </div>

        <div className="rounded-2xl border border-blue-500/30 bg-gray-900/70 p-8 shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-blue-500/50">
          <div className="mb-4 text-5xl">⚡</div>
          <h3 className="text-2xl font-bold">Automation</h3>
          <p className="mt-4 text-gray-400">
            Automate repetitive tasks and save hours every day.
          </p>
        </div>

        <div className="rounded-2xl border border-blue-500/30 bg-gray-900/70 p-8 shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-blue-500/50">
          <div className="mb-4 text-5xl">🌐</div>
          <h3 className="text-2xl font-bold">Web Development</h3>
          <p className="mt-4 text-gray-400">
            Fast, modern and responsive websites built with the latest technology.
          </p>
        </div>

      </div>
    </section>
  );
}