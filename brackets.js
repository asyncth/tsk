function isStrValid(s) {
    if (s.length % 2 !== 0) return false;

    const pairs = { ')': '(', ']': '[', '}': '{' };
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const ch = s[i];

        if (ch === '(' || ch === '[' || ch === '{') {
            stack.push(ch);
        } else {
            if (stack.pop() !== pairs[ch]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
