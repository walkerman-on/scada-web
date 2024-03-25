const TurnLeftArrow = ({
  color = "var(--color-accent-800)",
  width = 30,
  height = 30,
}: {
  color?: string;
  width?: number;
  height?: number;
}) => (
  <svg width={width} height={height} viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg">
    <path 
        d="M600-160v-360H272l64 64-56 56-160-160 160-160 56 56-64 64h328q33 0 56.5 23.5T680-520v360h-80Z"
        fill={color}
    />
  </svg>
);

export default TurnLeftArrow;
