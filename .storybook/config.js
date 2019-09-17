// yarn add @types/webpack-env -DW
import { configure } from "@storybook/react";
import "@viva-ui/theme";

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context("../stories", true, /\.tsx$/));
}

configure(loadStories, module);
