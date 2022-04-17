import { registerBlockType } from "@wordpress/blocks";

registerBlockType("fictionalblocktheme/genericheading", {
  title: "Generic Heading",
  edit: EditComponent,
  save: SaveComponent
});

function EditComponent() {
  return <div>Hello</div>;
}

function SaveComponent() {
  return <div>Hello</div>;
}
