/*
  All generators for custom blocks go here.
*/

// COLOR GENERATOR ==========================================
Blockly.Blocks['color'] = {
  init: function(){
    this.jsonInit(custom_blocks.color);
  }
};

Blockly.JavaScript['color'] = function(block) {
  var colour_name = block.getFieldValue('PG_COLOR');
  var code = "$('#playground').css('background','"+colour_name+"');\n";
  return code;
};

// TEXT GENERATOR ==========================================
Blockly.Blocks['playground_text'] = {
  init: function(){
    this.jsonInit(custom_blocks.text);
  }
};

Blockly.JavaScript['playground_text'] = function(block) {
  var text_input_text = block.getFieldValue('input_text');
  
  var code = '$("#txt").html("<p>'+text_input_text+'</p>");\n';
  return code;
};

// TEXT-ALIGN GENERATOR ==========================================
Blockly.Blocks['text_align'] = {
  init: function(){
    this.jsonInit(custom_blocks.text_align);
  }
};

Blockly.JavaScript['text_align'] = function(block) {
  var dropdown_name = block.getFieldValue('TEXT_ALIGN');
  var code = '$("#txt").css("text-align","'+dropdown_name+'");\n';
  return code;
};

// SLEEP GENERATOR ==========================================
Blockly.Blocks['sleep'] = {
  init: function(){
    this.jsonInit(custom_blocks.sleep);
  }
};

Blockly.JavaScript['sleep'] = function(block) {
  var number_seconds = block.getFieldValue('seconds');
  var statements_sleep_time = Blockly.JavaScript.statementToCode(block, 'sleep_time');
  var code = 'setTimeout(function(){'+statements_sleep_time+'},'+(number_seconds*1000)+');\n';
  return code;
};

// BKG COLOR ==========================================
Blockly.Blocks['color_is'] = {
  init: function(){
    this.jsonInit(custom_blocks.color_is);
  }
};

Blockly.JavaScript['color_is'] = function(block) {
  var colour_color = block.getFieldValue('COLOR');
  var input_color = "'rgb(" + 
    parseInt(colour_color.substring(1,3),16)+", "+
    parseInt(colour_color.substring(3,5),16)+", "+ 
    parseInt(colour_color.substring(5),16)+")'";
  var code = "$('#playground').css('background-color') === " + input_color;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// FONT ==========================================
Blockly.Blocks['font'] = {
  init: function(){
    this.jsonInit(custom_blocks.font);
  }
};

Blockly.JavaScript['font'] = function(block) {
  var dropdown_font_choices = block.getFieldValue('font_choices');
  // TODO: Assemble JavaScript into code variable.
  var code = '$("#playground").css("font-family","'+dropdown_font_choices+'");\n';
  return code;
};

// TEXT SIZE ==========================================
Blockly.Blocks['text_size'] = {
  init: function(){
    this.jsonInit(custom_blocks.text_size);
  }
};

Blockly.JavaScript['text_size'] = function(block) {
  var number_size = block.getFieldValue('size');
  // TODO: Assemble JavaScript into code variable.
  var code = '$("#playground").css("font-size","'+number_size+'");\n';
  return code;
};