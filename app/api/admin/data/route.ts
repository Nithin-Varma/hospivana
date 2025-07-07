import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const [blogPosts, reviews, categories] = await Promise.all([
      db.blogPost.findMany({
        include: {
          categories: true,
          reviews: {
            where: { published: true },
          },
        },
        orderBy: { createdAt: 'desc' },
      }),
      db.review.findMany({
        include: {
          blogPost: {
            select: { title: true, slug: true },
          },
        },
        orderBy: { createdAt: 'desc' },
      }),
      db.category.findMany({
        include: {
          _count: {
            select: { blogPosts: true },
          },
        },
      }),
    ]);

    return NextResponse.json({
      blogPosts,
      reviews,
      categories,
    });
  } catch (error) {
    console.error('Error fetching admin data:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  function slugify(text: string) {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
      .replace(/-+/g, '-');
  }
  try {
    const { title, content, author, categoryId, metaTitle, metaDescription, keywords } = await request.json();
    if (!title || !content || !author || !categoryId) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }
    // Validate category exists
    const category = await db.category.findUnique({ where: { id: categoryId } });
    if (!category) {
      return NextResponse.json({ message: 'Invalid category' }, { status: 400 });
    }
    const slug = slugify(title);
    const newPost = await db.blogPost.create({
      data: {
        title: title.trim(),
        content: content.trim(),
        author: author.trim(),
        slug,
        published: true,
        categories: { connect: { id: categoryId } },
        metaTitle: metaTitle?.trim() || undefined,
        metaDescription: metaDescription?.trim() || undefined,
        keywords: keywords?.trim() || undefined,
      },
    });
    return NextResponse.json({ post: newPost }, { status: 201 });
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
} 