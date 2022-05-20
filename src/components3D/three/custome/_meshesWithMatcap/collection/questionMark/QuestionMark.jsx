import React from 'react';
/*
Components
*/
import CustomMeshWithMatcap from '../../CustomMeshWithMatcap';
import TextGeometryFromFont from '../../../extrudedObjects/text/TextGeometryFromFont';
/*
Basic Data
*/
import { questionMarkConfig } from './questionMarkData';
/*
--------------------------------------------------------------------------
*/
const QuestionMark = React.forwardRef(ref => {
  return (
    <CustomMeshWithMatcap ref={ref}>
      <TextGeometryFromFont
        fontExtrudeSettings={questionMarkConfig.fontExtrudeSettings}
        text={questionMarkConfig.text}
      />
    </CustomMeshWithMatcap>
  );
});

export default QuestionMark;

/*
<a.group ref={questionMark} {...buttonQuestionMark.groupProps}>
          <CustomMeshWithMatcap>
            <TextGeometryFromFont
              fontExtrudeSettings={buttonQuestionMark.fontExtrudeSettings}
              text={buttonQuestionMark.text}
            />
          </CustomMeshWithMatcap>
        </a.group>
*/
