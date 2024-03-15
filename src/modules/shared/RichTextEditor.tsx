import RichTextEditor from "rich-text-editor-for-react";
import useRichTextEditor from "rich-text-editor-for-react/hook";
import { useEffect } from "react";
export default function RichTextEditorWrapper({ onChange }) {
  const { output, fetchOutput } = useRichTextEditor();
  useEffect(() => {
    onChange(output);
  }, [output]);
  return (
    <RichTextEditor
      toolbarOptions={[
        "word_count",
        "clear_format",
        "undo",
        "redo",
        "font",
        "header",
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "text_color",
        "highlight_color",
        "numbered_list",
        "bulleted_list",
        "align",
        "decrease_indent",
        "increase_indent",
        "direction",
        "blockquote",
        "code_block",
        "link",
        "image_base64",
        "embed_video",
        "format_media",
        "sub_script",
        "super_script",
      ]}
      customizeUI={{
        backgroundColor: "#fcfcfc",
        primaryColor: "#20464b",
        stickyToolbarOnScroll: true,
      }}
      fetchOutput={fetchOutput}
    />
  );
}
