import { Vector2 } from 'three';

const logoCoordinates = [];

logoCoordinates.push(new Vector2(0.84209, 0.06925));
logoCoordinates.push(new Vector2(0.22277, 0.0));
logoCoordinates.push(new Vector2(0.15791, 0.1038));
logoCoordinates.push(new Vector2(0.65567, 0.15947));
logoCoordinates.push(new Vector2(0.48271, 0.40774));
logoCoordinates.push(new Vector2(0.2996, 0.14124));
logoCoordinates.push(new Vector2(0.15791, 0.12606));
logoCoordinates.push(new Vector2(0.41847, 0.5));
logoCoordinates.push(new Vector2(0.15791, 0.87395));
logoCoordinates.push(new Vector2(0.2996, 0.85855));
logoCoordinates.push(new Vector2(0.48266, 0.5922));
logoCoordinates.push(new Vector2(0.65561, 0.84054));
logoCoordinates.push(new Vector2(0.15791, 0.8962));
logoCoordinates.push(new Vector2(0.22277, 1.0));
logoCoordinates.push(new Vector2(0.84209, 0.93076));
logoCoordinates.push(new Vector2(0.54607, 0.49994));

const logoExtrudeSettings = {
  depth: 0.1,
  bevelEnabled: true,
  bevelSegments: 10,
  bevelThickness: 0.01,
  bevelSize: 0.01,
};

export { logoCoordinates, logoExtrudeSettings };
