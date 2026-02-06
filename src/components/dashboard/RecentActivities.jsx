const RecentActivities = ({ activities }) => {
  return (
    <div
      className="rounded-xl border p-4 mb-8"
      style={{ borderColor: "var(--border-color)" }}
    >
      <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead
            className="border-b"
            style={{ borderColor: "var(--border-color)" }}
          >
            <tr className="text-left opacity-70">
              <th className="pb-2">Type</th>
              <th className="pb-2">Description</th>
              <th className="pb-2">Due Date</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr
                key={activity.id}
                className="border-b last:border-0"
                style={{ borderColor: "var(--border-color)" }}
              >
                <td className="py-2">{activity.type}</td>
                <td className="py-2">{activity.description}</td>
                <td className="py-2">{activity.due}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentActivities;
