import { Editor } from "primereact/editor";
import { useState } from "react";

function ArticlePage() {
  const [text, setText] = useState<string | null>(
    "<div>Hello World!</div><div>PrimeReact <b>Editor</b> Rocks</div><div><br></div>",
  );

  return (
    <Editor
      showHeader={false}
      className="w-full bg-white text-black"
      value={text ? text : ""}
      onTextChange={(e) => setText(e.htmlValue)}
    />
  );
}

export default ArticlePage;
