function temp(arr, arrResult, depthLevel) {
  for (var i = 0, iLen = arr.length; i < iLen; i++) {
    arrResult.push({
      text: arr[i].t,
      childNodes2: [],
      depthLevel: depthLevel,
    });
    if (arr[i].childs) {
      temp(
        arr[i].childs,
        arrResult[arrResult.length - 1].childNodes2,
        depthLevel + 1
      );
    }
  }
}

var arrSurveyElements = [];

temp(
  [
    {
      t: 1,
      childs: [],
    },
    {
      t: 2,
    },
    {
      t: 3,
      childs: [
        {
          t: 32,
          childs: [
            {
              t: 321,
              childs: [],
            },
            {
              t: 322,
              childs: [],
            },
          ],
        },
      ],
    },
    {
      t: 4,
    },
  ],
  arrSurveyElements,
  10
);

console.log(arrSurveyElements);
