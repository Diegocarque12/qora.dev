import type { ImageMetadata } from "astro";
import { caseStudies } from "@/config/caseStudies";
import { featuredSites } from "@/config/featuredSites";
import type { Dictionary, Lang } from "@/i18n/ui";
import { localizePath } from "@/i18n/utils";

/** One portfolio entry as the pages render it, whatever catalog it came from. */
export interface PortfolioEntry {
  id: string;
  name: string;
  url: string;
  domain: string;
  description: string;
  imageAlt: string;
  image?: ImageMetadata;
  /** The three below are present only for the products we build and run. */
  tag?: string;
  outcome?: string;
  caseHref?: string;
}

const siteImages = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/sites/*.{avif,jpg,jpeg,png,webp}",
  { eager: true }
);

const caseImages = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/projects/*/*.{avif,jpg,jpeg,png,webp}",
  { eager: true }
);

/** A case study's cover is the first image of its gallery, by file name. */
function caseCover(id: string): ImageMetadata | undefined {
  const [first] = Object.entries(caseImages)
    .filter(([path]) => path.includes(`/projects/${id}/`))
    .sort(([a], [b]) => a.localeCompare(b));
  return first?.[1].default;
}

function siteCover(id: string): ImageMetadata | undefined {
  return Object.entries(siteImages).find(([path]) =>
    path.includes(`/sites/${id}.`)
  )?.[1].default;
}

/** PrimeFit and Dask: the products we build and run ourselves. */
export function ownProducts(t: Dictionary, lang: Lang): PortfolioEntry[] {
  return caseStudies.map((study) => {
    const copy = t.projects.cases[study.id];
    return {
      id: study.id,
      name: study.name,
      url: study.url,
      domain: study.domain,
      description: copy.whatItIs,
      imageAlt: copy.tag,
      image: caseCover(study.id),
      tag: copy.tag,
      outcome: copy.outcome,
      caseHref: localizePath(`/projects/${study.id}`, lang),
    };
  });
}

/** The client websites. */
export function clientSites(t: Dictionary): PortfolioEntry[] {
  return featuredSites.map((site) => {
    const copy = t.allServices.sites[site.id];
    return {
      id: site.id,
      name: site.name,
      url: site.url,
      domain: site.domain,
      description: copy.description,
      imageAlt: copy.imageAlt,
      image: siteCover(site.id),
    };
  });
}
