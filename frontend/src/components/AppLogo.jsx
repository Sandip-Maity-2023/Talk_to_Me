//export const APP_NAME = "iMessage";
export const APP_NAME = "TalkToMe";
export function AppLogo({ className = "", size = 32, alt = APP_NAME }) {
  return (
    <img
      src="/l2.jpg"
      alt={alt}
      width={size}
      height={size}
      className={`shrink-0 object-contain select-none ${className}`}
      draggable={false}
    />
  );
}