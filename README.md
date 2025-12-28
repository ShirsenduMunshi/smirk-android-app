# Smirk - Task Management App 😊

A modern, feature-rich task management mobile application built with Expo and React Native. Smirk helps you organize, track, and complete your daily tasks with an elegant and intuitive interface.

## 📱 App Overview

**Smirk** is a full-stack task management application that allows users to:
- Create and manage daily tasks
- Track task completion progress
- Toggle task completion status
- Edit existing tasks
- Delete completed or unwanted tasks
- View detailed progress statistics
- Customize app preferences
- Support for light/dark mode themes

The app is built with a modern tech stack combining React Native for the frontend and Convex for real-time backend services.

---

## 🏗️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 19.1.0 | UI library & state management |
| **React Native** | 0.81.5 | Mobile app framework |
| **Expo** | ~54.0.30 | Build, deploy & manage mobile apps |
| **Expo Router** | ~6.0.21 | File-based routing for navigation ([app/_layout.tsx](app/_layout.tsx)) |
| **TypeScript** | ~5.9.2 | Static typing for JavaScript |
| **React Navigation** | ~7.4.0 | Bottom tab navigation ([app/(tabs)/_layout.tsx](app/(tabs)/_layout.tsx)) |

### Backend & Database
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Convex** | ^1.31.2 | Real-time backend, database, and API management |
| **Convex Schema** | - | Type-safe database schema ([convex/schema.ts](convex/schema.ts)) |

### UI & Styling
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Expo Linear Gradient** | ~15.0.8 | Gradient backgrounds ([assets/styles/Home.styles.ts](assets/styles/Home.styles.ts)) |
| **Expo Vector Icons** | ^15.0.3 | Icon library (Ionicons) |
| **Expo Image** | ~3.0.11 | Image component with caching |
| **React Native Reanimated** | ~4.1.1 | Smooth animations |
| **React Native Screens** | ~4.16.0 | Native screen components |

### Storage & Utilities
| Technology | Version | Purpose |
|-----------|---------|---------|
| **AsyncStorage** | ^2.2.0 | Local device storage for preferences |
| **Expo Haptics** | ~15.0.8 | Haptic feedback for user interactions |
| **Expo Navigation Bar** | ~5.0.10 | Android navigation bar customization |

### Development Tools
| Technology | Version | Purpose |
|-----------|---------|---------|
| **ESLint** | ^9.25.0 | Code linting |
| **eslint-config-expo** | ~10.0.0 | Expo ESLint configuration |

---

## 📁 Project Structure

```
smirk/
├── app/                          # Main application routes (Expo Router)
│   ├── _layout.tsx              # Root layout wrapper
│   └── (tabs)/                  # Tab-based navigation group
│       ├── _layout.tsx          # Tab navigation configuration
│       ├── index.tsx            # Home/Tasks screen (main todo list)
│       └── settings.tsx         # Settings/preferences screen
│
├── components/                   # Reusable UI components
│   ├── Header.tsx               # App header with progress stats
│   ├── TodoInput.tsx            # Input field for adding new tasks
│   ├── EmptyState.tsx           # Empty state UI
│   ├── LoadingSpinner.tsx       # Loading indicator
│   ├── ProgressStats.tsx        # Task progress visualization
│   ├── Preferences.tsx          # User preferences component
│   └── DangerZone.tsx           # Destructive actions component
│
├── convex/                       # Convex backend configuration
│   ├── schema.ts                # Database schema definition
│   ├── todos.ts                 # Todo CRUD operations
│   └── _generated/              # Auto-generated Convex types
│       ├── api.d.ts             # API type definitions
│       ├── api.js               # Client API
│       ├── dataModel.d.ts       # Database type definitions
│       └── server.js            # Server runtime
│
├── assets/
│   ├── images/                  # App images, icons, logos
│   └── styles/
│       ├── Home.styles.ts       # Home screen styling
│       └── Settings.styles.ts   # Settings screen styling
│
├── hooks/
│   └── useTheme.tsx            # Custom theme hook (light/dark mode)
│
├── app.json                     # Expo configuration
├── eas.json                     # EAS build configuration
├── package.json                 # Dependencies & scripts
└── tsconfig.json                # TypeScript configuration
```

---

## 🚀 Key Features & Code Locations

### 1. **Todo Management**
- **Location**: [app/(tabs)/index.tsx](app/(tabs)/index.tsx)
- **Features**:
  - Display all todos in a FlatList
  - Real-time data syncing via Convex
  - Pull-to-refresh capability
  - Swipe-to-delete functionality

### 2. **Backend API**
- **Location**: [convex/todos.ts](convex/todos.ts)
- **Functions**:
  - `getTodos()` - Fetch all todos from database
  - `addTodo()` - Create new task
  - `toggleTodo()` - Mark task as complete/incomplete
  - `updateTodo()` - Edit task text
  - `deleteTodo()` - Remove task

### 3. **Database Schema**
- **Location**: [convex/schema.ts](convex/schema.ts)
- **Table**: `todos`
  - `text: string` - Task description
  - `isCompleted: boolean` - Completion status

### 4. **Progress Tracking**
- **Location**: [components/Header.tsx](components/Header.tsx)
- Displays: Completed tasks / Total tasks
- Calculates progress percentage
- Shows visual progress indicator

### 5. **Theme System**
- **Location**: [hooks/useTheme.tsx](hooks/useTheme.tsx)
- Supports light and dark modes
- Centralized color management
- Easy theme switching

### 6. **Navigation**
- **Location**: [app/(tabs)/_layout.tsx](app/(tabs)/_layout.tsx)
- Bottom tab navigation with 2 screens:
  - 🏠 Home (Tasks list)
  - ⚙️ Settings (Preferences & options)

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Android emulator or iOS simulator
- Convex account (free tier available)

### Installation

1. **Clone and install dependencies**
   ```bash
   npm install
   ```

2. **Set up Convex backend**
   ```bash
   # Initialize Convex (if not already done)
   npx convex dev
   ```
   This starts the local Convex development server and generates types.

3. **Start the app**
   ```bash
   npm start
   ```

### Running on Different Platforms

- **Android Emulator**:
  ```bash
  npm run android
  ```

- **iOS Simulator** (macOS only):
  ```bash
  npm run ios
  ```

- **Web**:
  ```bash
  npm run web
  ```

- **Expo Go** (Quick testing):
  ```bash
  npm start
  # Scan QR code with Expo Go app
  ```

---

## 📝 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| Start | `npm start` | Start development server |
| Android | `npm run android` | Run on Android emulator |
| iOS | `npm run ios` | Run on iOS simulator |
| Web | `npm run web` | Run on web browser |
| Lint | `npm lint` | Run ESLint to check code quality |
| Reset | `npm run reset-project` | Reset project to blank state |

---

## 🎨 Styling Architecture

The app uses a style-per-screen approach with TypeScript styled components:

- [assets/styles/Home.styles.ts](assets/styles/Home.styles.ts) - Main todo list styling
- [assets/styles/Settings.styles.ts](assets/styles/Settings.styles.ts) - Settings screen styling

All styles are theme-aware and respond to light/dark mode using the `useTheme()` hook.

---

## 🔄 Data Flow

```
User Interaction
    ↓
React Component (e.g., [app/(tabs)/index.tsx](app/(tabs)/index.tsx))
    ↓
Convex Mutation/Query (e.g., [convex/todos.ts](convex/todos.ts))
    ↓
Convex Database
    ↓
Real-time Subscription Back to Component
    ↓
UI Re-renders
```

**Example**: Adding a todo
1. User types in [components/TodoInput.tsx](components/TodoInput.tsx)
2. Calls `addTodo()` mutation from [convex/todos.ts](convex/todos.ts)
3. Convex saves to database
4. `getTodos()` query automatically updates all subscribed components
5. [components/Header.tsx](components/Header.tsx) recalculates progress

---

## 🧪 Development Tips

### Adding a New Feature

1. **Define Data Model**: Update [convex/schema.ts](convex/schema.ts)
2. **Add Backend Logic**: Create mutation/query in [convex/todos.ts](convex/todos.ts)
3. **Create Component**: Build React component in `components/`
4. **Connect to Screen**: Import and use in [app/(tabs)/index.tsx](app/(tabs)/index.tsx) or [app/(tabs)/settings.tsx](app/(tabs)/settings.tsx)
5. **Style**: Add theme-aware styles in `assets/styles/`

### Testing Locally

- Use the Convex Dashboard to inspect database records
- Check browser console in web version for errors
- Use React Native Debugger for mobile debugging

---

## 📚 Learning Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Docs](https://reactnative.dev/)
- [Convex Documentation](https://docs.convex.dev/)
- [Expo Router Guide](https://docs.expo.dev/routing/introduction/)
- [TypeScript in React Native](https://reactnative.dev/docs/typescript)

---

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run `npm lint` to check code quality
4. Submit a pull request

---

## 📄 License

This project is private and maintained by Smunshi's Organization.

---

## 🎯 Next Steps

- Implement task categories/tags
- Add due date and priority features
- Create task reminders with notifications
- Add cloud backup functionality
- Implement collaborative task sharing

---

**Happy tasking! 🎉**
