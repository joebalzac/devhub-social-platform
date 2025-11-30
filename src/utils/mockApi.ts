import type { Post, ProjectData, Language } from '../types';

// ===== MOCK POSTS DATA =====

const mockPosts: Post[] = [
  {
    id: '1',
    title: 'Getting Started with React',
    content: 'React is a powerful library for building user interfaces...',
    language: 'en',
    author: 'John Doe',
    createdAt: '2024-01-15T10:30:00Z',
    likes: 42,
    comments: 8,
  },
  {
    id: '2',
    title: 'Empezando con React',
    content:
      'React es una biblioteca poderosa para crear interfaces de usuario...',
    language: 'es',
    author: 'María García',
    createdAt: '2024-01-14T14:20:00Z',
    likes: 28,
    comments: 5,
  },
  {
    id: '3',
    title: 'Advanced TypeScript Patterns',
    content: 'TypeScript provides powerful type system features...',
    language: 'en',
    author: 'Sarah Wilson',
    createdAt: '2024-01-13T09:15:00Z',
    likes: 67,
    comments: 12,
  },
  {
    id: '4',
    title: 'Patrones Avanzados de TypeScript',
    content:
      'TypeScript proporciona características poderosas del sistema de tipos...',
    language: 'es',
    author: 'Carlos Rodríguez',
    createdAt: '2024-01-12T16:45:00Z',
    likes: 35,
    comments: 7,
  },
  {
    id: '5',
    title: 'Building Scalable Applications',
    content: 'Learn how to structure your React applications for scale...',
    language: 'en',
    author: 'Mike Johnson',
    createdAt: '2024-01-11T11:30:00Z',
    likes: 89,
    comments: 15,
  },
];

// ===== MOCK PROJECTS DATA =====

const mockProjectData: Record<string, ProjectData> = {
  'proj-1': {
    projectId: 'proj-1',
    projectName: 'AI Image Classification',
    submissions: [
      {
        userId: 'user-1',
        userName: 'Alice Johnson',
        taskId: 'task-1',
        taskName: 'Label Images - Batch 1',
        score: 4,
      },
      {
        userId: 'user-1',
        userName: 'Alice Johnson',
        taskId: 'task-2',
        taskName: 'Label Images - Batch 2',
        score: 5,
      },
      {
        userId: 'user-2',
        userName: 'Bob Smith',
        taskId: 'task-1',
        taskName: 'Label Images - Batch 1',
        score: 2,
      },
      {
        userId: 'user-2',
        userName: 'Bob Smith',
        taskId: 'task-2',
        taskName: 'Label Images - Batch 2',
        score: 1,
      },
      {
        userId: 'user-3',
        userName: 'Charlie Brown',
        taskId: 'task-1',
        taskName: 'Label Images - Batch 1',
        score: 3,
      },
      {
        userId: 'user-3',
        userName: 'Charlie Brown',
        taskId: 'task-2',
        taskName: 'Label Images - Batch 2',
        score: 4,
      },
    ],
  },
  'proj-2': {
    projectId: 'proj-2',
    projectName: 'Text Annotation Project',
    submissions: [
      {
        userId: 'user-4',
        userName: 'Diana Prince',
        taskId: 'task-3',
        taskName: 'Annotate Text - Set 1',
        score: 5,
      },
      {
        userId: 'user-4',
        userName: 'Diana Prince',
        taskId: 'task-4',
        taskName: 'Annotate Text - Set 2',
        score: 5,
      },
      {
        userId: 'user-5',
        userName: 'Edward Norton',
        taskId: 'task-3',
        taskName: 'Annotate Text - Set 1',
        score: 1,
      },
      {
        userId: 'user-5',
        userName: 'Edward Norton',
        taskId: 'task-4',
        taskName: 'Annotate Text - Set 2',
        score: 2,
      },
      {
        userId: 'user-6',
        userName: 'Fiona Apple',
        taskId: 'task-3',
        taskName: 'Annotate Text - Set 1',
        score: 3,
      },
    ],
  },
  'proj-3': {
    projectId: 'proj-3',
    projectName: 'Audio Transcription',
    submissions: [
      {
        userId: 'user-7',
        userName: 'George Lucas',
        taskId: 'task-5',
        taskName: 'Transcribe Audio - Part 1',
        score: 4,
      },
      {
        userId: 'user-7',
        userName: 'George Lucas',
        taskId: 'task-6',
        taskName: 'Transcribe Audio - Part 2',
        score: 3,
      },
      {
        userId: 'user-8',
        userName: 'Hannah Montana',
        taskId: 'task-5',
        taskName: 'Transcribe Audio - Part 1',
        score: 2,
      },
      {
        userId: 'user-8',
        userName: 'Hannah Montana',
        taskId: 'task-6',
        taskName: 'Transcribe Audio - Part 2',
        score: 2,
      },
      {
        userId: 'user-9',
        userName: 'Ian McKellen',
        taskId: 'task-5',
        taskName: 'Transcribe Audio - Part 1',
        score: 1,
      },
    ],
  },
};

// ===== PROJECT IDs =====
export const PROJECT_IDS = ['proj-1', 'proj-2', 'proj-3'];

// ===== API FUNCTIONS =====

/**
 * Fetch posts with optional language filter
 */
export const fetchPosts = async (language?: Language): Promise<Post[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (language) {
    return mockPosts.filter((post) => post.language === language);
  }

  return mockPosts;
};

/**
 * Delete a post by ID
 */
export const deletePost = async (postId: string): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  // In a real app, this would make an API call
  console.log(`Post ${postId} deleted successfully`);
};

/**
 * Fetch project data by ID
 */
export const fetchProjectData = async (
  projectId: string
): Promise<ProjectData> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const data = mockProjectData[projectId];
  if (!data) {
    throw new Error(`Project ${projectId} not found`);
  }

  return data;
};

/**
 * Get analytics data
 */
export const fetchAnalytics = async () => {
  await new Promise((resolve) => setTimeout(resolve, 400));

  return {
    totalPosts: mockPosts.length,
    postsByLanguage: {
      en: mockPosts.filter((p) => p.language === 'en').length,
      es: mockPosts.filter((p) => p.language === 'es').length,
    },
    averageQuality: 3.2,
    topProjects: [],
  };
};
