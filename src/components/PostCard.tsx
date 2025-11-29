import type { Post } from '../types';

interface PostCardProps {
  post: Post;
  onDelete: (postId: string) => void;
}

/**
 * PART 2B: Implement PostCard component
 *
 * Requirements:
 * 1. Display post information (title, content, author, etc.)
 * 2. Show language badge
 * 3. Implement delete functionality
 * 4. Add UI/UX improvements (choose 2-3 and implement one)
 * 5. Handle delete confirmation
 *
 */

const PostCard = ({ post, onDelete }: PostCardProps) => {
  // TODO: Implement post card UI
  // TODO: Add delete functionality
  // TODO: Implement UI/UX improvements
  // TODO: Add confirmation dialog for delete

  return (
    <div className="post-card">
      {/* TODO: Implement post card UI */}
      <p>Post card not implemented yet</p>
    </div>
  );
};

export default PostCard;
