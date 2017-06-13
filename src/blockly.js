/* Blockly Configurations */
var toolbox_string =
  ['<xml id="toolbox" style="display:none">',
    '<category name="Basic">',
      '<block type="controls_if"></block>',
      '<block type="logic_compare"></block>',
      '<block type="controls_repeat_ext"></block>',
      '<block type="math_number"></block>',
      '<block type="math_arithmetic"></block>',
      '<block type="text"></block>',
      '<block type="text_print"></block>',
    '</category>',
    '<category name="Playground">',
      '<block type="color"></block>',
      '<block type="playground_text"></block>',
      '<block type="text_align"></block>',
      '<block type="sleep"></block>',
      '<block type="color_is"></block>',
      '<block type="font"></block>',
      '<block type="text_size"></block>',
    '</category>',
  '</xml>'].join('\n');

var tb = '<xml id="toolbox" style="display:none"><category name="Basic"><block type="controls_if"></block><block type="logic_compare"></block><block type="controls_repeat_ext"></block><block type="math_number"></block><block type="math_arithmetic"></block><block type="text"></block><block type="text_print"></block></category><category name="Playground"><block type="color"></block><block type="playground_text"></block><block type="text_align"></block><block type="sleep"></block><block type="color_is"></block><block type="font"></block><block type="text_size"></block></category></xml>';
console.log(tb);

var workspace = Blockly.inject('blocklyDiv',
{
  toolbox: toolbox_string,
  grid: {
    spacing:20,
    length:3,
    colour: '#ccc',
    snap: true
  },
  trashcan: true,
  scroll: true
});

/**
 * Realtime code generation
 *
 * (Every drag/drop or change in visual code will be
 * reflected in actual code view)
 */
workspace.addChangeListener(function(event){
  setCode(getBlocklyScript());
});

// Converts blocks into JavaScript
var jsConverter = new Blockly.Generator("Javascript");

/* Returns a string of the entire blockly script. */
function getBlocklyScript() { return Blockly.JavaScript.workspaceToCode(workspace); }
function getCode() { return $("#code").val(); }
function setCode(code) { $("#code").val(code); }

$("#run").click(function(){
  eval(getCode());
});