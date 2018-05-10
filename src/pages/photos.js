import React from 'react';
import styled from 'styled-components';

import { media } from '../utils/styles';
import MastHead from '../components/Masthead';

import line from '../images/root_SmallDivider.png';
import pic1 from '../images/Tricia-Noel_18_01.jpg';
import pic2 from '../images/Tricia-Noel_18_02.jpg';
import pic3 from '../images/Tricia-Noel_18_03.jpg';
import pic4 from '../images/Tricia-Noel_18_04.jpg';
import pic5 from '../images/Tricia-Noel_18_05.jpg';
import pic6 from '../images/Tricia-Noel_18_06.jpg';
import pic7 from '../images/Tricia-Noel_18_07.jpg';
import pic8 from '../images/Tricia-Noel_18_08.jpg';
import pic9 from '../images/Tricia-Noel_18_09.jpg';
import pic10 from '../images/Tricia-Noel_18_10.jpg';
import pic11 from '../images/Tricia-Noel_18_11.jpg';
import pic12 from '../images/Tricia-Noel_18_12.jpg';
import pic13 from '../images/Tricia-Noel_18_13.jpg';
import pic14 from '../images/Tricia-Noel_18_14.jpg';
import pic15 from '../images/Tricia-Noel_18_15.jpg';

const Title = styled.h2`
  text-align: center;
`;

const SmallDivider = styled.img`
  display: block;
  height: 50px;
  width: 200px;
  margin: 0 auto 30px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0 4px;
`;

const Column = styled.div`
  flex: 100%;
  max-width: 100%;
  padding: 0 4px;

  ${media.handheld`
    flex: 50%;
    max-width: 100%;
  `} ${media.tablet`
    flex: 25%;
    max-width: 100%;
  `};
`;

const Img = styled.img`
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
`;

const PhotoPage = () => (
  <div>
    <MastHead />
    <section>
      <Title>Photos</Title>
      <SmallDivider src={line} alt="curved line" />
      <Row>
        <Column>
          <Img src={pic1} />
          <Img src={pic2} />
          <Img src={pic3} />
          <Img src={pic4} />
          <Img src={pic5} />
        </Column>
        <Column>
          <Img src={pic6} />
          <Img src={pic7} />
          <Img src={pic8} />
          <Img src={pic9} />
          <Img src={pic10} />
        </Column>
        <Column>
          <Img src={pic11} />
          <Img src={pic12} />
          <Img src={pic13} />
          <Img src={pic14} />
          <Img src={pic15} />
        </Column>
      </Row>
    </section>
  </div>
);

export default PhotoPage;
