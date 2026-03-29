'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  CheckCircle2, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Menu, 
  X, 
  ArrowRight,
  Dumbbell,
  Heart,
  TrendingUp,
  Users,
  Award
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/95 backdrop-blur-md py-3 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-accent p-1.5 rounded-sm">
            <Dumbbell className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-oswald font-bold tracking-tighter">
            JNS <span className="text-accent">FITNESS</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-accent hover:bg-red-700 text-white px-6 py-2 rounded-sm text-sm font-bold uppercase transition-all transform hover:scale-105"
          >
            Join Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="block px-3 py-4 text-base font-medium border-b border-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a 
                  href="#contact" 
                  className="block w-full text-center bg-accent py-3 font-bold uppercase"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Join Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://lh3.googleusercontent.com/gps-cs-s/AHVAweq47eBkB_tZ3oZ_OfAjyWgjnO483oxflCdUlc18G1tY33wn1sXV4PxdMQsxnUhyULCnulaaiH60E7myBhzfXl8g6NXnhEE6OOqNZf9PW2Et6ue0HvgdmZPODHJHNJ7v9hpCxpxeKD005CSZ=s680-w680-h510-rw"
          alt="JNS Fitness Club Interior"
          fill
          className="object-cover opacity-50"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 uppercase tracking-widest mb-4">
            The Biggest Gym in Rajarhat
          </span>
          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6">
            BUILD <span className="text-accent">STRENGTH.</span><br />
            BUILD CONFIDENCE.
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-lg">
            Join JNS Fitness Club – Rajarhat&apos;s premier fitness destination. From beginners to pros, we provide the environment you need to crush your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="bg-accent hover:bg-red-700 text-white px-10 py-4 font-bold uppercase flex items-center justify-center gap-2 transition-all group"
            >
              Join Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="border-2 border-white hover:bg-white hover:text-dark text-white px-10 py-4 font-bold uppercase flex items-center justify-center transition-all"
            >
              Book Free Trial
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="flex gap-8">
          <div className="text-right">
            <div className="text-4xl font-bold text-accent">4.8</div>
            <div className="text-xs uppercase tracking-widest text-gray-400">Google Rating</div>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold text-accent">18+</div>
            <div className="text-xs uppercase tracking-widest text-gray-400">Real Reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-dark relative overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square md:aspect-video lg:aspect-square"
          >
            <Image 
              src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwerFhf9bDLqo-qZjxpewkE-dtcIcgllrt7fP2ZVlpMXP9CFuHsjC12CrpNAsvTvrvWLShYQGNfGPvFR8WxqcFd4Y4ID0WQKEd8EKj8uykeJja7wMuflRlGq7U53DKHW0z__IENM=s680-w680-h510-rw"
              alt="JNS Fitness Club Training Area"
              fill
              className="object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-accent p-8 hidden md:block">
              <div className="text-5xl font-bold">100%</div>
              <div className="text-sm uppercase font-bold">Results Focused</div>
            </div>
          </motion.div>

          <div>
            <h2 className="text-accent text-sm font-bold tracking-[0.3em] mb-4">ABOUT JNS FITNESS</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              YOUR FITNESS JOURNEY <br /> STARTS HERE
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Located in the heart of Rajarhat, JNS Fitness Club is recognized as the biggest gym in the area. We pride ourselves on offering a friendly and motivating environment that caters to everyone—from complete beginners to professional athletes.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {[
                'Biggest Gym in Rajarhat',
                'Affordable Membership',
                'Modern Equipment',
                'Expert Guidance',
                'Friendly Atmosphere',
                'Flexible Timings'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent w-5 h-5 flex-shrink-0" />
                  <span className="font-bold uppercase text-sm tracking-wide">{item}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 text-accent font-bold uppercase group">
              Learn More About Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Strength Training',
      desc: 'Build raw power with our extensive range of free weights and machines.',
      icon: <Dumbbell className="w-8 h-8" />,
      img: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAwepKK-OYhQAT9FHdnRge9C_a9KhcNmk6jlYMeHef4t7pYbuzN9J31Oh8kALojU1XwvCUFwdLbvpnEB9GMolDXBtY_wXSxqkgNb32rl7_ExnpO2dY8RUhorMEIBkAdKDfAPtz8nnM=s680-w680-h510-rw'
    },
    {
      title: 'Cardio Workouts',
      desc: 'Improve your endurance with high-end treadmills, cycles, and cross-trainers.',
      icon: <Heart className="w-8 h-8" />,
      img: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAwer-jUGqfprmRby4MKj977eZRiVx5MnDLChkmdjXjl3kZr-pR-zHAdVKySkS37PnmajnrcBPKQtc4cO2-6WI8VvSfFaky6JFthaf6db5SdUu9OSfcoIY1021t88kzJeI9SKsmQsxrw=s680-w680-h510-rw'
    },
    {
      title: 'Weight Loss',
      desc: 'Customized programs designed to help you shed those extra pounds effectively.',
      icon: <TrendingUp className="w-8 h-8" />,
      img: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAweqKNIRLOt8PDXijiQZ6s4l4bnVNpcK6GKhlPTuO1P7PIhYSQdGBzSUuQLeZAy3PzejzLL8n5zw7QI18Hq825LSRMSTgPSHvMreDD9b-nUmYK82M-yK520J0qIZDh_AIPi0FUk_a=s680-w680-h510-rw'
    },
    {
      title: 'Personal Training',
      desc: 'One-on-one sessions with expert trainers to fast-track your fitness goals.',
      icon: <Users className="w-8 h-8" />,
      img: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAweryW-GPwvYLfkXs9RVTuh2lbPxw-_bOFpqSAy_KM5OLrW7ZxNnWa3auIctlaWFlfSDM6l9IqXWkvqLAHghlUWjCN0wSJipuvoxMGU-D-aMNDMLSvi4U2GFudJkSCaLrY2TsY2y25Q=s680-w680-h510-rw'
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#151515]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-accent text-sm font-bold tracking-[0.3em] mb-4">OUR SERVICES</h2>
          <h3 className="text-4xl md:text-5xl font-bold">WHAT WE OFFER</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[400px] overflow-hidden rounded-sm"
            >
              <Image 
                src={service.img}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="bg-accent w-14 h-14 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold mb-2">{service.title}</h4>
                <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    {
      name: "Avik Dutta",
      text: "It's the biggest gym in Rajarhat area with affordable price.",
      rating: 5
    },
    {
      name: "Saminur Islam Gazi",
      text: "Good atmosphere and really good quality. Highly recommended.",
      rating: 5
    },
    {
      name: "Arka Sarkar",
      text: "Recommended for beginners to professionals. Very helpful staff.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-accent text-sm font-bold tracking-[0.3em] mb-4">TESTIMONIALS</h2>
            <h3 className="text-4xl md:text-5xl font-bold">WHAT OUR MEMBERS SAY</h3>
          </div>
          <div className="flex items-center gap-2 bg-[#151515] p-4 rounded-sm border border-white/5">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
            </div>
            <span className="font-bold text-xl">4.8/5</span>
            <span className="text-gray-500 text-sm">Google Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#151515] p-8 rounded-sm border-l-4 border-accent relative"
            >
              <div className="absolute top-8 right-8 text-white/5">
                <Users size={60} />
              </div>
              <div className="flex text-accent mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
              </div>
              <p className="text-gray-300 italic mb-6">&quot;{review.text}&quot;</p>
              <div className="font-bold uppercase tracking-wider">{review.name}</div>
              <div className="text-xs text-gray-500 uppercase">Verified Member</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Timings = () => {
  return (
    <section className="py-24 bg-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-sm font-bold tracking-[0.3em] mb-4 opacity-80">OPERATING HOURS</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-6">OPEN DAILY UNTIL 11:00 PM</h3>
            <p className="text-xl opacity-90 max-w-2xl">
              We understand your busy schedule. That&apos;s why we&apos;re open every day to ensure you never miss a workout.
            </p>
          </div>
          <div className="bg-dark p-10 rounded-sm shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <Clock className="text-accent w-10 h-10" />
              <div>
                <div className="text-2xl font-bold">Daily Timings</div>
                <div className="text-gray-400">Open 7 Days a Week</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Opening Time</span>
                <span className="font-bold">Early Morning</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Closing Time</span>
                <span className="font-bold">11:00 PM</span>
              </div>
              <div className="bg-accent/10 p-4 mt-6 rounded-sm border border-accent/20">
                <div className="text-sm font-bold text-accent uppercase mb-1">Pro Tip</div>
                <div className="text-sm text-gray-300">Visit around 5:00 PM for a less crowded experience.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('sent'), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-accent text-sm font-bold tracking-[0.3em] mb-4">GET IN TOUCH</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">START YOUR JOURNEY</h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="bg-[#151515] w-14 h-14 flex items-center justify-center flex-shrink-0 rounded-sm border border-white/5">
                  <MapPin className="text-accent" />
                </div>
                <div>
                  <div className="font-bold text-lg uppercase mb-1">Our Location</div>
                  <p className="text-gray-400">JFJP+766, Rajarhat Naipukur Road, Bhatenda, Kolkata, West Bengal – 700135</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-[#151515] w-14 h-14 flex items-center justify-center flex-shrink-0 rounded-sm border border-white/5">
                  <Phone className="text-accent" />
                </div>
                <div>
                  <div className="font-bold text-lg uppercase mb-1">Call Us</div>
                  <a href="tel:+917980188146" className="text-gray-400 hover:text-accent transition-colors">+91 79801 88146</a>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-[#151515] w-14 h-14 flex items-center justify-center flex-shrink-0 rounded-sm border border-white/5">
                  <MessageCircle className="text-accent" />
                </div>
                <div>
                  <div className="font-bold text-lg uppercase mb-1">WhatsApp</div>
                  <a href="https://wa.me/917980188146" target="_blank" className="text-gray-400 hover:text-accent transition-colors">Chat with us on WhatsApp</a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-[#151515] rounded-sm relative overflow-hidden group">
              <Image 
                src="https://images.unsplash.com/photo-1524666041070-9d87656c25bb?q=80&w=2070&auto=format&fit=crop"
                alt="Map Location"
                fill
                className="object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <a 
                  href="https://www.google.com/maps/search/JNS+Fitness+Club+Rajarhat" 
                  target="_blank"
                  className="bg-accent text-white px-6 py-2 font-bold uppercase text-sm flex items-center gap-2"
                >
                  View on Google Maps <MapPin size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[#151515] p-10 rounded-sm border border-white/5">
            <h4 className="text-2xl font-bold mb-6 uppercase">Book a Free Trial</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="Enter your name"
                  className="w-full bg-dark border border-white/10 p-4 text-white focus:border-accent outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  placeholder="Enter your phone"
                  className="w-full bg-dark border border-white/10 p-4 text-white focus:border-accent outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Fitness Goal</label>
                <select className="w-full bg-dark border border-white/10 p-4 text-white focus:border-accent outline-none transition-colors appearance-none">
                  <option>Weight Loss</option>
                  <option>Muscle Building</option>
                  <option>Strength Training</option>
                  <option>General Fitness</option>
                </select>
              </div>
              <button 
                disabled={formStatus !== 'idle'}
                className="w-full bg-accent hover:bg-red-700 disabled:bg-gray-700 text-white py-4 font-bold uppercase transition-all"
              >
                {formStatus === 'idle' && 'Send Inquiry'}
                {formStatus === 'sending' && 'Sending...'}
                {formStatus === 'sent' && 'Sent Successfully!'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-2">
            <div className="bg-accent p-1.5 rounded-sm">
              <Dumbbell className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-oswald font-bold tracking-tighter">
              JNS <span className="text-accent">FITNESS</span>
            </span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-accent transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-accent transition-colors"><Facebook size={20} /></a>
            <a href="https://wa.me/917980188146" className="text-gray-500 hover:text-accent transition-colors"><MessageCircle size={20} /></a>
          </div>

          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} JNS Fitness Club. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/917980188146" 
      target="_blank"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Timings />
      <Reviews />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
