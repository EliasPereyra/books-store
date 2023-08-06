import { css } from "../../../styled-system/css";

export default function Profile() {
  return (
    <section
      className={css({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        p: "4",
      })}
    >
      <div
        className={css({
          width: "3em",
          m: "auto",
        })}
      >
        <img src="" alt="Profile logo" />
      </div>
      <h3
        className={css({
          fontSize: "4xl",
          textAlign: "center",
        })}
      >
        Username
      </h3>
      <p
        className={css({
          textAlign: "center",
          mb: "20",
        })}
      >
        A brief description about the user, and if it&apos;s an author, talk
        about its works
      </p>
    </section>
  );
}
