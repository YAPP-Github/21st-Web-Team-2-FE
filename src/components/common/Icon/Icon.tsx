/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { SVGProps } from 'react';

import * as icon from '../../../assets/icon';
import theme from '../../../styles/theme';

export type IconNameType = keyof typeof icon;
type Color = keyof typeof theme.color;

const colors = theme.color;
const DEFAULT_SIZE = 24;

interface SVGIconProps extends SVGProps<SVGSVGElement> {
  /** 등록된 icon name */
  name: IconNameType;
  size?: number;
  width?: string;
  height?: string;
  /** 디자인 시스템 기반 컬러 Name */
  color?: Color;
}

const Icon = ({ name, size = DEFAULT_SIZE, width, height, color, style, ...props }: SVGIconProps) => {
  const SVGIcon = icon[name];

  const IconStyles = css`
    &,
    path {
      ${color ? `stroke: ${colors[color]} !important;` : ''}
      width: ${width ?? `${size}px`};
      height: ${height ?? `${size}px`};
    }
  `;

  return <SVGIcon {...props} css={IconStyles} style={style} />;
};

export default Icon;
