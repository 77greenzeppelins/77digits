import { Vector2 } from 'three';

const logoCoordinates = [];
//___ver1.
// logoCoordinates.push(new Vector2(0.84209, 0.06925));
// logoCoordinates.push(new Vector2(0.22277, 0.0));
// logoCoordinates.push(new Vector2(0.15791, 0.1038));
// logoCoordinates.push(new Vector2(0.65567, 0.15947));
// logoCoordinates.push(new Vector2(0.48271, 0.40774));
// logoCoordinates.push(new Vector2(0.2996, 0.14124));
// logoCoordinates.push(new Vector2(0.15791, 0.12606));
// logoCoordinates.push(new Vector2(0.41847, 0.5));
// logoCoordinates.push(new Vector2(0.15791, 0.87395));
// logoCoordinates.push(new Vector2(0.2996, 0.85855));
// logoCoordinates.push(new Vector2(0.48266, 0.5922));
// logoCoordinates.push(new Vector2(0.65561, 0.84054));
// logoCoordinates.push(new Vector2(0.15791, 0.8962));
// logoCoordinates.push(new Vector2(0.22277, 1.0));
// logoCoordinates.push(new Vector2(0.84209, 0.93076));
// logoCoordinates.push(new Vector2(0.54607, 0.49994));

//___ver2.
logoCoordinates.push(new Vector2(0, 0.18328)); //1
logoCoordinates.push(new Vector2(0.34623, 0.68051)); //2
logoCoordinates.push(new Vector2(-0.6612, 0.79361)); //3
logoCoordinates.push(new Vector2(-0.51841, 1)); //4
logoCoordinates.push(new Vector2(0.72669, 0.86034)); //5
logoCoordinates.push(new Vector2(0.12762, 0)); //6
logoCoordinates.push(new Vector2(0.72669, -0.86034)); //7
logoCoordinates.push(new Vector2(-0.51841, -1)); //8
logoCoordinates.push(new Vector2(-0.6612, -0.79361)); //9
logoCoordinates.push(new Vector2(0.34623, -0.68051)); //10
logoCoordinates.push(new Vector2(0, -0.18328)); //11
logoCoordinates.push(new Vector2(-0.37028, -0.71505)); //12
logoCoordinates.push(new Vector2(-0.64714, -0.74611)); //13
logoCoordinates.push(new Vector2(-0.12762, 0)); //14
logoCoordinates.push(new Vector2(-0.64714, 0.74611)); //15
logoCoordinates.push(new Vector2(-0.37028, 0.71505)); //16

const logoExtrudeSettings = {
  depth: 0.1,
  bevelEnabled: true,
  bevelSegments: 10,
  bevelThickness: 0.01,
  bevelSize: 0.01,
};

export { logoCoordinates, logoExtrudeSettings };
