Blockly.Blocks["touch_block"] = {
    init: function() {
      this.appendDummyInput().appendField("TOUCH");
      this.appendDummyInput()
        .appendField("ANALOG PIN")
        .appendField(new Blockly.FieldTextInput("A0"), "TOUCH_ANALOG_PIN")
        .appendField("SET TO")
        .appendField(
          new Blockly.FieldVariable("TOUCH_ANALOG_VALUE"),
          "TOUCH_ANALOG_VALUE"
        );
      this.appendDummyInput()
        .appendField("DIGITAL PIN")
        .appendField(new Blockly.FieldTextInput("0"), "TOUCH_DIGITAL_PIN")
        .appendField("SET TO")
        .appendField(
          new Blockly.FieldVariable("TOUCH_DIGITAL_VALUE"),
          "TOUCH_DIGITAL_VALUE"
        );
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };