json.array! @pokemon do |single_pokemon|
  json.partial! 'pokemon/pokemon', pokemon: single_pokemon
end
