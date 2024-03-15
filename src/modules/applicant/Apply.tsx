import React, { useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import RichTextEditorWrapper from "../shared/RichTextEditor";
import Input from "../shared/Input";
import Button from "../shared/Button";
import { applyToJob } from "../../store/slices/jobpostslice";
import { getRandomInt } from "../shared/util";
import reducer from "../reducer/applyReducer";
import { STAGES } from "../shared/Contants";

type Props = {};

const intialState = {
  richTxtArea: "",
  name: "",
  email: "",
  phoneNo: "",
  linkdenUrl: "",
  currentcmp: "",
};
const Apply = (props: Props) => {
  const { jobid } = useParams();
  const navigate = useNavigate();
  const dispatchRedux = useDispatch();
  const jobPostings =
    useSelector((state) => {
      return state.jobPositions.jobPositions;
    }) ?? [];
  const jobDetails =
    useSelector((state) => {
      const jobDetails = state.jobPositions.jobPositions.find((jobs) => {
        return jobs.jobId == jobid;
      });
      return jobDetails;
    }) ?? [];
  const { title, docsNeeded } = jobDetails;
  const [state, dispatch] = useReducer(reducer, intialState);
  [
    {
      docId: 21,
      dataLabel: "Name",
      dataValue: "name",
      isChecked: true,
    },
    {
      docId: 31,
      dataLabel: "E-mail",
      dataValue: "email",
      isChecked: true,
    },
    {
      docId: 41,
      dataLabel: "Phone Number",
      dataValue: "phno",
      isChecked: true,
    },
    {
      docId: 42,
      dataValue: "linkdenurl",
      dataLabel: "Linkden Url",
      isChecked: false,
    },
    {
      docId: 51,
      dataValue: "currentcmp",
      dataLabel: "Current Company",
      isChecked: false,
    },
  ];
  const LABEL_MAP_DOC = {
    name: "UPDATE_NAME",
    email: "UPDATE_EMAIL",
    richTxtArea: "UPDATE_RICH_TXT",
    phno: "UPDATE_PHNO",
    linkdenUrl: "UPDATE_LINKDEN_URL",
    currentcmp: "UPDATE_CURRENT_CMP",
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    let jobDetailsCopy = [...jobPostings];
    const found =
      jobDetailsCopy?.find((job) => {
        return job.jobId == jobid;
      }) ?? {};
    let foundObj = { ...found };
    foundObj.candidateApplied = [
      ...found.candidateApplied,
      {
        ...state,
        cid: getRandomInt(1001, 10000),
        appliedFor: [{ jobid: jobid }],
        currentStage: STAGES.APPLIED,
      },
    ];
    jobDetailsCopy = jobDetailsCopy.map((jobs) => {
      if (jobs.jobId == jobid) {
        return foundObj;
      }
      return jobs;
    });

    dispatchRedux(applyToJob(jobDetailsCopy));
    navigate("/");
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <h1 className="text-bold text-3xl text-left py-5">{title}</h1>
      <div>
        <div className="w-[60%] my-5">
          <RichTextEditorWrapper
            onChange={(output) => {
              dispatch({
                key: "UPDATE_RICH_TXT",
                payload: output,
              });
            }}
          />
        </div>
        <div className="grid gap-4">
          {docsNeeded.map((docs) => {
            if (!docs.isChecked) return;
            return (
              <Input
                type={docs.dataValue == "email" ? "email" : "text"}
                key={docs.docId}
                id={docs.id}
                placeholder={docs.dataLabel}
                labelTxt={docs.dataLabel}
                onChange={(e) => {
                  dispatch({
                    key: LABEL_MAP_DOC[docs.dataValue],
                    payload: e.target.value,
                  });
                }}
              />
            );
          })}
        </div>
      </div>
      <Button type="submit">Apply</Button>
    </form>
  );
};

export default Apply;
