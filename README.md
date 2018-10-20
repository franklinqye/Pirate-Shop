<p align="center">
  <img alt="arclogo" src="https://cloud.githubusercontent.com/assets/3068563/23199029/55e9d55a-f8aa-11e6-91a2-74b82db3813c.png"><br><br>
  <a href="https://github.com/diegohaz/arc/releases/latest"><img src="https://github-release-version.herokuapp.com/github/diegohaz/arc/release.svg?style=flat-square" alt="Latest release" /></a>
  <a href="https://travis-ci.org/diegohaz/arc"><img src="https://img.shields.io/travis/diegohaz/arc/redux-ssr.svg?style=flat-square" alt="Build Status" /></a>
  <a href="https://codecov.io/gh/diegohaz/arc/branch/redux-ssr"><img src="https://img.shields.io/codecov/c/github/diegohaz/arc/redux-ssr.svg?style=flat-square" alt="Coverage Status" /></a>
  <a href="https://gitter.im/diegohaz/arc"><img src="https://img.shields.io/badge/chat-on%20gitter-1dce73.svg?style=flat-square" alt="Gitter chat" /></a>
</p>

<br />
<p>
<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/tyWoocmAMXP82QQzh26Huzgu/diegohaz/arc'>
  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/tyWoocmAMXP82QQzh26Huzgu/diegohaz/arc.svg' />
</a>
</p>
<br />

## Setup

### 1. Get the source code

Just clone master:
```sh
$ git clone https://github.com/franklinqye/pirate-shop.git
$ cd pirate-shop
```

### 2. Install dependencies

```sh
$ npm install
```

### 3. Run the app

```sh
$ npm run dev
```

Now you can open [http://localhost:3000](http://localhost:3000) in browser and start developing.

## Features


The catalogue has the first original three StarWars films, each in both Blu-Ray and DVD. Users may add any number of items to their cart, which can be accessed in the upper-right menu. There is a counter to track the number of items users add to the cart.
<br />
Navigating via the menu bar, one can go to their shopping cart and refine their purchases by incrementing or decrementing the quantity they purchased. Note that clicking the "Remove" button or decrementing to a quantity of zero will remove the item from the shopping cart.
<br />
The total price for each film is displayed at the bottom of the shopping cart, along with any discounts the user may have recived. The current discount is a 10% price reduction for any time the user purchases an entire set of the same media (Blu-Ray or DVD). Note that this discount may only be applied once per media type. There is also a 5% discount for purchasing over 100 items at once, applied after the frist discount.
<br />

<br />
The main concept I designed the web app around is scalability and intergration. Although the current catalogue only contains 6 total films, the redux store may easily be hooked up to an API that may recive a larger selection of films given they are in the correct format. If desired, VRC or hard drive mediums could easily be added from an external database and imediately inplemented, 10% discount and all. If the rest of the StarWars films were to be added, this would only require increasing the discount required number of films per medium from 3 to 6. Afterwards, the web app will automaticly read in the new films and implement the features accordingly. Additionally, react provides simple ways to turn redux dispatches into API calls, which is another feature in favor of intergration
<br />

The trade off from foucing on scalability and intergration, is the code become much less clean and efficient, as we are making no assumptions about the quantity of films in store, onr the different types of media avalible. Because of this, the browser is forced to do much more calculations when aggregating costs, or appling discounts. Regardless, the calculations are made at a reasonably fast enough rate where there is little to no latency when switching between pages or adding items to the shopping cart.
<br />

I will admit if I where to recreate this applciation, I would filter movies by media as opposed to the other way around, or list each film by thier medium. Originally, I listed each film and it's alternate media forms in anticipation of easily accomodating films that where not avalible in all media formats, but later on, when came time to apply discounts, the process became much more messy and slow that I had anticipated. But again, this is where I decided to champion intergration over speed.

<br />
If I where to spend more time interating on this project, I would focus on adding a check-out page, something I had originally planned on doing, and a feature to limit the amount of results per page, something I also originally had planned but realized that with only 6 films, there were more important features to tackle. Additionally, I feel adding filters to the catalogue (by name, media) would have been interesting, but never the less never got to. One last feature that never made it was the ability for users to input thier own quanitity of films into the shopping cart. I knew that I would've used redux-form to handle the input, but alas the discounts were priotitized.