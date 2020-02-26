import React from 'react';
import styled from 'styled-components';

import { Container, BGContainerCSS } from 'shared/layout/Container';
import Heading from 'shared/components/Heading';
import Text from 'shared/components/Text';

import peer from './peer.jpg';

import * as themes from 'shared/constants/themes'
import * as SCREEN_SIZES from 'shared/constants/screenSizes';

const BGWrapper = styled.div`
  @media (max-width: ${SCREEN_SIZES.beforeXLARGE}) {
    padding-top: 407px;
    background: url(${peer}) 65% 8% no-repeat;
  }

  @media (min-width: ${SCREEN_SIZES.XLARGE}) {
    background: url(${peer}) 15% 27% no-repeat;
    ${BGContainerCSS}
  }
`
const ColPeer = styled.div`
  @media (min-width: ${SCREEN_SIZES.XLARGE}) {
    max-width: 445px;
    margin-left: auto;
  }
`
const Row = styled.div`
  margin: 0 auto;
`

function Peer() {
  return (
    <BGWrapper>
      <Container>
        <Row>
          <ColPeer>
            <Heading theme={themes.DARK}>Peer-to-Peer</Heading>
            <Text theme={themes.DARK}>Unique business model of the project. Opportunity to receive bonus in various areas simultaneously – ownership of platform tokens, referral program, cryptocurrency operations.</Text>
          </ColPeer>
        </Row>
      </Container>
    </BGWrapper>
  );
}

export default Peer;
