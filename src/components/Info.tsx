import { useContext } from "react";
import { Context } from "./Context";

const Info = () => {
  const context = useContext(Context);

  const docs = {
    vscode: "https://code.visualstudio.com/docs/editor/userdefinedsnippets",
    sublimetext:
      "https://docs.sublimetext.io/guide/extensibility/snippets.html",
    atom: "http://flight-manual.atom.io/using-atom/sections/snippets/",
  };

  const platformKey = navigator.platform === "MacIntel" ? "⌘" : "ctrl";

  return (
    <p className="app__info">
      声明一个占位符请使用快捷键 ({platformKey} + i):{" "}
      <span className="app__infoselect">{"${1:example}"}</span> |{" "}
      <a
        className="app__infolink"
        href={docs[context.mode]}
        target="_blank"
        rel="noopener noreferrer"
      >
        关于代码片段
      </a>
    </p>
  );
};

export default Info;
