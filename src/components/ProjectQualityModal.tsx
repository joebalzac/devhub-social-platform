import { useState, useEffect } from 'react';
import type { ProjectData, UserSubmission } from '../types';
import { fetchProjectData } from '../utils/mockApi';
import TasksDisplayCarousel from './TasksDisplayCarousel';

interface ProjectQualityModalProps {
  projectId: string;
  onClose: () => void;
}

/**
 * PART 2C: Implement ProjectQualityModal component
 *
 * Requirements:
 * 1. Group submissions by user to create UserSubmission[]
 * 2. Display list of users (with task count)
 * 3. On click, show that user's tasks in TasksDisplayCarousel
 */
const ProjectQualityModal = ({
  projectId,
  onClose,
}: ProjectQualityModalProps) => {
  // TODO: Add state for projectData, loading, selectedUserId
  // TODO: Fetch project data using useEffect
  // TODO: Transform projectData.submissions into UserSubmission[]
  // TODO: Group by userId, each user should have their tasks array
  // TODO: Display list of users with task counts
  // TODO: Handle user selection
  // TODO: Show TasksDisplayCarousel when user is selected

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Project Modal</h2>
          <button onClick={onClose}>×</button>
        </div>
        <div className="modal-content">
          {/* TODO: Implement modal content */}
          <p>Modal not implemented yet</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectQualityModal;
