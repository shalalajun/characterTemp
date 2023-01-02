import * as THREE from 'three'
import TrainTown from "../TrainTown.js";
import RayControl from '../Utils/RayControl.js';

export default class Floor
{
    constructor()
    {
        this.trainTown = new TrainTown()
        this.scene = this.trainTown.scene
        this.resources = this.trainTown.resources
        this.time = this.trainTown.time
        

        this.camera = this.trainTown.camera.instance
       

        this.raycontrol = new RayControl(this.camera)

      

        this.setGeometry()
        this.setTextures()
        this.setMaterial()
        this.setMesh()
        this.raycontrol.checkClick('ground','상자','ball') // update에 넣으면 너무 무거워지니 셋업에 넣는다.
       
    }

    setGeometry()
    {
        this.geometry = new THREE.CircleGeometry(80,64)
    }

    setTextures()
    {
        this.textures = {}
        this.textures.color = this.resources.items.grassColorTexture
        //console.log(this.textures.color)
        this.textures.color.encoding = THREE.sRGBEncoding
        this.textures.color.repeat.set(1.5, 1.5)
        this.textures.color.wrapS = THREE.RepeatWrapping
        this.textures.color.wrapT = THREE.RepeatWrapping


        this.textures.normal = this.resources.items.grassNormalTexture
        this.textures.normal.repeat.set(1.5,1.5)
        this.textures.normal.wrapS = THREE.RepeatWrapping
        this.textures.normal.wrapT = THREE.RepeatWrapping
    }
    
    setMaterial()
    {
        this.material = new THREE.MeshStandardMaterial(
            {
             map:this.textures.color, 
             normalMap:this.textures.normal
            })
    }
    
    setMesh()
    {
        this.mesh = new THREE.Mesh(this.geometry,this.material) 
        this.mesh.rotation.x = -Math.PI * 0.5
        this.mesh.receiveShadow = true
        this.mesh.name = 'ground' // 오브젝트에는 이름을 할당할 수 있다!!
        this.scene.add(this.mesh)

       

        /**
         * testPosition
         */

        this.box = new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial())
        this.box.position.set(0,8,0)
        this.box.name = '상자'
        this.scene.add(this.box)


        this.sphere = new THREE.Mesh(new THREE.SphereGeometry(2,13,26),new THREE.MeshBasicMaterial())
        this.sphere.position.set(0,5,0)
        this.sphere.name = 'ball'
        this.scene.add(this.sphere)

     
    }

    update()
    {   
        this.sphere.position.y = Math.sin(this.time.elapsed * 0.1 * 0.01) * 8.5
        this.raycontrol.update(this.box, this.sphere, this.mesh)
    }

}