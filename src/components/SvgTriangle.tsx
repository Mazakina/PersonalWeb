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



