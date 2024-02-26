const SidebarToggleIconLeft = ({
  color = "var(--color-accent-800)",
  width = 30,
  height = 30,
}: {
  color?: string;
  width?: number;
  height?: number
}) => (
  <svg width={width} height={height} viewBox="0 -960 960 960" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
        d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"
        fill={color}
        />
  </svg>
);

export default SidebarToggleIconLeft;
