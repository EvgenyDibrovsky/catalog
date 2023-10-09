// src/redux/auth/authSelectors.js
export const selectToken = state => state.auth.token;
export const selectName = state => state.auth.user.name;
export const selectFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;
export const selectAuthError = state => state.auth.error;
