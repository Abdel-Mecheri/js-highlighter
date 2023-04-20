import getElementHighlightIds from "./getElementHighlightIds";

function isElementAlreadyHighlightedById({
  element,
  id,
}: {
  element: HTMLElement;
  id: string;
}): boolean {
  return getElementHighlightIds({
    element,
  }).includes(id);
}

export default isElementAlreadyHighlightedById;
