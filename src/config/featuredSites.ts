/**
 * Language-neutral data for the client websites in the portfolio. The
 * description for each site lives in the dictionary under allServices.sites,
 * keyed by id, and the screenshot in src/assets/sites/<id>.webp.
 */
export const featuredSites = [
  {
    id: "agromig",
    name: "Hacienda Agromig",
    url: "https://haciendaagromig.com",
    domain: "haciendaagromig.com",
  },
  {
    id: "indigo",
    name: "Indigo Export Co",
    url: "https://www.indigoexportco.com/",
    domain: "indigoexportco.com",
  },
  {
    id: "saborcallejero",
    name: "Sabor Callejero",
    url: "https://saborcallejerocr.com",
    domain: "saborcallejerocr.com",
  },
  {
    id: "ajmn",
    name: "AJ-MN",
    url: "https://aj-mn.com",
    domain: "aj-mn.com",
  },
  {
    id: "catadores",
    name: "Catadores de Cantonés",
    url: "https://catandocantones.com",
    domain: "catandocantones.com",
  },
] as const;

export type FeaturedSiteId = (typeof featuredSites)[number]["id"];
