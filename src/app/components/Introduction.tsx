"use client";

/* eslint-disable @next/next/no-img-element */

const Introduction = () => {
  return (
    <>
      <h1 className="text-lg lg:text-2xl font-bold mb-2.5">
        Agile Enterprise Operations
      </h1>
      <h2 className="text-sm lg:text-md mb-6 opacity-75">
        Exploring Organizational Structure, DevOps, and CI/CD Dynamics
      </h2>

      <>
        <h2 className="text-md lg:text-xl mt-12 md:mt-14 mb-8 md:mb-10 font-bold text-center">
          Introduction
        </h2>
        <div className="max-w-[90vw] w-full text-sm lg:text-md">
          <p>
            Understanding the intricate dynamics of Agile enterprise operations
            requires deep analysis and is crucial in the rapidly evolving
            landscape of software development and deployment. This project
            presents a hypothetical overview that starts with client
            expectations and extends to the seamless integration of development
            and operations within an organizational framework. It explores the
            theoretical structure of a project team, setting the stage to
            address the complexities of managing a multifaceted development
            environment and orchestrating sophisticated operational workflows.
          </p>
          <p className="mt-6">
            Beyond theoretical discussions, this initiative demonstrates the
            practical competence required to effectively manage and maintain
            complex software deployments. It goes beyond merely discussing
            essential tools and strategies to illustrate their practical
            application in development practices, such as the development
            environment and version control systems. These elements are not just
            theoretical concepts but vital practical solutions crucial for
            ensuring seamless integration of daily operations, which facilitates
            the implementation of advanced processes like continuous integration
            and continuous deployment (CI/CD) pipelines.
          </p>
          <p className="mt-6">
            This project then expands to include an in-depth examination of how
            these CI/CD pipelines are managed and monitored, highlighting their
            critical role in the project’s overall operations management. This
            comprehensive approach reinforces the technical understanding
            necessary for modern software projects and showcases leadership and
            managerial skills essential for navigating and excelling in this
            dynamic field. Through this exploration, I aim to demonstrate the
            feasibility and operational success of the project, affirming my
            capability to implement and oversee sophisticated software solutions
            in real-world settings.
          </p>
        </div>
      </>
      <>
        <h2 className="text-md lg:text-xl mt-12 md:mt-14 mb-8 md:mb-10 font-bold text-center">
          Client Interaction Overview
        </h2>
        <div className="max-w-[90vw] w-full text-sm lg:text-md">
          <p>
            From the perspective of any end client, the primary expectation for
            any online website, service, or application is straightforward:{" "}
            <span className="italic">
              It must be accessible and functional.
            </span>{" "}
            The underlying mechanics of how any given service operates or is
            maintained are typically irrelevant and beyond the scope of their
            concern.
          </p>
        </div>
        {/* IMAGE START */}
        <div
          className="cursor-pointer bg-white mt-10 w-full"
          onClick={() => window.open("/1.drawio.svg")}
        >
          <img className="mx-auto" src="/1.drawio.svg" alt="1.drawio.svg" />
        </div>
        <div className="mt-6 italic text-xs 2xl:text-sm text-center">
          ^ click to expand
        </div>
        {/* IMAGE END */}
        <div className="max-w-[90vw] w-full text-sm lg:text-md">
          <p className="pt-8">
            The diagram above demonstrates the simplicity of a client's initial
            interaction with an online service. The process initiates with an
            HTTPS request to the domain name. This request is routed directly to
            the service if the IP address is locally cached. If not, the
            client's ISP's DNS server receives the query and, if necessary,
            forwards it to resolve the IP address. This seamless routing ensures
            that clients can access services efficiently without any awareness
            of the DNS resolution happening behind the scenes. Once an IP is
            determined, the client can access the service in question. This
            streamlined process underscores the client's expectation of
            accessibility and functionality, with all the complex technology
            operating invisibly to deliver a seamless online experience.
          </p>
        </div>
        {/* IMAGE START */}
        <div
          className="cursor-pointer bg-white mt-10 w-full"
          onClick={() => window.open("/2.drawio.svg")}
        >
          <img className="mx-auto" src="/2.drawio.svg" alt="2.drawio.svg" />
        </div>
        <div className="mt-6 italic text-xs 2xl:text-sm text-center">
          ^ click to expand
        </div>
        {/* IMAGE END */}
        <div className="max-w-[90vw] w-full text-sm lg:text-md">
          <p className="pt-8">
            End users interact with websites through the UI/UX layer, a gateway
            to the web application meticulously designed by web developers and
            UI/UX designers. It's crucial to understand that the average
            consumer expects application interfaces to operate with minimal
            effort. From their perspective, they only need to interact with the
            graphical user interface, and the request and response aspect is
            abstracted. To them, the effectiveness of a website hinges solely on
            its responsiveness and ease of use, without any visible hint of the
            underlying technical processes. The user-centric experience masks
            the complexities of the backend, a network of systems and
            technologies that operates behind the scenes to ensure web services
            remain operational, stable, and secure.
          </p>
        </div>
      </>
    </>
  );
};

export default Introduction;
