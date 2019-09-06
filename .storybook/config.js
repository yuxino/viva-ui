import { configure } from "@storybook/react";
import "@viva-ui/ui/dist/index.css";

function loadStories() {
  require("../stories/index.ts");
}

configure(loadStories, module);
