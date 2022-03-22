import phoneImage from '../../../../../assets/textures/containerMenu_phone_1.png';
import emailImage from '../../../../../assets/textures/containerMenu_letter_3.png';

const phoneButton = {
  groupProps: { scale: [0.335, 0.335, 0.335], position: [0, 0.2, 0] },
  frameProps: { format: 'portrait' },
  canvasProps: { image: phoneImage, format: 'portrait' },
};

const emailButton = {
  groupProps: { scale: [0.335, 0.335, 0.335], position: [0, -0.2, 0] },
  frameProps: { format: 'portrait' },
  canvasProps: { image: emailImage, format: 'portrait' },
};

export { phoneButton, emailButton };
