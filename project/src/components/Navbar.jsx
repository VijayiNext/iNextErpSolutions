import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const services = [
    { title: 'Inventory Management', href: '/services/inventory' },
    { title: 'POS System', href: '/services/pos' },
    { title: 'Supply Chain', href: '/services/supply-chain' },
    { title: 'Accounting', href: '/services/accounting' },
    { title: 'Cloud Computing', href: '/services/cloud' },
    { title: 'CRM', href: '/services/crm' },
    { title: 'HRM', href: '/services/hrm' },
  ];

  const products = [
    { title: 'Barcode Printer', href: '/products/barcode' },
    { title: 'Labels', href: '/products/label' },
    { title: 'Computer', href: '/products/computer' },
    { title: 'Receipt Printer', href: '/products/receipt-printer' },
    { title: 'Printer', href: '/products/printer' },
    { title: 'Scanner', href: '/products/scanner' },
  ];

  const legalPages = [
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Terms & Conditions', href: '/terms' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/Logo.webp" className="w-16 h-16 mr-3" alt="Logo" />
          <span className="text-2xl md:text-3xl font-bold text-[#1881c4]">
            iNextERP
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/about" className="hover:text-[#6495ed]">About Us</Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent p-0">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="p-2">
                    {services.map((s, i) => (
                      <li key={i}>
                        <Link to={s.href} className="block p-2 hover:bg-accent">
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent p-0">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="p-2">
                    {products.map((p, i) => (
                      <li key={i}>
                        <Link to={p.href} className="block p-2 hover:bg-accent">
                          {p.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link to="/blog">Blog</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/contact">Contact</Link>

          {/* DESKTOP SUPPORT */}
          <Link
            to="/support"
            className="bg-[#6495ed] text-white px-4 py-2 rounded-md hover:bg-[#4a78d0]"
          >
            Support
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col p-4 space-y-4">
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>

            {/* Services */}
            <details>
              <summary className="cursor-pointer flex justify-between">
                Services <ChevronDown size={16} />
              </summary>
              <div className="pl-4 mt-2 space-y-2">
                {services.map((s, i) => (
                  <Link key={i} to={s.href} onClick={() => setIsMenuOpen(false)}>
                    {s.title}
                  </Link>
                ))}
              </div>
            </details>

            {/* Products */}
            <details>
              <summary className="cursor-pointer flex justify-between">
                Products <ChevronDown size={16} />
              </summary>
              <div className="pl-4 mt-2 space-y-2">
                {products.map((p, i) => (
                  <Link key={i} to={p.href} onClick={() => setIsMenuOpen(false)}>
                    {p.title}
                  </Link>
                ))}
              </div>
            </details>

            <Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link to="/careers" onClick={() => setIsMenuOpen(false)}>Careers</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>

            {/* ✅ MOBILE SUPPORT BUTTON (FIXED) */}
            <Link
              to="/support"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center bg-[#6495ed] text-white py-3 rounded-lg font-semibold hover:bg-[#4a78d0]"
            >
              Support
            </Link>

            {/* Legal */}
            <div className="pt-3 border-t">
              {legalPages.map((l, i) => (
                <Link
                  key={i}
                  to={l.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-sm text-gray-500"
                >
                  {l.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
