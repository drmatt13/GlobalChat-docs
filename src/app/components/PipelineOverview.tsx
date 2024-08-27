"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";

const PipelineOverview = () => {
  const [pipelineOverview, setPipelineOverview] = useState<
    "PullRequest" | "Webhook"
  >("PullRequest");

  return (
    <>
      <h2 className="text-md lg:text-xl mt-12 mb-8 md:mt-14 md:mb-10 font-bold text-center">
        CI/CD Pipeline Overview
      </h2>
      <div className="max-w-[90vw] w-full text-sm lg:text-md">
        <p>
          A CI/CD pipeline is a series of automated steps that streamline a
          software team's capacity to deliver code more quickly, safely, and
          reliably. CI/CD, which stands for continuous integration and
          continuous deployment, simplifies the process of integrating code
          changes, testing them to ensure quality, and incrementally deploying
          them into production. This practice is vital to modern software
          development, ensuring updates are consistently validated and deployed
          with minimal risk.
        </p>
      </div>
      {/* IMAGE START */}
      <div
        className="cursor-pointer bg-white mt-10"
        onClick={() => window.open("/6-1.drawio.svg")}
      >
        <img
          className="mx-auto h-64"
          src="/6-1.drawio.svg"
          alt="6-1.drawio.svg"
        />
      </div>
      <div className="mt-6 italic text-xs 2xl:text-sm text-center">
        ^ click to expand
      </div>
      {/* IMAGE END */}
      <div className="max-w-[90vw] w-full text-sm lg:text-md">
        <p className="pt-8">
          CI/CD pipelines orchestrate the software development lifecycle by
          establishing a continuous loop that ensures software remains stable,
          reliable, and up-to-date. It begins by replicating the production
          environment, where developers can safely work on creating new
          features, making updates, or fixing bugs. These features are then
          rigorously tested to ensure they don’t introduce issues or break the
          existing codebase. Once verified, the tested code is moved to a
          staging environment where those changes are then deployed to
          production, continuing the cycle.
        </p>
        <p className="pt-6">
          In software development, CI/CD pipelines rely on Git, a distributed
          version control system that helps manage changes to files across
          different repositories. Developers use Git to keep track of code
          changes and collaborate on projects. With Git, they can create
          branches, which are separate versions of the code where they can work
          on new features or fixes without affecting the main version. Once
          their work is done, they can merge these changes back into the main
          branch. This system also allows developers to sync their local code
          with updates from online repositories, ensuring everyone is working
          with the latest version.
        </p>
      </div>
      {/* IMAGE START */}
      <div
        className="cursor-pointer bg-white mt-12 md:mt-14"
        onClick={() => window.open("/6-2.drawio.svg")}
      >
        <img className="mx-auto" src="/6-2.drawio.svg" alt="6-2.drawio.svg" />
      </div>
      <div className="mt-6 italic text-xs 2xl:text-sm text-center">
        ^ click to expand
      </div>
      {/* IMAGE END */}
      <div className="max-w-[90vw] w-full text-sm lg:text-md">
        <p className="pt-8">
          The diagram above illustrates how code changes can propagate through
          various CI/CD stages in a Git-based workflow, depicting how updates
          transition through through each branch and stage of the development
          cycle. It visualizes the progression of code from production to
          feature creation, through testing and staging, and finally back to
          production, highlighting the seamless integration and deployment of
          changes. This repeating flow represents software development's
          ongoing, iterative nature, where code constantly evolves and improves
          through a well-orchestrated process, ensuring stability and
          consistency across all stages.
        </p>
        <p className="pt-6">
          When working with Git, two critical components, pull requests and
          webhooks, are essential for facilitating collaboration and automation
          within a CI/CD pipeline. Pull requests serve as a formal mechanism for
          proposing changes from one branch to another, allowing team members,
          such as peers or technical leads, to review and discuss these changes
          before they are integrated. This review process is crucial as it
          ensures that every update is thoroughly vetted, maintaining the
          integrity and stability of the codebase. Webhooks, on the other hand,
          are vital for automating a pipeline's operations. They enable
          repositories to trigger specific events and communicate with external
          systems whenever actions like new commits or pull requests occur. By
          leveraging pull requests and webhooks, teams can enhance their CI/CD
          workflows, ensuring that code changes are both rigorously reviewed and
          seamlessly integrated into the development lifecycle.
        </p>
      </div>
      {/* IMAGE START */}
      <div
        className="cursor-pointer bg-white mt-12 md:mt-14 w-full"
        onClick={() =>
          window.open(
            `/${
              pipelineOverview === "PullRequest" ? "PullRequest" : "WebHook"
            }.drawio.svg`
          )
        }
      >
        <img
          className="mx-auto w-full max-w-[46rem]"
          src={`/${
            pipelineOverview === "PullRequest" ? "PullRequest" : "WebHook"
          }.drawio.svg`}
          alt={`${
            pipelineOverview === "PullRequest" ? "PullRequest" : "WebHook"
          }.drawio.svg`}
        />
      </div>
      <div className="mt-6 italic text-xs 2xl:text-sm text-center">
        ^ click to expand
      </div>
      {/* IMAGE END */}
      <div className="flex w-full justify-center space-x-2.5">
        <button
          onClick={() => setPipelineOverview("PullRequest")}
          className={`${
            pipelineOverview === "PullRequest"
              ? "bg-blue-500 text-center text-white /cursor-not-allowed"
              : "bg-gray-400 text-center text-white hover:bg-blue-400 cursor-pointer"
          } mt-8 py-2.5 px-2.5 text-xs rounded-md w-32`}
        >
          Pull Request
        </button>
        <button
          onClick={() => setPipelineOverview("Webhook")}
          className={`${
            pipelineOverview === "Webhook"
              ? "bg-blue-500 text-center text-white /cursor-not-allowed"
              : "bg-gray-400 text-center text-white hover:bg-blue-400 cursor-pointer"
          } mt-8 py-2.5 px-2.5 text-xs rounded-md w-32`}
        >
          Webhooks
        </button>
      </div>
      <div className="max-w-[90vw] w-full text-sm lg:text-md">
        <p className="pt-8">
          Effective management of code repositories in Git often requires
          implementing controls to ensure code quality and security. Various Git
          hosting platforms, such as GitHub, GitLab, and Bitbucket, are widely
          used for this purpose and offer branch protection settings that allow
          you to configure who can create branches, push changes, approve pull
          requests, enforce status checks, and prevent force pushes or branch
          deletions. These protections are crucial for safeguarding critical
          branches, like the main or production branch, from unintended or
          unauthorized changes.
        </p>
      </div>
    </>
  );
};

export default PipelineOverview;
