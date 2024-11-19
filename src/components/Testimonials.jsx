"use client";

import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    content:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    author: "John Smith",
    position: "Marketing Director at XYZ Corp",
  },
  {
    content:
      "The team at Positivus has been instrumental in helping us achieve our digital marketing goals. Their expertise and dedication have helped us reach new heights in our online presence.",
    author: "Sarah Johnson",
    position: "CEO at ABC Industries",
  },
  {
    content:
      "Working with Positivus has transformed our digital strategy. Their innovative approach and attention to detail have delivered exceptional results for our business.",
    author: "Michael Chen",
    position: "Digital Director at Tech Solutions",
  },
  {
    content:
      "Positivus has exceeded our expectations in every way. Their strategic insights and implementation have driven remarkable growth in our online engagement.",
    author: "Emma Williams",
    position: "Head of Marketing at Global Corp",
  },
  {
    content:
      "The expertise and professionalism of the Positivus team have been invaluable to our digital success. They truly understand our business needs and deliver results.",
    author: "David Miller",
    position: "Operations Manager at Innovation Inc",
  },
];

export default function TestimonialCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);


  return (
    <div className="w-full bg-[#1B1B1B] py-16 rounded-2xl">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="relative p-8">
                    <div className="relative mb-8">
                      <div className="absolute -inset-[1px] rounded-[40px] bg-gradient-to-r from-[#B9FF66] to-[#B9FF66]/50 opacity-50" />
                      <div className="relative bg-[#1B1B1B] rounded-[40px] p-8 min-h-[200px]">
                        <p className="text-white text-lg md:text-xl leading-relaxed">
                          "{testimonial.content}"
                        </p>
                      </div>
                    </div>
                    <div className="ml-8">
                      <h3 className="text-[#B9FF66] font-medium text-xl mb-1">
                        {testimonial.author}
                      </h3>
                      <p className="text-white/90">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0   bg-transparent border-none hover:opacity-75 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0   bg-transparent border-none hover:opacity-75 focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>

          <div className="flex items-center justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  currentSlide === index ? "bg-[#B9FF66]" : "bg-white/20"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
