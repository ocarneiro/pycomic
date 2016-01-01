// Get a value from the querystring for the given key.
function get_qs_value(key) {
    var query_string = window.location.search.substring(1);
    var kv_pairs = query_string.split('&');
    for (var i = 0; i < kv_pairs.length; i++) {
        var kv_pair = kv_pairs[i].split('=');
        if (kv_pair[0] == key) {
            return kv_pair[1];
        }
    }
}

// Given a settings object of key/value pairs, will update the query string
// element of the URL accordingly.
function set_qs(settings) {
    var qs_array = [];
    var keys = Object.keys(settings);
    for(i=0; i<keys.length; i++) {
        var key = keys[i];
        var value = settings[key];
        qs_array.push(key + '=' + encodeURIComponent(value));
    }
    var old_url = window.location.href.split('?');
    var new_url = old_url[0] + '?' + qs_array.join('&');
    $('#direct-link').attr('href', new_url);
}