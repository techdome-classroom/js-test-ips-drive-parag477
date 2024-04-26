function longestSubstring(s) {
    let length = 0;
    let start = 0;
    const charIndexMap = {};

    for (let i = 0; i < s.length; i++) {
        const curr = s[i];
        if (charIndexMap[curr] >= start) {
            start = charIndexMap[curr] + 1;
        }
        charIndexMap[curr] = i;
        length = Math.max(length, i - start + 1);
    }

    return length;
}

module.exports = { longestSubstring };
