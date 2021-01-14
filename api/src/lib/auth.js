// Define what you want `currentUser` to return throughout your app. For example,
// to return a real user from your database, you could do something like:
//
//   export const currentuser = async ({ email }) => {
//     return await db.user.findUnique({ where: { email } })
//   }

import { AuthenticationError } from '@redwoodjs/api'

export const getCurrentUser = async (jwt) => {
  return jwt
}

// Use this function in your services to check that a user is logged in, and
// optionally raise an error if they're not.

export const requireAuth = () => {
  if (!context.currentUser) {
    throw new AuthenticationError()
  }
}
