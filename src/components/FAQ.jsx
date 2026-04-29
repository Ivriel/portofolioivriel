import { forwardRef, useState } from "react"
import { ChevronDown } from "lucide-react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <motion.div 
      initial={false}
      className={`glass-panel overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-white/5 border-white/20' : 'hover:bg-white/[0.02]'}`}
    >
      <button
        className="w-full flex justify-between items-center p-6 text-left hover:cursor-pointer"
        onClick={onClick}
      >
        <span className={`font-medium text-lg transition-colors duration-300 ${isOpen ? 'text-white' : 'text-gray-300'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-gray-400 flex-shrink-0 ml-4"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pt-0">
              <p className="text-gray-400 text-base leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

function FAQ(props, ref3) {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqs = [
    { 
      "question": "What are your main interests and activities?", 
      "answer": "I am interested in Frontend Web Development and developing websites based on provided designs. I love turning static mockups into interactive, living web experiences." 
    },
    { 
      "question": "Why are you interested in Frontend Web Development?", 
      "answer": "Because I am already familiar with basic HTML, CSS, and JavaScript. I enjoy designing and building website interfaces that users interact with directly, as it combines logic with creativity." 
    },
    { 
      "question": "What technical skills do you possess?", 
      "answer": "Proficiency in native HTML and CSS, followed by React.js, Tailwind CSS, and Framer Motion for animations. I also have experience with Next.js for server-side rendering." 
    },
    { 
      "question": "When did you start learning about coding?", 
      "answer": "I started during junior high school exploring basic concepts, and became much more serious in my first year of vocational high school where I focused on React.js." 
    },
    { 
      "question": "What are your favorite tools for web development?", 
      "answer": "My go-to stack is React.js (or Next.js) for the logic, Tailwind CSS for rapid styling, and Framer Motion for bringing the UI to life with smooth animations." 
    }    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      ref={ref3} 
      className="text-white w-full pt-24 max-w-4xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex flex-col items-center mb-12">
        <motion.div variants={itemVariants} className="inline-block border border-glass-border px-8 py-3 rounded-full glass-panel h-fit mb-4">
          <h1 className="font-semibold text-[24px] tracking-wide text-white">
            Frequently Asked Questions
          </h1>
        </motion.div>
        <motion.p variants={itemVariants} className="text-gray-400 text-center mt-4">
          Get to know more about my background, skills, and interests.
        </motion.p>
      </div>

      <motion.div variants={itemVariants} className="flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <FAQItem 
            key={index} 
            question={faq.question} 
            answer={faq.answer} 
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}

FAQ.propTypes = {
  ref3: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default forwardRef(FAQ);