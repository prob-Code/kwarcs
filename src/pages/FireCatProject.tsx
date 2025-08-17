
import ProjectPageLayout from '@/components/ProjectPageLayout';
import { Shield, Radio, Activity, Box } from 'lucide-react';

const FireCatProject = () => {
  return (
    <ProjectPageLayout
      title="SentinelCore Safety System"
      subtitle="Advanced safety system for high-risk environments"
      imageUrl="/lovable-uploads/93ab0638-8190-4ccf-897f-21fda7f4f5ad.png"
      brandName="Tata Group"
      darkMode={true}
    >
      <h2 className="text-3xl font-bold mb-6">Case Study: SentinelCore 6th SENSE by KWARCS Technologies</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Background</h3>
        <p>
        <p> KWARCS is an AI-driven solutions company specializing in mission-critical safety systems for industries where human lives are at stake—law enforcement, defense, firefighting, and disaster response. Our flagship product, SentinelCore 6th SENSE, is designed to augment human capability through real-time AI-powered sensing, data analytics, and decision support.</p>
        <br/>
        <p> By seamlessly integrating smart sensors, advanced analytics, and secure communication into operational gear, KWARCS enables organizations to detect risks early, act faster, and operate smarter in high-pressure situations.</p> 
        </p>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">Challenge</h3>
      <p><ul><li>
      <p> Lack of Real-Time Awareness – Traditional systems fail to deliver live, actionable intelligence to decision-makers.</p>
      <br/></li>
      <li>
      <p> Delayed Emergency Response – Without instant data transmission, critical seconds are lost during crises.</p>
      <br/></li>
      <li>
      <p> Limited Environmental Resilience – Existing devices struggle in extreme conditions like high heat, heavy smoke, or dust.</p>
      <br/></li>
      <li>
      <p> High False Alarm Rates – Static alert systems cannot adapt to individual user patterns, creating unnecessary interruptions.</p>
      <br/></li>
      <li>
      <p> Complex Maintenance – Most solutions require heavy upkeep, reducing operational readiness.</p>
      <br/></li></ul>
      </p>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Solution</h3>
      <p>
        KWARCS developed the SentinelCore 6th SENSE, a next-gen AI-powered safety platform that transforms any uniform into a smart, responsive protection system.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Shield className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Main Unit</h4>
            <p>Secure real-time data transmission with encrypted communication.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Radio className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">AI Control Dashboard</h4>
            <p>Live monitoring platform for supervisors, accessible from mobile and desktop.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Box className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Edge AI Processing Module</h4>
            <p>On-device intelligence for instant decision-making without relying on external servers, ensuring real-time responses even in low-connectivity areas.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Activity className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Control Unit</h4>
            <p>Centralized AI interface providing transparent data visualization and management via an intuitive supervisor app.</p>
          </div>
        </div>
      </div>
      
     
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Benefits</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Life-saving technology</h4>
            <p>Rapid data acquisition facilitates quicker responses in emergencies.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Technological advancement</h4>
            <p>Machine learning prevents false alarms by adapting to individual behavioral baselines.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Integration with External Systems </h4>
            <p> Supports APIs to connect with ERP, HR, and emergency response systems for unified safety management.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Role-Based Access Control (RBAC) </h4>
            <p> Ensures only authorized personnel can view, manage, or export sensitive operational data.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">User-Friendly</h4>
            <p>Plug & Play installation within minutes, providing hours of continuous operation per charge.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Outcome</h3>
      <p>
        <p>The SentinelCore 6th SENSE has been deployed across military, firefighting, and law enforcement units, dramatically improving survival rates, operational efficiency, and situational awareness.</p>
        <br/>
        <p>With its AI-first approach, KWARCS has set a new global benchmark for advanced safety technology, paving the way for smarter, faster, and safer operations in the world’s most dangerous missions.</p>
      </p>
    </ProjectPageLayout>
  );
};

export default FireCatProject;
