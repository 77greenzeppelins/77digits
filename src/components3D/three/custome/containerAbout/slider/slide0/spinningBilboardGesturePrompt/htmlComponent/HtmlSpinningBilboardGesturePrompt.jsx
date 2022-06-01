import React from 'react';
/*
Components
*/
import HtmlPromptLine from './htmlPromptLine/HtmlPromptLine';
/*
Spring Staff
*/
import { animated, useTransition, useSpring, config } from '@react-spring/web';

/*
-------------------------------------------------------------------------
*/
const HtmlSpinningBilboardGesturePrompt = () => {
  /*
  JSX
  */
  return (
    <div className="html-gest-prompt__container">
      <div className="html-gest-prompt__sign-wrapper">
        <div className="html-gest-prompt__sign-vertical" />
      </div>

      <HtmlPromptLine />

      <div className="html-gest-prompt__sign-wrapper">
        <div className="html-gest-prompt__sign-vertical" />
        <div className="html-gest-prompt__sign-horizontal" />
      </div>
    </div>
  );
};

export default HtmlSpinningBilboardGesturePrompt;
