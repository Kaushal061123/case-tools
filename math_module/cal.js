//Ex 8: Creating a local module that calculates various calculations
//and using this module locally in project.
exports.add = function (x,y)
{
    return x + y; 
};
exports.sub = function(x,y)
{
    return x - y;
}
exports.mult = function(x,y)
{
    return x * y;
}
exports.div = function(x,y)
{
    return x/y;
};