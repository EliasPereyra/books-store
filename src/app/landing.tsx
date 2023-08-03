import Input from "@/components/input";
import { css } from "../../styled-system/css";

// export async function getBooks() {
//   const res = await fetch("");

//   if (!res.ok) {
//     throw new Error("There was an error when fetching");
//   }

//   return res.json();
// }

export default async function Landing() {
  // const someBooks = await getBooks();

  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "6",
        height: "screen",
        py: "28",
        px: "0",
      })}
    >
      <h1
        className={css({
          textAlign: "center",
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
      <Input />
      <div
        className={css({
          display: "flex",
          justifyContent: "center",
          w: 40,
          color: "gray.500",
          mx: "auto",
        })}
      >
        <a>#Category-1</a>
        <a>#Category-2</a>
        <a>#Category-3</a>
      </div>
    </div>
  );
}
