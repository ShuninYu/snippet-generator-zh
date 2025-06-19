import { html } from "common-tags";

const renderSublimeText = (
  description: string,
  tabtrigger: string,
  snippet: string,
) => {
  const regexpMagic = /(\$)([a-z(]+)([^$])/gi;
  const escapedSnippet = snippet.replace(regexpMagic, "\\$1$2$3");
  // prettier-ignore
  return html`
    <snippet>
      <content><![CDATA[
    ${escapedSnippet}
    ]]></content>
      <tabTrigger>${tabtrigger}</tabTrigger>
      <description>${description}</description>
      <!-- 可选：设置作用域以限制代码片段触发的位置 -->
      <!-- <scope >source.python</scope > -->
    </snippet>
  `;
};

export default renderSublimeText;
