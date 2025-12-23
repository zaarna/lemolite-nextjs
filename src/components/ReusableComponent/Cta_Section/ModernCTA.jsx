'use client';

import Link from 'next/link';
import React from 'react';

const ModernCTA = ({
  heading = 'Ready to Transform Your Business?',
  buttonText = 'Take the First Step Today',
  link = '/contact',
  backgroundColor = '#1A202C', // Default dark blue/charcoal color
}) => {
  return (
    <section className="w-full py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div
          style={{
            backgroundColor,
            borderRadius: '20px',
            border: '2px solid white',
            padding: '1rem',
            textAlign: 'center',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div className="border-2 border-white p-6 sm:p-10 rounded-2xl">
            <h2
              className="text-white font-medium mb-4 md:mb-7 text-lg md:text-2xl leading-tight"
            >
              {heading}
            </h2>

            {/* CTA Button */}
            <Link
              href={link}
              className="bg-transparent hover:bg-white hover:text-black flex items-center justify-center mx-auto border-2 border-white rounded-full p-3 sm:px-6 sm:py-3 text-white text-base font-medium cursor-pointer inline-flex gap-2 transition-all duration-300 ease-in-out"
            >
              {buttonText}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12,5 19,12 12,19" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernCTA;
