/* global Phaser */
let background, spinner, loadingcontent, loadingicon, loadingcontainer, loadingbar;

class Loading extends Phaser.Scene {
  constructor() {
    super('loadingGame');
  }
  preload() {   
    this.load.multiatlas('atlaspenguin-1', 'assets/atlaspenguin-1.json', 'assets');
    this.load.multiatlas('atlaspenguin-0', 'assets/atlaspenguin-0.json', 'assets');
    
   /* this.load.on('progress', function (value) {
    console.log(value);
    progressBar.clear();
    progressBar.fillStyle(0xffffff, 1);
    progressBar.fillRect(250, 280, 300 * value, 30);
    });
    
    this.load.on('fileprogress', function (file) {
    console.log(file.src);
    });
    
    this.load.on('complete', function () {
    console.log('complete');
    progressBar.destroy();
    progressBox.destroy();
    }); */
   }
  
  create() {
    
    background = this.add.image(640, 400, 'atlaspenguin-1', 'preload/blue_background');
    background.scale = 2;
        
    loadingcontainer = this.add.graphics();
    loadingcontainer.lineStyle(3, 0x006699, 1);
    loadingcontainer.strokeRect(0, 0, 200, 32);
    loadingcontainer.x = 1280/2 - 200/2;
    loadingcontainer.y = 350;
    
    loadingbar = this.add.graphics();
    loadingbar.lineStyle(3, 0xFFFFFF, 1);
    loadingbar.strokeRect(0, 0, 200, 32);
    loadingbar.x = 1280/2 - 200/2;
    loadingbar.y = 400;
    
    loadingcontent = this.add.text(0, 0, 'Loading Content', {fill: 'white', font: '33px Teko'});
    loadingcontent.x = 1280/2 - loadingcontent.width/2;
    loadingcontent.y = 400;
    
    this.anims.create({ key: 'animation', frameRate: 18, frames: this.anims.generateFrameNames('atlaspenguin-1', { prefix: 'preload/spinner/', start:1, end: 20 }), repeat: -1 });
    
    loadingicon = this.add.sprite(0, 290, 'atlaspenguin-1', 'preload/spinner/1');
    loadingicon.x = 1280/2;
    loadingicon.play('animation');
  }
}