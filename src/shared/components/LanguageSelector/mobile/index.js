import React, { useState } from 'react'
import PropTypes from 'prop-types'

import LANGS from 'shared/constants/langs';

import './styles.scss'

export default function LanguageSelector(props) {
  const {opened, activeLang, 
    changeLang, toggleMenu,
    ...restProps} = props;
  

  return (
    <div class={`mobile-header__language ${opened ? 'lang-open' : 'lang-close'}`} {...restProps}>
      <div class="language__head">
        <div class="language__back" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12">
            <g fill="none" fill-rule="evenodd">
                <path d="M16-6v24H-8V-6z"/>
                <path fill="rgba(20, 16, 41, 0.4)" fill-rule="nonzero" d="M6.71 2.12L2.83 6l3.88 3.88a.996.996 0 1 1-1.41 1.41L.71 6.7a.996.996 0 0 1 0-1.41L5.3.7a.996.996 0 0 1 1.41 0c.38.39.39 1.03 0 1.42z"/>
            </g>
          </svg>
        </div>
        <span>{activeLang.name}</span>
        <img class='language__img' src={activeLang.url} alt={activeLang.name}/>
      </div>
      <ul class="language__list dropdownList">
        {LANGS.map(lang => (
          <li key={lang.name} onClick={() => { changeLang(lang); toggleMenu(); }} >
            <a><img class='language__img' src={lang.url} alt={lang.name}/>
             <span>{lang.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
LanguageSelector.propTypes = {
  activeLang: PropTypes.object,
  changeLang: PropTypes.func, 
}
