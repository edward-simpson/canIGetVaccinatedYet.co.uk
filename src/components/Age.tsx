import * as React from "react";

export const Age = (): JSX.Element => {
  return <h3 style={{ fontSize: `7rem` }}>{process.env.GATSBY_AGE}</h3>;
};
