let mailIcon, mapIcon, penguindance, mod, new1, news, dock, dockText, thing;
class Interface extends Phaser.Scene {

    constructor() {
      super('interface');
    }
    
    create() {
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
    
    
      penguindance = this.add.sprite(500, 700, 'matlasInterface', 'room_basic/dock/actions/penguin_dance');
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
    }
}