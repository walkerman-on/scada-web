const LabelIcon = ({
  color = "var(--color-accent-800)",
  width = 24,
  height = 24,
}: {
  color?: string;
  width?: number;
  height?: number;
}) => (
  <svg width={width} height={height} viewBox="0 -960 960 960" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path xmlns="http://www.w3.org/2000/svg" />
    <path
      d="M840-480 666-234q-11 16-28.5 25t-37.5 9H200q-33 0-56.5-23.5T120-280v-400q0-33 23.5-56.5T200-760h400q20 0 37.5 9t28.5 25l174 246Zm-98 0L600-680H200v400h400l142-200Zm-542 0v200-400 200Z"
      fill={color}
      />
  </svg>
);

export default LabelIcon;

