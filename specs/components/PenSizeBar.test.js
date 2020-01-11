import React from 'react';
import { create } from 'react-test-renderer'

import PenSizeBar from '../../src/components/ToolsBar/PenSizeBar';

describe('PenSizeBar', () => {
  it('snapshot', () => {
    const tree = create(<PenSizeBar />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
