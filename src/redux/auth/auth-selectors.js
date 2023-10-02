export const selectToken = state => state.auth.token;
export const selectName = state => state.auth.user.name;
export const selectFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;
