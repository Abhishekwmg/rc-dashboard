// /redux/localStorage.js
export const loadState = (key, fallback) => {
  try {
    const serialized = localStorage.getItem(key);
    if (!serialized) return fallback;
    return JSON.parse(serialized);
  } catch {
    return fallback;
  }
};

export const saveState = (key, state) => {
  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch (e) {
    console.log(e);
  }
};
