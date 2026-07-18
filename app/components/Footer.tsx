export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold text-blue-500">
              AI Automation Lab
            </h2>

            <p className="mt-4 text-gray-400">
              We help businesses grow with AI Chatbots, Automation,
              Websites and Custom Software.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-blue-400">
                  Services
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-blue-400">
                  About
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <p className="text-gray-400">
              📧 priyanshu.automation.lab@gmail.com
            </p>

            <p className="text-gray-400 mt-2">
              📞 +91 98765 43210
            </p>

            <p className="text-gray-400 mt-2">
              📍 Prayagraj, Uttar Pradesh
            </p>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          © 2026 AI Automation Lab. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}