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