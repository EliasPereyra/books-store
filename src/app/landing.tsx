import { css } from "../../styled-system/css";

export default function Landing() {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "6",
        height: "screen",
      })}
    >
      <h1
        className={css({
          textAlign: "center",
          marginTop: "20",
          fontSize: "5xl",
          fontWeight: "black",
        })}
      >
        Great Books all in one place
      </h1>
      <h5 className={css({ textAlign: "center" })}>
        Here you&apos;ll find interesting and helpful books almost about any
        topic
      </h5>
    </div>
  );
}
