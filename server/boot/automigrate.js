module.exports = function(app) {
    app.dataSources.mysqlDs.automigrate(null, function(err) {
      if (err) throw err;
  
      app.models.Juego.create([{
        nombre: 'primero'
       
      }, {
        nombre: 'segundo'
       
      }, {
        nombre: 'tercero'
      
      }], function(err, Juego) {
        if (err) throw err;
  
        console.log('Models created: \n', Juego);
      });
    });
  };
  