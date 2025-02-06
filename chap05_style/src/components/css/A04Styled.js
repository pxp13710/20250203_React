// 태그 + CSS => 새로운 컴포넌트 생성
import styled from 'styled-components'

// 이 내부는 CSS 방식으로 기술한다
export const MYBOX = styled.div`
   background-color: lightgray;
   color: ${(props) => props.color || 'white'};
   padding: 10px;
   margin: 5px;
`;
export const MYBOXTWO = styled(MYBOX)`
  background-color: white;
  border: 1px solid gray;
`;
export const MYBTN = styled.button`
   background-color: lightgray;
   color: ${(props) => props.color || 'white'};
   padding: 5px;
   margin: 5px;

   &:hover {
    background-color: white;
    color: gray;
   }
`;