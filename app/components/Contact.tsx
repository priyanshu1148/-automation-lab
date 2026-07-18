export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-950 px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-4 text-center text-5xl font-bold">
          Contact Us
        </h2>

        <p className="mb-10 text-center text-gray-400">
          Let's build something amazing together.
        </p>

        {/* Contact Information */}
        <div className="mb-8 rounded-xl border border-gray-800 bg-gray-900 p-6 text-center">
          <p className="text-gray-300">
            📧 <strong>Email:</strong> priyanshu.automation.lab@gmail.com
          </p>

          <p className="mt-3 text-gray-300">
            📍 Prayagraj, Uttar Pradesh, India
          </p>
        </div>

        <form className="space-y-6 rounded-2xl border border-gray-800 bg-gray-900 p-8 shadow-lg">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-lg border border-gray-700 bg-black p-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-700 bg-black p-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Message
            </label>

            <textarea
              rows={5}
              placeholder="Write your message..."
              className="w-full rounded-lg border border-gray-700 bg-black p-3 text-white outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 text-lg font-semibold transition hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}