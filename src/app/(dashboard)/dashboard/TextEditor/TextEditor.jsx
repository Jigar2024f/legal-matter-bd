"use client";

import React, { useState } from "react";
import QuillEditor from "../Component/QuillEditor";

const TextEditor = () => {
  const [content, setContent] = useState("");

  return (
    <div className="mb-5 bg-red-500">
      <QuillEditor value={content} onChange={setContent} />
    </div>
  );
};

export default TextEditor;
