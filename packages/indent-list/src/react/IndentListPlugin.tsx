import type { ExtendConfig } from '@udecode/plate-common';

import {
  type PlateRenderElementProps,
  toTPlatePlugin,
} from '@udecode/plate-common/react';

import { type BaseIndentListConfig, BaseIndentListPlugin } from '../lib';
import { onKeyDownIndentList } from './onKeyDownIndentList';
import { renderIndentListBelowNodes } from './renderIndentListBelowNodes';

export type IndentListConfig = ExtendConfig<
  BaseIndentListConfig,
  {
    listStyleTypes?: Record<
      string,
      {
        type: string;
        isOrdered?: boolean;
        liComponent?: React.FC<PlateRenderElementProps>;
        markerComponent?: React.FC<Omit<PlateRenderElementProps, 'children'>>;
      }
    >;
  }
>;

/** Enables support for indented lists with React-specific features. */
export const IndentListPlugin = toTPlatePlugin<IndentListConfig>(
  BaseIndentListPlugin,
  {
    render: {
      belowNodes: renderIndentListBelowNodes,
    },
    handlers: {
      onKeyDown: onKeyDownIndentList,
    },
  }
);
