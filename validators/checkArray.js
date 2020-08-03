export default function checkIfObjectIsArray(object) {
    if (typeof Array.isArray === 'undefined') {
        Array.isArray = function(obj) {
            return Object.prototype.toString.call(obj) === '[object Array]';
        }
    }

    return Array.isArray(object);

}