import React from 'react';

import './Skeleton.scss';

const defaultFormat = `
### =========
### =====
### ======
`;

const Skeleton = (props) => {
  const renderSvg = (format) => {
    const lineHeight = 30;
    const width = 30;
    let x = 0;
    let y = 0;

    // Determine width and height
    let svgHeight = format.split('\n').length;
    let svgWidth = 1;
    for (const line of format.split('\n')) {
      if (line.length > svgWidth) {
        svgWidth = line.length;
      }
    }

    svgHeight *= lineHeight;
    svgWidth *= width;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="1.41421"
        width={svgWidth}
        height={svgHeight}>
        <g>
          {format.split('').map((c, i) => {
            // Ignore first empty line
            if (i === 0 && format.split('\n')[0] === '') {
              return null;
            }

            let height;

            switch (c) {
              case '#':
                height = lineHeight;
                break;
              case '=':
                height = lineHeight / 1.5;
                break;
              case '-':
                height = lineHeight / 3;
                break;
              case ' ':
                x += width;
                return null;
              case '\n':
                y += lineHeight;
                x = 0;
                return null;
              default:
                return null;
            }

            const rect = (
              <rect key={i} fill="#eee" height={height} width={width} y={y} x={x}>
                <animate
                  attributeName="fill"
                  values="#ddd;#eee;#ddd"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </rect>
            );

            x += width;

            return rect;
          })}
        </g>
      </svg>
    );
  };

  return <div>{renderSvg(props.format || defaultFormat)}</div>;
};

export default Skeleton;
