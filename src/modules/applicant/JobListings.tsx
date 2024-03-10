import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import JobCard from "../recruiter/JobCard";

type Props = {};

const JobListings = (props: Props) => {
  const jobPostings =
    useSelector((state) => {
      return state.jobPositions.jobPositions;
      // console.log(state.jobPositions.jobPositions, "state");
    }) ?? [];
  const navigate = useNavigate();
  return (
    <div className="grid gap-4 md:grid-cols-4 sm:grid-cols-4">
      {jobPostings.map((jobDetails) => {
        return (
          <JobCard
            key={jobDetails.jobId}
            jobData={jobDetails}
            showApplyButton={true}
            // onClick={() => {
            //   navigate(`${jobDetails.title}/apply/${jobDetails.jobId}`);
            // }}
          />
        );
      })}
    </div>
  );
};

export default JobListings;
