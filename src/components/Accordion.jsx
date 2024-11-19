import { useState } from "react";
import { ChevronDown } from "lucide-react"; // Import the ChevronDown icon from lucide-react

const processes = [
  {
    number: "01",
    title: "Consultation",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    number: "02",
    title: "Research and Strategy Development",
    content:
      "We conduct thorough market research and develop a comprehensive strategy tailored to your business objectives and target audience.",
  },
  {
    number: "03",
    title: "Implementation",
    content:
      "Our team executes the strategy with precision, implementing all planned marketing initiatives and campaigns.",
  },
  {
    number: "04",
    title: "Monitoring and Optimization",
    content:
      "We continuously monitor campaign performance and make data-driven optimizations to improve results.",
  },
  {
    number: "05",
    title: "Reporting and Communication",
    content:
      "Regular reporting and open communication keep you informed about progress and results.",
  },
  {
    number: "06",
    title: "Continual Improvement",
    content:
      "We consistently refine and improve our strategies based on performance data and your feedback.",
  },
];

const WorkingProcess = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };

  return (
    <section className="py-24">
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="inline-block px-4 py-2 bg-[#C4F934] rounded-md">
            <h2 className="text-2xl font-bold">Our Working Process</h2>
          </div>
          <p className="text-lg">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>

        <div className="space-y-4">
          {processes.map((process, index) => (
            <div
              key={process.number}
              className={`rounded-3xl overflow-hidden ${
                openIndex === index ? "bg-[#C4F934]" : "bg-gray-100"
              }`}
            >
              <button
                className="w-full px-8 py-6 flex items-center justify-between"
                onClick={() => toggleAccordion(index)} // Toggle accordion item
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold">{process.number}</span>
                  <span className="text-xl font-bold">{process.title}</span>
                </div>
                <div className="rounded-full border-2 border-black p-2">
                  <ChevronDown
                    className="h-4 w-4 transition-transform transform duration-300"
                    style={{
                      transform:
                        openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </div>
              </button>

              {/* Accordion Content */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-[1000px] p-8" : "max-h-0 p-0"
                }`}
              >
                <p className="text-lg ml-12">{process.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
