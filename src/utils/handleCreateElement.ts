import createHighlight from "./createHighlight";

function handleCreateElement({
  isHighlight,
  textContent,
  id,
  highlightClass,
}: {
  isHighlight: boolean;
  textContent: string;
  id: string;
  highlightClass: string;
}): Element | Text {
  return isHighlight
    ? createHighlight({ textContent, id, highlightClass })
    : document.createTextNode(textContent);
}

export default handleCreateElement;
