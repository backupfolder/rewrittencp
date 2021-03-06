/* global Phaser, Beta, Loading */
const config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  parent: 'gamevphaser',
  scale:{
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
    default: 'matter',
     matter: {
       debug: true,
       gravity: { y: 0 }
    }
  }, scene: [Loading, Beta, Welcome, Interface, MineExterieur]
  
}

const game = new Phaser.Game(config);