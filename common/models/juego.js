'use strict';

module.exports = function(Juego) {
    Juego.prototype.getName = function(callback) {
        var game = this;
        
        callback(null, game.nombre);
      };
      

};
