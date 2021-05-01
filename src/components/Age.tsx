import * as React from "react";

export const Age = (): JSX.Element => {
  return (
    <span style={{ fontSize: `5rem`, marginLeft: `1rem` }}>
      {process.env.GATSBY_AGE}
    </span>
  );
};
