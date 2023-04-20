import { Layout, LayoutParts, ThemeSwitch } from "..";

const Header = () => {
  return (
    <Layout.Part className="bg-bg-1" type={LayoutParts.Header}>
      <Layout.Container>
        <div className="flex w-full items-center justify-between gap-5 py-6">
          <div className="text-3xl font-bold">Gyles Fohl</div>
          <nav className="border-bg-3 bg-bg-2 rounded-2xl border px-12 py-3">
            <ul className="flex gap-12 font-bold">
              <li>Home</li>
              <li>Blog</li>
              <li>Work</li>
              <li>About</li>
              <li>Design system</li>
            </ul>
          </nav>
          <ThemeSwitch />
        </div>
      </Layout.Container>
    </Layout.Part>
  );
};

export default Header;
