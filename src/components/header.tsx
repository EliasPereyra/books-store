import Link from "next/link";
import { css } from "../../styled-system/css";

export function Header() {
  return (
    <header
      className={css({
        padding: "4",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      })}
    >
      <h3>Logo here</h3>
      <nav>
        <ul
          className={css({
            display: "flex",
            gap: "4",
            alignItems: "center",
            justifyContent: "center",
          })}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
