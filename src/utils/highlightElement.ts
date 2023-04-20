import { SPLIT_IDS_SYMBOL, TextRangeType } from "../constants";
import getElementHighlightIds from "./getElementHighlightIds";
import getTexts from "./getTexts";
import handleCreateElement from "./handleCreateElement";
import isElementAlreadyHighlightedById from "./isElementAlreadyHighlightedById";
import isElementHighlighted from "./isElementHighlighted";

function highlightElement({
  element,
  range,
  highlightClass,
  id,
}: {
  element: HTMLElement;
  range: Range;
  highlightClass: string;
  id: string;
}): void {
  const texts: TextRangeType = getTexts({ element, range });

  if (!texts || !element.parentElement) {
    return;
  }

  const parent: HTMLElement = element.parentElement;
  const haveToHighlightParent: boolean =
    isElementHighlighted({ element: parent, highlightClass }) &&
    !isElementAlreadyHighlightedById({
      element: parent,
      id: id.toString(),
    });

  if (haveToHighlightParent && !parent.parentElement) {
    return;
  }

  const oldId: string = getElementHighlightIds({ element: parent }).join(
    SPLIT_IDS_SYMBOL
  );
  const newId: string = haveToHighlightParent
    ? `${oldId}${SPLIT_IDS_SYMBOL}${id}`
    : id;

  const highlight: Element | Text = handleCreateElement({
    isHighlight: true,
    textContent: texts.text,
    id: newId,
    highlightClass,
  });
  const newParent: HTMLElement = haveToHighlightParent
    ? (parent.parentElement as HTMLElement)
    : parent;
  const elementToReplace = haveToHighlightParent ? parent : element;

  newParent.replaceChild(highlight, elementToReplace);

  if (texts.prevText) {
    highlight.before(
      handleCreateElement({
        isHighlight: haveToHighlightParent,
        textContent: texts.prevText,
        id: oldId,
        highlightClass,
      })
    );
  }

  if (texts.nextText) {
    highlight.after(
      handleCreateElement({
        isHighlight: haveToHighlightParent,
        textContent: texts.nextText,
        id: oldId,
        highlightClass,
      })
    );
  }
}

export default highlightElement;
