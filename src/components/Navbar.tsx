import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { onAuthStateChanged, User } from "firebase/auth";

import { auth, logout } from "../ReactFirebase/firebaseConfig";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  const navigate = useNavigate(); // ✅ must be inside component, not in JSX

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthLoading(false);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        isScrolled ? "bg-white shadow-sm" : "bg-black"
      )}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="public/lovable-uploads/mamu1.png"
                alt="WRLDS Technologies Logo"
                className={cn("h-8 w-auto", isScrolled ? "" : "brightness-0 invert")}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu className={cn(isScrolled ? "" : "text-white")}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        isScrolled
                          ? "text-gray-700 hover:text-gray-900"
                          : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800"
                      )}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        isScrolled
                          ? "text-gray-700 hover:text-gray-900"
                          : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800"
                      )}
                    >
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* Projects dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      isScrolled
                        ? "text-gray-700 hover:text-gray-900"
                        : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800"
                    )}
                  >
                    Our Projects
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <Link
                          to="/projects/firecat"
                          className="block p-3 space-y-1 rounded-md hover:bg-gray-100"
                        >
                          <div className="font-medium">SentinelCore safety system</div>
                          <p className="text-sm text-gray-500">
                            Advanced safety system for high-risk environments
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/projects/sport-retail"
                          className="block p-3 space-y-1 rounded-md hover:bg-gray-100"
                        >
                          <div className="font-medium">NextView AI-Powered Monitoring Platform</div>
                          <p className="text-sm text-gray-500">
                            Clear, modern, and easy for anyone to understand
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Careers */}
                <NavigationMenuItem>
                  <Link to="/careers">
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        isScrolled
                          ? "text-gray-700 hover:text-gray-900"
                          : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800"
                      )}
                    >
                      Careers
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* Contact button */}
                <NavigationMenuItem>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className={cn(
                      "px-4 py-2 rounded-md transition-colors",
                      isScrolled
                        ? "bg-white-200 text-gray-700 hover:bg-gray-300"
                        : "bg-white-700 text-white hover:bg-white-600"
                    )}
                  >
                    Contact Us
                  </button>
                </NavigationMenuItem>

                {/* 🔑 Auth Buttons */}
                <NavigationMenuItem>
                  {authLoading ? null : user ? (
                    <button
                      onClick={async () => {
                        try {
                          await logout();
                        } catch (err) {
                          console.error(err);
                          alert("Sign out failed");
                        }
                      }}
                      className={cn(
                        "px-4 py-2 rounded-md transition-colors",
                        isScrolled
                          ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                          : "bg-gray-700 text-white hover:bg-gray-600"
                      )}
                    >
                      Sign out
                    </button>
                  ) : (
                    <button
                      onClick={() => navigate("/login")} // ✅ works now
                      className={cn(
                        "px-4 py-2 rounded-md transition-colors",
                        isScrolled
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-blue-500 text-white hover:bg-blue-600"
                      )}
                    >
                      Sign in
                    </button>
                  )}
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={cn("focus:outline-none", isScrolled ? "text-gray-700" : "text-white")}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
