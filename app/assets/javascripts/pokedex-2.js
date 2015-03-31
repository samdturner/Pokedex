Pokedex.RootView.prototype.addToyToList = function (toy) {
  var $toyli = $('<li class="toy">');
  $toyli.data("toy-id", toy.get("id")).data("pokemon-id", toy.get("pokemon_id"));
  var content = "name: " + toy.get('name') + ", happiness: " + toy.get('happiness') +
                ", price: " + toy.get('price');
  $toyli.html(content);
  this.$el.find('ul.toys').append($toyli);
};

Pokedex.RootView.prototype.renderToyDetail = function (toy) {
  var $detail = $('<div class="detail">');
  var $img = $('<img>').attr('src', toy.get('image_url'));
  $detail.append($img);
  var $ul = $('<ul>');
  var $select = $('<select>');
  $select.data("toy-id", toy.get("id")).data("pokemon-id", toy.get("pokemon_id"));

  this.pokes.each(function (singlePokemon) {
    var $option = $('<option>').val(singlePokemon.get('id'));
    if(singlePokemon.get('id') === toy.get('pokemon_id')){
      $option.prop("selected", "selected");
    }
    $option.text(singlePokemon.get('name'));
    $select.append($option);
  });

  for(var attribute in toy.attributes){
    if(attribute !== 'image_url'){
      var $li = $('<li>');
      var content = attribute + ': ' + toy.get(attribute);
      $li.append(content);
      $ul.append($li);
    }
  }

  $detail.append($ul).append($select);

  this.$toyDetail.html($detail);
};

Pokedex.RootView.prototype.selectToyFromList = function (event) {
  event.preventDefault();
  var $currentTarget = $(event.currentTarget);
  var pokemonId = $currentTarget.data("pokemon-id");
  var toyId = $currentTarget.data("toy-id");
  var selectedToy = this.pokes.get(pokemonId).toys().get(toyId);
  this.renderToyDetail(selectedToy);
};
