import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/projects/${project.id}`)}
      className="cursor-pointer hover:scale-[1.02] transition"
    >
      <div
        className="p-5 rounded-xl space-y-3"
        style={{
          backgroundColor: "var(--header-bg)",
          border: "1px solid var(--border-color)",
        }}
      >
        <div>
          <h3 className="font-semibold">{project.title}</h3>
          <p className="text-sm opacity-70">{project.description}</p>
        </div>

        <div className="flex gap-4 text-xs opacity-70">
          <span>{project.status}</span>
        </div>

        <div>
          <p className="text-xs mb-1">{project.progress}% Done</p>
          <div className="w-full h-2 bg-gray-700/20 rounded">
            <div
              className="h-2 bg-indigo-600 rounded"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>

        <div className="text-xs opacity-70 flex justify-between">
          <span>Due: {project.due}</span>
          <span>Budget: ${project.budget}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
