const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

interface Post {
  id: string;
  title: string;
  content: string;
  author: {
    id: string;
    name: string;
    avatar?: string;
  };
  createdAt: string;
  updatedAt: string;
  published: boolean;
  tags: string[];
}

interface CreatePostRequest {
  title: string;
  content: string;
  published?: boolean;
  tags?: string[];
}

interface UpdatePostRequest {
  title?: string;
  content?: string;
  published?: boolean;
  tags?: string[];
}

export const postsApi = {
  async getPosts(): Promise<Post[]> {
    const response = await fetch(`${API_BASE_URL}/posts`);

    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }

    return response.json();
  },

  async getPostById(id: string): Promise<Post> {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`);

    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }

    return response.json();
  },

  async createPost(postData: CreatePostRequest): Promise<Post> {
    const response = await fetch(`${API_BASE_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error('Failed to create post');
    }

    return response.json();
  },

  async updatePost(id: string, postData: UpdatePostRequest): Promise<Post> {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error('Failed to update post');
    }

    return response.json();
  },

  async deletePost(id: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete post');
    }
  },

  async getPostsByAuthor(authorId: string): Promise<Post[]> {
    const response = await fetch(`${API_BASE_URL}/posts?author=${authorId}`);

    if (!response.ok) {
      throw new Error('Failed to fetch posts by author');
    }

    return response.json();
  },
};
