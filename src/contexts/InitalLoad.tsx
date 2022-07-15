import {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import { useRouter } from 'next/router'
interface initialLoadProps{
  children:ReactNode;
}

interface initialLoadType {
  isInitialLoad:boolean;
  asPath:string,
}

const InitialLoadContext = createContext({} as initialLoadType
)

export function InitialLoadProvider({children}:initialLoadProps) {
  const [initialLoad,setInitialLoad] =  useState(true)

  const {asPath} = useRouter();

  useEffect(() => {
    setInitialLoad(false)
  },[asPath])


  return(
    <InitialLoadContext.Provider value={{isInitialLoad:initialLoad, asPath:asPath}}>
      {children}
    </InitialLoadContext.Provider>
  )
}

export const useInitialLoad = ()=> useContext(InitialLoadContext)