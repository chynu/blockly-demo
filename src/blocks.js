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
    "colour": 330,
    "tooltip": "",
    "helpUrl": ""
  }
}