let unlock, createpenguin, cprlogo, whatsnew, welcomecontainer, start, background1, background2;

class Welcome extends Phaser.Scene {

  constructor() {
    super('welcome');
  }
  create() {
    background = this.add.image(640, 400, 'atlaspenguin-1', 'preload/blue_background');
    background.scale = 2;
    
    background1 = this.add.image(640, 340, 'atlaspenguin-0', 'core/startscreen/backgrounds/background2');
    background1.scale = 0.77;
   // background2 = this.add.image(640, 400, 'atlaspenguin-0', 'core/startscreen/backgrounds/background1');
    
    welcomecontainer = this.add.image(1280/2, 580, 'atlaspenguin-0', 'core/startscreen/start_dock');
    
    unlock = this.add.image(1100, 50, 'atlaspenguin-0', 'core/startscreen/unlock');
    unlock.scale = 0.7;
    
    createpenguin = this.add.image(950, 610, 'atlaspenguin-0', 'core/startscreen/create_penguin');
    createpenguin.scale = 0.5;
    
    cprlogo = this.add.image(1280/2, 520, 'atlaspenguin-0', 'core/ui/cpr_logo');
    cprlogo.scale = 0.5;
    
    whatsnew = this.add.image(330, 610, 'atlaspenguin-0', 'core/startscreen/whats_new');
    whatsnew.scale = 0.45;
    
    start = this.add.image(640, 650, 'atlaspenguin-0', 'core/startscreen/start');

  }

}