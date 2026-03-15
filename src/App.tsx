/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import About from './components/About';
import Science from './components/Science';
import Benefits from './components/Benefits';
import Photos from './components/Photos';
import Agenda from './components/Agenda';
import Speakers from './components/Speakers';
import YourTime from './components/YourTime';
import Tickets from './components/Tickets';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black font-sans text-white selection:bg-brand-primary selection:text-white">
      <main>
        <Hero />
        <About />
        <Science />
        <Benefits />
        <Photos />
        <Agenda />
        <Speakers />
        <YourTime />
        <Tickets />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
