import { useState } from "react"

function useFullscreen(dom: HTMLElement = document.documentElement){
  const [isFullscreen, setIsFullscreen] = useState(false)

  const toggleFullscreen = () => {
    if(isFullscreen){
      document.exitFullscreen()
    }else{
      dom.requestFullscreen()
    }
    setIsFullscreen(!isFullscreen)
  }

  return {
    isFullscreen,
    toggleFullscreen
  }
}

export default useFullscreen