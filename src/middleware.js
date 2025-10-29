import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  if (context.url.pathname === '/') {
    return context.redirect('/en/', 302);
  }
  
  return next();
});