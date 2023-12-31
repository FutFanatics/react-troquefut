import React from "react";

interface SharpProps {
  className?: string;
  width?: number;
  fill?: string;
  height?: number;
}
const IconSharp: React.FC<SharpProps> = ({ className, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
  >
    <circle cx="20" cy="20" r="20" fill="#192C53" />
    <mask
      id="mask0_900_1792"
      maskUnits="userSpaceOnUse"
      x="8"
      y="8"
      width="24"
      height="24"
    >
      <rect x="8" y="8" width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_900_1792)">
      <path
        d="M13 29C12.45 29 11.9792 28.8042 11.5875 28.4125C11.1958 28.0208 11 27.55 11 27V23H13V27H17V29H13ZM23 29V27H27V23H29V27C29 27.55 28.8042 28.0208 28.4125 28.4125C28.0208 28.8042 27.55 29 27 29H23ZM11 17V13C11 12.45 11.1958 11.9792 11.5875 11.5875C11.9792 11.1958 12.45 11 13 11H17V13H13V17H11ZM27 17V13H23V11H27C27.55 11 28.0208 11.1958 28.4125 11.5875C28.8042 11.9792 29 12.45 29 13V17H27ZM20 25C18.6167 25 17.4375 24.5125 16.4625 23.5375C15.4875 22.5625 15 21.3833 15 20C15 18.6167 15.4875 17.4375 16.4625 16.4625C17.4375 15.4875 18.6167 15 20 15C21.3833 15 22.5625 15.4875 23.5375 16.4625C24.5125 17.4375 25 18.6167 25 20C25 21.3833 24.5125 22.5625 23.5375 23.5375C22.5625 24.5125 21.3833 25 20 25ZM20 23C20.8333 23 21.5417 22.7083 22.125 22.125C22.7083 21.5417 23 20.8333 23 20C23 19.1667 22.7083 18.4583 22.125 17.875C21.5417 17.2917 20.8333 17 20 17C19.1667 17 18.4583 17.2917 17.875 17.875C17.2917 18.4583 17 19.1667 17 20C17 20.8333 17.2917 21.5417 17.875 22.125C18.4583 22.7083 19.1667 23 20 23Z"
        fill="white"
      />
    </g>
  </svg>
);
export default IconSharp;
