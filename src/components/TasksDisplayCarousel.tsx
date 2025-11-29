import type { TaskSubmission } from '../types';

interface TasksDisplayCarouselProps {
  tasks: TaskSubmission[];
}

/**
 * PART 2D: Implement TasksDisplayCarousel component
 *
 * Requirements:
 * 1. Display ONE task at a time (not all tasks)
 * 2. Add "Back" button (disabled when at first task)
 * 3. Add "Next" button (disabled when at last task)
 */
const TasksDisplayCarousel = ({ tasks }: TasksDisplayCarouselProps) => {
  if (tasks.length === 0) {
    return <p>No tasks available</p>;
  }

  // TODO: Add state to track current task index (start at 0)
  // TODO: Add handlers for Back/Next buttons
  // TODO: Get the current task using tasks[currentIndex]
  // TODO: Display only ONE task (not .map) - show currentTask
  // TODO: Add Back and Next buttons
  // TODO: Back disabled when currentIndex === 0
  // TODO: Next disabled when currentIndex === tasks.length - 1

  return (
    <div className="tasks-carousel">
      <h4>Task Submissions</h4>
      {/* TODO: Implement carousel */}
      <p>Carousel not implemented yet</p>
    </div>
  );
};

export default TasksDisplayCarousel;
