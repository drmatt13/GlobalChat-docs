// components
import Introduction from "./components/Introduction";
import AwsServerlessArchitectureDesign from "./components/AwsServerlessArchitectureDesign";
import ProjectHierarchy from "./components/ProjectHierarchy";
import PipelineOverview from "./components/PipelineOverview";
import PipelineImplementation from "./components/PipelineImplementation";
import DevelopmentExploration from "./components/DevelopmentExploration";

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col items-center pt-12 lg:pt-16 pb-10 md:pb-12 px-6 sm:px-10 text-sm sm:text-base">
        <Introduction />
        <AwsServerlessArchitectureDesign />
        <ProjectHierarchy />
        <PipelineOverview />
        <PipelineImplementation />
        <DevelopmentExploration />
        {/* Security Measures */}
        {/* Monitoring and Operations */}
        {/* Conclusion */}
      </div>
    </>
  );
}
