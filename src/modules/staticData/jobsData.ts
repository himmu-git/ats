import { STAGES } from "../shared/Contants";
export const jobData = [
  {
    "jobId": 101,
    "title": "React.js Developer",
    "experience": "3",
    "location": "in-person",
    "salary": 75,
    "jobDescription": "<p>We are seeking an experienced <strong>React.js Developer</strong> to join our innovative team. The ideal candidate should have a strong understanding of modern front-end development techniques and be passionate about building exceptional user experiences.</p><p>Responsibilities:</p><ul><li>Design and develop reusable React components and libraries</li><li>Implement responsive and interactive user interfaces using React, Redux, and related libraries</li><li>Integrate front-end components with RESTful APIs and backend services</li><li>Optimize application performance and ensure cross-browser compatibility</li><li>Collaborate with designers, developers, and stakeholders throughout the development lifecycle</li></ul><p>Requirements:</p><ul><li>Proficient in React.js, Redux, and related technologies (React Router, Webpack, etc.)</li><li>Experience with JavaScript (ES6+), HTML5, and CSS3</li><li>Familiarity with server-side rendering techniques (e.g., Next.js, Gatsby)</li><li>Understanding of responsive design principles and cross-browser compatibility</li><li>Knowledge of testing frameworks (e.g., Jest, Enzyme)</li><li>Strong problem-solving and debugging skills</li></ul>",
    "docsNeeded": [
      {
        "docId": 21,
        "dataLabel": "Name",
        "dataValue": "name",
        "isChecked": true
      },
      {
        "docId": 31,
        "dataLabel": "E-mail",
        "dataValue": "email",
        "isChecked": true
      },
      {
        "docId": 41,
        "dataLabel": "Phone Number",
        "dataValue": "phno",
        "isChecked": true
      },
      {
        "docId": 42,
        "dataValue": "linkdenurl",
        "dataLabel": "Linkden Url",
        "isChecked": false
      },
      {
        "docId": 51,
        "dataValue": "currentcmp",
        "dataLabel": "Current Company",
        "isChecked": false
      }
    ],
    "candidateApplied": [
      {
        "cid": 21,
        "name": "John Doe",
        "appliedFor": [
          {
            "jobid": 101
          }
        ],
        "currentStage": STAGES.APPLIED,
        "email": "john.doe@example.com"
      },
      {
        "cid": 22,
        "name": "Jane Smith",
        "appliedFor": [
          {
            "jobid": 101
          }
        ],
        "currentStage": STAGES.INTERVIEWED,
        "email": "janesmith@example.net"
      },
      {
        "cid": 23,
        "name": "Michael Johnson",
        "appliedFor": [
          {
            "jobid": 101
          }
        ],
        "currentStage": STAGES.ASSESSED,
        "email": "mjohnson@example.org"
      }
    ]
  },
  {
    jobId: 102,
    title: "Full Stack Developer",
    experience: "5",
    location: "in-person",
    salary: 80,
    jobDescription:
      "<p>We are seeking a skilled <strong>Full Stack Developer</strong> to join our dynamic team. The ideal candidate should have a strong understanding of both front-end and back-end technologies and be able to build robust and scalable web applications.</p><p>Responsibilities:</p><ul><li>Design and develop responsive user interfaces using modern frameworks like React or Angular</li><li>Build and maintain RESTful APIs using Node.js or Python</li><li>Implement secure and efficient database solutions using MongoDB or PostgreSQL</li><li>Collaborate with cross-functional teams to deliver high-quality products</li></ul>",
    docsNeeded: [
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
    candidateApplied: [
      {
        cid: 21,
        name: "John Doe",
        appliedFor: [
          {
            jobid: 102,
          },
        ],
        currentStage: STAGES.APPLIED,
        email: "john.doe@example.com",
      },
      {
        cid: 22,
        name: "Jane Smith",
        appliedFor: [
          {
            jobid: 102,
          },
        ],
        currentStage: STAGES.INTERVIEWED,
        email: "janesmith@example.net",
      },
      {
        cid: 23,
        name: "Michael Johnson",
        appliedFor: [
          {
            jobid: 102,
          },
        ],
        currentStage: STAGES.REJECTED,
        email: "mjohnson@example.org",
      },
    ],
  },
];
