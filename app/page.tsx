import { Layout } from "@/ui/components";
import Card from "@/ui/components/Card/Card";
import Hero from "@/ui/components/Hero/Hero";

export default function Home() {
  return (
    <div data-testid="button">
      <Hero />
      <Layout.Container>
        <Card.Grid>
          <Card />
          <Card />
          <Card />
        </Card.Grid>
      </Layout.Container>
    </div>
  );
}
