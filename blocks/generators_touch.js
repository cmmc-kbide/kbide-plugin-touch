Blockly.JavaScript["touch_block"] = function(block) {
    var text_touch_analog_pin = block.getFieldValue("TOUCH_ANALOG_PIN");
    var variable_touch_analog_value = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("TOUCH_ANALOG_VALUE"),
      Blockly.Variables.NAME_TYPE
    );
    var text_touch_digital_pin = block.getFieldValue("TOUCH_DIGITAL_PIN");
    var variable_touch_digital_value = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("TOUCH_DIGITAL_VALUE"),
      Blockly.Variables.NAME_TYPE
    );
    // TODO: Assemble JavaScript into code variable.
    var code = `
    #VARIABLE
	// Declaration and initialization of the input pin
	int TOUCH_ANALOG_PIN = ${text_touch_analog_pin}; // X-axis-signal
	int TOUCH_DIGITAL_PIN = ${text_touch_digital_pin}; // Button
  	#END

	#SETUP
	  pinMode (TOUCH_ANALOG_PIN, INPUT);
	  pinMode (TOUCH_DIGITAL_PIN, INPUT);
	#END
	    
	  // Current value will be read and converted to the voltage
	  float ${variable_touch_analog_value} = analogRead (TOUCH_ANALOG_PIN) * (5.0 / 1023.0); 
	  int ${variable_touch_digital_value} = digitalRead (TOUCH_DIGITAL_PIN);
	  
	  delay (200);
	
    `;
    return code;
  };