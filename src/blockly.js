/* Blockly Configurations */
var workspace = Blockly.inject('blocklyDiv',
{
  toolbox: document.getElementById('toolbox'),
  grid: {
    spacing:20,
    length:3,
    colour: '#ccc',
    snap: true
  },
  trashcan: true,
  scroll: true
});

/* Realtime code generation

  (Every drag/drop or change in visual code will be
  reflected in actual code view) */
workspace.addChangeListener(function(event){
  setCode(getBlocklyScript());
});

var jsConverter = new Blockly.Generator("Javascript");

/* Returns a string of the entire blockly script. */
function getBlocklyScript() { return Blockly.JavaScript.workspaceToCode(workspace); }
function setCode(code) { $("#code").val(code); }