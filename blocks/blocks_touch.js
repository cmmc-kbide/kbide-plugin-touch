Blockly.Blocks['touch_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TOUCH");
    this.appendValueInput("TOUCH_BLOCK_ANALOG_PIN")
        .setCheck("Number")
        .appendField("ANALOG PIN");
    this.appendValueInput("TOUCH_BLOCK_DIGITAL_PIN")
        .setCheck("Number")
        .appendField("DIGITAL PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};