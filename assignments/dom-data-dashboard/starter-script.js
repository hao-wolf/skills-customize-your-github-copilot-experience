const DATA = [
  { title: "Array Practice", category: "coding", score: 88, minutes: 35 },
  { title: "Algebra Warmup", category: "math", score: 92, minutes: 40 },
  { title: "Reading Reflection", category: "reading", score: 81, minutes: 25 },
  { title: "Debugging Drill", category: "coding", score: 95, minutes: 50 },
  { title: "Geometry Quiz", category: "math", score: 77, minutes: 30 },
  { title: "Vocabulary Builder", category: "reading", score: 90, minutes: 28 },
];

function normalizeRecords(records) {
  // TODO: Return a new array where each record has title, category, score, and minutes.
  // Suggested defaults: "Untitled", "other", 0, 0.
  return [];
}

function filterAndSort(records, options) {
  // TODO: Use options.category, options.search, and options.sort to return a filtered/sorted array.
  // Keep this function pure.
  return [];
}

function renderCards(records) {
  // TODO: Render cards inside #cardGrid.
  // Include title, category, score, and minutes for each record.
}

function renderStats(records) {
  // TODO: Render at least 3 stats in #statsPanel:
  // count, average score (rounded), and total minutes.
}

function initDashboard() {
  // TODO: Read controls, filter/sort DATA, call renderCards + renderStats,
  // and update #statusMessage when there are no matches.
}

window.dashboard = {
  normalizeRecords,
  filterAndSort,
  renderCards,
  renderStats,
  initDashboard,
};

// TODO: Call initDashboard() and wire event listeners for controls.
