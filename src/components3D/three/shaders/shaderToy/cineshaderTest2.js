import { shaderMaterial } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';

const CineshaderTest2ShaderMaterial = shaderMaterial(
  /*
  ----------Uniforms Section---------------------------------------
  */
  {
    uResolutionX: 0,
    uResolutionY: 0,
    /*
    think of this as a kind of "offset"; offsetting is based on two operations: "+" or "-" !!!; somethig that can slightly changes the position "over the time" / constantly;
    */
    uTime: 0,
  },
  /*
  ----------Vertex Shader Section-----------------------------------
  */
  glsl`
  /*
  extract "atributes" from <ContainerAnswerYes> i.e. from Java Script;
  */
  /*
  extract uniforms from <ContainerAnswerYes>
  */
  uniform float uTime;
  /*
  create / declare "varying" for "Fragment Shader sake";
  */
  varying vec2 vUv;
  
  /*
  Main Function Section;
  */
  void main (){
      vec4 worldSpace = modelMatrix * vec4(position, 1.);
      vec4 viewSpace = viewMatrix * worldSpace;
      vec4 clipSpace = projectionMatrix * viewSpace;
      gl_Position = clipSpace;
      /*
      assign verying for "Fragment Shader sake";
      we do our best to create great-dynamically-changing "elevation value", so wy don't we pass it to the "Fragment Shader"
      */
        vUv = uv;

  }
  /*
  ----------Fragment Shader Section-----------------------------------------
  */
  `,
  glsl`
  // #define NUM_PARTICLES 20.
    /*
  extract varyings from Vertex Shader;
  */
  varying vec2 vUv;
  /*
  extract uniforms from <ContainerAnswerYes>
  */
  uniform float uTime;
  uniform float uResolutionX;
  uniform float uResolutionY;

  /*
  
  */
float opSmoothUnion( float d1, float d2, float k )
{
    float h = clamp( 0.5 + 0.5*(d2-d1)/k, 0.0, 1.0 );
    return mix( d2, d1, h ) - k*h*(1.0-h);
}

float sdSphere( vec3 p, float s )
{
  return length(p)-s;
} 

float map(vec3 p)
{
	float d = 2.0;
	for (int i = 0; i < 16; i++)
	{
		float fi = float(i);
		float time = iTime * (fract(fi * 412.531 + 0.513) - 0.5) * 2.0;
		d = opSmoothUnion(
            sdSphere(p + sin(time + fi * vec3(52.5126, 64.62744, 632.25)) * vec3(2.0, 2.0, 0.8), mix(0.5, 1.0, fract(fi * 412.531 + 0.5124))),
			d,
			0.4
		);
	}
	return d;
}

vec3 calcNormal( in vec3 p )
{
    const float h = 1e-5; // or some other value
    const vec2 k = vec2(1,-1);
    return normalize( k.xyy*map( p + k.xyy*h ) + 
                      k.yyx*map( p + k.yyx*h ) + 
                      k.yxy*map( p + k.yxy*h ) + 
                      k.xxx*map( p + k.xxx*h ) );
}


  /*
  Main Function Section;
  */
  void main (){
      /*
      ..............................................................
      resource: https://www.youtube.com/watch?v=cQXAbndD5CQ
      */
      /*
      Basic Values
      */
    //   vec2 uv = 2. * vUv  - 1.;
    //   uv *= 10.;

      vec2 uv = fragCoord/iResolution.xy;
    
    // screen size is 6m x 6m
	vec3 rayOri = vec3((uv - 0.5) * vec2(iResolution.x/iResolution.y, 1.0) * 6.0, 3.0);
	vec3 rayDir = vec3(0.0, 0.0, -1.0);
	
	float depth = 0.0;
	vec3 p;
	
	for(int i = 0; i < 64; i++) {
		p = rayOri + rayDir * depth;
		float dist = map(p);
        depth += dist;
		if (dist < 1e-6) {
			break;
		}
	}
	
    depth = min(9.0, depth);
	vec3 n = calcNormal(p);
    float b = max(0.0, dot(n, vec3(0.577)));
    //vec3 col = (0.5 + 0.5 * cos((b + iTime * .6) + uv.xyx * 2.0 + vec3(0,2,4))) * (0.85 + b * 0.35);
    vec3 col = ( cos((b + iTime * .6) + uv.xyx * 2.0 + vec3(0,2,4))) * (0.85 + b * 0.35);
    col *= exp( -depth * 0.15 );
	
    // maximum thickness is 2m in alpha channel
    fragColor = vec4(col, 1.0  ); // 1.0 - (depth - 0.5) / 2.0
    

  }
  `
);

export { CineshaderTest2ShaderMaterial };
/*
time...
float t = uTime * 0.1 ; => fly away...
float t = abs(sin(uTime)) ; => is bouncing infinitelly...
float t = fract(uTime * 0.1); => repeats from the same position infinitelly...
*/

/*
another attempt to understand coordinate system;
it works on landscape not on portrait + requires full screen "plane";
with args values (1, 0.5) it looks like fragment of "full-screen-picture", like mask that cut fragment of a biger picture; what we see is little picture mainly black& grey without clean color
vec2 thisCoordSystem = gl_FragCoord.xy / vec2(uResolutionX , uResolutionY) * 2. - 1.;
thisCoordSystem.y *= uResolutionY / uResolutionX;
*/
/*
simple circle:
float radious = 0.5;
float lengthCalculator = length(uv);
float smoothCircleMaker = smoothstep(radious, radious-0.01,lengthCalculator);
color.r = smoothCircleMaker;
 */
