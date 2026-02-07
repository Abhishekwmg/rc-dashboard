import { useState } from "react";
import { customers as initialCustomers } from "../data/dummyData";
import AddCustomerModal from "../components/customers/AddCustomerModal";

const Customers = () => {
  const [customers, setCustomers] = useState(initialCustomers);
  const [search, setSearch] = useState("");
  const [openAddCustomer, setOpenAddCustomer] = useState(false);

  const filteredCustomers = customers.filter((c) =>
    `${c.name} ${c.company} ${c.email}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  const handleDelete = (id) => {
    setCustomers((prev) => prev.filter((c) => c.id !== id));
  };

  const handleAddCustomer = (customer) => {
    setCustomers((prev) => [...prev, { id: Date.now(), ...customer }]);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Search + Add */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search customers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:max-w-sm px-4 py-2 rounded-lg border bg-transparent"
          style={{ borderColor: "var(--border-color)" }}
        />

        <button
          onClick={() => setOpenAddCustomer(true)}
          className="px-4 py-2 rounded bg-indigo-600 text-white"
        >
          + Add Customer
        </button>

        <AddCustomerModal
          open={openAddCustomer}
          onClose={() => setOpenAddCustomer(false)}
          onAdd={handleAddCustomer}
        />
      </div>

      {/* Customers Table */}
      <div className="card overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr
              className="border-b"
              style={{ borderColor: "var(--border-color)" }}
            >
              <th className="p-3 text-left opacity-70">Name</th>
              <th className="p-3 text-left opacity-70">Company</th>
              <th className="p-3 text-left opacity-70">Email</th>
              <th className="p-3 text-left opacity-70">Mobile</th>
              <th className="p-3 text-left opacity-70">Status</th>
              <th className="p-3 text-left opacity-70">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredCustomers.map((c) => (
              <tr
                key={c.id}
                className="border-b last:border-0"
                style={{ borderColor: "var(--border-color)" }}
              >
                <td className="p-3 font-medium">{c.name}</td>
                <td className="p-3">{c.company}</td>
                <td className="p-3">{c.email}</td>
                <td className="p-3">{c.mobile}</td>

                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      c.status === "Active"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {c.status}
                  </span>
                </td>

                <td className="p-3 flex gap-3">
                  <button className="text-blue-500 hover:underline">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(c.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {filteredCustomers.length === 0 && (
              <tr>
                <td colSpan="6" className="p-6 text-center opacity-60">
                  No customers found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
