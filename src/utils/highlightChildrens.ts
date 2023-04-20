import isElementAlreadyHighlightedById from "./isElementAlreadyHighlightedById";
import isElementHighlighted from "./isElementHighlighted";
import handleHighlightByType from "./handleHighlightByType";

function highlightChildrens({
  element,
  id,
  highlightClass,
  range,
}: {
  element: Element;
  id: string;
  highlightClass: string;
  range: Range;
}): void {
  for (
    let i: number = 0, count: number = element.childNodes.length;
    i < count;
    i++
  ) {
    const childrenElement: HTMLElement = element.childNodes[i] as HTMLElement;
    const childrenElementisHighlight: boolean = isElementHighlighted({
      element: childrenElement,
      highlightClass,
    });
    const childrenElementIsAlreadHighlighted: boolean =
      isElementAlreadyHighlightedById({
        element: childrenElement,
        id: id.toString(),
      });

    if (
      !childrenElement.tagName ||
      !childrenElementisHighlight ||
      (childrenElementisHighlight && !childrenElementIsAlreadHighlighted)
    ) {
      handleHighlightByType({
        element: childrenElement,
        id,
        highlightClass,
        range,
      });
      count = element.childNodes.length;
    }
  }
}

export default highlightChildrens;
