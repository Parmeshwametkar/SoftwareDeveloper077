/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { HowWeWork } from './components/HowWeWork';
import { Projects } from './components/Projects';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedProjectType, setSelectedProjectType] = useState<string>('Website Development');

  const scrollToContact = (projectType?: string) => {
    if (projectType) {
      setSelectedProjectType(projectType);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesElem = document.getElementById('services');
    if (servicesElem) {
      servicesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar onStartProject={() => scrollToContact()} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onStartProject={(type) => scrollToContact(type)}
          onExploreServices={scrollToServices}
        />

        {/* About Section */}
        <About onStartProject={() => scrollToContact()} />

        {/* Services Section */}
        <Services onSelectService={(service) => scrollToContact(service)} />

        {/* How We Work Section */}
        <HowWeWork onStartProject={() => scrollToContact()} />

        {/* Projects / Development Solutions Section */}
        <Projects onSelectSolution={(solution) => scrollToContact(solution)} />

        {/* Call to Action Section */}
        <CTA onStartProject={() => scrollToContact()} />

        {/* Project Enquiry & Contact Section */}
        <Contact initialProjectType={selectedProjectType} />

        {/* FAQ Section */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
