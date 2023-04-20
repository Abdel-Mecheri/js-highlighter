import { CLASS_ATTRIBUTE_NAME, HIGHLIGHTER_TAG_NAME } from "../constants";

function createHighlight({
  textContent,
  id,
  highlightClass,
}: {
  textContent: string;
  id: string;
  highlightClass: string;
}): Element {
  const highlight = document.createElement(HIGHLIGHTER_TAG_NAME);
  highlight.setAttribute(CLASS_ATTRIBUTE_NAME, highlightClass);
  highlight.dataset.id = id;
  highlight.textContent = textContent;

  return highlight;
}

export default createHighlight;
