import * as THREE from './three.module.js';
import { OrbitControls } from './OrbitControls.js';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputEncoding = THREE.sRGBEncoding;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(0,300,300);
controls.update();


const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(100, 300, 50);
scene.add(directionalLight); 

let startPlay = performance.now();

let maple, mapleLeaf;
let mapleMaterial;
let endPlay = (performance.now() - startPlay);

particles();
outdoorLamp();
lighting();
baseGround();
secondBase()
upperBuilding();
mainRoof();
buildingDeck();
giantTree()

function particles() {
  const points = [];

  for (let i = 0; i < 150; i++) {
    let maple = new THREE.Vector3(
      Math.random() * 200 - 100,
      Math.random() * 300 - 100,
      Math.random() * 250 - 100
    );
    points.push(maple);
  }

  mapleLeaf= new THREE.BufferGeometry().setFromPoints(points);

  let leaf = new THREE.TextureLoader().load("assets/images/maple.png");
  mapleMaterial = new THREE.PointsMaterial({
    color: 0xFAA073,
    size: 2,
    map: leaf,
  });
  
  maple = new THREE.Points(mapleLeaf, mapleMaterial);
  scene.add(maple);

}

function animateParticles() {
    if(maple.position.y < -110)
      maple.position.y = 110
    
    mapleLeaf.verticesNeedUpdate = true;
    maple.position.y -= 0.9;
  }

function outdoorLamp() {
  const lamp = new THREE.Group()
  scene.add(lamp);

  let lampMaterial = new THREE.MeshLambertMaterial({color: "#EBA750"});

    const OlampGeometry = new THREE.BoxGeometry(15, 5, 20);
    const Olamp = new THREE.Mesh(OlampGeometry, lampMaterial);
    Olamp.rotation.x=190;
    Olamp.position.set(-10, 225, 0);
    scene.add(Olamp)

    const AlampGeometry = new THREE.BoxGeometry(5, 5, 5);
    const Alamp = new THREE.Mesh(AlampGeometry, lampMaterial);
    Alamp.rotation.x=190;
    Alamp.position.set(-30, 174, 20);
    scene.add(Alamp)
    
    const Blamp = new THREE.Mesh(AlampGeometry, lampMaterial);
    Blamp.rotation.x=190;
    Blamp.position.set(-80, 170, 40);
    scene.add(Blamp)

    const Clamp = new THREE.Mesh(AlampGeometry, lampMaterial);
    Clamp.rotation.x=190;
    Clamp.position.set(-80, 165, -60);
    scene.add(Clamp)

    //2nd
    const Dlamp = new THREE.Mesh(AlampGeometry, lampMaterial);
    Dlamp.rotation.x=190;
    Dlamp.position.set(-30, 128, 40);
    scene.add(Dlamp)

    const Elamp = new THREE.Mesh(AlampGeometry, lampMaterial);
    Elamp.rotation.x=190;
    Elamp.position.set(-90, 128, 55);
    scene.add(Elamp)

    const Flamp = new THREE.Mesh(AlampGeometry, lampMaterial);
    Flamp.rotation.x=190;
    Flamp.position.set(-90, 120, -90);
    scene.add(Flamp)

    const Glamp = new THREE.Mesh(AlampGeometry, lampMaterial);
    Glamp.rotation.x=190;
    Glamp.position.set(63, 115, 70);
    scene.add(Glamp)

    const Hlamp = new THREE.Mesh(AlampGeometry, lampMaterial);
    Hlamp.rotation.x=190;
    Hlamp.position.set(63, 105, -70);
    scene.add(Hlamp)

    const Ilamp = new THREE.Mesh(AlampGeometry, lampMaterial);
    Ilamp.rotation.x=190;
    Ilamp.position.set(-80, 73, -65);
    scene.add(Ilamp)

    const Jlamp = new THREE.Mesh(AlampGeometry, lampMaterial);
    Jlamp.rotation.x=190;
    Jlamp.position.set(-40, 18, -30);
    scene.add(Jlamp)

    const Klamp = new THREE.Mesh(AlampGeometry, lampMaterial);
    Klamp.rotation.x=190;
    Klamp.position.set(40, 18, -30);
    scene.add(Klamp)

    const Llamp = new THREE.Mesh(AlampGeometry, lampMaterial);
    Llamp.rotation.x=190;
    Llamp.position.set(40, 25, 60);
    scene.add(Llamp)

    const Mlamp = new THREE.Mesh(AlampGeometry, lampMaterial);
    Mlamp.rotation.x=190;
    Mlamp.position.set(-50, 25, 60);
    scene.add(Mlamp)
    
}

function lighting() {

  const oLight = new THREE.PointLight(0xEF833D, 5, 200);
  oLight.position.set(-10, 225, 0);
  oLight.castShadow = true;
  scene.add(oLight);

  const OLight = new THREE.PointLight(0xEF833D, 5, 50);
  OLight.position.set(-10, 220, 10);
  OLight.castShadow = true;
  scene.add(OLight);

  const ALight = new THREE.PointLight(0xEF833D, 5, 100);
  ALight.position.set(-90, 128, 60);
  ALight.castShadow = true;
  scene.add(ALight);

  const BLight = new THREE.PointLight(0xEF833D, 5, 30);
  BLight.position.set(-30, 174, 25);
  BLight.castShadow = true;
  scene.add(BLight);

  const CLight = new THREE.PointLight(0xEF833D, 5, 50);
  CLight.position.set(-80, 180, 45);
  CLight.castShadow = true;
  scene.add(CLight);

  const DLight = new THREE.PointLight(0xEF833D, 5, 30);
  DLight.position.set(-30, 128, 45);
  DLight.castShadow = true;
  scene.add(DLight);

  const ELight = new THREE.PointLight(0xEF833D, 5, 80);
  ELight.position.set(-95, 115, -90);
  ELight.castShadow = true;
  scene.add(ELight);
  
  const FLight = new THREE.PointLight(0xEF833D, 5, 80);
  FLight.position.set(-75, 150, -55);
  FLight.castShadow = true;
  scene.add(FLight);

  const GLight = new THREE.PointLight(0xEF833D, 5, 80);
  GLight.position.set(63, 118, 73);
  GLight.castShadow = true;
  scene.add(GLight);

  const HLight = new THREE.PointLight(0xEF833D, 5, 80);
  HLight.position.set(63, 108, -68);
  HLight.castShadow = true;
  scene.add(HLight);

  const JLight = new THREE.PointLight(0xEF833D, 5, 80);
  JLight.position.set(-40, 18, -33);
  JLight.castShadow = true;
  scene.add(JLight);

  const KLight = new THREE.PointLight(0xEF833D, 5, 80);
  KLight.position.set(35, 25, -30);
  KLight.castShadow = true;
  scene.add(KLight);

  const LLight = new THREE.PointLight(0xEF833D, 5, 80);
  LLight.position.set(40, 35, 60);
  LLight.castShadow = true;
  scene.add(LLight);

  const MLight = new THREE.PointLight(0xEF833D, 5, 50);
  MLight.position.set(-50, 32, 63);
  MLight.castShadow = true;
  scene.add(MLight);

}

function baseGround(){
    const ground = new THREE.Group();
    scene.add(ground);

    let groundT = new THREE.TextureLoader().load("assets/textures/groundgrass.jpg");
    let groundTextureMaterial = new THREE.MeshLambertMaterial({
      groundTexture: groundT,
      groundTScale: 0.0003,
      map : groundT
    })

    const groundPlaneGeometry = new THREE.PlaneGeometry(400,300,5,30);
    const groundBase = new THREE.Mesh(groundPlaneGeometry, groundTextureMaterial);
    groundBase.material.side = THREE.DoubleSide;
    groundBase.rotation.x= 190;
    groundBase.position.set(-.5,.7,0);

    scene.add(groundBase);
}


function secondBase() {
  const rock = new THREE.Group();
  scene.add(rock);

  let rockT = new THREE.TextureLoader().load("assets/textures/drock.png");
  let rockMaterial = new THREE.MeshLambertMaterial({
    rockTexture: rockT,
    rockTScale: 1.3,
    map : rockT
  })
  
  const fRockGeometry = new THREE.BoxGeometry(80,80,10);
  const fRock = new THREE.Mesh(fRockGeometry, rockMaterial);
  fRock.rotation.x= 190;
  fRock.position.set (0,6,2);
  scene.add(fRock);

  const sRockGeometry = new THREE.BoxGeometry(60,60,80);
  const sRock = new THREE.Mesh(sRockGeometry, rockMaterial);
  sRock.rotation.x= 190;
  sRock.position.set (0,50,2);
  scene.add(sRock);

  const tRockGeometry = new THREE.BoxGeometry(40,50,60);
  const tRock = new THREE.Mesh(tRockGeometry, rockMaterial);
  tRock.rotation.x= 190;
  tRock.position.set (-20,30,40);
  scene.add(tRock);

  const aRockGeometry = new THREE.BoxGeometry(40,40,70);
  const aRock = new THREE.Mesh(aRockGeometry, rockMaterial);
  aRock.rotation.x= 190;
  aRock.position.set (0,35,30);
  scene.add(aRock);

  const qRockGeometry = new THREE.BoxGeometry(70,70,15);
  const qRock = new THREE.Mesh(qRockGeometry, rockMaterial);
  qRock.rotation.x= 190;
  qRock.position.set (-10,92,-15);
  scene.add(qRock);

  const bRockGeometry = new THREE.BoxGeometry(50,50,25);
  const bRock = new THREE.Mesh(bRockGeometry, rockMaterial);
  bRock.rotation.x= 190;
  bRock.position.set (-10,110,-15);
  scene.add(bRock);

  const cRockGeometry = new THREE.BoxGeometry(40,20,15);
  const cRock = new THREE.Mesh(cRockGeometry, rockMaterial);
  cRock.rotation.x= 190;
  cRock.position.set (0, 105, 10);
  scene.add(cRock);

  const dRockGeometry = new THREE.BoxGeometry(60,35,20);
  const dRock = new THREE.Mesh(dRockGeometry, rockMaterial);
  dRock.rotation.x= 190;
  dRock.position.set (-50, 110, 15);
  scene.add(dRock);

}

function upperBuilding() {
  const inn = new THREE.Group();
  scene.add(inn);

  const mainBGeometry = new THREE.BoxGeometry(60,60,70);
  const mainBMaterial =  new THREE.MeshPhongMaterial({color: "#A52A20"});
  const mainB = new THREE.Mesh(mainBGeometry, mainBMaterial);
  mainB.rotation.x= 190;
  mainB.position.set (-10, 155, -15);
  scene.add(mainB);

  const mainWGeometry = new THREE.BoxGeometry(50,80,30);
  const mainWMaterial =  new THREE.MeshPhongMaterial({color: "#A52A20"});
  const mainW = new THREE.Mesh(mainWGeometry, mainWMaterial);
  mainW.rotation.x= 190;
  mainW.position.set (-50, 132, -10);
  scene.add(mainW);

  const mainEGeometry = new THREE.BoxGeometry(45,90,25);
  const mainEMaterial =  new THREE.MeshPhongMaterial({color: "#A52A20"});
  const mainE = new THREE.Mesh(mainEGeometry, mainEMaterial);
  mainE.rotation.x= 190;
  mainE.position.set (20, 120, -10);
  scene.add(mainE);

  const mainTGeometry = new THREE.BoxGeometry(30,30,25);
  const mainTMaterial =  new THREE.MeshPhongMaterial({color: "#A52A20"});
  const mainT = new THREE.Mesh(mainTGeometry, mainTMaterial);
  mainT.rotation.x= 190;
  mainT.position.set (-10, 225, -15);
  scene.add(mainT);

}

function mainRoof() {
  const roof = new THREE.Group();
  scene.add(roof);

  let roofColorMaterial =  new THREE.MeshBasicMaterial({color: "#193347"});

  //roof for east bldg
  const roofBGeometry = new THREE.BoxGeometry(40,130,5);
  const roofB = new THREE.Mesh(roofBGeometry, roofColorMaterial);
  roofB.rotation.x= 190;
  roofB.position.set (20, 133, -10);
  scene.add(roofB);

  const roofbGeometry = new THREE.BoxGeometry(30,120,10);
  const roofb = new THREE.Mesh(roofbGeometry, roofColorMaterial);
  roofb.rotation.x= 190;
  roofb.position.set (20, 145, -10);
  scene.add(roofb);


  const roofAGeometry = new THREE.BoxGeometry(50,120,5);
  const roofA = new THREE.Mesh(roofAGeometry, roofColorMaterial);
  roofA.rotation.x= 190;
  roofA.position.set (20, 133, -10);
  scene.add(roofA);

  const roofaGeometry = new THREE.BoxGeometry(40,130,15);
  const roofa = new THREE.Mesh(roofaGeometry, roofColorMaterial);
  roofa.rotation.x= 190;
  roofa.position.set (20, 136, -10);
  scene.add(roofa);

  const roofCGeometry = new THREE.BoxGeometry(60,110,5);
  const roofC = new THREE.Mesh(roofCGeometry, roofColorMaterial);
  roofC.rotation.x= 190;
  roofC.position.set (20, 133, -10);
  scene.add(roofC);

  const roofcGeometry = new THREE.BoxGeometry(50,100,20);
  const roofc = new THREE.Mesh(roofcGeometry, roofColorMaterial);
  roofC.rotation.x= 190;
  roofC.position.set (20, 136, -10);
  scene.add(roofc);

  const roofFGeometry = new THREE.BoxGeometry(70,100,5);
  const roofF = new THREE.Mesh(roofFGeometry, roofColorMaterial);
  roofF.rotation.x= 190;
  roofF.position.set (20, 133, -10);
  scene.add(roofF);

  const roofEGeometry = new THREE.BoxGeometry(80,90,5);
  const roofE = new THREE.Mesh(roofEGeometry, roofColorMaterial);
  roofE.rotation.x= 190;
  roofE.position.set (20, 133, -10);
  scene.add(roofE);

  const roofGGeometry = new THREE.BoxGeometry(90,80,5);
  const roofG = new THREE.Mesh(roofGGeometry, roofColorMaterial);
  roofG.rotation.x= 190;
  roofG.position.set (20, 133, -10);
  scene.add(roofG);

  //roof for west bldg
  const roofWGeometry = new THREE.BoxGeometry(50,110,5);
  const roofW = new THREE.Mesh(roofWGeometry, roofColorMaterial);
  roofW.rotation.x= 190;
  roofW.position.set (-50, 148, -10);
  scene.add(roofW);

  const roofwGeometry = new THREE.BoxGeometry(40,100,20);
  const roofw = new THREE.Mesh(roofwGeometry, roofColorMaterial);
  roofw.rotation.x= 190;
  roofw.position.set (-50, 150, -10);
  scene.add(roofw);

  const roofHGeometry = new THREE.BoxGeometry(60,100,5);
  const roofH = new THREE.Mesh(roofHGeometry, roofColorMaterial);
  roofH.rotation.x= 190;
  roofH.position.set (-50, 148, -10);
  scene.add(roofH);

  const roofhGeometry = new THREE.BoxGeometry(50,90,10);
  const roofh = new THREE.Mesh(roofhGeometry, roofColorMaterial);
  roofh.rotation.x= 190;
  roofh.position.set (-50, 153, -10);
  scene.add(roofh);

  const roofIGeometry = new THREE.BoxGeometry(70,90,5);
  const roofI = new THREE.Mesh(roofIGeometry, roofColorMaterial);
  roofI.rotation.x= 190;
  roofI.position.set (-50, 148, -10);
  scene.add(roofI);

  const roofiGeometry = new THREE.BoxGeometry(60,80,10);
  const roofi = new THREE.Mesh(roofiGeometry, roofColorMaterial);
  roofi.rotation.x= 190;
  roofi.position.set (-50, 152, -10);
  scene.add(roofi);

  const roofJGeometry = new THREE.BoxGeometry(80,80,5);
  const roofJ = new THREE.Mesh(roofJGeometry, roofColorMaterial);
  roofJ.rotation.x= 190;
  roofJ.position.set (-50, 148, -10);
  scene.add(roofJ);

  const roofKGeometry = new THREE.BoxGeometry(90,70,5);
  const roofK = new THREE.Mesh(roofKGeometry, roofColorMaterial);
  roofK.rotation.x= 190;
  roofK.position.set (-50, 148, -10);
  scene.add(roofK);

  //roof for main bldg
  const roofLGeometry = new THREE.BoxGeometry(60,90,5);
  const roofL = new THREE.Mesh(roofLGeometry, roofColorMaterial);
  roofL.rotation.x= 190;
  roofL.position.set (-10, 190, -15);
  scene.add(roofL);

  const rooflGeometry = new THREE.BoxGeometry(50,80,20);
  const roofl = new THREE.Mesh(rooflGeometry, roofColorMaterial);
  roofl.rotation.x= 190;
  roofl.position.set (-10, 195, -15);
  scene.add(roofl);

  const roofMGeometry = new THREE.BoxGeometry(70,80,5);
  const roofM = new THREE.Mesh(roofMGeometry, roofColorMaterial);
  roofM.rotation.x= 190;
  roofM.position.set (-10, 190, -15);
  scene.add(roofM);

  const roofmGeometry = new THREE.BoxGeometry(60,70,15);
  const roofm = new THREE.Mesh(roofmGeometry, roofColorMaterial);
  roofm.rotation.x= 190;
  roofm.position.set (-10, 195, -15);
  scene.add(roofm);

  const roofNGeometry = new THREE.BoxGeometry(80,70,5);
  const roofN = new THREE.Mesh(roofNGeometry, roofColorMaterial);
  roofN.rotation.x= 190;
  roofN.position.set (-10, 190, -15);
  scene.add(roofN);

  const roofnGeometry = new THREE.BoxGeometry(70,80,10);
  const roofn = new THREE.Mesh(roofnGeometry, roofColorMaterial);
  roofn.rotation.x= 190;
  roofn.position.set (-10, 195, -15);
  scene.add(roofn);

  const roofOGeometry = new THREE.BoxGeometry(90,60,5);
  const roofO = new THREE.Mesh(roofOGeometry, roofColorMaterial);
  roofO.rotation.x= 190;
  roofO.position.set (-10, 190, -15);
  scene.add(roofO);

  const roofoGeometry = new THREE.BoxGeometry(40,70,10);
  const roofo = new THREE.Mesh(roofoGeometry, roofColorMaterial);
  roofo.rotation.x= 190;
  roofo.position.set (-10, 210, -15);
  scene.add(roofo);

  const roofPGeometry = new THREE.BoxGeometry(100,50,5);
  const roofP = new THREE.Mesh(roofPGeometry, roofColorMaterial);
  roofP.rotation.x= 190;
  roofP.position.set (-10, 190, -15);
  scene.add(roofP);

  const roofQGeometry = new THREE.BoxGeometry(105,40,5);
  const roofQ = new THREE.Mesh(roofQGeometry, roofColorMaterial);
  roofQ.rotation.x= 190;
  roofQ.position.set (-10, 190, -15);
  scene.add(roofQ);

  const roofRGeometry = new THREE.BoxGeometry(30,50,5);
  const roofR = new THREE.Mesh(roofRGeometry, roofColorMaterial);
  roofR.rotation.x= 190;
  roofR.position.set (-10, 240, -15);
  scene.add(roofR);

  const roofrGeometry = new THREE.BoxGeometry(20,40,15);
  const roofr = new THREE.Mesh(roofrGeometry, roofColorMaterial);
  roofr.rotation.x= 190;
  roofr.position.set (-10, 240, -15);
  scene.add(roofr);

  const roofSGeometry = new THREE.BoxGeometry(40,40,5);
  const roofS = new THREE.Mesh(roofSGeometry, roofColorMaterial);
  roofS.rotation.x= 190;
  roofS.position.set (-10, 240, -15);
  scene.add(roofS);

  const roofsGeometry = new THREE.BoxGeometry(30,30,10);
  const roofs = new THREE.Mesh(roofsGeometry, roofColorMaterial);
  roofs.rotation.x= 190;
  roofs.position.set (-10, 240, -15);
  scene.add(roofs);

  const roofTGeometry = new THREE.BoxGeometry(50,30,5);
  const roofT = new THREE.Mesh(roofTGeometry, roofColorMaterial);
  roofT.rotation.x= 190;
  roofT.position.set (-10, 240, -15);
  scene.add(roofT);
}

function buildingDeck() {
  const deck = new THREE.Group();
  scene.add(deck);

  let deckColorMaterial =  new THREE.MeshPhongMaterial({color: "#53281B"});

  //upper deck
  const deckAGeometry = new THREE.BoxGeometry(100,160,6);
  const deckA = new THREE.Mesh(deckAGeometry, deckColorMaterial);
  deckA.rotation.x= 190;
  deckA.position.set (20, 105, 0);
  scene.add(deckA);

  const deckBGeometry = new THREE.BoxGeometry(70,155,5);
  const deckB = new THREE.Mesh(deckBGeometry, deckColorMaterial);
  deckB.rotation.x= 190;
  deckB.position.set (-60, 120, -15);
  scene.add(deckB);

  const deckCGeometry = new THREE.BoxGeometry(50,120,5);
  const deckC = new THREE.Mesh(deckCGeometry, deckColorMaterial);
  deckC.rotation.x= 190;
  deckC.position.set (-60, 163, -15);
  scene.add(deckC);

  const deckDGeometry = new THREE.BoxGeometry(40,60,5);
  const deckD = new THREE.Mesh(deckDGeometry, deckColorMaterial);
  deckD.rotation.x= 190;
  deckD.position.set (10, 150, -65);
  scene.add(deckD);

  const deckEGeometry = new THREE.BoxGeometry(35,50,5);
  const deckE = new THREE.Mesh(deckEGeometry, deckColorMaterial);
  deckE.rotation.y= 135;
  deckE.rotation.x= 190;
  deckE.position.set (-20, 155, -50);
  scene.add(deckE);

  const deckFGeometry = new THREE.BoxGeometry(70,25,5);
  const deckF = new THREE.Mesh(deckFGeometry, deckColorMaterial);
  deckF.rotation.y= 135.6;
  deckF.rotation.x= 190;
  deckF.position.set (-20, 130, -80);
  scene.add(deckF);

  const deckGGeometry = new THREE.BoxGeometry(30,25,5);
  const deckG = new THREE.Mesh(deckGGeometry, deckColorMaterial);
  deckG.rotation.y= -135.6;
  deckG.rotation.x= 190;
  deckG.position.set (-15, 115, 40);
  scene.add(deckG);

  const deckHGeometry = new THREE.BoxGeometry(50,30,5);
  const deckH = new THREE.Mesh(deckHGeometry, deckColorMaterial);
  deckH.rotation.x= 190;
  deckH.position.set (-15, 170, 30);
  scene.add(deckH);

  //lower deck
  const deckIGeometry = new THREE.BoxGeometry(50,40,5);
  const deckI = new THREE.Mesh(deckIGeometry, deckColorMaterial);
  deckI.rotation.x= 190;
  deckI.position.set (-70, 90, 70);
  scene.add(deckI);

  const deckJGeometry = new THREE.BoxGeometry(40,70,5);
  const deckJ = new THREE.Mesh(deckJGeometry, deckColorMaterial);
  deckJ.rotation.x= 190;
  deckJ.position.set (-70, 70, -35);
  scene.add(deckJ);

  const deckKGeometry = new THREE.BoxGeometry(100,40,5);
  const deckK = new THREE.Mesh(deckKGeometry, deckColorMaterial);
  deckK.rotation.x= 190;
  deckK.position.set (15, 50, -50);
  scene.add(deckK);

  const deckLGeometry = new THREE.BoxGeometry(40,30,5);
  const deckL = new THREE.Mesh(deckLGeometry, deckColorMaterial);
  deckL.rotation.y= 135.6;
  deckL.rotation.x= 190;
  deckL.position.set (-45, 100, 66);
  scene.add(deckL);

  const deckMGeometry = new THREE.BoxGeometry(30,60,5);
  const deckM = new THREE.Mesh(deckMGeometry, deckColorMaterial);
  deckM.rotation.x= -193.5;
  deckM.position.set (-75, 80, 23);
  scene.add(deckM);

  const deckNGeometry = new THREE.BoxGeometry(40,30,5);
  const deckN = new THREE.Mesh(deckNGeometry, deckColorMaterial);
  deckN.rotation.y= -135.6;
  deckN.rotation.x= 190;
  deckN.position.set (-37, 59.6, -50);
  scene.add(deckN);

  const deckOGeometry = new THREE.BoxGeometry(30,100,5);
  const deckO = new THREE.Mesh(deckOGeometry, deckColorMaterial);
  deckO.rotation.x= 193.5;
  deckO.position.set (45, 37, 13);
  scene.add(deckO);

  const deckPGeometry = new THREE.BoxGeometry(280,200,5);
  const deckP = new THREE.Mesh(deckPGeometry, deckColorMaterial);
  deckP.rotation.x= 190;
  deckP.position.set (0, 20, 30);
  scene.add(deckP);
}

function giantTree() {

  const tree = new THREE.Group();
  scene.add(tree);

  let branchMaterial = new THREE.MeshPhongMaterial({color: "#573226"});

  let mapleT = new THREE.TextureLoader().load("assets/textures/leaves.jpg");
    let leavesTextureMaterial = new THREE.MeshLambertMaterial({
      leavesTexture: mapleT,
      mapleTScale: 3,
      map : mapleT
    });

  // leaves
  const treeAGeometry = new THREE.BoxGeometry(10,10,10);
  const treeA = new THREE.Mesh(treeAGeometry, leavesTextureMaterial);
  treeA.rotation.x= 190;
  treeA.position.set (0, 260, 10);
  scene.add(treeA);

  const treeBGeometry = new THREE.BoxGeometry(15,15,15);
  const treeB = new THREE.Mesh(treeBGeometry, leavesTextureMaterial);
  treeB.rotation.x= 190;
  treeB.position.set (-5, 260, -5);
  scene.add(treeB);

  const treeCGeometry = new THREE.BoxGeometry(25,25,15);
  const treeC = new THREE.Mesh(treeCGeometry, leavesTextureMaterial);
  treeC.rotation.x= 190;
  treeC.position.set (-30, 260, -10);
  scene.add(treeC);

  const treeDGeometry = new THREE.BoxGeometry(30,40,20);
  const treeD = new THREE.Mesh(treeDGeometry, leavesTextureMaterial);
  treeD.rotation.x= 190;
  treeD.position.set (-50, 250, -30);
  scene.add(treeD);

  const treeEGeometry = new THREE.BoxGeometry(40,40,25);
  const treeE = new THREE.Mesh(treeEGeometry, leavesTextureMaterial);
  treeE.rotation.x= 190;
  treeE.position.set (-50, 260, -60);
  scene.add(treeE);

  const treeFGeometry = new THREE.BoxGeometry(60,20,5);
  const treeF = new THREE.Mesh(treeFGeometry, leavesTextureMaterial);
  treeF.rotation.x= 190;
  treeF.position.set (-90, 260, -50);
  scene.add(treeF);

  const treeGGeometry = new THREE.BoxGeometry(40,20,5);
  const treeG = new THREE.Mesh(treeGGeometry, leavesTextureMaterial);
  treeG.rotation.x= 190;
  treeG.position.set (-90, 265, -50);
  scene.add(treeG);

  const treeHGeometry = new THREE.BoxGeometry(10,10,10);
  const treeH = new THREE.Mesh(treeHGeometry, leavesTextureMaterial);
  treeH.rotation.x= 190;
  treeH.position.set (-100, 270, -50);
  scene.add(treeH);

  const treeIGeometry = new THREE.BoxGeometry(10,10,15);
  const treeI = new THREE.Mesh(treeIGeometry, leavesTextureMaterial);
  treeI.rotation.x= 190;
  treeI.position.set (-90, 270, -20);
  scene.add(treeI);
  
  const treeJGeometry = new THREE.BoxGeometry(30,40,25);
  const treeJ = new THREE.Mesh(treeJGeometry, leavesTextureMaterial);
  treeJ.rotation.x= 190;
  treeJ.position.set (-80, 290, -50);
  scene.add(treeJ);

  const treeKGeometry = new THREE.BoxGeometry(30,30,15);
  const treeK = new THREE.Mesh(treeKGeometry, leavesTextureMaterial);
  treeK.rotation.x= 190;
  treeK.position.set (-110, 280, -50);
  scene.add(treeK);

  const treeLGeometry = new THREE.BoxGeometry(60,60,15);
  const treeL = new THREE.Mesh(treeLGeometry, leavesTextureMaterial);
  treeL.rotation.x= 190;
  treeL.position.set (-70, 280, -20);
  scene.add(treeL);

  const treeMGeometry = new THREE.BoxGeometry(20,30,30);
  const treeM = new THREE.Mesh(treeMGeometry, leavesTextureMaterial);
  treeM.rotation.x= 190;
  treeM.position.set (-70, 290, -20);
  scene.add(treeM);

  const treeNGeometry = new THREE.BoxGeometry(20,30,30);
  const treeN = new THREE.Mesh(treeNGeometry, leavesTextureMaterial);
  treeN.rotation.x= 190;
  treeN.position.set (-20, 260, -70);
  scene.add(treeN);

  const treeOGeometry = new THREE.BoxGeometry(20,20,10);
  const treeO = new THREE.Mesh(treeOGeometry, leavesTextureMaterial);
  treeO.rotation.x= 190;
  treeO.position.set (10, 260, -70);
  scene.add(treeO);

  const treePGeometry = new THREE.BoxGeometry(20,20,20);
  const treeP = new THREE.Mesh(treePGeometry, leavesTextureMaterial);
  treeP.rotation.x= 190;
  treeP.position.set (30, 260, -70);
  scene.add(treeP);

  const treeQGeometry = new THREE.BoxGeometry(30,45,20);
  const treeQ = new THREE.Mesh(treeQGeometry, leavesTextureMaterial);
  treeQ.rotation.x= 190;
  treeQ.position.set (30, 260, -20);
  scene.add(treeQ);

  const treeRGeometry = new THREE.BoxGeometry(30,45,20);
  const treeR = new THREE.Mesh(treeRGeometry, leavesTextureMaterial);
  treeR.rotation.x= 190;
  treeR.position.set (0, 280, -20);
  scene.add(treeR);

  const treeSGeometry = new THREE.BoxGeometry(50,45,25);
  const treeS = new THREE.Mesh(treeSGeometry, leavesTextureMaterial);
  treeS.rotation.x= 190;
  treeS.position.set (-20, 300, -50);
  scene.add(treeS);

  const treeTGeometry = new THREE.BoxGeometry(20,25,15);
  const treeT = new THREE.Mesh(treeTGeometry, leavesTextureMaterial);
  treeT.rotation.x= 190;
  treeT.position.set (-50, 320, -70);
  scene.add(treeT);

  const treeUGeometry = new THREE.BoxGeometry(30,25,30);
  const treeU = new THREE.Mesh(treeUGeometry, leavesTextureMaterial);
  treeU.rotation.x= 190;
  treeU.position.set (-60, 300, -70);
  scene.add(treeU);

  const treeVGeometry = new THREE.BoxGeometry(50,20,25);
  const treeV = new THREE.Mesh(treeVGeometry, leavesTextureMaterial);
  treeV.rotation.x= 190;
  treeV.position.set (-60, 330, -40);
  scene.add(treeV);

  const treeXGeometry = new THREE.BoxGeometry(50,30,15);
  const treeX = new THREE.Mesh(treeXGeometry, leavesTextureMaterial);
  treeX.rotation.x= 190;
  treeX.position.set (-30, 330, -60);
  scene.add(treeX);

  const treeYGeometry = new THREE.BoxGeometry(25,30,20);
  const treeY = new THREE.Mesh(treeYGeometry, leavesTextureMaterial);
  treeY.rotation.x= 190;
  treeY.position.set (25, 310, -60);
  scene.add(treeY);

  const treeZGeometry = new THREE.BoxGeometry(25,30,35);
  const treeZ = new THREE.Mesh(treeZGeometry, leavesTextureMaterial);
  treeZ.rotation.x= 190;
  treeZ.position.set (10, 310, -70);
  scene.add(treeZ);

  const treeaGeometry = new THREE.BoxGeometry(90,30,20);
  const treea = new THREE.Mesh(treeaGeometry, leavesTextureMaterial);
  treea.rotation.x= 190;
  treea.position.set (20, 320, -60);
  scene.add(treea);
  
  

  //branch of the tree
  const branchAGeometry = new THREE.BoxGeometry(15,15,40);
  const branchA = new THREE.Mesh(branchAGeometry, branchMaterial);
  branchA.rotation.x= 190;
  branchA.position.set (-30, 270, -30);
  scene.add(branchA);

  const branchBGeometry = new THREE.BoxGeometry(15,40,10);
  const branchB = new THREE.Mesh(branchBGeometry, branchMaterial);
  branchB.rotation.x= 190;
  branchB.position.set (-15, 260, -40);
  scene.add(branchB);

  const branchCGeometry = new THREE.BoxGeometry(25,20,30);
  const branchC = new THREE.Mesh(branchCGeometry, branchMaterial);
  branchC.rotation.x= 190;
  branchC.position.set (0, 250, -45);
  scene.add(branchC);

  const branchDGeometry = new THREE.BoxGeometry(30,30,40);
  const branchD = new THREE.Mesh(branchDGeometry, branchMaterial);
  branchD.rotation.x= 190;
  branchD.position.set (0, 230, -60);
  scene.add(branchD);

  const branchEGeometry = new THREE.BoxGeometry(20,40,60);
  const branchE = new THREE.Mesh(branchEGeometry, branchMaterial);
  branchE.rotation.x= 190;
  branchE.position.set (0, 210, -70);
  scene.add(branchE);

  const branchFGeometry = new THREE.BoxGeometry(30,30,40);
  const branchF = new THREE.Mesh(branchFGeometry, branchMaterial);
  branchF.rotation.x= 190;
  branchF.position.set (0, 190, -60);
  scene.add(branchF);

  const branchHGeometry = new THREE.BoxGeometry(30,20,80);
  const branchH = new THREE.Mesh(branchHGeometry, branchMaterial);
  branchH.rotation.x= 190;
  branchH.position.set (0, 150, -55);
  scene.add(branchH);

}

function animate() {
  requestAnimationFrame(animate);                    
  animateParticles();

  endPlay = (performance.now() - startPlay) / 100; 
 


  renderer.render(scene, camera);
}

animate();
