var skipsAndTriggers = new function() {
	var bool_isForPreview = false;
	var conditionScope = "";
	var str_originType = 'RM.Utils.eventOriginType.SkipsAndTriggers';
	var eventsMap = {
		"oninputchange" : "onInputChange",
		"oninit" : "onInit",
		"ifblanksurvey" : "ifblanksurvey",
		"onexit" : "onExit",
		"onentrance" : "onEntrance"
	};

	this.arrayRemoveDuplicateStrings = function(arr_temp) {
		var temp0 = {}, temp1;

		for (var counter0 = 0; counter0 < arr_temp.length; counter0++) {
			temp0[arr_temp[counter0]] = true;
		}

		arr_temp = [];

		for (temp1 in temp0) {
			arr_temp.push(temp1);
		}

		return arr_temp;
	}
	this.render = function(code, definition) {
		this.renderCode(code);
		this.renderST(definition);
	}

	this.renderCode = function(code) {
		document.getElementById('editor').appendChild(document.createTextNode(code));
		var editor = ace.edit("editor");
		editor.setOptions({
			enableBasicAutocompletion: true,
			enableSnippets: true,
			enableLiveAutocompletion: true
		});
		editor.setTheme("ace/theme/monokai");
		editor.getSession().setMode("ace/mode/javascript");
		//editor.setKeyboardHandler("ace/keyboard/vim"); //Problem from here!!!
	}

	this.renderST = function(definition) {

	}

	this.childNodesValidate = function(obj_def) {
		if(typeof obj_def.childNodes === "undefined"){
			return true;
		}
		if (typeof (obj_def.childNodes) !== 'object' || obj_def.childNodes === null) {
			return 'ChildNodes not object or null ' + Open.objectToString(obj_def);
		}

		if (!obj_def instanceof Array) {
			return 'ChildNodes not array ' + Open.objectToString(obj_def.childNodes);
		}

		return true;
	}

	this.definitionsValidate = function(obj_def) {
		if (!(obj_def.nodeName === 'definitions')) {
			return 'Definitions nodeName incorrect ' + Open.objectToString(obj_def);
		}

		return this.childNodesValidate(obj_def);
	}

	this.definitionValidate = function(obj_singleDef) {
		var temp0;
		if (typeof (obj_singleDef) !== 'object' || obj_singleDef === null) {
			return 'Definition not object ' + Open.objectToString(obj_singleDef);
		}

		if (!(obj_singleDef.nodeName === "definition")) {
			return 'Definition nodeName incorrect ' + Open.objectToString(obj_singleDef);
		}

		if ((temp0 = this.childNodesValidate(obj_singleDef)) !== true) {
			return temp0;
		}

		if (obj_singleDef.childNodes.length !== 2) {
			return 'Definition incorrect number of child nodes ' + Open.objectToString(obj_singleDef.childNodes);
		}

		return true;
	}

	this.conditionsValidate = function(obj_conditions) {
		if (typeof (obj_conditions) !== 'object' || obj_conditions === null) {
			return 'Conditions not object ' + Open.objectToString(obj_conditions);
		}

		if (!(obj_conditions.nodeName === 'conditions')) {
			return 'Conditions nodeName incorrect ' + Open.objectToString(obj_conditions);
		}

		var temp0;
		if ((temp0 = this.childNodesValidate(obj_conditions)) !== true) {
			return temp0;
		}

		return true;
	}

	this.groupValidate = function(obj_conditions) {
		if (typeof (obj_conditions) !== 'object' || obj_conditions === null) {
			return 'Group not object ' + Open.objectToString(obj_conditions);
		}

		if (!obj_conditions.hasOwnProperty('nodeName') || (obj_conditions.nodeName !== 'conditions' && obj_conditions.nodeName !== 'group')) {
			return 'Group nodeName not correct' + Open.objectToString(obj_conditions);
		}

		var temp0;
		if ((temp0 = this.childNodesValidate(obj_conditions)) !== true) {
			return temp0;
		}

		if (obj_conditions.hasOwnProperty('@type') && '|and|or||'.indexOf("|" + obj_conditions['@type'] + "|") === -1) {
			return 'Group not correct @type ' + Open.objectToString(obj_conditions);
		}

		return true;
	}

	this.groupModify = function(obj_conditions){
		//delete last operand if there is no other condition after it;
		var lastConditionIndex;
		var lastCondition;
		var conditions = obj_conditions.childNodes;

		if(typeof conditions === "undefined"){
			return;
		}
		
		for(var i = 0; i < conditions.length; i++){
			//get last condition;
			if(conditions[i] && conditions[i].childNodes){
				lastConditionIndex = conditions[i].childNodes.length - 1;
				lastCondition = conditions[i].childNodes[lastConditionIndex];

				if(lastCondition["@type"] === "and" || lastCondition["@type"] === "or"){
					conditions[i].childNodes.pop();
				}
			}
		}
	}

	this.conditionsListValidate = function(arr_conditions) {
		if(typeof arr_conditions === "undefined"){
			return true;
		}
		if (typeof (arr_conditions) !== 'object' || arr_conditions === null) {
			return 'ConditionsList not object ' + Open.objectToString(arr_conditions);
		}

		if (!arr_conditions instanceof Array) {
			return 'ConditionsList not array ' + Open.objectToString(arr_conditions);
		}

		return true;
	}

	this.arrayRemoveDuplicates = function(arr_data) {
		arr_data.sort();

		for (var counter0 = 1; counter0 < arr_data.length; counter0++) {
			if (arr_data[counter0 - 1] == arr_data[counter0]) {
				counter0--;
				arr_data.splice(counter0, 1);
			}
		}

		return arr_data;
	}

	this.conditionValidate = function(obj_condition) {
		if (typeof (obj_condition) !== 'object' || obj_condition === null) {
			return 'Condition not object ' + Open.objectToString(obj_conditions);
		}

		if (!obj_condition.hasOwnProperty('nodeName') || obj_condition.nodeName !== 'condition') {
			return 'Condition nodeName incorrect object ' + Open.objectToString(obj_condition);
		}

		if (!obj_condition.hasOwnProperty('@type')) {
			return 'Condition missing @type ' + Open.objectToString(obj_condition);
		}

		if (!obj_condition.hasOwnProperty('@objType')) {
			if (!obj_condition.hasOwnProperty('@name') || obj_condition['@name'] !== 'operand') {
				if (!(obj_condition['@type'] === 'iscompleted')) {
					return 'Condition missing @objType ' + Open.objectToString(obj_condition);
				}
			}
		}

		if ('|locationisin|locationisnotin|or|and|'.indexOf(obj_condition['@type']) === -1) {
			if (!obj_condition.hasOwnProperty('@objID')) {
				return 'Condition missing @objID ' + Open.objectToString(obj_condition);
			}
		}

		var temp0;

		if ((!obj_condition.hasOwnProperty('@name') || obj_condition['@name'] !== 'operand') && obj_condition['@type'] !== 'ifblanksurvey') {
			if ((temp0 = this.childNodesValidate(obj_condition)) !== true) {
				return temp0;
			}
		}

		return true;
	}

	this.conditionValueValidate = function(obj_def) {
		if (typeof (obj_def) !== 'object' || obj_def === null) {
			return 'ConditionValue not object ' + Open.objectToString(obj_def);
		}

		if (!obj_def.hasOwnProperty('nodeName') || obj_def.nodeName !== 'value') {
			return 'ConditionValue incorrect or missing nodeName ' + Open.objectToString(obj_def);
		}

		if (!obj_def.hasOwnProperty('@name') || obj_def['@name'] !== 'parameter') {
			return 'ConditionValue incorrect or missing @name ' + Open.objectToString(obj_def);
		}

		var temp0;
		if ((temp0 = this.childNodesValidate(obj_def)) !== true) {
			return temp0;
		}

		return true;
	}

	this.conditionValueGet = function(obj_def) {
		var temp0;
		if ((temp0 = this.conditionValueValidate(obj_def)) !== true) {
			return temp0;
		}
		return obj_def.childNodes;
	}

	this.getOSMElementCode = function(str_objID, answerID, str_loopName, str_loopIterationName, bool_returnAsCollection, str_scope) {
		bool_returnAsCollection = !!bool_returnAsCollection;
		str_scope = (typeof (str_scope) === 'undefined') ? 'this' : str_scope;
		var str_temp0;

		if (str_objID == '-1' || str_objID === '') {
			str_temp0 = { "code": str_scope + ".getTop()" };
		}
		else {
			// if (str_loopName && str_loopIterationName) {
			// 	str_temp0 = { "code": "OSM.Survey." + str_loopName + "['" + str_loopIterationName + "']." + str_objID };
			// }
			// else {
				if(str_scope === "iteration"){
					str_objID = str_objID.split(".")[str_objID.split(".").length - 1];
				}
				if (!bool_returnAsCollection || typeof (answerID) !== 'undefined') {
					str_temp0 = { "code": str_scope + ".getTop()." + str_objID };
				}
				else {
					str_temp0 = { "code": str_scope + ".getTop()." + str_objID };
				}
			// }
		}

		if (typeof (answerID) !== 'undefined') {
			str_temp0.code += ".get('answerSet')['" + answerID + "']"
		}

		return str_temp0;
	}

	this.conditionHandle = function(obj_condition) {
		var arr_str_code = [];
		var arr_str_objects = [];
		var temp0, temp1, temp2, temp3 = void (0);
		var loop_name = [];
		var loop_iterations = [];
		var loopObject;
		var scope = "this";
		var loopSelected = false;

		if ((temp0 = this.conditionValidate(obj_condition)) !== true) {
			return temp0;
		}

		if (obj_condition['@Suspended'] == '1') {
			return {
				"objectValidationCode": '',
				"code": 'false',
				"objectsInvolved": [],
				"loops": [],
				"loopIterations": []
			}
		}



		if (obj_condition.hasOwnProperty('@answerName')) {
			temp1 = obj_condition['@answerName'];

			if (temp1 === '') {
				temp1 = void (0);
			}
		}

		if (obj_condition.hasOwnProperty('@loopName')) {
			temp2 = obj_condition['@loopName'];
			if (temp2 === '') {
				temp2 = void (0);
			}
		}


		if (obj_condition.hasOwnProperty('@loopIterations')) {
			temp3 = obj_condition['@loopIterations'];
			
			if (temp3 === '') {
				temp3 = void (0);
			}
		}

		if (obj_condition['@type'] !== 'or' && obj_condition['@type'] !== 'and' && obj_condition["@type"] !== "validation" && obj_condition["@type"] !== "submission") {
			if(obj_condition['@objID'] && obj_condition['@objID'] !== -1 && obj_condition["@objType"] !== "property"){
				arr_str_objects.push(obj_condition['@objID']);
			}

			// if (typeof (temp0 = this.getOSMElementCode(obj_condition['@objID'], temp1, (typeof (temp3) !== 'undefined' && temp3.indexOf(',') === -1) ? temp2 : void (0), (typeof (temp3) !== 'undefined' && temp3.indexOf(',') === -1) ? temp3 : void (0), false)) !== 'object') {
			// 	return temp0;
			// }
			
			if(!!obj_condition["@loopSelected"]){
				conditionScope = obj_condition["@loopName"];
				scope = "iteration";
				loopSelected = true;
			}

			if(conditionScope !== ""){
				scope = "iteration";
			}

			if(obj_condition["@objType"] === "location"){
				scope = "";
			}

			if (typeof (temp0 = this.getOSMElementCode(obj_condition['@objID'], temp1, void (0), void (0), false, scope)) !== 'object') {
				return temp0;
			}

			if(conditionScope === obj_condition['@loopName']){
				temp0.code = temp0.code.replace('.getTop()', '');
			}else{
				temp0.code = temp0.code.replace('this.getTop()', 'OSM.Survey').replace('iteration.getTop()', 'OSM.Survey');
			}

			if (temp0.code) {
				arr_str_code.push(temp0.code);
				arr_str_code.push('.');
			}
		}

		if(typeof temp2 !== "undefined" && typeof temp3 === "undefined"){
			if(conditionScope === obj_condition["@loopName"]){
				arr_str_code[0] = 'iteration.' + obj_condition['@objID'].split(".")[obj_condition['@objID'].split(".").length - 1];
			}else{
				arr_str_code[0] = 'OSM.Survey.' + obj_condition['@objID'];
			}
		}

		var spliter = ",";
		if(typeof temp2 !== "undefined" && typeof temp3 !== "undefined"){
			var questionName = arr_str_objects[0];
			var loopPath = "";
			
			if(loopSelected){
				spliter = ";";
			}
			loop_name = temp2.split(spliter);
			loop_iterations = temp3.split(spliter);

			if(conditionScope === obj_condition["@loopName"]){
				var loopObject = scope;
			}else{
				var loopObject = 'OSM.Survey';
			}

			var loop_nameI;
			for(var i = 0; i < loop_name.length; i++){
				loop_nameI = loop_name[i];
				if(i > 0){
					loop_nameI = loop_nameI.split(".")[loop_nameI.split(".").length - 1];
				}

				loopPath += loop_nameI + "[" + loop_iterations[i] + "].";

				if(!!obj_condition["@loopSelected"]){
					if(i === 0){ // first element is the current loop
						continue;
					}
					loopObject += '.' + loop_nameI + '.getIteration(iterationName)';
				}else{
					loopObject += '.' + loop_nameI + '.getIteration("'+ loop_iterations[i] +'")';
				}
			}
			if(loopPath.length > 0){
				questionName = questionName.split(".")[questionName.split(".").length - 1];
			}
			arr_str_objects = [loopPath + questionName];
			
			loopObject += '.' + questionName;
			if(!loopSelected){
				arr_str_code[0] = loopObject;
			}
		}
		/*if (typeof (temp2) !== 'undefined' && typeof (temp3) !== 'undefined') {

			temp2 = temp2.split(",");
			temp3 = temp3.split(",");

			if(temp2.length !== temp3.length){
				return "Iterations and loops are with different length";
			}

			arr_str_code = ["OSM.Survey"];

			for(var i = 0, len = temp2.length; i < len; i++){
				arr_str_code.push("." + temp2[i]);
				arr_str_code.push(".getIteration('" + temp3[i] +"')");
			}

			arr_str_code.push("." + obj_action['@objID']);
			arr_str_code = [arr_str_code.join("")];
		}*/
		if(obj_condition['@name'] === "condition"){
			arr_str_code.unshift('RM.Utils.getRMObjectByObjectNameFull(OSM.Survey, "' + obj_condition['@objID'] + '", true, false) && ');
		}


		switch (obj_condition['@type']) {
			case 'iscompleted': /*arr_str_objects[arr_str_objects.length - 1] += ":onCompleted";*/ arr_str_code.push('get("isCompleted")'); break;
			case 'answerisnotin': arr_str_code.splice(1, 0, '!');
			case 'answerall':
			case 'answerisin':
				if (obj_condition['@type'] === 'answerall') {
					arr_str_code.push('isSetOfAnswersSelected(');
				}
				else {
					arr_str_code.push('isAnswerSelected(');
				}

				if (typeof (temp0 = this.conditionValueGet(obj_condition.childNodes[0])) !== 'object') {
					return temp0;
				}

				if(temp0.length === 1 && typeof temp0[0] === "string"){//#cdata fix
					temp0 = temp0[0].split(",");
				}

				arr_str_code.push(Open.objectToString(temp0));
				arr_str_code.push(')');
				break;
			case 'commentdoesnotcontain': arr_str_code.splice(1, 0, '!');
			case 'commentcontains':
			case 'commentless':
			case 'commentgreater':
			case 'commentgreaterorequal':
			case 'commentlessorequal':
			case 'isdatafieldvalueequal':
			case 'commentequal':
			case 'commentnotequal':
				arr_str_code.push('get("' + ((typeof (temp1) === 'undefined') ? 'comment' : 'otherField') + '").');

				var commentObject = " || " + arr_str_code.join("");

				arr_str_code.push(((obj_condition['@type'] !== 'commentcontains' && obj_condition['@type'] !== 'commentdoesnotcontain') ? 'compare' : 'contains') + '(');

				if (typeof (temp0 = this.conditionValueGet(obj_condition.childNodes[0])) !== 'object') {
					return temp0;
				}

				arr_str_code.push(Open.objectToString(temp0[temp0.length - 1]));

				if (obj_condition['@type'] !== 'commentcontains' && obj_condition['@type'] !== 'commentdoesnotcontain') {
					arr_str_code.push(', "');
				}

				switch (obj_condition['@type']) {
					case 'commentless': arr_str_code.push('<'); break;
					case 'commentgreater': arr_str_code.push('>'); break;
					case 'isdatafieldvalueequal': arr_str_code.push('='); break;
					case 'commentgreaterorequal': arr_str_code.push('>='); break;
					case 'commentlessorequal': arr_str_code.push('<='); break;
					case 'commentequal': arr_str_code.push('='); break;
					case 'commentnotequal': arr_str_code.push('<>'); break;
					default: break;
				}

				if (obj_condition['@type'] !== 'commentcontains' && obj_condition['@type'] !== 'commentdoesnotcontain') {
					arr_str_code.push('"');
				}

				arr_str_code.push(')');

				if(typeof obj_condition['@additionalProperty'] !== "undefined"){
					commentObject += "get(\"value\").length === 0";
					arr_str_code.push(commentObject);
				}

				break;
			/*arr_str_code.push('getComment()');
			if (obj_condition['@type'] === 'commentgreater') {
			arr_str_code.push(' > ');
			}
			else {
			arr_str_code.push(' < ');
			}

				if (typeof (temp0 = this.conditionValueGet(obj_condition.childNodes[0])) !== 'object') {
			return temp0;
			}

				arr_str_code.push(Open.objectToString(temp0[temp0.length - 1]));
			break;*/ 
			case 'locationisnotin': arr_str_code.unshift('!');
			case 'locationisin':
				if (typeof (temp0 = this.conditionValueGet(obj_condition.childNodes[0])) !== 'object') {
					return temp0;
				}
				arr_str_code = ["OSM.Survey.locationCompare('"];
				arr_str_code.push(temp0[temp0.length - 1]);
				arr_str_code.push("', '");
				arr_str_code.push(obj_condition["@type"]);
				arr_str_code.push("')");
				break;
			case 'propertyisnotin': arr_str_code.unshift('!');
			case 'propertyisin':
			case 'propertycontains':
			case 'propertydoesnotcontain':
				if (typeof (temp0 = this.conditionValueGet(obj_condition.childNodes[0])) !== 'object') {
					return temp0;
				}
				arr_str_code = ["OSM.Survey.customPropertyCompare('"];
				arr_str_code.push(temp0[temp0.length - 1].replace(/'/g, "\\'").replace(/"/g, '\\"'));
				arr_str_code.push("', '");
				arr_str_code.push(obj_condition["@objID"]);
				arr_str_code.push("', '");
				arr_str_code.push(obj_condition["@type"]);
				arr_str_code.push("')");
				break;
			case 'or': arr_str_code.push(' || '); break;
			case 'and': arr_str_code.push(' && '); break;
			case 'expression': arr_str_objects = arr_str_objects.concat(obj_condition.childNodes);
				arr_str_code = ['OSM.Survey.ExpressionParser.execute(unescape("', obj_condition['@expression'], '"))'];
				break;
			case 'ifblanksurvey': arr_str_objects[arr_str_objects.length - 1] = ":onInit";
				arr_str_code.push("get('viewState')");
				arr_str_code = arr_str_code.concat([' instanceof RM.OSM.ViewState)) || '], arr_str_code);
				arr_str_code.unshift('(!(');
				arr_str_code.push(".get('hasUserDefinedEvents') === false");
				break;
			case 'validation':
				arr_str_code = ["OSM.Survey.get('operationalContext').get('workFlowStepID') === 40"];
				break;
			case 'submission':
				arr_str_code = ["OSM.Survey.get('operationalContext').get('workFlowStepID') === 10"];
				break;
			case 'securityGroup':
				arr_str_code = ["OSM.Survey.get('userContext').isMemberOf('"+ (obj_condition["@groupAlias"] === "" ? obj_condition["@groupName"] : obj_condition["@groupAlias"]) + "')"];
				break;
			default: return 'Condition incorrect @type ' + Open.objectToString(obj_condition);
		}

		temp0 = [];
		if (typeof (temp2) !== 'undefined' && typeof (temp3) !== 'undefined') {
			temp0 = ('RM.Utils.isChildOf(this, ["' + temp2 + '[' + temp3.replace(/[ \t]/gim, '').split(',').join(']", "' + temp2 + '[') + ']"])');
			temp0 = [temp0, ' && '];
			temp0 = temp0.concat('this.get("objectName") === "', arr_str_objects[0].split(':')[0], '"');
		} else {
			if (arr_str_objects.length && arr_str_objects[0] !== -1) {
				temp0 = temp0.concat('this.get("objectName") === "', arr_str_objects[0].split(':')[0], '"');
			}
		}

		return {
			"objectValidationCode": temp0.join(''),
			"code": arr_str_code.join(''),
			"objectsInvolved": arr_str_objects,
			"loops": (typeof (temp2) === 'undefined') ? [] : temp2.split(spliter),
			"loopIterations": (typeof (temp3) === 'undefined') ? [] : temp3.split(spliter)
		}
	}

	this.conditionsListHandle = function(arr_conditions) {
		var arr_str_code = [];
		var arr_str_objects = [];
		var arr_str_loops = [];
		var arr_str_loopIterations = [];
		var arr_str_objectValidationCode = [];
		var temp0;

		if ((temp0 = this.conditionsListValidate(arr_conditions)) !== true) {
			return temp0;
		}
		if(typeof arr_conditions !== "undefined"){
			for (var counter0 = 0; counter0 < arr_conditions.length; counter0++) {
				if (typeof (arr_conditions[counter0]) !== 'object' || arr_conditions[counter0] === null) {
					return 'ConditionsList item not object ' + Open.objectToString(arr_conditions[counter0]);
				}

				if (arr_conditions[counter0].hasOwnProperty('nodeName') === 'undefined' || (arr_conditions[counter0].nodeName !== 'group' && arr_conditions[counter0].nodeName !== 'condition')) {
					return 'ConditionsList item incorrect or missing nodeName ' + Open.objectToString(arr_conditions[counter0]);
				}

				if (arr_conditions[counter0].nodeName === 'group') {
					if (typeof (temp0 = this.conditionsGroupHandle(arr_conditions[counter0])) !== 'object') {
						return temp0;
					}
				}
				else {
					if (typeof (temp0 = this.conditionHandle(arr_conditions[counter0])) !== 'object') {
						return temp0;
					}
				}
				arr_str_code.push(temp0.code);
				arr_str_objects = arr_str_objects.concat(temp0.objectsInvolved);
				arr_str_loops = arr_str_loops.concat(temp0.loops);
				if(arr_str_loopIterations.length === 0){
					arr_str_loopIterations = temp0.loopIterations;
				}

				if (temp0.objectValidationCode.length) {
					arr_str_objectValidationCode = arr_str_objectValidationCode.concat(temp0.objectValidationCode);
				}
			}
		}

		if (arr_str_loops.length === 0) {
			arr_str_objectValidationCode = [];
		}

		return {
			"objectValidationCode": arr_str_objectValidationCode,
			"code": arr_str_code.join(''),
			"objectsInvolved": arr_str_objects,
			"loops": this.arrayRemoveDuplicateStrings(arr_str_loops),
			"loopIterations": arr_str_loopIterations
		}
	}

	this.conditionsGroupHandle = function(obj_conditions) {
		var arr_str_code = [];
		var arr_str_objects = [];
		var arr_str_loops = [];
		var arr_str_loopIterations = [];
		var arr_str_objectValidationCode = [];
		var temp0;

		if ((temp0 = this.groupValidate(obj_conditions)) !== true) {
			return temp0;
		}

		this.groupModify(obj_conditions);

		if (typeof (temp0 = this.conditionsListHandle(obj_conditions.childNodes)) !== 'object') {
			return temp0;
		}

		if (obj_conditions.hasOwnProperty('@type')) {
			switch (obj_conditions['@type']) {
				case 'or': arr_str_code.push(' || '); break;
				case 'and': arr_str_code.push(' && '); break;
				case '': break;
				default: return 'ConditionsGroup incorrect @type ' + Open.objectToString(obj_conditions);
			}
		}

		if(temp0.code !== ""){
			arr_str_code.push('(');
			arr_str_code.push(temp0.code);
			arr_str_code.push(')');
		}

		arr_str_objects = arr_str_objects.concat(temp0.objectsInvolved);
		arr_str_loops = arr_str_loops.concat(temp0.loops);
		arr_str_loopIterations = arr_str_loopIterations.concat(temp0.loopIterations);
		arr_str_objectValidationCode = arr_str_objectValidationCode.concat(temp0.objectValidationCode);

		return {
			"objectValidationCode": arr_str_objectValidationCode,
			"code": arr_str_code.join(''),
			"objectsInvolved": arr_str_objects,
			"loops": arr_str_loops,
			"loopIterations": arr_str_loopIterations
		}
	}

	this.conditionsHandle = function(obj_conditions) {
		var temp0;

		if ((temp0 = this.conditionsValidate(obj_conditions)) !== true) {
			return temp0;
		}

		if (typeof (temp0 = this.conditionsGroupHandle(obj_conditions)) !== 'object') {
			return temp0;
		}

		return {
			"objectValidationCode": temp0.objectValidationCode,
			"code": temp0.code,
			"objectsInvolved": temp0.objectsInvolved,
			"loops": this.arrayRemoveDuplicateStrings(temp0.loops),
			"loopIterations": temp0.loopIterations,
			"eventType": (typeof obj_conditions["@event"] === "undefined") ? "oninputchange" : obj_conditions["@event"],
			"eventTarget": (typeof obj_conditions["@eventTarget"] === "undefined") ? "" : obj_conditions["@eventTarget"],
			"isNot": (typeof obj_conditions["@isNot"] === "undefined") ? false : obj_conditions["@isNot"]
		};
	}

	this.actionsValidate = function(obj_actions) {
		if (typeof (obj_actions) !== 'object' || obj_actions === null) {
			return 'Actions not object ' + Open.objectToString(obj_actions);
		}

		if (!(obj_actions.nodeName === 'actions')) {
			return 'Actions incorrect nodeName ' + Open.objectToString(obj_actions);
		}

		var temp0;
		if ((temp0 = this.childNodesValidate(obj_actions)) !== true) {
			return temp0;
		}

		return true;
	}


	this.actionValidate = function(obj_action) {
		if (typeof (obj_action) !== 'object' || obj_action === null) {
			return 'Action not object ' + Open.objectToString(obj_action);
		}

		if (!(obj_action.nodeName === 'action')) {
			return 'Action incorrect nodeName ' + Open.objectToString(obj_action);
		}

		if (!obj_action.hasOwnProperty('@type')) {
			return 'Action missing @type' + Open.objectToString(obj_action);
		}

		if (!obj_action.hasOwnProperty('@objID')) {
			return 'Action missing @objID' + Open.objectToString(obj_action);
		}

		return true;
	}

	this.actionValueValidate = function(obj_def) {
		var temp0;
		if (typeof (obj_def) !== 'object' || obj_def === null) {
			return 'ActionValue not object or null ' + Open.objectToString(obj_def);
		}

		if (!obj_def.hasOwnProperty('nodeName') || obj_def.nodeName !== 'parameter') {
			return 'ActionValue missing or incorrect value nodeName ' + Open.objectToString(obj_def);
		}

		if (!obj_def.hasOwnProperty('@name') || (obj_def['@name'] !== 'comment' && obj_def['@name'] !== 'answers' && obj_def['@name'] !== 'expression' && obj_def['@name'] !== 'other field')) {
			return 'ActionValue missing or incorrect value @name ' + Open.objectToString(obj_def);
		}

		if ((temp0 = this.childNodesValidate(obj_def)) !== true) {
			return temp0;
		}

		return true;
	}

	this.actionValueGet = function(obj_def) {
		var temp0;
		if ((temp0 = this.actionValueValidate(obj_def)) !== true) {
			return temp0;
		}

		return obj_def.childNodes;
	}

	this.actionHandle = function(obj_action, conditionCheckFlag, hasCondition) {
		var temp0, temp1, temp2, temp3, temp4 = void (0);
		var arr_str_code = [];
		var str_triggerEvent = 'onInputChange'
		var arr_additionalObjectsForEvent = [];
		var bool_isExpression = false;
		var order_target = "";
		var iterationScope;
		var loop_name = [];
		var loop_iterations = [];
		var scope = "this";

		//if we have forEach, we need to have more tabs\
		var additional_tab2 = '';
		if(conditionScope !==''){
			var conditionScopeTempArr = conditionScope.split(';');
			for(var k = 0; k < conditionScopeTempArr.length; k++){
				additional_tab2 = additional_tab2 + '\t';
			}
		}

		if ((temp0 = this.actionValidate(obj_action)) !== true) {
			return temp0;
		}

		if (obj_action['@Suspended'] == '1') {
			return {
				"code": null,
				"objectsInvolved": [],
				"loops": [],
				"loopIterations": [],
				"triggerEvent": null,
				"additionalObjectsForEvent": []
			}
		}

		if (obj_action.childNodes && obj_action.childNodes[0] && obj_action.childNodes[0]["@name"] === "other field" && obj_action.childNodes[0].hasOwnProperty('@answerName')) {
			temp1 = obj_action.childNodes[0]['@answerName'];
		}
		if (obj_action.childNodes && obj_action.childNodes[0] && obj_action.childNodes[0]["@name"] === "expression" && obj_action.childNodes[0].hasOwnProperty('@answerName')) {
			temp1 = obj_action.childNodes[0]['@answerName'];
		}

		if (obj_action.hasOwnProperty('@loopName')) {
			temp2 = obj_action['@loopName'];
			if (temp2 === '') {
				temp2 = void (0);
			}
		}

		if (obj_action.hasOwnProperty('@loopIterations')) {
			temp3 = obj_action['@loopIterations'];

			if (temp3 === '' || temp3.replace(/,/g, '').length === 0) {
				temp3 = void (0);
			}
		}

		// if (typeof (temp0 = this.getOSMElementCode((obj_action.hasOwnProperty('@objID') ? obj_action['@objID'] : ""), temp1, void (0), void (0), (typeof (temp2) !== 'undefined' && typeof (temp3) !== 'undefined'), ((typeof (temp2) !== 'undefined' && typeof (temp3) !== 'undefined') ? 'OSM.Survey.' + temp2 : void (0)))) !== 'object') {
		// 	return temp0;
		// }
		
		if(conditionScope !== '' && typeof temp3 === "undefined"){
			scope = 'iteration';
		}


		if (typeof (temp0 = this.getOSMElementCode((obj_action.hasOwnProperty('@objID') ? obj_action['@objID'] : ''), temp1, void (0), void (0), false, scope)) !== 'object') {
			return temp0;
		}

		if(typeof obj_action['@loopName'] === "string" && typeof conditionScope === "string"){
			conditionScope = conditionScope.replace(/,/g, ";");
			obj_action['@loopName'] = obj_action['@loopName'].replace(/,/g, ";");
		}

		if(conditionScope !== '' && conditionScope === obj_action['@loopName'] && typeof temp3 === "undefined"){
			temp0.code = temp0.code.replace('.getTop()', '');
			temp3 = void(0);
		}else{
			temp0.code = temp0.code.replace('this.getTop()', 'OSM.Survey').replace('iteration.getTop()', 'OSM.Survey');
		}

		if (temp0.code) {
			arr_str_code.push(temp0.code);
		}

		temp0 = [];

		if (typeof (temp2) !== 'undefined' && typeof (temp3) !== 'undefined') {

			temp2 = temp2.split(",");//loops
			temp3 = temp3.split(",");//iterations

			if(temp2.length !== temp3.length){
				return "Iterations and loops are with different length";
			}

			var otherField = "";
			if(arr_str_code[0].indexOf("get('answerSet')") !== -1){
				otherField = "." + arr_str_code[0].split(".")[arr_str_code[0].split(".").length - 1];
			}

			arr_str_code = ['OSM.Survey'];
			var temp2I;
			var questionName = obj_action['@objID'];
			questionName = questionName.split(".")[questionName.split(".").length - 1];
			for(var i = 0, len = temp2.length; i < len; i++){
				temp2I = temp2[i];
				if(i > 0){
					temp2I = temp2I.split(".")[temp2I.split(".").length - 1];
				}
				arr_str_code.push('.' + temp2I + '.getIteration("' + temp3[i] + '")');
			}
			arr_str_code.push('.' + questionName + otherField);
			arr_str_code = [arr_str_code.join("")];

			// arr_str_code.push('.forEach(function(collectionItem, collectionItemKey){\n\t\t\t');
			// temp0 = ('RM.Utils.isChildOf(collectionItem, ["' + temp2 + '[' + temp3.replace(/[ \t]/gim, '').split(',').join(']", "' + temp2 + '[') + ']"])');
			// arr_str_code.push('\tif (', temp0, ') {\n\t\t\t\t\t');
			// arr_str_code.push('collectionItem');
		}

		bool_isExpression = (obj_action.hasOwnProperty('childNodes')
			&& Open.isArray(obj_action.childNodes)
			&& obj_action.childNodes.length === 1
			&& typeof (obj_action.childNodes[0]) === 'object'
			&& obj_action.childNodes[0].hasOwnProperty('@name')
			&& obj_action.childNodes[0]['@name'] === 'expression')

		if (bool_isExpression) {
			// arr_additionalObjectsForEvent = obj_action.childNodes[0]['childNodes'];
			temp0 = 'OSM.Survey.ExpressionParser.execute(unescape("' + obj_action.childNodes[0]['@expression'] + '"))';
		}

		if (obj_action["@type"] !== "#modalalert#" && obj_action["@type"] !== '#changelanguage#' && obj_action["@type"] !== '#preventnext#') {
			var additional_tab = hasCondition || conditionCheckFlag ? "\t" : "";
			arr_str_code.unshift('if (RM.Utils.getRMObjectByObjectNameFull(OSM.Survey, "' + obj_action['@objID'] + '", true, false)) ','{','\n\t\t' + additional_tab + additional_tab2)
		}
		switch (obj_action['@type']) {
			//question                                                                                                                                                        
			case 'show': arr_str_code.push('.show(', ((bool_isForPreview) ? '' : str_originType), ')'); break;
			case 'hide': arr_str_code.push('.hide(', ((bool_isForPreview) ? '' : str_originType), ')'); break;
			case 'editable': 
				arr_str_code[0] = [arr_str_code[0] , '.enable(RM.Utils.eventOriginType.SkipsAndTriggers)'];
				arr_str_code[1] = [arr_str_code[0][0] , '.readOnly(false)'];
				break;
			case 'editableSSOnly': 
				//arr_str_code.push('.readOnly(true', ')'); 
				arr_str_code[0] = [arr_str_code[0] , '.enable(RM.Utils.eventOriginType.SkipsAndTriggers)'];
				arr_str_code[1] = [arr_str_code[0][0] , '.readOnly(true)'];
				break;
			case 'readOnly': arr_str_code.push('.disable(RM.Utils.eventOriginType.SkipsAndTriggers)'); break;
			case 'go to':
				//calculate tabs
				var additional_tab = (conditionScope === "") ? '\t' : '\t\t';//if we have forEach, we need to have one more tab
				if (typeof (temp2) !== 'undefined'/* && typeof (temp3) !== 'undefined'*/) {
					if(conditionCheckFlag){
						additional_tab += '\t';
					}
					additional_tab += '\t';
				}
				if(!hasCondition){
					additional_tab = '\t';
				}
				

				if (typeof (temp2) !== 'undefined' && typeof (temp3) !== 'undefined') {
					var element = 'var elementToGo = ' + arr_str_code[0] + ';\n';
					var initAndRender = additional_tab + arr_str_code[0].split('.getIteration')[0] + '.initAndRender(true);\n' + additional_tab;
					arr_str_code = [];
					arr_str_code.push(element + initAndRender + 'OSM.Survey.get(\'navigator\').goTo(elementToGo)');
				}else{
					arr_str_code.splice(arr_str_code.length - 1, 0, 'OSM.Survey.get(\'navigator\').goTo(');
					arr_str_code.push(')');
				}
				str_triggerEvent = 'onExit';
				break;
			case 'do not change': arr_str_code.length = 0; break;
			case 'order':
				if(typeof obj_action["@loopName"] !== "undefined" && obj_action["@loopName"].length > 0){
					loop_name = obj_action["@loopName"].split(",");
					loop_iterations = obj_action["@loopIterations"].split(",");
					if(loop_name.length !== loop_iterations.length){
						order_target = '"' + obj_action["@objID"] + '"';
					}else{
						iterationScope = 'OSM.Survey.';
						var loop_nameI;
						for(var i = 0; i < loop_name.length; i++){
							loop_nameI = loop_name[i];
							if(i > 0){
								loop_nameI = loop_nameI.split(".")[loop_nameI.split(".").length - 1];
							}
							iterationScope += loop_nameI + '.getIteration("' + loop_iterations[i] + '").';
						}
						iterationScope = iterationScope.slice(0, -1); // + ".getObjectNameFull();";
						order_target = '"' + obj_action["@objID"] + '"';
					}
				}else{
					order_target = '"' + obj_action["@objID"] + '"';
				}
				arr_str_code = ['RM.Utils.reorder(' + order_target + ', "' + obj_action.childNodes.join(",") + '", ' + iterationScope + ', true)'];
				break;
			case 'expression':
				arr_str_code.push('.filterIterations(OSM.Survey.ExpressionParser.execute(unescape("', escape(obj_action.childNodes[0]), '")))');
				break;
			case 'advanced': //arr_str_code.length = 0; break;
				arr_str_code.push('.execute(');

				if (typeof (temp0 = this.actionValueGet(obj_action.childNodes[0])) !== 'object') {
					return temp0;
				}

				arr_str_code.push(Open.objectToString(temp0[temp0.length - 1]));
				arr_str_code.push(')');
				break;
			//comment             
			case 'showcomment': arr_str_code.push('.showComment(', ((bool_isForPreview) ? '' : str_originType), ')'); break;
			case 'hidecomment': arr_str_code.push('.hideComment(', ((bool_isForPreview) ? '' : str_originType), ')'); break;
			case 'setcomment': arr_str_code.push('.setComment(');

				if (typeof (temp0 = this.actionValueGet(obj_action.childNodes[0])) !== 'object') {
					return temp0;
				}
				if(obj_action.childNodes[0]["@name"] === "expression"){
					arr_str_code.push("OSM.Survey.ExpressionParser.execute(unescape('" + obj_action.childNodes[0]["@expression"] + "'))");
				}else{
					arr_str_code.push(Open.objectToString(temp0[temp0.length - 1]));
				}
				
				arr_str_code.push(((bool_isForPreview) ? '' : ', ' + str_originType), ')');
				break;

			case 'setdatetimediff': 
				arr_str_code.push('.setComment(');
				arr_str_code.push('RM.Utils.dateTimeDifference(');

				var tempStr = '';
				for (var i = 0; i < obj_action['childNodes'].length -1; i++) {
					if(obj_action['childNodes'][i]['childNodes'][0] === '-1'){
						tempStr = tempStr + ' "",';
						continue;
					}
					tempStr = tempStr + ' OSM.Survey.'+ obj_action['childNodes'][i]['childNodes'][0] +'.getComment(),';
				}
				arr_str_code.push(tempStr + ' "'+ obj_action['childNodes'][4]['childNodes'][0] +'")');
				arr_str_code.push(')');

				break;
			//answers                                                                                                                                                     

			case 'setanswer':
			case 'hideanswer':
			case 'showanswer':
			case 'clearanswer':
			case 'enableanswer':
			case 'disableanswer':
			case 'highlight':
				temp1 = obj_action['@type'];
				if (bool_isExpression) {
					temp4 = '\n\t\t' + arr_str_code[arr_str_code.length - 1];
				}
				else {
					if(obj_action.childNodes[0].childNodes && obj_action.childNodes[0].childNodes.length === 1){
						obj_action.childNodes[0].childNodes = obj_action.childNodes[0].childNodes[0].split(",");
					}
					if (typeof (temp0 = this.actionValueGet(obj_action.childNodes[0])) !== 'object') {
						return temp0;
					}
					temp0 = Open.objectToString(temp0);
					if (temp1 === 'setanswer') {
						if (temp0 === '[""]') {
							temp1 = 'clearanswer';
							temp0 = '';
						}
					}
				}

				switch (temp1) {
					case 'setanswer':
						if (bool_isExpression) {
							arr_str_code.push('.clearAnswers(', ((bool_isForPreview) ? '' : 'void(0), ' + str_originType), ');', temp4);
						}

						arr_str_code.push('.setAnswers(');
						break;
					case 'hideanswer':
						if (bool_isExpression) {
							arr_str_code.push('.showAnswers(', ((bool_isForPreview) ? '' : 'void(0), ' + str_originType), ');', temp4);
						}

						arr_str_code.push('.hideAnswers('); break;
					case 'showanswer':
						if (bool_isExpression) {
							arr_str_code.push('.hideAnswers(', ((bool_isForPreview) ? '' : 'void(0), ' + str_originType), ');', temp4);
						}

						arr_str_code.push('.showAnswers('); break;
					case 'clearanswer':
						if (bool_isExpression) {
							arr_str_code.push('.setAnswers(', ((bool_isForPreview) ? '' : 'void(0), ' + str_originType), ');', temp4);
						}

						arr_str_code.push('.clearAnswers('); break;
					case 'enableanswer':
						if (bool_isExpression) {
							arr_str_code.push('.disableAnswers(void(0), false', ((bool_isForPreview) ? '' : 'void(0), false,' + str_originType), ');', temp4);
						}

						arr_str_code.push('.enableAnswers('); break;
					case 'disableanswer':
						if (bool_isExpression) {
							arr_str_code.push('.enableAnswers(', ((bool_isForPreview) ? '' : 'void(0), ' + str_originType), ');', temp4);
						}

						arr_str_code.push('.disableAnswers('); break;
					case 'highlight':
						arr_str_code.push('.hightlightAnswers(');
						if (obj_action.childNodes.length >= 2 && this.childNodesValidate(obj_action.childNodes[1])) {
							temp1 = obj_action.childNodes[1].childNodes;
						}
						else {
							temp1 = '#000000';
						}
						break;
				}

				
				arr_str_code.push(temp0);

				if (obj_action['@type'] === 'setanswer' && temp0.length === 0) { //set answer (Clear All)
					arr_str_code.push("''");
				}

				if (obj_action['@type'] === 'highlight') {
					arr_str_code.push(', "' + temp1 + '"');
				}

				if(obj_action['@type'] === "disableanswer"){
					var clearStr = "false";
					if(obj_action["@clearAnswers"] == "1"){
						clearStr = "true";
					}
					arr_str_code.push(', ' + clearStr);
					arr_str_code.push(((!bool_isForPreview) ? '' : ', ' + str_originType), ')');
				}else{
					arr_str_code.push(((!bool_isForPreview) ? '' : ', ' + str_originType), ')');
				}
				
				break;
			case '#resetonnext#':
				//arr_str_code = ['OSM.Survey.discard()'];
				arr_str_code = ['OSM.Survey.screenOut()'];
				break;
			case "#changelanguage#":
				if(obj_action["@languageQuestion"] === "" || typeof (obj_action["@languageQuestion"]) === 'undefined'){
					arr_str_code = [];
				}else{
					arr_str_code[0] = 'OSM.Survey.' + obj_action["@languageQuestion"] + '.setLanguageToAnswer()';
				}
				break;
			case "#preventnext#":
				arr_str_code[0] = 'RM.Utils.preventNext(evtObj.sourceElement)';
				break;
			case "#modalalert#":
				arr_str_code[0] = 'OSM.NotificationSystem.askModalWithLiteral(unescape("' + obj_action["@modalAlertLiteral"] + '"))';
				break;
			default:
				return 'Action incorrect or missing @type: ' + (Open.objectToString(obj_action));
		}

		if(arr_str_code[0] instanceof Array ){
			var arr_arrFromStr_code = [];
			var tempStringBuild;
			additional_tab = hasCondition || conditionCheckFlag ? '\t' : '';
			for (var i = 0; i < arr_str_code.length; i++) {
				if(arr_str_code[i] instanceof Array ){
					tempStringBuild = arr_str_code[i].shift();
					arr_str_code[i].unshift(arr_str_code[3]);
					arr_str_code[i].unshift('{\n\t\t' + additional_tab + additional_tab2);
					arr_str_code[i].unshift(tempStringBuild);
					arr_str_code[i].push(';');
					arr_str_code[i].push('\n\t'+ additional_tab + additional_tab2 +'}');
					arr_arrFromStr_code.push(arr_str_code[i].join(''));
				}
			};

			return {
				"code": arr_arrFromStr_code,
				"objectsInvolved": obj_action['@objID'],
				"loops": (typeof (temp2) === 'undefined') ? [] : temp2,
				"loopIterations": (typeof (temp3) === 'undefined') ? [] : temp3,
				"triggerEvent": str_triggerEvent,
				"additionalObjectsForEvent": arr_additionalObjectsForEvent
			};
		}
		else if (arr_str_code.length > 0) {
			arr_str_code.push(';');
		}
		if(arr_str_code[1] === '{'){
			if(hasCondition || conditionCheckFlag){
				arr_str_code.push('\n\t\t' + additional_tab2 +'}');
			}else{
				arr_str_code.push('\n\t}');
			}
		}
		// if (typeof (temp2) !== 'undefined' && typeof (temp3) !== 'undefined') {
		// 	//			// if (typeof (temp3) !== 'undefined') {
		// 	arr_str_code.push('\n\t\t\t}');
		// 	if (str_triggerEvent !== 'onExit') {
		// 		arr_str_code.push('\n\t\t}');
		// 	}
		// 	arr_str_code.push(');');
		// 	////			}

		// 	if (str_triggerEvent === 'onExit') {
		// 		arr_str_code.push('\n\t\t};');
		// 	}
		// }


		return {
			"code": (hasCondition) ?  arr_str_code.join('') : '\t' + arr_str_code.join(''),
			"objectsInvolved": obj_action['@objID'],
			"loops": (typeof (temp2) === 'undefined') ? [] : temp2,
			"loopIterations": (typeof (temp3) === 'undefined') ? [] : temp3,
			"triggerEvent": str_triggerEvent,
			"additionalObjectsForEvent": arr_additionalObjectsForEvent
		};
	}

	this.actionsHandle = function(obj_actions, conditionCheckFlag, hasCondition) {
		var temp0, temp1, temp2;
		var arr_str_codes = [];
		var arr_str_objects = [];
		var arr_str_loops = [];
		var arr_str_loopIterations = [];
		var obj_triggerEvent = {};
		var arr_additionalObjectsForEvent = [];
		var str_action_spliter = '';
		var additional_tab = '';
		var result = '';

		if ((temp0 = this.actionsValidate(obj_actions)) !== true) {
			return temp0;
		}

		if ((temp0 = this.childNodesValidate(obj_actions)) !== true) {
			return temp0;
		}

		for (var counter0 = 0; counter0 < obj_actions.childNodes.length; counter0++) {
			if (typeof (temp0 = this.actionHandle(obj_actions.childNodes[counter0], conditionCheckFlag, hasCondition)) !== 'object') {
				return temp0;
			};

			if (temp0.code !== null) {
				arr_str_codes.push(temp0.code);
			}

			arr_str_objects.push(temp0.objectsInvolved);
			arr_str_loops.push(temp0.loops);
			arr_str_loopIterations.push(temp0.loopIterations);
			obj_triggerEvent[temp0.triggerEvent] = null;
			arr_additionalObjectsForEvent = arr_additionalObjectsForEvent.concat(temp0.additionalObjectsForEvent);
		}

		temp0 = [];
		for (temp1 in obj_triggerEvent) {
			temp0.push(temp1);
		}
		if(conditionCheckFlag){
			additional_tab = '\t';
		}

		str_action_spliter = (conditionScope === "") ? '\n\t\t' : '\n\t\t\t';//if we have forEach, we need to have one more tab

		var tabulation = '';
		var tempArr;
		var multilineAction_tab = "";

		if(hasCondition){
			tabulation = '\t\t';
		}else{
			str_action_spliter = '\n';
			multilineAction_tab = "\t";
		}
		
		for (var i = 0; i < arr_str_codes.length; i++){
			if (arr_str_codes[i] instanceof Array){
				tempArr = arr_str_codes[i];
				arr_str_codes.splice(i,1);

				var arr_str_codes_arr = [];
				for(var k = 0; k < tempArr.length; k++){
					arr_str_codes_arr.push(multilineAction_tab + tempArr[k])
				}

				arr_str_codes = arr_str_codes_arr.concat(arr_str_codes);
			}
		}
		
		result = tabulation + arr_str_codes.join(str_action_spliter + additional_tab);

		// str_action_spliter = '\n\t\t\t';//if we have forEach, we need to have one more tab
		return {
			"code": ((arr_str_codes.length) ? result : ""),
			"objectsInvolved": arr_str_objects,
			"loops": arr_str_loops,
			"loopIterations": arr_str_loopIterations,
			"triggerEvents": temp0,
			"additionalObjectsForEvent": arr_additionalObjectsForEvent
		}
	}

	this.definitionToCode = function(obj_singleDef) {
		conditionScope = "";
		var conditionCheckFlag = false; //Use this flag for additional tab when the definition have forEach and iterationName === "something";
		var hasCondition = true;
		var str_codeConditions = '';
		var str_codeActions = '';
		var temp0, temp1, temp2;
		var temp3 = [];
		var obj_result;
		var arr_str_event = ['onInputChange'];
		var arr_str_objectsInvolved = [];
		var additional_code_for_loops = [];
		var additional_tab = "";

		if ((temp0 = this.definitionValidate(obj_singleDef)) !== true) {
			return temp0;
		}

		if (typeof (temp0 = this.conditionsHandle(obj_singleDef.childNodes[0])) !== 'object') {
			return temp0;
		}
		if(temp0.code.length === 0){
			hasCondition = false;
		}
		if(temp0.loops.length > 0 && temp0.loopIterations.length === 0){
			additional_code_for_loops.push('\n\tvar ' + temp0.loops[0] + ' = OSM.Survey.' + temp0.loops[0] + ';' +
				'\n\t' + temp0.loops[0] + '.getIterator().forEach(function(iterator){\n\t\t' +
				'var iterationName = iterator.get("objectName");\n\t\t' +
				'var iteration = ' + temp0.loops[0] + '.getIteration(iterationName);\n\t\t');
			additional_code_for_loops.push('\n\t});');
			additional_tab = '\t';
		}else if(temp0.loops.length > 0 && temp0.loopIterations.length > 0 && conditionScope !== "" && temp0.loopIterations.length === temp0.loops.length){
			var loops = temp0.loops;
			var loopIterations = temp0.loopIterations;
			var tempLoopIterations = [];
			conditionCheckFlag = true;
			var startLoop = "";
			var endLoop = [];
			var parent = "OSM.Survey.";
			var loopsI;
			var loopsINoDot;
			var hasIteration;
			for(var i = 0; i < loops.length; i++){
				loopsI = loops[i];
				if(i > 0){
					loopsI = loopsI.split(".")[loopsI.split(".").length - 1];
				}
				loopsINoDot = loopsI.replace('.', '_');
				tempLoopIterations = [];
				temp3 = [];
				hasIteration = false;
				if(loopIterations[i] !== ""){
					hasIteration = true;
					tempLoopIterations = loopIterations[i].split(",");

					for(var l = 0, len = tempLoopIterations.length; l < len; l++){
						temp3.push("(iterationName === \"" + tempLoopIterations[l] + "\")");
					}
					temp3 = "if(" + temp3.join(" || ") + "){" + '\n\t\t\t' + additional_tab;
				}else{
					temp3 = '';
				}

				temp3 += 'var iteration = ' + loopsINoDot + '.getIteration(iterationName);'
				
				startLoop += '\n\t' + additional_tab + 'var ' + loopsINoDot + ' = ' + parent + loopsI + ';' +
					'\n\t' + additional_tab + loopsINoDot + '.getIterator().forEach(function(iterator){' +
					'\n\t\t' + additional_tab + 'var iterationName = iterator.get("objectName");';
				if(temp3.length > 0){
					startLoop += '\n\t\t' + additional_tab + temp3;
				}	
				endLoop.push('\n\t' + additional_tab + '});');

				if(hasIteration){
					endLoop.push('\n\t\t' + additional_tab + '}');
				}

				parent = "iteration.";
				additional_tab += '\t';
				if(hasIteration){
					additional_tab += '\t';
				}
			}

			additional_code_for_loops.push(startLoop);
			additional_code_for_loops.push(endLoop.reverse().join(""));

			/*conditionCheckFlag = true;
			for(var l = 0, len = temp0.loopIterations.length; l < len; l++){
				temp3.push("(iterationName === \"" + temp0.loopIterations[l] + "\")");
			}
			temp3 = "if(" + temp3.join(" || ") + "){"
			//temp3 = temp0.loopIterations
			additional_code_for_loops.push('\n\tvar ' + temp0.loops[0] + ' = OSM.Survey.' + temp0.loops[0] + ';' +
				'\n\t' + temp0.loops[0] + '.getIterator().forEach(function(iterator){\n\t\t' +
				'var iterationName = iterator.get("objectName");\n\t\t' + 
				'var iteration = ' + temp0.loops[0] + '.getIteration(iterationName);\n\t\t' +
				temp3);
			additional_code_for_loops.push('\n\t\t}\n\t});');
			additional_tab = '\t\t';*/
		}else{
			additional_code_for_loops = ["", ""];
		}

		//arr_str_event = temp1.triggerEvents;
		arr_str_event = eventsMap[temp0.eventType];
		
		if(arr_str_event === "ifblanksurvey" && !hasCondition){//additional tab
			conditionCheckFlag = true;
		}

		if (typeof (temp1 = this.actionsHandle(obj_singleDef.childNodes[1], conditionCheckFlag, hasCondition)) !== 'object') {
			return temp1;
		}

		if (temp1.additionalObjectsForEvent.length) {
			arr_str_objectsInvolved = [].concat(temp0.objectsInvolved, temp1.additionalObjectsForEvent);
		}
		else {
			arr_str_objectsInvolved = temp0.objectsInvolved;
		}
		//		if (temp1.code.indexOf('OSM.Survey.get(\'navigator\').goTo') !== -1) {
		//			arr_str_event.push('onExit');
		//		}

		if(temp0.eventType === "onexit" || temp0.eventType === "onentrance"){
			arr_str_objectsInvolved = [temp0.eventTarget];
		}
		
		temp2 = '';
		if (temp0.objectValidationCode.length) {
			temp2 = temp0.objectValidationCode.join(') || (');
			temp2 = ['\n\tif (!((', temp2, '))) {\n\t\treturn;\n\t}\n\n'].join('');
		}

		if(temp0.code !== '' && temp0.isNot){
			temp0.code = '!(' + temp0.code + ')'; 
		}

		if (arr_str_objectsInvolved.length === 0) {
			var obj_result = {
				"code": '',
				"objectsInvolvedConditions": [],
				"objectsInvolvedActions": []
			};
		}else{
			temp2 = ""; //remove loop verifications
			var obj_result;
			if (temp1.code !== null && temp1.code !== '' && temp0.eventType !== 'oninit' && temp0.eventType !== 'ifblanksurvey') {

				if(temp0.code === ""){
					obj_result = {
						"code": 'OSM.Survey.addEventListenersToElements(' + Open.objectToString(this.arrayRemoveDuplicates(arr_str_objectsInvolved)) + ', ' + Open.objectToString(arr_str_event) + /*"onInputChange"*/' , function (evtObj) {' + temp2 + '\n' + temp1.code + '\n});\n\n\n',
						"objectsInvolvedConditions": temp0.objectsInvolved,
						"objectsInvolvedActions": temp1.objectsInvolved
					};
				}else{
					obj_result = {
						"code": 'OSM.Survey.addEventListenersToElements(' + Open.objectToString(this.arrayRemoveDuplicates(arr_str_objectsInvolved)) + ', ' + Open.objectToString(arr_str_event) + /*"onInputChange"*/' , function (evtObj) {' + temp2 + additional_code_for_loops[0] + '\n' + additional_tab + '\tif (' + temp0.code + ') {\n' + additional_tab + temp1.code + '\n\t' + additional_tab + '}'+ additional_code_for_loops[1] +'\n});\n\n\n',
						"objectsInvolvedConditions": temp0.objectsInvolved,
						"objectsInvolvedActions": temp1.objectsInvolved
					};
				}
			}
			else {
				obj_result = {
					"code": '',
					"objectsInvolvedConditions": null,
					"objectsInvolvedActions": null
				};
			}
		}

		if (arr_str_objectsInvolved.length === 1 && typeof (arr_str_objectsInvolved[0]) === 'string' && arr_str_objectsInvolved[0].toLowerCase() === ':oninit') {
			obj_result.code = 'this.addEventListener("onInit", function (evtObj) {\n\tif (' + temp0.code + ') {\n' + additional_tab + temp1.code + '\n\t' + additional_tab + '}\n});\n\n\n';
		}

		
		if(temp0.eventType === "oninit"){
			if(temp0.code === ""){
				obj_result.code = 'OSM.Survey.addEventListener("onInit", function (evtObj) {\n' + temp1.code + '\n});\n\n\n';
			}else{
				obj_result.code = 'OSM.Survey.addEventListener("onInit", function (evtObj) {' + additional_code_for_loops[0] + '\n' + additional_tab + '\tif (' + temp0.code + ') {\n' + additional_tab + temp1.code + '\n\t' + additional_tab + '}\n'+ additional_code_for_loops[1] + '});\n\n\n';
			}
		}


		if(temp0.eventType === "ifblanksurvey"){
			var ifBlankCondition = "(((!(OSM.Survey.get('viewState') instanceof RM.OSM.ViewState)) || OSM.Survey.get('viewState').get('hasUserDefinedEvents') === false))";
			if(temp0.code === ""){
				obj_result.code = 'OSM.Survey.addEventListener("onInit", function (evtObj) {\n\tif (' + ifBlankCondition + ') {\n\t' + additional_tab + temp1.code + '\n\t}\n});\n\n\n';
			}else{
				obj_result.code = 'OSM.Survey.addEventListener("onInit", function (evtObj) {' + additional_code_for_loops[0] + '\n' + additional_tab + '\tif ((' + ifBlankCondition + ") && (" + temp0.code + ')) {\n' + temp1.code + '\n\t' + additional_tab + '}\n' + additional_code_for_loops[1] + '});\n\n\n';
			}
		}


		return obj_result;
	}

	this.notify = function(str_message) {
		try {
			var obj_notificationCollection = new RM.ODP.Data.Collection();
			OSM.NotificationSystem.notifyModal(str_message, 1, 12, void (0), obj_notificationCollection);
		}
		catch (e) {
			alert(str_message)
		}
	}

	this.arrayValuesCount = function(arr_data) {
		var obj_result = {};
		if (typeof (arr_data) !== 'object' || arr_data === null || !arr_data instanceof Array) {
			return 'Not Array';
		}

		for (var counter0 = 0; counter0 < arr_data.length; counter0++) {
			obj_result[arr_data[counter0]] = (typeof (obj_result[arr_data[counter0]]) === 'undefined') ? 1 : obj_result[arr_data[counter0]]++;
		}

		return obj_result;
	}

	this.dependingObjects = {};
	this.dependentObjects = {};

	/*	function transformGoToToSeparateDefinition(obj_def) {}

	function transformResetOnNextToSeparateDefinition(obj_def) {
	var temp0;
	for (var counter0 = 0; counter0 < obj_def.childNodes.length; counter0++) {
	for (var counter1 = 0; counter1 < obj_def.childNodes[counter0].childNodes.length; counter1++) {
	if (obj_def.childNodes[counter0].childNodes[counter1].nodeName === 'actions') {
	for (var counter2 = 0; counter2 < obj_def.childNodes[counter0].childNodes[counter1].childNodes.length; counter2++) {
	if (obj_def.childNodes[counter0].childNodes[counter1].childNodes[counter2]['@type'] === '#resetonnext#') {
	if (obj_def.childNodes[counter0].childNodes[counter1].childNodes.length > 1) {
	temp0 = obj_def.childNodes.push(Open.cloneObject(obj_def.childNodes[counter0]));
	obj_def.childNodes[temp0 - 1].childNodes[counter1].childNodes = [Open.cloneObject(obj_def.childNodes[counter0].childNodes[counter1].childNodes[counter2])];
	obj_def.childNodes[counter0].childNodes[counter1].childNodes.splice(counter2, 1);
	}
	}
	}
	}
	}
	}
	}
	*/

	function transformExpressions(obj_def) {
		var temp0;

		for (var counter0 = 0; counter0 < obj_def.childNodes.length; counter0++) {
			for (var counter1 = 0; counter1 < obj_def.childNodes[counter0].childNodes.length; counter1++) {
				if (obj_def.childNodes[counter0].childNodes[counter1].nodeName === 'actions') {
					for (var counter2 = 0; counter2 < obj_def.childNodes[counter0].childNodes[counter1].childNodes.length; counter2++) {
						if (Open.isArray(obj_def.childNodes[counter0].childNodes[counter1].childNodes[counter2].childNodes)
							&& obj_def.childNodes[counter0].childNodes[counter1].childNodes[counter2].childNodes.length === 1
							&& typeof (obj_def.childNodes[counter0].childNodes[counter1].childNodes[counter2].childNodes[0]) === 'object'
							&& obj_def.childNodes[counter0].childNodes[counter1].childNodes[counter2].childNodes[0].hasOwnProperty('@name')
							&& obj_def.childNodes[counter0].childNodes[counter1].childNodes[counter2].childNodes[0]['@name'] === 'expression') {
							if (obj_def.childNodes[counter0].childNodes[counter1].childNodes.length > 1) {
								temp0 = obj_def.childNodes.push(Open.cloneObject(obj_def.childNodes[counter0]));
								obj_def.childNodes[temp0 - 1].childNodes[counter1].childNodes = [Open.cloneObject(obj_def.childNodes[counter0].childNodes[counter1].childNodes[counter2])];
								obj_def.childNodes[counter0].childNodes[counter1].childNodes.splice(counter2, 1);
							}
						}
					}
				}
			}
		}
	}

	function clearDoNotChange(obj_def) {
		var temp0;

		for (var counter0 = 0; counter0 < obj_def.childNodes.length; counter0++) {
			for (var counter1 = 0; counter1 < obj_def.childNodes[counter0].childNodes.length; counter1++) {
				if (obj_def.childNodes[counter0].childNodes[counter1].nodeName === 'actions') {
					for (var counter2 = 0; counter2 < obj_def.childNodes[counter0].childNodes[counter1].childNodes.length; counter2++) {
						if (obj_def.childNodes[counter0].childNodes[counter1].childNodes[counter2]['@type'] === 'do not change') {
							obj_def.childNodes[counter0].childNodes[counter1].childNodes.splice(counter2, 1);
							counter2--;
						}
					}

					if (obj_def.childNodes[counter0].childNodes[counter1].childNodes.length === 0) {
						obj_def.childNodes.splice(counter0, 1);
						counter0--;
					}
				}
			}
		}
	}

	function clearServerSideDefinitions(obj_def){
		for (var counter0 = 0; counter0 < obj_def.childNodes.length; counter0++) {
			for(var counter1 = 0; counter1 < obj_def.childNodes[counter0].childNodes.length; counter1++){
				if (obj_def.childNodes[counter0].childNodes[counter1].nodeName === 'conditions') {
					if(obj_def.childNodes[counter0].childNodes[counter1]["@event"] in {"onsave": true, "onsubmit": true}){
						obj_def.childNodes.splice(counter0, 1);
						counter0--;
						break;
					}
				}
			}
		}
	}

	function transformDefinition(obj_def) {
		//		transformGoToToSeparateDefinition(obj_def);
		//		transformResetOnNextToSeparateDefinition(obj_def);
		clearDoNotChange(obj_def);
		transformExpressions(obj_def);
		clearServerSideDefinitions(obj_def);
	}

	this.toCode = function(obj_def, isForPreview) {
		var arr_result = [];
		var arr_objectsInvolvedConditions = [];
		var arr_objectsInvolvedActions = [];

		var temp0;

		bool_isForPreview = !!isForPreview;

		if ((temp0 = this.definitionsValidate(obj_def)) !== true) {
			if (typeof (obj_def) !== 'object' || Object.getOwnPropertyNames(obj_def).length > 0) {
				this.notify(temp0);
			}
			return false;
		}
		//Clone object is not working for this case
		obj_def = Open.objectToString(obj_def);
		obj_def = Open.stringToObject(obj_def);
		// obj_def = Open.cloneObject(obj_def);
		
		transformDefinition(obj_def);

		for (var counter0 = 0; counter0 < obj_def.childNodes.length; counter0++) {
			if (typeof (temp0 = this.definitionToCode(obj_def.childNodes[counter0])) !== 'object') {
				this.notify(temp0);
				return false;
				//some error notification here
			}
			else {
				arr_result.push(temp0.code);
				arr_objectsInvolvedConditions = arr_objectsInvolvedConditions.concat(temp0.objectsInvolvedConditions);
				arr_objectsInvolvedActions = arr_objectsInvolvedActions.concat(temp0.objectsInvolvedActions);
			}
		}

		this.dependingObjects = this.arrayValuesCount(arr_objectsInvolvedActions);
		this.dependentObjects = this.arrayValuesCount(arr_objectsInvolvedConditions);

		return arr_result.join('');
	}
}