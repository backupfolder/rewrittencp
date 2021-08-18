let mailIcon, mapIcon, mod, new1, news, dock, dockText, thing;
let penguinColor, penguinBody, penguinTintFill = '#FF0000', moving = false, lastpointerx, lastpointery;

class Interface extends Phaser.Scene {

    constructor() {
      super('interface');
    }
    
    create() {
      penguinColor = this.physics.add.sprite(800, 530, 'matlasPenguinBody', '74-44').setSize(50, 50);
      penguinBody = this.physics.add.sprite(800, 530, 'matlasPenguinFeatures', '74-44').setSize(50, 50);
      penguinColor.body.onWorldBounds = true;
      penguinBody.body.onWorldBounds = true;
      // ajout de tous les boutons et de l'interactivite
      mapIcon = this.add.sprite(75, 650, 'matlasInterface', 'room_basic/tools/map/map1');
      mapIcon.scale = 0.85;
      
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
    
    
      mod = this.add.sprite(1210, 60, 'matlasInterface', 'room_basic/tools/mod/mod1');
      mod.scale = 0.95;
      
      mod.setInteractive({ useHandCursor: true });
      mod.on('pointerdown', function() {
        mod.setTexture('matlasInterface', 'room_basic/tools/mod/mod2');
      });
      mod.on('pointerover', function() {
        mod.setTexture('matlasInterface', 'room_basic/tools/mod/mod2');
      }, this);
      mod.on('pointerup', function() {
        mod.setTexture('matlasInterface', 'room_basic/tools/mod/mod1');
      }, this);
      mod.on('pointerout', function() {
        mod.setTexture('matlasInterface', 'room_basic/tools/mod/mod1');
      });
      
      mailIcon = this.add.sprite(150, 50, 'matlasInterface', 'room_basic/tools/mail/mail1');
      mailIcon.scale = 0.85;
      
      mailIcon.setInteractive({ useHandCursor: true });
      mailIcon.on('pointerdown', function() {
        mailIcon.setTexture('matlasInterface', 'room_basic/tools/mail/mail2');
      });
      mailIcon.on('pointerover', function() {
        mailIcon.setTexture('matlasInterface', 'room_basic/tools/mail/mail2');
      }, this);
      mailIcon.on('pointerup', function() {
        mailIcon.setTexture('matlasInterface', 'room_basic/tools/mail/mail1');
      }, this);
      mailIcon.on('pointerout', function() {
        mailIcon.setTexture('matlasInterface', 'room_basic/tools/mail/mail1');
      });
      
      news = this.add.sprite(60, 60, 'matlasInterface', 'room_basic/tools/news/news1');
      news.setInteractive({ useHandCursor: true });
      news.on('pointerdown', function() {
        news.setTexture('matlasInterface', 'room_basic/tools/news/news2');
      });
      news.on('pointerover', function() {
        news.setTexture('matlasInterface', 'room_basic/tools/news/news2');
      }, this);
      news.on('pointerup', function() {
        news.setTexture('matlasInterface', 'room_basic/tools/news/news1');
      }, this);
      news.on('pointerout', function() {
        news.setTexture('matlasInterface', 'room_basic/tools/news/news1');
      });
      new1 = this.add.sprite(85, 90, 'matlasInterface', 'room_basic/tools/news/new0001');
      news.scale = 0.95;
      new1.scale = 0.95;
      
      dock = this.add.sprite(1280/2, 685, 'matlasInterface', 'room_basic/dock/dock');
      dockText = this.add.sprite(1280/2, 695, 'matlasInterface', 'room_basic/dock/dock_text');
      dockText.scale = 0.5;
      // icones room_basic/dock/icons/dock_home
      // interface
      // penguin
      penguinColor.setTintFill(penguinTintFill);
    
      // mouvement du penguin
      this.input.on('pointerdown', (pointer) => {
        this.physics.moveToObject(penguinBody, pointer, 200);
        this.physics.moveToObject(penguinColor, pointer, 200);
        moving = true;
        lastpointerx = this.input.activePointer.x;
        lastpointery = this.input.activePointer.y;
      }, this);
      // collisions
      this.physics.add.collider(penguinBody, recyclebuilding);
      this.physics.add.collider(penguinColor, recyclebuilding);
    // penguin
    }
    update () {
      
      // arret du penguin lorsque arrive a destination
      if (moving = true) {
      if ((Math.ceil(penguinBody.x/10)*10) == (Math.ceil(lastpointerx/10)* 10) && (Math.ceil(penguinBody.y/10)*10) == (Math.ceil(lastpointery/10)* 10)) {
        this.physics.moveToObject(penguinBody, penguinBody, 0);
        this.physics.moveToObject(penguinColor, penguinColor, 0);
        moving = false;
      } 
      }
    }
}