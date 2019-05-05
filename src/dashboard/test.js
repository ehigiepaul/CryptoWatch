// let arr = []

// for (var i = 0; i < 10; i++) {
// 	test()
// 	console.log(arr[i])
// }

// function test() {
// 	let random = Math.random() * 100
// 	let r = random.toString().slice(0, 6)
// 	let f = Math.ceil(random).toString().slice(0, 6)
// 	arr.push(`{
// 		sym: 'Btc',
// 		price: ${f},
// 		ask: ${r},
// 		bid: ${r},
// 		pl: ${f},
// 		value: ${f}
// 	},`)
// }

function name(name) {
  return {
    get fullname() {
      console.log(`hello ${name}`);
    },
    /**
     *  Time()
     *
     */
    time() {
      let d = new Date();
      console.log(d);
    }
  };
}

name("ehigiepaul").time();
