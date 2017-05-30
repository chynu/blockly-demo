/*
  Custom blocks created for Blockly Demo.
  All stored into custom_blocks variable, accessed in /generators.js
*/
var custom_blocks = {
  // COLOR
  color: {
    "type": "color",
    "message0": "Playground Color %1",
    "args0": [
      {
        "type": "field_colour",
        "name": "PG_COLOR",
        "colour": "#ff0000"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": "",
    "helpUrl": ""
  },
  // TEXT
  text: {
    "type": "text",
    "message0": "input text: %1",
    "args0": [
      {
        "type": "field_input",
        "name": "input_text",
        "text": "playground text here"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": "",
    "helpUrl": ""
  },

  // TEXT ALIGN
  text_align: {
    "type": "text_align",
    "message0": "text-align %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "TEXT_ALIGN",
        "options": [
          [
            "center",
            "center"
          ],
          [
            "left",
            "left"
          ],
          [
            "right",
            "right"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": "",
    "helpUrl": ""
  },

  // SLEEP FCN
  sleep: {
    "type": "sleep",
    "message0": "Sleep %1 seconds before doing %2",
    "args0": [
      {
        "type": "field_number",
        "name": "seconds",
        "value": 0,
        "min": 0,
        "max": 60
      },
      {
        "type": "input_statement",
        "name": "sleep_time"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": "",
    "helpUrl": ""
  },

  // BKG COLOR CHECK
  color_is: {
    "type": "color_is",
    "message0": "Background color is %1",
    "args0": [
      {
        "type": "field_colour",
        "name": "COLOR",
        "colour": "#ff0000"
      }
    ],
    "output": null,
    "colour": 330,
    "tooltip": "",
    "helpUrl": ""
  }
}