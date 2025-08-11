import * as React from 'react';

import { render } from '@testing-library/react';

import { Pill } from './Pill';

describe('Pill', () => {
  it('renders children', () => {
    const { getByText } = render(<Pill>Content</Pill>);
    expect(getByText('Content')).toBeTruthy();
  });

  it('applies different styles when selected', () => {
    const { getByText, rerender } = render(<Pill>Badge</Pill>);
    const defaultClass = getByText('Badge').className;
    rerender(<Pill selected>Badge</Pill>);
    const selectedClass = getByText('Badge').className;
    expect(defaultClass).not.toBe(selectedClass);
  });
});
