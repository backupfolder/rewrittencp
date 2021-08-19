let mailIcon, mapIcon, mod, new1, news, dock, dockText, thing;

let penguinTintFill = '#FF0000', moving = false, lastpointerx, lastpointery;

function velocityToTarget(from, to, speed = 1)  {
   direction = Math.atan((to.x - from.x) / (to.y - from.y));
   speed2 = to.y >= from.y ? speed : -speed;

  return { velX: speed2 * Math.sin(direction), velY: speed2 * Math.cos(direction) };
};

class Interface extends Phaser.Scene {

    constructor() {
      super('interface');
    }
    
    create() {
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
      // interface
      // penguin
      penguinColor.setTintFill(penguinTintFill)
      // mouvement du penguin
      this.input.on('pointerdown', (pointer) => {
        lastpointerx = this.input.activePointer.x;
        lastpointery = this.input.activePointer.y;
        
    penguinColor.setVelocity(velocityToTarget(penguinColor, this.input.activePointer, 3.5).velX, velocityToTarget(penguinColor, this.input.activePointer, 3.5).velY);
        penguinBody.setVelocity(velocityToTarget(penguinColor, this.input.activePointer, 3.5).velX, velocityToTarget(penguinColor, this.input.activePointer, 3.5).velY); 
        
        moving = true;

      }, this);
    // penguin
    }
    update () {
      
      // arret du penguin lorsque arrive a destination
       if (moving = true) {
      if ((Math.ceil(penguinColor.x/10)*10) == (Math.ceil(lastpointerx/10)* 10) && (Math.ceil(penguinColor.y/10)*10) == (Math.ceil(lastpointery/10)* 10)) {
        penguinColor.setVelocity(0,0);
        penguinBody.setVelocity(0,0);
        moving = false;
      }  
      }
      
      // attacher penguinColor avec penguinBody
      penguinColor.setX(penguinBody.x);
      penguinColor.setY(penguinBody.y);
    }
}