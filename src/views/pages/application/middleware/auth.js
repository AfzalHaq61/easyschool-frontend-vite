import { getAuthToken, isEmailVerified } from "@/utils/auth";

export function authGuard(to, from, next) {
  const token = getAuthToken();
  if (token) { 
    next();
  } else {
    next({ path: '/login' });
  }
}


// export function guestGuard(to, from, next) {
//   console.log(' In guestGuard');
//   const token = getAuthToken();
//   console.log({token});
//   if (!token ) {
//     next();
//   } else {
//     next({ path: '/' });
//   }
// }

export function authVerified(to, from, next) {
  const isVerified = isEmailVerified();
  if (isVerified) {
    next();
  } else {
    next({ path: '/email-verification' });
  }
}
