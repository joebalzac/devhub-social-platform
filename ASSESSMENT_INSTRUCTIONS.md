# 🚀 DevHub Social Platform - Mega Assessment

Welcome to the **DevHub Social Platform** coding challenge! This comprehensive assessment combines multiple React concepts into one realistic project.

## 📋 Overview

You'll be building a social platform that combines:

- **Language-filtered posts** with internationalization
- **Project quality analytics** with data visualization
- **User interactions** with notifications
- **Enhanced UI/UX** with modern design

## 🚀 Getting Started

```bash
cd /Users/joebalzac/devhub-social-platform
npm run dev
```

## 📦 Project Structure

```
src/
├── components/
│   ├── LanguagePicker.tsx          # Language selection (Part 2A)
│   ├── PostCard.tsx                # Post display & delete (Part 2B)
│   ├── ProjectQualityCard.tsx      # Project metrics display
│   ├── ProjectQualityModal.tsx     # User submissions (Part 2C)
│   ├── TasksDisplayCarousel.tsx    # Task navigation (Part 2D)
│   └── NotificationSystem.tsx     # Notifications (Part 3)
├── hooks/
│   ├── usePosts.ts                 # Posts management (Part 1A)
│   └── useProjectAnalytics.ts      # Analytics (Part 1B)
├── utils/
│   └── mockApi.ts                  # Mock API functions (already implemented)
├── types.ts                        # Type definitions
└── App.tsx                         # Main app component
```

---

## 🎯 Part 1: Core Data Layer (30 mins)

### **Part 1A: Posts Management Hook**

**File:** `src/hooks/usePosts.ts`

**Requirements:**

1. **Fetch posts** with language filtering
2. **Handle post deletion** with API calls
3. **Manage loading/error states**
4. **Return** posts, loading, error, and deletePost function

**Implementation:**

```typescript
export const usePosts = (language: Language) => {
  // TODO: Add state for posts, loading, error
  // TODO: Fetch posts using useEffect with language filter
  // TODO: Implement deletePost function
  // TODO: Handle loading and error states
};
```

### **Part 1B: Project Analytics Hook**

**File:** `src/hooks/useProjectAnalytics.ts`

**Requirements:**

1. **Fetch ProjectData** for each project ID in `PROJECT_IDS`
2. **Calculate average quality score** for each project
3. **Compute Pseudo Deflect Rate (PDR)** - average of scores ≤ 2
4. **Transform data** from `ProjectData` to `ProjectQualityMetric[]`
5. **Return** projects, loading, error

**Example Calculation:**

```
Scores: [1, 2, 3, 4, 5]
Average: (1 + 2 + 3 + 4 + 5) / 5 = 3.0
PDR: Filter to [1, 2] → (1 + 2) / 2 = 1.5
```

---

## 🎯 Part 2: UI Components (45 mins)

### **Part 2A: Language Picker**

**File:** `src/components/LanguagePicker.tsx`

**Requirements:**

1. **Display language options** (English/Czech) with flags
2. **Handle language selection** and callbacks
3. **Show active language** with visual feedback
4. **Responsive design** for mobile/desktop

**Languages:**

- 🇺🇸 English (default)
- 🇨🇿 Czech

### **Part 2B: Enhanced Post Card**

**File:** `src/components/PostCard.tsx`

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

### **Part 2C: Project Quality Modal**

**File:** `src/components/ProjectQualityModal.tsx`

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
][
  // Output: UserSubmission[]
  {
    userId: "1",
    userName: "Alice",
    tasks: [
      { taskId: "a", taskName: "Task A", score: 5 },
      { taskId: "b", taskName: "Task B", score: 4 },
    ],
  }
];
```

### **Part 2D: Tasks Display Carousel**

**File:** `src/components/TasksDisplayCarousel.tsx`

**Requirements:**

1. **Display ONE task at a time** (not all tasks)
2. **Add "Back" button** (disabled when at first task)
3. **Add "Next" button** (disabled when at last task)
4. **Track current task index** with state

---

## 🎯 Part 3: Advanced Features (30 mins)

### **Part 3: Notification System**

**File:** `src/components/NotificationSystem.tsx`

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

---

## 🧪 Testing Your Implementation

### **Part 1 Testing:**

1. Run `npm run dev`
2. Switch between Posts and Analytics tabs
3. Verify language filtering works
4. Test post deletion with notifications

### **Part 2 Testing:**

1. **Language Picker:** Switch between English/Czech
2. **Post Cards:** Hover effects, delete functionality
3. **Project Modal:** Click project → see users → click user → see tasks
4. **Task Carousel:** Navigate with Back/Next buttons

### **Part 3 Testing:**

1. Delete a post → see "Post <id> was deleted!" notification
2. Wait 5 seconds → notification auto-dismisses
3. Test error states and loading states

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

- Use `.reduce()` to group submissions by userId
- Implement confirmation dialogs for delete
- Add visual feedback for user interactions

### **Part 2C Hints:**

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

```typescript
Post; // Individual post
ProjectData; // Raw project data
ProjectQualityMetric; // Transformed analytics
UserSubmission; // Grouped user data
TaskSubmission; // Individual task
Notification; // Notification data
Language; // Language type
```

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

**Total Time: 2 hours**  
**Skills Tested: React, TypeScript, Data Transformation, UI/UX, State Management**

Good luck! 🚀

