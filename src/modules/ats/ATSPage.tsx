import React, { useState } from "react";
import CandidateCard from "./CandidateCard";
import DropContainer from "./DropContainer";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { STAGES } from "../shared/Contants";
type Props = {};

const STAGES_OF_CANDIDATE = [
  {
    id: "applied",
    key: STAGES.APPLIED,
    label: "Applied",
  },
  {
    id: "assessed",
    key: STAGES.ASSESSED,
    label: "Assessed",
  },
  {
    id: "interviewed",
    key: STAGES.INTERVIEWED,
    label: "Interviewed",
  },
  {
    id: "hired",
    key: STAGES.HIRED,
    label: "Hired",
  },
  {
    id: "rejected",
    key: STAGES.REJECTED,
    label: "Rejected",
  },
];

const ATSPage = (props: Props) => {
  const { jobid } = useParams();
  const candidateListDefault =
    useSelector((state) => {
      const jobDetails = state.jobPositions.jobPositions.find((jobs) => {
        return jobs.jobId == jobid;
      });
      return jobDetails?.candidateApplied ?? [];
    }) ?? [];
  const [candidateList, setCandidateList] = useState(
    [...candidateListDefault] ?? []
  );
  const handleOnDrop = (item, droppedTo) => {
    const { cid } = item;
    const { id: droppedKey } = droppedTo;
    setCandidateList((prev) => {
      return prev.map((candidate) => {
        const candidateCopy = { ...candidate };
        if (candidateCopy.cid == cid) {
          candidateCopy.currentStage = droppedKey;
        }
        return candidateCopy;
      });
    });
  };
  return (
    <div>
      <h1 className="text-bold text-3xl text-center py-5">
        Application Tracking Page
      </h1>
      <div className="board grid md:grid-cols-5 gap-5 py-4  sm:grid-cols-3">
        {STAGES_OF_CANDIDATE.map((stages) => {
          const { id, key, label } = stages;
          return (
            <div key={key} id={id} className="card border-blue-50 border-[2px]">
              <h3 className="text-center">{label}</h3>
              <DropContainer id={id} key={id}>
                {candidateList
                  .filter((candidate) => {
                    return candidate.currentStage == key;
                  })
                  .map((candidate) => {
                    const { cid } = candidate;
                    return (
                      <CandidateCard
                        key={cid}
                        candidateData={candidate}
                        onDrop={handleOnDrop}
                      />
                    );
                  })}
              </DropContainer>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ATSPage;
