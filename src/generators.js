Blockly.JavaScript['color'] = function(block) {
  var colour_name = block.getFieldValue('PG_COLOR');
  // TODO: Assemble JavaScript into code variable.
  console.log("colour_name: " + colour_name);
  var code = "$('#playground').css('background',"+colour_name+")";
  return code;
};