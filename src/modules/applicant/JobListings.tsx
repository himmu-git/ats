import { useSelector } from "react-redux";
import JobCard from "../recruiter/JobCard";

type Props = {};

const JobListings = (props: Props) => {
  const jobPostings =
    useSelector((state) => {
      return state.jobPositions.jobPositions;
    }) ?? [];
  return (
    <div className="grid gap-4 md:grid-cols-4 sm:grid-cols-4">
      {jobPostings.map((jobDetails) => {
        return (
          <JobCard
            key={jobDetails.jobId}
            jobData={jobDetails}
            showApplyButton={true}
          />
        );
      })}
    </div>
  );
};

export default JobListings;
