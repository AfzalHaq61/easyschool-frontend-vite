// utils/auth.js
export function getAuthToken() {
    return localStorage.getItem('authToken');
}
  
export function isEmailVerified() {
    return localStorage.getItem('emailVerification') === 'true';
}

export function isAuthenticated() {
    return !!getAuthToken();
}