# 🎯 Complete Implementation Checklist

## 📋 Part 1: Core Data Layer

### **Question 1A: Posts Management Hook** (`src/hooks/usePosts.ts`)

**Main Question:** Create a custom hook that fetches and manages posts with language filtering.

**Sub-Questions:**

1. Add state for posts, loading, and error

   - Use `useState` for posts (Post[])
   - Use `useState` for loading (boolean)
   - Use `useState` for error (string | null)

2. Fetch posts using useEffect with language filter

   - Create async function to fetch posts
   - Call `fetchPosts(language)` from mockApi
   - Use `useEffect` with `language` as dependency
   - Handle loading state (set loading to true before fetch, false after)

3. Handle loading and error states

   - Set loading to true when fetching starts
   - Set loading to false when fetch completes (success or error)
   - Set error message if fetch fails
   - Clear error on successful fetch

4. Implement deletePost function

   - Create async function that takes postId (string)
   - Call `deletePostApi(postId)` from mockApi
   - Handle loading state during deletion
   - Handle errors if deletion fails

5. Update local posts state after deletion

   - Remove deleted post from posts array
   - Use functional update: `setPosts(prevPosts => prevPosts.filter(...))`
   - Filter out post with matching id

6. Return the correct object
   - Return: `{ posts, loading, error, deletePost }`
   - Make sure property names match what App.tsx expects

---

### **Question 1B: Project Analytics Hook** (`src/hooks/useProjectAnalytics.ts`)

**Main Question:** Create a custom hook that fetches project data and calculates quality metrics.

**Sub-Questions:**

1. Add state for projects, loading, and error

   - Use `useState` for projects (ProjectQualityMetric[])
   - Use `useState` for loading (boolean)
   - Use `useState` for error (string | null)

2. Fetch ProjectData for each project ID

   - Import `PROJECT_IDS` from mockApi
   - Use `Promise.all()` to fetch all projects at once
   - Call `fetchProjectData(projectId)` for each ID
   - Handle loading state during fetch

3. Calculate average quality score for each project

   - For each project, get all submission scores
   - Calculate: `average = sum of all scores / count of scores`
   - Example: [1, 2, 3, 4, 5] → (1+2+3+4+5) / 5 = 3.0

4. Compute Pseudo Deflect Rate (PDR) for each project

   - Filter scores to only those <= 2
   - Calculate average of filtered scores
   - Example: [1, 2, 3, 4, 5] → filter to [1, 2] → (1+2) / 2 = 1.5
   - If no scores <= 2, PDR should be 0 or handle edge case

5. Transform ProjectData to ProjectQualityMetric[]

   - Map over fetched projects
   - Create ProjectQualityMetric object for each:
     - projectId
     - projectName
     - average (calculated)
     - pdr (calculated)

6. Handle errors and loading states

   - Set loading to true when fetching starts
   - Set loading to false when complete
   - Set error if any fetch fails
   - Use try/catch for error handling

7. Return the correct object
   - Return: `{ projects, loading, error }`
   - Make sure projects is ProjectQualityMetric[]

---

## 📋 Part 2: UI Components

### **Question 2A: Language Picker** (`src/components/LanguagePicker.tsx`)

**Main Question:** Create a component that allows users to filter posts by language.

**Sub-Questions:**

1. Define language options array

   - Create array with English and Spanish options
   - Each option should have: `{ code, name, flag }`
   - English: code "en", name "English", flag "🇺🇸"
   - Spanish: code "es", name "Español", flag "🇪🇸"

2. Create language selection UI

   - Use `<select>` element or buttons
   - Map over languageOptions to create options
   - Display flag and name for each option
   - Set value to `selectedLanguage` prop

3. Handle language change events

   - Add `onChange` handler to select/buttons
   - Call `onLanguageChange` prop with selected language code
   - Cast to Language type: `as Language`

4. Show active language with visual feedback

   - Use `selectedLanguage` prop to determine active option
   - Apply active styling (CSS class `.active` or selected attribute)
   - Visual feedback handled by CSS

5. Make it responsive (CSS already handles this)

---

### **Question 2B: Enhanced Post Card** (`src/components/PostCard.tsx`)

**Main Question:** Display post information with delete functionality and UI improvements.

**Sub-Questions:**

1. Display post information

   - Show post title (use `.post-title` class)
   - Show post content (use `.post-content` class)
   - Show author name (use `.post-meta` class)
   - Show creation date (format with `toLocaleDateString()`)
   - Show likes and comments (use `.post-stats` class)

2. Show language badge

   - Display language code in uppercase
   - Use `.language-badge` class
   - Add dynamic class: `.language-badge.${post.language}`
   - This applies correct color (blue for en, orange for es)

3. Implement delete functionality

   - Add delete button with `.btn .btn-danger` classes
   - Add `onClick` handler that calls `onDelete(post.id)`
   - Button should be in `.post-actions` div

4. Add delete confirmation dialog

   - Before calling `onDelete`, show confirmation
   - Use `window.confirm("Are you sure you want to delete this post?")`
   - Only call `onDelete(post.id)` if user confirms
   - Or create custom confirmation UI

5. Choose and implement 1-2 UI/UX improvements

   - Option 1: Hover effects (already in CSS)
   - Option 2: Better typography and spacing (use CSS classes)
   - Option 3: Loading states for delete action
   - Option 4: Error handling with user feedback
   - Pick 1-2 and implement

6. Use proper CSS classes
   - `.post-card` for card container
   - `.post-header` for header section
   - `.post-title` for title
   - `.post-content` for content
   - `.post-meta` for author/date
   - `.post-stats` for likes/comments
   - `.post-actions` for buttons

---

### **Question 2C: Project Quality Modal** (`src/components/ProjectQualityModal.tsx`)

**Main Question:** Display user submissions for a project with task details in a modal.

**Sub-Questions:**

1. Add state for projectData, loading, and selectedUserId

   - Use `useState` for projectData (ProjectData | null)
   - Use `useState` for loading (boolean)
   - Use `useState` for selectedUserId (string | null)

2. Fetch project data using useEffect

   - Create async function to fetch project data
   - Call `fetchProjectData(projectId)` from mockApi
   - Use `useEffect` with `projectId` as dependency
   - Set loading state appropriately

3. Transform projectData.submissions into UserSubmission[]

   - Use `.reduce()` to group submissions by userId
   - For each user, collect all their tasks
   - Create UserSubmission object:
     - userId
     - userName
     - tasks: array of TaskSubmission objects
   - Each TaskSubmission: { taskId, taskName, score }

4. Display list of users with task counts

   - Map over userSubmissions array
   - Display each user in `.users-list` container
   - Show userName and task count (tasks.length)
   - Use `.user-item` class for each user
   - Add `onClick` handler to set selectedUserId

5. Handle user selection

   - When user clicks, set selectedUserId
   - Apply `.selected` class to selected user item
   - Find selected user's tasks from userSubmissions

6. Show TasksDisplayCarousel when user is selected

   - Conditionally render TasksDisplayCarousel
   - Only show when selectedUserId is not null
   - Find selected user's tasks
   - Pass tasks array to TasksDisplayCarousel component

7. Handle modal close
   - Close button should call `onClose` prop
   - Clicking overlay should also close modal

---

### **Question 2D: Tasks Display Carousel** (`src/components/TasksDisplayCarousel.tsx`)

**Main Question:** Display one task at a time with Back/Next navigation buttons.

**Sub-Questions:**

1. Add state to track current task index

   - Use `useState` for currentIndex (number)
   - Initialize to 0 (first task)

2. Get the current task using tasks[currentIndex]

   - Access current task: `const currentTask = tasks[currentIndex]`
   - Handle edge case: check if tasks array is empty

3. Display only ONE task (not all tasks)

   - Remove the `.map()` that displays all tasks
   - Display only `currentTask`
   - Use `.task-item` class for styling
   - Show taskName and score

4. Add "Back" button

   - Create button with text "Back"
   - Add `onClick` handler that decrements currentIndex
   - Use: `setCurrentIndex(prev => prev - 1)`
   - Place in `.carousel-controls` div

5. Disable Back button when at first task

   - Disable when `currentIndex === 0`
   - Use `disabled` attribute: `disabled={currentIndex === 0}`
   - CSS will handle disabled styling

6. Add "Next" button

   - Create button with text "Next"
   - Add `onClick` handler that increments currentIndex
   - Use: `setCurrentIndex(prev => prev + 1)`
   - Place in `.carousel-controls` div

7. Disable Next button when at last task

   - Disable when `currentIndex === tasks.length - 1`
   - Use `disabled` attribute: `disabled={currentIndex === tasks.length - 1}`
   - CSS will handle disabled styling

8. Handle empty tasks array
   - Show message if tasks.length === 0
   - Return early with "No tasks available" message

---

## 📋 Part 3: Advanced Features

### **Question 3: Notification System** (`src/components/NotificationSystem.tsx`)

**Main Question:** Implement UI feedback for successfully deleted posts with auto-dismiss.

**Sub-Questions:**

1. Add state for notifications array

   - Use `useState` for notifications (Notification[])
   - Each notification should have: id, type, message

2. Create notification display UI

   - Map over notifications array
   - Display each notification
   - Use `.notifications-container` for wrapper
   - Use `.notification` class for each notification
   - Apply type-specific class: `.notification.success`, `.notification.error`, or `.notification.info`

3. Show notification message

   - Display notification.message
   - Format: "Post <id> was deleted!" for delete notifications
   - Use notification.type to determine styling

4. Implement auto-dismiss after 5 seconds

   - Use `setTimeout` for each notification
   - Set timeout to 5000ms (5 seconds)
   - Remove notification from array after timeout
   - Use `useEffect` to set up timeout when notification is added

5. Handle multiple notifications

   - Support adding multiple notifications
   - Each notification should have unique ID
   - Display all notifications in container
   - Each dismisses independently after 5 seconds

6. Create notification helper function (optional)

   - Function to add notification: `addNotification(type, message)`
   - Generate unique ID for each notification
   - Add to notifications array
   - Auto-remove after 5 seconds

7. Use CSS animations

   - CSS already has `slideIn` animation
   - Notifications will animate in automatically
   - No additional animation code needed

8. Integrate with post deletion
   - When post is deleted, add success notification
   - Message: `Post ${postId} was deleted!`
   - Type: "success"
   - This will be called from App.tsx or PostCard

---

## 🧪 Testing Checklist

### **Part 1 Testing:**

- [ ] Run `npm run dev`
- [ ] Switch between Posts and Analytics tabs
- [ ] Verify language filtering works (English/Spanish)
- [ ] Test post deletion

### **Part 2 Testing:**

- [ ] Language Picker: Switch between English/Spanish
- [ ] Post Cards: Display correctly, delete with confirmation
- [ ] Project Modal: Click project → see users → click user → see tasks
- [ ] Task Carousel: Navigate with Back/Next buttons

### **Part 3 Testing:**

- [ ] Delete a post → see "Post <id> was deleted!" notification
- [ ] Wait 5 seconds → notification auto-dismisses
- [ ] Test error states and loading states

---

## 📝 Quick Reference

### **Key Functions to Use:**

- `fetchPosts(language)` - Fetch posts filtered by language
- `deletePost(postId)` - Delete a post
- `fetchProjectData(projectId)` - Fetch project data
- `PROJECT_IDS` - Array of project IDs to fetch

### **Key Types:**

- `Post` - Individual post
- `ProjectData` - Raw project data
- `ProjectQualityMetric` - Transformed analytics
- `UserSubmission` - Grouped user data
- `TaskSubmission` - Individual task
- `Notification` - Notification data
- `Language` - Language type ("en" | "es")

### **Key CSS Classes:**

- `.post-card`, `.post-title`, `.post-content`, `.post-meta`, `.post-stats`
- `.language-badge`, `.language-badge.en`, `.language-badge.es`
- `.btn`, `.btn-danger`
- `.modal-overlay`, `.modal`, `.modal-header`, `.modal-content`
- `.user-item`, `.user-item.selected`
- `.tasks-carousel`, `.task-item`, `.carousel-controls`
- `.notification`, `.notification.success`, `.notification.error`, `.notification.info`

---

**Total Questions: 8 Main Questions, 50+ Sub-Questions**

**Good luck! 🚀**
