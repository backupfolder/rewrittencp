let unlock, createpenguin, cprlogo, whatsnew, welcomecontainer, start, background1, checkout, timer = 0, number = 1;

class Welcome extends Phaser.Scene {

  constructor() {
    super('welcome');
  }
  create() {
    background = this.add.image(640, 400, 'atlaspenguin-1', 'preload/blue_background');
    background.scale = 2;
    
    background1 = this.add.image(640, 340, 'atlaspenguin-0', 'core/startscreen/backgrounds/background1');
    background1.scale = 0.77;
      
   // background2 = this.add.image(640, 400, 'atlaspenguin-0', 'core/startscreen/backgrounds/background1');
    
    welcomecontainer = this.add.image(1280/2, 580, 'atlaspenguin-0', 'core/startscreen/start_dock');
    
    unlock = this.add.image(1100, 50, 'atlaspenguin-0', 'core/startscreen/unlock');
    unlock.scale = 0.7;
    
    createpenguin = this.add.image(950, 610, 'atlaspenguin-0', 'core/startscreen/create_penguin');
    createpenguin.scale = 0.5;
    createpenguin.setInteractive({ useHandCursor: true });
    createpenguin.on('pointerdown', function() {
      createpenguin.setTexture('atlaspenguin-0', 'core/startscreen/create_penguin2');
    });
    createpenguin.on('pointerover', function() {
      createpenguin.setTexture('atlaspenguin-0', 'core/startscreen/create_penguin2');
    }, this);
    createpenguin.on('pointerup', function() {
      createpenguin.setTexture('atlaspenguin-0', 'core/startscreen/create_penguin');
    }, this);
    createpenguin.on('pointerout', function() {
      createpenguin.setTexture('atlaspenguin-0', 'core/startscreen/create_penguin');
    });
    
    cprlogo = this.add.image(1280/2, 520, 'atlaspenguin-0', 'core/ui/cpr_logo');
    cprlogo.scale = 0.5;
    
    whatsnew = this.add.image(330, 610, 'atlaspenguin-0', 'core/startscreen/whats_new');
    whatsnew.scale = 0.45;
    
    confirmation = this.add.sprite(640, 650, 'atlaspenguin-0', 'core/ui/button/blue_shaded/thin_1');
    confirmation.scale = 0.8;
    
    confirmation.setInteractive({ useHandCursor: true });
    confirmation.on('pointerdown', function() {
      confirmation.setTexture('atlaspenguin-0', 'core/ui/button/blue_shaded/thin_2');
    });
    confirmation.on('pointerover', function() {
      confirmation.setTexture('atlaspenguin-0', 'core/ui/button/blue_shaded/thin_2');
    }, this);
    confirmation.on('pointerup', function() {
      confirmation.setTexture('atlaspenguin-0', 'core/ui/button/blue_shaded/thin_1');
      this.scene.start('mineExterieur');
    }, this);
    confirmation.on('pointerout', function() {
      confirmation.setTexture('atlaspenguin-0', 'core/ui/button/blue_shaded/thin_1');
    });

    start = this.add.image(640, 650, 'atlaspenguin-0', 'core/startscreen/start');
    
    checkout = this.add.text(210, 660, "CHECK OUT WHAT'S NEW!", { fill: 'white', font: '30px Teko' });
  }
  
  update() {
    timer+= 1;
    
    if (timer == 300) {
      background1.setTexture('atlaspenguin-0', 'core/startscreen/backgrounds/background' + number);
      timer = 0;
      if (number == 1) { number = 2; } else { number = 1; }
    }
  }

}