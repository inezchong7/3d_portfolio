import {useRef, useEffect} from 'react'

import planeScene from '../assets/3d/plane.glb'
import {useAnimations, useGLTF} from '@react-three/drei'

const Plane = ({ isRotating, ...props}) => {
  const ref = useRef();
  const {scene, animations} = useGLTF(planeScene);
  //implement animation
  //ref = references original mesh
  const {actions} = useAnimations(animations, ref);

  //turn plane on and off
  useEffect(() => {
    if(isRotating) {
        actions['Take 001'].play();
    } else {
        actions['Take 001'].stop();
    }
  }, [actions, isRotating])

  return (
    //attach ref
    <mesh {...props} ref={ref}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Plane