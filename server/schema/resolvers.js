const categories = [
  {
    id: 1,
    name: 'Animes',
    description: 'Animes, Desenhos'
  },
  {
    id: 2,
    name: 'Filmes',
    description: 'Filmes e Séries'
  },
  {
    id: 1,
    name: 'Livros',
    description: 'livros...'
  }
]

module.exports = {
  Query: {
    allCategories: () => categories
  }
}