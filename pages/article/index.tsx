import { Editor } from "primereact/editor";
import "quill/dist/quill.snow.css";
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { useArticleMutation } from "../../hooks/mutations/article/useArticleMutation";

function ArticlePage() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string | null>("");

  const { mutate: createArticle } = useArticleMutation();

  const handleSubmit = () => {
    createArticle({ title, content });
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
          disabled={!title || !content}
          onClick={handleSubmit}
          className="rounded-md bg-green-600 py-3 px-5 text-xl font-medium text-white shadow-sm transition duration-300 ease-in-out hover:bg-primary disabled:bg-gray-400 disabled:text-gray-700">
          Submit
        </button>
      </div>
      <Editor
        placeholder="Start writing..."
        style={{ height: "620px" }}
        className="w-full bg-white text-black"
        value={content || ""}
        theme="snow"
        onTextChange={(e) => setContent(e.htmlValue)}
      />
    </div>
  );
}

export default ArticlePage;
