/* global Phaser */

let mountainbackground, betatesting, cpcurrently, blabla, confirmation, ok;

class Beta extends Phaser.Scene {
  
  constructor() {
    super('betaGame');
  }
  
  create() {
    mountainbackground = this.add.sprite(600, 430, 'atlaspenguin-0', 'core/startscreen/mountains');
    
    betatesting = this.add.text(0, 0, 'BETA TESTING', {fill: 'white', font: '85px Teko',});
    betatesting.x = 1280/2 - betatesting.width/2;
    betatesting.y = 140;
    
    cpcurrently = this.add.text(0, 0, 'Club Penguin Rewritten Rewritten is currently in beta testing.', {fill: 'white', font: '37px Teko'});
    cpcurrently.x = 1280/2 - cpcurrently.width/2;
    cpcurrently.y = 230;
    
    blabla = this.make.text({
        x: 1280/2,
        y: 350,
        text: 'When playing Club Penguin Rewritten Rewritten, players might experience some mini-games and features to be in development due to the Flash shutdown. We are working hard on bringing them back, thank you for your patience.',
        origin: 0.5,
        style: {
            font: '25px Karla',
            fill: 'white',
            wordWrap: { width: 1000 },
            align: 'center'
        }
    });

    blabla.setShadow(1, 1, 'rgba(0,0,0,0.5)', 2);
    
    confirmation = this.add.sprite(0, 500, 'atlaspenguin-0', 'core/ui/button/blue_shaded/thin_1');
    confirmation.x = 1280/2;
    confirmation.scale = 0.8;
    ok = this.add.text(0, 475, 'Tg', {fill: 'white', font: '47px Teko'})
    ok.x = 1280/2 - ok.width /2;
    
    confirmation.setInteractive({ useHandCursor: true });
    
    confirmation.on('pointerdown', function() {
      confirmation.setTexture('atlaspenguin-0', 'core/ui/button/blue_shaded/thin_2');
    });
    
    confirmation.on('pointerover', function() {
      confirmation.setTexture('atlaspenguin-0', 'core/ui/button/blue_shaded/thin_2');
    }, this);
    
    confirmation.on('pointerup', function() {
      confirmation.setTexture('atlaspenguin-0', 'core/ui/button/blue_shaded/thin_1');
      this.scene.start('welcome');
    }, this);
    
    confirmation.on('pointerout', function() {
      confirmation.setTexture('atlaspenguin-0', 'core/ui/button/blue_shaded/thin_1');
    });
  }
  
}
