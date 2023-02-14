/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { SVGProps } from 'react';

import * as icon from '@src/assets/icon';
import theme, { ThemeColor } from '@src/styles/theme';

export type IconNameType = keyof typeof icon;

const colors = theme.color;
const DEFAULT_SIZE = 24;

interface SVGIconProps extends SVGProps<SVGSVGElement> {
  /** 등록된 icon name */
  name: IconNameType;
  size?: number;
  width?: string;
  height?: string;
  /** 디자인 시스템 기반 컬러 Name */
  color?: ThemeColor;
  fill?: ThemeColor;
}

const Icon = ({ name, size = DEFAULT_SIZE, width, height, color, fill, style, ...props }: SVGIconProps) => {
  const SVGIcon = icon[name];

  const IconStyles = css`
    &,
    path {
      ${color ? `stroke: ${colors[color]} !important;` : ''}
      ${fill ? `fill: ${colors[fill]} !important;` : ''}
      width: ${width ?? `${size}px`};
      height: ${height ?? `${size}px`};
    }
  `;

  return <SVGIcon {...props} css={IconStyles} style={style} />;
};

export default Icon;
