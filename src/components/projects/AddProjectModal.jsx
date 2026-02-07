import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProject } from "../../store/slices/projectsSlice";

const AddProjectModal = ({ open, onClose }) => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "Upcoming",
    progress: 0,
    due: "",
    budget: 0,
  });

  if (!open) return null;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addProject({
        ...form,
        progress: Number(form.progress),
        budget: Number(form.budget),
      }),
    );

    // Reset form and close modal
    setForm({
      title: "",
      description: "",
      status: "Upcoming",
      progress: 0,
      due: "",
      budget: 0,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div
        className="p-6 rounded-xl w-full max-w-md"
        style={{
          backgroundColor: "var(--bg-color)",
          border: "1px solid var(--border-color)",
        }}
      >
        <h2 className="text-xl font-semibold mb-4">Add Project</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="title"
            placeholder="Project Title"
            value={form.title}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-transparent"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-transparent"
          />
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-transparent"
          >
            <option>Upcoming</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
          <input
            name="progress"
            type="number"
            placeholder="Progress %"
            value={form.progress}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-transparent"
          />
          <input
            name="due"
            placeholder="Due Date"
            value={form.due}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-transparent"
          />
          <input
            name="budget"
            type="number"
            placeholder="Budget"
            value={form.budget}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-transparent"
          />

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-2 border rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-2 bg-indigo-600 text-white rounded"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProjectModal;
