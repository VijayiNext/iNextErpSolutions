import React, { useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';
import { Database, Cloud, Server, Shield, Workflow, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const CloudService = () => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const featuresRef = useRef(null);
  const faqsRef = useRef(null);

  useEffect(() => {
    // Ensure scroll to top on page load
    window.scrollTo(0, 0);

    /* ================= SEO START ================= */
    document.title =
      "Cloud Computing Solutions for Retail Businesses | iNextERP Solutions";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute(
      'content',
      'Secure, scalable cloud computing solutions by iNextERP Solutions for retail businesses. Access inventory, sales, and operations data anytime with enterprise-grade security and high availability.'
    );

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      'href',
      'https://www.inexterpsolutions.com/services/cloud'
    );
    /* ================= SEO END ================= */

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('translate-y-0');
            entry.target.classList.remove('translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);
    if (faqsRef.current) observer.observe(faqsRef.current);

    const featureItems = document.querySelectorAll('.feature-item');
    const faqItems = document.querySelectorAll('.faq-item');

    featureItems.forEach(item => observer.observe(item));
    faqItems.forEach(item => observer.observe(item));

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (featuresRef.current) observer.unobserve(featuresRef.current);
      if (faqsRef.current) observer.unobserve(faqsRef.current);
      featureItems.forEach(item => observer.unobserve(item));
      faqItems.forEach(item => observer.unobserve(item));
    };
  }, []);

  const features = [
    {
      icon: <Database size={24} />,
      title: 'High Availability',
      description: 'Our cloud infrastructure ensures your business applications are always accessible, with 99.9% uptime guarantees.',
    },
    {
      icon: <Server size={24} />,
      title: 'Flexible Scaling',
      description: 'Scale your resources up or down based on your retail business needs without having to invest in physical hardware.',
    },
    {
      icon: <Shield size={24} />,
      title: 'Enterprise-grade Security',
      description: 'Protect your sensitive retail data with advanced encryption, regular backups, and comprehensive disaster recovery options.',
    },
    {
      icon: <Workflow size={24} />,
      title: 'Streamlined Operations',
      description: 'Automated updates and maintenance ensure your systems are always running the latest, most secure software.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Performance Optimization',
      description: 'Our cloud infrastructure is optimized for retail applications, ensuring fast response times for inventory queries and transactions.',
    },
    {
      icon: <Cloud size={24} />,
      title: 'Hybrid Cloud Solutions',
      description: 'Integrate on-premises systems with cloud resources for a solution that perfectly matches your business requirements.',
    }
  ];

  const faqs = [
    {
      question: "How does cloud computing benefit my retail business?",
      answer: "Cloud computing eliminates the need for expensive on-site infrastructure, reduces IT maintenance costs, enables remote access to your systems, and provides the flexibility to scale resources as your business grows or during peak seasons."
    },
    {
      question: "Is my data secure in the cloud?",
      answer: "Yes, we implement enterprise-level security protocols including data encryption, regular security audits, access controls, and compliance with industry standards to keep your retail data safe."
    },
    {
      question: "Can I access my inventory system from multiple locations?",
      answer: "Absolutely. Cloud-based systems allow authorized users to access your inventory data from anywhere with an internet connection, perfect for businesses with multiple retail locations."
    },
    {
      question: "What happens if internet connectivity is lost?",
      answer: "Our solutions include offline functionality for critical operations and automatic synchronization when connectivity is restored, minimizing disruption to your business."
    },
    {
      question: "How long does migration to the cloud take?",
      answer: "Migration timelines depend on the complexity of your current systems and data volume. We typically complete migrations in phases, with basic functionality available within 2-4 weeks and full implementation within 1-3 months."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1
                  ref={titleRef}
                  className="text-3xl md:text-5xl font-bold mb-6 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
                >
                  Cloud Computing Solutions
                </h1>
                <p
                  ref={contentRef}
                  className="text-lg text-muted-foreground mb-8 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-100"
                >
                  Secure, scalable cloud infrastructure optimized for retail inventory and operations management. Access your inventory, sales, and customer data from anywhere with our reliable cloud services designed specifically for the retail industry.
                </p>
                <div className="flex flex-wrap gap-4 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-200">
                  <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transform transition-transform duration-300 hover:scale-105">
                    Get Started
                  </Link>
                  <Link to="/contact" className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg transform transition-transform duration-300 hover:scale-105">
                    Request a Consultation
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative">
                  <img
                    src="/Services/cloud computing 1.webp"
                    alt="Cloud Computing Infrastructure"
                    className="w-full object-fill transform transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features, Benefits, FAQs, CTA – UNCHANGED */}
        {/* Your remaining JSX stays exactly the same */}

        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default CloudService;
