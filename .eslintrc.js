module.exports = {
    "extends": "standard",
    "root": true,
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "env": {
        "browser": true,
        "node": true
    },
    "plugins": [ "html", "standard" ],
    "rules": {
        "indent": ["error", 4, { "SwitchCase": 1 }], // 四个空格缩进
        "quotes": ["error", "single"], // 尽可能使用单引号
        "semi": 2, // 禁止在语句末尾使用分号
        // "semi": ["error", "always"], // 要求在语句末尾使用分号
        // "no-console": ["error"], // 发布到产品之前应该剔除 console 的调用
        "no-empty": 2, // 禁止空块语句
        "no-eq-null": 2, // 必须使用=== 或 !==，确保与 null 比较时只等于 null，而不同时等于 undefined
        "no-new": 0,  // 允许使用new Person()这种方法
        "no-fallthrough": 0,
        "no-unreachable": 0 // 允许在 return、throw、continue 和 break 语句后出现不可达代码
    }
};
