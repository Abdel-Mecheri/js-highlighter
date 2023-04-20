import handleHighlightByType from "./utils/handleHighlightByType";

function highlight({
  id,
  highlightClass,
}: {
  id: string;
  highlightClass: string;
}): void {
  const selection: Selection | null = window.getSelection();
  const range: Range | null = selection && selection?.getRangeAt(0);

  if (!selection?.rangeCount || !range || !id || !highlightClass) {
    return;
  }

  handleHighlightByType({
    element: range.commonAncestorContainer as HTMLElement,
    id,
    range,
    highlightClass,
  });
  selection.removeAllRanges();
}

export default highlight;
