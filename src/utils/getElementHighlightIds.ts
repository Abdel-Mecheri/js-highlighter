import { SPLIT_IDS_SYMBOL } from "../constants";

function getElementHighlightIds({
  element,
}: {
  element: HTMLElement;
}): string[] {
  const id: string = element.dataset?.id || "";
  return id.split(SPLIT_IDS_SYMBOL);
}

export default getElementHighlightIds;
