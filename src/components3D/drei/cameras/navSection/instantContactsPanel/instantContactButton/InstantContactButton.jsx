import React, { Suspense } from 'react';
import { Html } from '@react-three/drei';
/*
Components
*/
// import Frame1 from '../_glbComponents/frame/Frame_1';
import Frame1 from '../../../../../three/custome/_glbComponents/frame/Frame_1';
import ImageCanvas from '../../../../../three/custome/_imageCanvas/ImageCanvas';
// import UniversalCanvas from '../../../../../three/custome/matcapFrames/UniversalCanvas';
// import PlaneForCanvas from '../../../../../three/custome/_planeForCanvas/PlaneForCanvas';

/*
Assets
*/
import mobileImage from '../../../../../../assets/textures/instantContact_phone.webp';
import emailImage from '../../../../../../assets/textures/instantContact_email.webp';
/*
Basic Data
*/
const scaleForButton = [0.65, 1, 0.65];
let buttonImage;

/*
--------------------------------------------------------------------------------
*/
const InstantContactButton = React.forwardRef(
  ({ groupProps, canvasProps }, ref) => {
    /*
  set button's image
  */
    if (canvasProps.buttonImage === 'phone') {
      buttonImage = mobileImage;
    } else {
      buttonImage = emailImage;
    }
    /*
  onClick Section
  */
    const onClickHandler = (e, contact) => {
      e.preventDefault();
      if (canvasProps.buttonImage === 'phone') {
        window.location = 'tel:798-905-558';
      } else {
        window.location = 'mailto:77greenzeppelins@gmail.com';
      }
    };

    /*
  JSX
  */
    return (
      <Suspense fallback={null}>
        <group ref={ref} {...groupProps}>
          <Frame1 meshProps={{ scale: scaleForButton }} />
          <ImageCanvas format={canvasProps.format} image={buttonImage} />
          <Html
            position-z={0}
            position-x={-0.0}
            position-y={0.0}
            scale={[0.9, 0.9, 0.9]}
            rotation-x={0}
            transform // If true, applies matrix3d transformations (default=false)
            // occlude
          >
            <button
              onClick={onClickHandler}
              style={{
                width: '32px',
                height: '41px',
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                // backgroundColor: 'grey',
                // opacity: 0.2,
              }}
            />
          </Html>
        </group>
      </Suspense>
    );
  }
);

export default InstantContactButton;

/*
<InstantContactButton
groupProps={{}}
canvasProps={{buttonImage: "phone"}}
/>
*/

/*
{/* 
<a
  href="mailto:77greenzeppelins@gmail.com"
  style={{
    //   width: '100%',
    //   height: '100%',
    fontSize: '3rem',
    display: 'flex',
    justifyContent: 'center',
    lineHeight: 0.7,
  }}
>
    <p style={{ opacity: 0 }}>ZADZWOŃ</p>
</a>

*/
