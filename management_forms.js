/**
 * Management of Google Forms
 * Updated on 20250916 13:56
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
      type: "object",
      properties: {
        title: { type: "string", description: "The title of the survey. If this is not provided, set the title by understanding the questions." },
        itemList: {
          description: `Create "itemList" by understanding how to create "itemList" by calling a tool "explanation_generate_survey_with_google_forms".`,
          type: "array",
          items: { type: "object" }
        }
      },
      required: ["title", "itemList"]
    }
  },

  generate_quiz_with_google_forms: {
    description: "Use this to generate a quiz with Google Forms. If the number of total questions is not provided, please create 5 questions as the default number of questions.",
    parameters: {
      type: "object",
      properties: {
        title: { type: "string", description: "The title of the quiz. If this is not provided, set the title by understanding the questions." },
        itemList: {
          description: `Create "itemList" by understanding how to create "itemList" by calling a tool "explanation_generate_quiz_with_google_forms".`,
          type: "array",
          items: { type: "object" }
        }
      },
      required: ["title", "itemList"]
    }
  },

};
