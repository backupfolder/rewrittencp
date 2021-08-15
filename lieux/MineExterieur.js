let mineExterieurBackground, mineBatiment, plantes;

class MineExterieur extends Phaser.Scene {

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
      
      console.log('Chargement de la mine complete.')
      this.scene.launch('interface');
      
      mineExterieurBackground = this.add.image(1280/2, 720/2, 'matlasmine', 'shack/background');
      mineBatiment = this.add.image(700, 200, 'matlasmine', 'shack/shack_building');
      
      plantes = this.add.image(400, 100, 'matlasmine', 'shack/plants/5/5_0025');
      // chargement termine
    });
    this.load.multiatlas('matlasmine', 'assets/json/mine.json', 'assets');
    this.load.start();
  }
}
