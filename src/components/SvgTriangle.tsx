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

export function SvgTriangle({className,Tz , children, polygonClass= 'styles.triangle', colors,offset}:SvgTriangleProps){


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
                        <polygon stroke-linejoin="round"  points={triangleSize} className={polygonClass} stroke={urlStroke} stroke-width=".5rem" fill="none"  />
                    </a>
                        {children}
                </svg>   
            )
}


export function TinySvgTriangle({className,Tz , children, polygonClass= 'styles.triangle', colors,offset}:SvgTriangleProps){
    const urlStroke= `url(#${className})`
    const triangleSize = `${(20*Tz)} ${3*Tz}, ${30*Tz} ${20*Tz}, ${10*Tz} ${20*Tz}`;
            return(
                <svg height="100" width={"500"} className={className}>
                    <defs>
                        <linearGradient id={className} x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset={offset.fC} stop-color={colors.fC}/>
                            <stop offset={offset.sC} stop-color={colors.sC}/>
                        </linearGradient>
                    </defs>
                    <a href="https://www.google.com" className={styles.aref} target="_blank">
                        <polygon stroke-linejoin="round"  points={triangleSize} className={polygonClass} stroke={urlStroke} stroke-width=".5rem" fill={urlStroke}  />
                    </a>
                    
                        {children}
                </svg>   
            )
}
//=======================================================//

// import { ReactElement } from "react";

// interface SvgTriangleProps{
//     Tz:any;
//     className?:string;
//     polygonClass?: string;
//     colors:{
//         fC:string;
//         sC:string;
//     };
//     offset:{
//         fC:string;
//         sC:string;
//     }
//     children?: ReactElement;
// }

// export function SvgTriangle({className,Tz , children, polygonClass= 'styles.triangle', colors,offset}:SvgTriangleProps){
//     const urlStroke= `url(#${className})`
//     const triangleSize = `${(20*Tz)} ${3*Tz}, ${30*Tz} ${20*Tz}, ${10*Tz} ${20*Tz}`;
//             return(
//                 <svg height="500" width={"500"} className={className}>
//                     <defs>
//                         <linearGradient id={className} x1="0%" y1="0%" x2="0%" y2="100%">
//                             <stop offset={offset.fC} stop-color={colors.fC}/>
//                             <stop offset={offset.sC} stop-color={colors.sC}/>
//                         </linearGradient>
//                     </defs>
//                         <polygon stroke-linejoin="round"  points={triangleSize} className={polygonClass} stroke={urlStroke} stroke-width=".5rem" fill="none"  />
//                         {children}
//                 </svg>   
//             )
// }


// export function TinySvgTriangle({className,Tz , children, polygonClass= 'styles.triangle', colors,offset}:SvgTriangleProps){
//     const urlStroke= `url(#${className})`
//     const triangleSize = `${(20*Tz)} ${3*Tz}, ${30*Tz} ${20*Tz}, ${10*Tz} ${20*Tz}`;
//             return(
//                 <svg height="200" width={"200"} className={className}>
//                     <defs>
//                         <linearGradient id={className} x1="0%" y1="0%" x2="0%" y2="100%">
//                             <stop offset={offset.fC} stop-color={colors.fC}/>
//                             <stop offset={offset.sC} stop-color={colors.sC}/>
//                         </linearGradient>
//                     </defs>
//                         <polygon stroke-linejoin="round"  points={triangleSize} className={polygonClass} stroke={urlStroke} stroke-width=".5rem" fill="none"  />
//                         {children}
//                 </svg>   
//             )
// }




