import React from "react";

interface EnviadoProps {
  className?: string;
  width?: number;
  fill?: string;
  height?: number;
}
const IconEnviado: React.FC<EnviadoProps> = ({ className, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 64 64"
    fill="none"
  >
<mask id="mask0_925_1194"  maskUnits="userSpaceOnUse" x="12" y="12" width="40" height="40">
<rect x="12" y="12" width="40" height="40" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_925_1194)">
<mask id="mask1_925_1194"  maskUnits="userSpaceOnUse" x="12" y="12" width="40" height="40">
<rect x="12" y="12" width="40" height="40" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask1_925_1194)">
<path d="M38.5834 48.668L31.5 41.5846L33.8334 39.2513L38.5834 44.0013L48 34.5846L50.3334 36.918L38.5834 48.668ZM32 30.3346L45.3334 22.0013H18.6667L32 30.3346ZM32 33.668L18.6667 25.3346V42.0013H27.25L30.5834 45.3346H18.6667C17.75 45.3346 16.9653 45.0082 16.3125 44.3555C15.6598 43.7027 15.3334 42.918 15.3334 42.0013V22.0013C15.3334 21.0846 15.6598 20.2999 16.3125 19.6471C16.9653 18.9944 17.75 18.668 18.6667 18.668H45.3334C46.25 18.668 47.0348 18.9944 47.6875 19.6471C48.3403 20.2999 48.6667 21.0846 48.6667 22.0013V29.2513L45.3334 32.5846V25.3346L32 33.668Z" fill="#192C53"/>
</g>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M32 0C49.6736 0 64 14.3264 64 32C64 49.6736 49.6736 64 32 64C14.3264 64 0 49.6736 0 32C0 14.3264 14.3264 0 32 0ZM60.8 32C60.8 16.0944 47.9056 3.2 32 3.2C16.0944 3.2 3.2 16.0944 3.2 32C3.2 47.9056 16.0944 60.8 32 60.8C47.9056 60.8 60.8 47.9056 60.8 32Z" fill="#192C53"/>
</svg>
);
export default IconEnviado;
