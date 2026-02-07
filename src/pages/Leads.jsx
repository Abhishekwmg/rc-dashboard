import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddLeadModal from "../components/leads/AddLeadModal";
import { selectLeads, deleteLead } from "../store/slices/leadsSlice";

const Leads = () => {
  const dispatch = useDispatch();
  const leads = useSelector(selectLeads); // ✅ get leads from Redux
  const [search, setSearch] = useState("");
  const [openAddLead, setOpenAddLead] = useState(false);

  const filteredLeads = leads.filter((lead) =>
    `${lead.name} ${lead.company} ${lead.email}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  const handleDelete = (id) => {
    dispatch(deleteLead(id)); // ✅ delete via Redux
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header / Search */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search leads..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:max-w-sm px-4 py-2 rounded-lg border bg-transparent"
          style={{ borderColor: "var(--border-color)" }}
        />
        <button
          onClick={() => setOpenAddLead(true)}
          className="px-4 py-2 rounded bg-indigo-600 text-white"
        >
          + Add Lead
        </button>
        <AddLeadModal
          open={openAddLead}
          onClose={() => setOpenAddLead(false)}
        />
      </div>

      {/* Leads Table */}
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
              <th className="p-3 text-left opacity-70">Date</th>
              <th className="p-3 text-left opacity-70">Value</th>
              <th className="p-3 text-left opacity-70">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.map((lead) => (
              <tr
                key={lead.id}
                className="border-b last:border-0"
                style={{ borderColor: "var(--border-color)" }}
              >
                <td className="p-3 font-medium">{lead.name}</td>
                <td className="p-3">{lead.company}</td>
                <td className="p-3">{lead.email}</td>
                <td className="p-3">{lead.date}</td>
                <td className="p-3">
                  ${Number(lead.value || 0).toLocaleString()}
                </td>
                <td className="p-3 flex gap-3">
                  <button className="text-blue-500 hover:underline">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(lead.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredLeads.length === 0 && (
              <tr>
                <td colSpan="6" className="p-6 text-center opacity-60">
                  No leads found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leads;
