function keyss(a, callback) {
    var keys = Object.keys(a), i, key;
    for(i=0; i<keys.length;i++){
        key = keys[i]
        callback(key);
    }
}

ctx.prototype.__applyStyleState = function (styleState) { 
    keyss(styleState, (key) => this[key] = styleState[key]); 
}; 
ctx.prototype.__setDefaultStyles = function () { 
    keyss(styleState, (key) => this[key] = STYLES[key].canvas);
}; 
ctx.prototype.__getStyleState = function () { 
    var styleState = {};
    keyss(STYLES, (key) => styleState[key] = this[key]);
    return styleState; 
};