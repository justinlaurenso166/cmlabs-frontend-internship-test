class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header class="header">
            <h1 class="font-bold text-xl sm:text-2xl tracking-wide hover:cursor-pointer" > <a href="/">MealApp</a></h1>
            <div class="hidden md:block lg:block xl:block">
                <nav class="flex gap-10 font-semibold text-lg">
                    <a href="../index.html">Home</a>
                    <a href="">Foods</a>
                    <a href="">Ingredients</a>
                    <a href="">Local Culinary</a>
                </nav>
            </div>
            
            <div class="block md:hidden lg:hidden xl:hidden transition-all delay-75">
                <img src="../img/hamburger.png" alt="menu" width="22" class="hover:cursor-pointer" id="menu">
            </div>
        </header>
            
        <div class="relative">
            <div class="z-50 w-full absolute hidden bg-white shadow-md" id="menu-dropdown">
                <nav class="flex flex-col font-semibold text-lg">
                    <a href="/" class="py-3 text-center hover:bg-black hover:text-white transition-all delay-100 ease-in">Home</a>
                    <a href="" class="py-3 text-center hover:bg-black hover:text-white transition-all delay-100 ease-in">Foods</a>
                    <a href="" class="py-3 text-center hover:bg-black hover:text-white transition-all delay-100 ease-in">Ingredients</a>
                    <a href="" class="py-3 text-center hover:bg-black hover:text-white transition-all delay-100 ease-in">Local Culinary</a>
                </nav>
            </div>
        </div>
    `;
    }
}

$(document).ready(function () {
    let show = false;

    $('#menu').click(function () {
        $('#menu-dropdown').toggleClass('hidden');
        show = !show;

        if(show){
            $("#menu").attr('src','../img/close.png')
        }else{
            $("#menu").attr('src','../img/hamburger.png')
        }
    });
});


customElements.define('header-component', Header);