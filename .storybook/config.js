import { configure } from "@storybook/react";

function loadStories() {
  require("../stories/index.ts");
}

configure(loadStories, module);
