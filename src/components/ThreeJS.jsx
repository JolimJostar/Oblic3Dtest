import { useRouter } from 'next/router'
import useStore from '@/helpers/store'
import { useEffect } from 'react'
import Header from '@/config'
import Dom from '@/components/layout/dom'
import dynamic from 'next/dynamic'

const LCanvas = dynamic(() => import('@/components/layout/canvas'), {
    ssr: false,
})

const Box = dynamic(() => import('@/components/canvas/Box'), {
    ssr: false,
  })


const Balance = () => {

    return (
        <>
            <LCanvas>
                <Box />
            </LCanvas>
        </>
    )
}

export default function ThreeJS({ Component, pageProps = { title: 'index' } }) {
    const router = useRouter()
  
    useEffect(() => {
      useStore.setState({ router })
    }, [router])
  
    
  
    return (
      <>
        <Header title={pageProps.title} />
          <Balance  />      
      </>
    )
  }