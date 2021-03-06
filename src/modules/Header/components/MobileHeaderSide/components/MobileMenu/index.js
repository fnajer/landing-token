import React, { Component } from 'react'
import styled from 'styled-components';

import Button from 'shared/components/Button';
import MobileMenu from 'shared/components/Menu/mobile';
import LanguageView from '../LanguageView';
import LanguageSelectorMobile from 'shared/components/LanguageSelector/mobile'

import * as themes from 'shared/constants/themes'
import './styles.scss'

const TopButton = styled(Button)`
  margin-bottom: 4px;
`

class Header extends Component {
  state = {
    langIsOpen: false
  }

  openLangMenu = () => {
    this.setState({ langIsOpen: !this.state.langIsOpen })
  }

  render() {
    
    return (
      <div className="mobile-header">
        <div className={`mobile-header__body ${this.props.opened && !this.state.langIsOpen ? 'menu-open' : 'menu-close'}`}>
          <MobileMenu items={['Telegram', 'How it Works', 'Sign In']} />
          <LanguageView 
            activeLang={this.props.activeLang}
            toggleMenu={this.openLangMenu}
          />
          <TopButton theme={themes.LIGHT}>Join Us</TopButton>
          <Button theme={themes.LIGHT}>Read the WhitePaper</Button>
        </div>
        <LanguageSelectorMobile 
          opened={this.state.langIsOpen} 
          activeLang={this.props.activeLang} 
          changeLang={this.props.changeLang}
          toggleMenu={this.openLangMenu}
        />
      </div>
    )
  }
}

export default Header
