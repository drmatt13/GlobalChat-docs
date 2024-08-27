"use client";

import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */

const PipelineImplementation = () => {
  const [pipelineState, setPipelineState] = useState<1 | 2 | 3>(1);

  return (
    <>
      <h2 className="text-md lg:text-xl mt-12 mb-8 md:mt-14 md:mb-10 font-bold text-center">
        CI/CD Pipeline Implementation
      </h2>
      <div className="max-w-[90vw] w-full text-sm lg:text-md">
        <p>
          With our application's architecture designed and a theoretical team
          actively being assembled, any project manager would then be expected
          to plan the best way to jumpstart and initialize their team's efforts.
          The next logical step in successfully launching a proactive
          development cycle that works seamlessly across a project team would be
          first to establish and standardize the CI/CD pipeline structure and
          testing processes. This would ensure that everyone follows the same
          process for integrating and deploying code while preventing
          inconsistencies and, most importantly, safeguarding the production
          environment—a critical concern for all software systems.
        </p>
      </div>
      <div className="max-w-[90vw] w-full text-sm lg:text-md">
        <p className="mt-6">
          As we establish the CI/CD pipeline structure, it’s crucial to
          implement strict controls and integrate the principles of Test-Driven
          Development (TDD) and Continuous Integration (CI) to maintain the
          integrity of the development process. Developers should be restricted
          from pushing updates directly to any branch other than their feature
          branches, which serve as isolated environments for safely developing
          new features or fixes, including UI changes. Following TDD practices,
          developers create corresponding tests as they develop new features.
          Those tests would then be added to the whole test suite, ensuring
          continuous validation of the entire codebase against all features.
        </p>
        <p className="mt-6">
          Once their work is complete, developers would then submit a pull
          request to merge their changes into the testing branch. This pull
          request should require manual approval, ensuring only thoroughly
          reviewed and tested code progresses. Upon approval, the testing branch
          triggers a webhook to an automation server, such as Jenkins, GitHub
          Actions, or AWS CodeBuild, which runs a comprehensive series of tests
          on the code. If the tests pass, the automation server, equipped with
          the necessary credentials, merges the testing branch into the staging
          branch.
        </p>
        <p className="mt-6">
          To maintain the integrity of the CI process, developers must regularly
          pull the updated codebase, integrate it with their work, and add their
          tests for the features they are developing. This continuous
          accumulation of tests ensures that new and existing features stay
          intact as the codebase evolves, with different developers
          contributing. It is crucial for team members who have the authority to
          approve pull requests to avoid doing so if the automation server
          currently uses the testing branch, preventing potential conflicts.
        </p>
        <p className="mt-6">
          If any tests fail during this process, the automation server should
          automatically roll back the testing branch to its previous state in
          the development branch, preserving the stability of the testing
          environment. After the production branch is updated, the development
          branch should be synced with these changes, and developers should
          integrate the new base into their feature branches. The pipeline
          consistently adds and runs tests to ensure that features remain stable
          across many iterations and interactions, even as the codebase grows
          and evolves.
        </p>
      </div>
      {/* IMAGE START */}
      <div
        className="cursor-pointer bg-white mt-12 md:mt-14"
        onClick={() => window.open(`/6-${pipelineState + 2}.drawio.svg`)}
      >
        {pipelineState < 3 ? (
          <img
            className="mx-auto "
            src={`/6-${pipelineState + 2}.drawio.svg`}
            alt={`6-${pipelineState + 2}.drawio.svg`}
          />
        ) : (
          <img
            className="mx-auto "
            src={`/7.drawio.svg`}
            alt={`7.drawio.svg`}
          />
        )}
      </div>
      <div className="mt-6 italic text-xs 2xl:text-sm text-center">
        ^ click to expand
      </div>
      {/* IMAGE END */}
      <div className="flex w-full justify-center space-x-2.5">
        <button
          onClick={() => setPipelineState(1)}
          className={`${
            pipelineState === 1
              ? "bg-blue-500 text-center text-white /cursor-not-allowed"
              : "bg-gray-400 text-center text-white hover:bg-blue-400 cursor-pointer"
          } mt-8 py-2.5 px-2.5 text-xs rounded-md w-32`}
        >
          Successful Test
        </button>
        <button
          onClick={() => setPipelineState(3)}
          className={`${
            pipelineState === 3
              ? "bg-orange-400 text-center text-white /cursor-not-allowed"
              : "bg-gray-400 text-center text-white hover:bg-orange-300 cursor-pointer"
          } mt-8 py-2.5 px-2.5 text-xs rounded-md w-32`}
        >
          Hot Fix
        </button>
        <button
          onClick={() => setPipelineState(2)}
          className={`${
            pipelineState === 2
              ? "bg-red-500 text-center text-white /cursor-not-allowed"
              : "bg-gray-400 text-center text-white hover:bg-red-400 cursor-pointer"
          } mt-8 py-2.5 px-2.5 text-xs rounded-md w-32`}
        >
          Failed Test
        </button>
      </div>
      <div
        className={`${
          pipelineState === 1 && "bg-blue-100/50 border-blue-400"
        } ${pipelineState === 2 && "bg-red-100/50 border-red-400"}
    ${
      pipelineState === 3 && "bg-orange-100/50 border-orange-400"
    } transition-all duration-150 ease-in mt-8 py-6 px-6 rounded-md border max-w-[90vw] w-full text-sm lg:text-md`}
      >
        {pipelineState === 1 && (
          <>
            <p>
              ^ The diagram above illustrates the process of creating a new
              feature branch, pushing updates to that branch, and then merging
              those updates back up through the testing and staging branches
              until they reach production. After the production branch is
              updated, the development branch fetches the latest changes from
              production. Subsequently, all developers working on feature
              branches pull these updates into their respective branches,
              ensuring their ongoing work is in sync with the most current
              codebase version.
            </p>
          </>
        )}
        {pipelineState === 3 && (
          <>
            <p>
              ^ The diagram above illustrates a more complex workflow, including
              the integration of hotfixes. When a feature branch is completed,
              it goes through the testing and staging branches before being
              merged into production. Once this happens, the development branch
              fetches the latest updates from production. Developers working on
              feature branches then pull these updates into their respective
              branches to ensure their work is in sync with the current
              codebase.
            </p>
            <p className="mt-6">
              In the event of a critical issue, a hotfix branch is created to
              address the problem directly in production. After the hotfix is
              applied, it is merged into the development branch. Developers
              working on feature branches must also pull these hotfix updates
              into their branches. This process ensures that all ongoing
              development incorporates the latest features and any urgent fixes,
              maintaining the stability and functionality of the codebase across
              all branches.
            </p>
          </>
        )}
        {pipelineState === 2 && (
          <>
            <p>
              ^ The diagram above illustrates a scenario where a test initially
              passes, allowing the update to move successfully through staging
              and into production. Once this happens, developers working on
              feature branches pull these updates into their respective branches
              to ensure their work is aligned with the latest production code.
            </p>
            <p className="mt-6">
              Later, as another update is made in a feature branch, a pull
              request is submitted to merge this update into the testing branch.
              However, during the testing phase, the update fails the automated
              tests. When this happens, the automation server triggers an
              automatic rollback of the testing branch to the previous stable
              state, which is aligned with the current state of the development
              branch. This rollback is crucial as it preserves the stability of
              the testing environment, ensuring that only successfully tested
              code progresses through the CI/CD pipeline. Developers can then
              address the issues identified in the failed test before attempting
              to merge the update again.
            </p>
          </>
        )}
      </div>
      <div className="max-w-[90vw] w-full text-sm lg:text-md">
        <p className="mt-8">
          As we establish the CI/CD pipeline structure, it’s crucial to
          implement strict controls and integrate the principles of Test-Driven
          Development (TDD) and Continuous Integration (CI) to maintain the
          integrity of the development process. Developers maintain the
          integrity of the development process. Developers
        </p>{" "}
        <p className="mt-6">
          As we establish the CI/CD pipeline structure, it’s crucial to
          implement strict controls and integrate the principles of Test-Driven
          Development (TDD) and Continuous Integration (CI) to maintain the
          integrity of the development process. Developers maintain the
          integrity of the development process. Developers
        </p>
      </div>
      {/* IMAGE START */}
      <div
        className="cursor-pointer bg-white mt-10 md:mt-12"
        onClick={() => window.open(`/7.drawio.svg`)}
      >
        <img className="mx-auto" src={`/7.drawio.svg`} alt={`7.drawio.svg`} />
      </div>
      <div className="mt-2 italic text-xs 2xl:text-sm text-center">
        ^ click to expand
      </div>
      {/* IMAGE END */}
      <div className="max-w-[90vw] w-full text-sm lg:text-md">
        <p className="mt-8">
          As we establish the CI/CD pipeline structure, it’s crucial to
          implement strict controls and integrate the principles of Test-Driven
          Development (TDD) and Continuous Integration (CI) to maintain the
          integrity of the development process. Developers maintain the
          integrity of the development process. Developers
        </p>
        <p className="mt-6">
          As we establish the CI/CD pipeline structure, it’s crucial to
          implement strict controls and integrate the principles of Test-Driven
          Development (TDD) and Continuous Integration (CI) to maintain the
          integrity of the development process. Developers maintain the
          integrity of the development process. Developers
        </p>
      </div>
    </>
  );
};

export default PipelineImplementation;
