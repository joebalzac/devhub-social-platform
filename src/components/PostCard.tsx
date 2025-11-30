import { useState } from 'react';
import type { Post } from '../types';

interface PostCardProps {
  post: Post;
  onDelete: (postId: string) => void;
}

const PostCard = ({ post, onDelete }: PostCardProps) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    onDelete(post.id);
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <h3 className="post-title">{post.title}</h3>
        <span className={`language-badge ${post.language}`}>
          {post.language.toUpperCase()}
        </span>
      </div>

      <div className="post-content">{post.content}</div>

      <div className="post-meta">
        <span>By {post.author}</span>
        <span>•</span>
        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
      </div>

      <div className="post-stats">
        <span>❤️ {post.likes}</span>
        <span>💬 {post.comments} comments</span>
      </div>

      <div className="post-actions">
        <button
          className="btn btn-danger"
          onClick={handleDelete}
          disabled={isDeleting}
        >
          {isDeleting ? 'Deleting...' : 'Delete'}
        </button>
      </div>
    </div>
  );
};

export default PostCard;
