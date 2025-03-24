"use client";

import React from "react";
import { Testimonial } from "../types/contentTypes";

interface TestimonialsSectionProps {
  title: string;
  items: Testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ title, items }) => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((testimonial, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md">
            <blockquote className="text-gray-600 italic mb-4">
              "{testimonial.quote}"
            </blockquote>
            <p className="font-semibold">{testimonial.author}</p>
            <p className="text-gray-500">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;