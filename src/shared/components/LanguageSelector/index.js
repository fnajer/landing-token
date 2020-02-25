import React, { useState } from 'react'
import PropTypes from 'prop-types'

import LANGS from 'shared/constants/langs';

import './styles.scss'

export default function LanguageSelector(props) {
  const [isOpened, setOpen] = useState(false);
  const {withNames, className, activeLang, 
    changeLang,
    ...restProps} = props;
  
  function handleClick() {
    setOpen(!isOpened);
  }

  return (
    <div {...restProps} 
      class={`wrapper-dropdown ${className} ${isOpened ? 'active' : ''}`} 
      onClick={handleClick}
    >
      <div class='dropdown-head'>
        <img class='language__img' src={activeLang.url} alt={activeLang.name}/>
        {withNames && <span class='language__name'>{activeLang.name}</span>}
      </div>
      <ul class='dropdown dropdownList'>
        {LANGS.map(lang => (
          <li onClick={() => changeLang(lang)}>
            <a><img class='language__img' src={lang.url} alt={lang.name}/>
              {withNames && <span>{lang.name}</span>}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
LanguageSelector.propTypes = {
  withNames: PropTypes.bool,
  activeLang: PropTypes.object,
  changeLang: PropTypes.func, 
}
