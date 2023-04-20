import { TextRangeTypeEnum } from "../constants";

function getTextRangeType({
  element,
  range,
}: {
  element: HTMLElement;
  range: Range;
}): TextRangeTypeEnum {
  const elementRange: Range = document.createRange();
  elementRange.selectNodeContents(element);

  const startToEndPoints: number = range.compareBoundaryPoints(
    Range.START_TO_END,
    elementRange
  );
  const endToStartPoints: number = range.compareBoundaryPoints(
    Range.END_TO_START,
    elementRange
  );
  const startToStartPoints: number = range.compareBoundaryPoints(
    Range.START_TO_START,
    elementRange
  );
  const endToEndPoints: number = range.compareBoundaryPoints(
    Range.END_TO_END,
    elementRange
  );

  if (startToEndPoints <= 0 || endToStartPoints >= 0) {
    return TextRangeTypeEnum.NOT_IN_RANGE;
  }

  if (startToStartPoints < 0) {
    return endToEndPoints < 0
      ? TextRangeTypeEnum.BEFORE_PARTIALLY_RANGE
      : TextRangeTypeEnum.IN_RANGE;
  }

  if (endToEndPoints > 0) {
    return TextRangeTypeEnum.AFTER_PARTIALLY_RANGE;
  }

  return startToStartPoints === 0 && endToEndPoints === 0
    ? TextRangeTypeEnum.IN_RANGE
    : TextRangeTypeEnum.PARTIALLY_RANGE;
}

export default getTextRangeType;
