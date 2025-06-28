import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: 'seo-tips' },
      update: {},
      create: {
        name: 'SEO Tips',
        slug: 'seo-tips',
        description: 'Search Engine Optimization strategies and tips',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'social-media' },
      update: {},
      create: {
        name: 'Social Media',
        slug: 'social-media',
        description: 'Social media marketing strategies',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'google-ads' },
      update: {},
      create: {
        name: 'Google Ads',
        slug: 'google-ads',
        description: 'Google Ads optimization and strategies',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'content-marketing' },
      update: {},
      create: {
        name: 'Content Marketing',
        slug: 'content-marketing',
        description: 'Content creation and marketing strategies',
      },
    }),
  ]);

  // Create blog posts
  const blogPosts = await Promise.all([
    prisma.blogPost.upsert({
      where: { slug: 'top-10-seo-tips-2024' },
      update: {},
      create: {
        title: 'Top 10 SEO Tips for 2024: Boost Your Website Rankings',
        slug: 'top-10-seo-tips-2024',
        content: `
          <h2>Introduction</h2>
          <p>Search Engine Optimization (SEO) is constantly evolving, and staying ahead of the curve is crucial for online success. In this comprehensive guide, we'll explore the top 10 SEO strategies that will help you improve your website's visibility in 2024.</p>
          
          <h2>1. Focus on Core Web Vitals</h2>
          <p>Google's Core Web Vitals are now more important than ever. These metrics measure your website's loading performance, interactivity, and visual stability. To improve your Core Web Vitals:</p>
          <ul>
            <li>Optimize images and use WebP format</li>
            <li>Minimize JavaScript and CSS</li>
            <li>Use a CDN for faster content delivery</li>
            <li>Implement lazy loading</li>
          </ul>
          
          <h2>2. Create High-Quality, Long-Form Content</h2>
          <p>Content is still king in SEO. Focus on creating comprehensive, valuable content that answers user queries thoroughly. Aim for at least 1,500 words for important pages, and include relevant keywords naturally throughout the content.</p>
          
          <h2>3. Optimize for Voice Search</h2>
          <p>With the rise of voice assistants, optimizing for voice search is essential. Use conversational keywords and answer common questions directly in your content.</p>
          
          <h2>4. Improve User Experience (UX)</h2>
          <p>Google prioritizes websites that provide excellent user experience. Ensure your site is mobile-friendly, has fast loading times, and offers intuitive navigation.</p>
          
          <h2>5. Build Quality Backlinks</h2>
          <p>Focus on earning high-quality backlinks from authoritative websites in your industry. Create shareable content and reach out to relevant websites for guest posting opportunities.</p>
          
          <h2>6. Optimize for Featured Snippets</h2>
          <p>Featured snippets appear at the top of search results and can significantly increase your visibility. Structure your content with clear headings, bullet points, and direct answers to common questions.</p>
          
          <h2>7. Use Schema Markup</h2>
          <p>Implement structured data to help search engines understand your content better. This can lead to rich snippets and improved click-through rates.</p>
          
          <h2>8. Optimize for Local SEO</h2>
          <p>If you have a local business, optimize for local search by claiming your Google My Business listing and ensuring consistent NAP (Name, Address, Phone) information across the web.</p>
          
          <h2>9. Monitor and Improve Page Speed</h2>
          <p>Page speed is a crucial ranking factor. Use tools like Google PageSpeed Insights to identify and fix performance issues.</p>
          
          <h2>10. Stay Updated with Algorithm Changes</h2>
          <p>Google regularly updates its algorithm. Stay informed about the latest changes and adjust your SEO strategy accordingly.</p>
          
          <h2>Conclusion</h2>
          <p>Implementing these SEO strategies will help you improve your website's search engine rankings and drive more organic traffic. Remember that SEO is a long-term process, so be patient and consistent with your efforts.</p>
        `,
        excerpt: 'Discover the most effective SEO strategies for 2024 that will help you improve your website rankings and drive more organic traffic.',
        author: 'MarketingLead Team',
        published: true,
        publishedAt: new Date('2024-01-15'),
        metaTitle: 'Top 10 SEO Tips for 2024: Boost Your Website Rankings',
        metaDescription: 'Learn the most effective SEO strategies for 2024. Improve your website rankings with these proven techniques.',
        keywords: 'SEO tips, search engine optimization, website ranking, SEO 2024, digital marketing',
        categories: {
          connect: [{ slug: 'seo-tips' }],
        },
      },
    }),
    prisma.blogPost.upsert({
      where: { slug: 'social-media-marketing-strategies' },
      update: {},
      create: {
        title: 'Effective Social Media Marketing Strategies for Business Growth',
        slug: 'social-media-marketing-strategies',
        content: `
          <h2>Introduction</h2>
          <p>Social media has become an essential part of any successful marketing strategy. With billions of users worldwide, platforms like Facebook, Instagram, LinkedIn, and TikTok offer unprecedented opportunities to connect with your target audience.</p>
          
          <h2>1. Define Your Social Media Goals</h2>
          <p>Before diving into social media marketing, clearly define your objectives. Are you looking to increase brand awareness, drive website traffic, generate leads, or boost sales? Your goals will determine your strategy.</p>
          
          <h2>2. Know Your Audience</h2>
          <p>Understanding your target audience is crucial for creating relevant content. Research their demographics, interests, and online behavior to tailor your social media strategy accordingly.</p>
          
          <h2>3. Choose the Right Platforms</h2>
          <p>Not all social media platforms are created equal. Focus on the platforms where your target audience is most active:</p>
          <ul>
            <li>Facebook: Great for B2C businesses and community building</li>
            <li>Instagram: Perfect for visual content and younger audiences</li>
            <li>LinkedIn: Ideal for B2B marketing and professional networking</li>
            <li>TikTok: Excellent for reaching Gen Z and creating viral content</li>
          </ul>
          
          <h2>4. Create Engaging Content</h2>
          <p>Content is the backbone of social media success. Mix different types of content:</p>
          <ul>
            <li>Educational posts</li>
            <li>Behind-the-scenes content</li>
            <li>User-generated content</li>
            <li>Industry news and insights</li>
            <li>Promotional content (sparingly)</li>
          </ul>
          
          <h2>5. Maintain Consistent Posting Schedule</h2>
          <p>Consistency is key in social media marketing. Create a content calendar and stick to a regular posting schedule to keep your audience engaged.</p>
          
          <h2>6. Engage with Your Audience</h2>
          <p>Social media is a two-way conversation. Respond to comments, messages, and mentions promptly. Show appreciation for user-generated content and encourage community participation.</p>
          
          <h2>7. Use Paid Advertising</h2>
          <p>Organic reach is declining on most platforms. Invest in paid advertising to reach a wider audience and achieve your marketing goals faster.</p>
          
          <h2>8. Monitor and Analyze Performance</h2>
          <p>Regularly track your social media metrics to understand what's working and what isn't. Use insights to optimize your strategy and improve results.</p>
          
          <h2>Conclusion</h2>
          <p>Social media marketing requires time, effort, and strategy. By implementing these strategies, you can build a strong social media presence and drive business growth.</p>
        `,
        excerpt: 'Learn effective social media marketing strategies to grow your business and connect with your target audience.',
        author: 'MarketingLead Team',
        published: true,
        publishedAt: new Date('2024-01-10'),
        metaTitle: 'Social Media Marketing Strategies for Business Growth',
        metaDescription: 'Discover effective social media marketing strategies to grow your business and connect with your target audience.',
        keywords: 'social media marketing, business growth, social media strategy, digital marketing',
        categories: {
          connect: [{ slug: 'social-media' }],
        },
      },
    }),
  ]);

  // Create sample reviews
  await Promise.all([
    prisma.review.upsert({
      where: { id: 'review-1' },
      update: {},
      create: {
        id: 'review-1',
        title: 'Excellent SEO Tips!',
        content: 'This article provided valuable insights into modern SEO practices. The tips are practical and easy to implement. Highly recommended for anyone looking to improve their website rankings.',
        rating: 5,
        authorName: 'Sarah Johnson',
        authorEmail: 'sarah@example.com',
        company: 'Digital Marketing Agency',
        published: true,
        blogPostId: blogPosts[0].id,
      },
    }),
    prisma.review.upsert({
      where: { id: 'review-2' },
      update: {},
      create: {
        id: 'review-2',
        title: 'Great Social Media Guide',
        content: 'The social media marketing strategies outlined in this post are comprehensive and actionable. I especially liked the section on choosing the right platforms for your business.',
        rating: 5,
        authorName: 'Mike Chen',
        authorEmail: 'mike@example.com',
        company: 'Startup Founder',
        published: true,
        blogPostId: blogPosts[1].id,
      },
    }),
  ]);

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 