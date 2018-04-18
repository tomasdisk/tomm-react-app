module.exports = {
    "extends": "standard", // se usa por defecto el standard (https://standardjs.com/)
    "parser": "babel-eslint",
    "plugins":[
      "react"
    ],
    "rules": {
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "brace-style": ["error", "stroustrup"],
      "padded-blocks": ["error", { "blocks": "never" }],
      "eqeqeq": 0,
      "no-class-assign": 2,
      "no-tabs": 0,
      "no-debugger": 0
    }
};
