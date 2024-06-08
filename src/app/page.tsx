"use client";

import { useEffect } from "react";

/* eslint-disable @next/next/no-img-element */

export default function Home() {
  // useEffect(() => {
  //   preloadImages();
  // }, []);

  // const preloadImages = () => {
  //   const imageUrls = ["/test.png"];

  //   imageUrls.forEach((url) => {
  //     const img = new Image();
  //     img.src = url;
  //   });
  // };

  return (
    <>
      <div className="w-full flex flex-col items-center pt-12 lg:pt-16 pb-10 md:pb-12 px-6 sm:px-10 text-sm sm:text-base">
        <h1 className="text-lg lg:text-2xl font-bold mb-2.5">GlobalChat</h1>
        <h2 className="text-sm lg:text-md mb-10 opacity-75">
          Connect Globally, Chat Instantly
        </h2>
        <video
          src="/chat.mkv"
          controls={true}
          className="max-w-full md:w-[90%] lg:w-[75%]"
        ></video>
        <a
          href="https://github.com/drmatt13/GlobalChat"
          className="text-blue-600 hover:underline cursor-pointer mt-8 text-base lg:text-xl visited:text-purple-600"
        >
          github repository
        </a>
        {/* ********************************************* */}

        <div className="mt-6 max-w-[90vw] w-full text-sm lg:text-md">
          <p>
            GlobalChat is a sophisticated web-based chat application that
            demonstrates cutting-edge practices in software design, deployment,
            and user experience. Developed using a containerized Next.js
            framework and a Socket.io server, this project exemplifies a
            scalable, responsive application architecture that can be deployed
            seamlessly either on AWS or locally.
          </p>

          <p className="mt-6 font-bold">Key Features:</p>

          <ul className="list-disc mt-6 ml-6">
            <li>
              <span className="font-bold">Responsive Design:</span> Utilizes
              TailwindCSS and React best practices to deliver a seamless user
              experience on all devices, from mobile phones to desktop monitors.
            </li>
            <li className="mt-6">
              <span className="font-bold">Real-Time Communication:</span>{" "}
              Powered by Socket.io, the application provides instant messaging
              capabilities, allowing users to engage in both global and private
              chats.
            </li>
            <li className="mt-6">
              <span className="font-bold">User Engagement:</span> Enables users
              to quickly enter a username and select from a curated list of
              avatars, complemented by live notifications, link sharing, and
              image uploads for an interactive experience.
            </li>
            <li className="mt-6">
              <span className="font-bold">Search and Management:</span> Users
              can search past chats and manage their identities, allowing for
              the preservation of chat history and user continuity even when
              switching identities.
            </li>
            <li className="mt-6">
              <span className="font-bold">Docker Integration:</span> Employing
              Docker for both the application and server components ensures
              consistency across development and production environments,
              facilitating easy scaling and maintenance.
            </li>
            <li className="mt-6">
              <span className="font-bold">Deployment Flexibility:</span>{" "}
              Configured for hassle-free deployment to AWS using container
              services or for local execution, supporting rapid development
              cycles and testing.
            </li>
          </ul>
          {/* <p className="mt-6">****</p> */}
        </div>
        {/* ********************************************* */}

        <h2 className="text-md lg:text-xl mt-12 md:mt-14 mb-8 md:mb-10 font-bold text-center">
          Deploy Locally
        </h2>
        <div className="max-w-[90vw] w-full text-sm lg:text-md">
          <p>
            To launch the GlobalChat application, first ensure that Docker and
            Docker-compose are installed on your system. Once you have confirmed
            the installations, simply clone the provided GitHub repository.
          </p>
          <p className="mt-6">
            To start the application, navigate to the directory containing the{" "}
            <span className="italic">
              {'"'}docker-compose.yml{'"'}
            </span>{" "}
            file and execute the following command:{" "}
            <span
              className="italic bg-blue-200 w-max pl-0.5 pr-1 whitespace-pre-wrap"
              style={{ whiteSpace: "nowrap" }}
            >
              docker-compose up
            </span>
          </p>
          <p className="mt-6">
            This command will start all the required containers in the correct
            order.
          </p>
          <p className="mt-6">
            When you need to stop the application, use the following command in
            the same directory:{" "}
            <span
              className="italic bg-red-200 w-max pl-0.5 pr-1 whitespace-pre-wrap"
              style={{ whiteSpace: "nowrap" }}
            >
              docker-compose down
            </span>
          </p>
          <p className="mt-6">
            This will gracefully stop all the running containers associated with
            the application.
          </p>
          <p className="mt-6">
            <span className="font-bold">Note:</span>{" "}
            <span className="italic">
              These commands assume that you have Docker and Docker-compose
              properly installed and configured on your machine.
            </span>
          </p>
        </div>

        {/* ********************************************* */}
        <h2 className="text-md lg:text-xl mt-12 mb-8 md:mt-14 md:mb-10 font-bold text-center">
          Deploy To AWS
        </h2>
        <div className="max-w-[90vw] w-full text-sm lg:text-md">
          <p>
            Deploying GlobalChat on AWS provides public accessibility, allowing
            you to use the application with others outside your private network.
            Follow these steps to deploy the application using an EC2 instance.
          </p>

          <p className="mt-6 font-bold">Prerequisites:</p>
          <ul className="list-disc mt-6 ml-6">
            <li>An AWS account.</li>
            <li className="mt-6">
              Proper permissions to create and manage EC2 instances, security
              groups, and IAM roles.
            </li>
            <li className="mt-6">
              AWS CLI installed and configured on your local machine (
              <span className="italic">optional, for advanced users</span>).
            </li>
          </ul>

          <p className="mt-8 font-bold">Step-by-Step Instructions:</p>
          <ul className="list-decimal mt-6 ml-6">
            <li>
              <div className="font-bold">Launch an EC2 Instance:</div>
              <ul className="list-disc mt-6 ml-4">
                <li>
                  Select a <span className="underline">t2.small</span> instance
                  to ensure adequate RAM for the build process. The{" "}
                  <span className="italic">
                    {'"'}t2.micro{'"'}
                  </span>{" "}
                  instance type is not recommended as it lacks the necessary
                  resources to successfully complete the build.
                </li>
                <li className="mt-6">
                  Use an Amazon Linux 2 AMI for compatibility with the provided
                  installation commands.
                </li>
              </ul>
            </li>
            <li className="mt-6">
              <div className="font-bold">Configure Security Group:</div>
              <ul className="list-disc mt-6 ml-4">
                <li>
                  Ensure your EC2 instance is associated with a security group
                  that allows inbound TCP traffic on ports{" "}
                  <span className="italic">
                    {'"'}80{'"'}
                  </span>{" "}
                  and{" "}
                  <span className="italic">
                    {'"'}8080{'"'}
                  </span>{" "}
                  to accommodate web traffic and Socket.io communication.
                </li>
              </ul>
            </li>
            <li className="mt-6">
              <div className="font-bold">EC2 User Data Script:</div>
              <ul className="list-disc mt-6 ml-4">
                <li>
                  Utilize the provided user data script to automate the setup
                  process during the instance initialization. This script
                  performs the following actions:
                </li>
                <ul className="list-decimal mt-6 ml-4">
                  <li>
                    Updates the system and installs necessary packages like Git
                    and Docker.
                  </li>
                  <li className="mt-6">
                    Starts Docker and enables it to start on boot.
                  </li>
                  <li className="mt-6">Installs Docker Compose.</li>
                  <li className="mt-6">
                    Clones the GlobalChat repository and sets up the environment
                    for production..
                  </li>
                  <li className="mt-6">
                    Retrieves the instance’s public IP to configure the
                    Socket.io server URL dynamically.
                  </li>
                  <li className="mt-6">
                    Starts the application using Docker Compose.
                  </li>
                </ul>
                <p className="mt-6">
                  Here is the user data script you will insert when launching
                  the EC2 instance:
                </p>
                {/*  */}
                <div className="flex min-w-full">
                  <p className="px-2.5 flex-grow"></p>
                </div>
                <div className="mt-6 bg-black/90 py-2.5 rounded-md overflow-x-auto border shadow whitespace-nowrap text-white font-mono text-xs /lg:text-sm">
                  <div className="flex min-w-full">
                    <p className="px-2.5 flex-grow">
                      <span className="text-zinc-300/[65%]">#!/bin/bash</span>
                    </p>
                  </div>
                  <br />
                  <div className="flex min-w-full">
                    <p className="px-2.5 flex-grow">
                      <span className="text-zinc-300/[65%]">
                        # Update and install necessary packages
                      </span>
                    </p>
                  </div>
                  <div className="flex min-w-full">
                    <p className="px-2.5 flex-grow">sudo yum update -y</p>
                  </div>
                  <div className="flex min-w-full">
                    <p className="px-2.5 flex-grow">
                      sudo yum install -y git docker
                    </p>
                  </div>
                  <br />
                  <div className="flex min-w-full">
                    <p className="px-2.5 flex-grow">
                      <span className="text-zinc-300/[65%]">
                        # Start Docker and enable it to start on boot
                      </span>
                    </p>
                  </div>
                  <div className="flex min-w-full">
                    <p className="px-2.5 flex-grow">
                      sudo service docker start
                    </p>
                  </div>
                  <div className="flex min-w-full">
                    <p className="px-2.5 flex-grow">
                      sudo systemctl{" "}
                      <span className="text-yellow-500">enable</span> docker
                    </p>
                  </div>
                  <br />
                  <div className="flex min-w-full">
                    <p className="px-2.5 flex-grow">
                      <span className="text-zinc-300/[65%]">
                        # Install Docker Compose
                      </span>
                    </p>
                  </div>
                  <div className="flex min-w-full">
                    <p className="px-2.5 flex-grow">
                      sudo curl -L{" "}
                      <span className="text-green-600">
                        {`"`}
                        https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname
                        -s)-$(uname -m){`"`}
                      </span>{" "}
                      -o /usr/local/bin/docker-compose
                    </p>
                  </div>
                  <div className="flex min-w-full">
                    <p className="px-2.5 flex-grow">
                      sudo <span className="text-yellow-500">chmod</span> +x
                      /usr/local/bin/docker-compose
                    </p>
                  </div>
                  <br />
                  <div className="flex min-w-full">
                    <p className="px-2.5 flex-grow">
                      <span className="text-zinc-300/[65%]">
                        # Clone the repository
                      </span>
                    </p>
                  </div>
                  <div className="flex min-w-full">
                    <p className="px-2.5 flex-grow">
                      git <span className="text-yellow-500">clone</span>{" "}
                      https://github.com/drmatt13/GlobalChat.git
                    </p>
                  </div>
                  <div className="flex min-w-full">
                    <p className="px-2.5 flex-grow">
                      <span className="text-yellow-500">cd</span>{" "}
                      GlobalChat/next-app
                    </p>
                  </div>
                  <br />
                  <div className="flex min-w-full">
                    <p className="px-2.5 flex-grow">
                      <span className="text-zinc-300/[65%]">
                        # Fetch instance metadata
                      </span>
                    </p>
                  </div>
                  <div className="flex min-w-full">
                    <p className="px-2.5 flex-grow">
                      TOKEN=$(curl -X PUT{" "}
                      <span className="text-green-600">
                        {`"`}
                        http://169.254.169.254/latest/api/token{`"`}
                      </span>{" "}
                      -H{" "}
                      <span className="text-green-600">
                        {`"`}
                        X-aws-ec2-metadata-token-ttl-seconds: 21600{`"`}
                      </span>{" "}
                      --silent)
                    </p>
                  </div>
                  <div className="flex min-w-full">
                    <p className="px-2.5 flex-grow">
                      PUBLIC_IP=$(curl -H{" "}
                      <span className="text-green-600">
                        {'"'}X-aws-ec2-metadata-token:{" "}
                        <span className="text-red-600">$TOKEN</span>
                        {'"'}
                      </span>{" "}
                      http://169.254.169.254/latest/meta-data/public-ipv4
                      --silent)
                    </p>
                  </div>
                  <br />
                  <div className="flex min-w-full">
                    <p className="px-2.5 flex-grow">
                      <span className="text-zinc-300/[65%]">
                        # Create production environment variables
                      </span>
                    </p>
                  </div>
                  <div className="flex min-w-full">
                    <p className="px-2.5 flex-grow">
                      <span className="text-yellow-500">echo</span>{" "}
                      <span className="text-green-600">
                        {'"'}
                        NEXT_PUBLIC_SOCKETIO_SERVER_URL=http://$
                        <span className="text-red-600">
                          {"{"}PUBLIC_IP{"}"}
                        </span>
                        :8080{'"'}
                      </span>{" "}
                      {">"} .env.production
                    </p>
                  </div>
                  <br />
                  <div className="flex min-w-full">
                    <p className="px-2.5 flex-grow">
                      <span className="text-zinc-300/[65%]">
                        # Go to the parent directory
                      </span>
                    </p>
                  </div>
                  <div className="flex min-w-full">
                    <p className="px-2.5 flex-grow">
                      <span className="text-yellow-500">cd</span> ..
                    </p>
                  </div>
                  <br />
                  <div className="flex min-w-full">
                    <p className="px-2.5 flex-grow">
                      <span className="text-zinc-300/[65%]">
                        # Start the Docker containers using docker-compose
                      </span>
                    </p>
                  </div>
                  <div className="flex min-w-full">
                    <p className="px-2.5 flex-grow">sudo docker-compose up</p>
                  </div>
                </div>
                <p className="mt-6">
                  Note:{" "}
                  <span className="italic">
                    The entire user data script is also available in the
                    repository for reference.
                  </span>
                </p>
              </ul>
            </li>
            <li className="mt-6">
              <div className="font-bold">Monitoring and Management:</div>
              <ul className="list-disc mt-6 ml-4">
                <li>
                  After deployment, monitor the instance and application logs
                  through the AWS Management Console or using AWS CloudWatch for
                  advanced operational insights.
                </li>
              </ul>
            </li>
          </ul>
          <p className="mt-8 font-bold">Considerations:</p>
          <ul className="list-disc mt-6 ml-6">
            <li>
              For initial testing and rapid iteration, deploying directly to an
              EC2 instance as described allows for quick local testing, commits,
              and builds in AWS. For a production-grade deployment, consider
              using AWS Elastic Container Service (ECS) or Kubernetes via Amazon
              EKS for enhanced scaling, management, and robustness.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
