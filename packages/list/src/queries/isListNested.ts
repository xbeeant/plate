import type { Path } from 'slate';

import {
  type PlateEditor,
  type TElement,
  type Value,
  getParentNode,
  getPluginType,
} from '@udecode/plate-common/server';

import { ELEMENT_LI } from '../createListPlugin';

/** Is the list nested, i.e. its parent is a list item. */
export const isListNested = <V extends Value>(
  editor: PlateEditor<V>,
  listPath: Path
) => {
  const listParentNode = getParentNode<TElement>(editor, listPath)?.[0];

  return listParentNode?.type === getPluginType(editor, ELEMENT_LI);
};
