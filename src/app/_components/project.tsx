import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function Project() {
  const projects_old = [
    {
      title: "Nunkun service",
      description: "A service presentation and customer management site.",
      link: "https://www.nunkunservices.com/",
      technologies: ["Laravel", "Bootstrap"],
      deprecated:true
    },
    {
      title: "Ile-mi",
      description: "Property management website.",
      link: "https://ile-mi.bj/",
      technologies: ["Django", "Bootstrap","Postgresql"],
      deprecated:true
    },
    {
      title: "Vartlab-benin",
      description: "Service presentation site",
      link: "https://vartlab-benin.com/",
      technologies: ["PHP", "Bootstrap"],
      deprecated:true
    },
    {
      title: "Cashew Pms",
      description: "Cashew Factory management application (old version)",
      link: "https://ani-cashewpms.com/",
      technologies: ["Laravel", "Bootstrap","Postgresql"],
      deprecated:true
    },
    {
      title: "Nutrispark",
      description: "For learning.",
      link: "https://learn-nutrispark.vercel.app/",
      technologies: ["Nextjs"],
    },
    {
      title: "Acme-Learning",
      description: "For learning Nextjs using Prisma and Postgresql. You can use these credentials to login: email: user@nextmail.com, password: 123456",
      link: "https://learning-acme.vercel.app/",
      technologies: ["Nextjs", "Prisma","Postgresql"],
    },
  ];

  const new_projects=[
    {
      title: "PMS",
      description: "Factory management application (under development) ",
      link: "https://pms-front-gules.vercel.app/",
      technologies: ["Nextjs", "Prisma","Postgresql","Nestjs"],
    },
  ]

  return (
    <section id="projects" className="p-3 text-white">
      <h1 className="text-5xl w-full flex justify-center items-center pb-3">
        <span className="font-mono ">Projects</span>
      </h1>
      
      {/* Old Projects */}
      <div className="w-full mb-2">
        <h2 className="text-3xl ml-2">
          <span className="font-mono ">Old projects</span>
        </h2>
        <div className="flex justify-center space-y-2"> {/* Centering the content */}
          <div className="max-w-5xl mx-auto px-4">
            <HoverEffect items={projects_old} />
          </div>
        </div>
      </div>
      
      {/* New Projects */}
      <div className="w-full mb-2">
        <h2 className="text-3xl ml-2">
          <span className="font-mono ">New projects</span>
        </h2>
        <div className="flex justify-center space-y-2"> {/* Centering the content */}
          <div className="max-w-5xl mx-auto px-4">
            <HoverEffect items={new_projects} />
          </div>
        </div>
      </div>
    </section>
  );
}
