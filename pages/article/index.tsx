import { Editor } from "primereact/editor";
import { SetStateAction, useState } from "react";

function ArticlePage({ data }: any) {
  const [text, setText] = useState("");

  const header = (
    <span className="ql-formats">
      <button className="ql-bold" aria-label="Bold"></button>
      <button className="ql-italic" aria-label="Italic"></button>
      <button className="ql-underline" aria-label="Underline"></button>
    </span>
  );

  return (
    <div className="bg-white text-black">
      <Editor
        headerTemplate={header}
        className=" text-black"
        value="Hello"
        onTextChange={(e) => setText("")}
      />
    </div>
  );
}

export default ArticlePage;
