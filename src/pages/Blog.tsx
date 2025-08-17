
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import BlogPostCard from '@/components/BlogPostCard';
import { blogPosts } from '@/data/blogPosts';
const Blog = () => {
  // Get the newest blog post for the featured post section
  const featuredPost = blogPosts.find(post => post.id === '6') || blogPosts[0];
  // Get the rest of the blog posts
  const otherPosts = blogPosts.filter(post => post.id !== featuredPost?.id);
  
  return (
    <PageLayout>
      <SEO 
        title="Kwarcs Tech Journal – Insights on AI, Blockchain, and Future Technologies" 
        description="Discover the latest breakthroughs, industry insights, and expert perspectives on AI, blockchain, cloud, and cybersecurity from the Kwarcs innovation team."
        imageUrl={featuredPost?.imageUrl || "/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png"}
        keywords={[
          'AI innovation', 
          'blockchain technology', 
          'cybersecurity trends', 
          'enterprise software', 
          'cloud computing', 
          'IoT solutions', 
          'digital transformation'
        ]}
        type="website"
      />
      
      {/* Hero Section */}
      <div className="w-full pt-24 pb-12 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Kwarcs Innovation Hub</h1>
            <p className="text-xl text-gray-300 mb-6">
              Your gateway to the most impactful stories, trends, and technologies shaping the digital future.
            </p>
          </div>
        </div>
      </div>
      
      {/* Blog Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Featured Post */}
          {featuredPost && (
            <Link to={`/blog/${featuredPost.slug}`} className="col-span-1 md:col-span-2 lg:col-span-3">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="grid md:grid-cols-2 h-full">
                  <div 
                    className="bg-cover bg-center h-64 md:h-full p-8 flex items-center justify-center"
                    style={{ 
                      backgroundImage: `url('${featuredPost.imageUrl}')`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="text-white text-center bg-black/30 backdrop-blur-sm p-4 rounded-lg">
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium inline-block mb-4">Featured Insight</span>
                      <h3 className="text-2xl md:text-3xl font-bold">{featuredPost.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <p className="text-gray-500 text-sm mb-2">Published: {featuredPost.date}</p>
                    <p className="text-gray-700 mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <Button variant="outline" className="group">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </Link>
          )}
          
          {/* Other blog posts */}
          {otherPosts.map((post) => (
            <BlogPostCard 
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              imageUrl={post.imageUrl || '/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png'}
              date={post.date}
              slug={post.slug}
              category={post.category}
            />
          ))}
          
          {/* Placeholders for upcoming posts */}
          {blogPosts.length < 4 && Array.from({ length: Math.max(0, 4 - blogPosts.length) }).map((_, index) => (
            <BlogPostCard 
              key={`placeholder-${index}`}
              title={
                index === 0 
                  ? "The Rise of AI in Enterprise Solutions" 
                  : index === 1 
                    ? "Blockchain Beyond Cryptocurrency" 
                    : "Next-Gen Cloud Security Strategies"
              }
              excerpt={
                index === 0
                  ? "How artificial intelligence is streamlining workflows, boosting efficiency, and reshaping industries across the globe."
                  : index === 1
                    ? "Exploring how blockchain is driving transparency, trust, and efficiency in supply chain and data management."
                    : "A deep dive into advanced security frameworks designed to protect cloud infrastructure from evolving threats."
              }
              imageUrl={
                index % 2 === 0 
                  ? "/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png" 
                  : "/lovable-uploads/700e27d7-0513-4bfa-8ac4-f7fd6087594c.png"
              }
              date="Coming soon"
              slug="#"
              category="Technology"
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Blog;
