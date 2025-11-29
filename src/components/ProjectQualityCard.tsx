import type { ProjectQualityMetric } from "../types";

interface ProjectQualityCardProps {
  project: ProjectQualityMetric;
  onClick: (projectId: string) => void;
}

/**
 * Displays a project's quality metrics
 * Clicking the card should open the ProjectQualityModal
 */
const ProjectQualityCard = ({ project, onClick }: ProjectQualityCardProps) => {
  return (
    <div className="project-card" onClick={() => onClick(project.projectId)}>
      <h3>{project.projectName}</h3>
      <div className="metrics">
        <div className="metric">
          <span className="label">Average Score:</span>
          <span className="value">{project.average.toFixed(2)}</span>
        </div>
        <div className="metric">
          <span className="label">PDR (≤2):</span>
          <span className="value">{project.pdr.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectQualityCard;

