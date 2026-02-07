import { useState } from "react";
import { vendors as initialVendors } from "../data/dummyData";
import AddVendorModal from "../components/vendors/AddVendorModal";

const Vendors = () => {
  const [vendors, setVendors] = useState(initialVendors);
  const [search, setSearch] = useState("");
  const [openAddVendor, setOpenAddVendor] = useState(false);

  const filteredVendors = vendors.filter((vendor) =>
    `${vendor.name} ${vendor.email} ${vendor.country}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  const handleDelete = (id) => {
    setVendors((prev) => prev.filter((v) => v.id !== id));
  };

  const handleAddVendor = (vendor) => {
    setVendors((prev) => [...prev, { id: Date.now(), ...vendor }]);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header / Search */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search vendors..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:max-w-sm px-4 py-2 rounded-lg border bg-transparent"
          style={{ borderColor: "var(--border-color)" }}
        />

        <button
          onClick={() => setOpenAddVendor(true)}
          className="px-4 py-2 rounded bg-indigo-600 text-white"
        >
          + Add Lead
        </button>
        <AddVendorModal
          open={openAddVendor}
          onClose={() => setOpenAddVendor(false)}
          onAdd={handleAddVendor}
        />
      </div>

      {/* Vendors Table */}
      <div className="card overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr
              className="border-b"
              style={{ borderColor: "var(--border-color)" }}
            >
              <th className="p-3 text-left opacity-70">Company Name</th>
              <th className="p-3 text-left opacity-70">Mobile</th>
              <th className="p-3 text-left opacity-70">Email</th>
              <th className="p-3 text-left opacity-70">Country</th>
              <th className="p-3 text-left opacity-70">Status</th>
              <th className="p-3 text-left opacity-70">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredVendors.map((vendor) => (
              <tr
                key={vendor.id}
                className="border-b last:border-0"
                style={{ borderColor: "var(--border-color)" }}
              >
                <td className="p-3 font-medium">{vendor.name}</td>
                <td className="p-3">{vendor.mobile}</td>
                <td className="p-3">{vendor.email}</td>
                <td className="p-3">{vendor.country}</td>
                <td className="p-3">{vendor.status}</td>
                <td className="p-3 flex gap-3">
                  <button className="text-blue-500 hover:underline">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(vendor.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {filteredVendors.length === 0 && (
              <tr>
                <td colSpan="6" className="p-6 text-center opacity-60">
                  No vendors found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Vendors;
