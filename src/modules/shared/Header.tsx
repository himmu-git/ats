import React from "react";
import { Link, useParams } from "react-router-dom";

type Props = {
  isUserPages: boolean;
};

export default function Header({ isUserPages }: Props) {
  const { userid, jobid } = useParams() ?? {};
  //   console.log(userid, jobid, "here");
  const navigationBarList = [
    {
      href: "/",
      label: "Home",
    },
    // {
    //   href: "/apply",
    //   label: "Apply",
    // },
    {
      href: "/job-posts",
      label: "Job Posts",
    },
    // {
    //   href: "/ats",
    //   label: "Application Tracking",
    // },
  ];
  const navigationBarListForUser = [
    {
      href: `/user${userid ? `/${userid}` : ""}`,
      label: "Home",
      isRouteAvailable: true,
    },
    {
      href: "/user/job-opening",
      label: "Job Openings",
      isRouteAvailable: true,
    },
    {
      href: "/user/:userid/apply/:jobid",
      label: "Apply to Job",
      isRouteAvailable: !!userid && !!jobid,
    },
  ];
  const navigationList = isUserPages
    ? navigationBarListForUser
    : navigationBarList;

  return (
    <nav>
      <ul className="flex gap-4 pl-8 pr-8 pt-4 pb-4">
        {navigationList.map(({ href, label, isRouteAvailable = true }) => {
          return (
            isRouteAvailable && (
              <li key={label}>
                <Link to={href}>{label}</Link>
              </li>
            )
          );
        })}
      </ul>
    </nav>
  );
}
