import {
  ELEMENT_DEFAULT,
  type QueryNodeOptions,
  createPluginFactory,
} from '@udecode/plate-common/server';

import { withDelete } from './withDelete';

export type DeletePlugin = {
  query?: QueryNodeOptions;
};

export const KEY_DELETE = 'delete';

/** @see {@link withDelete} */
export const createDeletePlugin = createPluginFactory<DeletePlugin>({
  key: KEY_DELETE,
  options: {
    query: {
      allow: [ELEMENT_DEFAULT],
    },
  },
  withOverrides: withDelete,
});
