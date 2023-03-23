module.exports = {
  "*.+(js|jsx|json|yml|yaml|css|less|scss|ts|tsx|md|graphql|mdx|vue)": [
    `pnpm run format`,
    `pnpm run lint`,
  ],
};
