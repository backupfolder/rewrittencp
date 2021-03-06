let penguin, penguinColor, penguinBody;

let mineExterieurBackground, mineBatiment, trees, tree, sign, bag, recyclebuilding, statue, fence, mur, cart1, cart2, mineDoors, flowers;

let shapes;

class MineExterieur extends Phaser.Scene {

 velocityToTarget = (from, to, speed = 1) => {
   direction = Math.atan((to.x - from.x) / (to.y - from.y));
   speed2 = to.y >= from.y ? speed : -speed;

  return { velX: speed2 * Math.sin(direction), velY: speed2 * Math.cos(direction) };
};

  constructor() {
    super('mineExterieur');
  }

  create() {
    // LOADING 
    background = this.add.image(640, 400, 'atlaspenguin-1', 'preload/blue_background');
    background.scale = 2;
    
    loadingcontainer = this.add.graphics();
    loadingcontainer.lineStyle(3, 0x006699, 1);
    loadingcontainer.strokeRect(0, 0, 200, 32);
    loadingcontainer.x = 1280 / 2 - 200 / 2;
    loadingcontainer.y = 350;
    
    loadingbar = this.add.graphics();
    loadingbar.x = 1280 / 2 - 200 / 2 + 5;
    loadingbar.y = 355;
    
    loadingcontent = this.add.text(0, 0, 'Loading Shack', { fill: 'white', font: '33px Teko' });
    loadingcontent.x = 1280 / 2 - loadingcontent.width / 2;
    loadingcontent.y = 400;
    
    this.anims.create({ key: 'animation', frameRate: 18, frames: this.anims.generateFrameNames('atlaspenguin-1', { prefix: 'preload/spinner/', start: 1, end: 20 }), repeat: -1 });
    
    loadingicon = this.add.sprite(0, 290, 'atlaspenguin-1', 'preload/spinner/1');
    loadingicon.x = 1280 / 2;
    loadingicon.play('animation');
    this.load.on('progress', function(value) {
      loadingbar.clear();
      loadingbar.fillStyle(0xffffff, 1);
      loadingbar.fillRect(0, 0, 190 * value, 22);
    });
    this.load.once('complete', () => {
      loadingcontent.destroy();
      background.destroy();
      loadingicon.destroy();
      loadingbar.destroy();
      loadingcontainer.destroy();
      // chargement termine
      // chargement penguin + interface
      
      console.log('Chargement de la mine complete.')
      
      shapes = this.cache.json.get('shapes');
      
      mineExterieurBackground = this.add.image(1280/2, 720/2, 'matlasmine', 'shack/background');
      mineExterieurBackground.scale = 0.85;
      
      recyclebuilding = this.matter.add.sprite(0, 0, 'matlasmine', 'shack/recycle/building', {isStatic: true, shape: shapes.recycle});
      recyclebuilding.scale = 0.8;
      
      recyclebuilding.setPosition(90 + recyclebuilding.body.centerOfMass.x, 240 + recyclebuilding.body.centerOfMass.y);
      
      
      mineBatiment = this.add.image(670, 150, 'matlasmine', 'shack/shack_building');
      
      tree = this.add.image(320, 140, 'matlasmine', 'shack/tree');
      tree.scale = 0.8;
      
      mineDoors = this.add.image(55, 312, 'matlasmine', 'shack/recycle/door_0001');
      mineDoors.scale = 0.8;
      
      trees = this.add.image(90, 530, 'matlasmine', 'shack/trees1');
      trees.scale = 0.8;
      
      sign = this.add.image(650, 215, 'matlasmine', 'shack/shack_sign0001');
      
      bag = this.add.image(1010, 355, 'matlasmine', 'shack/bag');
      
      statue = this.add.image(930, 320, 'matlasmine', 'shack/statue');
      statue.scale = 0.8;
      
   //   mur = this.add.image(1000, 500, 'matlasmine', 'shack/house2');
      cart2 = this.add.image(530, 360, 'matlasmine', 'shack/cart2');
      cart1 = this.add.image(430, 400, 'matlasmine', 'shack/cart1');
      
      fence = this.add.image(600, 430, 'matlasmine', 'shack/fence1');
      flowers = this.add.image(180, 330, 'matlasmine', 'shack/flowers');
      flowers = this.add.image(850, 390, 'matlasmine', 'shack/flowers');
      
      penguinColor = this.matter.add.sprite(800, 530, 'matlasPenguinBody', '74-44').setFrictionAir(0).setFixedRotation().setCollisionGroup(-1);
  
      penguinBody = this.matter.add.sprite(800, 530, 'matlasPenguinFeatures', '74-44').setFrictionAir(0).setFixedRotation().setCollisionGroup(-1);
      
      this.scene.moveBelow('interface', 'mineExterieur');
      this.scene.launch('interface');
      // chargement termine
    });
    this.load.multiatlas('matlasmine', 'assets/json/mine.json', 'assets');
    this.load.json('shapes', 'assets/json/physics/mine.json');
    this.load.start();
  }
}
