
import ProjectPageLayout from '@/components/ProjectPageLayout';
import SEO from '@/components/SEO';
import { Footprints, Zap, LineChart, Award, Sparkles, FlaskConical } from 'lucide-react';

const SportRetailProject = () => {
  return (
    <ProjectPageLayout
      title="AI-Driven Operations Intelligence Platform"
      subtitle="Transforming enterprise infrastructure with predictive analytics and automation."
      imageUrl="/lovable-uploads/b0622048-17b4-4c75-a3f0-6c9e17de1d09.png"
      brandName="Kwarcs Technologies"
    >
      <SEO 
        title="Kwarcs – AI Operations Intelligence"
        description="A next-generation AI platform that integrates IoT data, machine learning, and automation to deliver real-time insights and predictive actions for enterprise systems."
        type="article"
      />
      
      <div className="bg-yellow-50 p-4 rounded-lg mb-6 flex items-center">
        <FlaskConical className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" />
        <p className="text-yellow-700 font-medium text-sm">
          Live AI Model Training – Current Pilot Deployment in Progress
        </p>
      </div>
      
      <h2 className="text-3xl font-bold mb-6">Case Study: Intelligent Enterprise Monitoring</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Background</h3>
        <p>
          <ul>
            <li>
              A Fortune 500 client required a unified AI platform to monitor data centers, production facilities, and distributed IoT assets in real time.
            </li><br/>
            <li>
              The objective was to enable predictive maintenance, instant anomaly detection, and automated resolution without manual intervention.
            </li><br/>
            <li>
              Kwarcs developed a full-stack AI-powered operations intelligence suite capable of processing millions of events per second with actionable insights.
            </li><br/>
          </ul>
        </p>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">Challenge</h3>
      <p>
        Legacy monitoring systems lacked adaptability and real-time analytics.
        The main obstacles:
        <br/><br/>
        – Integrating multiple IoT devices into a single AI pipeline<br/>
        – Processing high-volume data with sub-second latency<br/>
        – Predicting failures with 90%+ accuracy<br/>
        – Ensuring data privacy and enterprise-grade security
      </p>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Solution</h3>
      <p>
        Kwarcs deployed an AI-first architecture featuring edge computing for on-site processing, a cloud-based analytics core, and automated decision engines.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Footprints className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Machine Learning Prediction Engine</h4>
            <p>
              Uses neural networks and anomaly detection models to forecast risks before they occur.
            </p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Zap className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Real-Time Data Orchestration</h4>
            <p>
              Streams and processes live IoT telemetry with less than 500ms latency.
            </p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <LineChart className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Advanced Analytics Dashboard</h4>
            <p>
              Provides AI-driven KPIs, root cause analysis, and predictive performance metrics.
            </p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Award className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Automation & Workflow Integration</h4>
            <p>
              Connects to ERP, CRM, and incident management tools for automated resolutions.
            </p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">Key Features</h4>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>AI-powered root cause detection with 90%+ precision</li>
        <li>End-to-end encryption and compliance-ready architecture</li>
        <li>Edge + cloud hybrid processing for maximum efficiency</li>
      </ul>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Preliminary Results</h3>
      <p>
        Early pilot programs achieved:
        <br/><br/>
        – 35% reduction in operational downtime<br/>
        – 50% faster incident resolution<br/>
        – Significant cost savings from predictive maintenance<br/>
        – Higher operational transparency across global sites
      </p>
      
      <div className="bg-blue-50 p-6 rounded-lg mt-8 flex items-start">
        <Sparkles className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-700">Development Roadmap</h4>
          <p>
            Phase 1 – Core AI engine & IoT ingestion pipeline (Completed)<br/>
            Phase 2 – Predictive analytics & automation layer (Ongoing)<br/>
            Phase 3 – Enterprise-scale multi-region deployment (Planned)<br/>
            Phase 4 – Fully autonomous AI operations platform (Future)
          </p>
        </div>
      </div>
    </ProjectPageLayout>
  );
};

export default SportRetailProject;
