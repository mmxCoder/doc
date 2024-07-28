"use strict";(self.webpackChunkrspress_doc_template=self.webpackChunkrspress_doc_template||[]).push([["730"],{9837:function(n,e,t){t.r(e),t.d(e,{default:function(){return u}});var o=t(5893),s=t(65);function r(n){let e=Object.assign({h1:"h1",a:"a",blockquote:"blockquote",p:"p",strong:"strong",code:"code",br:"br",pre:"pre",div:"div"},(0,s.ah)(),n.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.h1,{id:"\u601D\u8003-\u591A\u4E2Ahook\u4E4B\u95F4\u7684\u8026\u5408\u5EA6\u5E94\u8BE5\u5982\u4F55\u89E3\u8026",children:[(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u601D\u8003-\u591A\u4E2Ahook\u4E4B\u95F4\u7684\u8026\u5408\u5EA6\u5E94\u8BE5\u5982\u4F55\u89E3\u8026",children:"#"}),"\u601D\u8003: \u591A\u4E2Ahook\u4E4B\u95F4\u7684\u8026\u5408\u5EA6\u5E94\u8BE5\u5982\u4F55\u89E3\u8026"]}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:["\u73B0\u5728 ",(0,o.jsx)(e.strong,{children:(0,o.jsx)(e.code,{children:"\u51FD\u6570\u5F0F\u7F16\u7A0B"})})," \u662F\u524D\u7AEF\u5F00\u53D1\u4E2D\u7684\u4E3B\u6D41\u601D\u60F3, ",(0,o.jsx)(e.strong,{children:(0,o.jsx)(e.code,{children:"hook"})})," \u4E5F\u4F5C\u4E3A\u4E3B\u6D41\u7684\u601D\u60F3\u88AB\u8D8A\u6765\u8D8A\u591A\u4EBA\u6240\u5B9E\u8DF5\u5E76\u63A8\u884C.",(0,o.jsx)(e.br,{}),"\n","\u4F46\u5728\u5B9E\u8DF5\u5F00\u53D1\u4E2D, \u603B\u4F1A\u9047\u5230\u4E00\u79CD\u60C5\u51B5, \u5C31\u662F \u591A\u4E2Ahook \u4E4B\u95F4\u7684\u76F8\u4E92\u4F9D\u8D56."]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",meta:"pure",children:"\nimport { useState, useMemo } from 'react'\n\nfunction useHookA() {\n    const [ count, setCount ] = useState(1)\n\n    const addCount = () => {\n        setCount(count + 1)\n    }\n\n    return {\n        count,\n        addCount\n    }\n}\n\nfunction useHookB({ count }) {\n    const computeCount = useMemo(() => {\n        console.log('\u91CD\u65B0\u8BA1\u7B97....', count)\n        return count * 2\n    }, [count])\n\n    return {\n        computeCount\n    }\n}\n\n\nexport default function Demo() {\n\n  const { count, addCount } = useHookA()\n\n  const { computeCount } = useHookB({ count })\n\n    return (\n        <>\n        <div>{ count }</div>\n        <div>{ computeCount }</div>\n        <button onClick={addCount}>+1</button>\n        </>\n    )\n}\n\n\n"})}),"\n",(0,o.jsxs)(e.p,{children:["\u6309\u4E0A\u9762\u7684\u4F8B\u5B50, useHookB \u4F9D\u8D56\u4E86 useHookA \u7684\u4E00\u4E2A\u72B6\u6001.\u8FD9\u8FD8\u662F\u4E00\u4E2A\u6700\u7B80\u5355\u7684\u4E00\u79CD\u60C5\u51B5, \u5B9E\u9645\u60C5\u51B5\u4E2D\u53EF\u80FD\u66F4\u52A0\u590D\u6742.",(0,o.jsx)(e.br,{}),"\n","\u53EF\u80FD\u5B58\u5728\u591A\u4E2A hook \u76F8\u4E92\u4F9D\u8D56\u7B49\u60C5\u51B5."]}),"\n",(0,o.jsxs)(e.div,{className:"rspress-directive tip",children:[(0,o.jsx)(e.div,{className:"rspress-directive-title",children:"\u601D\u8003"}),(0,o.jsxs)(e.div,{className:"rspress-directive-content",children:[(0,o.jsx)(e.p,{children:"\u5E94\u8BE5\u5982\u4F55\u53BB\u89E3\u8026\u8FD9\u4E2D\u95F4\u7684\u8026\u5408?"}),(0,o.jsx)(e.p,{children:"\u6709\u5174\u8DA3\u53EF\u4EE5\u770B\u770B\u4E0B\u9762\u8FD9\u4E2A\u89E3\u51B3\u65B9\u6848: vue3 + IOC"}),(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"https://zova.js.org/zh/guide/start/why.html",target:"_blank",rel:"noopener noreferrer",children:"https://zova.js.org/zh/guide/start/why.html"})})]})]})]})}function c(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,o.jsx)(e,Object.assign({},n,{children:(0,o.jsx)(r,n)})):r(n)}let u=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["views%2Fthink%2Fhook.mdx"]={toc:[],title:"\u601D\u8003: \u591A\u4E2Ahook\u4E4B\u95F4\u7684\u8026\u5408\u5EA6\u5E94\u8BE5\u5982\u4F55\u89E3\u8026",frontmatter:{}}}}]);