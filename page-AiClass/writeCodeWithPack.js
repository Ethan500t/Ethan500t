

instance1 = new TypeIt("#human-code", {
  speed: 75,//100,
  waitUntilVisible: true,
  cursorChar: "<strong>|</strong>"
})
  .type("<span class='code-keyword-var'>var</span>") // "var"
  .type("&nbsp;<span class='code-keyword-obj'>persin</span> = {") // "persin = {"
  .delete(7).type("<span class='code-keyword-obj'>son</span>&nbsp;= {").break() //first line: "var person = {"
  .type("<span class='code-keyword-atribute'>name</span>:")
  .type("&nbsp;<span class='code-keyword-string'>'Ethan Tracy'</span>&nbsp;,").break() // second line: "name: 'Ethan Tracy',"
  .type("<span class='code-keyword-atribute'>type</span>:")
  .type("&nbsp;<span class='code-keyword-string'>'Compiter Engeneer'</span>&nbsp;,")
  .delete(16)
  .type("<span class='code-keyword-string'>uter Engineer'</span>")
  .type("&nbsp;,").break()
  .type("<span class='code-keyword-atribute'>location</span>:")
  .type("&nbsp;<span class='code-keyword-string'>'Earth'</span> ,").break()
  .type("<span class='code-keyword-atribute'>properties</span>:")
  .type("&nbsp;<span class='code-keyword-string'>'Tired'</span>").break()
  .type("}")
  .go();

 
document
  .querySelector('#human-code-button')
  .addEventListener('click', (e) => {
  instance1.reset();
  instance1.go();
});

instance2 = new TypeIt("#ai-code", {
  speed: 0,
  waitUntilVisible: true,
})
  .type("<span class='code-keyword-var'>var</span>") // "var"
  .type("&nbsp;<span class='code-keyword-obj'>person</span> = {") // "persin = {"
  .break() //first line: "var person = {"
  .type("<span class='code-keyword-atribute'>name</span>:")
  .type("&nbsp;<span class='code-keyword-string'>'Ethan Tracy'</span>&nbsp;,").break() // second line: "name: 'Ethan Tracy',"
  .type("<span class='code-keyword-atribute'>type</span>:")
  .type("&nbsp;<span class='code-keyword-string'>'Computer Engineer'</span>&nbsp;,")
  .break()
  .type("<span class='code-keyword-atribute'>location</span>:")
  .type("&nbsp;<span class='code-keyword-string'>'Earth'</span> ,").break()
  .type("<span class='code-keyword-atribute'>properties</span>:")
  .type("&nbsp;<span class='code-keyword-string'>'Tired'</span>").break()
  .type("}")
  .go();

 
document
  .querySelector('#ai-code-button')
  .addEventListener('click', (e) => {
  instance2.reset();
  instance2.go();
});