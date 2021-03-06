import React, { useState, useEffect } from "react";

import Markdown from "markdown-to-jsx";

export function Learn() {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/SchoolOfCode/bootcamp-pre-course/main/README.md"
    )
      .then((response) => response.text())
      .then((result) => {
        setText(result);
      });
  });

  return (
    <Markdown
      options={{
        overrides: {
          h1: {
            props: {
              className: "font-bold text-4xl",
            },
          },
          h2: {
            props: {
              className: "font-bold text-2xl pt-4",
            },
          },
          p: {
            props: {
              className: "font-semibold text-lg pt-6",
            },
          },
          h3: {
            props: {
              className: "font-bold text-2xl pt-4",
            },
          },
          li: {
            props: {
              className: "list-disc ml-5",
            },
          },
          code: {
            props: {
              className: "block whitespace-normal font-semibold ml-5 break-words",
            },
          },
          pre: {
            props: {
              className: "block whitespace-normal font-semibold ml-5 break-words",
            },
          },
          footer: {
            props: {
              className: "text-white",
            },
          },
          a: {
            props: {
              className: "text-blue-600 font-bold",
              target: "_blank",
            },
          },
        },
      }}
    >
      {text}
    </Markdown>
  );
}
