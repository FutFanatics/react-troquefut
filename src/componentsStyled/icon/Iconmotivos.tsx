import React from 'react';
interface MotivosProps{
    className?:string;
    width?:number;
    fill?:string;
    height?:string;
}

const IconMotivos: React.FC<MotivosProps> = ({ className , width, height }) =>(
    <svg className={className} width={width} height={height} viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.33333 34.0001C2.41667 34.0001 1.63194 33.6737 0.979167 33.0209C0.326389 32.3681 0 31.5834 0 30.6667V7.33341C0 6.41675 0.326389 5.63203 0.979167 4.97925C1.63194 4.32647 2.41667 4.00008 3.33333 4.00008H10.3333C10.6944 3.00008 11.2986 2.19453 12.1458 1.58341C12.9931 0.972304 13.9444 0.666748 15 0.666748C16.0556 0.666748 17.0069 0.972304 17.8542 1.58341C18.7014 2.19453 19.3056 3.00008 19.6667 4.00008H26.6667C27.5833 4.00008 28.3681 4.32647 29.0208 4.97925C29.6736 5.63203 30 6.41675 30 7.33341V30.6667C30 31.5834 29.6736 32.3681 29.0208 33.0209C28.3681 33.6737 27.5833 34.0001 26.6667 34.0001H3.33333ZM3.33333 30.6667H26.6667V7.33341H3.33333V30.6667ZM6.66667 27.3334H18.3333V24.0001H6.66667V27.3334ZM6.66667 20.6667H23.3333V17.3334H6.66667V20.6667ZM6.66667 14.0001H23.3333V10.6667H6.66667V14.0001ZM15 6.08341C15.3611 6.08341 15.6597 5.96536 15.8958 5.72925C16.1319 5.49314 16.25 5.19453 16.25 4.83341C16.25 4.4723 16.1319 4.17369 15.8958 3.93758C15.6597 3.70147 15.3611 3.58341 15 3.58341C14.6389 3.58341 14.3403 3.70147 14.1042 3.93758C13.8681 4.17369 13.75 4.4723 13.75 4.83341C13.75 5.19453 13.8681 5.49314 14.1042 5.72925C14.3403 5.96536 14.6389 6.08341 15 6.08341Z" fill="#1C1B1F"/>
    </svg>
    
);
export default IconMotivos;







