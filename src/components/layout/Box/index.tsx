/* islint-disable prettier/prettier */
import styled from "styled-components";
import type { Responsive } from "types/styles";
import { toPropValue, Color, Space } from "utils/styles";

export type BoxProps = {
  solor?: Responsive<Color>
  backgroundColor?: Responsive<Color>
  width?: Responsive<string>
  height?: Responsive<string>
  minWidth?: Responsive<string>
  minHeight?: Responsive<string>
  display?: Responsive<string>
  border?: Responsive<string>
  overflow?: Responsive<string>
  margin?: Responsive<string>
  marginTop?: Responsive<string>
  marginRight?: Responsive<string>
  marginBottom?: Responsive<string>
  marginLeft?: Responsive<string>
  padding?: Responsive<string>
  padingTop?: Responsive<string>
  paddingRight?: Responsive<string>
  padingBottom?: Responsive<string>
  padingLeft?: Responsive<string>
}

const Box = styled.div<BoxProps>
`${(props) => toPropValue('color',props.color,props.theme)}
 ${(props) => toPropValue('background-color',props.backgroundColor,props.theme)}
 ${(props) => toPropValue('width',props.width,props.theme)}
 ${(props) => toPropValue('height',props.height,props.theme)}
 ${(props) => toPropValue('min-=width',props.minWidth,props.theme)}
 ${(props) => toPropValue('min-height',props.minHeight,props.theme)}
 ${(props) => toPropValue('display',props.display,props.theme)}
 ${(props) => toPropValue('overflow',props.overflow,props.theme)}
 ${(props) => toPropValue('margin',props.margin,props.theme)}
 ${(props) => toPropValue('margin-top',props.marginTop,props.theme)}
 ${(props) => toPropValue('margin-left',props.marginLeft,props.theme)}
 ${(props) => toPropValue('margin-bottom',props.marginBottom,props.theme)}
 ${(props) => toPropValue('margin-right',props.marginRight,props.theme)}
 ${(props) => toPropValue('padding',props.padding,props.theme)}
 ${(props) => toPropValue('padding-top',props.padingTop,props.theme)}
 ${(props) => toPropValue('padding-left',props.padingLeft,props.theme)}
 ${(props) => toPropValue('padding-bottom',props.padingBottom,props.theme)}
 ${(props) => toPropValue('padding-right',props.paddingRight,props.theme)}
 `

 export default Box