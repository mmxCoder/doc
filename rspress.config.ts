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
        link: "/views/encapsulation/tableCellRender",
      },
      {
        text: "联系我",
        link: "/views/contact/me",
      },
    ],
    sidebar: {
      "/views/": [
        // {
        //   text: "学习",
        //   items: [
        //     {
        //       text: "初试",
        //       link: "/views/study",
        //     },
        //   ],
        //   collapsed: true,
        // },
        {
          text: "封装",
          items: [
            {
              text: "配置式单元格渲染",
              link: "/views/encapsulation/tableCellRender",
            },
            {
              text: "弹窗/抽屉的命令式打开",
              link: "/views/encapsulation/opendialog",
            },
          ],
          collapsed: false,
        },
        // {
        //   text: "心得",
        //   items: [
        //     {
        //       text: "初试",
        //       link: "/views/experience",
        //     },
        //   ],
        //   collapsed: true,
        // },
        {
          text: "笔记",
          items: [
            {
              text: "vxe-table源码调试",
              link: "/views/note/vxeTable",
            },
            {
              text: "前端数据收集",
              link: "/views/note/collect",
            },
            {
              text: "纯前端发版通知",
              link: "/views/note/publish",
            },

            // {
            //   text: "任务并发控制",
            //   link: "/views/note/requestControl",
            // },
          ],
          collapsed: false,
        },
        // {
        //   text: "感悟",
        //   items: [
        //     {
        //       text: "初试",
        //       link: "/views/reflection",
        //     },
        //   ],
        //   collapsed: true,
        // },
        {
          text: "思考(未解决问题)",
          items: [
            {
              text: "多个hook之间如何解耦",
              link: "/views/think/hook",
            },
            {
              text: "如何等待多个异步任务",
              link: "/views/think/asyncAwait",
            },
          ],
          collapsed: false,
        },
        {
          text: "补充知识",
          collapsed: false,
          items: [
            {
              text: "浏览器并发限制的原因",
              link: "/views/expand/browserConcurrency",
            },
          ],
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
