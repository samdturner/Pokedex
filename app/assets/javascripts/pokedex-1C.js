Pokedex.RootView.prototype.createPokemon = function (attrs, callback) {
  var newPokemon = new Pokedex.Models.Pokemon(attrs);

  newPokemon.save({}, {
    success: callback
  });
};

Pokedex.RootView.prototype.submitPokemonForm = function (event) {
  event.preventDefault();
  var attr = $(event.currentTarget).serializeJSON()["pokemon"];
  this.createPokemon(attr, this.renderPokemonDetail.bind(this));
};
