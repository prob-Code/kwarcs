
import { Link } from 'react-router-dom';
import { ArrowRight, Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlogPostCard from '@/components/BlogPostCard';
import { blogPosts } from '@/data/blogPosts';
import { ScrollArea } from '@/components/ui/scroll-area';

const BlogPreview = () => {
  // Get the 3 most recent blog posts
  const recentPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section id="blog" className="py-12 md:py-24 px-4 md:px-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Newspaper size={20} className="text-indigo-600" />
              <span className="text-indigo-600 font-medium">Kwarcs Insights</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 tracking-tight">
              Latest in Technology & Innovation
            </h2>
            <p className="text-gray-700 max-w-xl leading-relaxed">
              Stay ahead with expert articles on <span className="font-semibold">AI, cloud computing, IoT, cybersecurity</span>, 
              and emerging technologies shaping the digital future.
            </p>
          </div>
          <Link to="/blog" className="mt-4 md:mt-0">
            
          </Link>
        </div>
        
        <div className="relative">
          <ScrollArea className="w-full">
            {/* Mobile Scroll Cards */}
            <div className="flex gap-6 pb-4 md:hidden overflow-x-auto snap-x snap-mandatory pl-1">
              {recentPosts.map((post) => (
                <div key={post.id} className="flex-none w-[85%] snap-center">
                  <BlogPostCard
                    title={post.title}
                    excerpt={post.excerpt}
                    imageUrl={post.imageUrl || '/audience_photo_embedded.svg'}
                    date={post.date}
                    slug={post.slug}
                    category={post.category}
                  />
                </div>
              ))}
            </div>
          </ScrollArea>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <BlogPostCard
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                imageUrl={post.imageUrl || '/audience_photo_embedded.svg'}
                date={post.date}
                slug={post.slug}
                category={post.category}
              />
            ))}
          </div>
          
          {/* Mobile Indicators */}
          <div className="mt-4 flex justify-center md:hidden">
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full ${i === 0 ? 'w-6 bg-indigo-600' : 'w-2 bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
