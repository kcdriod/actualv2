import React, { forwardRef, type HTMLProps, type Ref } from 'react';

import { css, cx } from '@emotion/css';

import { type CSSProperties, styles } from './styles';
import { theme } from './theme';

export type PillProps = HTMLProps<HTMLSpanElement> & {
  innerRef?: Ref<HTMLSpanElement>;
  selected?: boolean;
  style?: CSSProperties;
};

export const Pill = forwardRef<HTMLSpanElement, PillProps>((props, ref) => {
  const {
    className = '',
    innerRef,
    selected = false,
    style,
    ...restProps
  } = props;

  const pillStyle: CSSProperties = {
    ...styles.editorPill,
    border: `1px solid ${selected ? theme.pillBorderSelected : theme.pillBorder}`,
    backgroundColor: selected
      ? theme.pillBackgroundSelected
      : styles.editorPill.backgroundColor,
    color: selected ? theme.pillTextSelected : styles.editorPill.color,
    ...style,
  };

  return (
    <span
      {...restProps}
      ref={innerRef ?? ref}
      className={cx(className, css(pillStyle))}
    />
  );
});

Pill.displayName = 'Pill';
