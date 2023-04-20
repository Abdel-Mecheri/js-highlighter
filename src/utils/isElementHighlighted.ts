import { HIGHLIGHTER_TAG_NAME } from "../constants";

function isElementHighlighted({
  element,
  highlightClass,
}: {
  element: HTMLElement;
  highlightClass: string;
}): boolean {
  return (
    element.tagName?.toLowerCase() === HIGHLIGHTER_TAG_NAME &&
    element.classList.contains(highlightClass)
  );
}

export default isElementHighlighted;
