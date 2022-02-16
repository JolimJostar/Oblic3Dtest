import useStore from '@/helpers/store'
import { useEffect, useRef } from 'react'

const Dom = ({ children }) => {
  const ref = useRef(null)
  useEffect(() => {
    useStore.setState({ dom: ref })
  }, [])

  return (
    <div
      className='left-[50%] top-[50%] absolute -translate-x-1/2 -translate-y-1/2 z-10 w-[500px] h-[500px] overflow-hidden dom bg-transparent'
      ref={ref}
    >
      {children}
    </div>
  )
}

export default Dom
