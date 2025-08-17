
import { ArrowLeft, ArrowRight, FileText, Code, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import ProductPlatform from '@/components/ProductPlatform';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';

const TechDetails = () => {
  const isMobile = useIsMobile();
  const [progressValue, setProgressValue] = useState(0);

  // Animate progress bar on component mount
  useEffect(() => {
    const timer = setTimeout(() => setProgressValue(100), 100);
    return () => clearTimeout(timer);
  }, []);
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageLayout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <motion.h1 initial={{
            opacity: 0,
            y: -10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} className="text-3xl sm:text-4xl font-bold mb-6">
              Technical Deep Dive
            </motion.h1>
            
            <div className="prose prose-lg max-w-none">
              <motion.p initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }} className="text-base sm:text-lg text-gray-600 mb-12">
                Explore how Kwarcs Group designs and delivers cutting-edge IT solutions. Our flexible system architecture enables rapid development, seamless deployment, and easy integration into your business environment..
              </motion.p>
              
              {/* System Architecture Section */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }} className="mb-16">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-5 h-5 text-gray-700" />
                  <h2 className="text-2xl font-bold">System Architecture</h2>
                </div>
                
                <p className="text-gray-600 mb-8 text-base max-w-3xl">
                  We use a scalable, multi-layer architecture that connects your data sources to secure cloud services and intuitive user applications. This ensures speed, reliability, and future-proof performance.
                </p>

                {/* Progress bar showing flow */}
                <div className="w-full mb-6">
                  
                  
                </div>
                
                {/* Product Platform Architecture Diagram */}
                <Card className="bg-white rounded-lg mb-10 border border-gray-200 shadow-sm">
                  <CardContent className="p-4 lg:p-6">
                    <ProductPlatform />
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Our Approach Section */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }}>
                <div className="flex items-center gap-2 mb-4">
                  <Code className="w-5 h-5 text-gray-700" />
                  <h2 className="text-2xl font-bold">Our Approach</h2>
                </div>
                
                <p className="text-gray-600 mb-8 text-base max-w-3xl">
                 At Kwarcs, we fuse cutting-edge technical expertise with a business-first approach. Every solution we craft is custom-built for your industry, rigorously tested for performance, security, and scalability, and engineered to grow alongside your business. From the first line of code to continuous optimization and support, our mission is to deliver technology that creates measurable impact in the real world.

                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  {[{
                  title: "Discovery",
                  icon: <Cpu className="w-5 h-5 text-gray-700" />,
                  description: "We start with in-depth market research and comprehensive requirements gathering to fully understand your unique needs, challenges, and opportunities."
                }, {
                  title: "Design & Prototyping",
                  icon: <Code className="w-5 h-5 text-gray-700" />,
                  description: "Our teams transform ideas into striking initial designs and interactive prototypes, enabling early testing, rapid feedback, and seamless iteration turning concepts into reality faster than ever."
                }, {
                  title: "Development & Testing",
                  icon: <FileText className="w-5 h-5 text-gray-700" />,
                  description: "We rigorously develop and test all components to ensure they meet performance and reliability standards."
                }].map((phase, i) => <motion.div key={phase.title} initial={{
                  opacity: 0,
                  y: 10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.4,
                  delay: 0.3 + i * 0.1
                }} className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300">
                      <div className="flex items-center gap-2 mb-3">
                        {phase.icon}
                        <h3 className="font-semibold text-lg">{phase.title}</h3>
                      </div>
                      <p className="text-gray-600 text-base">{phase.description}</p>
                    </motion.div>)}
                </div>
              </motion.div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link to="/development-process" className="inline-flex items-center px-5 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all group">
                Explore Our Development Process
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TechDetails;
