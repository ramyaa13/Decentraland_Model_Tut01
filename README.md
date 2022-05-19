# Decentraland_Model_Tut01

Install Node.Js Latest Version

// Open Command Prompt and install Decentraland SDK

npm install -g decentraland

// Create New Folder

dcl init

dcl start

## Tutorial

Go to Decentraland Builder, Create a new Scene of 1x1 land parcel.
Add Name and Description
Create scene with some in build assets

## Import Custom 3D Model

1. Download low poly gltf/glb 3D Model.
2. Upload Zip file in the builder
3. Drag and Drop into the scene.

Download the builder scene as a Code.

Unzip the Project file and run commands.

Import Utils library for interaction.

npm install @dcl/ecs-scene-utils -B

in Game.Ts add the header.

import * as utils from '@dcl/ecs-scene-utils'


Reference Links:
https://docs.decentraland.org/development-guide/deploy-third-party/

https://docs.decentraland.org/development-guide/SDK-101/

https://github.com/decentraland/decentraland-ecs-utils#trigger-component

https://github.com/orgs/decentraland-scenes/repositories?type=all

