json.array! @pokemon do |single_pokemon|
  json.partial! 'pokemon/pokemon', pokemon: single_pokemon, display_toys: false
end
