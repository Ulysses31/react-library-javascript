import React from "react";

import { Figure, GetDate, GetTime } from "react-library";
import "react-library/dist/index.css";

const figureItems = {
  image:
    "https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg",
  descr: `“Tailwind CSS is the only framework that I've seen scale on large
     FigureItems.teams. It’s easy to customize, adapts to any design, and the build
     size is tiny.”`,
  name: "Sarah Dayan",
  jobdescr: "Software Engineer",
  country: "Algolia",
  email: "sarah-dayan@datacenter.com",
};

const App = () => {
  console.log(GetDate());
  console.log(GetTime());

  return <Figure contents={figureItems} />;
};

export default App;
