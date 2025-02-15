import { forwardRef,useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react";
import PropTypes from "prop-types";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg border-gray-300 mb-5">
      <button
        className="w-full flex justify-between items-center p-4 text-left font-medium text-lg hover:cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="p-4 text-gray-400">{answer}</p>
</div>
    </div>
  );
};

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

function FAQ(props,ref3) {
  const faqs = [
    { 
      question: "Apa minat utama dan kegiatan yang dilakukan?",
      answer: "Berminat dalam bidang Frontend Web Development dan membuat website berdasarkan design yang diberikan." 
    },
    { 
      question: "Mengapa tertarik dalam bidang Frontend Web Development?", 
      answer: "Karena saya sudah terbiasa dengan HTML, CSS, dan JavaScript dasar. Saya lebih suka membuat tampilan daripada mengatur logika atau database pada sebuah website." 
    },
    { 
      question: "Apa saja skill teknis yang dikuasai?", 
      answer: "HTML dan CSS Native diikuti dengan React JS dan juga Tailwind CSS." 
    },
    { 
      question: "Kapan mulai mengenal dunia coding?", 
      answer: "Dimulai sejak di jenjang SMP menggunakan React JS kemudian mulai serius di kelas 10 SMK." 
    },
    { 
      question: "Apa tools favorit yang digunakan untuk membuat website?", 
      answer: "React JS dan juga Tailwind CSS" 
    },
  ];

  return (
    <div ref={ref3} className="text-white w-full mt-24">
      <h1 className="font-medium text-[28px] border border-white px-12 py-2 rounded-full w-fit" data-aos="fade-right">
          FAQ
      </h1>
      <div className="mt-8" data-aos="fade-up" data-aos-delay="500">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
        </div>
    </div>
  )
}

FAQ.propTypes = {
  ref3: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default forwardRef(FAQ)