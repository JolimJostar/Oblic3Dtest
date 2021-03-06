
import React, { useContext, useEffect, useState } from 'react';
import Image from "next/image";
import Arrow from "../components/Arrow";
import Rocks from "../components/RocksPagin/Rocks";
import SizeChouser from '../components/ItemPage/SizeChouser';
import ThreeJS from '@/components/ThreeJS';



export default function Index({item, mouseOverEvent, mouseOutEvent}) {
  
  const [url, setUrl] = useState(item.cover.data.attributes.url)
  const [howMany, setHowMany] = useState(1)
  const [size, setSize] = useState("")
  const [highlightSize, setHighlightSize] = useState(false)
  const [active, SetActive] = useState("name")
  const [selectedRock, setRock] = useState("Чёрный агат")
  const [wrapper, setWrapper] = useState("обычная")


  function handleAddToCart() {
    if (item && size){
      const newItemInCart = {
        id: Math.random(),
        name: item.name,
        price: item.price,
        size: size,
        rock: selectedRock,
        amount: howMany,
        wrapper: wrapper,
        pic: url,
      }
      const tempItemsInCart = [...state.itemsInCart]
      tempItemsInCart.push(newItemInCart)
      
    } else if (!size){
      setHighlightSize(true)
      setTimeout(() => {
        setHighlightSize(false)
      }, 2000);
    }
  }

  function changeHowMany(value) {
    if (value === "-" && howMany > 1) {
      setHowMany(howMany - 1);
    }
    if (value === "+" && howMany < 10) {
      setHowMany(howMany + 1);
    }
  }

  const myLoader = ({ src }) => {
    return `${src}`
  }

  useEffect(() => {
      const temp = (item.pictures.data.filter((pic) => pic.attributes.caption === selectedRock))
      if (temp[0]){
        setUrl(temp[0].attributes.url)
      } else {
        setUrl(item.cover.data.attributes.url)
      }
  }, [selectedRock])
  

  return (
    <div className='h-full bg-gray-600'>
      <div>
        {item === undefined ? <p>Загрузка</p> :
        
        <div className=" px-[50px] pt-[86px] pb-[20px] flex flex-row justify-between font-main h-[calc(100vh-114px)]">
          
          <div className="LeftPart pb-[80px]">
            <div className="flex flex-col justify-between">
              <div className='flex flex-col space-y-[15px]'>
                <div className={`${active === "name" ? "text-white left-0" : "text-gray left-[-25px]"} relative transition-all duration-500 ease-in-out h-[25px] flex flex-row space-x-[15px] items-center text-[18px] font-medium`}>
                  <div className='overflow-hidden w-[10px] h-[15px]'>
                    <div className={`${active === "name" ? "left-0" : "left-[-10px]" } relative transition-all duration-500 ease-in-out`}>
                      <Arrow />
                    </div>
                  </div>
                  <button 
                    onMouseEnter={mouseOverEvent} 
                    onMouseLeave={mouseOutEvent} 
                    onClick={() => SetActive("name")} 
                  >
                    {item.name}
                  </button>
                </div>
                <div className={`${active === "har" ? "text-white left-0" : "text-gray left-[-25px]"} relative flex transition-all duration-300 ease-in-out h-[25px] flex-col-reverseflex flex-row space-x-[15px] items-center text-[18px] font-medium`}>
                  <div className='overflow-hidden w-[10px] h-[15px]'>
                    <div className={`${active === "har" ? "left-0" : "left-[-10px]" } relative transition-all duration-500 ease-in-out`}>
                      <Arrow />
                    </div>
                  </div>
                  <button 
                    onMouseEnter={mouseOverEvent} 
                    onMouseLeave={mouseOutEvent}
                    onClick={() => SetActive("har")}
                    className='cursor-none'
                  >
                    Характеристики
                  </button>
                </div> 
                <div className={`${active === "setka" ? "text-white left-0" : "text-gray left-[-25px]"} relative transition-all duration-300 ease-in-out h-[25px] flex flex-row space-x-[15px] items-center text-[18px] font-medium`}>
                  <div className='overflow-hidden w-[10px] h-[15px]'>
                    <div className={`${active === "setka" ? "left-0" : "left-[-10px]" } relative transition-all duration-500 ease-in-out`}>
                      <Arrow />
                    </div>
                  </div>
                  <button 
                    onMouseEnter={mouseOverEvent} 
                    onMouseLeave={mouseOutEvent}
                    onClick={() => SetActive("setka")} 
                    className='cursor-none'
                  >
                    Размерная сетка
                  </button>
                </div>
              </div>
              {active === "har" && (
              <div className="ActiveHar flex flex-col space-y-[46px] max-w-[566px]">
                <div className="flex flex-col space-y-[25px] font-main ">
                  <h1 className="text-gray text-[25px] font-medium leading-[34px]">Описание:</h1>
                  <p className="text-white font-normal text-[18px] max-w-[566px] leading-[25px]">{item.desc}</p>
                </div>
                <div className="flex flex-col space-y-[25px] font-main">
                  <h1 className="text-gray text-[25px] font-medium leading-[34px]">Характеристики:</h1>
                  <div className="text-white HarHolder">
                    <div className="HarParam">
                      <h1 className='font-semibold text-[18px] leading-[25px]'>Металл:</h1>
                      <p className='font-normal text-[16px]'>{item.metal.data.attributes.name ? `${item.metal.data.attributes.name}` : ''}</p>
                    </div>
                    <div className="HarParam">
                      <h1 className='font-semibold text-[18px] leading-[25px]'>Камень:</h1>
                      <p className='font-normal text-[16px]'>Чёрный агат</p>
                    </div>
                    <div className="HarParam">
                      <h1 className='font-semibold text-[18px] leading-[25px]'>Размер:</h1>
                      <p className='font-normal text-[16px]'>15 – 26</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {active === "setka" && (
              <div className="RazmeriHolder text-white mt-[50px]">
                <div className="RazmeriH1 font-main font-semibold text-[16px]">
                  <h1>Размер российский</h1>
                  <h1>Размер европейский</h1>
                </div>
                <div className="Razmeri mt-[25px]">
                  {item.ring_sizes.data.map((size) => (
                    <div
                      className="Razmer border-b-[1px] border-[#555] font-main font-normal text-[18px] py-[6px]"
                      key={size.id}
                    >
                      <p className="RazmerP">{size.attributes.size.toString().replace(/\./g, ',')}</p>
                      <p className="RazmerP">{size.attributes.sizeEU.toString().replace(/\./g, ',')}</p>
                    </div>
                  ))}
                </div>
              </div>
                  )}
            </div>
            {active === "name" && (
                <div>
                  <Rocks 
                    mouseOverEvent={mouseOverEvent} 
                    mouseOutEvent={mouseOutEvent} 
                    rocksData={item.rocks.data} 
                    setRock={setRock}
                  />
                </div>
              )}
          </div>
          <div className={`${active === "name" ? "left-[50%]" : "left-[calc(50%+310px)]"} absolute top-[50%] -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out w-[500px] h-[500px] outline outline-1 outline-blue-500`}>
            <ThreeJS />
          </div>
          {active === "name" && (
            <div className="text-white font-semibold text-[16px] flex flex-col justify-between pb-[80px]">
              <h1 className="text-right text-[25px] font-medium">₽ {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h1>
              <div className="LeftPartBottom w-[304px] flex flex-col space-y-[30px]">
                  <div className="RazmerChouseHolder">
                    <p className='mb-[10px] leading-[22px]'>размер</p>
                    <SizeChouser 
                      mouseOverEvent={mouseOverEvent} 
                      mouseOutEvent={mouseOutEvent}
                      highlightSize={highlightSize} 
                      setHighlightSize={setHighlightSize}
                      size={size} 
                      setSize={setSize} 
                      list={item.ring_sizes.data} />
                  </div>
                  <div className="WrapHolder">
                    <p className="mb-[10px] leading-[22px]">упаковка</p>
                    <div className='flex flex-row text-[18px] font-semibold'>
                      <button 
                        onMouseEnter={mouseOverEvent} 
                        onMouseLeave={mouseOutEvent} 
                        onClick={() => setWrapper('обычная')} 
                        className={`${wrapper=== 'обычная' ? 'border-white' : 'border-gray text-gray'} transition-all duration-300 border px-[29px] py-[9px] leading-[25px]`}
                      >
                        обычная
                      </button>
                      <button 
                        onMouseEnter={mouseOverEvent} 
                        onMouseLeave={mouseOutEvent} 
                        onClick={() => setWrapper('подарочная')} 
                        className={`${wrapper=== 'подарочная' ? 'border-white' : 'border-gray text-gray'} transition-all duration-300 px-[29px] py-[9px] border leading-[25px]`}
                      >
                        подарочная
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="HowMany text-[18px] text-white flex flex-row border border-white w-[108px] justify-between px-[15px] py-[9px]">
                      <button 
                        onMouseEnter={mouseOverEvent} 
                        onMouseLeave={mouseOutEvent} 
                        onClick={() => changeHowMany("-")}
                      >
                        <svg width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="15" height="2" fill="white"/>
                        </svg>
                      </button>
                      <p className='leading-[25px]'>{howMany}</p>
                      <button 
                        onMouseEnter={mouseOverEvent} 
                        onMouseLeave={mouseOutEvent} 
                        onClick={() => changeHowMany("+")}
                      >
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M6.75 8.25V15H8.25V8.25H15V6.75H8.25V0H6.75V6.75H0V8.25H6.75Z" fill="white"/>
                        </svg>
                      </button>
                    </div>
                    <button 
                      onMouseEnter={mouseOverEvent} 
                      onMouseLeave={mouseOutEvent} 
                      onClick={() => handleAddToCart()} 
                      className="py-[9px] px-[43px] border border-white hover:text-[#161A16] hover:bg-white font-semibold text-[18px] leading-[25px]"
                    >
                      В корзину
                    </button>
                  </div>
              </div>
            </div>
                      )}
        </div>}
      </div>
    </div>
    
  )
}

export async function getServerSideProps() {

  const data = await fetch(`https://oblic-backend.herokuapp.com/api/rings?filters[slug][$eq]=ring-2&populate[rocks][populate][0]=cover&populate[cover]=*&populate[ring_sizes]=*&populate[pictures]=*&populate[metal]=*`).then(res => res.json())


  return {
    props: {
      item: data.data[0].attributes
    },
  }
}

