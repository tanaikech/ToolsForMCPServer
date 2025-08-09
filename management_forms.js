/**
 * Management of Google Forms
 * Updated on 20250809 15:59
 */

/**
 * This function create a surver with Google Forms.
 * https://github.com/tanaikech/A_Novel_Approach_to_Learning
 * @private
 */
function generate_survey_with_google_forms(object = {}) {
  let { title, itemList = [] } = object;
  let result;
  try {
    if (title && itemList.length > 0) {
      const form = FormApp.create(title);
      itemList.forEach(({ itemTitle = "", helpText = "", required = false, itemMethod, params = [] }) => {
        const item = form[itemMethod]().setTitle(itemTitle).setHelpText(helpText).setRequired(required);
        params.forEach(({ method, choiceValues }) => item[method](choiceValues));
      });
      result = { content: [{ type: "text", text: `The survey was successfully generated as a Google Form. The edit URL and published URL of the form are "${form.getEditUrl()}" and "${form.getPublishedUrl()}", respectively.` }], isError: false };
    } else {
      result = { content: [{ type: "text", text: "No title and/or no items" }], isError: false };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

/**
 * This function create quiz with Google Forms.
 * @private
 */
function generate_quiz_with_google_forms(object = {}) {
  let { title, itemList = [] } = object;
  let result;
  try {
    if (title && itemList.length > 0) {
      const form = FormApp.create(title).setIsQuiz(true);
      itemList.forEach(({ itemTitle = "", helpText = "", required = false, itemMethod, params = [] }) => {
        const item = form[itemMethod]().setTitle(itemTitle).setHelpText(helpText).setRequired(required);
        params.forEach(({ method, choiceValues, correctIndex }) => {
          if (method == "setChoiceValues") {
            const cv = choiceValues.map((v, i) => item.createChoice(v, i == correctIndex ? true : false));
            item.setChoices(cv);
          }
        });
      });
      result = { content: [{ type: "text", text: `The quiz was successfully generated as a Google Form. The edit URL and published URL of the form are "${form.getEditUrl()}" and "${form.getPublishedUrl()}", respectively.` }], isError: false };
    } else {
      result = { content: [{ type: "text", text: "No title and/or no items" }], isError: false };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

// Descriptions of the functions.
const descriptions_management_forms = {
  generate_survey_with_google_forms: {
    description: "Use this to generate a survey with Google Forms. If the number of total questions is not provided, please create 5 questions as the default number of questions.",
    parameters: {
      "type": "object",
      "properties": {
        "title": {
          "type": "string",
          "description": "The title of the survey. If this is not provided, set the title by understanding the questions."
        },
        "itemList": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "itemTitle": {
                "type": "string",
                "description": "Title of the question."
              },
              "helpText": {
                "type": "string",
                "description": "Description of the question."
              },
              "required": {
                "type": "boolean",
                "description": "When the user has to answer, set to true. Please set false as the default value.",
                "default": false
              },
              "itemMethod": {
                "type": "string",
                "description": "Select one of the following methods from the Google Apps Script Form service.\nReference: https://developers.google.com/apps-script/reference/forms/form\n<Methods>addCheckboxItem, addDateItem, addDateTimeItem, addTimeItem, addListItem, addMultipleChoiceItem, addParagraphTextItem, addTextItem</Methods>",
                "enum": [
                  "addCheckboxItem",
                  "addDateItem",
                  "addDateTimeItem",
                  "addTimeItem",
                  "addListItem",
                  "addMultipleChoiceItem",
                  "addParagraphTextItem",
                  "addTextItem"
                ]
              }
            },
            "required": [
              "itemTitle",
              "helpText",
              "required",
              "itemMethod"
            ],
            "if": {
              "properties": {
                "itemMethod": {
                  "enum": [
                    "addCheckboxItem",
                    "addListItem",
                    "addMultipleChoiceItem"
                  ]
                }
              }
            },
            "then": {
              "properties": {
                "choices": {
                  "type": "array",
                  "description": "The list of choice values. This is required only when 'itemMethod' is 'addCheckboxItem', 'addListItem', or 'addMultipleChoiceItem'.",
                  "items": {
                    "type": "string"
                  }
                }
              },
              "required": [
                "choices"
              ]
            }
          }
        }
      },
      "required": [
        "title",
        "itemList"
      ]
    }
  },

  generate_quiz_with_google_forms: {
    description: "Use this to generate a quiz with Google Forms. If the number of total questions is not provided, please create 5 questions as the default number of questions.",
    parameters: {
      "type": "object",
      "properties": {
        "title": {
          "type": "string",
          "description": "The title of the quiz. If this is not provided, a title will be generated based on the questions."
        },
        "questions": {
          "type": "array",
          "description": "A list of questions for the quiz.",
          "items": {
            "type": "object",
            "properties": {
              "title": {
                "type": "string",
                "description": "Title of the question."
              },
              "description": {
                "type": "string",
                "description": "A more detailed description or help text for the question."
              },
              "isRequired": {
                "type": "boolean",
                "description": "Specifies if the question must be answered. Defaults to false.",
                "default": false
              },
              "questionType": {
                "type": "string",
                "description": "The type of question, which corresponds to a method in the Google Apps Script Form service. Reference: https://developers.google.com/apps-script/reference/forms/form",
                "enum": [
                  "addCheckboxItem",
                  "addDateItem",
                  "addDateTimeItem",
                  "addTimeItem",
                  "addListItem",
                  "addMultipleChoiceItem",
                  "addParagraphTextItem",
                  "addTextItem"
                ]
              },
              "choices": {
                "type": "array",
                "description": "A list of choice values. This is only applicable for 'addCheckboxItem', 'addListItem', and 'addMultipleChoiceItem' question types.",
                "items": {
                  "type": "string"
                }
              },
              "correctAnswerIndex": {
                "type": "integer",
                "description": "The 0-based index of the correct answer within the 'choices' array. This is only applicable for question types that have choices."
              }
            },
            "required": [
              "title",
              "questionType"
            ]
          }
        }
      },
      "required": [
        "title",
        "questions"
      ]
    }
  },

};
