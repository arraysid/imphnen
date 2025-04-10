export function Footer() {
  return (
    <footer className="flex h-[10dvh] flex-col items-center justify-center">
      <span>
        Made with ❤️ by{" "}
        <a
          href="https://arrays.id"
          target="_blank"
          className="hover:underline hover:underline-offset-4"
        >
          Harun Alrasyid
        </a>
      </span>
      <span>
        Released under MIT License. The source code is available on{" "}
        <a
          href="https://github.com/arraysid/imphnen"
          target="_blank"
          className="hover:underline hover:underline-offset-4"
        >
          Github
        </a>
        .
      </span>
    </footer>
  );
}
