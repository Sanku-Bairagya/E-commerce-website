




// responsive navbar
const bar = document.getElementById('bar');
const close = document.getElementById('close')
const nav = document.getElementById('navbar');

if(bar)
{
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}

if(close)
{
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}


//for scrolling

const layer1 = document.getElementById("hero");
const layer2 = document.getElementById("feature");
const layer3 = document.getElementById("product1");
const layer4 = document.getElementById("banner");


window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    hero.style.transform = `translateY(-${scrollY * 0.9}px)`;
    feature.style.transform = `translateY(-${scrollY * 0.3}px)`;
   
   
});
window.addEventListener("scroll",() => {

    const scrollY = window.scrollY;
    banner.style.transform = `translateY(-${scrollY * 0.041}px)`;
    

});


    function changeProductImage(selectedProduct, imageUrl) {
        var imageContainer = document.getElementsByClassName('.single-pro-details');
        
        // Update the src attribute for the image container
        imageContainer.src = imageUrl;
        
        // You can also update other parts of your product details page based on the selected product
        var productNameElement = document.getElementById('MySpan');
        var productDescriptionElement = document.getElementById('abt');
        var productPriceElement = document.getElementById('price');
        
        // Replace these values with your actual product data
        var productsData = {
            product1: {
                name: "Levi's",
                description: "The Gildan ultra cotton T-shirt is made from a substantil 6.0 oz. per sq. yd. fabric constructed from 100% cotton , this classic fit preshrunk jersey knit provides unmached comfort with each wear . featuring a taped neck and shoulder, and a seamless double-needle collar ,and available inm a range of color , it offers it all in the ultimate head-turning package ",
                price: "$78.09",
                imageUrl: "Build-and-Deploy-Ecommerce-Website-/img/products/f3.jpg"
            },
            product2: {
                name: "Adidas 2",
            description: "The Gildan ultra cotton T-shirt is made from a subil 6.0 oz. per sq. yd. fabric constructed from 100% cotton , this classic fit preshrunk jersey knit provides unmached comfort with each wear . featuring a taped neck and shoulder, and a seamless double-needle collar ,and available inm a range of color , it offers it all in the ultimate head-turning package ",
                price: "$102",
                imageUrl: "Build-and-Deploy-Ecommerce-Website-/img/products/f3.jpg"
            }
            // Add more products as needed
        };
        
        var product = productsData[selectedProduct];
        
        productNameElement.textContent = product.name;
        productDescriptionElement.textContent = product.description;
        productPriceElement.textContent = product.price;
    }

