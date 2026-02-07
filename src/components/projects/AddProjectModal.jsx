import { useState } from "react";

const AddProjectModal = ({ open, onClose, onAdd }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "Upcoming",
    progress: 0,
    due: "",
    budget: "",
  });

  if (!open) return null;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      ...form,
      progress: Number(form.progress),
      budget: Number(form.budget),
    });
    //alert("Project added successfuully");
    onClose();
    setForm({
      title: "",
      description: "",
      status: "Upcoming",
      progress: 0,
      due: "",
      budget: "",
    });
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
            onChange={handleChange}
            className="w-full p-2 border rounded bg-transparent"
          />
          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
            className="w-full p-2 border rounded bg-transparent"
          />
          <select
            name="status"
            onChange={handleChange}
            className="w-full p-2 border rounded bg-transparent"
          >
            <option>Upcoming</option>
            <option>In Progress</option>
          </select>
          <input
            name="progress"
            type="number"
            placeholder="Progress %"
            onChange={handleChange}
            className="w-full p-2 border rounded bg-transparent"
          />
          <input
            name="due"
            placeholder="Due Date"
            onChange={handleChange}
            className="w-full p-2 border rounded bg-transparent"
          />
          <input
            name="budget"
            placeholder="Budget"
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
