export const isStudent = (user) => {
  return !Array.isArray(user) && user.is_validated && user.user_category === "student"
}

export const isTeacher = (user) => {
  return !Array.isArray(user) && user.is_validated && user.user_category === "teacher"
}

export const isAdmin = (user) => {
  return !Array.isArray(user) && user.is_validated && user.user_category === "admin"
}