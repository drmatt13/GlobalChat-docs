"use client";

/* eslint-disable @next/next/no-img-element */

const AwsServerlessArchitectureDesign = () => {
  return (
    <>
      <h2 className="text-md lg:text-xl mt-12 md:mt-14 mb-8 md:mb-10 font-bold text-center">
        AWS Serverless Architecture Design
      </h2>
      <div className="max-w-[90vw] w-full text-sm lg:text-md">
        <p>
          Although end users may not be concerned with the backend architecture,
          its importance cannot be overstated. A scalable backend is not just
          important; it's crucial to meeting user expectations and ensuring
          seamless operation. This section explores the serverless architecture
          designed to support such requirements. By leveraging AWS services, we
          can create an infrastructure that not only meets the needs of end
          users but also simplifies development and maintenance for the
          development team.
        </p>
      </div>
      {/* IMAGE START */}
      <div
        className="cursor-pointer bg-white mt-10"
        onClick={() => window.open("/3.drawio.svg")}
      >
        <img className="mx-auto" src="/3.drawio.svg" alt="3.drawio.svg" />
      </div>
      <div className="mt-6 italic text-xs 2xl:text-sm">^ click to expand</div>
      {/* IMAGE END */}
      <div className="max-w-[90vw] w-full text-sm lg:text-md">
        <p className="pt-8">
          As a certified AWS Solutions Architect Professional, I designed the
          serverless architecture illustrated in the diagram above, which will
          be referenced for this project. This architecture efficiently delivers
          both statically cached and dynamic content at scale. It utilizes
          CloudFront for caching and API Gateway to manage dynamic requests,
          ensuring optimized content delivery. Static assets are stored and
          served from S3 buckets, while ECS Fargate tasks drive the front end.
          Additionally, ECS Fargate tasks alongside Lambda functions will
          actively manage responsive and scalable API operations, providing a
          consistent and uniform development environment that minimizes
          inconsistencies between different development setups.
        </p>
        <p className="mt-6">
          This architecture was designed to encapsulate all services in
          containerized environments while leveraging serverless computing (AWS)
          for both deployment and managed services. By standardizing application
          behavior with containers and AWS, this architecture enables rapid
          prototyping and effortless scaling while optimizing performance,
          reliability, and fault tolerance. It ensures consistency across all
          code environments, from local development to production, providing a
          seamless and efficient development lifecycle.
        </p>
        <p className="mt-6">
          User authentication will be administered through Cognito, an AWS
          managed service that ensures secure and automated access control for
          the application's backend operations. The application's security is
          further reinforced by AWS WAF, which provides a strong defense against
          common web exploits. Aurora and DynamoDB are utilized for durable,
          scalable database solutions, with ECS Fargate tasks and Lambda
          functions managing the operational logic. Secrets Manager is crucial
          in securely generating, encrypting, and storing unique passwords for
          Aurora. Regular password rotation is employed to mitigate the risk of
          unauthorized access. IAM permissions are solely responsible for
          managing access to DynamoDB. This architecture ensures that the
          application's security is robust and comprehensive, safeguarding user
          data and operational integrity.
        </p>
        <p className="mt-6">
          While this application architecture may appear straightforward, it
          presents significant challenges when developed and maintained across a
          distributed team. The key to maintaining any application's efficiency,
          security, and scalability lies in ensuring seamless integration and
          deployment processes. Such a system becomes sustainable with rigorous
          testing, proper version control, and coordinated development
          practices. Implementing a well-designed CI/CD pipeline and effective
          version control is essential for crucial tasks such as the deployment
          process, managing code changes, and ensuring consistent and reliable
          delivery of updates without downtime.
        </p>
      </div>
    </>
  );
};

export default AwsServerlessArchitectureDesign;
