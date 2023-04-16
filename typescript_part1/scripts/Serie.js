/* Clase utilizada para definir atributos para manejar
 * datos de una serie de television. */
var Serie = /** @class */ (function () {
    function Serie(id, name, platform, seasonsNumber, review, url, image) {
        this.id = id;
        this.name = name;
        this.platform = platform;
        this.seasonsNumber = seasonsNumber;
        this.review = review;
        this.url = url;
        this.image = image;
    }
    return Serie;
}());
export { Serie };
