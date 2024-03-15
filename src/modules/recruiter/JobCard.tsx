import Button from "../shared/Button";
import { useNavigate } from "react-router-dom";

export type JobCardDetails = {
  jobId: number;
  title: string;
  jobDescription: string;
};
type JobCardProps = {
  jobData: JobCardDetails;
  onClick: any;
};
const JobCard = ({ jobData, onClick, showApplyButton }: JobCardProps) => {
  const { jobId, title, jobDescription }: JobCardDetails = jobData;
  const navigate = useNavigate();
  return (
    <div className="card cursor-pointer" onClick={onClick}>
      <h3 className="text-2xl py-2 line-clamp-2">{title}</h3>
      <p
        className="line-clamp-6"
        dangerouslySetInnerHTML={{
          __html: jobDescription,
        }}
      ></p>
      {showApplyButton && (
        <Button
          onClick={() => {
            navigate(
              `/${jobData.title.replace(" ", "-").toLocaleLowerCase()}/apply/${
                jobData.jobId
              }`
            );
          }}
        >
          {" "}
          Apply
        </Button>
      )}
    </div>
  );
};

export default JobCard;
