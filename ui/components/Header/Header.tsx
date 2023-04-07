import { Layout, LayoutParts } from "..";

const Header = () => {
  return (
    <Layout.Part className="bg-bg-1" type={LayoutParts.Header}>
      <Layout.Container>
        <div className="flex w-full items-center justify-between gap-5 py-6">
          <div className="text-3xl font-bold">Gyles Fohl</div>
          <nav className="rounded-2xl border border-bg-3 bg-bg-2 px-12 py-3">
            <ul className="flex gap-12 font-bold">
              <li>Home</li>
              <li>Blog</li>
              <li>Work</li>
              <li>About</li>
              <li>Design system</li>
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            Light mode
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </Layout.Container>
    </Layout.Part>
  );
};

export default Header;
