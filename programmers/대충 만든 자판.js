function solution(keymap, targets) {
    let result = [];
    for (let i = 0; i < targets.length; i++) {
        let count_total = 0;
        for(let j = 0; j < targets[i].length; j++) {
            let count = -2;
            let target = targets[i][j];
            for(let k = 0; k < keymap.length; k++) {
                if (count == -2 && keymap[k].indexOf(target) != -1)
                    count = keymap[k].indexOf(target)+1;
                else if (count == -2 && keymap[k].indexOf(target) == -1)
                    count = -1;
                else if (keymap[k].indexOf(target) < count && keymap[k].indexOf(target) != -1)
                    count = keymap[k].indexOf(target)+1;
                else if (count == -1 && keymap[k].indexOf(target) != -1)
                    count = keymap[k].indexOf(target)+1;
                else
                    continue;
            }
            if (count == -1) {
                count_total = -1;
                break;
            }
            count_total = count_total + count;
        }
        result.push(count_total);
    }
    return result;
}
