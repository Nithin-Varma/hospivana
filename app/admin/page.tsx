'use client';

import { useState, useEffect } from 'react';
import { Metadata } from 'next';
import { db } from '@/lib/db';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Calendar, User, MessageCircle, Eye, Edit, Trash2 } from 'lucide-react';
import Link from 'next/link';
import AdminAccessModal from '@/components/admin/AdminAccessModal';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const metadata: Metadata = {
  title: 'Admin Dashboard - MarketingLead',
  description: 'Admin dashboard for managing blog posts and reviews',
};

interface AdminData {
  blogPosts: any[];
  reviews: any[];
  categories: any[];
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminData, setAdminData] = useState<AdminData>({ blogPosts: [], reviews: [], categories: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [createForm, setCreateForm] = useState({ title: '', content: '', author: '', categoryId: '', metaTitle: '', metaDescription: '', keywords: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    // Check if admin access is granted
    const adminAccess = sessionStorage.getItem('adminAccess');
    if (adminAccess === 'true') {
      setIsAuthenticated(true);
      fetchAdminData();
    } else {
      setIsLoading(false);
    }
  }, []);

  const fetchAdminData = async () => {
    try {
      const response = await fetch('/api/admin/data');
      if (response.ok) {
        const data = await response.json();
        setAdminData(data);
      }
    } catch (error) {
      console.error('Error fetching admin data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminAccess');
    setIsAuthenticated(false);
    setAdminData({ blogPosts: [], reviews: [], categories: [] });
  };

  const handleCreateInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCreateForm(prev => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (value: string) => {
    setCreateForm(prev => ({ ...prev, categoryId: value }));
  };

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
      const response = await fetch('/api/admin/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(createForm),
      });
      if (response.ok) {
        setCreateForm({ title: '', content: '', author: '', categoryId: '', metaTitle: '', metaDescription: '', keywords: '' });
        setIsCreateModalOpen(false);
        fetchAdminData();
        toast({ title: 'Post created!', description: 'Your blog post was created successfully.' });
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to create post');
      }
    } catch (err) {
      setError('Failed to create post');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show access modal if not authenticated
  if (!isAuthenticated && !isLoading) {
    return <AdminAccessModal />;
  }

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-blue-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const { blogPosts, reviews, categories } = adminData;
  const pendingReviews = reviews.filter((review: any) => !review.published);
  const publishedPosts = blogPosts.filter((post: any) => post.published);
  const draftPosts = blogPosts.filter((post: any) => !post.published);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Admin Dashboard
                </h1>
                <p className="text-xl text-blue-100">
                  Manage your blog posts, reviews, and content
                </p>
              </div>
              <Button
                variant="outline"
                onClick={handleLogout}
                className="text-blue-900 hover:bg-blue-600 hover:text-white"
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{blogPosts.length}</div>
                <p className="text-xs text-muted-foreground">
                  {publishedPosts.length} published, {draftPosts.length} drafts
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Reviews</CardTitle>
                <MessageCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{reviews.length}</div>
                <p className="text-xs text-muted-foreground">
                  All reviews are now public
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Categories</CardTitle>
                <User className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{categories.length}</div>
                <p className="text-xs text-muted-foreground">
                  Active content categories
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Rating</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {reviews.length > 0 
                    ? (reviews.reduce((acc: number, review: any) => acc + review.rating, 0) / reviews.length).toFixed(1)
                    : '0.0'
                  }
                </div>
                <p className="text-xs text-muted-foreground">
                  Across all reviews
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Content Management */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Blog Posts */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Blog Posts</CardTitle>
                    <CardDescription>Manage your blog content</CardDescription>
                  </div>
                  <Button onClick={() => setIsCreateModalOpen(true)}>
                    Create Post
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {blogPosts.slice(0, 5).map((post: any) => (
                    <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-medium">{post.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <span>by {post.author}</span>
                          <span>•</span>
                          <span>{post.categories?.map((cat: any) => cat.name).join(', ') || 'Uncategorized'}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant={post.published ? 'default' : 'secondary'}>
                            {post.published ? 'Published' : 'Draft'}
                          </Badge>
                          {post.reviews?.length > 0 && (
                            <Badge variant="outline">
                              {post.reviews.length} reviews
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/blog/${post.slug}`}>
                            <Eye className="w-4 h-4" />
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/admin/posts/${post.id}/edit`}>
                            <Edit className="w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                  {blogPosts.length === 0 && (
                    <p className="text-center text-gray-500 py-8">No blog posts yet</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Reviews</CardTitle>
                <CardDescription>All reviews are now public by default</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reviews.slice(0, 5).map((review: any) => (
                    <div key={review.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-medium">{review.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <span>by {review.authorName}</span>
                          {review.company && (
                            <>
                              <span>•</span>
                              <span>{review.company}</span>
                            </>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="default">
                            Published
                          </Badge>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={`text-sm ${
                                  i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                                }`}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                        </div>
                        {review.blogPost && (
                          <p className="text-xs text-gray-500 mt-1">
                            On: {review.blogPost.title}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/admin/reviews/${review.id}`}>
                            <Eye className="w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                  {reviews.length === 0 && (
                    <p className="text-center text-gray-500 py-8">No reviews yet</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Create New Blog Post</DialogTitle>
            <DialogDescription>Fill in the details below to create a new blog post.</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleCreatePost} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="title">Title</label>
              <Input id="title" name="title" value={createForm.title} onChange={handleCreateInputChange} required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="content">Content</label>
              <Textarea id="content" name="content" value={createForm.content} onChange={handleCreateInputChange} rows={5} required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="author">Author</label>
              <Input id="author" name="author" value={createForm.author} onChange={handleCreateInputChange} required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="category">Category</label>
              <Select value={createForm.categoryId} onValueChange={handleCategoryChange} required>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat: any) => (
                    <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="metaTitle">Meta Title (SEO)</label>
              <Input id="metaTitle" name="metaTitle" value={createForm.metaTitle} onChange={handleCreateInputChange} placeholder="SEO title for this post (optional)" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="metaDescription">Meta Description (SEO)</label>
              <Textarea id="metaDescription" name="metaDescription" value={createForm.metaDescription} onChange={handleCreateInputChange} placeholder="SEO description for this post (optional)" rows={2} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="keywords">Keywords (comma separated)</label>
              <Input id="keywords" name="keywords" value={createForm.keywords} onChange={handleCreateInputChange} placeholder="e.g. marketing, healthcare, SEO" />
            </div>
            {error && <div className="text-red-600 text-sm">{error}</div>}
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Creating...' : 'Create Post'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
} 