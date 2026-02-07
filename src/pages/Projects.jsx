import ProjectCard from "../components/projects/ProjectCard";
import { useState } from "react";
import { projects as initialProjects } from "../data/dummyData";
import AddProjectModal from "../components/projects/AddProjectModal";

const Projects = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [filter, setFilter] = useState("All");
  const [openAddProject, setOpenAddProject] = useState(false);

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.status === filter);

  const handleAddProject = (newProject) => {
    setProjects([...projects, { id: Date.now(), ...newProject }]);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* LEFT PANEL */}
      <div
        className="lg:col-span-1 p-4 rounded-xl"
        style={{
          backgroundColor: "var(--header-bg)",
          border: "1px solid var(--border-color)",
        }}
      >
        <button
          onClick={() => setOpenAddProject(true)}
          className="w-full mb-4 px-4 py-2 rounded bg-indigo-600 text-white"
        >
          + Add New Project
        </button>
        <AddProjectModal
          open={openAddProject}
          onClose={() => setOpenAddProject(false)}
          onAdd={handleAddProject}
        />

        <div className="space-y-2">
          <button
            onClick={() => setFilter("All")}
            className={`w-full px-3 py-2 rounded border ${
              filter === "All" ? "bg-indigo-600 text-white" : "bg-transparent"
            }`}
          >
            All Projects
          </button>

          <button
            onClick={() => setFilter("In Progress")}
            className={`w-full px-3 py-2 rounded border ${
              filter === "In Progress"
                ? "bg-indigo-600 text-white"
                : "bg-transparent"
            }`}
          >
            In Progress
          </button>

          <button
            onClick={() => setFilter("Upcoming")}
            className={`w-full px-3 py-2 rounded border ${
              filter === "Upcoming"
                ? "bg-indigo-600 text-white"
                : "bg-transparent"
            }`}
          >
            Upcoming
          </button>
        </div>

        {/* Stats */}
        <div className="mt-6 space-y-4 text-sm">
          <div>
            <p className="opacity-70">Project Revenue</p>
            <p className="text-xl font-semibold">$78,890</p>
          </div>
          <div>
            <p className="opacity-70">Project Profit</p>
            <p className="text-xl font-semibold">$5,250</p>
          </div>
          <div>
            <p className="opacity-70">Project Expense</p>
            <p className="text-xl font-semibold">$1,450</p>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProjects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
