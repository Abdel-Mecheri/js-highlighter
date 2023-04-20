import { TextRangeType, TextRangeTypeEnum } from "../constants";
import getTextRangeType from "./getTextRangeType";

function getTexts({
  element,
  range,
}: {
  element: HTMLElement;
  range: Range;
}): TextRangeType {
  const textRangeType: TextRangeTypeEnum = getTextRangeType({ element, range });
  const textContent: string = element.textContent || "";

  switch (textRangeType) {
    case TextRangeTypeEnum.BEFORE_PARTIALLY_RANGE:
      return {
        text: textContent.substring(0, range.endOffset),
        nextText: textContent.substring(range.endOffset),
      };
    case TextRangeTypeEnum.AFTER_PARTIALLY_RANGE:
      return {
        prevText: textContent.substring(0, range.startOffset),
        text: textContent.substring(range.startOffset),
      };
    case TextRangeTypeEnum.IN_RANGE:
      return { text: textContent };
    case TextRangeTypeEnum.PARTIALLY_RANGE:
      return {
        prevText: textContent.substring(0, range.startOffset),
        text: textContent.substring(range.startOffset, range.endOffset),
        nextText: textContent.substring(range.endOffset),
      };
    case TextRangeTypeEnum.NOT_IN_RANGE:
    default:
      return null;
  }
}

export default getTexts;
