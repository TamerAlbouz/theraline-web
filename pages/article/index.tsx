import { Editor } from "primereact/editor";
import "../../node_modules/quill/dist/quill.snow.css";
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { useArticleMutation } from "../../hooks/mutations/article/useArticleMutation";

function ArticlePage() {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string | null>(
    "<div>Hello World!</div><div>PrimeReact <b>Editor</b> Rocks</div><div><br></div>",
  );

  const { mutate: createArticle } = useArticleMutation();

  const handleSubmit = () => {
    createArticle({ title: title, content: text ? text : "" });
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center justify-between">
        <InputText
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-96 rounded-md p-3 text-lg font-bold text-black"
          placeholder="Title..."
        />
        <button
          type="button"
          disabled={!title || !text}
          onClick={handleSubmit}
          className="rounded-md bg-green-600 py-3 px-5 text-xl font-medium text-white shadow-sm transition duration-300 ease-in-out hover:bg-primary disabled:bg-gray-400 disabled:text-gray-700">
          Submit
        </button>
      </div>
      <Editor
        showHeader={true}
        style={{ height: "620px" }}
        className="w-full bg-white text-black"
        value={text ? text : ""}
        theme="snow"
        onTextChange={(e) => setText(e.htmlValue)}
      />
    </div>
  );
}

export default ArticlePage;
