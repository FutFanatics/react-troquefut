import React from "react";

interface IntimoProps {
  className?: string;
  width?: number;
  fill?: string;
  height?: number;
}
const IconIntimo: React.FC<IntimoProps> = ({ className, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 48 48"
    fill="none"
  >
    <circle cx="24" cy="24" r="24" fill="#192C53"/>
<mask id="mask0_706_3185" maskUnits="userSpaceOnUse" x="12" y="12" width="24" height="24">
<rect x="12" y="12" width="24" height="24" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_706_3185)">
<path d="M17.4 21.501C18.05 21.501 18.6666 21.6176 19.25 21.851C19.8333 22.0843 20.3666 22.426 20.85 22.876L30.4 32.001H31C31.2833 32.001 31.5208 31.9051 31.7125 31.7135C31.9041 31.5218 32 31.2843 32 31.001C32 30.8676 31.9875 30.726 31.9625 30.576C31.9375 30.426 31.85 30.276 31.7 30.126L27.125 25.551L25.35 20.201L23.5 20.651C22.8666 20.8176 22.2916 20.701 21.775 20.301C21.2583 19.901 21 19.376 21 18.726V16.626L20.3 16.276L16.45 21.426C16.4333 21.4426 16.425 21.4551 16.425 21.4635C16.425 21.4718 16.4166 21.4843 16.4 21.501H17.4ZM17.4 23.501H16.25C16.3 23.6176 16.3625 23.726 16.4375 23.826C16.5125 23.926 16.6 24.0176 16.7 24.101L24.8 31.476C24.9833 31.6593 25.1916 31.7926 25.425 31.876C25.6583 31.9593 25.9 32.001 26.15 32.001H27.5L19.475 24.326C19.1916 24.0426 18.8708 23.8343 18.5125 23.701C18.1541 23.5676 17.7833 23.501 17.4 23.501ZM26.15 34.001C25.65 34.001 25.175 33.9093 24.725 33.726C24.275 33.5426 23.8583 33.2843 23.475 32.951L15.35 25.576C14.5833 24.876 14.1541 24.0176 14.0625 23.001C13.9708 21.9843 14.2333 21.0593 14.85 20.226L18.7 15.076C18.9833 14.6926 19.3625 14.4385 19.8375 14.3135C20.3125 14.1885 20.7666 14.2426 21.2 14.476L21.9 14.826C22.25 15.0093 22.5208 15.2593 22.7125 15.576C22.9041 15.8926 23 16.2426 23 16.626V18.726L24.85 18.251C25.35 18.1176 25.8333 18.1801 26.3 18.4385C26.7666 18.6968 27.0833 19.0676 27.25 19.551L28.875 24.451L33.125 28.701C33.4583 29.0343 33.6875 29.3926 33.8125 29.776C33.9375 30.1593 34 30.5676 34 31.001C34 31.8343 33.7083 32.5426 33.125 33.126C32.5416 33.7093 31.8333 34.001 31 34.001H26.15Z" fill="white"/>
</g>
</svg>
);
export default IconIntimo;