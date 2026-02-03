import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Button } from "@/components/ui/button";
import { Laptop, BarChart, ShieldCheck, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import CTA from "../../components/CTA";

const InventoryService = () => {
  const targetRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [100, 0, 0, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0.8, 1, 1, 0.8]);

  const features = [
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Real time Analytics",
      description: "Track inventory levels sales trends and stock movement in real time with powerful dashboards"
    },
    {
      icon: <Laptop className="h-10 w-10 text-primary" />,
      title: "Multi channel Integration",
      description: "Manage inventory across online and offline stores with unified stock visibility"
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: "Stock Protection",
      description: "Reduce losses with smart controls damage tracking and theft prevention"
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Automated Reordering",
      description: "Maintain optimal stock levels with automated smart reordering"
    }
  ];

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Inventory Management Software | iNextERP Solutions</title>
        <meta
          name="description"
          content="Efficient inventory management software to track stock avoid stockouts and manage warehouses. Ideal for retail distribution and manufacturing businesses"
        />
        <link
          rel="canonical"
          href="https://www.inexterpsolutions.com/services/inventory"
        />
      </Helmet>

      <Navbar />

      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Inventory Management Software
            </h1>

            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
              Efficient inventory management software to track stock avoid stockouts and manage warehouses. Ideal for retail distribution and manufacturing businesses.
            </p>

            <Link to="/contact">
              <Button size="lg" className="rounded-full px-8 py-6">
                Get Started
              </Button>
            </Link>
          </div>
        </section>

        {/* Features */}
        <section ref={targetRef} className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              style={{ opacity, y, scale }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Powerful Inventory Features
              </h2>
              <p className="text-lg text-gray-600">
                Built to solve complex inventory challenges for modern businesses
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow border"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <p className="text-lg mb-6">
              Use robust procurement tools to keep your inventory organized and efficient. Manage inventory on the go and take quick actions with real time reporting.
            </p>
            <p className="text-lg">
              Handle online orders from nearest warehouses and manage multi channel inventory smoothly to ensure faster delivery and better customer satisfaction.
            </p>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </>
  );
};

export default InventoryService;
