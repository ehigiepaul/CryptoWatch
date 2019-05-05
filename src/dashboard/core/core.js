// let Vue = require('../js/vue')

Vue.component("display-cards", {
  data() {
    return {
      data: true,
      title: "btl",
      count: 1,
      currency: [
        {
          sym: "BTC",
          price: 62,
          ask: 61.949,
          bid: 61.949,
          pl: 62,
          value: 62
        },
        {
          sym: "FUN",
          price: 16,
          ask: 15.629,
          bid: 15.629,
          pl: 16,
          value: 16
        },
        {
          sym: "POE",
          price: 69,
          ask: 68.955,
          bid: 68.955,
          pl: 69,
          value: 69
        },
        {
          sym: "MANA",
          price: 68,
          ask: 67.812,
          bid: 67.812,
          pl: 68,
          value: 68
        },
        {
          sym: "MGO",
          price: 31,
          ask: 30.762,
          bid: 30.762,
          pl: 31,
          value: 31
        },
        {
          sym: "CAPP",
          price: 6,
          ask: 5.2715,
          bid: 5.2715,
          pl: 6,
          value: 6
        },
        {
          sym: "ADA",
          price: 95,
          ask: 94.061,
          bid: 94.061,
          pl: 95,
          value: 95
        },
        {
          sym: "DODG",
          price: 16,
          ask: 15.226,
          bid: 15.226,
          pl: 16,
          value: 16
        },
        {
          sym: "ZEC",
          price: 94,
          ask: 93.864,
          bid: 93.864,
          pl: 94,
          value: 94
        },
        {
          sym: "Ltc",
          price: 49,
          ask: 48.393,
          bid: 48.393,
          pl: 49,
          value: 49
        },
        {
          sym: "BTC",
          price: 62,
          ask: 61.949,
          bid: 61.949,
          pl: 62,
          value: 62
        },
        {
          sym: "FUN",
          price: 16,
          ask: 15.629,
          bid: 15.629,
          pl: 16,
          value: 16
        },
        {
          sym: "POE",
          price: 69,
          ask: 68.955,
          bid: 68.955,
          pl: 69,
          value: 69
        },
        {
          sym: "MANA",
          price: 68,
          ask: 67.812,
          bid: 67.812,
          pl: 68,
          value: 68
        },
        {
          sym: "MGO",
          price: 31,
          ask: 30.762,
          bid: 30.762,
          pl: 31,
          value: 31
        },
        {
          sym: "CAPP",
          price: 6,
          ask: 5.2715,
          bid: 5.2715,
          pl: 6,
          value: 6
        },
        {
          sym: "ADA",
          price: 95,
          ask: 94.061,
          bid: 94.061,
          pl: 95,
          value: 95
        },
        {
          sym: "DODG",
          price: 16,
          ask: 15.226,
          bid: 15.226,
          pl: 16,
          value: 16
        },
        {
          sym: "ZEC",
          price: 94,
          ask: 93.864,
          bid: 93.864,
          pl: 94,
          value: 94
        },
        {
          sym: "Ltc",
          price: 49,
          ask: 48.393,
          bid: 48.393,
          pl: 49,
          value: 49
        }
      ]
    };
  },
  template: `
        <div class="display">
    <div class="card" v-for="(c, index) in currency">
    <div class="wrapper">
        <div class="row">
            <div>
                <span>Ask</span>
                <span>{{c.ask}}</span>
            </div>
            <div>
                <span>P/L</span>
                <span>{{c.pl + count}}</span>
                <span>USD</span>
            </div>
        </div>
        <div class="row2">
            <span>{{c.price}}</span>
        </div>
        <div class="signal row3">
            <span>
                <i class="fa fa-arrow-up" style="color: var(--green);" v-on:click='increase(index)'></i>
            </span>
            <span>
                <p>{{ c.sym }}</p>
            </span>
            <span>
                <i class="fa fa-arrow-down" style="color: var(--plate3);" @click='decrease(index)'></i>
            </span>
        </div>
        <div class="row2">
            <span>{{c.value}} USD</span>
        </div>
        <div class="row">
            <div id="cardFavorite">
                <i class="fa fa-heart"></i>
            </div>
            <div>
                <span>Bid:</span>
                <span>{{c.bid}}</span>
            </div>
        </div>
    </div>
</div>
</div>
  `,
  methods: {
    increase(val) {
      this.currency[val].pl++;
    },
    decrease(val) {
      this.currency[val].pl--;
    },

    random() {
      return Math.random()
        .toString()
        .slice(0, 6);
    },

    randomFloat() {
      return Math.random()
        .toString()
        .slice(0, 6);
    }
  }
});

let card = new Vue({
  el: ".app"
});
