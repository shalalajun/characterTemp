export default [
    {
        name: 'environmentMapTexture',
        type: 'cubeTexture',
        path:  
        [
            'textures/environmentMap/px.jpg',
            'textures/environmentMap/nx.jpg',
            'textures/environmentMap/py.jpg',
            'textures/environmentMap/ny.jpg',
            'textures/environmentMap/pz.jpg',
            'textures/environmentMap/nz.jpg'
        ]
    },
    {
        name: 'grassColorTexture',
        type: 'texture',
        path: 'textures/dirt/color.jpg'

    },
    {
        name: 'grassNormalTexture',
        type: 'texture',
        path:  'textures/dirt/normal.jpg'
    },
    {
        name: 'catTexture',
        type: 'texture',
        path: 'textures/cat/cat.jpg'
        
    },
    {
        name: 'cat',
        type: 'gltfModel',
        path: 'models/Cat/cat.glb'
    },
    {
        name: 'train',
        type: 'gltfModel',
        path: 'models/Train/train.glb'
    },
    {
        name: 'girl',
        type: 'gltfModel',
        path: 'models/Girl/girl.glb'
    },
    {
        name: 'girlTexture',
        type: 'texture',
        path: 'textures/girl/girlTex.png'
    }

]