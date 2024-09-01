import { Canvas, useFrame } from '@react-three/fiber'
import React from 'react'
import "./style.css"
import { Environment, OrbitControls, ScrollControls, useScroll } from '@react-three/drei';
import MacControls from './MacControls';

const App = () => {


  return (
    <>
      <div className="w-full h-full newfont">
        <div className='navbar line flex gap-10 py-5 absolute top-0 left-1/2 -translate-x-1/2'>
          {["iPhone","iPad","Macbook","ios","mac", "services","products"].map((e)=>(
            <a href="/" className="text-white capitalize font-[500] text-lg">{e}</a>
          ))}
        </div>
        
        <div className=' flex flex-col items-center justify-center absolute top-32 text-white left-1/2 -translate-x-1/2 '>
          <h3 className='masked text-4xl md:text-5xl  lg:text-7xl tracking-tighter font-[700]'>Macbook pro.</h3>
          <h5 className='text-[10px] md:text-[20px]'>Oh so pro!</h5>
          <p className='text-center w-full md:w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nesciunt.</p>
        </div>
          <Canvas camera={{ fov: 20, position: [0, -10, 160] }}>
            <Environment files={'https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr'} />
            <ScrollControls pages={3}>
              <MacControls />
            </ScrollControls>
          </Canvas>
      </div >
    </>
  )
}

export default App