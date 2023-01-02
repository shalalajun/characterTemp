import * as THREE from 'three'
import TrainTown from "./TrainTown.js";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'


export default class Camera
{
    constructor()
    {
      this.trainTown = new TrainTown()
      this.sizes = this.trainTown.sizes
      this.scene = this.trainTown.scene
      this.canvas = this.trainTown.canvas

      this.setInstance()
      this.setControls()
    }

    setInstance()
    {
        this.instance = new THREE.PerspectiveCamera(
            35, 
            this.sizes.width / this.sizes.height,
            0.1,
            1000
        )
        this.instance.position.set(16, 8, 12)
        this.scene.add(this.instance)
    }

    setControls()
    {
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true
    }

    resize()
    {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update()
    {
        this.controls.update()
    }
}