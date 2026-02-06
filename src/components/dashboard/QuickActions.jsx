const ActionButton = ({ label }) => (
  <button
    className="px-4 py-2 rounded-lg text-sm font-medium border hover:opacity-80 transition"
    style={{ borderColor: "var(--border-color)" }}
  >
    {label}
  </button>
);

const QuickActions = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <ActionButton label="+ Add Lead" />
      <ActionButton label="+ Add Customer" />
      <ActionButton label="+ New Project" />
      <ActionButton label="+ Add Task" />
    </div>
  );
};

export default QuickActions;
