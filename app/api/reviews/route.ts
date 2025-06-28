import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      title,
      content,
      authorName,
      authorEmail,
      authorPhone,
      company,
      website,
      rating,
      blogPostId,
    } = body;

    // Validation
    if (!title || !content || !authorName || !rating || !blogPostId) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { message: 'Rating must be between 1 and 5' },
        { status: 400 }
      );
    }

    // Check if blog post exists
    const blogPost = await db.blogPost.findUnique({
      where: { id: blogPostId },
    });

    if (!blogPost) {
      return NextResponse.json(
        { message: 'Blog post not found' },
        { status: 404 }
      );
    }

    // Create review
    const review = await db.review.create({
      data: {
        title: title.trim(),
        content: content.trim(),
        authorName: authorName.trim(),
        authorEmail: authorEmail?.trim() || null,
        authorPhone: authorPhone?.trim() || null,
        company: company?.trim() || null,
        website: website?.trim() || null,
        rating: parseInt(rating),
        blogPostId,
        published: true, // Reviews are now public by default
      },
    });

    return NextResponse.json(
      { 
        message: 'Review submitted successfully',
        review: {
          id: review.id,
          title: review.title,
          authorName: review.authorName,
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating review:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const blogPostId = searchParams.get('blogPostId');
    const published = searchParams.get('published') === 'true';

    const where: any = {};
    if (blogPostId) {
      where.blogPostId = blogPostId;
    }
    if (published !== null) {
      where.published = published;
    }

    const reviews = await db.review.findMany({
      where,
      include: {
        blogPost: {
          select: {
            title: true,
            slug: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
} 