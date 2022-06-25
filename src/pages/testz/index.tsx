import { TinySvgTriangle } from "../../components/SvgTriangle";
import styles from './testz.module.scss'
export default function testz({...rest}:any){

 

    let Tz=3.8;
    const triangleSize = `${(20*Tz)} ${20*Tz}, ${30*Tz} ${3*Tz}, ${10*Tz} ${3*Tz}`;
    const triangleSize2 = `${(20*Tz+100)} ${20*Tz}, ${30*Tz+100} ${3*Tz}, ${10*Tz+100} ${3*Tz}`;
    const triangleSize3 = `${(20*Tz+50)} ${5*Tz}, ${30*Tz+50} ${22*Tz}, ${10*Tz+50} ${22*Tz}`;

   

    return(
            <div className={styles.options}  >
                
                <div className={styles.box}>
                    <svg height="120" width={"500"} className={styles.container}>
                        <defs>
                            <linearGradient id={'urlStroke'} x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset={'0%'} stop-color={'#ffffff'}/>
                                <stop offset={'100%'} stop-color={'#ffffff'}/>
                            </linearGradient>
                        </defs>
                            <a href="https://www.google.com" className={styles.aref } target="_blank">
                                <polygon stroke-linejoin="round"  points={triangleSize} className={styles.triangle} stroke={'#ffffff'} stroke-width=".5rem" fill={'#ffffff'}  />
                            </a>
                            
                            <a href="https://www.google.com" className={styles.aref} target="_blank">
                                <polygon stroke-linejoin="round"  points={triangleSize2} className={styles.triangle} stroke={'#ffffff'} stroke-width=".5rem" fill={'#ffffff'}  />
                            </a>
                            <a href="https://www.google.com" className={styles.aref} target="_blank">
                                <polygon stroke-linejoin="round"  points={triangleSize3} className={styles.triangle} stroke={'#ffffff'} stroke-width=".5rem" fill={'#ffffff'}  />
                            </a>
                    </svg>   
                </div>
                <div className={styles.box2}>
                    <svg height="120" width={"500"} className={styles.container}>
                        <defs>
                            <linearGradient id={'urlStroke'} x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset={'0%'} stop-color={'#ffffff'}/>
                                <stop offset={'100%'} stop-color={'#ffffff'}/>
                            </linearGradient>
                        </defs>
                        <a href="https://www.google.com" className={styles.aref } target="_blank">
                            <polygon stroke-linejoin="round"  points={triangleSize} className={styles.triangle} stroke={'#ffffff'} stroke-width=".5rem" fill={'#ffffff'}  />
                        </a>
                        
                        <a href="https://www.google.com" className={styles.aref} target="_blank">
                            <polygon stroke-linejoin="round"  points={triangleSize2} className={styles.triangle} stroke={'#ffffff'} stroke-width=".5rem" fill={'#ffffff'}  />
                        </a>
                        <a href="https://www.google.com" className={styles.aref} target="_blank">
                            <polygon stroke-linejoin="round"  points={triangleSize3} className={styles.triangle} stroke={'#ffffff'} stroke-width=".5rem" fill={'#ffffff'}  />
                        </a>
                    </svg>   
                </div>
                <div className={styles.box3}>
                    <svg height="120" width={"500"} className={styles.container}>
                        <defs>
                            <linearGradient id={'urlStroke'} x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset={'0%'} stop-color={'#ffffff'}/>
                                <stop offset={'100%'} stop-color={'#ffffff'}/>
                            </linearGradient>
                        </defs>
                        <a href="https://www.google.com" className={styles.aref} target="_blank">
                            <polygon stroke-linejoin="round"  points={triangleSize2} className={styles.triangle} stroke={'#ffffff'} stroke-width=".5rem" fill={'#ffffff'}  />
                        </a>
                    </svg>   
                </div>
            </div>


        // <div className={styles.box}>
        //     <TinySvgTriangle className={styles.tinyOne } Tz={5} colors={{fC:"#ffffff",sC:"#ffffff"}} offset={{fC:"0%",sC:"100%"}} />
        //     <TinySvgTriangle className={styles.tiny2 } Tz={5} colors={{fC:"#ffffff",sC:"#ffffff"}} offset={{fC:"0%",sC:"100%"}} />
        //     <TinySvgTriangle className={styles.tiny3 } polygonClass={styles.tiny3Poly} Tz={5} colors={{fC:"#ffffff",sC:"#ffffff"}} offset={{fC:"0%",sC:"100%"}} />
        //     <TinySvgTriangle className={styles.tiny4 } Tz={5} colors={{fC:"#ffffff",sC:"#ffffff"}} offset={{fC:"0%",sC:"100%"}} />
        // </div>
        
    )
}