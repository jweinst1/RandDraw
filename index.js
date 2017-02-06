/**
 * Created by Josh on 2/5/17.
 */
//generates random number
var rand_num = function (min, max) {
    return Math.floor((Math.random() * max) + min);
};
//gets a random color
var rand_color = function () {
    return "rgb(" + rand_num(0, 255) + "," + rand_num(0, 255) + "," + rand_num(0, 255) + ")";
};
//gives some random, of a rand color between a height and width
var rand_path = function (h, w) {
    var path_str = 'M0 0';
    for (var i = 0; i < 10; i++) {
        path_str += " H " + rand_num(0, h);
        path_str += " V " + rand_num(0, w);
    }
    return "<path d=\"" + path_str + "\" fill=\"transparent\" stroke=\"" + rand_color() + "\"/>";
};
//makes an entire drawing of some number of paths
var rand_draw = function (h, w, maxlines) {
    var svg_str = '';
    for (var i = 0; i < maxlines; i++) {
        svg_str += rand_path(h, w);
    }
    return svg_str;
};
//# sourceMappingURL=index.js.map