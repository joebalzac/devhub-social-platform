import { useState, useEffect } from 'react';
import { fetchPosts, deletePost } from '../utils/mockApi';
import type { Post, Language } from '../types';

export const usePosts = (language: Language) => {
  // TODO: Add state for posts, loading, error
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadPosts = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchPosts(language);
      setPosts(data);
    } catch (err) {
      setError('Faled to fetch posts');
    } finally {
      setIsLoading(false);
    }
  };

  const deletePostApi = async (id: string) => {
    try {
      setError(null);
      await deletePost(id);
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    } catch (err) {
      setError('Failed to delete post');
      console.log(err);
    }
  };

  useEffect(() => {
    loadPosts();
  }, [language]);

  return {
    posts,
    isLoading,
    error,
    deletePostApi,
    deletePost: deletePostApi,
  };
};
