import { STAGES } from "../ats/ATSPage";

export const jobData = [{
    "jobId" : 101,
    "title": "React Js",
    "experience": "3",
    "location": "in-person",
    "salary": 10,
    "jobDescription": "<p><span style=\"color: rgb(81, 86, 94);\">businesses make informed decisions. With the advent of big data, the demand for skilled&nbsp;</span><a href=\"https://www.simplilearn.com/tutorials/data-analytics-tutorial/how-to-become-a-data-analyst\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(17, 121, 239);\">data analysts</a><span style=\"color: rgb(81, 86, 94);\">&nbsp;has surged across various industries. Here's a detailed exploration of the data analyst job, including what data analysis entails, the role of a data analyst, their importance in today's data-driven world, and what skills are required for data analysts.</span></p>",
    "docsNeeded":  [
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
    ],
    candidateApplied : [
      {
        cid: 11,
        name: "Aman",
        appliedFor: [{ jobid: 1 }],
        currentStage: STAGES.APPLIED,
        email: "amana@g.com",
      },
      {
        cid: 12,
        name: "Aman1",
        appliedFor: [{ jobid: 1 }],
        currentStage: STAGES.HIRED,
        email: "amana@g.com",
      },
      {
        cid: 13,
        name: "Aman2",
        appliedFor: [{ jobid: 1 }],
        currentStage: STAGES.APPLIED,
        email: "amana@g.com",
      },
      {
        cid: 14,
        name: "Aman2",
        appliedFor: [{ jobid: 1 }],
        currentStage: STAGES.INTERVIEWED,
        email: "amana@g.com",
      },
      {
        cid: 15,
        name: "Aman2",
        appliedFor: [{ jobid: 1 }],
        currentStage: STAGES.ASSESSED,
        email: "amana@g.com",
      },
    ]
}]