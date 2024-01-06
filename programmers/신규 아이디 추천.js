function solution(new_id) {
    new_id = new_id.toLowerCase(); //1
    let arr = "abcdefghijklmnopqrstuvwxyz1234567890-_."
    for (var i = 0; i < new_id.length; i++) {
        for (var j = 0; j < 39; j++) {
            if (new_id[i] == arr[j]) {
                break;
            }
            if (j == 38) {
                new_id = new_id.replace(new_id[i], 'A');
            }
        }
    }
    new_id = new_id.replace(/A/g, ''); //2
    new_id = new_id.replace(/\.{2,}/g, '.'); //3
    if (new_id[0] == '.') {
        new_id = new_id.slice(1);
    }
    if (new_id[new_id.length - 1] == '.') {
        new_id = new_id.slice(0, -1);
    }//4
    if (new_id == "") {
        new_id = "a";
    } //5
    if (new_id.length >= 16) {
        new_id = new_id.slice(0, 15);
        if (new_id[new_id.length-1] == '.') {
            new_id = new_id.slice(0, -1);
        }
    }//6
    while (new_id.length <= 2) {
        new_id = new_id + new_id[new_id.length-1]
    }//7
    return new_id;
}
