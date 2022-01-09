const array = ['arbol', 'cebolla', 'triste'];

const arrayFiltrado = array.filter(i =>{

    //console.log("palabra", i)

    const iword = i.split("");

   // console.log(iword);

    let haveR = false;

    iword.forEach( letter => {

        //console.log(letter);
        if(letter === "r"){

            return haveR = true;
        }

    });
    return haveR;
});

console.log(arrayFiltrado);