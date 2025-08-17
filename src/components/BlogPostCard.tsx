import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categoryImageMap: { [key: string]: string } = {
  technology: 'public/lovable-uploads/daku1.png',
  food: 'public/lovable-uploads/daku5.jpg',
  lifestyle: '/public/lovable-uploads/daku4.jpg',
  innovation: 'public/lovable-uploads/daku2.jpg',
  process:'public/lovable-uploads/daku4.png',
  bussiness: 'public/lovable-uploads/daku3.jpg',
  
  
};

// --- 2. Update the Component Props ---
// We no longer need `imageUrl` since it's determined by the category.
interface BlogPostCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  category: string;
}

const BlogPostCard = ({
  title,
  excerpt,
  date,
  slug,
  category
}: BlogPostCardProps) => {
  // --- 3. Determine the Image URL ---
  // Look up the image using the category.
  // Use .toLowerCase() for a case-insensitive match.
  // If the category isn't found, it uses the 'default' image.
  const imageUrl = categoryImageMap[category.toLowerCase()] || categoryImageMap.default;

  return (
    <Link to={`/blog/${slug}`} className="block h-full">
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
        <div className="grid grid-rows-[200px,1fr] h-full">
          <div
            className="bg-cover bg-center"
            style={{ backgroundImage: `url('${imageUrl}')` }}
          >
            <div className="w-full h-full bg-black/20 flex items-center justify-center">
              <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white inline-block">
                {category}
              </span>
            </div>
          </div>
          <CardContent className="p-6 flex flex-col">
            <p className="text-gray-500 text-sm mb-2">{date}</p>
            <h3 className="text-xl font-bold mb-2 line-clamp-2 flex-grow">{title}</h3>
            <p className="text-gray-700 mb-4 line-clamp-3">{excerpt}</p>
            <Button variant="outline" className="group mt-auto">
              Read more
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
};

export default BlogPostCard;