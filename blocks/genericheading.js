import { RichText } from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";

registerBlockType("fictionalblocktheme/genericheading", {
  title: "Generic Heading",
  attributes: {
    text: { type: "string" },
    size: { type: "string", default: "large" }
  },
  edit: EditComponent,
  save: SaveComponent
});

function EditComponent(props) {
  function handleTextChange(value) {
    props.setAttributes({ text: value });
  }

  return (
    <>
      <RichText allowedFormats={["core/bold", "core/italic"]} tagName="h1" className={`headline headline--${props.attributes.size}`} value={props.attributes.text} onChange={handleTextChange} />
    </>
  );
}

function SaveComponent() {
  return <div>Hello</div>;
}
