import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/dummyData";
import { TasksOverTime, TasksSummary } from "../components/projects/TasksChart";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === Number(id));

  if (!project) return <p>Project not found</p>;

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div
        className="sticky top-0 z-10 py-2 backdrop-blur border-b"
        style={{ borderColor: "var(--border-color)" }}
      >
        <button
          onClick={() => navigate("/projects")}
          className="mb-4 px-3 py-2 rounded border text-sm"
          style={{ borderColor: "var(--border-color)" }}
        >
          ← Back
        </button>
      </div>
      <h1 className="text-2xl font-bold">{project.title}</h1>
      <p className="opacity-70">{project.description}</p>

      {/* We will add stats, charts, milestones, team here */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(project.stats).map(([key, value]) => (
          <div
            key={key}
            className="p-4 rounded-xl"
            style={{
              backgroundColor: "var(--header-bg)",
              border: "1px solid var(--border-color)",
            }}
          >
            <p className="text-xl font-bold">${value}</p>
            <p className="opacity-70 capitalize">{key.replace("_", " ")}</p>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div
          className="p-4 rounded-xl border"
          style={{ borderColor: "var(--border-color)" }}
        >
          <h3 className="font-semibold mb-2">Tasks Over Time</h3>
          <TasksOverTime />
        </div>

        <div
          className="p-4 rounded-xl border"
          style={{ borderColor: "var(--border-color)" }}
        >
          <h3 className="font-semibold mb-2">Tasks Summary</h3>
          <TasksSummary />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Milestones */}
        <div
          className="p-4 rounded-xl border"
          style={{ borderColor: "var(--border-color)" }}
        >
          <h3 className="font-semibold mb-3">Milestones</h3>
          {project.milestones.map((m, i) => (
            <div key={i} className="flex items-center gap-2">
              <input type="checkbox" checked={m.done} readOnly />
              <span className={m.done ? "line-through opacity-60" : ""}>
                {m.name}
              </span>
            </div>
          ))}
        </div>

        {/* Team */}
        <div
          className="p-4 rounded-xl border"
          style={{ borderColor: "var(--border-color)" }}
        >
          <h3 className="font-semibold mb-3">Team Members</h3>
          {project.team.map((t, i) => (
            <div key={i} className="flex justify-between py-1">
              <span>{t.name}</span>
              <span className="opacity-70">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
