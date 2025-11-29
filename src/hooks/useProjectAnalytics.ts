import { useState, useEffect } from 'react';
import { fetchProjectData, PROJECT_IDS } from '../utils/mockApi';
import type { ProjectData, ProjectQualityMetric } from '../types';

/**
 * PART 1B: Implement the useProjectAnalytics hook
 *
 * Requirements:
 * 1. Fetch ProjectData for each project id in PROJECT_IDS
 * 2. Calculate the average quality score for each project
 * 3. Compute the Pseudo Deflect Rate (pdr) - average of scores <= 2
 * 4. Transform ProjectData to ProjectQualityMetric[]
 * 5. Return: { projects, loading, error }
 *
 * Example: scores [1,2,3,4,5] → average: 3.0, pdr: 1.5
 */
export const useProjectAnalytics = () => {
  // TODO: Add state for projects, loading, error
  const [projects, setProjects] = useState<ProjectQualityMetric[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadProjects = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const projectDataList: ProjectData[] = await Promise.all(
        PROJECT_IDS.map((id) => fetchProjectData(id))
      );

      const metrics: ProjectQualityMetric[] = projectDataList.map(
        (projectData) => {
          const scores = projectData.submissions.map((s) => s.score);

          const average =
            scores.length > 0
              ? scores.reduce((sum, score) => sum + score, 0) / scores.length
              : 0;

          const lowScores = scores.filter((score) => score <= 2);
          const pdr =
            lowScores.length > 0
              ? lowScores.reduce((sum, score) => sum + score, 0) /
                lowScores.length
              : 0;

          return {
            projectId: projectData.projectId,
            projectName: projectData.projectName,
            average,
            pdr,
          };
        }
      );
      setProjects(metrics);
    } catch (err) {
      setError('An un known error had happened');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadProjects;
  }, []);

  // TODO: Fetch data using useEffect
  // - Use Promise.all() to fetch all PROJECT_IDS
  // - Calculate average and pdr for each project
  // - Transform to ProjectQualityMetric[]

  return {
    projects,
    isLoading,
    error,
  };
};
