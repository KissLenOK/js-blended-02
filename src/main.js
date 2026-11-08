/* Створіть функцію createProduct(name, price, quantity, tagsString). Вона повинна сформувати й повернути новий об’єкт товару.



Об’єкт повинен містити:

властивості name, price і quantity;
властивість available зі значенням true, якщо quantity більше нуля;
властивість tags із масивом тегів.


Параметр tagsString містить теги, розділені комою без пробілів. Перетворіть його на масив. 
Якщо серед тегів немає popular, перевірте це через includes() і додайте його в масив. */
function createProduct(name, price, quantity, tagsString){
    const available=quantity>0;
    const tags=tagsString.split(",");
if(!tags.includes('popular')){
    tags.push('popular');
}
return {name, price, quantity,tags, available};
}
console.log(createProduct('Навушники', 2500, 8, 'audio,wireless'));

//Етап 2 — Додавання товару до каталогу

const products = [];

function addProduct(products, name, price, quantity, tagsString) {
  const product = createProduct(name, price, quantity, tagsString);

  products.push(product);

  return product;
}

addProduct(products, 'Ноутбук', 32000, 4, 'tech,work');
addProduct(products, 'Навушники', 2500, 8, 'audio,wireless');
addProduct(products, 'Миша', 1200, 3, 'gaming');

console.log(products);