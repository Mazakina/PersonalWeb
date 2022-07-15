import { motion } from "framer-motion";
import { ReactElement } from "react";
import styles from './SvgTriangle.module.scss'
interface SvgTriangleProps{
    sizeMultiplier:any;
    className?:string;
    polygonClass?: string;
    colors:{
        firstColor:string;
        secondColor:string;
    };
    offset:{
        firstColor:string;
        secondColor:string;
    }
    children?: ReactElement;
    currentImage?: string;
}

export function SvgTriangle({className,sizeMultiplier , children, colors,offset}:SvgTriangleProps){


    const urlStroke= `url(#${className})`
    const triangleSize = `${(20*sizeMultiplier)} ${3*sizeMultiplier}, ${30*sizeMultiplier} ${20*sizeMultiplier}, ${10*sizeMultiplier} ${20*sizeMultiplier}`;
            return(
                <svg height="500" width={"500"} className={className}>
                    <defs>
                        <linearGradient id={className} x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset={offset.firstColor} stopColor={colors.firstColor}/>
                            <stop offset={offset.secondColor} stopColor={colors.secondColor}/>
                        </linearGradient>
                    </defs>
                    <a href="" id="a" className={styles.aref}>
                        <polygon strokeLinejoin="round" points={triangleSize}  stroke={urlStroke} strokeWidth=".5rem" fill="none"  />
                    </a>
                        {children}
                </svg>   
            )
}


export function SvgTriangleImg({className,sizeMultiplier , children, colors,offset,currentImage='/images/projeto1.png' }:SvgTriangleProps){


    const urlStroke= `url(#${className})`
    const triangleSize = `${(20*sizeMultiplier)} ${3*sizeMultiplier}, ${30*sizeMultiplier} ${20*sizeMultiplier}, ${10*sizeMultiplier} ${20*sizeMultiplier}`;
            return(
                <svg height="500" width={"500"} className={className}>
                    <defs>
                        <filter id="f1" x="0" y="0">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
                        </filter>
                        <linearGradient id={className} x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset={offset.firstColor} stopColor={colors.firstColor}/>
                            <stop offset={offset.secondColor} stopColor={colors.secondColor}/>
                        </linearGradient>
                        <pattern id="image1" x="0%" y="0%" height="100%" width="100%" viewBox="0 0 500 500">
                            <image filter={"urL(#f1)"} x="-50%" y="-50%" width="1000" height="1000" href={currentImage}></image>
                        </pattern>
                        <polygon id='polygon'  strokeLinejoin="round" points={triangleSize}  stroke={urlStroke} strokeWidth=".5rem" />
                    </defs>
                    <a href="" id="a" className={styles.aref}>
                        <use href="#polygon" fill="url(#image1)"/>
                    </a>
                        {children}
                </svg>   
            )
}





