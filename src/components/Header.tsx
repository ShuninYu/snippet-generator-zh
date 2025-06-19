const Header = () => (
  <div className="app__header">
    <h1 className="app__title">代码段生成器</h1>
    <p className="app__subtitle">
      由{" "}
      <a className="app__link" href="https://pawelgrzybek.com">
        Pawel Grzybek
      </a>{" "}
      制作{" "}|{" "}
      <a className="app__link" href="https://github.com/ShuninYu">
        孤灯从流
      </a>{" "}
      汉化{" "}|{" "}
      <a className="app__link" href="https://www.buymeacoffee.com/pawelgrzybek">
        通过此链接赞助原作者
      </a>{" "}
      | 此汉化版源代码{" "}
      <a
        className="app__link"
        href="https://github.com/ShuninYu/snippet-generator-zh"
      >
        GitHub
      </a>
    </p>
  </div>
);

export default Header;
