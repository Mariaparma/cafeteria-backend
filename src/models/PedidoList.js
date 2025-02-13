class PedidoList {
    constructor() {
        this.pedidos = [];
    }
    addPedido(pedido) {
        this.pedidos.push(pedido);
    }
    getAllPedidos(){
        return this.pedidos;
    }

    updateMovie(id, updateData) {
        const movie = this.getMovieById(id);
        Object.assign(movie, updateData);
        return movie;
    }

    deleteMovie(id) {
        this.movies = this.movies.filter(movie => movie.id != id);
    }

    getTotalMovies(){
        return this.movies.length;
    }

} 
  
module.exports = PedidoList;