Pokedex.RootView.prototype.reassignToy = function (event) {
  var $currentTarget = $(event.currentTarget);
  var newPokemonId = $currentTarget.find(':selected').val();
  var oldPokemonId = $currentTarget.data("pokemon-id");
  var toyId = $currentTarget.data("toy-id");

  var oldPokemon = this.pokes.get(oldPokemonId);
  var toy = oldPokemon.toys().get(toyId);
  toy.set({ "pokemon_id": newPokemonId });

  toy.save({}, {
    success: function(toy) {
      oldPokemon.toys().remove(toy);
      this.renderToysList(oldPokemon.toys());
      this.$toyDetail.empty();
    }.bind(this)
  })
};

Pokedex.RootView.prototype.renderToysList = function (toys) {
  this.$pokeDetail.find(".toys").empty();
  toys.each(this.addToyToList.bind(this));
};
