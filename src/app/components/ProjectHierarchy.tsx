"use client";

import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */

const ProjectHierarchy = () => {
  const [showManagement, setShowManagement] = useState(false);

  return (
    <>
      <h2 className="text-md lg:text-xl mt-12 mb-8 md:mt-14 md:mb-10 font-bold text-center">
        Project Hierarchy & Management
      </h2>
      <div className="max-w-[90vw] w-full text-sm lg:text-md">
        <p>
          This project aims to accurately depict what an enterprise development
          project with an emphasis on serverless technology could look like.
          Although any arbitrary corporate development project will possess its
          own unique aspects, a consistent priority for project leadership,
          regardless of the team or project you find yourself a part of, should
          be to optimize resources efficiently with the goal of maximum
          productivity while navigating constraints such as budget, time,
          talent, and overall project complexity. No organization operates under
          perfect conditions when bringing a new product to market, but
          successful project management requires adaptability, resourcefulness,
          expertise, and strategic thinking. For this project, we will assume
          the role of an enterprise-level organization set to develop and
          implement the high-level architecture showcased in the previous
          section. The methodologies and strategies we use to design, develop,
          and maintain this theoretical architecture are directly applicable to
          real-life software development. This approach demonstrates a
          comprehensive understanding of the processes and best practices
          necessary for successful enterprise-level projects. The project team
          hierarchy for this new initiative will be structured in the following
          format:
        </p>
      </div>
      {/* IMAGE START */}
      <div
        className="cursor-pointer bg-white mt-10"
        onClick={() => window.open("/4-1.drawio.svg")}
      >
        <img src="/4-1.drawio.svg" alt="4-1.drawio.svg" />
      </div>
      <div className="mt-6 italic text-xs 2xl:text-sm">^ click to expand</div>
      {/* IMAGE END */}
      <div className="max-w-[90vw] w-full text-sm lg:text-md">
        <p className="pt-8">
          Every team member in this serverless architecture project is essential
          in delivering a scalable application tailored to the company's needs.
          This workflow has been structured to foster collaboration, efficiency,
          and innovation across all roles from project inception to deployment,
          ensuring that every team member plays a crucial part in creating and
          managing the application architecture that aligns with the company's
          objectives.
        </p>
        <div className="flex w-full justify-end">
          <button
            onClick={() => setShowManagement(!showManagement)}
            className={`${
              !showManagement
                ? "bg-blue-500 text-center text-white hover:bg-blue-400"
                : "bg-red-500 text-center text-white hover:bg-red-400"
            } mt-10 py-2.5 px-2.5 text-xs rounded-md cursor-pointer`}
          >
            {showManagement
              ? "Hide Hierarchy breakdown"
              : "Expand Hierarchy breakdown"}
          </button>
        </div>
        {/* update */}
        <ul
          className={`${
            !showManagement && "hidden"
          } mt-8 py-8 bg-black/5 px-6 rounded-md border border-black`}
        >
          {/* LIST ITEM */}
          <li>
            <p className="font-bold">Project Manager:</p>
            <ol className="list-disc ml-4">
              <li className="pt-6">
                Oversees the entire project lifecycle, ensuring deadlines are
                met, and the project stays within budget.
              </li>
              <li className="pt-6">
                Acts as the primary liaison between the development team and
                stakeholders, ensuring clear communication of requirements,
                timelines, and project status.
              </li>
              <li className="pt-6">
                Manages resource allocation and prioritizes tasks to maintain
                workflow efficiency and address any bottlenecks or challenges
                that arise.
              </li>
            </ol>
          </li>
          {/* LIST ITEM */}
          <li>
            <p className="mt-8 font-bold">Solutions Architect:</p>
            <ol className="list-disc ml-4">
              <li className="pt-6">
                Responsible for the initial design of the serverless
                architecture, ensuring it aligns with both technical standards
                and business goals.
              </li>
              <li className="pt-6">
                Collaborates closely with the Project Manager and technical team
                leads to refine the system architecture and adapt it as needed
                based on project evolution and technical challenges.
              </li>
              <li className="pt-6">
                Provides technical leadership and strategic direction,
                especially in adopting new AWS services and optimizing existing
                solutions.
              </li>
            </ol>
          </li>
          {/* LIST ITEM */}
          <li>
            <p className="mt-8 font-bold">Senior Backend Developer:</p>
            <ol className="list-disc ml-4">
              <li className="pt-6">
                Leads the backend development efforts, focusing on creating
                robust, secure server-side logic and database interactions.
              </li>
              <li className="pt-6">
                Collaborates with the Solutions Architect to ensure the backend
                architecture supports scalable and efficient operations.
              </li>
              <li className="pt-6">
                Mentors Junior Backend Developers, overseeing and integrating
                their work with the broader backend infrastructure.
              </li>
            </ol>
          </li>
          {/* LIST ITEM */}
          <li>
            <p className="mt-8 font-bold">DevOps Engineer:</p>
            <ol className="list-disc ml-4">
              <li className="pt-6">
                Manages CI/CD pipelines and automates the infrastructure
                deployment using AWS CloudFormation and other DevOps tools.
              </li>
              <li className="pt-6">
                Ensures consistency across development, staging, and production
                environments, helping to diagnose and resolve
                environment-specific issues.
              </li>
              <li className="pt-6">
                Works closely with the backend team to optimize deployment
                strategies and implement scalable traffic management and data
                storage solutions.
              </li>
            </ol>
          </li>
          {/* LIST ITEM */}
          <li>
            <p className="mt-8 font-bold">Senior Full Stack Developer:</p>
            <ol className="list-disc ml-4">
              <li className="pt-6">
                Acts as the key integrator between the frontend and backend
                teams, ensuring seamless interaction and functionality across
                the entire stack of technologies.
              </li>
              <li className="pt-6">
                Provides technical guidance to the frontend team, helping to
                implement complex interactive features that rely on backend
                data.
              </li>
              <li className="pt-6">
                Assists in coding critical frontend and backend components,
                ensuring high code quality and system performance.
              </li>
            </ol>
          </li>
          {/* LIST ITEM */}
          <li>
            <p className="mt-8 font-bold">UX/UI Designer:</p>
            <ol className="list-disc ml-4">
              <li className="pt-6">
                Designs the application’s interface, focusing on creating an
                intuitive and attractive user experience.
              </li>
              <li className="pt-6">
                Works directly with the front-end team to ensure the designs are
                implemented accurately and effectively.
              </li>
              <li className="pt-6">
                Conducts user testing and feedback sessions to refine designs
                based on user interactions and preferences.
              </li>
            </ol>
          </li>
          {/* LIST ITEM */}
          <li>
            <p className="mt-8 font-bold">Junior Frontend Developers:</p>
            <ol className="list-disc ml-4">
              <li className="pt-6">
                Implement the frontend codebase according to the specifications
                provided by the UX/UI Designer.
              </li>
              <li className="pt-6">
                Collaborate with the Senior Full Stack Developer and backend
                team to integrate frontend elements with serverless backend
                services.
              </li>
              <li className="pt-6">
                Participate in code reviews and sprint meetings to continuously
                improve the frontend code and address issues.
              </li>
            </ol>
          </li>
          {/* LIST ITEM */}
          <li>
            <p className="mt-8 font-bold">Junior Backend Developers:</p>
            <ol className="list-disc ml-4">
              <li className="pt-6">
                Assist in developing and maintaining the server-side logic under
                the guidance of the Senior Backend Developer.
              </li>
              <li className="pt-6">
                Focus on building and optimizing backend functionalities,
                ensuring they are scalable, secure, and efficient.
              </li>
              <li className="pt-6">
                Work on integrating backend services with frontend requirements
                and serverless functions.
              </li>
            </ol>
          </li>
          {/* LIST ITEM */}
          <li>
            <p className="mt-8 font-bold">Serverless Developer:</p>
            <ol className="list-disc ml-4">
              <li className="pt-6">
                Specializes in developing and optimizing AWS Lambda functions
                and managing serverless deployments.
              </li>
              <li className="pt-6">
                Works alongside the backend team to ensure serverless components
                integrate smoothly with other cloud services.
              </li>
              <li className="pt-6">
                Provides insights into performance tuning and cost optimization
                for serverless operations within the AWS ecosystem.
              </li>
            </ol>
          </li>
          {/* LIST ITEM */}
          <li>
            <p className="mt-8 font-bold">Collaborative Dynamics:</p>
            <ol className="list-disc ml-4">
              <li className="pt-6">
                The team uses agile methodologies, with regular sprints and
                iterative cycles, to adapt quickly to changing requirements and
                feedback.
              </li>
              <li className="pt-6">
                Communication is optimized with daily briefings, regular status
                updates, and collaborative tools that keep everyone aligned and
                informed.
              </li>
              <li className="pt-6">
                Emphasis on cross-disciplinary training and knowledge sharing
                ensures that team members understand how their work fits into
                the project and can assist in other areas as needed.
              </li>
            </ol>
          </li>
        </ul>
        {/* update */}
      </div>
    </>
  );
};

export default ProjectHierarchy;
