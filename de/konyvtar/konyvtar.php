<!DOCTYPE html>
<html lang="hu" dir="ltr">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta title="Magyar Dialogikus Iskola">
  <meta keywords="Magyar Dialogikus Iskola, Dialogikus Iskola, Szabó Lajos, Tábor Béla, Mándy Stefánia, Horváth Ágnes, Surányi László, Tábor Ádám">
  <title>Magyar Dialogikus Iskola</title>

  <link rel="stylesheet" href="../css/konyvtar/style.css">
  <link rel="stylesheet" href="../css/rendered/navbar.css">
  <link rel="stylesheet" href="../css/rendered/footer.css">
  <link href="https://fonts.googleapis.com/css?family=Crimson+Text|Playfair+Display|Playfair+Display+SC&display=swap" rel="stylesheet">
  <link rel="shortcut icon" href="../kepek/favicon/favicon.png" type="image/x-icon">
  <link rel="icon" href="../kepek/favicon/favicon.png" type="image/x-icon">


</head>

<body>

  <script type="text/javascript" src="../translations/konyvtar/language.json"></script>
  <script type="text/javascript" src="../translations/navbar/navbar_language.json"></script>
  <script type="text/javascript" src="../translations/footer/footer_language.json"></script>
  <script type="text/javascript" src="../js/rendered/loading.js"></script>

  <div id="main_container" class="main_container">
    <div id="navbar">
      <?php include '../php/navbar.php';?>
    </div>

    <div class="page_container">

    <section class="">
      <div class="section_container">
        <div class="titles">
          <form action="">
            <div class="form_container">
              <input type="radio" id="irasok" name="konyvtar" checked>
              <label class="selected" for="irasok">Írások</label><br>
              <input type="radio" id="galeria" name="konyvtar">
              <label class="selected" for="galeria">Galéria</label><br>
              <input type="radio" id="esemenyek" name="konyvtar">
              <label class="selected" for="esemenyek">Események</label>
            </div>
          </form>
        </div>
      </div>
    </section>

<!-- <div class="content_container">
    <section class="irasok">
      <div class="irasok_container">
        <h2 id="" class="">Írások 1</h2>
        <h2 id="" class="">Írások 2</h2>
      </div>
    </section>
    <section class="galeria disappear">
      <div class="galeria_container">
        <h2 id="" class="">Galéria 1</h2>
        <h2 id="" class="">Galéria 2</h2>
      </div>
    </section>
    <section class="esemenyek disappear">
      <div class="esemenyek_container">
        <h2 id="" class="">Események 1</h2>
        <h2 id="" class="">Események 2</h2>
      </div>
    </section>
  </div> -->

  <main>
    <div class="irasok_container">

      <div class="kereso_container">
    <label>
      <!-- <span>Keresés:</span> -->
      <input placeholder="Keresés..." type="search" id="searchInput">
    </label>
    </div>

    <div class="table-wrapper">
      <table id="filterTable">
        <thead>
          <tr>
            <th data-type="text">Cím</th>
            <th data-type="text">Szerző</th>
            <th data-type="text">Nyelv</th>
            <th data-type="text">Link</th>
            <th data-type="text">Téma1</th>
            <th data-type="text">Téma2</th>
            <th data-type="text">emoji version</th>
            <th data-type="text">unicode version</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Vádirat a szellem ellen</td>
            <td>Szabó Lajos, Tábor Béla</td>
            <td><img class="language_flag" src="/kepek/menu/magyar_zaszlo.svg" alt="Magyar nyelv"></td>
            <td><a href="http://lajosszabo.com/vadirat.htm" target="_blank">http://lajosszabo.com/vadirat.htm</a></td>
            <td>Akármi1</td>
            <td>Akármi2</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>melon</td>
            <td>U+1F348</td>
            <td>🍈</td>
            <td>fruit</td>
            <td>melon</td>
            <td>cantaloupe, honeydew, muskmelon</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>watermelon</td>
            <td>U+1F349</td>
            <td>🍉</td>
            <td>fruit</td>
            <td>watermelon</td>
            <td> </td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>tangerine</td>
            <td>U+1F34A</td>
            <td>🍊</td>
            <td>fruit</td>
            <td>tangerine</td>
            <td>mandarin, orange</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>lemon</td>
            <td>U+1F34B</td>
            <td>🍋</td>
            <td>fruit</td>
            <td>lemon</td>
            <td>lemonade</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>banana</td>
            <td>U+1F34C</td>
            <td>🍌</td>
            <td>fruit</td>
            <td>banana</td>
            <td>plantain</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>pineapple</td>
            <td>U+1F34D</td>
            <td>🍍</td>
            <td>fruit</td>
            <td>pineapple</td>
            <td> </td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>mango</td>
            <td>U+1F96D</td>
            <td>🥭</td>
            <td>fruit</td>
            <td>⊛ mango</td>
            <td> </td>
            <td>11.0</td>
            <td>11.0</td>
          </tr>
          <tr>
            <td>red apple</td>
            <td>U+1F34E</td>
            <td>🍎</td>
            <td>fruit</td>
            <td>red apple</td>
            <td>red delicious apple</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>green apple</td>
            <td>U+1F34F</td>
            <td>🍏</td>
            <td>fruit</td>
            <td>green apple</td>
            <td>golden delicious apple, granny smith apple</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>pear</td>
            <td>U+1F350</td>
            <td>🍐</td>
            <td>fruit</td>
            <td>pear</td>
            <td> </td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>peach</td>
            <td>U+1F351</td>
            <td>🍑</td>
            <td>fruit</td>
            <td>peach</td>
            <td>bottom, butt</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>cherries</td>
            <td>U+1F352</td>
            <td>🍒</td>
            <td>fruit</td>
            <td>cherries</td>
            <td>cherry, wild cherry</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>strawberry</td>
            <td>U+1F353</td>
            <td>🍓</td>
            <td>fruit</td>
            <td>strawberry</td>
            <td> </td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>kiwifruit</td>
            <td>U+1F95D</td>
            <td>🥝</td>
            <td>fruit</td>
            <td>kiwi fruit</td>
            <td>chinese gooseberry, kiwi</td>
            <td>3.0</td>
            <td>9.0</td>
          </tr>
          <tr>
            <td>tomato</td>
            <td>U+1F345</td>
            <td>🍅</td>
            <td>fruit</td>
            <td>tomato</td>
            <td> </td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>coconut</td>
            <td>U+1F965</td>
            <td>🥥</td>
            <td>fruit</td>
            <td>coconut</td>
            <td>cocoanut</td>
            <td>5.0</td>
            <td>10.0</td>
          </tr>
          <tr>
            <td>avocado</td>
            <td>U+1F951</td>
            <td>🥑</td>
            <td>vegetable</td>
            <td>avocado</td>
            <td> </td>
            <td>3.0</td>
            <td>9.0</td>
          </tr>
          <tr>
            <td>eggplant</td>
            <td>U+1F346</td>
            <td>🍆</td>
            <td>vegetable</td>
            <td>eggplant</td>
            <td>eggplant, phallic, purple vegetable</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>potato</td>
            <td>U+1F954</td>
            <td>🥔</td>
            <td>vegetable</td>
            <td>potato</td>
            <td>baked potato, idaho potato</td>
            <td>3.0</td>
            <td>9.0</td>
          </tr>
          <tr>
            <td>carrot</td>
            <td>U+1F955</td>
            <td>🥕</td>
            <td>vegetable</td>
            <td>carrot</td>
            <td> </td>
            <td>3.0</td>
            <td>9.0</td>
          </tr>
          <tr>
            <td>corn</td>
            <td>U+1F33D</td>
            <td>🌽</td>
            <td>vegetable</td>
            <td>ear of corn</td>
            <td>corn, corn on the cob</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>hot pepper</td>
            <td>U+1F336</td>
            <td>🌶</td>
            <td>vegetable</td>
            <td>hot pepper</td>
            <td>chili pepper, spicy</td>
            <td>1.0</td>
            <td>7.0</td>
          </tr>
          <tr>
            <td>cucumber</td>
            <td>U+1F952</td>
            <td>🥒</td>
            <td>vegetable</td>
            <td>cucumber</td>
            <td>gherkin, pickle</td>
            <td>3.0</td>
            <td>9.0</td>
          </tr>
          <tr>
            <td>leafy green</td>
            <td>U+1F96C</td>
            <td>🥬</td>
            <td>vegetable</td>
            <td>⊛ leafy green</td>
            <td> </td>
            <td>11.0</td>
            <td>11.0</td>
          </tr>
          <tr>
            <td>broccoli</td>
            <td>U+1F966</td>
            <td>🥦</td>
            <td>vegetable</td>
            <td>broccoli</td>
            <td> </td>
            <td>5.0</td>
            <td>10.0</td>
          </tr>
          <tr>
            <td>mushroom</td>
            <td>U+1F344</td>
            <td>🍄</td>
            <td>vegetable</td>
            <td>mushroom</td>
            <td>shroom, toadstool</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>peanuts</td>
            <td>U+1F95C</td>
            <td>🥜</td>
            <td>vegetable</td>
            <td>peanuts</td>
            <td> </td>
            <td>3.0</td>
            <td>9.0</td>
          </tr>
          <tr>
            <td>chestnut</td>
            <td>U+1F330</td>
            <td>🌰</td>
            <td>vegetable</td>
            <td>chestnut</td>
            <td>acorn, nut</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>bread</td>
            <td>U+1F35E</td>
            <td>🍞</td>
            <td>prepared</td>
            <td>bread</td>
            <td>loaf of bread</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>croissant</td>
            <td>U+1F950</td>
            <td>🥐</td>
            <td>prepared</td>
            <td>croissant</td>
            <td> </td>
            <td>3.0</td>
            <td>9.0</td>
          </tr>
          <tr>
            <td>french bread</td>
            <td>U+1F956</td>
            <td>🥖</td>
            <td>prepared</td>
            <td>baguette bread</td>
            <td> </td>
            <td>3.0</td>
            <td>9.0</td>
          </tr>
          <tr>
            <td>pretzel</td>
            <td>U+1F968</td>
            <td>🥨</td>
            <td>prepared</td>
            <td>pretzel</td>
            <td> </td>
            <td>5.0</td>
            <td>10.0</td>
          </tr>
          <tr>
            <td>bagel</td>
            <td>U+1F96F</td>
            <td>🥯</td>
            <td>prepared</td>
            <td>⊛ bagel</td>
            <td> </td>
            <td>11.0</td>
            <td>11.0</td>
          </tr>
          <tr>
            <td>pancakes</td>
            <td>U+1F95E</td>
            <td>🥞</td>
            <td>prepared</td>
            <td>pancakes</td>
            <td>crêpes</td>
            <td>3.0</td>
            <td>9.0</td>
          </tr>
          <tr>
            <td>cheese</td>
            <td>U+1F9C0</td>
            <td>🧀</td>
            <td>prepared</td>
            <td>cheese wedge</td>
            <td>cheese</td>
            <td>1.0</td>
            <td>8.0</td>
          </tr>
          <tr>
            <td>beef</td>
            <td>U+1F356</td>
            <td>🍖</td>
            <td>prepared</td>
            <td>meat on bone</td>
            <td>ano niku, barbecue, bbq, manga meat</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>chicken</td>
            <td>U+1F357</td>
            <td>🍗</td>
            <td>prepared</td>
            <td>poultry leg</td>
            <td>chicken drumstick, turkey leg</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>steak</td>
            <td>U+1F969</td>
            <td>🥩</td>
            <td>prepared</td>
            <td>cut of meat</td>
            <td>steak</td>
            <td>5.0</td>
            <td>10.0</td>
          </tr>
          <tr>
            <td>bacon</td>
            <td>U+1F953</td>
            <td>🥓</td>
            <td>prepared</td>
            <td>bacon</td>
            <td> </td>
            <td>3.0</td>
            <td>9.0</td>
          </tr>
          <tr>
            <td>hamburger</td>
            <td>U+1F354</td>
            <td>🍔</td>
            <td>prepared</td>
            <td>hamburger</td>
            <td>burger, cheeseburger</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>french fries</td>
            <td>U+1F35F</td>
            <td>🍟</td>
            <td>prepared</td>
            <td>french fries</td>
            <td>fries, mcdonalds fries</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>pizza</td>
            <td>U+1F355</td>
            <td>🍕</td>
            <td>prepared</td>
            <td>pizza</td>
            <td>pepperoni pizza, pizza</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>hotdog</td>
            <td>U+1F32D</td>
            <td>🌭</td>
            <td>prepared</td>
            <td>hot dog</td>
            <td>hotdog, sausage</td>
            <td>1.0</td>
            <td>8.0</td>
          </tr>
          <tr>
            <td>sandwich</td>
            <td>U+1F96A</td>
            <td>🥪</td>
            <td>prepared</td>
            <td>sandwich</td>
            <td> </td>
            <td>5.0</td>
            <td>10.0</td>
          </tr>
          <tr>
            <td>taco</td>
            <td>U+1F32E</td>
            <td>🌮</td>
            <td>prepared</td>
            <td>taco</td>
            <td> </td>
            <td>1.0</td>
            <td>8.0</td>
          </tr>
          <tr>
            <td>burrito</td>
            <td>U+1F32F</td>
            <td>🌯</td>
            <td>prepared</td>
            <td>burrito</td>
            <td>wrap</td>
            <td>1.0</td>
            <td>8.0</td>
          </tr>
          <tr>
            <td>pita pocket</td>
            <td>U+1F959</td>
            <td>🥙</td>
            <td>prepared</td>
            <td>stuffed flatbread</td>
            <td>doner kebab, shawarma, souvlaki</td>
            <td>3.0</td>
            <td>9.0</td>
          </tr>
          <tr>
            <td>egg</td>
            <td>U+1F95A</td>
            <td>🥚</td>
            <td>prepared</td>
            <td>egg</td>
            <td> </td>
            <td>3.0</td>
            <td>9.0</td>
          </tr>
          <tr>
            <td>fried egg</td>
            <td>U+1F373</td>
            <td>🍳</td>
            <td>prepared</td>
            <td>cooking</td>
            <td>breakfast, fried egg, frying pan</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>casserole</td>
            <td>U+1F958</td>
            <td>🥘</td>
            <td>prepared</td>
            <td>shallow pan of food</td>
            <td>paella</td>
            <td>3.0</td>
            <td>9.0</td>
          </tr>
          <tr>
            <td>stew</td>
            <td>U+1F372</td>
            <td>🍲</td>
            <td>prepared</td>
            <td>pot of food</td>
            <td>bowl of food</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>soup</td>
            <td>U+1F963</td>
            <td>🥣</td>
            <td>prepared</td>
            <td>bowl with spoon</td>
            <td>cereal bowl</td>
            <td>5.0</td>
            <td>10.0</td>
          </tr>
          <tr>
            <td>salad</td>
            <td>U+1F957</td>
            <td>🥗</td>
            <td>prepared</td>
            <td>green salad</td>
            <td> </td>
            <td>3.0</td>
            <td>9.0</td>
          </tr>
          <tr>
            <td>popcorn</td>
            <td>U+1F37F</td>
            <td>🍿</td>
            <td>prepared</td>
            <td>popcorn</td>
            <td>popping corn</td>
            <td>1.0</td>
            <td>8.0</td>
          </tr>
          <tr>
            <td>salt</td>
            <td>U+1F9C2</td>
            <td>🧂</td>
            <td>prepared</td>
            <td>⊛ salt</td>
            <td> </td>
            <td>11.0</td>
            <td>11.0</td>
          </tr>
          <tr>
            <td>canned soup</td>
            <td>U+1F96B</td>
            <td>🥫</td>
            <td>prepared</td>
            <td>canned food</td>
            <td> </td>
            <td>5.0</td>
            <td>10.0</td>
          </tr>
          <tr>
            <td>bento box</td>
            <td>U+1F371</td>
            <td>🍱</td>
            <td>asian</td>
            <td>bento box</td>
            <td>lunch box</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>rice crackers</td>
            <td>U+1F358</td>
            <td>🍘</td>
            <td>asian</td>
            <td>rice cracker</td>
            <td> </td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>onigiri</td>
            <td>U+1F359</td>
            <td>🍙</td>
            <td>asian</td>
            <td>rice ball</td>
            <td>nori, triangle rice</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>rice</td>
            <td>U+1F35A</td>
            <td>🍚</td>
            <td>asian</td>
            <td>cooked rice</td>
            <td>boiled rice, bowl of rice, rice, steamed rice</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>curry rice</td>
            <td>U+1F35B</td>
            <td>🍛</td>
            <td>asian</td>
            <td>curry rice</td>
            <td>curry, indian food</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>noodles</td>
            <td>U+1F35C</td>
            <td>🍜</td>
            <td>asian</td>
            <td>steaming bowl</td>
            <td>noodles, noodles with chopsticks, ramen</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>spaghetti</td>
            <td>U+1F35D</td>
            <td>🍝</td>
            <td>asian</td>
            <td>spaghetti</td>
            <td>pasta, spaghetti bolognese</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>sweet potato</td>
            <td>U+1F360</td>
            <td>🍠</td>
            <td>asian</td>
            <td>roasted sweet potato</td>
            <td>potato, sweet potato, yam</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>oden</td>
            <td>U+1F362</td>
            <td>🍢</td>
            <td>asian</td>
            <td>oden</td>
            <td>kebab, skewer</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>sushi</td>
            <td>U+1F363</td>
            <td>🍣</td>
            <td>asian</td>
            <td>sushi</td>
            <td>sashimi, seafood</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>fried shrimp</td>
            <td>U+1F364</td>
            <td>🍤</td>
            <td>asian</td>
            <td>fried shrimp</td>
            <td>ebi furai, fried prawn, tempura</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>fish cake</td>
            <td>U+1F365</td>
            <td>🍥</td>
            <td>asian</td>
            <td>fish cake with swirl</td>
            <td>fishcake, narutomaki, pink swirl</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>moon cake</td>
            <td>U+1F96E</td>
            <td>🥮</td>
            <td>asian</td>
            <td>⊛ moon cake</td>
            <td> </td>
            <td>11.0</td>
            <td>11.0</td>
          </tr>
          <tr>
            <td>dango</td>
            <td>U+1F361</td>
            <td>🍡</td>
            <td>asian</td>
            <td>dango</td>
            <td>dessert stick, pink white green balls</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>dumpling</td>
            <td>U+1F95F</td>
            <td>🥟</td>
            <td>asian</td>
            <td>dumpling</td>
            <td>empanada, gyōza, pierogi</td>
            <td>5.0</td>
            <td>10.0</td>
          </tr>
          <tr>
            <td>fortune cookie</td>
            <td>U+1F960</td>
            <td>🥠</td>
            <td>asian</td>
            <td>fortune cookie</td>
            <td> </td>
            <td>5.0</td>
            <td>10.0</td>
          </tr>
          <tr>
            <td>chinese takeout</td>
            <td>U+1F961</td>
            <td>🥡</td>
            <td>asian</td>
            <td>takeout box</td>
            <td>chinese food box, oyster pail</td>
            <td>5.0</td>
            <td>10.0</td>
          </tr>
          <tr>
            <td>crab</td>
            <td>U+1F980</td>
            <td>🦀</td>
            <td>marine</td>
            <td>crab</td>
            <td>crab cancer, red crab</td>
            <td>1.0</td>
            <td>8.0</td>
          </tr>
          <tr>
            <td>lobster</td>
            <td>U+1F99E</td>
            <td>🦞</td>
            <td>marine</td>
            <td>⊛ lobster</td>
            <td> </td>
            <td>11.0</td>
            <td>11.0</td>
          </tr>
          <tr>
            <td>shrimp</td>
            <td>U+1F990</td>
            <td>🦐</td>
            <td>marine</td>
            <td>shrimp</td>
            <td> </td>
            <td>3.0</td>
            <td>9.0</td>
          </tr>
          <tr>
            <td>squid</td>
            <td>U+1F991</td>
            <td>🦑</td>
            <td>marine</td>
            <td>squid</td>
            <td> </td>
            <td>3.0</td>
            <td>9.0</td>
          </tr>
          <tr>
            <td>soft-serve</td>
            <td>U+1F366</td>
            <td>🍦</td>
            <td>sweet</td>
            <td>soft ice cream</td>
            <td>mr whippy, soft serve</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>shaved ice</td>
            <td>U+1F367</td>
            <td>🍧</td>
            <td>sweet</td>
            <td>shaved ice</td>
            <td>snow cone</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>ice cream</td>
            <td>U+1F368</td>
            <td>🍨</td>
            <td>sweet</td>
            <td>ice cream</td>
            <td>bowl of ice cream, dessert</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>doughnut</td>
            <td>U+1F369</td>
            <td>🍩</td>
            <td>sweet</td>
            <td>doughnut</td>
            <td>donut</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>cookie</td>
            <td>U+1F36A</td>
            <td>🍪</td>
            <td>sweet</td>
            <td>cookie</td>
            <td>biscuit, chocolate cookie</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>birthday cake</td>
            <td>U+1F382</td>
            <td>🎂</td>
            <td>sweet</td>
            <td>birthday cake</td>
            <td>birthday, cake, cake with candles</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>shortcake</td>
            <td>U+1F370</td>
            <td>🍰</td>
            <td>sweet</td>
            <td>shortcake</td>
            <td>cake, piece of cake, strawberry shortcake</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>cupcake</td>
            <td>U+1F9C1</td>
            <td>🧁</td>
            <td>sweet</td>
            <td>⊛ cupcake</td>
            <td> </td>
            <td>11.0</td>
            <td>11.0</td>
          </tr>
          <tr>
            <td>pie</td>
            <td>U+1F967</td>
            <td>🥧</td>
            <td>sweet</td>
            <td>pie</td>
            <td> </td>
            <td>5.0</td>
            <td>10.0</td>
          </tr>
          <tr>
            <td>chocolate bar</td>
            <td>U+1F36B</td>
            <td>🍫</td>
            <td>sweet</td>
            <td>chocolate bar</td>
            <td>block of chocolate</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>candy</td>
            <td>U+1F36C</td>
            <td>🍬</td>
            <td>sweet</td>
            <td>candy</td>
            <td>lolly, sweet</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>lollipop</td>
            <td>U+1F36D</td>
            <td>🍭</td>
            <td>sweet</td>
            <td>lollipop</td>
            <td>android lollipop, lollypop</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>custard flan</td>
            <td>U+1F36E</td>
            <td>🍮</td>
            <td>sweet</td>
            <td>custard</td>
            <td>creme caramel, dessert, flan, pudding</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>honey</td>
            <td>U+1F36F</td>
            <td>🍯</td>
            <td>sweet</td>
            <td>honey pot</td>
            <td>honey, pot</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>baby formula</td>
            <td>U+1F37C</td>
            <td>🍼</td>
            <td>drink</td>
            <td>baby bottle</td>
            <td>bottle feeding</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>milk</td>
            <td>U+1F95B</td>
            <td>🥛</td>
            <td>drink</td>
            <td>glass of milk</td>
            <td> </td>
            <td>3.0</td>
            <td>9.0</td>
          </tr>
          <tr>
            <td>coffee</td>
            <td>U+2615</td>
            <td>☕</td>
            <td>drink</td>
            <td>hot beverage</td>
            <td>coffee, hot chocolate, tea</td>
            <td>1.0</td>
            <td>4.0</td>
          </tr>
          <tr>
            <td>green tea</td>
            <td>U+1F375</td>
            <td>🍵</td>
            <td>drink</td>
            <td>teacup without handle</td>
            <td>green tea, matcha, matcha green tea</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>sake</td>
            <td>U+1F376</td>
            <td>🍶</td>
            <td>drink</td>
            <td>sake</td>
            <td>bottle, rice wine</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>champagne</td>
            <td>U+1F37E</td>
            <td>🍾</td>
            <td>drink</td>
            <td>bottle with popping cork</td>
            <td>celebration, champagne, sparking wine</td>
            <td>1.0</td>
            <td>8.0</td>
          </tr>
          <tr>
            <td>red wine</td>
            <td>U+1F377</td>
            <td>🍷</td>
            <td>drink</td>
            <td>wine glass</td>
            <td>alcohol, red wine, wine</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>martini</td>
            <td>U+1F378</td>
            <td>🍸</td>
            <td>drink</td>
            <td>cocktail glass</td>
            <td>martini</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>tropical drink</td>
            <td>U+1F379</td>
            <td>🍹</td>
            <td>drink</td>
            <td>tropical drink</td>
            <td>fruit punch, tiki cocktail, tiki drink</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>beer</td>
            <td>U+1F37A</td>
            <td>🍺</td>
            <td>drink</td>
            <td>beer mug</td>
            <td>beer stein, lager</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>2 beers</td>
            <td>U+1F37B</td>
            <td>🍻</td>
            <td>drink</td>
            <td>clinking beer mugs</td>
            <td>beers, cheers</td>
            <td>1.0</td>
            <td>6.0</td>
          </tr>
          <tr>
            <td>2 glasses of champagne</td>
            <td>U+1F942</td>
            <td>🥂</td>
            <td>drink</td>
            <td>clinking glasses</td>
            <td>celebration, champagne glasses, cheers</td>
            <td>3.0</td>
            <td>9.0</td>
          </tr>
          <tr>
            <td>whiskey</td>
            <td>U+1F943</td>
            <td>🥃</td>
            <td>drink</td>
            <td>tumbler glass</td>
            <td>bourbon, rum, whiskey, whisky</td>
            <td>3.0</td>
            <td>9.0</td>
          </tr>
          <tr>
            <td>soft drink</td>
            <td>U+1F964</td>
            <td>🥤</td>
            <td>drink</td>
            <td>cup with straw</td>
            <td>milkshake, soda, soft drink</td>
            <td>5.0</td>
            <td>10.0</td>
          </tr>
        </tbody>
      </table>
    </div>

    </div>

    <div class="galeria_container">

    <h1>Galéria</h1>

    </div>

    <div class="esemenyek_container">

    <h1>Események</h1>

    </div>



  </main>

</div>

<?php include '../php/footer.php';?>
</div>

  <script type="module" src="../js/konyvtar/app.js"></script>

</body>

</html>