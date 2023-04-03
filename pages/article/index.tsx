import { Editor } from "primereact/editor";
import { SetStateAction, useState } from "react";

function ArticlePage({ data }: any) {
  const [text, setText] = useState<string | null>("");

  const header = (
    <span className="ql-formats">
      <button className="ql-bold" aria-label="Bold" />
      <button className="ql-italic" aria-label="Italic" />
      <button className="ql-underline" aria-label="Underline" />
    </span>
  );

  return (
    <div className="h-full w-full">
      <Editor
        className="h-full w-full text-black"
        value={text || "Hello, World!"}
        onTextChange={(e) => setText(e.htmlValue)}
      />
    </div>
  );
}

export default ArticlePage;
