import * as utils from '@dcl/ecs-scene-utils'

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("e8c04948-0255-4036-86ec-caae122f370f/GroundFloorSciFi_04/GroundFloorSciFi_04.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const cactusWand = new Entity('cactusWand')
engine.addEntity(cactusWand)
cactusWand.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(14.5, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
cactusWand.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("5f25759e-dd1b-4294-9bc7-d8e66c198e9f/PlantSF_07/PlantSF_07.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
cactusWand.addComponentOrReplace(gltfShape2)

const moundPansy = new Entity('moundPansy')
engine.addEntity(moundPansy)
moundPansy.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(8, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
moundPansy.addComponentOrReplace(transform4)
const gltfShape3 = new GLTFShape("72dadfbe-5b8c-4bea-bfb9-a80927d1da5c/PlantSF_04/PlantSF_04.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
moundPansy.addComponentOrReplace(gltfShape3)

const smoothCactus = new Entity('smoothCactus')
engine.addEntity(smoothCactus)
smoothCactus.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(3, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
smoothCactus.addComponentOrReplace(transform5)
const gltfShape4 = new GLTFShape("c94a39e6-cd04-49c0-8687-a547f4d673ba/PlantSF_03/PlantSF_03.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
smoothCactus.addComponentOrReplace(gltfShape4)

//Cuatomised 3d Fish Model with scale animation

//Initialising 3D Fish Models and its Tranforms
let deflatedScale = new Vector3(0.1, 0.1, 0.1)
let inflatedScale = new Vector3(0.5, 0.5, 0.5)

let IsFish: boolean = false

const purpleBall = new Entity('purpleBall')
engine.addEntity(purpleBall) 
purpleBall.addComponent(new Transform({
  position: new Vector3(9, 1, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: deflatedScale
}))
purpleBall.addComponent(new GLTFShape("3d701cc5-2bdd-471d-b117-3af813052cde/Fish/scene.gltf"))

//Enabling Scale Animation by Mouse Pointer Click
purpleBall.addComponent(new OnPointerDown(() => {
ScaleAnimation()
log("fish clicked")
}))

//Enabling Scale Animation by Player Trigger
purpleBall.addComponent(new utils.TriggerComponent(new utils.TriggerSphereShape(2, Vector3.Zero()),
{
  onCameraEnter :() => {
    ScaleAnimation()
    log('triggered!')
  }
}))

//Scaling Animation
function ScaleAnimation()
{
  if(IsFish) return
  IsFish = true
  purpleBall.addComponentOrReplace(new utils.ScaleTransformComponent(deflatedScale, inflatedScale, 3, () => {
    purpleBall.addComponentOrReplace(new utils.Delay(2000, () => {
      purpleBall.addComponentOrReplace(new utils.ScaleTransformComponent(inflatedScale, deflatedScale, 5, ()=>{
        IsFish = false
       }, utils.InterpolationType.EASEINQUAD))
    }))
  },utils.InterpolationType.EASEOUTQUAD))
}