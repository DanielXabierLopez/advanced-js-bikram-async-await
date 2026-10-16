//DESARROLLA AQUI TUS SOLUCIONES

async function getImageAndName (pokemon){

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return {name, img}
    
}

// 1.- Declara una función getRandomPokemon que retorne un pokemon aleatorio.
async function getRandomPokemon() {
    try {
        const randomId = Math.floor(Math.random() * 1025) + 1;

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);

        if (!response.ok) {
            throw new Error("Error al obtener el Pokémon");
        }

        const pokemon = await response.json();

        return pokemon;
    } catch (error) {
        console.error(error);
    }
};

//2.- Declara una funcion getImageAndName que retorne el nombre y la URL de la imagen de un pokemon => (return {img, name})
async function getImageAndName() {
    const randomId = Math.floor(Math.random() * 1025) + 1;

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const pokemon = await response.json();

    return {
        img: pokemon.sprites.front_default,
        name: pokemon.name
    };
};
/*3.- Declara una funcion printImageAndName que retorne el string necesario para pintar la imagen y el nombre del pokemon en el DOM de la siguiente forma:
<section>
    <img src="url de imagen" alt="nombre del pokemon">
    <h1>Nombre del pokemon</h1>
</section>
 */
async function printImageAndName() {
    const { img, name } = await getImageAndName();

    return `
        <section>
            <img src="${img}" alt="${name}">
            <h1>${name}</h1>
        </section>
    `;
};

//4.- Declara una función **getRandomDogImage** que retorne la url de la imagen de un perro aleatorio
async function getRandomDogImage() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();

    return data.message;
};

//5.- Declara una función **getRandomPokemonImage** que retorne la url de la imagen de un pokemon aleatorio.
async function getRandomPokemonImage() {
    const randomId = Math.floor(Math.random() * 1025) + 1;

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const pokemon = await response.json();

    return pokemon.sprites.front_default;
};

//6.- Declara una función **printPugVsPikachu** que pinte la batalla entre "Pug" y "Pikachu" (no se testea)
async function printPugVsPikachu() {
    const pugImg = await getRandomDogImage();

    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    const pikachu = await response.json();

    return `
        <section>
            <article>
                <img src="${pugImg}" alt="Pug">
                <h1>Pug</h1>
            </article>

            <h2>VS</h2>

            <article>
                <img src="${pikachu.sprites.front_default}" alt="Pikachu">
                <h1>Pikachu</h1>
            </article>
        </section>
    `;
};