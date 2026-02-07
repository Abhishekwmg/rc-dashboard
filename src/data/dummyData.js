export const leads = [
  {
    id: 1,
    name: "John Doe",
    company: "Acme Corp",
    email: "john@acme.com",
    status: "New",
  },
  {
    id: 2,
    name: "Alice Smith",
    company: "MegaCorp",
    email: "alice@mega.com",
    status: "Contacted",
  },
];

export const projects = [
  {
    id: 1,
    title: "Startup Company",
    description: "CRM App application to University Admin..",
    status: "In Progress",
    progress: 95,
    due: "21 Aug, 2022",
    budget: 12050,
    stats: {
      upfront: 1500,
      invoice: 3500,
      received: 4000,
      pending: 1700,
    },

    milestones: [
      { name: "App UI Design", done: true },
      { name: "Desktop App Development", done: true },
      { name: "Website Design", done: false },
      { name: "QA Analyst", done: false },
    ],

    team: [
      { name: "Chris Fox", role: "Design Lead" },
      { name: "Cindy Anderson", role: "Marketing Lead" },
      { name: "Maryam Amiri", role: "Dev Lead" },
      { name: "Alexander", role: "QA Lead" },
      { name: "Joge Lucky", role: "Sales Lead" },
    ],
  },
  {
    id: 2,
    title: "University",
    description: "CRM App application to University Admin..",
    status: "In Progress",
    progress: 95,
    due: "21 Aug, 2022",
    budget: 12050,
    stats: {
      upfront: 1500,
      invoice: 3500,
      received: 4000,
      pending: 1700,
    },

    milestones: [
      { name: "App UI Design", done: true },
      { name: "Desktop App Development", done: true },
      { name: "Website Design", done: false },
      { name: "QA Analyst", done: false },
    ],

    team: [
      { name: "Chris Fox", role: "Design Lead" },
      { name: "Cindy Anderson", role: "Marketing Lead" },
      { name: "Maryam Amiri", role: "Dev Lead" },
      { name: "Alexander", role: "QA Lead" },
      { name: "Joge Lucky", role: "Sales Lead" },
    ],
  },
  {
    id: 3,
    title: "Hospital",
    description: "CRM App application to University Admin..",
    status: "In Progress",
    progress: 95,
    due: "21 Aug, 2022",
    budget: 12050,
    stats: {
      upfront: 1500,
      invoice: 3500,
      received: 4000,
      pending: 1700,
    },

    milestones: [
      { name: "App UI Design", done: true },
      { name: "Desktop App Development", done: true },
      { name: "Website Design", done: false },
      { name: "QA Analyst", done: false },
    ],

    team: [
      { name: "Chris Fox", role: "Design Lead" },
      { name: "Cindy Anderson", role: "Marketing Lead" },
      { name: "Maryam Amiri", role: "Dev Lead" },
      { name: "Alexander", role: "QA Lead" },
      { name: "Joge Lucky", role: "Sales Lead" },
    ],
  },
];

export const dashboardStats = {
  leadFunnel: {
    leads: 120,
    contacted: 80,
    qualified: 40,
    customers: 15,
  },
  projectStatus: {
    upcoming: 4,
    inProgress: 7,
    completed: 3,
  },
  tasksOverTime: [
    { month: "Jan", created: 30, done: 20 },
    { month: "Feb", created: 50, done: 45 },
    { month: "Mar", created: 40, done: 35 },
  ],
};
