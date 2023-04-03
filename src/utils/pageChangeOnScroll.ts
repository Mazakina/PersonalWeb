import { NextRouter } from "next/router";
import { Dispatch, MutableRefObject, SetStateAction } from "react";

interface IPageChangeOnScroll{
  ref:MutableRefObject<HTMLDivElement>,
  tickCount:number,
  setTickCount:Dispatch<SetStateAction<number>>,
  lastDirection:number,
  isThrottled:boolean,
  router:NextRouter,
  nextAdress?:string,
  prevAdress?:string
}

export function pageChangeOnScroll({ref,tickCount,lastDirection,isThrottled,router,nextAdress,setTickCount,prevAdress}:IPageChangeOnScroll){
  ref.current.addEventListener('wheel', (event) => {
    const deltaY = event.deltaY
    let currentDirection = deltaY > 0? -1 : 1
    if(currentDirection !== lastDirection){
      tickCount = 0 
    }
    lastDirection = currentDirection;
    if(!isThrottled) {
      isThrottled = true;
      setTimeout(function() {
        isThrottled = false; 
      }, 300);
      setTickCount((tickCount) => Math.round(deltaY/100))
      tickCount += Math.round(deltaY/100)
    }
    if (tickCount >= 1 && nextAdress) {
      router.push(nextAdress);

      tickCount = 0; 
      setTickCount(0)

    }
    if(tickCount <= -1 && prevAdress) {
      router.push(prevAdress);
      tickCount = 0; 
      setTickCount(0)

    }

    setTimeout(() =>{
      tickCount = 0
      setTickCount(0)
    },2000)
  })
}