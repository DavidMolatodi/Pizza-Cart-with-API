document.addEventListener('alpine:init', () => {
    Alpine.data('pizzaCartWithAPIWidget', function() {
      return {
        init() {
            axios
            .get('https://pizza-cart-api.herokuapp.com/api/pizzas')
            .then((result) => {
                //console.log();
                this.pizzas = result.data.pizzas
            })
        },
        message : 'Kazi Perfect Pizzas',

        pizzas : []

    
      }
    });
})