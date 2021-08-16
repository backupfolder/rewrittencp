let mailIcon, mapIcon, penguindance, thing;
class Interface extends Phaser.Scene {

    constructor() {
      super('interface');
    }
    
    preload() {
      this.load.multiatlas('matlasInterface', 'assets/json/interface.json', 'assets');
    }
    
    create() {
      mailIcon = this.add.sprite(200, 100, 'matlasInterface', 'room_basic/tools/mail/mail1');
      mapIcon = this.add.sprite(80, 650, 'matlasInterface', 'room_basic/tools/map/map1');
      
      mapIcon.setInteractive({ useHandCursor: true });
    mapIcon.on('pointerdown', function() {
      mapIcon.setTexture('matlasInterface', 'room_basic/tools/map/map2');
    });
    mapIcon.on('pointerover', function() {
      mapIcon.setTexture('matlasInterface', 'room_basic/tools/map/map2');
    }, this);
    mapIcon.on('pointerup', function() {
      mapIcon.setTexture('matlasInterface', 'room_basic/tools/map/map1');
    }, this);
    mapIcon.on('pointerout', function() {
      mapIcon.setTexture('matlasInterface', 'room_basic/tools/map/map1');
    });
    
    
      penguindance = this.add.sprite(500, 700, 'matlasInterface', 'room_basic/dock/actions/penguin_dance');
      thing = this.add.sprite(500, 800, 'matlasInterface', 'room_basic/tools/epf/epf2');
    }
}