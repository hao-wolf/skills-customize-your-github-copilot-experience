# 📘 Assignment: DOM Data Dashboard

## 🎯 Objective

Build an interactive dashboard in vanilla JavaScript that reads JSON data, renders it into the DOM, and supports filtering and sorting. You will practice event-driven frontend programming and writing deterministic logic suitable for autograding.

## 📝 Tasks

### 🛠️ Build the Dashboard Layout

#### Description
Use the starter HTML and CSS to create a clean dashboard shell with a header, control panel, stats area, and card grid.

#### Requirements
Completed program should:

- Use the provided element IDs in `starter-index.html` (`categoryFilter`, `sortSelect`, `searchInput`, `statsPanel`, `cardGrid`, `statusMessage`).
- Display at least one card per data record in `cardGrid`.
- Keep all styling in `starter-styles.css`.

### 🛠️ Implement Filtering and Sorting Logic

#### Description
Implement reusable JavaScript functions that filter records by category and search text, then sort the results.

#### Requirements
Completed program should:

- Implement `normalizeRecords(records)` to return objects with `title`, `category`, `score`, and `minutes` fields.
- Implement `filterAndSort(records, options)` to support category filtering, title search (case-insensitive), and sorting by `score-desc`, `score-asc`, `minutes-asc`, and `minutes-desc`.
- Keep `filterAndSort` as a pure function (no DOM reads or writes inside it).

### 🛠️ Connect UI Events and Render States

#### Description
Wire up dropdowns and search input so the dashboard updates immediately when users change controls.

#### Requirements
Completed program should:

- Implement `renderCards(records)`, `renderStats(records)`, and `initDashboard()` in `starter-script.js`.
- Re-render cards and stats whenever controls change.
- Show `No matching activities found.` in `statusMessage` when no records match filters.
- Expose functions on `window.dashboard` exactly as: `normalizeRecords`, `filterAndSort`, `renderCards`, `renderStats`, `initDashboard`.
