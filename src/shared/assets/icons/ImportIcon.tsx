const ImportIcon = ({
  color = "var(--color-primary-800)",
  width = 10,
  height = 10,
}: {
  color?: string;
  width?: number;
  height?: number;
}) => (
  <svg width={width} height={height} viewBox="0 -960 960 960" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M280-160v-80h400v80H280Zm160-160v-327L336-544l-56-56 200-200 200 200-56 56-104-103v327h-80Z"
        fill={color}
    />
  </svg>
);

export default ImportIcon;
