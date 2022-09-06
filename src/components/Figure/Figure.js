import React from "react";
import styles from "./Figure.module.css";

/**
 * @description Figure
 * @param {image, descr, name, jobdescr, country, email} props
 */
const Figure = (props) => {
  console.log("Figure", props);

  const { image, descr, name, jobdescr, country, email } = props.contents;

  return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <img
        className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        src={image}
        alt=""
        width="511"
        height="511"
      />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium">{descr}</p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">{name}</div>
          <div className="text-slate-700 dark:text-slate-500">
            {jobdescr},{country}
          </div>
          <div className="text-slate-700 dark:text-slate-500">{email}</div>
        </figcaption>
      </div>
    </figure>
  );
};

export default Figure;
