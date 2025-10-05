import type { IconProps } from "../../types/interface";

export default function Instagram({ height, width }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={width} height={height}>
      <defs>
        <linearGradient
          id="instaGradient"
          x1="0%"
          y1="100%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stop-color="#FAC75D" />
          <stop offset="25%" stop-color="#FC6B6B" />
          <stop offset="50%" stop-color="#FD0E78" />
          <stop offset="75%" stop-color="#953BAA" />
          <stop offset="100%" stop-color="#2D68DD" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#instaGradient)" stroke-width="1.5">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
        />
        <path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z" />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m17.5 6.51l.01-.011"
        />
      </g>
    </svg>
  );
}
