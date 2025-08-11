import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { CompactFiltersButton } from './CompactFiltersButton';

describe('CompactFiltersButton', () => {
  it('calls onPress when clicked', () => {
    const onPress = vi.fn();
    const { getByRole } = render(<CompactFiltersButton onPress={onPress} />);
    fireEvent.click(getByRole('button'));
    expect(onPress).toHaveBeenCalled();
  });
});
