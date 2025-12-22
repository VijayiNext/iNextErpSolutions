import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Button } from "@/components/ui/button";
import { Laptop, BarChart, ShieldCheck, Clock } from "lucide-react";
import { Link } from 'react-router-dom';
import CTA from "../../components/CTA";

const InventoryService = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [100, 0, 0, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0.8, 1, 1, 0.8]);

  /* =========================
     SEO FIX (IMPORTANT PART)
  ========================== */
  useEffect(() => {
    window.scrollTo(0, 0);

    // Page title
    document.title =
      "Inventory Management Software for SMEs | iNextERP Solutions";

    // Meta description
    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute(
      "content",
      "Inventory management software by iNextERP Solutions to track stock, avoid stockouts, manage warehouses, and improve operational efficiency for retail, distribution, and manufacturing businesses."
    );

    // Canonical URL
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute(
      "href",
      "https://www.inexterpsolutions.com/services/inventory"
    );
  }, []);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };

  const features = [
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Real-time Analytics",
      description: "Track inventory levels, sales trends, and stock movements in real-time with comprehensive dashboards."
    },
    {
      icon: <Laptop className="h-10 w-10 text-primary" />,
      title: "Multi-channel Integration",
      description: "Seamlessly manage inventory across online and physical stores with unified stock visibility."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: "Stock Protection",
      description: "Advanced algorithms for theft prevention, damage control, and loss minimization."
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Automated Reordering",
      description: "Smart reordering system that maintains optimal stock levels without manual intervention."
    }
  ];

  return (
    <div>
      <Navbar />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
                  Inventory Management Software
                </span>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Inventory Management Software
                </h1>

                <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
                  Efficient inventory management software to track stock, avoid stockouts & manage warehouses for retail, distribution & manufacturing businesses.
                </p>

                <Link to="/contact">
                  <Button size="lg" className="rounded-full px-8 py-6 text-base">
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-white relative" ref={targetRef}>
          <div className="container mx-auto px-4">
            <motion.div style={{ opacity, y, scale }} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Powerful Inventory Features for Modern Businesses
              </h2>
              <p className="text-lg text-gray-600">
                A comprehensive inventory management system designed for scalability and control.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUpVariants}
                  className="bg-white rounded-xl p-6 shadow-sm border"
                >
                  {feature.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default InventoryService;
