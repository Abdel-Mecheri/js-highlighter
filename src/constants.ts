export const CLASS_ATTRIBUTE_NAME: string = "class";
export const HIGHLIGHTER_TAG_NAME: string = "span";
export const SPLIT_IDS_SYMBOL: string = ";";

export enum TextRangeTypeEnum {
  NOT_IN_RANGE = "notInRange",
  IN_RANGE = "inRange",
  PARTIALLY_RANGE = "partiallyRange",
  BEFORE_PARTIALLY_RANGE = "beforePartiallyRange",
  AFTER_PARTIALLY_RANGE = "afterPartiallyRange",
}

export type TextRangeType = {
  text: string;
  prevText?: string;
  nextText?: string;
} | null;
