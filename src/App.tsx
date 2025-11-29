import { useState } from "react";
import "./App.css";
import { usePosts } from "./hooks/usePosts";
import { useProjectAnalytics } from "./hooks/useProjectAnalytics";
import LanguagePicker from "./components/LanguagePicker";
import PostCard from "./components/PostCard";
import ProjectQualityCard from "./components/ProjectQualityCard";
import ProjectQualityModal from "./components/ProjectQualityModal";
import NotificationSystem from "./components/NotificationSystem";
import type { Language } from "./types";

function App() {
  const [activeTab, setActiveTab] = useState<"posts" | "projects">("posts");
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("en");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  );

  // TODO: Implement these hooks
  const {
    posts,
    loading: postsLoading,
    error: postsError,
    deletePost,
  } = usePosts(selectedLanguage);
  const {
    projects,
    loading: projectsLoading,
    error: projectsError,
  } = useProjectAnalytics();

  return (
    <div className="app">
      <header>
        <h1>🚀 DevHub Social Platform</h1>
        <p>Connect, Learn, and Build Together</p>
      </header>

      {/* Navigation Tabs */}
      <div className="nav-tabs">
        <button
          className={`nav-tab ${activeTab === "posts" ? "active" : ""}`}
          onClick={() => setActiveTab("posts")}
        >
          📝 Posts
        </button>
        <button
          className={`nav-tab ${activeTab === "projects" ? "active" : ""}`}
          onClick={() => setActiveTab("projects")}
        >
          📊 Analytics
        </button>
      </div>

      {/* Posts Section */}
      {activeTab === "posts" && (
        <>
          {/* TODO: Implement LanguagePicker component */}
          <LanguagePicker
            selectedLanguage={selectedLanguage as Language}
            onLanguageChange={(language) => setSelectedLanguage(language)}
          />

          {/* TODO: Implement PostCard component */}
          {postsLoading && <div className="loading">Loading posts...</div>}
          {postsError && <div className="error">Error: {postsError}</div>}

          <div className="posts-grid">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} onDelete={deletePost} />
            ))}
          </div>
        </>
      )}

      {/* Projects Section */}
      {activeTab === "projects" && (
        <>
          {projectsLoading && (
            <div className="loading">Loading projects...</div>
          )}
          {projectsError && <div className="error">Error: {projectsError}</div>}

          <div className="projects-grid">
            {Array.isArray(projects) &&
              projects.map((project: any) => (
                <ProjectQualityCard
                  key={project.projectId}
                  project={project}
                  onClick={() => setSelectedProjectId(project.projectId)}
                />
              ))}
          </div>
        </>
      )}

      {/* TODO: Implement ProjectQualityModal component */}
      {selectedProjectId && (
        <ProjectQualityModal
          projectId={selectedProjectId}
          onClose={() => setSelectedProjectId(null)}
        />
      )}

      {/* TODO: Implement NotificationSystem component */}
      <NotificationSystem />
    </div>
  );
}

export default App;
