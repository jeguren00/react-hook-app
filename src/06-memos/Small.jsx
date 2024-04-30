import { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("componente dibujado");
  return <small>{value}</small>;
});
