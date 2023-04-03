import { Editor } from "primereact/editor";
import { SetStateAction, useState } from "react";

function ArticlePage({ data }: any) {
  const [text, setText] = useState<string | null>("");

  const header = (
    <span className="ql-formats">
      <button className="ql-bold" aria-label="Bold"></button>
      <button className="ql-italic" aria-label="Italic"></button>
      <button className="ql-underline" aria-label="Underline"></button>
    </span>
  );

  return (
    <div className="h-full w-full">
      <Editor
        className="h-full w-full text-black"
        value={text ? text : "Hello, World!"}
        onTextChange={(e) => setText(e.htmlValue)}
      />
    </div>
  );
}

export default ArticlePage;
