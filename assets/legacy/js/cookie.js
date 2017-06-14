/**
 * Created by kot on 14.06.17.
 */

function get_cookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function set_cookie(name, value, options) {
    options = options || {}; //empty array if skipped

    var expires = options.expires;

    if(typeof expires == "number" && expires) {
        var d = new Date()
        d.setTime(d.getTime() + expires * 1000)
        expires = options.expires = d;
    }
    if(expires && expires.toUTCString()) {
        options.expires = expires.toUTCString()
    }

    value = encodeURIComponent(value);

    var updated_cookie = name + '=' + value;

    for (var property_name in options) {
        updated_cookie += ';' + property_name;
        var property_value = options[property_name];
        if (property_value !== true) {
            updated_cookie += '=' + property_value;
        }
    }

    document.cookie = updated_cookie;

}