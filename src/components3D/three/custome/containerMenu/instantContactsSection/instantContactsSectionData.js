const springData = {
  startingPosition: [0, -2, 0],
  endingPosition: [0, -0.55, 0],
  delay: 200,
};

const InstantContactButtonPhone = {
  groupProps: { scale: [0.335, 0.335, 0.335], position: [0.2, 0, 0.2] },
  frameProps: { format: 'portrait' },
  canvasProps: { buttonType: 'phone', format: 'portrait' },
};
const InstantContactButtonEmail = {
  groupProps: { scale: [0.335, 0.335, 0.335], position: [-0.2, 0, 0.2] },
  frameProps: { format: 'portrait' },
  canvasProps: { buttonType: 'email', format: 'portrait' },
};

export { springData, InstantContactButtonPhone, InstantContactButtonEmail };
