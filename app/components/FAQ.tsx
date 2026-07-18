export default function FAQ() {
  const faqs = [
    {
      question: "What services do you provide?",
      answer:
        "We provide AI Chatbots, Business Automation, Website Development and Custom Software.",
    },
    {
      question: "How long does a project take?",
      answer:
        "Most projects are completed within 2–6 weeks depending on the requirements.",
    },
    {
      question: "Do you provide support after delivery?",
      answer:
        "Yes, we provide support and maintenance after project delivery.",
    },
    {
      question: "How can I contact you?",
      answer:
        "You can contact us through the Contact section or email us anytime.",
    },
  ];

  return (
    <section className="bg-gray-950 py-20 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Find answers to the most common questions.
        </p>

        <div className="mt-12 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-700 p-6 bg-gray-900"
            >
              <h3 className="text-xl font-semibold text-blue-400">
                {faq.question}
              </h3>

              <p className="mt-3 text-gray-300">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}