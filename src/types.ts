// ===== CORE TYPES =====

export interface Post {
  id: string;
  title: string;
  content: string;
  language: "en" | "es";
  author: string;
  createdAt: string;
  likes: number;
  comments: number;
}

export interface ProjectData {
  projectId: string;
  projectName: string;
  submissions: Submission[];
}

export interface Submission {
  userId: string;
  userName: string;
  taskId: string;
  taskName: string;
  score: number;
}

export interface ProjectQualityMetric {
  projectId: string;
  projectName: string;
  average: number;
  pdr: number; // Pseudo Deflect Rate
}

export interface UserSubmission {
  userId: string;
  userName: string;
  tasks: TaskSubmission[];
}

export interface TaskSubmission {
  taskId: string;
  taskName: string;
  score: number;
}

// ===== LANGUAGE TYPES =====

export type Language = "en" | "es";

export interface LanguageOption {
  code: Language;
  name: string;
  flag: string;
}

// ===== NOTIFICATION TYPES =====

export interface Notification {
  id: string;
  type: "success" | "error" | "info";
  message: string;
  duration?: number;
}

// ===== ANALYTICS TYPES =====

export interface AnalyticsData {
  totalPosts: number;
  postsByLanguage: Record<Language, number>;
  averageQuality: number;
  topProjects: ProjectQualityMetric[];
}

