
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result..


## Tech Stack

| Tool | Purpose |
|------|---------|
| **React 19 (Next.js)** | UI Library |
| **Material UI (MUI)** | Component Library & Theming |
| **Chart.js** | nteractive Data Visualizations |
| **LocalStorage** | Client-side Data Persistence |

## Project structur 
src/
├── components/          # Modular UI components (Sidebar, Dashboard, Modal)
├── context/             # DashboardContext for global state & persistence
├── data/                # Static report data and seed constants
├── theme/               # Global MUI theme configuration
└── app/                 # Next.js App Router pages and layouts

## Task Covered

| Requirement                            | Status |
|----------------------------------------|--------|
| React-based implementation             | ✔      |
| Chart.js integration                   | ✔      |
| Report list with search                | ✔      |
| Pagination (12 items per page)         | ✔      |
| Dynamic dashboard updates on selection | ✔      |
| Add report modal with validation       | ✔      |
| localStorage persistence               | ✔      |
| Clean component structure              | ✔      |
| No backend integration                 | ✔      |

## technical decisions
