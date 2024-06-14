import * as path from "path";
import { defineConfig } from "rspress/config";
import { pluginPreview } from "@rspress/plugin-preview";

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
    nav: [
      {
        text: "开始",
        link: "/views/study",
      },
    ],
    sidebar: {
      "/views/": [
        {
          text: "学习",
          items: [
            {
              text: "初试",
              link: "/views/study",
            },
          ],
          collapsed: true,
        },
        {
          text: "封装",
          items: [
            {
              text: "配置式单元格渲染",
              link: "/views/encapsulation/tableCellRender",
            },
          ],
          collapsed: true,
        },
        {
          text: "心得",
          items: [
            {
              text: "初试",
              link: "/views/experience",
            },
          ],
          collapsed: true,
        },
        {
          text: "笔记",
          items: [
            {
              text: "初试",
              link: "/views/note",
            },
          ],
          collapsed: true,
        },
        {
          text: "感悟",
          items: [
            {
              text: "初试",
              link: "/views/reflection",
            },
          ],
          collapsed: true,
        },
        {
          text: "思考",
          items: [
            {
              text: "初试",
              link: "/views/think",
            },
          ],
          collapsed: true,
        },
      ],
    },
  },
  builderConfig: {
    output: {
      assetPrefix: basePath,
    },
  },
  base: basePath,
  plugins: [pluginPreview()],
});
