import React, { useContext } from 'react';
import styled from 'styled-components';
import { Row, Col, FlexBox } from './styled';
import { FormLayoutContext } from './form-layout';
import { FormItemOptions } from '../../types';

const Colon = styled('span')`
  margin-left: 2px;
  margin-right: 8px;
`;

const TitleContent = styled('div')`
  margin-bottom: 5px;
`;

function FormItem(props: FormItemOptions) {
  const allLayoutProps = useContext(FormLayoutContext);

  const {
    title,
    children,
    labelCol,
    labelAlign = 'right',
    wrapperCol,
    direction = 'row',
    display = 'visible',
  } = {
    ...allLayoutProps,
    ...props,
  };

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

  let labelSpan: number | undefined = undefined;
  let wrapperSpan: number | undefined = undefined;
  let labelWidth: number | string | undefined = undefined;
  let wrapperWidth: number | string | undefined = undefined;

  if (typeof labelCol === 'number' && labelCol <= 24) {
    labelSpan = labelCol;
  } else if (labelCol) {
    labelWidth = labelCol;
  }

  if (typeof wrapperCol === 'number' && wrapperCol <= 24) {
    wrapperSpan = wrapperCol;
  } else if (wrapperCol) {
    wrapperWidth = wrapperCol;
  }

  return (
    <Row align="center" display={display}>
      {
        title && (
          <Col span={labelSpan} width={labelWidth}>
            <FlexBox justify={labelAlign}>{title}<Colon>:</Colon></FlexBox>
          </Col>
        )
      }
      <Col span={wrapperSpan} width={wrapperWidth}>
        {children}
      </Col>
    </Row>
  );
}

export {
  FormItem,
}