export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      company: "Tech Solutions",
      text: "AI Automation Lab helped us automate customer support. Our response time improved dramatically.",
    },
    {
      name: "Priya Verma",
      company: "Digital Agency",
      text: "Professional website and AI chatbot. Highly recommended.",
    },
    {
      name: "Amit Singh",
      company: "Startup Founder",
      text: "The automation saved us many hours every week. Excellent service!",
    },
  ];

  return (
    <section className="bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold">
          What Our Clients Say
        </h2>

        <p className="mt-4 text-center text-gray-400">
          Trusted by businesses across India.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-800 bg-gray-900 p-6 hover:border-blue-500 transition"
            >
              <p className="text-gray-300">
                "{review.text}"
              </p>

              <div className="mt-6">
                <h3 className="text-lg font-bold">
                  {review.name}
                </h3>

                <p className="text-blue-400">
                  {review.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}