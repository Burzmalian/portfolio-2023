import * as React from "react";
import { Meta } from "@storybook/react";
import Layout, { LayoutParts } from "./Layout";

export default {
  component: Layout,
} as Meta<typeof Layout>;

export const Default = () => (
  <Layout>
    <Layout.Part type={LayoutParts.Header}>
      <Layout.Container>Header</Layout.Container>
    </Layout.Part>
    <Layout.Part type={LayoutParts.Middle}>
      <Layout.Container>
        {/* <Layout.Part type={LayoutParts.Sidebar}>
          Sidebar
        </Layout.Part> */}
        <Layout.Part className="border" type={LayoutParts.Main}>
          Main
        </Layout.Part>
        {/* <Layout.Part type={LayoutParts.Sidebar}>
          Sidebar
        </Layout.Part> */}
      </Layout.Container>
    </Layout.Part>

    <Layout.Part type={LayoutParts.Footer}>
      <Layout.Container>Footer</Layout.Container>
    </Layout.Part>
  </Layout>
);
