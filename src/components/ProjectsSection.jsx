import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";

const projects = [
  {
    image: project1,
    title: "Residential Lift Installation",
    location: "Delhi NCR",
  },
  {
    image: project2,
    title: "Commercial Passenger Lift",
    location: "Noida",
  },
  {
    image: project3,
    title: "Hospital Elevator Project",
    location: "Gurugram",
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-5xl">
            Recent Projects
          </h2>
          <p className="mt-4 leading-8 text-slate-600">
            Explore some of our recent installations and project work.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-72 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  {project.title}
                </h3>
                <p className="mt-2 text-slate-600">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}