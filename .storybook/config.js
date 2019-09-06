import { configure } from "@storybook/react";
import "@viva-ui/theme";

function loadStories() {
  require("../stories/index.ts");
}

configure(loadStories, module);
