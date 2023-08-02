import Link from "next/link";

import { css } from "../../styled-system/css";

export function Footer() {
  return (
    <footer
      className={css({
        backgroundColor: "gray.900",
        color: "gray.100",
        px: "6",
        py: "4",
      })}
    >
      <h3 className={css({ textAlign: "center" })}>Book Store</h3>
      <div>
        <Link
          className={css({ textAlign: "center" })}
          href="https:/github.com/EliasPereyra"
        >
          Github
        </Link>
      </div>
    </footer>
  );
}
