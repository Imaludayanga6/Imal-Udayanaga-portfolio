// Simple localStorage-based auth utility for admin panel
// In production, this would connect to a real backend

const AUTH_KEY = "admin_auth";
const DEFAULT_CREDENTIALS = {
  username: "admin",
  password: "admin123", // Change this to something secure
};

export const authService = {
  // Login and store token in localStorage
  login: (username, password) => {
    if (
      username === DEFAULT_CREDENTIALS.username &&
      password === DEFAULT_CREDENTIALS.password
    ) {
      const token = btoa(`${username}:${Date.now()}`); // Simple token encoding
      localStorage.setItem(AUTH_KEY, token);
      return { success: true, token };
    }
    return { success: false, error: "Invalid credentials" };
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    const token = localStorage.getItem(AUTH_KEY);
    return !!token;
  },

  // Get stored token
  getToken: () => {
    return localStorage.getItem(AUTH_KEY);
  },

  // Logout - remove token
  logout: () => {
    localStorage.removeItem(AUTH_KEY);
  },

  // Get current user info (basic)
  getCurrentUser: () => {
    if (authService.isAuthenticated()) {
      return {
        username: DEFAULT_CREDENTIALS.username,
        email: "admin@portfolio.local",
      };
    }
    return null;
  },
};
