"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "What is the best material for a deck fence?",
      answer:
        "Composite and vinyl are popular for low maintenance, while wood offers a natural look but requires regular upkeep.",
    },
    {
      question: "How tall should my deck fence be?",
      answer:
        "Deck fences are typically 36 to 42 inches high, depending on local building codes and design preference.",
    },
    {
      question: "How much does a deck fence installation typically cost?",
      answer:
        "The cost varies depending on materials and size, but most installations range from $20 to $60 per linear foot.",
    },
    {
      question: "What is the maintenance required for wood vs. composite deck fences?",
      answer:
        "Wood deck fences require annual cleaning to remove dirt, mold, or mildew, as well as staining or sealing every 1–2 years to protect against moisture and UV damage.",
    },
    {
      question: "Are your deck fences code-compliant and safe for children?",
      answer:
        "Yes, our fences are built to meet or exceed all local safety codes and provide a secure barrier for children and pets.",
    },
    {
      question: "How long does it take to complete a deck fence installation?",
      answer:
        "Most projects are completed within 2–5 days, depending on size, complexity, and weather conditions.",
    },
    {
      question: "Can I customize the design of my deck fence?",
      answer:
        "Absolutely! We offer a variety of styles, colors, and finishes to match your preferences and home design.",
    },
  ];

  return (
    <section className="bg-lime-50 py-16">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">
          Have any <span className="text-lime-600">Questions?</span>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto mt-8 px-4">
        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-lg shadow-sm border px-4"
            >
              <AccordionTrigger className="text-left font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
