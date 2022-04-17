wp.blocks.registerBlockType("fictionalblocktheme/banner", {
  title: "Banner",
  edit: EditComponent,
  save: SaveComponent
});

function EditComponent() {}

function SaveComponent() {
  return <p>This is from the block</p>;
}
