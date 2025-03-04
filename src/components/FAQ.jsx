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
      "question": "What are your main interests and activities?", 
      "answer": "I am interested in Frontend Web Development and developing websites based on provided designs." 
    },
    { 
      "question": "Why are you interested in Frontend Web Development?", 
      "answer": "Because I am already familiar with basic HTML, CSS, and JavaScript. I enjoy designing and building website interfaces." 
    },
    { 
      "question": "What technical skills do you possess?", 
      "answer": "Proficiency in native HTML and CSS, followed by React.js and Tailwind CSS." 
    },
    { 
      "question": "When did you start learning about coding?", 
      "answer": "I started during junior high school using React.js and became more serious in my first year of vocational high school." 
    },
    { 
      "question": "What are your favorite tools for web development?", 
      "answer": "React.js and Tailwind CSS." 
    }    
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