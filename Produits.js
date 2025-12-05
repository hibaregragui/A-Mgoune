const products = [
    {name:"Eau de Rose", price:140, img:"https://cooperativeyacout.com/wp-content/uploads/2018/01/EAU-DE-ROSE-WATER-BIO-ORGANIC-KALAA-M-GOUNA-MGOUNA-FEMMES-MAROCAINES-COOPERATIVE-YACOUT-MAROC-LIP-BALM-ROSE-PRODUIT-NATUREL-BIO-2-1.png"},
    {name:"Huile de Rose", price:80, img:"https://media.mercola.com/imageserver/public/2021/november/herbal-oils-rose-absolute-oil-fr.jpg"},
    {name:"Crème Hydratante", price:60, img:"https://res.cloudinary.com/aroma-zone/d_default_placeholder.png/c_fill,q_auto,f_auto,w_626,h_441/v1/cf/0xsz2r7o7t3z/3IU7rpDkcihyxDRYf8ZOP3/d9133b599650376e5d9e9e6bcaf5ff0c/O081919_creme-jeunesse-3-rosesweb.jpg"},
    {name:"Savon Rose", price:25, img:"https://thumbs.dreamstime.com/b/savon-rose-33293517.jpg"},
    {name:"Parfum Rose", price:120, img:"https://thursd.com/storage/media/60906/floral-fragrance-from-the-pink-roses-of-Grasse.jpg"},
    {name:"Gel Douche", price:35, img:"https://www.encens-store.fr/wp-content/uploads/2021/03/gel-douche-parfume-rose-my-perfumes.jpg"},
    {name:"Shampoing Rose", price:145, img:"https://walmartcr.vtexassets.com/arquivos/ids/403830/Shampoo-Marca-Herbal-Essences-Smooth-Rose-Hips-865-ml-10-80149.jpg?v=638198704806870000"},
    {name:"Masque Visag", price:55, img:"https://www.paralabel.tn/1954-large_default/ecoscret-seoul-masque-visage-a-l-extrait-naturel-de-rose.jpg"},
    {name:"Gommage Rose", price:130, img:"https://be-artisan.com/wp-content/uploads/2025/04/Gommage-sel-seche-rose-be-artisan-texture.jpg"},
    {name:"Lait Corporel", price:150, img:"https://www.monherbo.fr/386-large_default/lait-corps-soyeux-%C3%A0-la-rose-musqu%C3%A9e-200ml-herboristerie-depuis-1942-nantes-eps-bourgeon-aromatherapie-plante-en.jpg"},
    {name:"tassossayt amazigh", price:245, img:"https://tse2.mm.bing.net/th/id/OIP.S2rA4ScVN03rFd30B3EvKAHaJT?pid=Api&P=0&h=180"},
    {name:"Gandoura amazighe", price:90, img:"https://i.pinimg.com/originals/6d/07/34/6d0734bf19de1cb3ffafecf641429c94.jpg"},
    {name:"Timlsa", price:35, img:"https://tse2.mm.bing.net/th/id/OIP.W4ddPMBQGDwxgHGvxuOXiwHaI8?pid=Api&P=0&h=180"},
    {name:"Azoule A", price:70, img:"https://tse1.mm.bing.net/th/id/OIP.i7_JjEncyWgra1OaKtH7kQHaHc?pid=Api&P=0&h=180"},
    {name:"Takhalalte", price:85, img:"https://i.pinimg.com/originals/c4/95/ca/c495ca59efbef86a7a98b97ca119ba9d.jpg"},
    {name:"Bracelet Amazigh", price:120, img:"https://tse4.mm.bing.net/th/id/OIP.ECQkso3H0DrXlwQy4W1TjgHaEL?pid=Api&P=0&h=180"},
    {name:"Jawahira Amazigh", price:60, img:"https://img.freepik.com/premium-photo/amazigh-jewelery-north-african-jewels-moroccan-accessories-women_429978-113.jpg"},
    {name:"Tapis amazigh magouna Maison", price:575, img:"https://tse4.mm.bing.net/th/id/OIP.8u_DipDUkd1l1mjT2Wy1igHaFI?pid=Api&P=0&h=180"},
    {name:"Boite", price:150, img:"https://petitdenicheur.com/wp-content/uploads/2025/02/04983645089704fb56bbc288f79e99f845464fbb3179273bee75756f3b53e218-600x600.webp"},
    {name:"Tableaux amazigh", price:125, img:"https://i.etsystatic.com/37858215/r/il/135fa5/6579760005/il_1080xN.6579760005_js91.jpg"},
  ];

  const productsContainer = document.getElementById('products');
  const cartItems = document.getElementById('cart-items');
  const totalPriceEl = document.getElementById('total-price');

  let cart = [];
  let total = 0;

  function renderProducts() {
    products.forEach((p, i) => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${p.img}" alt="${p.name}" />
        <div class="product-info">
          <h3>${p.name}</h3>
          <div class="price">${p.price} DH</div>
          <button class="btn-add" data-index="${i}">Ajouter</button>
        </div>
      `;
      productsContainer.appendChild(card);
    });
  }

  function renderCart() {
    cartItems.innerHTML = '';
    total = 0;
    cart.forEach((item, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${item.name} - ${item.price} DH</span>
        <button class="remove-btn" data-index="${index}">&times;</button>
      `;
      cartItems.appendChild(li);
      total += item.price;
    });
    totalPriceEl.textContent = `Total : ${total} DH`;

    document.querySelectorAll('.remove-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const i = parseInt(e.target.dataset.index);
        removeFromCart(i);
      });
    });
  }

  function addToCart(index) {
    cart.push(products[index]);
    renderCart();
  }

  function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
  }

  productsContainer.addEventListener('click', e => {
    if(e.target.classList.contains('btn-add')) {
      const index = parseInt(e.target.dataset.index);
      addToCart(index);
    }
  });

  renderProducts();
  renderCart();