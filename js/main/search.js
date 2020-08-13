function search(source, name) {
    var results = [];
    var index;
    var entry;

    name = name.toUpperCase();
    for (index = 0; index < source.length; ++index) {
        entry = source[index];
        if (entry && entry.name && entry.name.toUpperCase().indexOf(name) !== -1) {
            results.push(entry);
        }
    }

    return results;
}

// https://www.w3schools.com/jsref/jsref_match.asp
// string.match(regexp)
