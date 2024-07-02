import { auth } from "./auth";
import {
  authRoutes,
  apiAuthPrefix,
  publicRoutes,
  DEFAULT_REDIRECT_AFTER_LOGIN,
} from "./routes";

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

export default auth((req) => {
  console.log("\nAUTH:", req.auth);

  const { nextUrl } = req;
  console.log("PATHNAME:", nextUrl.pathname);

  const isLoggedIn = !!req.auth;
  console.log("IS_LOGGED_IN:", isLoggedIn);
  console.log("\n");

  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) return;

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_REDIRECT_AFTER_LOGIN, nextUrl));
    }

    return;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/login", nextUrl));
  }
});
