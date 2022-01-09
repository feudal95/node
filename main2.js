const getDateInESP = (arrayDeFecha) => {

    const año  = arrayDeFecha[0];
    let mes = arrayDeFecha[1];
    const dia = arrayDeFecha[2];

    console.log(mes);

    switch(mes){

        case '1':
            mes = 'Enero';
        break;
        
        case '2':
            mes = 'Febrero';
        break;

        case '3':
            mes = 'Marzo';
        break;

        default:

        mes = 'algun mes'

    }

    console.log(`La fecha introducida es ${dia} de ${mes}  de ${año}`);

}




const fecha = '1999-2-04';

const array = fecha.split('-');

getDateInESP(array);
