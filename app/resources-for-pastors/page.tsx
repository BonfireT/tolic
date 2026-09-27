import { FaFileDownload } from "react-icons/fa";

export const metadata = {
  title: "Resources for TOLIC Church Pastors | Tree of Life International Churches",
};

type Resource = {
  title: string;
  description: string;
  file: string;
  size: string;
};

const resources: Resource[] = [
  {
    title: "New Converts Class",
    description:
      "A teaching outline for walking brand-new believers through the foundations of faith in their first weeks in the church.",
    file: "/pdf/new-converts-class.pdf",
    size: "197 KB",
  },
  {
    title: "Baptism & Communion — Instructions for Pastors",
    description:
      "Guidance for pastors on administering water baptism and Holy Communion in line with TOLIC doctrine and practice.",
    file: "/pdf/baptism-and-communion-instructions.pdf",
    size: "98 KB",
  },
  {
    title: "Church Volunteer Form",
    description:
      "A sign-up form for members who want to serve in a department or ministry at their local branch.",
    file: "/pdf/church-volunteer-form.pdf",
    size: "67 KB",
  },
  {
    title: "Tree of Life Workers' Manual",
    description:
      "The handbook for church workers, covering conduct, responsibilities and the heart behind serving in TOLIC.",
    file: "/pdf/workers-manual.pdf",
    size: "74 KB",
  },
  {
    title: "TOLIC Pastors' Manual",
    description:
      "The reference manual for pastors overseeing a TOLIC branch, including structure, doctrine and pastoral practice.",
    file: "/pdf/pastors-manual.pdf",
    size: "125 KB",
  },
  {
    title: "TOLIC Pastoral Candidate Form",
    description:
      "The application form for members sensing a call to pastoral ministry within Tree of Life International Churches.",
    file: "/pdf/pastoral-candidate-form.pdf",
    size: "102 KB",
  },
  {
    title: "Pastors' Ordination Form",
    description:
      "The form used to process and record the ordination of a TOLIC pastor.",
    file: "/pdf/ordination-form.pdf",
    size: "77 KB",
  },
];

// Added the missing default export component:
export default function ResourcesForPastorsPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Resources for Pastors</h1>
      <div className="grid gap-4">
        {resources.map((resource) => (
          <div
            key={resource.file}
            className="p-4 border border-gray-200 rounded-lg flex items-center justify-between shadow-sm hover:shadow-md transition"
          >
            <div>
              <h2 className="text-xl font-semibold">{resource.title}</h2>
              <p className="text-gray-600 text-sm mt-1">{resource.description}</p>
              <span className="text-xs text-gray-400 mt-2 inline-block">
                Size: {resource.size}
              </span>
            </div>
            <a
              href={resource.file}
              download
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              <FaFileDownload />
              <span>Download</span>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}