import { css } from "../../styled-system/css";

export default function Input() {
  return (
    <input
      className={css({
        rounded: "lg",
        border: "1px solid black",
        m: "0 auto",
        w: "80",
        p: "2",
      })}
      type="text"
      placeholder="Search by name or category"
    />
  );
}
