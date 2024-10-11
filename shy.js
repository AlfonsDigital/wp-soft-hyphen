(function (wp) {
  const { registerFormatType } = wp.richText;
  const { RichTextToolbarButton } = wp.blockEditor;
  const { createElement } = wp.element;
  const { __ } = wp.i18n;

  // Register a custom format for soft hyphen
  registerFormatType("custom-format/soft-hyphen", {
    title: __("Soft Hyphen"),
    tagName: "span",
    className: "shy-editor", // Custom class for editor highlighting
    edit: ({ isActive, onChange, value }) => {
      return createElement(RichTextToolbarButton, {
        icon: "editor-break",
        title: __("Soft Hyphen"),
        onClick: () => {
          onChange({
            ...value,
            text:
              value.text.slice(0, value.start) +
              "\u00AD" + // Insert soft hyphen character
              value.text.slice(value.end),
            start: value.start + 1,
            end: value.start + 1,
          });
        },
        isActive,
      });
    },
  });

  // Add filter to transform the soft hyphen span into an actual shy character in the frontend
  wp.hooks.addFilter(
    "blocks.getSaveContent.extraProps",
    "custom-format/soft-hyphen",
    function (props, blockType, attributes) {
      if (props.className && props.className.includes("shy-editor")) {
        // Replace the span in the saved content with the shy character
        props.children = props.children.replace(
          /<span class="shy-editor">/g,
          "\u00AD"
        );
        props.children = props.children.replace(/<\/span>/g, "");
      }
      return props;
    }
  );
})(window.wp);
