import highlightChildrens from "./highlightChildrens";
import highlightElement from "./highlightElement";

function handleHighlightByType({
  element,
  id,
  range,
  highlightClass,
}: {
  element: HTMLElement;
  id: string;
  range: Range;
  highlightClass: string;
}): void {
  if (element.nodeType === Node.TEXT_NODE) {
    highlightElement({ element, id, highlightClass, range });
  } else {
    highlightChildrens({ element, id, highlightClass, range });
  }
}

export default handleHighlightByType;
