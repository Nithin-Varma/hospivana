import { Metadata } from 'next';
import Link from 'next/link';
import { db } from '@/lib/db';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog - Digital Marketing Insights & Tips | MarketingLead',
  description: 'Stay updated with the latest digital marketing trends, tips, and insights. Expert articles on SEO, social media, Google Ads, and more.',
  keywords: 'digital marketing blog, SEO tips, social media marketing, Google Ads, marketing insights',
};

async function getBlogPosts() {
  try {
    const posts = await db.blogPost.findMany({
      where: { published: true },
      include: {
        categories: true,
        reviews: {
          where: { published: true },
          take: 3,
        },
      },
      orderBy: { publishedAt: 'desc' },
      take: 12,
    });
    return posts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Digital Marketing Blog
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Expert insights, tips, and strategies to grow your business online
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-blue-600 bg-white">
                SEO Tips
              </Badge>
              <Badge variant="secondary" className="text-blue-600 bg-white">
                Social Media
              </Badge>
              <Badge variant="secondary" className="text-blue-600 bg-white">
                Google Ads
              </Badge>
              <Badge variant="secondary" className="text-blue-600 bg-white">
                Content Marketing
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 flex flex-col h-full min-h-[420px]">
                {post.featuredImage && (
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                {/* Scrollable Content Area */}
                <CardHeader className="flex-1 overflow-y-auto min-h-[120px]">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.categories.map((category) => (
                      <Badge key={category.id} variant="outline" className="text-xs">
                        {category.name}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt || post.content.substring(0, 150)}...
                  </CardDescription>
                </CardHeader>
                {/* Footer fixed at bottom */}
                <div className="px-6 pb-6 pt-2 border-t bg-white">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {post.publishedAt?.toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                  </div>
                  {post.reviews.length > 0 && (
                    <div className="mb-2">
                      <div className="flex items-center gap-1 text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-sm">
                            ★
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-gray-600">
                        {post.reviews.length} review{post.reviews.length !== 1 ? 's' : ''}
                      </p>
                    </div>
                  )}
                  <Button asChild className="w-full group mt-2">
                    <Link href={`/blog/${post.slug}`}>
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          {posts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-600 mb-4">
                No blog posts yet
              </h3>
              <p className="text-gray-500">
                Check back soon for the latest digital marketing insights!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
} 