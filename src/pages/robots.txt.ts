import type { APIRoute } from "astro";
import { SITE } from "@/config/site";

/**
 * Generated rather than kept in public/ so the sitemap URL always matches the
 * canonical host. The hardcoded copy drifted once already: it pointed at the
 * apex while the site serves www.
 */
export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL(SITE.url);
  const body = `User-agent: *
Allow: /

Sitemap: ${new URL("/sitemap-index.xml", base).href}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
