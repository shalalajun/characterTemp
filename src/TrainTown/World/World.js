import * as THREE from 'three'
import TrainTown from "../TrainTown.js";
import Floor from './Floor.js';
import Cat from './Cat.js'
import Environment from './Environment.js';
import Girl from './Girl.js';



export default class World 
{
    constructor()
    {
        this.trainTown = new TrainTown()
        this.scene = this.trainTown.scene
        this.resources = this.trainTown.resources
        this.resources.on('ready',()=>
        {
            // 리소스가 모두 로드되고 환경을 인스턴스한다.
            //console.log('ready')
            this.floor = new Floor()   
            this.cat = new Cat()
            this.girl = new Girl()
            this.environment = new Environment()
        })

       
       
    }

   

    update()
    {
       
        if(this.cat)
        {
            this.cat.update()
        }
        if(this.girl)
        {
            this.girl.update()
        }
        if(this.floor)
        {
            this.floor.update()
        }
    }
}