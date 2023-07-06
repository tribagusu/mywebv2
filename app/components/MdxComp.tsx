import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";

export const components = {
  h1: (props) => <h1 {...props} className={`text-4xl text-primary`} />,
};

interface MdxProps {
  code: string;
}

export default function MdxComp({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div>
      <Component components={components} />
    </div>
  );
}
