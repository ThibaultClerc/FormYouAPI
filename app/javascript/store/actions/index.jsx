export const loginUser = (user) => {
  return {
    type: 'USER_LOGIN',
    user
  }
}