import { Editor } from "primereact/editor";

function ArticlePage() {
  const header = (
    <span className="ql-formats">
      <button className="ql-bold" aria-label="Bold" type="button" />
      <button className="ql-italic" aria-label="Italic" type="button" />
      <button className="ql-underline" aria-label="Underline" type="button" />
    </span>
  );

  return (
    <div className="bg-white text-black">
      <Editor headerTemplate={header} className=" text-black" value="Hello" />
    </div>
  );
}

export default ArticlePage;
