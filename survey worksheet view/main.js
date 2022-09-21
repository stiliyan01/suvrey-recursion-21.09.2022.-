if (typeof SM == "undefined") {
  SM = {};
}

SM.WorksheetView = {
  mainArray: [],
  arrayAnswers: [],
  output: "",
  table: document.querySelector(".table"),
  example() {
    var surveyChildNodes = OSM.Survey.get("childNodes").getAllItems(); // get all elements on 1st level in the survey
    var objInstance, objAnswers;

    for (var i = 0, iLen = surveyChildNodes.length; i < iLen; i++) {
      objInstance = surveyChildNodes[i].value;
      // console.log(surveyChildNodes[i]);
      // console.log(objAnswers);
      // console.log(objInstance);
      switch (objInstance.get("instanceType")) {
        case "RM.OSM.Survey.Section":
          objInstance.get("title").getText(); // get section title / vzemam title na section 1 & grid
          objInstance.get("instructions").getText(); // get section instructions
          objInstance.get("childNodes"); // return all elements in section

          this.getDataSurvey(objInstance);
          break;

        case "RM.OSM.Survey.Loop":
          objInstance.get("text").getText(); // get loop title
          objInstance.get("instructions").getText(); // get loop instructions
          iterations = objInstance.getIterator().getAllItems(); // return all loop iterations
          objInstance.get("protoIteration").get("childNodes").getAllItems(); // return all elements which each iteration should contains;
          // console.log(objInstance.get("text").getText());
          // console.log(objInstance.get("instructions").getText());
          // console.log((iterations = objInstance.getIterator().getAllItems()));
          // console.log(
          //   objInstance.get("protoIteration").get("childNodes").getAllItems()
          // );

          break;

        case "RM.OSM.Survey.Question":
          objInstance.get("text").getText(); // get question text
          objInstance.get("instructions").getText(); // get question instructions
          // console.log(objInstance.get("text").getText());
          // console.log(objInstance.get("instructions").getText());

          if (objInstance.get("answerSet") instanceof RM.OSM.Survey.AnswerSet) {
            // question has answer set
            objInstance.get("answerSet").get("isMultipleSelection"); // return true or false. true when multiple selected answers is allowed

            arrAnswers = objInstance
              .get("answerSet")
              .get("answers")
              .getAllItems();
            // console.log(arrAnswers); // return array with all answers for that question
            // console.log(
            //   objInstance.get("answerSet").get("isMultipleSelection")
            // ); // return true or false. true when multiple selected answers is allowed
            // console.log(
            //   (arrAnswers = objInstance
            //     .get("answerSet")
            //     .get("answers")
            //     .getAllItems())
            // );
            for (var j = 0, jLen = arrAnswers.length; j < jLen; j++) {
              objAnswers = arrAnswers[j].value;

              objAnswers.get("text").getText(); // get answer text
              objAnswers.get("measure"); // get answer points
              objAnswers.get("isOtherSpecify"); // answer has attached comment field to it
            }
          }

          if (objInstance.get("comment") instanceof RM.OSM.Survey.Comment) {
            // question has comment
          }
          console.log(objInstance.get("text").getText());

          this.getQuestionText(objInstance, objAnswers);

          break;
      }
    }
  },

  getQuestionText: function (question) {
    let answers = [];
    let arrayForAnswers = [];
    let text = question.get("text").getText();
    let depth = 0;
    let className = "question";

    if (question.get("answerSet") instanceof RM.OSM.Survey.AnswerSet) {
      arrayForAnswers = question.get("answerSet").get("answers").getAllItems();
      console.log(arrayForAnswers);
      for (let j = 0, jLen = arrayForAnswers.length; j < jLen; j++) {
        let result = arrayForAnswers[j].value;
        let answer = result.get("text").getText();
        let answerPoints = result.get("measure");
        answers.push({ answer, answerPoints });
      }
      this.mainArray.push({ className, text, answers, depth });
    } else {
      this.mainArray.push({ className, text, depth });
    }
    if (question.get("instructions").getText()) {
      let instructions = question.get("instructions").getText();
      console.log(instructions, 123);
      className = "instruction";
      this.mainArray.push({ className, instructions, depth });
    }
    className = "question";
  },

  getDataSurvey: function (el) {
    let className = "section";
    let text = el.get("title").getText(); // get section title / vzemam title na section 1 & grid

    let childNodes = el.get("childNodes").getAllItems();
    let temp = childNodes;

    // let temp=el.get("title").getText()
    this.mainArray.push({ className, text, temp });
  },

  onSurveyInitHandler() {
    SM.WorksheetView.example();
  },

  init(objProtoSurveyJSON) {
    OSM.Survey = new RM.OSM.Survey({
      ProtoSurveyJSON: objProtoSurveyJSON,
    });
    // console.log(OSM.Survey);
    OSM.Survey.addEventListener("onInit", SM.WorksheetView.onSurveyInitHandler);
    OSM.Survey.init();
  },
};
