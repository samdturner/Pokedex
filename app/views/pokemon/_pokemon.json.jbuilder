json.extract! pokemon, :id, :attack, :defense, :image_url, :moves, :name, :poke_type

if display_toys
  json.toys do
    json.array! pokemon.toys do |pokemon_toy|
      json.partial! 'toys/toy', toy: pokemon_toy
    end
  end
end
