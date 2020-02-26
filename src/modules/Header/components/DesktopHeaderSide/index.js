import React, { Component } from 'react'
import styled from 'styled-components';

import Logo from '../Logo';
import Menu from 'shared/components/Menu'
import Button from 'shared/components/Button'
import LanguageSelectorBase from 'shared/components/LanguageSelector'

import * as positions from 'shared/constants/positions'
import * as themes from 'shared/constants/themes'

const RightSide = styled.div`
  display: flex;
`
const LanguageSelector = styled(LanguageSelectorBase)`
  width: 90px;
  margin-right: 12px;
`
const LeftButton = styled(Button)`
  margin-right: 12px;
`

class Header extends Component {
  render() {
    return (
      <>
        <Logo light={true}/>
        <RightSide>
          <Menu 
            position={positions.HEADER}
            items={['Telegram', 'How it Works', 'Sign In']}
          />
          <LanguageSelector 
            withNames={true}
            activeLang={this.props.activeLang} 
            changeLang={this.props.changeLang} 
          />
          <LeftButton theme={themes.LIGHT}>Market</LeftButton>
          <Button theme={themes.LIGHT}>Exchange</Button>
        </RightSide>
      </>
    )
  }
}

export default Header
