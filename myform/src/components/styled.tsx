import React from 'react';
import styled from 'styled-components';

interface FlexBoxProps {
  direct?: string,
  wrap?: string,
  justify?: string,
  align?: string,
}

const FlexBox = styled('div')<FlexBoxProps>`
  display: flex;
  ${(props) => (props.direct ? `flex-direction: ${props.direct}` : '')};
  ${(props) => (props.wrap ? `flex-wrap: ${props.wrap}` : '')};
  ${(props) => (props.justify ? `justify-content: ${props.justify}` : '')};
  ${(props) => (props.align ? `align-items: ${props.align}` : '')};
`;


// Row, Col
const TOTAL_SPAN = 24;

let RowCss = '';

for (let i = 1; i <= TOTAL_SPAN; i++ ) {
  const w = 100 * i / TOTAL_SPAN;
  RowCss += `
    .form-item-col-${i} {
      flex: 0 0 ${w}%;
      max-width: ${w}%;
    }
  `;
}

const Row = styled(FlexBox)`
  ${RowCss};
  width: 100%;
`;

const Col = styled('div').attrs((props: any) => {
  const { span } = props;
  return {
    className: `form-item-col-${span}`,
  }
})<{ span?: number, width?: number | string }>`
  ${(props) => (props.width ? `width: ${props.width}` : '')};
`;

export {
  FlexBox,
  Row,
  Col,
}