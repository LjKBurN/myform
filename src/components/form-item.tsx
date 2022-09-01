import React from 'react';
import styled from 'styled-components';
import { Row, Col, FlexBox } from './styled';
import { FormItemOptions } from '../../types';

const Colon = styled('span')`
  margin-left: 2px;
  margin-right: 8px;
`;

const TitleContent = styled('div')`
  margin-bottom: 5px;
`

function FormItem(props: FormItemOptions) {
  const {
    title,
    children,
    labelCol,
    labelAlign = 'right',
    wrapperCol,
    direction = 'row',
  } = props;

  if (direction === 'column') {
    return (
      <div>
        {
          title && (
            <TitleContent>
              <FlexBox>{title}<Colon>:</Colon></FlexBox>
            </TitleContent>
          )
        }
        <div>{children}</div>
      </div>
    )
  }

  let labelSpan: number;
  let wrapperSpan: number;
  let labelWidth: number | string;
  let wrapperWidth: number | string;

  if (typeof labelCol === 'number' && labelCol <= 24) {
    labelSpan = labelCol;
  } else if (labelCol) {
    labelWidth = labelCol;
  }

  if (typeof wrapperCol === 'number' && wrapperCol <= 24) {
    wrapperSpan = wrapperCol;
  } else if (wrapperCol) {
    labelWidth = wrapperCol;
  }

  return (
    <Row>
      {
        title && (
          <Col span={labelSpan} width={labelWidth}>
            <FlexBox justify={labelAlign}>{title}<Colon>:</Colon></FlexBox>
          </Col>
        )
      }
      <Col span={wrapperSpan} width={wrapperWidth}>{children}</Col>
    </Row>
  );
}

export {
  FormItem,
}