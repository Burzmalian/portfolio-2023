import { Layout, LayoutParts, Link, ThemeSwitch } from "..";

const Header = () => {
  return (
    <Layout.Part className="bg-bg-1" type={LayoutParts.Header}>
      <Layout.Container>
        <div className="flex w-full items-center justify-between gap-5 py-6">
          <div className="text-3xl font-bold">Gyles Fohl</div>
          <nav className="border-bg-3 bg-bg-2 rounded-2xl border px-12 py-3">
            <ul className="flex gap-12 font-bold">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/work">Work</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
          <ThemeSwitch />
        </div>
      </Layout.Container>
    </Layout.Part>
  );
};

export default Header;
