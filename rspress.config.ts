import * as path from "path";
import { defineConfig } from "rspress/config";

const basePath: string = "/doc/";

export default defineConfig({
  root: path.join(__dirname, "docs"),
  title: "MMX",
  description: "MMX study",
  icon: "/logo.png",
  logo: {
    light: "/logo.png",
    dark: "/logo.png",
  },
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/mmxCoder",
      },
    ],
    nav: [],
  },
  builderConfig: {
    output: {
      assetPrefix: basePath,
    },
  },
  base: basePath,
});
