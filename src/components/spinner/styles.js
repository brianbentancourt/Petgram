import styled, { keyframes } from 'styled-components'

const loadingSvg = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg)
  }
`

const loadingCircle = keyframes`
  0%,
  25% {
    stroke-dashoffset: 280;
    transform: rotate(0);
  }

  50%,
  75% {
    stroke-dashoffset: 75;
    transform: rotate(45deg);
  }

  100% {
    stroke-dashoffset: 280;
    transform: rotate(360deg);
`

const dashValue = (radius, decimalPercentage) => {
  const circumference = 2 * Math.PI * radius
  return circumference * decimalPercentage
}

export const Circle = styled.circle`
  fill: transparent;
  stroke-linecap: round;
  stroke-dashoffset: ${props => dashValue(props.r, 0.75)};
  stroke: #2f3d4c;
  stroke-dasharray: ${props => dashValue(props.r, 1)};
  stroke-width: ${props => (50 - props.r) * 2};
  animation: 1.4s ease-in-out infinite both ${loadingCircle};
  transform-origin: 50% 50%;
`

export const Svg = styled.svg`
  animation: 2s linear infinite ${loadingSvg};
`
