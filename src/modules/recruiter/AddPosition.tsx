import { useReducer } from "react";
import Input from "../shared/Input";
import Radio from "../shared/Radio";
import CheckBox from "../shared/CheckBox";
import Button from "../shared/Button";
import RichTextEditorWrapper from "../shared/RichTextEditor";
import { useDispatch } from "react-redux";
import { addPosition } from "../../store/slices/jobpostslice";
import { useNavigate } from "react-router-dom";
import dataNeeded from "../staticData/docsNeeded";
import reducer from "../reducer/addPositionReducer";
import { getRandomInt } from "../shared/util";

type Props = {};
const initialArg = {
  title: "",
  experience: 0,
  location: "in-person",
  salary: 10,
  jobDescription: "",
  docsNeeded: dataNeeded,
};

const AddPosition = (props: Props) => {
  const radioOptions = [
    {
      id: "remote",
      value: "remote",
      name: "mode",
      label: "Remote",
      isChecked: true,
    },
    {
      id: "in-person",
      value: "in-person",
      name: "mode",
      label: "In - Person",
      isChecked: false,
    },
  ];

  const [state, dispatch] = useReducer(reducer, initialArg);
  const dispatchRedux = useDispatch();
  const navigation = useNavigate();
  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        dispatchRedux(
          addPosition({ ...state, jobId: getRandomInt(), candidateApplied: [] })
        );
        navigation("/job-posts");
      }}
    >
      <Input
        id="job-title"
        labelTxt={"Job Title"}
        placeholder={"Enter Job Title"}
        onChange={(e) => {
          dispatch({ type: "UPDATE_TITLE", value: e.target.value });
        }}
        errorMsg={"Job title is required"}
      />
      <Input
        id="job-experience"
        labelTxt={"Experience"}
        placeholder={"Enter Experience"}
        onChange={(e) => {
          dispatch({ type: "UPDATE_EXPERIENCE", value: e.target.value });
        }}
        pattern="^\d{1,2}$"
        type="number"
        errorMsg="Please enter a valid number."
      />
      <div className="flex gap-4">
        <div className="text-blue-950 w-[30%] text-xl font-normal leading-5	text-left">
          Location
        </div>
        <Radio
          id="job-location"
          labelTxt={"Location"}
          radiosData={radioOptions}
          onChange={(e) => {
            dispatch({ type: "UPDATE_LOCATION", value: e.target.value });
          }}
        />
      </div>
      <Input
        id="salary"
        labelTxt={"Salary"}
        placeholder={"Enter Salary"}
        pattern="^\d+(,\d{3})*(\.\d+)? [A-Z]{3}$"
        errorMsg="Please enter a valid salary. (10 LPA)"
      />
      <div className="flex gap-4">
        <div className="text-blue-950 w-[30%] text-xl font-normal leading-5	text-left">
          Job Description
        </div>
        <RichTextEditorWrapper
          className={"w-[30%]"}
          onChange={(output) => {
            dispatch({
              type: "UPDATE_JD",
              value: output,
            });
          }}
        />
      </div>
      <div className="flex gap-4">
        <div className="text-blue-950 w-[30%] text-xl font-normal leading-5	text-left">
          Data Needed
        </div>
        <div className="grid gap-4">
          {dataNeeded.map((docs) => {
            return (
              <CheckBox
                key={docs?.id}
                className={"flex gap-2"}
                id="job-location"
                name={docs?.dataValue}
                label={docs?.dataLabel}
                onChange={(e) => {
                  docs.isChecked = !docs.isChecked;
                  dispatch({
                    type: "UPDATE_DOCS_REQ",
                    value: docs,
                  });
                }}
              />
            );
          })}
        </div>
      </div>
      <div>
        <Button type={"submit"}>Submit</Button>
      </div>
    </form>
  );
};

export default AddPosition;
