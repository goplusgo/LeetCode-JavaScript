var topKFrequent = function(nums, k) {
    let map = new Map();
    for (let num of nums) {
        map[num] ? map[num]++ : map[num] = 1;
    }

    return Object.keys(map).sort((k1, k2) => map[k2] - map[k1]).splice(0, k);
};
