Blockly.Blocks['color'] = {
  init: function(){
    this.jsonInit(custom_blocks.color);
  }
};

Blockly.JavaScript['color'] = function(block) {
  var colour_name = block.getFieldValue('PG_COLOR');
  
  console.log("colour_name: " + colour_name);
  $("#playground").css("background",colour_name);
  var code = "$('#playground').css('background',"+colour_name+");";
  return code;
};

Blockly.Blocks['playground_text'] = {
  init: function(){
    this.jsonInit(custom_blocks.text);
  }
};

Blockly.JavaScript['playground_text'] = function(block) {
  var text_input_text = block.getFieldValue('input_text');
  
  $("#playground").html(text_input_text);
  var code = '$("#playground").html("'+text_input_text+'");';
  return code;
};

Blockly.Blocks['text_align'] = {
  init: function(){
    this.jsonInit(custom_blocks.text_align);
  }
};

Blockly.JavaScript['text_align'] = function(block) {
  var dropdown_name = block.getFieldValue('TEXT_ALIGN');
  // TODO: Assemble JavaScript into code variable.
  $("#playground").css("text-align",dropdown_name);
  var code = '$("#playground").css("text-align","'+dropdown_name+'");';
  return code;
};