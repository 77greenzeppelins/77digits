import React from 'react';
/*
Hook Staff
*/
import useWindowSize from '../../../../hooks/useWindowSize';

/*
-----------------------------------------------------------------------
*/
const RotatingPhone = props => {
  /*
  Hook Section
  */
  const { height } = useWindowSize();
  const svgHeight = height;
  const svgWidth = svgHeight * 0.55625;
  /*
  JSX
  */
  return (
    <svg
      viewBox="0 0 117.74 161.396"
      height={svgHeight}
      width={svgWidth}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="c">
          <stop
            style={{
              stopColor: '#f0f0f0',
              stopOpacity: 0.528,
            }}
            offset={0}
          />
          <stop
            style={{
              stopColor: '#a6a6a6',
              stopOpacity: 0.022,
            }}
            offset={1}
          />
        </linearGradient>
        <linearGradient id="b">
          <stop
            style={{
              stopColor: '#f0f0f0',
              stopOpacity: 0.528,
            }}
            offset={0}
          />
          <stop
            style={{
              stopColor: '#a6a6a6',
              stopOpacity: 0.99000001,
            }}
            offset={1}
          />
        </linearGradient>
        <linearGradient id="a">
          <stop
            style={{
              stopColor: '#d5d5c5',
              stopOpacity: 1,
            }}
            offset={0}
          />
          <stop
            style={{
              stopColor: '#1b1b15',
              stopOpacity: 0.99599999,
            }}
            offset={1}
          />
        </linearGradient>
        <linearGradient
          xlinkHref="#a"
          id="d"
          x1={18.782}
          y1={25.572}
          x2={88.649}
          y2={175.055}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(.71589 0 0 .71589 16.862 8.108)"
        />
        <linearGradient
          xlinkHref="#b"
          id="f"
          gradientUnits="userSpaceOnUse"
          x1={66.134}
          y1={46.567}
          x2={96.97}
          y2={184.415}
          gradientTransform="matrix(.71589 0 0 .71589 16.862 8.487)"
        />
        <linearGradient
          xlinkHref="#c"
          id="e"
          gradientUnits="userSpaceOnUse"
          x1={56.08}
          y1={25.929}
          x2={101.468}
          y2={193.146}
          gradientTransform="matrix(.71589 0 0 .71589 16.862 8.108)"
        />
      </defs>
      <rect
        style={{
          fill: '#848479',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 0.79375,
          strokeLinecap: 'square',
          strokeDasharray: 'none',
          strokeOpacity: 1,
          stopColor: '#000',
        }}
        width={1.705}
        height={20.551}
        x={88.865}
        y={39.645}
        ry={0.852}
      />
      <rect
        style={{
          fill: '#9b9b9b',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 0.79375,
          strokeLinecap: 'square',
          strokeDasharray: 'none',
          strokeOpacity: 1,
          stopColor: '#000',
        }}
        width={1.421}
        height={20.015}
        x={89.008}
        y={40.008}
        ry={0.83}
      />
      <rect
        style={{
          fill: '#848479',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 0.79375,
          strokeLinecap: 'square',
          strokeDasharray: 'none',
          strokeOpacity: 1,
          stopColor: '#000',
        }}
        width={0.751}
        height={7.34}
        x={28.017}
        y={41.918}
        ry={0.304}
      />
      <rect
        style={{
          fill: '#9b9b9b',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 0.79375,
          strokeLinecap: 'square',
          strokeDasharray: 'none',
          strokeOpacity: 1,
          stopColor: '#000',
        }}
        width={0.626}
        height={7.148}
        x={28.08}
        y={42.048}
        ry={0.296}
      />
      <rect
        style={{
          fill: '#848479',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 0.79375,
          strokeLinecap: 'square',
          strokeDasharray: 'none',
          strokeOpacity: 1,
          stopColor: '#000',
        }}
        width={0.751}
        height={7.34}
        x={28.017}
        y={53.425}
        ry={0.304}
      />
      <rect
        style={{
          fill: '#9b9b9b',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 0.79375,
          strokeLinecap: 'square',
          strokeDasharray: 'none',
          strokeOpacity: 1,
          stopColor: '#000',
        }}
        width={0.626}
        height={7.148}
        x={28.08}
        y={53.555}
        ry={0.296}
      />
      <rect
        style={{
          fill: 'url(#d)',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 0.264583,
          strokeLinecap: 'square',
          stopColor: '#000',
        }}
        width={60.612}
        height={118.383}
        x={28.701}
        y={24.682}
        ry={4.167}
      />
      <rect
        style={{
          display: 'inline',
          fill: '#ccc',
          stroke: '#000',
          strokeWidth: 0.79375,
          strokeLinecap: 'square',
          strokeDasharray: 'none',
          strokeOpacity: 1,
          stopColor: '#000',
        }}
        width={58.718}
        height={116.489}
        x={29.648}
        y={25.629}
        ry={4.1}
      />
      <path
        style={{
          display: 'inline',
          fill: 'url(#e)',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 0.79375,
          strokeLinecap: 'square',
          strokeDasharray: 'none',
          stopColor: '#000',
        }}
        d="m54.169 25.629 29.423 116.488h.673c2.272 0 4.1-1.829 4.1-4.1V29.729c0-2.272-1.828-4.1-4.1-4.1z"
      />
      <path
        style={{
          display: 'inline',
          fill: 'url(#f)',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 0.79375,
          strokeLinecap: 'square',
          strokeDasharray: 'none',
          stopColor: '#000',
        }}
        d="M54.831 26.102c-1.214 0-.768.63-.006.63l28.614-.002c4.89 0 4.036 4.957 4.036 32.17 0 26.154-.194 73.508-.192 78.462.001 3.815-3.028 4.187-3.028 4.187h.673c2.272 0 2.77-2.066 2.775-4.337l.204-107.9c0-.513-.958-3.232-3.23-3.23 0 0-22.27.02-29.846.02z"
      />
      <path
        style={{
          fill: 'none',
          stroke: '#ccc',
          strokeWidth: 0.52916667,
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeOpacity: 1,
          strokeDasharray: 'none',
        }}
        d="M26.383 82.05s-52.918-111.435 0-70.678"
      />
      <path
        style={{
          display: 'inline',
          fill: 'none',
          stroke: '#ccc',
          strokeWidth: 0.529167,
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        d="M90.436 80.573s52.918 111.435 0 70.678"
      />
      <path
        style={{
          fill: '#ccc',
          fillOpacity: 1,
          stroke: '#ccc',
          strokeWidth: 1.01769,
          strokeLinecap: 'square',
          strokeDasharray: 'none',
          strokeOpacity: 1,
          stopColor: '#000',
        }}
        d="M58.903 149.57c.474-.007 3.66 5.332 3.412 5.732-.248.4-6.473.356-6.694-.056-.221-.411 2.809-5.67 3.282-5.677z"
        transform="matrix(.5566 -.60348 .86474 .79756 -75.716 63.413)"
      />
      <path
        style={{
          fill: '#ccc',
          fillOpacity: 1,
          stroke: '#ccc',
          strokeWidth: 1.01769,
          strokeLinecap: 'square',
          strokeDasharray: 'none',
          strokeOpacity: 1,
          stopColor: '#000',
        }}
        d="M58.903 149.57c.474-.007 3.66 5.332 3.412 5.732-.248.4-6.473.356-6.694-.056-.221-.411 2.809-5.67 3.282-5.677z"
        transform="matrix(-.5566 .60348 -.86474 -.79756 192.608 99.293)"
      />
    </svg>
  );
};

export default RotatingPhone;
