Pokedex.RootView.prototype.renderPokemonDetail = function (pokemon) {
  var $detail = $('<div>').addClass('detail');
  var $img = $('<img>').attr('src', pokemon.get('image_url'));
  var $ul = $('<ul>');
  $detail.append($img).append($ul);

  var $ulToys = $('<ul class="toys">');
  $detail.append($ulToys);

  for(var attribute in pokemon.attributes) {
    if(attribute !== 'image_url'){
      var $li = $('<li>');
      $li.html(attribute + ": " + pokemon.get(attribute));
      $ul.append($li);
    }
  }

  pokemon.fetch({
    success: function (model) {
      pokemon.toys().each(this.addToyToList.bind(this));
    }.bind(this)
  });

  this.$pokeDetail.html($detail);
};

Pokedex.RootView.prototype.selectPokemonFromList = function (event) {
  var $currentTarget = $(event.currentTarget);
  var id = $currentTarget.data('id');
  var pokemon = this.pokes.get(id);
  this.renderPokemonDetail(pokemon);
};
