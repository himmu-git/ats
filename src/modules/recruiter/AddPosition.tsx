import React, { useEffect, useReducer } from "react";
import Input from "../shared/Input";
import Radio from "../shared/Radio";
import CheckBox from "../shared/CheckBox";
import Button from "../shared/Button";
import RichTextEditorWrapper from "../shared/RichTextEditor";
import { useDispatch } from "react-redux";
import { addPosition } from "../../store/slices/jobpostslice";
import { useNavigate } from "react-router-dom";
const dataNeeded = [
  {
    docId: 21,
    dataLabel: "Name",
    dataValue: "name",
    isChecked: false,
  },
  {
    docId: 31,
    dataLabel: "E-mail",
    dataValue: "email",
    isChecked: false,
  },
  {
    docId: 41,
    dataLabel: "Phone Number",
    dataValue: "phno",
    isChecked: false,
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
export function getRandomInt(min = 105, max = 10000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reducer(state: any, action: any) {
  switch (action.type) {
    case "UPDATE_TITLE":
      return { ...state, title: action.value };
    case "UPDATE_EXPERIENCE":
      return { ...state, experience: action.value };
    case "UPDATE_LOCATION":
      return { ...state, location: action.value };
    case "UPDATE_SALARY":
      return { ...state, salary: action.value };
    case "UPDATE_JD":
      return { ...state, jobDescription: action.value };
    case "UPDATE_DOCS_REQ":
      // eslint-disable-next-line no-case-declarations
      let docsArr = [...state.docsNeeded];
      docsArr = docsArr.map((doc) => {
        if (doc.docId == action.value.docId) {
          doc.isChecked = action.value.isChecked;
        }
        return doc;
      });
      return { ...state, docsNeeded: docsArr };
    default:
      return;
  }
}
type Props = {};
const initialArg = {
  title: "",
  experience: 0,
  location: "",
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
        // console.log("submitted", state);
      }}
    >
      <Input
        id="job-title"
        labelTxt={"Job Title"}
        placeholder={"Enter Job Title"}
        onChange={(e) => {
          dispatch({ type: "UPDATE_TITLE", value: e.target.value });
        }}
      />
      <Input
        id="job-experience"
        labelTxt={"Experience"}
        placeholder={"Enter Experience"}
        onChange={(e) => {
          dispatch({ type: "UPDATE_EXPERIENCE", value: e.target.value });
        }}
        type="number"
      />
      <div className="flex gap-4">
        <div className="text-blue-950 w-[30%] text-xl font-normal leading-5	text-left">
          Location
        </div>
        <Radio
          //   type={"radio"}
          id="job-location"
          labelTxt={"Location"}
          //   placeholder={""}
          radiosData={radioOptions}
          onChange={(e) => {
            dispatch({ type: "UPDATE_LOCATION", value: e.target.value });
          }}
        />
      </div>
      <Input id="salary" labelTxt={"Salary"} placeholder={"Enter Salary"} />
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
                // isChecked={docs.isChecked}
                // value={docs?.dataValue}
                label={docs?.dataLabel}
                onChange={(e) => {
                  docs.isChecked = !docs.isChecked;
                  // if (docs.isChecked) {
                  dispatch({
                    type: "UPDATE_DOCS_REQ",
                    value: docs,
                  });
                  // }
                  // console.log(e.target.name, docs);
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
