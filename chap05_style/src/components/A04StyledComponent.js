import React, { useState } from "react";

// npm i react-icons
import { MdAllInclusive } from "react-icons/md";

// npm i reactstrap
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap"


// npm i styled-components
// https://styled-components.com/

import { MYBOX, MYBOXTWO, MYBTN } from './css/A04Styled'
/*
// 태그 + CSS => 새로운 컴포넌트 생성
import styled from 'styled-components'

// 이 내부는 CSS 방식으로 기술한다
const MYBOX = styled.div`
   background-color: lightgray;
   color: ${(props) => props.color || 'white'};
   padding: 10px;
   margin: 5px;
`;
const MYBOXTWO = styled(MYBOX)`
  background-color: white;
  border: 1px solid gray;
`;
const MYBTN = styled.button`
   background-color: lightgray;
   color: ${(props) => props.color || 'white'};
   padding: 5px;
   margin: 5px;

   &:hover {
    background-color: white;
    color: gray;
   }
`;
*/

function A04StyledComponent() {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div className="mb-5">
      <h3>
        <MdAllInclusive style={{ color: 'orange', paddingBottom: '5px' }} />
        A04 Styled Component
      </h3>

      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Accordion Item 1</AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
          <AccordionBody accordionId="2">
            <strong>This is the second item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
          <AccordionBody accordionId="3">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
      </Accordion>

      <Card style={{ width: '18rem' }}>
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">
            Card title
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            Card subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card‘s content.
          </CardText>
          <Button>
            Button
          </Button>
        </CardBody>
      </Card>

      <MYBOX color="gray">
        국회 대리인단 김이수 변호사는 이날 오전 9시 30분께 헌재에서 열리는 탄핵심판 6차 변론에 출석하면서 "대통령과 대통령의 소송대리인이 주장하는 바, 계엄으로 아무 일도 일어나지 않았다, 경각심을 주고자 하는 '계몽령'이었다, 평화적 계엄이었다, 라는 말들은 형용모순의 궤변"이라며 "부하들에게 책임을 떠넘기기도 하고 있다"고 말했다.
      </MYBOX>

      <MYBOXTWO color="orange">
        국회 대리인단 김이수 변호사는 이날 오전 9시 30분께 헌재에서 열리는 탄핵심판 6차 변론에 출석하면서 "대통령과 대통령의 소송대리인이 주장하는 바, 계엄으로 아무 일도 일어나지 않았다, 경각심을 주고자 하는 '계몽령'이었다, 평화적 계엄이었다, 라는 말들은 형용모순의 궤변"이라며 "부하들에게 책임을 떠넘기기도 하고 있다"고 말했다.
      </MYBOXTWO>

      <MYBTN>CLICK</MYBTN>
    </div>
  );
}

export default A04StyledComponent;
