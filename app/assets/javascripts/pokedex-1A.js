Pokedex.RootView.prototype.addPokemonToList = function (pokemon) {
  var attributes = pokemon.get('name') + ", " + pokemon.get("poke_type");
  var $li = $('<li>').addClass('poke-list-item').html(attributes);
  $li.data('id', pokemon.get('id'));
  this.$pokeList.append($li);
};

Pokedex.RootView.prototype.refreshPokemon = function () {
  this.pokes.fetch({
    success: function(collection, resp, options) {
      this.pokes.each(this.addPokemonToList.bind(this));
    }.bind(this)
  });
};
