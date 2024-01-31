const generator = require("@babel/generator");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse");
const types = require("@babel/types");
const fs = require("fs");


function compile (code) {
  // 1.parse
  const ast = parser.parse(code);

  // 2,traverse
  const visitor = {
    CallExpression (path) {
      console.log('zl-path.node', path.node);
      const { callee } = path.node;
      const isConsoleLog =
        types.isMemberExpression(callee) &&
        callee.object.name === "console" &&
        callee.property.name === "log";
      if (isConsoleLog) {
        const funcPath = path.findParent(p => {
          return p.isFunctionDeclaration();
        });
        const funcName = funcPath.node.id.name;
        fs.writeFileSync("./funcPath.json", JSON.stringify(funcPath.node, undefined, 2), err => {
          if (err) throw err;
          console.log("写入成功");
        });
        path.node.arguments.unshift(types.stringLiteral(funcName));
      }
    }
  };
  traverse.default(ast, visitor);

  // 3. generator 生成新代码
  return generator.default(ast, {}, code);
}

const code = `
function getData() {
  console.log('data')
}
`;
console.log(compile(code));

