import * as React from "react";
import { useEffect, useState } from "react";

export const Age = (): JSX.Element => {
  const jsonBinUrl = "https://api.jsonbin.io/b/608d338392cb9267d0c8c6c0/latest";
  const [age, setAge] = useState<string>(process.env.GATSBY_AGE ?? "");

  useEffect(() => {
    let unmounted = false;
    fetch(jsonBinUrl, {
      headers: {
        "secret-key": ""
      }
    })
      .then((response) => response.json())
      .then((data) => !unmounted && data.age && setAge(data.age))
      .catch((e) => console.error(e));

    return (): void => {
      unmounted = true;
    };
  }, []);

  return <h3 style={{ fontSize: `7rem` }}>{age}</h3>;
};
