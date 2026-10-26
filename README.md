# PULSE — Fitness Tracker

PULSE is a responsive fitness tracker website built with React and Vite. It brings workout ideas, meal inspiration, progress visuals, daily goals, and a BMI estimate together in a single-page experience. The interface uses a dark, lime-accented visual style with animated transitions and responsive layouts.

> **Note:** This project is a front-end demo. Its dashboard and activity values are sample data; there is no account system, backend, or external fitness-device integration.

## Features

- Animated PULSE splash screen with staggered, letter-by-letter lettering.
- Hero section with a full-bleed background image, cinematic overlays, calls to action, and social-proof elements.
- Responsive navigation with links to the page sections and a standalone dashboard view.
- Dashboard featuring sample daily metrics, weekly activity chart, and daily goal progress.
- Workout categories with filtered sessions and detail dialogs for session descriptions, exercise steps, duration, difficulty, and estimated calories.
- Nutrition cards with meal details, ingredients, preparation time, and sample nutrition values.
- Progress section with weekly movement visuals and a milestone card.
- Interactive goals: use the plus button to increase a goal’s progress up to its target.
- BMI calculator using height in centimeters and weight in kilograms, with a general category label and reset control.
- Scroll-triggered reveal animations, responsive layouts, and reduced-motion CSS support.
- Footer links for navigation, social platforms, and contact.

## Tech stack

- [React 18](https://react.dev/) for the component-based interface.
- [Vite 5](https://vite.dev/) for local development and production builds.
- [React Icons](https://react-icons.github.io/react-icons/) for interface icons.
- Tailwind CSS and PostCSS are configured; the interface’s main styling is written in `src/index.css`.
- DM Sans and Manrope are loaded from Google Fonts.

## Requirements

- Node.js 18 or later
- npm

## Getting started

From the project directory, install the dependencies and start the Vite development server:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your browser (usually `http://localhost:5173`).

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the local development server. |
| `npm run build` | Creates the optimized production site in `dist/`. |
| `npm run preview` | Serves the production build locally for review. Run `npm run build` first. |

## Project structure

```text
.
├── index.html
├── public/
│   └── form-icon.svg
└── src/
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── components/
    │   ├── Brand.jsx
    │   ├── DetailModal.jsx
    │   ├── Footer.jsx
    │   ├── MealCard.jsx
    │   ├── MetricCard.jsx
    │   ├── Navbar.jsx
    │   ├── ProgressChart.jsx
    │   ├── SectionHeading.jsx
    │   ├── SplashScreen.jsx
    │   ├── WorkoutCard.jsx
    │   └── WorkoutCategoryCard.jsx
    ├── data/
    │   └── fitnessData.js
    ├── hooks/
    │   └── useReveal.js
    ├── sections/
    │   ├── BmiSection.jsx
    │   ├── DashboardSection.jsx
    │   ├── GoalsSection.jsx
    │   ├── NutritionSection.jsx
    │   ├── ProgressSection.jsx
    │   └── WorkoutsSection.jsx
    └── utils/
        └── bmi.js
```

### Main areas

- `src/App.jsx` assembles the site, controls the splash screen and dashboard view, and displays the back-to-top button.
- `src/sections/` contains the page’s major feature sections.
- `src/components/` contains reusable navigation, card, chart, dialog, and branding components.
- `src/data/fitnessData.js` provides the workout, meal, activity, and initial-goal sample data.
- `src/utils/bmi.js` contains the BMI calculation and category-label helpers.
- `src/hooks/useReveal.js` adds reveal behavior to elements marked with `data-reveal`.
- `src/index.css` contains the visual theme, responsive rules, and animations.

## Customization

### Change the hero background

The hero image is applied to `.hero-photo` in `src/index.css`. Replace the URL in its `background-image` declaration:

```css
.hero-photo {
  background-image: url("https://example.com/your-image.jpg");
}
```

For a locally hosted image, add it to `public/` and reference it with a root-relative URL, for example `url("/images/hero.jpg")`. The adjacent `.hero-overlay` rule controls the cinematic dark gradients; adjust those gradients if the replacement image needs more or less contrast behind the text.

### Update workouts, meals, and goals

Edit the exported arrays in `src/data/fitnessData.js`:

- `workoutCategories` controls category names, card images, and category labels.
- `workouts` contains workout descriptions, exercise lists, images, and displayed session metrics.
- `meals` contains meal descriptions, ingredient lists, images, and sample nutrition values.
- `weeklyActivity` supplies the dashboard chart data.
- `initialGoals` sets the goals and starting progress shown by the goals section.

The goal controls and BMI calculator are client-side state only. Their values reset when the page reloads.

### Adjust splash timing and animations

The splash screen is rendered by `src/components/SplashScreen.jsx`. Its automatic display duration is controlled by the `setTimeout` in `src/App.jsx`. Splash, hero, reveal, and responsive styles are defined in `src/index.css`.

## BMI calculation

The calculator expects height in centimeters and weight in kilograms. It calculates:

```text
BMI = weight (kg) / height (m)²
```

The result is rounded to one decimal place and assigned one of four general labels. BMI is presented only as a screening estimate; it is not a diagnosis and does not account for factors such as muscle mass or individual differences.

## Data, images, and connectivity

The workout and meal content, dashboard metrics, chart values, and goal starting values are illustrative sample data stored in the source code. This demo does not save changes between visits or retrieve personal health data.

Several photos are loaded from remote image URLs, and the fonts are requested from Google Fonts. Those assets require an internet connection. For a self-contained deployment, download and use properly licensed assets from the project’s `public/` directory instead.

## Accessibility and motion

Interactive controls include accessible names where needed, and workout/meal details are presented in dialogs that can be closed with Escape. The stylesheet includes a `prefers-reduced-motion` rule to reduce animation for users who have requested reduced motion in their operating-system settings.

## Production build

Build and preview the production version locally:

```bash
npm run build
npm run preview
```

Deploy the generated `dist/` directory to a static hosting provider that supports single-page Vite sites.
