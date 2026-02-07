import { useState } from "react";

const AddVendorModal = ({ open, onClose, onAdd }) => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    country: "",
    status: "Active",
  });

  if (!open) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({
      name: "",
      mobile: "",
      email: "",
      country: "",
      status: "Active",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div
        className="w-full max-w-md rounded-xl p-6"
        style={{
          backgroundColor: "var(--bg-color)",
          border: "1px solid var(--border-color)",
        }}
      >
        <h2 className="text-xl font-semibold mb-4">Add New Vendor</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Company Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-2 rounded border bg-transparent"
            style={{ borderColor: "var(--border-color)" }}
          />

          <input
            type="text"
            name="mobile"
            placeholder="Mobile"
            value={form.mobile}
            onChange={handleChange}
            required
            className="w-full p-2 rounded border bg-transparent"
            style={{ borderColor: "var(--border-color)" }}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-2 rounded border bg-transparent"
            style={{ borderColor: "var(--border-color)" }}
          />

          <input
            type="text"
            name="country"
            placeholder="Country"
            value={form.country}
            onChange={handleChange}
            required
            className="w-full p-2 rounded border bg-transparent"
            style={{ borderColor: "var(--border-color)" }}
          />

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full p-2 rounded border bg-transparent"
            style={{ borderColor: "var(--border-color)" }}
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
              style={{ borderColor: "var(--border-color)" }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-indigo-600 text-white"
            >
              Add Vendor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVendorModal;
