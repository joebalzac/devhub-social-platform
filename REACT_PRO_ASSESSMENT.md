# 🚀 React Pro Assessment - Complete Project

Welcome to your **React Pro Assessment**! This comprehensive project combines multiple React concepts into one challenging but fun project. Build this over and over to master React!

## 📋 Project Overview

You'll be building a **DevHub Social Platform** that combines:

- **Language-filtered posts** with internationalization
- **Project quality analytics** with data transformation
- **User interactions** with notifications
- **Enhanced UI/UX** with modern design

## 🎯 Assessment Structure

### **Part 1: Data Fetching & Transformation** (30 mins)

- Custom hooks for data management
- API integration
- Data transformation logic

### **Part 2: UI Components** (45 mins)

- Language filtering
- Post management
- Project analytics display
- Modal interactions

### **Part 3: Advanced Features** (30 mins)

- Notification system
- Auto-dismiss functionality
- State management

**Total Time: ~2 hours**  
**Skills: React, TypeScript, Data Transformation, UI/UX, State Management**

---

## 🚀 Getting Started

```bash
cd /Users/joebalzac/devhub-social-platform
npm run dev
```

## 📦 Project Structure

```
src/
├── components/
│   ├── LanguagePicker.tsx          # Language selection
│   ├── PostCard.tsx                # Post display & delete
│   ├── ProjectQualityCard.tsx      # Project metrics display
│   ├── ProjectQualityModal.tsx     # User submissions
│   ├── TasksDisplayCarousel.tsx    # Task navigation
│   └── NotificationSystem.tsx     # Notifications
├── hooks/
│   ├── usePosts.ts                 # Posts management
│   └── useProjectAnalytics.ts     # Analytics
├── utils/
│   └── mockApi.ts                  # Mock API functions (ready!)
├── types.ts                        # Type definitions
└── App.tsx                         # Main app component
```

---

# 🎯 Part 1: Core Data Layer

## **Part 1A: Posts Management Hook**

**File:** `src/hooks/usePosts.ts`

**Objective:** Create a custom hook that fetches and manages posts with language filtering.

**Requirements:**

1. **Fetch posts** with language filtering
2. **Handle post deletion** with API calls
3. **Manage loading/error states**
4. **Return** posts, loading, error, and deletePost function

**Implementation Pattern:**

```
1. Fetch → 2. Transform → 3. Return
```

**Steps:**

- [ ] Add state for posts, loading, error
- [ ] Fetch posts using useEffect with language filter
- [ ] Handle loading and error states
- [ ] Implement deletePost function
- [ ] Call deletePostApi
- [ ] Update local posts state after deletion
- [ ] Handle errors gracefully

---

## **Part 1B: Project Analytics Hook**

**File:** `src/hooks/useProjectAnalytics.ts`

**Objective:** Define a custom hook that fetches project quality data and transforms it.

**Requirements:**

1. **Fetch ProjectData** for each project ID in `PROJECT_IDS`
2. **Calculate average quality score** for each project
3. **Compute Pseudo Deflect Rate (PDR)** - average of scores ≤ 2
4. **Transform data** from `ProjectData` to `ProjectQualityMetric[]`
5. **Return** projects, loading, error

**Calculation Example:**

```
Scores: [1, 2, 3, 4, 5]
Average: (1 + 2 + 3 + 4 + 5) / 5 = 3.0
PDR: Filter to [1, 2] → (1 + 2) / 2 = 1.5
```

**Steps:**

- [ ] Add state for projects, loading, error
- [ ] Use Promise.all() to fetch all PROJECT_IDS
- [ ] Calculate average for each project (sum of scores / count)
- [ ] Calculate PDR for each project (average of scores <= 2)
- [ ] Transform ProjectData to ProjectQualityMetric[]
- [ ] Return { projects, loading, error }

---

# 🎯 Part 2: UI Components

## **Part 2A: Language Picker**

**File:** `src/components/LanguagePicker.tsx`

**Objective:** Allow users to filter posts in their chosen language.

**Requirements:**

1. **Display language options** (English/Spanish) with flags
2. **Handle language selection** and callbacks
3. **Show active language** with visual feedback
4. **Responsive design** for mobile/desktop

**Languages:**

- 🇺🇸 English (default)
- 🇪🇸 Spanish

**Steps:**

- [ ] Define language options array with flags and names
- [ ] Create language selection UI (buttons or select)
- [ ] Handle language change events
- [ ] Show active language with visual feedback
- [ ] Make it responsive

---

## **Part 2B: Enhanced Post Card**

**File:** `src/components/PostCard.tsx`

**Objective:** Display posts with delete functionality and UI/UX improvements.

**Requirements:**

1. **Display post information** (title, content, author, stats)
2. **Show language badge** with appropriate styling
3. **Implement delete functionality** with confirmation
4. **Add UI/UX improvements** (choose 2-3 and implement one):
   - Hover effects and animations
   - Better typography and spacing
   - Interactive elements (like buttons)
   - Loading states for actions
   - Error handling with user feedback

**Steps:**

- [ ] Display post title, content, author
- [ ] Show post stats (likes, comments)
- [ ] Display language badge with styling
- [ ] Add delete button
- [ ] Implement delete confirmation dialog
- [ ] Choose and implement 1-2 UI/UX improvements
- [ ] Use proper CSS classes (post-title, post-content, post-meta, post-stats)

---

## **Part 2C: Project Quality Modal**

**File:** `src/components/ProjectQualityModal.tsx`

**Objective:** View user submissions for a project with task details.

**Requirements:**

1. **Group submissions by user** to create `UserSubmission[]`
2. **Display list of users** with task counts
3. **Handle user selection** and show tasks
4. **Integrate with TasksDisplayCarousel**

**Data Transformation:**

```typescript
// Input: ProjectData.submissions
[
  { userId: "1", userName: "Alice", taskId: "a", taskName: "Task A", score: 5 },
  { userId: "1", userName: "Alice", taskId: "b", taskName: "Task B", score: 4 },
]

// Output: UserSubmission[]
{
  userId: "1",
  userName: "Alice",
  tasks: [
    { taskId: "a", taskName: "Task A", score: 5 },
    { taskId: "b", taskName: "Task B", score: 4 },
  ],
}
```

**Steps:**

- [ ] Add state for projectData, loading, selectedUserId
- [ ] Fetch project data using useEffect
- [ ] Transform projectData.submissions into UserSubmission[]
- [ ] Group by userId using .reduce()
- [ ] Display list of users with task counts
- [ ] Handle user click to set selectedUserId
- [ ] Show TasksDisplayCarousel when user is selected
- [ ] Pass selected user's tasks to carousel

---

## **Part 2D: Tasks Display Carousel**

**File:** `src/components/TasksDisplayCarousel.tsx`

**Objective:** Display one task at a time with navigation buttons.

**Requirements:**

1. **Display ONE task at a time** (not all tasks)
2. **Add "Back" button** (disabled when at first task)
3. **Add "Next" button** (disabled when at last task)
4. **Track current task index** with state

**Steps:**

- [ ] Add state to track current task index (start at 0)
- [ ] Get the current task using tasks[currentIndex]
- [ ] Display only ONE task (remove .map())
- [ ] Add "Back" button
- [ ] Disable Back when currentIndex === 0
- [ ] Add "Next" button
- [ ] Disable Next when currentIndex === tasks.length - 1
- [ ] Add handlers for Back/Next buttons

---

# 🎯 Part 3: Advanced Features

## **Part 3: Notification System**

**File:** `src/components/NotificationSystem.tsx`

**Objective:** Implement UI feedback for successfully deleted post.

**Requirements:**

1. **Display notifications** (success/error/info)
2. **Auto-dismiss after 5 seconds**
3. **Show "Post <id> was deleted!" message**
4. **Handle multiple notifications**
5. **Smooth animations** for show/hide

**Notification Types:**

- ✅ Success: Green background
- ❌ Error: Red background
- ℹ️ Info: Blue background

**Steps:**

- [ ] Add state for notifications array
- [ ] Create notification display UI
- [ ] Map over notifications array
- [ ] Apply CSS classes based on type (success/error/info)
- [ ] Implement auto-dismiss after 5 seconds (setTimeout)
- [ ] Remove notification from array after timeout
- [ ] Handle multiple notifications
- [ ] Show "Post <id> was deleted!" message format
- [ ] Use CSS animations (already in App.css)

---

## 🧪 Testing Checklist

### **Part 1 Testing:**

- [ ] Run `npm run dev`
- [ ] Switch between Posts and Analytics tabs
- [ ] Verify language filtering works
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

## 💡 Hints

### **Part 1 Hints:**

- Use `Promise.all()` for multiple API calls
- Handle async operations with try/catch
- Update local state after successful operations

### **Part 2A Hints:**

- Use `.filter()` for language filtering
- Create language options with flags and names
- Handle click events for language selection

### **Part 2B Hints:**

- Use `window.confirm()` for delete confirmation
- Add visual feedback for user interactions
- Use proper CSS classes from App.css

### **Part 2C Hints:**

- Use `.reduce()` to group submissions by userId
- Map over userSubmissions to display users
- Conditionally render TasksDisplayCarousel

### **Part 2D Hints:**

- Use `useState` for current task index
- Disable buttons at boundaries
- Display: `tasks[currentIndex]`

### **Part 3 Hints:**

- Use `setTimeout` for auto-dismiss
- Create notification queue system
- Use CSS animations for smooth transitions

---

## 📚 Available Types

All types are defined in `src/types.ts`:

- `Post` - Individual post
- `ProjectData` - Raw project data
- `ProjectQualityMetric` - Transformed analytics
- `UserSubmission` - Grouped user data
- `TaskSubmission` - Individual task
- `Notification` - Notification data
- `Language` - Language type ("en" | "es")

---

## 🎯 Evaluation Criteria

- **Functionality**: All requirements are met
- **Code Quality**: Clean, readable, well-structured code
- **TypeScript**: Proper type usage and safety
- **React Best Practices**: Proper hooks usage and component design
- **User Experience**: Intuitive and responsive interface
- **Error Handling**: Graceful error states and user feedback
- **Performance**: Efficient data handling and rendering

---

## 📞 Need Help?

If you get stuck:

1. Check the TODO comments in each file
2. Review the type definitions in `types.ts`
3. Look at the mock data in `mockApi.ts`
4. Test incrementally (Part 1 first, then Part 2)

**Good luck! 🚀**
