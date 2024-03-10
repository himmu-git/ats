import JobCard, { JobCardDetails } from "./JobCard";
import Button from "../shared/Button";
import { useNavigate } from "react-router-dom";
import { jobData } from "../staticData/jobsData";
import { useSelector } from "react-redux";
type Props = {
  jobPosted: JobCardDetails[];
};

const JobPosts = ({}: Props) => {
  // console.log(jobPosted, "check");
  const jobPosted =
    useSelector((state) => {
      return state.jobPositions.jobPositions;
      // console.log(state.jobPositions.jobPositions, "state");
    }) ?? [];
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button
          id="addPosition"
          onClick={() => {
            navigate("/add-position");
          }}
        >
          Add Position
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-4 sm:grid-cols-4">
        {jobPosted.map((jobDetails) => {
          return (
            <JobCard
              key={jobDetails.jobId}
              jobData={jobDetails}
              onClick={() => {
                navigate(`/ats/${jobDetails.jobId}`, {
                  state: { candidateApplied: jobDetails.candidateApplied },
                });
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default JobPosts;
