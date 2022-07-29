import { ReactElement } from "react";
import { useCurrentImage } from "../../contexts/CurrentImage";
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
    currentImage?: number;
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


export function SvgTriangleImg({className,sizeMultiplier , children, colors,offset }:SvgTriangleProps){
    const {activeImage} = useCurrentImage()

    const imagesArray = [
        {
          backgroundImg:'/images/projeto1.png',
          type:'PROJECTS'
        },{
          backgroundImg:'/images/htmlImg.png',
          type:'PROJECTS'
        },{
            backgroundImg:'/images/Rect1.png',
            type:'PROJECTS'
        },{
            backgroundImg:'/images/projeto2.png',
            type:'PROJECTS'
        },{
            backgroundImg:'/images/projeto1.png',
            type:''
    }]

    const urlStroke= `url(#${className})`
    const triangleSize = `${(20*sizeMultiplier)} ${3*sizeMultiplier}, ${30*sizeMultiplier} ${20*sizeMultiplier}, ${10*sizeMultiplier} ${20*sizeMultiplier}`;
            return(
                <svg height="500" width={"500"} className={className}>
                    <defs>
                        <filter id="f1" x="0" y="0">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="13" />
                        </filter>
                        <linearGradient id={className} x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset={offset.firstColor} stopColor={colors.firstColor}/>
                            <stop offset={offset.secondColor} stopColor={colors.secondColor}/>
                        </linearGradient>
                        <pattern id="image1" x="0%" y="0%" height="100%" width="100%" viewBox="0 0 500 500">
                            <image filter={"urL(#f1)"} x="-50%" y="-40%" width="1000" height="1000" href={imagesArray[activeImage].backgroundImg}></image>
                        </pattern>
                        <polygon id='polygon'  strokeLinejoin="round" points={triangleSize}  stroke={urlStroke} strokeWidth=".5rem" />
                    </defs>
                    <g>
                        <a href="" id="a" className={styles.aref}>
                            <use href="#polygon" fill="url(#image1)"/>
                        </a>
                        <text fontSize={'2rem'} fontWeight="regular" letterSpacing={'2'} fontFamily={'anton'} x="52%" y="52%" fill='white' className={styles.hoverTitle} >
                            {imagesArray[activeImage].type}
                        </text>
                    </g>

                </svg>   
            )
}





