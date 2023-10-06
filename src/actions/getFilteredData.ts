import data from "@/data/data.json";

export function getFilteredData(filter: any) {
  let filteredProjects = data.projects;

  if (filter && filter !== "All") {
    // filteredProjects = data.projects.filter((project) => project.type === filter);
  }

  return filteredProjects;
}
