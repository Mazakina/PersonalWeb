import { ReactElement } from "react";
import styles from './SvgTriangle.module.scss'
interface SvgTriangleProps{
    Tz:any;
    className?:string;
    polygonClass?: string;
    colors:{
        fC:string;
        sC:string;
    };
    offset:{
        fC:string;
        sC:string;
    }
    children?: ReactElement;
}

export function SvgTriangle({className,Tz , children, colors,offset}:SvgTriangleProps){


    const urlStroke= `url(#${className})`
    const triangleSize = `${(20*Tz)} ${3*Tz}, ${30*Tz} ${20*Tz}, ${10*Tz} ${20*Tz}`;
            return(
                <svg height="500" width={"500"} className={className}>
                    <defs>
                        <linearGradient id={className} x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset={offset.fC} stop-color={colors.fC}/>
                            <stop offset={offset.sC} stop-color={colors.sC}/>
                        </linearGradient>
                    </defs>
                    <a href="https://www.google.com" id="a" className={styles.aref} target="_blank">
                        <polygon stroke-linejoin="round" points={triangleSize}  stroke={urlStroke} stroke-width=".5rem" fill="none"  />
                    </a>
                        {children}
                </svg>   
            )
}



