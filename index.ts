/**
 * Created by Josh on 2/5/17.
 */

//generates random number
let rand_num = (min, max) => {
    return Math.floor((Math.random() * max) + min);
};

//gets a random color
let rand_color = () => {
    return `rgb(${rand_num(0, 255)},${rand_num(0, 255)},${rand_num(0, 255)})`;
};

//gives some random, of a rand color between a height and width
let rand_path = (h, w) => {
    let path_str = 'M0 0';
    for(let i=0;i<10;i++){
        path_str += ` H ${rand_num(0, h)}`;
        path_str += ` V ${rand_num(0, w)}`;
    }
    return `<path d="${path_str}" fill="transparent" stroke="${rand_color()}"/>`
};

//makes an entire drawing of some number of paths
let rand_draw = (h, w, maxlines) => {
    let svg_str = '';
    for(let i=0;i<maxlines;i++){
        svg_str += rand_path(h, w);
    }
    return svg_str;
};