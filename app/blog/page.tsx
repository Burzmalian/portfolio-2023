import { Link } from "@/ui/components";
import Test from "../test.mdx";

export default function Blog() {
  return (
    <div>
      <Test />

      <Link href="/" data-testid="button">
        Blog
      </Link>
    </div>
  );
}
