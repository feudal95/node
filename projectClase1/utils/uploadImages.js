const fs = require('fs');
const path = require('path');

exports.fileUpload = async function (file, namePath) {

    try {

        console.log('ESTO ES FILE DE LOS PARAMS \n', file)

        let matches = file.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        let response = {};
       // console.log("ESTO ES LA VARIABLE MATCHES:\n ", matches)
        //console.log("ESTO ES LA VARIABLE MATCHES[0]:\n ", matches[0])
        //console.log("ESTO ES LA VARIABLE MATCHES[1]:\n ", matches[1])
        //console.log("ESTO ES LA VARIABLE MATCHES[2]:\n ", matches[2])
        //console.log("ESTO ES LA VARIABLE MATCHES[3]:\n ", matches[3])
        //console.log("ESTO ES LA VARIABLE MATCHES[4]:\n ", matches[4])
        //console.log("ESTO ES LA VARIABLE MATCHES[5]:\n ", matches[5])

        console.log("soy el length de matchesssssssssssssss", matches.length)
        if (matches.length !== 3){
            return new Error("String invalido");
        } 

        response.type = matches[1];
        response.data = Buffer.from(matches[2], "base64");
        let imageBuffer = response.data;

        console.log('Esto ES LA IMAGEN A GUARDAR \n;=', imageBuffer)
        console.log("soy la rutaaaaaaaaaaaaaaa",`${path.dirname(require.main.filename)}`);
        if (!fs.existsSync(`${path.dirname(require.main.filename)}/public${namePath}`)) {

            fs.mkdirSync(

                `${path.dirname(require.main.filename)}/public${namePath}`, true
            );
        }
        let extension = response.type.split('/');
        let fileName = `${Date.now()}.${extension[1]}`;
        let fileRoute = `${namePath}/${fileName}`;

        fs.writeFileSync(
            `${path.dirname(require.main.filename)}/public${fileRoute}`
            , imageBuffer, "utf-8"
        );

        return fileRoute;

    } catch (error) {

        new error('Error de servidor');

    }
}