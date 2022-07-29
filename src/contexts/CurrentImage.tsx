import {createContext, ReactNode, useContext, useState} from 'react'

interface currentImageProps{
  children:ReactNode;
}

interface currentImageType{
  activeImage: string,
  setActiveImage: any;
}

const CurrentImageContext = createContext({} as any)

export function CurrentImageProvider({children}:currentImageProps){
  const [activeImage, setActiveImage] = useState(4)


  return(
    <CurrentImageContext.Provider value={{activeImage,setActiveImage}}>
      {children}
    </CurrentImageContext.Provider>
  )
}

export const useCurrentImage = ()=> useContext(CurrentImageContext)