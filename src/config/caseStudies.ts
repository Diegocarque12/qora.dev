/**
 * Language-neutral data for the featured work. The prose for each case lives
 * in the dictionary under projects.cases, keyed by id.
 */
export const caseStudies = [
  {
    id: "primefit",
    name: "PrimeFit",
    url: "https://primefit.coach",
    domain: "primefit.coach",
  },
  {
    id: "dask",
    name: "Dask",
    url: "https://getdask.com",
    domain: "getdask.com",
  },
] as const;

export type CaseStudyId = (typeof caseStudies)[number]["id"];
