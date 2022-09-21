if (typeof(Open) === 'undefined') {
	Open = function () {
		/*
		OPEN functions/methods/properties:
		addListener (use: Open.listeners.add)
		addReadyStateHandler
		cloneObject
		data
		convert
		arrayToJSON
		arrayToJSONForSingleResultSet
		arrayToSimple
		arrayToSimpleForSingleResultSet
		objectToArray
		objectToArrayForSingleResultSet
		objectToSimple
		objectToSimpleForSingleResultSet
		simpleToArray
		simpleToJSON
		datasetPostProcessing
		dataFields
		populateDefaultPropertyValues
		lookups
		handleData
		listeners
		execute
		main
		manipulateData
		requestData
		setData
		setDefaultValuesForMissingProperties
		main
		entryPoint
		events
		data
		onInitialize
		onConnectionOpen
		onRequestSent
		onDataReceiving
		onDataReceived
		onReady
		onError
		forms
		addSchema
		createDatasetForm
		parameters
		set
		getPostedValueByName
		setPostedValueByName
		validate
		byDataType
		byEval
		byLookup
		byRegExp
		bySkipsAndTriggers
		generateErrorObjectFromValidatorObject

		-- Open.forms.parameters objects --
		byDataType
		byEval
		byLookup
		byRegExp
		bySkipsAndTriggers
		generateErrorObjectFromValidatorObject
		prepareForSubmission
		test
		getDataSet
		getParameterObjectByName
		ifExists (use: Open.store.ifExists)
		isArray
		listeners
		add
		execute
		remove
		newID
		objectToString
		purgeDataSet (use: Open.store.purge)
		readyStateHandlers
		add
		standard
		serverRequest
		settings
		build
		defaultEntryPoint
		runAtServer
		runOffline
		runWithPhoneGap
		runWithIOS
		xmlHTTP
		nativeSupportDisabled
		async
		openConnectionLimit
		store
		add
		addAlias
		addSingle
		aliases
		listAliases
		listExecute
		ifExists
		purge
		purgeAll

		-- Open.store objects --
		addAlias
		clone
		convertData
		arrayToJSON
		arrayToSimple
		objectToSimple
		simpleToArray
		simpleToJSON
		toArray
		toSimple
		purge
		getDataArray
		getTrimQuerySchema
		toString
		stringToObject
		connection
		active
		create
		defaultObject
		phoneGapObject
		predifinedXMLHTTP
		clear
		set
		object
		 */
	}
	/*####################################################################################*/
	Open.settings = {}

	/*####################################################################################*/
	Open.settings.runAtServer = (typeof(window) === 'undefined' && typeof(Server) !== 'undefined');

	/*####################################################################################*/
	Open.settings.authenticationRequired = false;

	/*####################################################################################*/
	Open.settings.runWithPhoneGap = false;

	/*####################################################################################*/
	Open.settings.runOffline = false;

	/*####################################################################################*/
	Open.settings.runWithIOS = false;

	/*####################################################################################*/
	Open.settings.xmlHTTP = {};

	/*####################################################################################*/
	Open.settings.xmlHTTP.nativeSupportDisabled = false;

	/*####################################################################################*/
	Open.settings.xmlHTTP.async = true;

	/*####################################################################################*/
	Open.settings.xmlHTTP.method = 'post';

	/*####################################################################################*/
	Open.settings.xmlHTTP.timeLimitOpenConnection = 1500000;

	/*####################################################################################*/
	Open.settings.build = '1.0.0.0';

	/*####################################################################################*/
	Open.settings.simultaneousRequestCount = 2; //-N - queue is turned off
	//0 - all requests go to queue, no active connections
	//N - number simultaneous requests (N > 0)

	/*####################################################################################*/
	Open.settings.defaultEntryPoint = '/open/data.asp';

	if (typeof(sm) != 'undefined') {
		if (typeof(sm.predefs) != 'undefined') {
			if (typeof(sm.predefs.OPEN) != 'undefined') {
				Open.settings.defaultEntryPoint = (sm.predefs.OPEN.enableParallelCalls) ? '/open/data.aspx' : '/open/data.asp';
				Open.settings.simultaneousRequestCount = (isNaN(sm.predefs.OPEN.simultaneousRequestCount)) ? 2 : parseInt(sm.predefs.OPEN.simultaneousRequestCount);
			}
		}
	}

	if (typeof(document) !== 'undefined') {
		if (typeof(document.location) !== 'undefined') {
			if (typeof(document.location.href) !== 'undefined') {
				if (document.location.href.toLowerCase().indexOf('forceopenversion=1.0') !== -1) {
					Open.settings.defaultEntryPoint = '/open/data.asp';
					Open.settings.simultaneousRequestCount = 2;
				}

				if (document.location.href.toLowerCase().indexOf('forceopenversion=2.0') !== -1) {
					Open.settings.defaultEntryPoint = '/open/data.aspx';
					Open.settings.simultaneousRequestCount = 100;
				}
			}
		}
	}

	/*####################################################################################*/
	Open.settings.returnPostRequest = false;

	/*####################################################################################*/
	Open.serverRequestQueue = {}

	/*####################################################################################*/
	Open.serverRequestQueue.queue = [];

	/*####################################################################################*/
	Open.serverRequestQueue.add = function (str_post, str_alias, bool_makeRequestEvenIfInStore) {
		Open.serverRequestQueue.queue.push({
			"post": str_post,
			"alias": str_alias,
			"makeRequestEvenIfInStore": bool_makeRequestEvenIfInStore
		});

		Open.listeners.execute(str_post, 'onQueueAdd', null);

		if (str_post && str_alias && str_post !== str_alias) {
			Open.listeners.execute(str_alias, 'onQueueAdd', null);
		}
	};

	/*####################################################################################*/
	Open.serverRequestQueue.executeNext = function () {
		if (Open.serverRequestQueue.queue.length) {
			with (Open.serverRequestQueue.queue.shift()) {
				Open.serverRequest(post, alias, makeRequestEvenIfInStore);
			}
		}
	}

	/*####################################################################################*/
	Open.serverRequestQueue.remove = function (str_exec, str_alias) {
		str_exec = (typeof(str_exec) === 'undefined') ? null : str_exec;
		str_alias = (typeof(str_alias) === 'undefined') ? null : str_alias;
		for (var counter0 = Open.serverRequestQueue.queue.length - 1; counter0 > -1; counter0--) {
			if (Open.serverRequestQueue.queue[counter0].alias === str_alias || str_alias === null) {
				if (Open.serverRequestQueue.queue[counter0].post === str_exec || str_exec === null) {
					Open.serverRequestQueue.queue.splice(counter0, 1);
				}
			}
		}
	}

	/*####################################################################################*/
	Open.store = {};

	/*####################################################################################*/
	Open.store._reservedWords = {
		"_reservedWords": null,
		"aliases": null,
		"cache": null,
		"list": null,
		"add": null,
		"purge": null,
		"purgeAll": null,
		"addSingle": null,
		"ifExists": null
	};

	/*####################################################################################*/
	Open.store.aliases = {};

	/*####################################################################################*/
	Open.store.cache = {};

	/*####################################################################################*/
	Open.store.cache.schema = {};

	/*####################################################################################*/
	Open.store.cache.schema.list = {}

	/*####################################################################################*/
	Open.store.cache.schema.get = function (obj_exec) {
		if (obj_exec && obj_exec.dataset && obj_exec.dataset.datasetname) {
			return Open.store.cache.schema.list[obj_exec.dataset.datasetname.toLowerCase()];
		}
	}

	/*####################################################################################*/
	Open.store.cache.schema.checkIfExists = function (obj_exec) {
		if (obj_exec.dataset && obj_exec.dataset.datasetname) {
			return (typeof(Open.store.cache.schema.list[obj_exec.dataset.datasetname.toLowerCase()]) !== 'undefined');
		}
		return false;
	}

	/*####################################################################################*/
	Open.store.cache.schema.addForced = function (obj_dataset) {
		Open.store.cache.schema.list[obj_dataset.dataset.schema.manifest.datasetname.toLowerCase()] = Open.cloneObject(obj_dataset.dataset.schema);
		return true;
	}

	/*####################################################################################*/
	Open.store.cache.schema.add = function (obj_dataset) {
		if (typeof(obj_dataset.dataset) !== 'undefined' && typeof(obj_dataset.dataset.schema) !== 'undefined') {
			if (obj_dataset.dataset.schema.manifest.dbsqltype.toLowerCase() !== 'p'
				 || typeof(obj_dataset.dataset.schema.manifest.datafieldsmode) === 'undefined'
				 || obj_dataset.dataset.schema.manifest.datafieldsmode.toLowerCase() !== 'a') {

				if (typeof(obj_dataset.dataset.schema.manifest.hasoutputparameters) === 'undefined'
					 || !obj_dataset.dataset.schema.manifest.hasoutputparameters) {

					Open.store.cache.schema.addForced(obj_dataset);
					return true;
				}
			}
		}
		return false;
	}

	/*####################################################################################*/
	Open.store.list = function () {
		var arr_str_result = [];
		for (var temp0 in Open.store) {
			if (typeof(Open.store._reservedWords[temp0]) === 'undefined') {
				arr_str_result.push(temp0);
			}
		}

		return arr_str_result;
	}

	/*####################################################################################*/
	Open.store.aliases.listAliases = {};

	/*####################################################################################*/
	Open.store.aliases.listExecute = {};

	/*####################################################################################*/
	Open.store.aliases.add = function (str_alias, str_execute) {
		if (str_alias && str_execute && Open.store.aliases.listAliases[str_alias] !== str_execute && str_alias !== str_execute) {
			Open.store.aliases.remove(str_alias);

			if (!Open.isArray(Open.store.aliases.listExecute[str_execute])) {
				Open.store.aliases.listExecute[str_execute] = [];
			}

			Open.store.aliases.listExecute[str_execute].push(str_alias);
			Open.store.aliases.listAliases[str_alias] = str_execute;

			if (Open.ifExists(str_execute)) {
				Open.store[str_alias] = Open.store[str_execute];

				if (typeof(setTimeout) !== 'undefined') {
					setTimeout('Open.listeners.execute(unescape("' + escape(str_alias) + '"), "onReady", null)', 0);
				} else {
					Open.listeners.execute(str_alias, 'onReady', null);
				}
			}
		}
	}

	/*####################################################################################*/
	Open.store.aliases.remove = function (str_alias) {
		if (typeof(Open.store.aliases.listAliases[str_alias]) !== 'undefined') {
			var temp0 = Open.store.aliases.listExecute[Open.store.aliases.listAliases[str_alias]];
			for (var counter0 = 0; counter0 < temp0.length; counter0++) {
				if (temp0[counter0] === str_alias) {
					temp0.splice(counter0, 1);
					break;
				}
			}

			delete (Open.store.aliases.listAliases[str_alias]);
		}
	}

	/*####################################################################################*/
	Open.events = {};

	/*####################################################################################*/
	Open.events.data = {};

	/*####################################################################################*/
	Open.events.data.onInitialize = function () {}

	/*####################################################################################*/
	Open.events.data.onConnectionOpen = function () {}

	/*####################################################################################*/
	Open.events.data.onRequestSent = function () {}

	/*####################################################################################*/
	Open.events.data.onDataReceiving = function () {}

	/*####################################################################################*/
	Open.events.data.onDataReceived = function () {}

	/*####################################################################################*/
	Open.events.data.onReady = function () {}

	/*####################################################################################*/
	Open.events.data.onError = function () {}

	/*####################################################################################*/
	Open.entryPoint = 'open';

	/*####################################################################################*/
	Open.connection = {};

	/*####################################################################################*/
	Open.connection.active = {};

	/*####################################################################################*/
	Open.connection.active.length = 0;

	/*####################################################################################*/
	Open.getDataSet = function (str_datasetName) {
		if (typeof(Open.store[str_datasetName]) !== 'undefined') {
			return Open.store[str_datasetName];
		} else {
			return;
		}
	}

	/*####################################################################################*/
	Open.ifExists = function (str_dataset) {
		return Open.store.ifExists(str_dataset);
	}

	/*####################################################################################*/
	Open.purgeDataSet = function (str_dataset) {
		return Open.store.purge(str_dataset);
	}

	/*####################################################################################*/
	Open.listeners = {};

	/*####################################################################################*/
	Open.listeners._default = {};

	/*####################################################################################*/
	Open.listeners._default.before = {};

	/*####################################################################################*/
	Open.listeners._default.before.queue = [];

	/*####################################################################################*/
	Open.listeners._default.before.add = function (obj_function, str_eventType) {
		if (typeof(str_eventType) === 'undefined') {
			str_eventType = 'onReady';
		}

		str_eventType = str_eventType.toLowerCase();

		if (typeof(Open.listeners._default.before.queue[str_eventType]) === 'undefined' || !Open.isArray(Open.listeners._default.before.queue[str_eventType])) {
			Open.listeners._default.before.queue[str_eventType] = [];
		}

		Open.listeners._default.before.queue[str_eventType].push(obj_function);
	}
	/*####################################################################################*/
	Open.listeners._default.before.remove = function (obj_function, str_eventType) {
		var temp1,
		temp2
		if (typeof(str_eventType) === 'undefined') {
			str_eventType = 'onReady';
		}

		if (str_eventType) {
			str_eventType = str_eventType.toLowerCase();
		}

		if (str_eventType === null) {
			if (obj_function === null) {
				Open.listeners._default.before.queue = [];
			} else {
				for (temp2 in Open.listeners._default.before.queue[temp1]) {
					if (obj_function === Open.listeners._default.before.queue[temp1][temp2]) {
						delete (Open.listeners._default.before.queue[temp1][temp2]);
					}
				}
			}
		} else {
			if (obj_function === null) {
				Open.listeners._default.before.queue[str_eventType] = {};
			} else {
				for (temp2 in Open.listeners._default.before.queue[str_eventType]) {
					if (obj_function === Open.listeners._default.before.queue[str_eventType][temp2]) {
						delete (Open.listeners._default.before.queue[str_eventType][temp2]);
					}
				}
			}
		}
	}
	/*####################################################################################*/
	Open.listeners._default.after = {};

	/*####################################################################################*/
	Open.listeners._default.after.queue = [];

	/*####################################################################################*/
	Open.listeners._default.after.add = function (obj_function, str_eventType) {
		if (typeof(str_eventType) === 'undefined') {
			str_eventType = 'onReady';
		}

		str_eventType = str_eventType.toLowerCase();

		if (typeof(Open.listeners._default.after.queue[str_eventType]) === 'undefined' || !Open.isArray(Open.listeners._default.after.queue[str_eventType])) {
			Open.listeners._default.after.queue[str_eventType] = [];
		}

		Open.listeners._default.after.queue[str_eventType].push(obj_function);
	}
	/*####################################################################################*/
	Open.listeners._default.after.remove = function (obj_function, str_eventType) {
		var temp1,
		temp2
		if (typeof(str_eventType) === 'undefined') {
			str_eventType = 'onReady';
		}

		if (str_eventType) {
			str_eventType = str_eventType.toLowerCase();
		}

		if (str_eventType === null) {
			if (obj_function === null) {
				Open.listeners._default.after.queue = [];
			} else {
				for (temp2 in Open.listeners._default.after.queue[temp1]) {
					if (obj_function === Open.listeners._default.after.queue[temp1][temp2]) {
						delete (Open.listeners._default.after.queue[temp1][temp2]);
					}
				}
			}
		} else {
			if (obj_function === null) {
				Open.listeners._default.after.queue[str_eventType] = {};
			} else {
				for (temp2 in Open.listeners._default.after.queue[str_eventType]) {
					if (obj_function === Open.listeners._default.after.queue[str_eventType][temp2]) {
						delete (Open.listeners._default.after.queue[str_eventType][temp2]);
					}
				}
			}
		}
	}

	/*####################################################################################*/
	Open.listeners.add = function (str_value, obj_function, str_eventType) {
		var temp0 = Open.stringToObject(str_value);
		if (typeof(str_eventType) === 'undefined') {
			str_eventType = 'onReady';
		}

		str_eventType = str_eventType.toLowerCase();

		if (typeof(temp0) === 'object' && temp0 !== null) {
			str_value = Open.objectToString(temp0);
		}

		if (typeof(Open.listeners[str_value]) === 'undefined') {
			Open.listeners[str_value] = {};
		}

		if (typeof(Open.listeners[str_value][str_eventType]) === 'undefined' || !Open.isArray(Open.listeners[str_value][str_eventType])) {
			Open.listeners[str_value][str_eventType] = [];
		}

		Open.listeners[str_value][str_eventType].push(obj_function);

		if (Open.ifExists(str_value) && str_eventType === 'onready') {
			obj_function(str_value);
		}
	}
	/*####################################################################################*/
	Open.listeners.remove = function (str_value, obj_function, str_eventType) {
		var temp0 = Open.stringToObject(str_value);
		var temp1,
		temp2
		if (typeof(str_eventType) === 'undefined') {
			str_eventType = 'onReady';
		}
		if (str_eventType) {
			str_eventType = str_eventType.toLowerCase();
		}

		if (typeof(temp0) === 'object' && temp0 !== null) {
			str_value = Open.objectToString(temp0);
		}

		if (typeof(Open.listeners[str_value]) !== 'undefined') {
			if (str_eventType === null) {
				if (obj_function === null) {
					for (var i in Open.listeners[str_value]) {
						Open.listeners[str_value][i] = [];
					}
				} else {
					for (temp1 in Open.listeners[str_value]) {
						for (temp2 in Open.listeners[str_value][temp1]) {
							if (obj_function === Open.listeners[str_value][temp1][temp2]) {
								delete (Open.listeners[str_value][temp1][temp2]);
							}
						}
					}
				}
			} else {
				if (obj_function === null) {
					Open.listeners[str_value][str_eventType] = {};
				} else {
					for (temp2 in Open.listeners[str_value][str_eventType]) {
						if (obj_function === Open.listeners[str_value][str_eventType][temp2]) {
							delete (Open.listeners[str_value][str_eventType][temp2]);
						}
					}
				}
			}
		}
	}
	/*####################################################################################*/
	Open.listeners.execute = function (str_datasetName, str_eventType, obj_xmlHTTP) {
		if (typeof str_eventType === 'undefined') {
			str_eventType = 'onReady';
		}
	
	
		str_eventType = str_eventType.toLowerCase();

		Open.serverRequest.status.set(str_datasetName, str_eventType);

		Open.listeners._default.after.queue

		if (Open.isArray(Open.listeners._default.before.queue[str_eventType])) {
			for (var counter = 0; counter < Open.listeners._default.before.queue[str_eventType].length; counter++) {
				if (typeof(Open.listeners._default.before.queue[str_eventType][counter]) === 'function') {
					try {
						Open.listeners._default.before.queue[str_eventType][counter](str_datasetName);					
					} catch (e) {
						if (Open.settings.runAtServer) {							
							eval('Session("errorHandlerErrorAdditionalInfo") = Open.objectToString(e) + "<br /><br /><br />" + Open.listeners._default.before.queue[str_datasetName][str_eventType][counter].toString();Server.Execute("/open/errorHandler.asp")');//use eval because Session() = in modern browsers is not valid code;
						} else {
							errorHandlerErrorAdditionalInfo = Open.listeners._default.before.queue[str_eventType][counter].toString();
							//console.error(e);
							//throw (Open.objectToString(e));
							throw e;
						}
					}
				}
			}
		}

		if (typeof(Open.listeners[str_datasetName]) !== 'undefined') {
			if (Open.isArray(Open.listeners[str_datasetName][str_eventType])) {
				for (var counter = 0; counter < Open.listeners[str_datasetName][str_eventType].length; counter++) {
					if (typeof(Open.listeners[str_datasetName][str_eventType][counter]) === 'function') {
						try {
							Open.listeners[str_datasetName][str_eventType][counter](str_datasetName);
						} catch (e) {
							if (Open.settings.runAtServer) {
								eval('Session("errorHandlerErrorAdditionalInfo") = Open.objectToString(e) + "<br /><br /><br />" + Open.listeners[str_datasetName][str_eventType][counter].toString();Server.Execute("/open/errorHandler.asp")');//use eval because Session() = in modern browsers is not valid code;
							} else {
								errorHandlerErrorAdditionalInfo = Open.listeners[str_datasetName][str_eventType][counter].toString();
								//console.error(e);
								//throw (Open.objectToString(e));
								throw e;
							}
						}
					}
				}
			}
		}

		if (Open.isArray(Open.store.aliases.listExecute[str_datasetName])) {
			for (var counter0 = 0; counter0 < Open.store.aliases.listExecute[str_datasetName].length; counter0++) {
				Open.listeners.execute(Open.store.aliases.listExecute[str_datasetName][counter0], str_eventType, obj_xmlHTTP);
			}
		}

		if (Open.isArray(Open.listeners._default.after.queue[str_eventType])) {
			for (var counter = 0; counter < Open.listeners._default.after.queue[str_eventType].length; counter++) {
				if (typeof(Open.listeners._default.after.queue[str_eventType][counter]) === 'function') {
					try {
						Open.listeners._default.after.queue[str_eventType][counter](str_datasetName);						
					} catch (e) {
						if (Open.settings.runAtServer) {
							eval('Session("errorHandlerErrorAdditionalInfo") = Open.objectToString(e) + "<br /><br /><br />" + Open.listeners._default.after.queue[str_eventType][counter].toString();Server.Execute("/open/errorHandler.asp");');//use eval because Session() = in modern browsers is not valid code;
						} else {
							errorHandlerErrorAdditionalInfo = Open.listeners._default.after.queue[str_eventType][counter].toString();
							//console.error(e);
							//throw (Open.objectToString(e));
							throw e;
						}
					}
				}
			}
		}
	}

	/*####################################################################################*/
	Open.addListener = function (str_value, obj_function, str_eventType) {
		Open.listeners.add(str_value, obj_function, str_eventType);
	}

	/*####################################################################################*/
	Open.addReadyStateHandler = function (str_value, obj_function) {
		Open.readyStateHandlers.add(str_value, obj_function);
	}

	/*####################################################################################*/
	Open.readyStateHandlers = new Object();

	/*####################################################################################*/
	Open.readyStateHandlers.add = function (str_value, obj_function) {
		if (typeof(Open.readyStateHandlers[str_value]) === 'undefined') {
			Open.readyStateHandlers[str_value] = [];
		}

		Open.readyStateHandlers[str_value].unshift(obj_function);
	}

	/*####################################################################################*/
	Open.serverRequest = function (str_exec, str_alias, bool_makeRequestEvenIfInStore) {
		var temp0,
		temp1;
		if (typeof(str_exec) === 'undefined') {
			str_exec = null;
		}

		if (typeof(str_alias) === 'undefined') {
			str_alias = str_exec;
		}

		if (typeof(bool_makeRequestEvenIfInStore) === 'undefined') {
			bool_makeRequestEvenIfInStore = false;
		}

		if (Open.settings.xmlHTTP.async) {
			if (Open.settings.simultaneousRequestCount >= 0 && Open.connection.active.length >= Open.settings.simultaneousRequestCount) {
				Open.serverRequestQueue.add(str_exec, str_alias, bool_makeRequestEvenIfInStore)
				return;
			}
		}

		var obj_exec = Open.stringToObject(str_exec);
		var str_execInSimple;
		var str_entryPoint = Open.settings.defaultEntryPoint;
		var str_entryPointTemp;

		if (Open.entryPoint.toLowerCase() !== 'open') {
			str_entryPoint = Open.entryPoint.replace(/^http+(s*)/, "https");
		} else {
			if (Open.settings.runAtServer) {
				str_entryPoint = 'https://' + Request.ServerVariables('HTTP_HOST') + str_entryPoint;
			}
		}

		if (typeof(obj_exec) !== 'object' || obj_exec == null) {
			Open.store[str_exec] = {
				"error": {
					"errorId": -1,
					"message": "Incorrect post"
				}
			}

			Open.listeners.execute(str_exec, 'onError', null);
			Open.serverRequestQueue.executeNext();
			return;
		}

		str_exec = Open.normalizeExecutionString(str_exec);

		Open.store.aliases.add(str_alias, str_exec);

		if (typeof(Open.connection.active[str_exec]) !== 'undefined') {
			return true;
		}

		if (bool_makeRequestEvenIfInStore !== true) {
			if (Open.ifExists(str_exec)) {
				Open.serverRequestQueue.executeNext();
				return true;
			}
		}

		Open.connection.active[str_exec] = Open.connection.createObject(str_exec);
		Open.connection.active.length++;
		Open.listeners.execute(str_exec, 'onInitialize', Open.connection.active[str_exec]);

		if (typeof(Open.readyStateHandlers[str_exec]) !== 'undefined') {
			for (var counter0 = (Open.readyStateHandlers[str_exec].length - 1); counter0 > -1; counter0--) {
				if (Open.readyStateHandlers[str_exec][counter0] === Open.readyStateHandlers.standard) {
					Open.readyStateHandlers[str_exec].splice(counter0, 1);
				}
			}
		}

		temp1 = {
			"removedefaults": true,
			"blankrowsetremoveschemadata": false
		};

		if (obj_exec.dataset && obj_exec.dataset.schemacompression) {
			for (temp0 in obj_exec.dataset.schemacompression) {
				if (typeof(temp1[temp0]) !== 'undefined') {
					temp1[temp0] = obj_exec.dataset.schemacompression[temp0];
				}
			}

			obj_exec.dataset.schemacompression = Open.cloneObject(temp1);
		}

		if (obj_exec.action && obj_exec.dataset) {
			if (obj_exec.action.toLowerCase() === 'getdata') {
				obj_exec.action = 'exec';
			}

			if (typeof(obj_exec.JSONPath) === 'undefined' && obj_exec.action !== null && (obj_exec.action.toLowerCase() === 'exec' || obj_exec.action.toLowerCase() === 'execute')) {
				// TODO: EY - discuss this if statement with ZTomov
				// if (typeof(obj_exec.dataset.dataformat) === "undefined") {
					obj_exec.dataset.dataformat = 'simple';
				// }

				if (Open.store.cache.schema.checkIfExists(obj_exec)) {
					obj_exec.action = 'getdata';
				}

				if (typeof(obj_exec.dataset.datafieldproperties) === 'undefined') {
					obj_exec.dataset.datafieldproperties = {
						"columns": ["name"]
					};
				} else {
					if (typeof(obj_exec.dataset.datafieldproperties.columns) === 'undefined') {
						obj_exec.dataset.datafieldproperties.columns = ["name"];
					} else {
						if (obj_exec.dataset.datafieldproperties.columns.length > 0 && (',' + obj_exec.dataset.datafieldproperties.columns.join(',') + ',').indexOf(',name,') === -1) {
							obj_exec.dataset.datafieldproperties.columns.push('name');
						}
					}
				}
			}
		}

		if (Open.settings.returnPostRequest && obj_exec.dataset) {
			obj_exec.dataset.returnpostrequest = true;
		}

		str_execInSimple = Open.objectToString(obj_exec);

		Open.readyStateHandlers.add(str_exec, Open.readyStateHandlers.standard);

		/***** BUG FIX: IE 6 *****/
		/*eval('Open.connection.active[unescape("' + escape(str_exec) + '")].onreadystatechange = function () { ' +
		' var str_exec = unescape("' + escape(str_exec) + '"); ' +
		' var str_postedData = unescape("' + escape(str_execInSimple) + '");' +
		' for (var counter = 0; counter < Open.readyStateHandlers[str_exec].length; counter++) { ' +
		' 	Open.readyStateHandlers[str_exec][counter](this, str_exec, str_postedData);' +
		' };' +
		' if (this.readyState === 4) {' +
		((this.settings.runAtServer) ? '' : ' 	delete (Open.connection.active[str_exec]);Open.connection.active.length--;') +
		'	Open.serverRequestQueue.executeNext();' +
		' }; ' +
		' };');*/

		Open.connection.active[str_exec].onreadystatechange = new Function('var str_exec = unescape("' + escape(str_exec) + '"); ' +
				' var bool_isAborted = false; var str_postedData = unescape("' + escape(str_execInSimple) + '");' +
				' for (var counter = 0; counter < Open.readyStateHandlers[str_exec].length; counter++) { ' +
				' 	Open.readyStateHandlers[str_exec][counter](this, str_exec, str_postedData);' +
				' };' +
				'   if (this.readyState === 4) {' +
				' 	bool_isAborted = (!!Open.connection.active[str_exec].aborted);' +
				' 	delete (Open.connection.active[str_exec]);' +
				' 	Open.connection.active.length--;' +
				'	if (bool_isAborted) {' +
				'		setTimeout("Open.serverRequestQueue.executeNext();", 250);' +
				'	}' +
				'	else {' +
				'		Open.serverRequestQueue.executeNext();' +
				'	}' +
				' }; ');

		//((this.settings.runAtServer) ? '' : ' 	delete (Open.connection.active[str_exec]);Open.connection.active.length--;') +

		if (!Open.settings.runWithIOS && !Open.settings.runWithPhoneGap && Open.settings.runAtServer && Open.entryPoint === 'open') {
			str_execInSimple = escape(str_execInSimple);
		} else {
			str_execInSimple = encodeURIComponent(str_execInSimple);
		}

		str_entryPointTemp = str_entryPoint;

		if (Open.settings.xmlHTTP.method.toLowerCase() === 'get') {
			str_entryPointTemp += ((str_entryPoint.indexOf('?') === -1) ? '?' : '&') + 'post=' + str_execInSimple;

			if (Open.settings.authenticationRequired) {
				str_entryPointTemp += '&authenticationRequired=1';
			}
		}
		
		var useApi = false;
		if(Open.settings.isAsyncQueryApiEnabled){
			if(!Open.settings.XXAccessToken){
				Open.settings.isAsyncQueryApiEnabled = false;
			}
			else{
				if(Open.isDatasetWhiteListed(obj_exec.dataset.datasetname)) {
					useApi = true;
					str_entryPointTemp = Open.settings.apiEntryPoint;
					
				}
			}
			
		}
		
		Open.connection.active[str_exec].open(Open.settings.xmlHTTP.method, str_entryPointTemp, Open.settings.xmlHTTP.async);

		Open.connection.active[str_exec].setRequestHeader('CharSet', 'UTF-8');
		Open.connection.active[str_exec].setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		
		if(useApi) {
			Open.connection.active[str_exec].setRequestHeader('Authorization', 'Bearer ' + Open.settings.XXAccessToken);
		}
		
		Open.connection.active[str_exec].send((Open.settings.xmlHTTP.method.toLowerCase() === 'get') ? void(0) : 'post=' + str_execInSimple + (Open.settings.authenticationRequired ? '&authenticationRequired=1' : ''));
	}

	/*####################################################################################*/
	Open.serverRequest.abort = function (str_exec, str_alias) {
		if (str_exec !== null && Open.connection.active[str_exec]) {
			Open.connection.active[str_exec].abort();
		}

		Open.serverRequestQueue.remove(str_exec, str_alias);
	}

	/*####################################################################################*/
	Open.serverRequest.abortAll = function () {
		if (Open.connection.active.length > 0) {
			for (var temp0 in Open.connection.active) {
				if (temp0 !== 'length') {
					Open.connection.active[temp0].abort();
				}
			}
		}
	}

	/*####################################################################################*/
	Open.serverRequest.status = {};

	/*####################################################################################*/
	Open.serverRequest.status.statuses = {}

	/*####################################################################################*/
	Open.serverRequest.status.get = function (str_datasetName) {
		return Open.serverRequest.status.statuses[str_datasetName];
	}

	/*####################################################################################*/
	Open.serverRequest.status.set = function (str_datasetName, str_status) {
		return Open.serverRequest.status.statuses[str_datasetName] = str_status;
	}

	/*####################################################################################*/
	Open.serverRequestQueue.removeAll = function () {
		delete (Open.serverRequestQueue.queue);
		Open.serverRequestQueue.queue = [];
	}

	/*####################################################################################*/
	Open.readyStateHandlers.standard = function (obj_xmlHttp, str_dataSetName, str_postedData) {
		var obj_result,
		temp;

		switch (obj_xmlHttp.readyState) {
		case 1:
			Open.listeners.execute(str_dataSetName, 'onConnectionOpen', obj_xmlHttp);
			break;
		case 2:
			Open.listeners.execute(str_dataSetName, 'onRequestSent', obj_xmlHttp);
			if (typeof(obj_xmlHttp.timerLimitOpenConnection) !== 'undefined') {
				clearTimeout(obj_xmlHttp.timerLimitOpenConnection);
				delete (obj_xmlHttp.timerLimitOpenConnection);
			}
			break;
		case 3:
			Open.listeners.execute(str_dataSetName, 'onDataReceiving', obj_xmlHttp);
			//obj_xmlHttp.responseText.length;
			//obj_xmlHttp.getResponseHeader("Content-Length");
			break;
		case 4: {
				if (obj_xmlHttp.aborted) {
					Open.listeners.execute(str_dataSetName, 'onAbort', obj_xmlHttp);
					return;
				}

				if (obj_xmlHttp.status !== 200) {
					Open.store[str_dataSetName] = {
						"error": {
							"errorId": obj_xmlHttp.status,
							"message": obj_xmlHttp.statusText
						}
					}

					Open.listeners.execute(str_dataSetName, 'onError', obj_xmlHttp);
					return;
				}

				if (obj_xmlHttp.responseText !== '') {
					obj_result = Open.stringToObject(obj_xmlHttp.responseText);
					if (obj_result === null || obj_xmlHttp.responseText === '{}') {
						Open.store[str_dataSetName] = {
							"error": {
								"errorId": -2,
								"message": "Error in result object"
							}
						}
						obj_result = null;
						Open.listeners.execute(str_dataSetName, 'onError', obj_xmlHttp);
						return;
					}
				}

				if (typeof(obj_result) === 'object' && obj_result !== null && obj_xmlHttp.responseText !== '{}') {
					Open.listeners.execute(str_dataSetName, 'onDataReceived', obj_xmlHttp);

					if (typeof(obj_result.updategram) === 'undefined') {
						if ((obj_xmlHttp.responseText !== '')) {
							if (Open.store.cache.schema.checkIfExists(Open.stringToObject(str_dataSetName)) && typeof(obj_result.dataset.schema) === 'undefined') {
								obj_result.dataset.schema = Open.store.cache.schema.get(Open.stringToObject(str_dataSetName));
								if (Open.stringToObject(str_dataSetName).dataset.returnpostrequest) {
									obj_result.dataset.schema.manifest.meta.request = str_dataSetName;
								}
							}

							Open.store.add(str_dataSetName, obj_result, str_postedData);
							Open.store.cache.schema.add(obj_result);
						} else {
							Open.store.add(str_dataSetName, null, str_postedData);
						}

						Open.datasetPostProcessing.main(str_dataSetName, str_postedData);
					} else {
						Open.store.addSingle(str_dataSetName, obj_result, str_postedData);
					}
				}

				if (typeof(setTimeout) !== 'undefined') {
					setTimeout('Open.listeners.execute(unescape("' + escape(str_dataSetName) + '"), "onReady", null)', 0);
				} else {
					Open.listeners.execute(str_dataSetName, 'onReady', obj_xmlHttp);
				}
			}
		}
	};

	/*####################################################################################*/
	Open.objectToString = function (obj_temp, bool_formattedResult) {
		var str_result = [];
		var regExp1 = /(\"|\\|\n|\t|\r|\u2029|\u2028|\u0000)/
			//var regExp2 = /(\"|\\|\n|\t|\r|\u2029|\u2028|\u0000)/gim
			var arr_obj_objectPassed = [];
		var int_ident = 1;

		if (typeof(obj_temp) === 'undefined') {
			return;
		}

		function internalFunction(obj_temp2) {
			if (obj_temp2 === null) {
				str_result.push('null');
				return;
			}

			var temp;
			var str_leadingTabulators = '';

			temp = typeof(obj_temp2);

			switch (temp) {
			case 'undefined':
				str_result.push('void(0)');
				break;
			case 'number':
			case 'boolean':
				str_result.push(obj_temp2.toString());
				break;
			case 'function':
				str_result.push(obj_temp2.toString().replace('[native code]', ''));
				break;
			case 'string':
				str_result.push('"', (regExp1.test(obj_temp2)) ? obj_temp2.replace(/(\"|\\)/gim, '\\$1').replace(/\n/gim, '\\n').replace(/\r/gim, '\\r').replace(/\t/gim, '\\t').replace(/\u2029/gim, '\\u2029').replace(/\u2028/gim, '\\u2028').replace(/\u0000/gim, '\\u0000') : obj_temp2, '"');
				break;
			case 'object':
				for (var counter0 = 0; counter0 < arr_obj_objectPassed.length; counter0++) {
					if (arr_obj_objectPassed[counter0] === obj_temp2) {
						str_result.push('null');
						return;
					}
				}

				if (bool_formattedResult) {
					str_leadingTabulators = (new Array(int_ident + 1)).join(String.fromCharCode(29))
					int_ident++;
				}

				if (Open.isArray(obj_temp2)) {
					str_result.push('[');

					for (var counter = 0; counter < obj_temp2.length; counter++) {
						if (counter) {
							str_result.push(',');
						}

						if (bool_formattedResult) {
							str_result.push('\n' + str_leadingTabulators.slice(0, str_leadingTabulators.length - 1));
						}

						arr_obj_objectPassed.push(obj_temp2);
						internalFunction(obj_temp2[counter]);
						arr_obj_objectPassed.pop()
					}

					if (bool_formattedResult) {
						str_result.push('\n', str_leadingTabulators.slice(0, str_leadingTabulators.length - 1));
					}

					str_result.push(']');
				} else {
					str_result.push('{');

					var counter0 = 0;
					try {
						for (temp in obj_temp2) {
							if (counter0++) {
								str_result.push(',');
							}

							if (bool_formattedResult) {
								str_result.push('\n', str_leadingTabulators);
							}

							str_result.push('"', (regExp1.test(temp) ? temp.replace(/(\"|\\)/gim, '\\$1').replace(/\n/gim, '\\n').replace(/\r/gim, '\\r').replace(/\t/gim, '\\t').replace(/\u2029/gim, '\\u2029').replace(/\u2028/gim, '\\u2028').replace(/\u0000/gim, '\\u0000') : temp), '":');

							try {
								typeof(obj_temp2[temp]);
								obj_temp2[temp];
							} catch (e) {
								str_result.push('null');
								continue;
							}

							if (typeof(obj_temp2[temp]) === 'string') {
								str_result.push('"', (regExp1.test(obj_temp2[temp]) ? obj_temp2[temp].replace(/(\"|\\)/gim, '\\$1').replace(/\n/gim, '\\n').replace(/\r/gim, '\\r').replace(/\t/gim, '\\t').replace(/\u2029/gim, '\\u2029').replace(/\u2028/gim, '\\u2028').replace(/\u0000/gim, '\\u0000') : obj_temp2[temp]), '"');
							} else {
								arr_obj_objectPassed.push(obj_temp2);
								internalFunction(obj_temp2[temp]);
								arr_obj_objectPassed.pop();
							}
						}
					} catch (e) {
						//	str_result.push('}');
						//	return;
					}

					if (bool_formattedResult) {
						int_ident--;
						if (counter0) {
							str_result.push('\n', str_leadingTabulators.slice(0, str_leadingTabulators.length - 1));
						}
					}

					str_result.push('}');
				}
			}
		}
		internalFunction(obj_temp);

		return str_result.join('');
	}

	/*####################################################################################*/
	Open.isArray = function (arg) {
		try {
			return Object.prototype.toString.call(arg) === '[object Array]';
		} catch (err) {
			return arg instanceof Array;
		}
	};
	/* function(obj_toTest) {
	if (obj_toTest === null || typeof (obj_toTest) === 'undefined') {
	return false;
	}
	return (obj_toTest.constructor && obj_toTest.constructor.toString().toLowerCase().indexOf('array') !== -1);
	}
	 */
	/*####################################################################################*/
	Open.data = {};

	/*####################################################################################*/
	Open.data.convert = {};

	/*####################################################################################*/
	Open.data.convert.objectToArray = function (obj_dataset) {
		var arr_result = [];
		if (obj_dataset.data.length) {
			if (Open.isArray(obj_dataset.data[counter0])) {
				for (var counter0 = 0; counter0 < obj_dataset.data.length; counter0++) {
					arr_result.push(Open.data.convert.objectToArrayForSingleResultSet(obj_dataset.schema.columns[counter0], obj_dataset.data[counter0]));
				}
			} else {
				arr_result = Open.data.convert.objectToArrayForSingleResultSet(obj_dataset.schema.columns, obj_dataset.data);
			}
		}

		obj_dataset.data = arr_result;
		return obj_dataset;
	}

	/*####################################################################################*/
	Open.data.convert.objectToArrayForSingleResultSet = function (arr_obj_columns, arr_obj_data) {
		var arr_result = [],
		temp0;

		for (var counter0 = 0; counter0 < arr_obj_data.length; counter0++) {
			temp0 = [];
			for (var counter1 = 0; counter1 < arr_obj_columns.length; counter1++) {
				temp0.push(arr_obj_data[counter0][arr_obj_columns[counter1].name]);
			}
			arr_result.push(temp0);
		}

		return arr_result;
	}

	/*####################################################################################*/
	Open.data.convert.objectToSimple = function (obj_dataset) {
		var arr_result = [];
		if (obj_dataset.data.length) {
			if (Open.isArray(obj_dataset.data[0])) {
				for (var counter0 = 0; counter0 < obj_dataset.data.length; counter0++) {
					arr_result.push(Open.data.convert.objectToSimpleForSingleResultSet(obj_dataset.schema.columns[counter0], obj_dataset.data[counter0]));
				}
			} else {
				arr_result = Open.data.convert.objectToSimpleForSingleResultSet(obj_dataset.schema.columns, obj_dataset.data);
			}
		}

		obj_dataset.data = arr_result;
		return obj_dataset;
	}

	/*####################################################################################*/
	Open.data.convert.objectToSimpleForSingleResultSet = function (arr_obj_columns, arr_obj_data) {
		var arr_result = [],
		temp0;

		for (var counter0 = 0; counter0 < arr_obj_data.length; counter0++) {
			temp0 = [];
			for (var counter1 = 0; counter1 < arr_obj_columns.length; counter1++) {
				temp0.push(((arr_obj_data[counter0][arr_obj_columns[counter1].name] == null) ? String.fromCharCode(30) : arr_obj_data[counter0][arr_obj_columns[counter1].name]));
			}
			arr_result.push(temp0.join(String.fromCharCode(31)));
		}

		return arr_result.join(String.fromCharCode(29));
	}

	/*####################################################################################*/
	Open.data.convert.arrayToJSON = function (obj_dataset) {
		if (Open.isArray(obj_dataset.data)) {
			if (obj_dataset.data.length === 0) {
				obj_dataset.data = [];
			} else {
				if (Open.isArray(obj_dataset.data[0])) {
					if (obj_dataset.schema.columns.length && Open.isArray(obj_dataset.schema.columns[0])) {
						for (var counter0 = 0; counter0 < obj_dataset.data.length; counter0++) {
							obj_dataset.data[counter0] = Open.data.convert.arrayToJSONForSingleResultSet(obj_dataset.data[counter0], obj_dataset.schema.columns[counter0]);
						}
					} else {
						obj_dataset.data = Open.data.convert.arrayToJSONForSingleResultSet(obj_dataset.data, obj_dataset.schema.columns);
					}
				}
			}
		}

		return obj_dataset;
	}

	/*####################################################################################*/
	Open.data.convert.arrayToJSONForSingleResultSet = function (arr_data, arr_columns) {
		var arr_obj_result = [],
		temp0;
		for (var counter0 = 0; counter0 < arr_data.length; counter0++) {
			temp0 = {};

			for (var counter1 = 0; counter1 < arr_data[counter0].length; counter1++) {
				temp0[arr_columns[counter1].name] = arr_data[counter0][counter1];
			}

			arr_obj_result.push(temp0);
		}

		return arr_obj_result;
	}

	/*####################################################################################*/
	Open.data.convert.arrayToSimple = function (obj_dataset) {
		if (Open.isArray(obj_dataset.data)) {
			if (obj_dataset.data.length === 0) {
				obj_dataset.data = '';
			} else {
				if (Open.isArray(obj_dataset.data)) {
					if (obj_dataset.schema.columns.length && Open.isArray(obj_dataset.schema.columns[0])) {
						for (var counter0 = 0; counter0 < obj_dataset.data.length; counter0++) {
							obj_dataset.data[counter0] = Open.data.convert.arrayToSimpleForSingleResultSet(obj_dataset.data[counter0]);
						}
					} else {
						obj_dataset.data = Open.data.convert.arrayToSimpleForSingleResultSet(obj_dataset.data);
					}
				} else {}
			}
		}

		return obj_dataset;
	}

	/*####################################################################################*/
	Open.data.convert.arrayToSimpleForSingleResultSet = function (arr_data) {
		for (var counter0 = 0; counter0 < arr_data.length; counter0++) {
			for (var counter1 = 0; counter1 < arr_data[counter0].length; counter1++) {
				if (arr_data[counter0][counter1] == null) {
					arr_data[counter0][counter1] = String.fromCharCode(30);
				}
			}

			arr_data[counter0] = arr_data[counter0].join(String.fromCharCode(31));
		}

		return arr_data.join(String.fromCharCode(29));
	}

	/*####################################################################################*/
	Open.data.convert.simpleToArray = function (obj_dataset) {
		var temp0,
		bool_multiRecordsets;
		if (Open.isArray(obj_dataset.data)) {
			bool_multiRecordsets = 1;
			temp0 = obj_dataset.data;
		} else {
			bool_multiRecordsets = 0;
			temp0 = [];
			temp0.push(obj_dataset.data);
		}

		for (var counter0 = 0; counter0 < temp0.length; counter0++) {
			temp0[counter0] = temp0[counter0].split(String.fromCharCode(29));
			for (var counter1 = 0; counter1 < temp0[counter0].length; counter1++) {
				temp0[counter0][counter1] = temp0[counter0][counter1].split(String.fromCharCode(31));
				for (var counter2 = 0; counter2 < temp0[counter0][counter1].length; counter2++) {
					if (temp0[counter0][counter1][counter2] === String.fromCharCode(30)) {
						temp0[counter0][counter1][counter2] = null;
					}
				}
			}
		}

		obj_dataset.data = ((bool_multiRecordsets) ? temp0 : temp0[0]);

		return obj_dataset;
	}

	/*####################################################################################*/
	Open.data.convert.simpleToJSON = function (obj_dataset) {
		var temp1,
		temp2,
		temp3;
		var arr_arr_obj_result = null;
		var csv_str_listNumericDataTypes = '|int|bigint|integer|smallint|tinyint|double|single|money|smallmoney|float|';
		var arr_arr_obj_data = [];
		var arr_arr_obj_column = [];

		if ((typeof(obj_dataset.data) === 'undefined') || (typeof(obj_dataset) !== 'object' || obj_dataset === null) || typeof(obj_dataset.schema) === 'undefined' || !Open.isArray(obj_dataset.schema.columns)) {
			return obj_dataset;
		}

		if (obj_dataset.data === '') {
			obj_dataset.data = [];
			return obj_dataset;
		}

		if (typeof(obj_dataset.data) === 'string' && obj_dataset.data !== '') {
			arr_arr_obj_data.push(obj_dataset.data);
			arr_arr_obj_column.push([]);

			for (var counter0 = 0; counter0 < obj_dataset.schema.columns.length; counter0++) {
				arr_arr_obj_column[0][counter0] = {
					"name": obj_dataset.schema.columns[counter0]['name'],
					"numeric": (typeof(obj_dataset.schema.columns[counter0]['datatype']) !== 'undefined' && csv_str_listNumericDataTypes.indexOf('|' + obj_dataset.schema.columns[counter0]['datatype'].toLowerCase() + '|') != -1)
				};
			}
		}

		if (Open.isArray(obj_dataset.data) && obj_dataset.data.length > 0) {
			arr_arr_obj_data = obj_dataset.data;
			for (var counter0 = 0; counter0 < obj_dataset.schema.columns.length; counter0++) {
				arr_arr_obj_column.push([]);
				for (var counter1 = 0; counter1 < obj_dataset.schema.columns[counter0].length; counter1++) {
					arr_arr_obj_column[counter0][counter1] = {
						"name": obj_dataset.schema.columns[counter0][counter1]['name'],
						"numeric": (typeof(obj_dataset.schema.columns[counter0][counter1]['datatype']) !== 'undefined' && csv_str_listNumericDataTypes.indexOf('|' + obj_dataset.schema.columns[counter0][counter1]['datatype'].toLowerCase() + '|') != -1)
					};
				}
			}
		}

		arr_arr_obj_result = [];

		for (var counter0 = 0; counter0 < arr_arr_obj_data.length; counter0++) {
			arr_arr_obj_result.push([]);

			if (arr_arr_obj_data[counter0].length > 0) {
				temp1 = arr_arr_obj_data[counter0].split(String.fromCharCode(29));
				for (var counter1 = 0; counter1 < temp1.length; counter1++) {

					temp2 = temp1[counter1].split(String.fromCharCode(31));
					arr_arr_obj_result[counter0].push({});

					for (var counter2 = 0; counter2 < temp2.length; counter2++) {
						if (arr_arr_obj_column[counter0][counter2]) {
							arr_arr_obj_result[counter0][counter1][arr_arr_obj_column[counter0][counter2].name] = ((temp2[counter2] === String.fromCharCode(30)) ? null : ((arr_arr_obj_column[counter0][counter2].numeric) ? parseFloat(temp2[counter2]) : temp2[counter2]));
						}
					}
				}
			}
		}

		if (arr_arr_obj_result != null && arr_arr_obj_result.length > 0) {
			obj_dataset.data = (arr_arr_obj_data.length === 1) ? arr_arr_obj_result[0] : arr_arr_obj_result;
		}

		return obj_dataset;
	}

	/*####################################################################################*/
	Open.stringToObject = function (str_string) {
		if (typeof(str_string) === 'undefined' || str_string === '') {
			return;
		}

		var obj_result;
		/*try {
		eval('obj_result = ' + str_string + ';');
		} catch (e) {
		obj_result = null;
		}*/

		try {
			if (false && typeof(JSON) !== 'undefined') {
				try {
					return JSON.parse(str_string)
				} catch (e) {
					//	console.log('!!!!!!!!!!!!!!!!!!"' + str_string + '"', typeof (str_string), str_string.length)
				}
			}

			return (new Function('try { ' +
					'	return ' + str_string + ';' +
					'} catch(e) {' +
					'	return null;' +
					'}'))();
		} catch (e) {
			//			console.log('ERROR:' + str_string);
			return null;
		}
		return obj_result;
	}

	/*####################################################################################*/
	Open.connection.iOSObject = function () {
		this.settings = {};
		this.settings.method = 'GET';
		this.settings.url = '';
		this.settings.parameters = null;
		this.settings.async = true;
		this.custom = {};
		this.status = 0;
		this.responseText = null;
		this.onreadystatechange = function () {}
		this.readyState = 0;
		this.object = null;
		this.aborted = false;

		this.defaultOnReadyFunction = function (str_result) {
			this.readyState = 4;
			this.status = 200;
			this.responseText = str_result;
			this.onreadystatechange();
		};

		this.open = function (str_method, str_url, bool_async) {
			this.readyState = 1;
			this.onreadystatechange();
			this.settings.method = str_method;
			this.settings.url = str_url;
			this.settings.async = bool_async;
		};

		this.setRequestHeader = function (str_name, str_value) {};
		this.getResponseHeader = function (str_name) {};

		this.send = function (str_parameters) {
			var temp0;
			this.settings.parameters = str_parameters;

			for (temp0 in Open.connection.active) {
				if (Open.connection.active[temp0] === this) {
					break;
				}
			}

			if (this.settings.method === null) {
				this.settings.method = 'GET';
			}

			if (this.settings.method.toLowerCase() === 'get') {
				httpRequestGet(this.settings.url, this.settings.parameters, OpenIOSPhoneGapFix);
			} else {
				httpRequestPOST(this.settings.url, this.settings.parameters, OpenIOSPhoneGapFix);
			}

			this.readyState = 2;
			this.onreadystatechange();
			this.readyState = 3;
			this.onreadystatechange();
		}
	}

	/*####################################################################################*/
	Open.connection.offlineRequestHandler = function () {}

	/*####################################################################################*/
	Open.connection.offlineObject = function () {
		this.settings = {};
		this.settings.method = 'GET';
		this.settings.url = '';
		this.settings.parameters = null;
		this.settings.async = true;
		this.custom = {};
		this.status = 0;
		this.responseText = null;
		this.onreadystatechange = function () {}
		this.readyState = 0;
		this.object = null;
		this.aborted = false;

		this.defaultOnReadyFunction = function (str_result) {
			this.readyState = 4;
			this.status = 200;
			this.responseText = str_result;
			this.onreadystatechange();
		};

		this.open = function (str_method, str_url, bool_async) {
			this.readyState = 1;
			this.onreadystatechange();
			this.settings.method = str_method;
			this.settings.url = str_url;
			this.settings.async = bool_async;
		};

		this.setRequestHeader = function (str_name, str_value) {};
		this.getResponseHeader = function (str_name) {};

		this.handler = function () {
			try {
				return Open.connection.offlineRequestHandler.call(this);
			} catch (e) {
				return;
			}
		}

		this.send = function (str_parameters) {
			var temp0;
			this.settings.parameters = str_parameters;

			for (temp0 in Open.connection.active) {
				if (Open.connection.active[temp0] === this) {
					break;
				}
			}

			if (this.settings.method === null) {
				this.settings.method = 'GET';
			}
			alert(2)
			str_result = this.handler();
			if (str_result === '' || typeof(str_result) === 'undefined') {
				str_result = '{}';
			}

			this.readyState = 2;
			this.onreadystatechange();
			this.readyState = 3;
			this.onreadystatechange();
			this.defaultOnReadyFunction(str_result);
		}
	}

	/*####################################################################################*/
	Open.connection.predifinedXMLHTTP = {};

	/*####################################################################################*/
	Open.connection.predifinedXMLHTTP.object = null;

	/*####################################################################################*/
	Open.connection.predifinedXMLHTTP.set = function (obj_xmlHTML) {
		Open.connection.predifinedXMLHTTP.object = obj_xmlHTML;
		Open.settings.simultaneousRequestCount = 1;
	}

	/*####################################################################################*/
	Open.connection.predifinedXMLHTTP.clear = function () {
		Open.connection.predifinedXMLHTTP.object = null;
		Open.settings.simultaneousRequestCount = 2;
	}

	/*####################################################################################*/
	Open.connection.phoneGapObject = function () {
		this.settings = {};
		this.settings.method = 'GET';
		this.settings.url = '';
		this.settings.parameters = null;
		this.settings.async = true;
		this.custom = {};
		this.status = 0;
		this.responseText = null;
		this.onreadystatechange = function () {}
		this.readyState = 0;
		this.object = null;
		this.aborted = false;

		this.defaultOnReadyFunction = function (str_result) {
			this.readyState = 4;
			this.status = 200;
			this.responseText = str_result;
			this.onreadystatechange();
		};

		this.open = function (str_method, str_url, bool_async) {
			this.readyState = 1;
			this.onreadystatechange();
			this.settings.method = str_method;
			this.settings.url = str_url;
			this.settings.async = bool_async;
		};

		this.setRequestHeader = function (str_name, str_value) {};
		this.getResponseHeader = function (str_name) {};

		this.send = function (str_parameters) {
			var temp0;
			this.settings.parameters = str_parameters;

			for (temp0 in Open.connection.active) {
				if (Open.connection.active[temp0] === this) {
					break;
				}
			}

			if (this.settings.method === null) {
				this.settings.method = 'GET';
			}

			if (this.settings.method.toLowerCase() === 'get') {
				/*eval('httpRequestGET(this.settings.url, function (str_result) { ' +
				'Open.connection.active[unescape("' + escape(temp0) + '")].defaultOnReadyFunction(str_result)' +
				'})');*/
				httpRequestGET(this.settings.url, new Function('str_result', 'Open.connection.active[unescape("' + escape(temp0) + '")].defaultOnReadyFunction(str_result);'))
			} else {
				/*eval('httpRequestPOST(this.settings.url, this.settings.parameters, function (str_result) { ' +
				'Open.connection.active[unescape("' + escape(temp0) + '")].defaultOnReadyFunction(str_result)' +
				'})');*/

				httpRequestPOST(this.settings.url, this.settings.parameters, new Function('str_result', 'Open.connection.active[unescape("' + escape(temp0) + '")].defaultOnReadyFunction(str_result);'));
			}
			this.readyState = 2;
			this.onreadystatechange();
			this.readyState = 3;
			this.onreadystatechange();
		}
	}

	/*####################################################################################*/
	Open.connection.defaultObject = function (str_exec) {
		this.execution = str_exec;
		this.settings = {};
		this.settings.method = 'GET';
		this.settings.url = '';
		this.settings.parameters = null;
		this.settings.async = true;
		this.custom = {};
		this.status = 0;
		this.responseText = null;
		this.aborted = false;
		this.resendProcess = false;

		this._onreadystatechange = function (obj_xmlhttp) {
			if (this.resendProcess) {
				return false;
			}
			var temp0;
			var arr_str_properties = ['status', 'statusText', 'readyState', 'responseText'];
			//			try {
			for (var counter0 = 0; counter0 < arr_str_properties.length; counter0++) {
				try {
					if (typeof obj_xmlhttp[arr_str_properties[counter0]] !== 'undefined') {
						this[arr_str_properties[counter0]] = obj_xmlhttp[arr_str_properties[counter0]];
					}
				} catch (e) {}
			}
			//			} catch (b) { }
			//			finally {
			this.onreadystatechange();
			//			}
		}

		this.onreadystatechange = function () {}
		this.readyState = 0;

		this.object = null;

		if (Open.settings.runAtServer) {
			if (Open.connection.predifinedXMLHTTP.object === null) {
				this.object = Server.CreateObject("MSXML2.ServerXMLHTTP.3.0");
				this.object.setTimeouts(10000, 10000, 30000, 30000);
			} else {
				this.object = Open.connection.predifinedXMLHTTP.object;
			}
		} else {
			if (window.XMLHttpRequest) {
				this.object = new XMLHttpRequest();
			} else {
				var arr_versions = [
					"Msxml2.XMLHTTP.7.0",
					"Msxml2.XMLHTTP.6.0",
					"Msxml2.XMLHTTP.5.0",
					"Msxml2.XMLHTTP.4.0",
					"MSXML2.XMLHTTP.3.0",
					"MSXML2.XMLHTTP",
					"Microsoft.XMLHTTP"
				];

				for (var counter0 = 0; counter0 < arr_versions.length; counter0++) {
					try {
						if (this.object = new ActiveXObject(arr_versions[counter0])) {
							break;
						}
					} catch (e) {}
				}
			}
		}

		if (this.object) {
			if (!Open.settings.runAtServer) {
				if (typeof(this.object.onreadystatechange) === 'unknown') {
					Open.settings.xmlHTTP.nativeSupportDisabled = true;
					this.object = new Open.connection.XmlHttpAlternative;
				}
			}
		}

		if (this.object) {
			if (!Open.settings.runAtServer) {
				this.object.onabort = function () {
					var temp0;

					for (temp0 in Open.connection.active) {
						if (Open.connection.active[temp0].object === this) {
							if (!Open.connection.active[temp0].resendProcess) {
								return false;
							}

							Open.connection.active[temp0].aborted = true;
							Open.connection.active[temp0]._onreadystatechange(this);
							break;
						}
					}
				}
			}

			this.object.onreadystatechange = function () {
				var temp0;

				for (temp0 in Open.connection.active) {
					if (Open.connection.active[temp0].object === this) {
						if (Open.connection.active[temp0].resendProcess) {
							return false;
						}

						Open.connection.active[temp0]._onreadystatechange(this);
						break;
					}
				}
			}
		}

		this.defaultOnReadyFunction = function (str_result) {
			this.onreadystatechange();
		};

		this.open = function (str_method, str_url, bool_async) {
			this.object.open(str_method, str_url, bool_async);
			this.settings.method = str_method;
			this.settings.url = str_url;
			this.settings.async = bool_async;
		};

		this.setRequestHeader = function (str_name, str_value) {
			this.object.setRequestHeader(str_name, str_value);
		};

		this.getResponseHeader = function (str_name) {
			return this.object.getResponseHeader(str_name);
		};

		this.abort = function () {
			if (!this.resendProcess) {
				this.aborted = true;
			}

			this.object.abort();
		}

		this.resend = function () {
			this.resendProcess = true;
			//			console.log('1. ' + typeof Open.connection.active[this.execution])

			this.abort();
			//			console.log('2. ' + typeof Open.connection.active[this.execution])

			this.open(this.settings.method, this.settings.url, this.settings.async);
			//			console.log('3. ' + typeof Open.connection.active[this.execution])
			Open.connection.active[str_exec].setRequestHeader('CharSet', 'UTF-8');
			Open.connection.active[str_exec].setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

			this.send(this.settings.parameters);
			//			console.log('4. ' + typeof Open.connection.active[this.execution])

			this.resendProcess = false;
		}

		this.send = function (str_parameters) {
			var temp0;
			this.settings.parameters = str_parameters;

			if (this.settings.method === null) {
				this.settings.method = 'GET';
			}

			if (this.settings.method.toLowerCase() === 'get') {
				this.object.send();
			} else {
				try {
					this.object.send(this.settings.parameters);
				} catch (e) {
					this._onreadystatechange(this.object);
					this.readyState = 4;
					this.status = 417;
					this.statusText = 'The server name or address could not be resolved'
						this.onreadystatechange();
				}
			}

			if (this.settings.async && !Open.settings.runAtServer) {
				//				this.timerLimitOpenConnection = setTimeout(new Function('', 'var temp0 = unescape("' + escape(this.execution) + '");console.log(typeof(Open.connection.active[temp0]) + typeof(Open.connection.active[temp0].resend) + temp0);if (typeof(Open.connection.active[temp0]) !== "undefined") {Open.connection.active[temp0].resend();}'), Open.settings.xmlHTTP.timeLimitOpenConnection);
			} else {
				if (this.readyState !== 4) {
					this._onreadystatechange(this.object);
				}
			}
		}
	}

	/*####################################################################################*/
	Open.connection.serverObjectForLocalUse = function (str_exec) {
		this.execution = str_exec;
		this.settings = {};
		this.settings.method = 'GET';
		this.settings.url = '';
		this.settings.parameters = null;
		this.settings.async = true;
		this.custom = {};
		this.status = 0;
		this.responseText = null;
		this.aborted = false;
		this.resendProcess = false;

		this._onreadystatechange = function (obj_xmlhttp) {
			if (this.resendProcess) {
				return false;
			}
			var temp0;
			var arr_str_properties = ['status', 'readyState', 'responseText'];
			try {
				for (var counter0 = 0; counter0 < arr_str_properties.length; counter0++) {
					try {
						if (typeof obj_xmlhttp[arr_str_properties[counter0]] !== 'undefined') {
							this[arr_str_properties[counter0]] = obj_xmlhttp[arr_str_properties[counter0]];
						}
					} catch (e) {}
				}
			} catch (b) {}
			finally {
				this.onreadystatechange();
			}
		}

		this.onreadystatechange = function () {}
		this.readyState = 0;

		this.object = null;

		this.defaultOnReadyFunction = function (str_result) {
			this.onreadystatechange();
		};

		this.open = function (str_method, str_url, bool_async) {
			this.settings.method = str_method;
			this.settings.url = str_url;
			this.settings.async = bool_async;
		};

		this.setRequestHeader = function (str_name, str_value) {};

		this.getResponseHeader = function (str_name) {};

		this.abort = function () {}

		this.resend = function () {}

		this.send = function (str_parameters) {
			var temp0,
			temp1;

			temp0 = str_parameters.split('&');

			this.object = new OpenClass;
			for (var counter0 = -1; (++counter0) < temp0.length; ) {
				temp1 = temp0[counter0].split('=');
				this.object.context.objRequest[temp1[0]] = unescape(temp1[1]);
			}

			this.status = 200;
			this.readyState = 4;
			this.responseText = Open.objectToString(this.object.init());			
			this.onreadystatechange();

			delete (this.object);
		}
	}

	/*####################################################################################*/
	/*	Open.connection.serverObject = function () {
	this.settings = {};
	this.settings.method = 'GET';
	this.settings.url = '';
	this.settings.parameters = null;
	this.settings.async = false;
	this.custom = {};
	this.status = 0;
	this.responseText = null;
	this.aborted = false;

	this._onreadystatechange = function (obj_xmlhttp) {
	var temp0;
	var arr_str_properties = ['status', 'readyState', 'responseText'];
	try {
	for (var counter0 = 0; counter0 < arr_str_properties.length; counter0++) {
	try {
	if (typeof obj_xmlhttp[arr_str_properties[counter0]] !== 'undefined') {
	this[arr_str_properties[counter0]] = obj_xmlhttp[arr_str_properties[counter0]];
	}
	}
	catch (e) { }
	}
	} catch (b) { }
	finally {
	this.onreadystatechange();
	}
	}

	this.onreadystatechange = function () { }
	this.readyState = 0;

	this.object = Server.CreateObject("MSXML2.ServerXMLHTTP.3.0");
	this.object.setTimeouts(10000, 10000, 30000, 30000);


	this.defaultOnReadyFunction = function (str_result) {
	this.onreadystatechange();
	};

	this.open = function (str_method, str_url, bool_async) {
	this.readyState = 1;
	this.onreadystatechange();
	this.settings.method = str_method;
	this.settings.url = str_url;
	this.settings.async = false;
	this.object.o
	};

	this.setRequestHeader = function (str_name, str_value) {
	};

	this.getResponseHeader = function (str_name) {
	};

	this.send = function (str_parameters) {
	this.readyState = 2;
	this.onreadystatechange();
	this.readyState = 3;
	this.onreadystatechange();

	this.settings.parameters = str_parameters;
	//			this.object.dic_request.item("post") = decodeURIComponent(str_parameters.replace(/post=/im, ''));
	this._onreadystatechange({
	"status": 200,
	"readyState": 4,
	"responseText": this.object.responseText
	});
	}
	}
	 */

	/*####################################################################################*/
	Open.connection.XmlHttpAlternative = function () {
		this.idGUID = Open.newID();
		this.readyState = 1;
		this.iframe = document.createElement('<iframe name="openConnectionIframe_"' + this.idGUID + '"></iframe>');
		this.iframe.onload = function () {}

		this.setRequestHeader = function (str_headerName, str_headerValue) {}

		this.open = function (str_method, str_url, async) {
			var obj_form = this.iframe.contentWindow.document.createElement('form');
			obj_form.method = str_method;
			obj_form.action = str_url;
			while (document.childNodes[0]) {
				this.iframe.contentWindow.document.removeChild(document.childNodes[0]);
			}

			this.iframe.contentWindow.document.appendChild(document.createElement('html'));
			this.iframe.contentWindow.document.childNodes[0].appendChild(document.createElement('body'));

			this.iframe.contentWindow.document.childNodes[0].childNodes[0].appendChild(obj_form);
		}

		this.send = function (str_post) {
			this.form.childNodes[0].value = unescape(str_post.slice(5));
			//			this.form.submit();
		}

		this.abort = function () {
			if (document.execCommand) {
				document.execCommand("Stop");
			} else {
				window.stop();
			}
		}
	}

	/*####################################################################################*/
	Open.connection.createObject = function (str_exec) {
		if (Open.settings.runWithIOS) {
			return (new Open.connection.iOSObject(str_exec));
		} else {
			if (Open.settings.runWithPhoneGap) {
				return (new Open.connection.phoneGapObject(str_exec));
			} else {
				if (Open.settings.runAtServer) {
					if (Open.entryPoint === 'open') {
						return (new Open.connection.serverObjectForLocalUse(str_exec));
					} else {
						return (new Open.connection.defaultObject(str_exec));
					}
					//					return (new Open.connection.serverObject(str_exec));
				} else {
					return (new Open.connection.defaultObject(str_exec));
				}
			}
		}
	}

	/*####################################################################################*/
	Open.mergeObjects = function (firstObject, secondObject) {
		var mergedObject = Open.cloneObject(firstObject);

		for (var prop in secondObject) {
			if (typeof(secondObject[prop]) === 'object' && secondObject[prop] !== null) {
				if (typeof(mergedObject[prop]) === 'undefined') {
					mergedObject[prop] = secondObject[prop].constructor();
				}
				if (typeof(mergedObject[prop]) === "object") {
					mergedObject[prop] = Open.mergeObjects(mergedObject[prop], secondObject[prop]);
				} else {
					mergedObject[prop] = secondObject[prop];
				}
			} else {
				mergedObject[prop] = secondObject[prop];
			}
		}

		return mergedObject;
	};

	/*####################################################################################*/
	Open.cloneObject = function (parameterObject, level) {
		var copy;

		if (typeof parameterObject !== "object" && parameterObject !== null) {
			return parameterObject;
		}

		if (typeof parameterObject === "object" && parameterObject !== null) {
			copy = parameterObject.constructor();
		}

		for (var prop in parameterObject) {
			if (typeof(parameterObject[prop]) === 'object' && parameterObject[prop] !== null) {

				if (level > 1 || typeof level == "undefined") {
					copy[prop] = parameterObject[prop].constructor();
				}

				if (level) {
					if (level == 1) {
						copy[prop] = parameterObject[prop];
					} else {
						copy[prop] = Open.cloneObject(parameterObject[prop], level - 1);
					}
				} else {
					copy[prop] = Open.cloneObject(parameterObject[prop]);
				}

			} else {
				copy[prop] = parameterObject[prop];
			}
		}

		return copy;
	};

	/*Open.cloneObject = function(obj_source) {
	var obj_result, temp0;

	if (obj_source === null) {
	return null;
	}

	if (typeof (obj_source) === 'object') {
	if (Open.isArray(obj_source)) {
	obj_result = [];
	}
	else {
	obj_result = {};
	}

	for (temp0 in obj_source) {
	if (typeof (obj_source[temp0]) === 'object' && obj_source[temp0] !== null) {
	obj_result[temp0] = Open.cloneObject(obj_source[temp0]);
	}
	else {
	obj_result[temp0] = obj_source[temp0];
	}
	}
	}
	else {
	return obj_source;
	}

	//		if (Open.objectToString(obj_source) !== Open.objectToString(obj_result)) {
	//			console.log(Open.objectToString(obj_source));
	//			console.log(Open.objectToString(obj_result));
	//		}
	return obj_result;
	}*/

	/*####################################################################################*/
	Open.store.add = function (str_datasetName, obj_result, str_post) {
		if (obj_result !== null) {
			/*			if (typeof (obj_result) !== 'undefined' && Open.isArray(obj_result) && obj_result[0].dataset) {
			for (var counter = 0; counter < obj_result.length; counter++) {
			Open.store.addSingle(obj_result[counter].dataset.schema.manifest.datasetname, obj_result[counter].dataset);
			}
			}
			else {*/
			
			//iiliev : the new api works only with JSON.
			if(Open.settings.isAsyncQueryApiEnabled){
				var obj_exec = Open.stringToObject(str_post);
				if (typeof(Open.settings.XXAccessToken) !== "undefined" && obj_exec && Open.isDatasetWhiteListed(obj_exec.dataset.datasetname)) {
					//[VNEXT-158] Filter_DateTime_CampaignsGetData not working with .net datasets because dataset.schema is null when using getdat 
					if(obj_result.dataset.schema === null){
						delete obj_result.dataset.schema;
					}
					
					
					var obj_dataset = Open.datasetPostProcessing.dataFields.populateDefaultPropertyValues(obj_result.dataset, str_post);
					// [VNEXT-168] convert all properties to string datatype when only the name is present in dataset.schema.columns
					// see ticket details for more information why this is done.
					
					if(obj_exec.dataset.datafieldproperties && obj_exec.dataset.datafieldproperties.columns && Open.isArray(obj_exec.dataset.datafieldproperties.columns) && obj_exec.dataset.datafieldproperties.columns.indexOf("datatype") === -1 ){
						
						obj_dataset = Open.covertDataValuesToString(obj_dataset)
					}
					
					// [VNEXT-160] convert column multi array to single when rowset = 1
					if(obj_dataset.schema && obj_dataset.schema.columns){
						if (obj_dataset.schema.columns.length === 1 && Open.isArray(obj_dataset.schema.columns[0])) {
							obj_dataset.schema.columns = obj_dataset.schema.columns[0];
						}
					}
					
					Open.store.addSingle(str_datasetName, obj_dataset );
					return true;
				}
			}
			
			if (obj_result.dataset) {
				Open.store.addSingle(str_datasetName, Open.data.convert.simpleToJSON(Open.datasetPostProcessing.dataFields.populateDefaultPropertyValues(obj_result.dataset, str_post)));
			} else {
				Open.store.addSingle(str_datasetName, obj_result);
			}
			//Open.store.addSingle(str_datasetName, obj_result.dataset);
			//}
			return true;
		}
		return false;
	}

	/*####################################################################################*/
	Open.store.purge = function (str_datasetName) {
		delete (Open.store[str_datasetName]);
		return true;
	}

	/*####################################################################################*/
	Open.store.purgeAll = function (str_datasetName) {
		var arr_str_datasets = Open.store.list();

		for (var counter0 = 0; counter0 < arr_str_datasets.length; counter0++) {
			if (typeof(Open.store[arr_str_datasets[counter0]]) !== 'function') {
				Open.store.purge(arr_str_datasets[counter0]);
			}
		}

		return true;
	}

	/*####################################################################################*/
	Open.store.addSingle = function (str_datasetName, obj_result) {
		Open.store[str_datasetName] = obj_result;
		//	Response.Write(str_datasetName + '<br /><br />')
		//	Response.Write('<div style="background:red;">' + Open.objectToString(Open.store['{"action":"exec","dataset":{"datasetname":"/Apps/SM/Survey/ProtoSurveyQuestionAddEditWithAnswerSet"},"parameters":[{"name":"ProtoSurveyID","value":"115"},{"name":"ProtoSurveyVersion","value":"398471AB-0D3E-4542-B43C-E32E60C7BFD4"},{"name":"ProtoQuestionID","value":null},{"name":"Text","value":"testsddas"},{"name":"HiddenComment","value":""},{"name":"ProtoCommentID","value":"1"},{"name":"AnswerVisualizationID","value":"4"},{"name":"IsNotApplicable","value":"1"},{"name":"IsAnswerRequired","value":"0"},{"name":"IsNumbered","value":"1"},{"name":"BreakAtPos","value":"0"},{"name":"IsShowSelectedAnswersOnlyOnExport","value":"0"},{"name":"CommentContentRuleID","value":"1"},{"name":"CommentRequirementRuleID","value":"1"},{"name":"AdvancedRule","value":null},{"name":"LookupDataSource","value":null},{"name":"ProtoAnswerID","value":null},{"name":"list_answerDescription","value":"dd"},{"name":"list_answerMeasure","value":""},{"name":"list_answerOrder","value":null},{"name":"answerOrderType","value":"D"},{"name":"displayAsDropdown","value":"0"},{"name":"IsMultiple","value":"0"},{"name":"ShowMeasure","value":"1"},{"name":"ForceMaxMeasure","value":null},{"name":"LimitMaxMeasure","value":null},{"name":"LimitMinMeasure","value":null},{"name":"StartingPoints","value":null},{"name":"DelimiterForAnswerDescriptions","value":","},{"name":"AnalysisQuestionCategory1","value":null},{"name":"AnalysisQuestionCategory2","value":null},{"name":"AnalysisQuestionCategory3","value":null},{"name":"IsForSpecialReport_01","value":null},{"name":"IsVisibleByExportServicePrecalc","value":null},{"name":"Position","value":"9"},{"name":"CMSNodeGUID","value":null},{"name":"CMSNodeContent","value":null},{"name":"MiscSettings","value":"[MODE:INSERT]"},{"name":"DefaultPermission","value":null},{"name":"SecurityGroups","value":null}]}'].data) + '</div>')
		//	Response.Write(Open.objectToString(Open.store[str_datasetName].data) + '<br /><br /><hr /><br /><br />')


		/* Open.store ####################################################################################*/
		/*eval('Open.store[str_datasetName].purge = function () {' +
		'var str_datasetName = unescape("' + escape(str_datasetName) + '");' +
		'Open.store.purge(str_datasetName);' +
		'};' +
		'Open.store[str_datasetName].addAlias = function (str_alias) {' +
		'var str_datasetName = unescape("' + escape(str_datasetName) + '");' +
		'return Open.store.addAlias(str_datasetName, str_alias);' +
		'};');
		 */

		Open.store[str_datasetName].purge = new Function('var str_datasetName = unescape("' + escape(str_datasetName) + '"); Open.store.purge(str_datasetName);');
		Open.store[str_datasetName].addAlias = new Function('var str_datasetName = unescape("' + escape(str_datasetName) + '"); return Open.store.addAlias(str_datasetName, str_alias);');

		Open.store[str_datasetName].convertData = {};

		Open.store[str_datasetName].convertData.simpleToJSON = function () {
			return this;
		}

		Open.store[str_datasetName].convertData.simpleToArray = function () {
			return Open.data.convert.simpleToArray(this);
		}

		Open.store[str_datasetName].convertData.arrayToSimple = function () {
			return Open.data.convert.arrayToSimple(this);
		}

		Open.store[str_datasetName].convertData.arrayToJSON = function () {
			return Open.data.convert.arrayToJSON(this);
		}

		Open.store[str_datasetName].convertData.objectToSimple = function () {
			return Open.data.convert.objectToSimple(this);
		}

		Open.store[str_datasetName].getDataArray = function () {
			var arr_data = null;
			if (this.schema.columns.length > 0) {
				if (Open.isArray(this.schema.columns[0])) {
					arr_data = this.data;
				} else {
					arr_data = [];
					arr_data.push(this.data);
				}
			}

			return arr_data;
		}

		Open.store[str_datasetName].clone = function () {
			return Open.cloneObject(this);
		}

		Open.store[str_datasetName].toString = function () {
			return Open.objectToString(this);
		}

		Open.store[str_datasetName].getTrimQuerySchema = function () {
			var csv_str_listNumericDataTypes = '|int|bigint|integer|smallint|tinyint|double|single|money|smallmoney|float|';
			var dataSchema = this.schema.columns;

			if (!Open.isArray(dataSchema[0])) {
				dataSchema = [dataSchema];
			}

			var dataType,
			columnType;
			var columnDefs = {};
			columnDefs = [];

			for (var counter0 = 0; counter0 < dataSchema.length; counter0++) {
				columnDefs[counter0] = {};

				for (var counter1 = 0; counter1 < dataSchema[counter0].length; counter1++) {

					dataType = dataSchema[counter0][counter1]['datatype'].toString();
					if (csv_str_listNumericDataTypes.indexOf('|' + dataType + '|') != -1) {
						columnDefs[counter0][dataSchema[counter0][counter1]['name']] = {
							"type": "Number"
						};
					} else {
						columnDefs[counter0][dataSchema[counter0][counter1]['name']] = {
							"type": "String"
						};
					}
				}
			}

			return ((columnDefs.length === 1) ? columnDefs[0] : columnDefs);
		}

		Open.store[str_datasetName].convertData.toSimple = function () {
			var arr_data = this.getDataArray();
			var arr_result = [];
			var obj_result;
			var temp0,
			temp1,
			temp2;
			if (arr_data == null || arr_data.length == 0) {
				return this;
			}

			for (var counter0 = 0; counter0 < arr_data.length; counter0++) {
				temp2 = [];

				for (var counter1 = 0; counter1 < arr_data[counter0].length; counter1++) {
					if (counter1 > 0) {
						temp2.push(String.fromCharCode(29));
					}

					temp1 = false;

					for (temp0 in arr_data[counter0][counter1]) {
						if (temp1) {
							temp2.push(String.fromCharCode(31));
						} else {
							temp1 = true;
						}

						temp2.push(arr_data[counter0][counter1][temp0]);
					}
				}

				arr_result.push(temp2.join(''));
			}

			if (arr_result.length == 1) {
				arr_result = arr_result[0];
			}

			temp0 = this.clone();
			temp0.data = arr_result;

			return temp0;
		}

		Open.store[str_datasetName].convertData.toArray = function () {
			var arr_data = this.getDataArray();
			var arr_result = [];
			var obj_result;
			var temp0,
			temp1,
			temp2;
			if (arr_data == null || arr_data.length == 0) {
				return this;
			}

			for (var counter0 = 0; counter0 < arr_data.length; counter0++) {
				temp2 = [];

				for (var counter1 = 0; counter1 < arr_data[counter0].length; counter1++) {
					temp1 = [];

					for (temp0 in arr_data[counter0][counter1]) {
						temp1.push(arr_data[counter0][counter1][temp0]);
					}

					temp2.push(temp1);
				}

				arr_result.push(temp2);
			}

			if (arr_result.length == 1) {
				arr_result = arr_result[0];
			}

			temp0 = this.clone();
			temp0.data = arr_result;

			return temp0;
		}

		if (Open.isArray(Open.store.aliases.listExecute[str_datasetName])) {
			for (var counter0 = 0; counter0 < Open.store.aliases.listExecute[str_datasetName].length; counter0++) {
				Open.store[Open.store.aliases.listExecute[str_datasetName][counter0]] = Open.store[str_datasetName];
			}
		}
	}

	/*####################################################################################*/
	Open.store.ifExists = function (str_dataset) {
		return (typeof(Open.store[str_dataset]) !== 'undefined');
	}

	/*####################################################################################*/
	Open.newID = function () {
		var str_source = '';

		str_source += (new Date()).getTime().toString(16);
		str_source += ((new Date()).getTimezoneOffset() + (12 * 60)).toString(16);

		for (var counter0 = 0; counter0 < 5; counter0++) {
			str_source += parseInt(Math.random().toString().slice(2)).toString(16);
		}

		return ('{' + str_source.slice(0, 8) + '-' + str_source.slice(8, 12) + '-' + str_source.slice(12, 16) + '-' + str_source.slice(16, 20) + '-' + str_source.slice(20, 32) + '}').toUpperCase();
	}
}

/* Open.datasetPostProcessing ####################################################################################*/
Open.datasetPostProcessing = {};

/*####################################################################################*/
Open.datasetPostProcessing.main = function (str_datasetName) {
	Open.datasetPostProcessing.lookups.main(str_datasetName);
}

/*####################################################################################*/
Open.datasetPostProcessing.dataFields = {}

/*####################################################################################*/
Open.datasetPostProcessing.dataFields.populateDefaultPropertyValues = function (obj_result, str_post) {
	var temp0,
	temp1,
	obj_returnedDataFieldProperties = {};
	var obj_post;

	if (typeof(obj_result) !== 'object') {
		return obj_result;
	}

	if (typeof(obj_result.schema) === 'undefined') {
		return obj_result;
	}

	if (typeof(obj_result.schema.manifest) === 'undefined') {
		return obj_result;
	}

	if (typeof(obj_result.schema.manifest.meta) === 'undefined') {
		return obj_result;
	}

	if (obj_post = Open.stringToObject(str_post)) {
		if (typeof(obj_post.dataset.datafieldproperties) !== 'undefined') {
			if (obj_post.dataset.datafieldproperties.columns) {
				obj_returnedDataFieldProperties.columns = {};

				for (var counter0 = 0; counter0 < obj_post.dataset.datafieldproperties.columns.length; counter0++) {
					obj_returnedDataFieldProperties.columns[obj_post.dataset.datafieldproperties.columns[counter0]] = true;
				}
			}

			if (obj_post.dataset.datafieldproperties.parameters) {
				obj_returnedDataFieldProperties.parameters = {};

				for (var counter0 = 0; counter0 < obj_post.dataset.datafieldproperties.parameters.length; counter0++) {
					obj_returnedDataFieldProperties.parameters[obj_post.dataset.datafieldproperties.parameters[counter0]] = true;
				}
			}
		}
	}

	if (typeof(obj_result.schema.parameters) !== 'undefined') {
		for (var counter0 = 0; counter0 < obj_result.schema.parameters.length; counter0++) {
			for (temp0 in obj_result.schema.manifest.meta) {
				if (typeof(obj_result.schema.parameters[counter0][temp0]) === 'undefined') {
					if (typeof(obj_returnedDataFieldProperties.parameters) === 'undefined' || typeof(obj_returnedDataFieldProperties.parameters[temp0]) !== 'undefined') {
						obj_result.schema.parameters[counter0][temp0] = obj_result.schema.manifest.meta[temp0];
					}
				}
			}
		}
	}

	if (typeof(obj_result.schema.columns) !== 'undefined') {
		if (obj_result.schema.columns.length) {
			if (Open.isArray(obj_result.schema.columns[0])) {
				temp1 = obj_result.schema.columns;
			} else {
				temp1 = [];
				temp1.push(obj_result.schema.columns);
			}

			for (var counter0 = 0; counter0 < temp1.length; counter0++) {
				for (var counter1 = 0; counter1 < temp1[counter0].length; counter1++) {
					for (temp0 in obj_result.schema.manifest.meta) {
						if (typeof(temp1[counter0][counter1][temp0]) === 'undefined') {
							if (typeof(obj_returnedDataFieldProperties.columns) === 'undefined' || typeof(obj_returnedDataFieldProperties.columns[temp0]) !== 'undefined') {
								temp1[counter0][counter1][temp0] = obj_result.schema.manifest.meta[temp0];
							}
						}
					}
				}
			}
		}
	}

	return obj_result;
}

/*####################################################################################*/
Open.datasetPostProcessing.lookups = {}

/*####################################################################################*/
Open.datasetPostProcessing.lookups.listeners = {};

/*####################################################################################*/
Open.datasetPostProcessing.lookups.main = function (str_datasetName) {
	Open.datasetPostProcessing.lookups.setDefaultValuesForMissingProperties(str_datasetName);
	Open.datasetPostProcessing.lookups.requestData(str_datasetName);
}
/*####################################################################################*/
Open.datasetPostProcessing.lookups.setDefaultValuesForMissingProperties = function (str_datasetName) {
	if (typeof(Open.store[str_datasetName].schema) === 'undefined') {
		return true;
	}

	if (typeof(Open.store[str_datasetName].schema.parameters) === 'undefined') {
		return true;
	}

	if (Open.store[str_datasetName].schema.parameters.length === 0) {
		return true;
	}

	for (var counter0 = 0; counter0 < Open.store[str_datasetName].schema.parameters.length; counter0++) {
		if (Open.store[str_datasetName].schema.parameters[counter0].lookup != null) {
			if (typeof(Open.store[str_datasetName].schema.parameters[counter0].lookup) === 'undefined') {
				Open.store[str_datasetName].schema.parameters[counter0].lookup = null;
			} else {
				if (typeof(Open.store[str_datasetName].schema.parameters[counter0].lookup.dataset) === 'undefined') {
					Open.store[str_datasetName].schema.parameters[counter0].lookup.dataset = null;
				}
				if (typeof(Open.store[str_datasetName].schema.parameters[counter0].lookup.id) === 'undefined') {
					Open.store[str_datasetName].schema.parameters[counter0].lookup.id = 'ID';
				}
				if (typeof(Open.store[str_datasetName].schema.parameters[counter0].lookup.columns) === 'undefined') {
					Open.store[str_datasetName].schema.parameters[counter0].lookup.columns = null;
				}
				if (typeof(Open.store[str_datasetName].schema.parameters[counter0].lookup.dataindex) === 'undefined') {
					Open.store[str_datasetName].schema.parameters[counter0].lookup.dataindex = 0;
				}
				if (typeof(Open.store[str_datasetName].schema.parameters[counter0].lookup.sortorder) === 'undefined') {
					Open.store[str_datasetName].schema.parameters[counter0].lookup.sortorder = null;
				}
				if (typeof(Open.store[str_datasetName].schema.parameters[counter0].lookup.sql) === 'undefined') {
					Open.store[str_datasetName].schema.parameters[counter0].lookup.sql = null;
				}
				if (typeof(Open.store[str_datasetName].schema.parameters[counter0].lookup.multiple) === 'undefined') {
					Open.store[str_datasetName].schema.parameters[counter0].lookup.multiple = false;
				}
				if (typeof(Open.store[str_datasetName].schema.parameters[counter0].lookup.strict) === 'undefined') {
					Open.store[str_datasetName].schema.parameters[counter0].lookup.strict = true;
				}
			}
		}
	}
}
/*####################################################################################*/
Open.datasetPostProcessing.lookups.requestData = function (str_datasetName) {
	var obj_dataset;

	if (typeof(Open.store[str_datasetName].schema) === 'undefined') {
		return true;
	}

	if (typeof(Open.store[str_datasetName].schema.parameters) === 'undefined') {
		return true;
	}

	if (Open.store[str_datasetName].schema.parameters.length === 0) {
		return true;
	}

	for (var counter0 = 0; counter0 < Open.store[str_datasetName].schema.parameters.length; counter0++) {
		if (Open.store[str_datasetName].schema.parameters[counter0].lookup != null) {
			if (Open.store[str_datasetName].schema.parameters[counter0].lookup.dataset != null) {

				//eval('obj_dataset = ' + str_datasetName);
				obj_dataset = Open.stringToObject(str_datasetName);

				if (typeof(obj_dataset.dataset) !== 'undefined') {
					if (typeof(obj_dataset.dataset.data) !== 'undefined') {
						Open.store[str_datasetName].schema.parameters[counter0].lookup.datasetResult = obj_dataset;
						Open.datasetPostProcessing.lookups.listeners.execute({
							"dataset": str_datasetName,
							"dataFieldType": "P",
							"rowsetIndex": 0,
							"dataFieldNameOrIndex": counter0
						});
						continue;
					}
				}

				if (typeof(Open.datasetPostProcessing.lookups.listeners[Open.store[str_datasetName].schema.parameters[counter0].lookup.dataset]) === 'undefined') {
					Open.datasetPostProcessing.lookups.listeners[Open.store[str_datasetName].schema.parameters[counter0].lookup.dataset] = [];
				}

				Open.datasetPostProcessing.lookups.listeners[Open.store[str_datasetName].schema.parameters[counter0].lookup.dataset].push({
					"dataset": str_datasetName,
					"dataFieldType": "P",
					"rowsetIndex": 0,
					"dataFieldNameOrIndex": counter0
				});

				Open.addListener(Open.store[str_datasetName].schema.parameters[counter0].lookup.dataset, Open.datasetPostProcessing.lookups.handleData);
				Open.serverRequest(Open.store[str_datasetName].schema.parameters[counter0].lookup.dataset);
			}
		}
	}
}

/*####################################################################################*/
Open.datasetPostProcessing.lookups.handleData = function (str_datasetName) {
	Open.datasetPostProcessing.lookups.setData(Open.datasetPostProcessing.lookups.listeners[str_datasetName], Open.datasetPostProcessing.lookups.manipulateData(str_datasetName));
}

/*####################################################################################*/
Open.datasetPostProcessing.lookups.manipulateData = function (str_datasetName) {
	var obj_result,
	temp0;

	//eval('obj_result = ' + Open.getDataSet(str_datasetName).toString());
	obj_result = Open.cloneObject(Open.getDataSet(str_datasetName));

	for (temp0 in obj_result) {
		if (typeof(obj_result[temp0]) === 'function') {
			delete (obj_result[temp0]);
		}
	}

	return obj_result;
}

/*####################################################################################*/
Open.datasetPostProcessing.lookups.setData = function (arr_listenerForDataLoad, obj_result) {
	for (var counter0 = 0; counter0 < arr_listenerForDataLoad.length; counter0++) {
		Open.store[arr_listenerForDataLoad[counter0].dataset].schema.parameters[arr_listenerForDataLoad[counter0].dataFieldNameOrIndex].lookup.datasetResult = obj_result;
		Open.datasetPostProcessing.lookups.listeners.execute(arr_listenerForDataLoad);
	}
}

/*####################################################################################*/
Open.datasetPostProcessing.lookups.listeners.execute = function (arr_listeners) {
	var temp0;

	for (var counter0 = 0; counter0 < arr_listeners.length; counter0++) {
		if (Open.store[arr_listeners[counter0].dataset].schema.parameters[arr_listeners[counter0].dataFieldNameOrIndex].lookup) {
			if (Open.store[arr_listeners[counter0].dataset].schema.parameters[arr_listeners[counter0].dataFieldNameOrIndex].lookup.listeners) {
				temp0 = Open.store[arr_listeners[counter0].dataset].schema.parameters[arr_listeners[counter0].dataFieldNameOrIndex].lookup.listeners;

				for (var counter1 = 0; counter1 < temp0.length; counter1++) {
					temp0[counter1](arr_listeners[counter0]);
				}
			}
		}
	}
}

/*####################################################################################*/
Open.getParameterObjectByName = function (obj_dataset, str_paramName) {
	if (obj_dataset.schema) {
		if (Open.isArray(obj_dataset.schema.parameters)) {
			for (var counter0 = 0; counter0 < obj_dataset.schema.parameters.length; counter0++) {
				if (obj_dataset.schema.parameters[counter0].name === str_paramName) {
					return counter0;
				}
			}
		}
	}
	return -1;
}

/*####################################################################################*/
Open.forms = {};

/*####################################################################################*/
Open.forms.parameters = {};

/*####################################################################################*/
Open.forms.parameters.getPostedValueByName = function (str_name, obj_json) {
	if (Open.isArray(obj_json.parameters)) {
		for (var counter0 = 0; counter0 < obj_json.parameters.length; counter0++) {
			if (obj_json.parameters[counter0].name === str_name) {
				return obj_json.parameters[counter0].value;
			}
		}
	}

	return;
}
/*####################################################################################*/
Open.forms.parameters.setPostedValueByName = function (str_name, str_value, obj_jsonParams) {

	if (Open.isArray(obj_jsonParams)) {
		for (var counter0 = 0; counter0 < obj_jsonParams.length; counter0++) {
			if (obj_jsonParams[counter0].name === str_name) {
				obj_jsonParams[counter0].value = str_value;
				return counter0;
			}
		}
	}

	return -1;
}

/*####################################################################################*/
Open.forms.prepareForSubmission = function (obj_dataset, obj_request) {
	var arr_result = Open.forms.test(obj_dataset, obj_request);

	for (var counter0 = 0; counter0 < arr_result.length; counter0++) {
		if (arr_result.errorType !== 'warning') {
			Open.forms.parameters.setPostedValueByName(arr_result[counter0].parameter, obj_dataset.schema.parameters[Open.getParameterObjectByName(obj_dataset, arr_result[counter0].parameter)].defaultvalue);
		}
	}
	return obj_request;
}

/*####################################################################################*/
Open.forms.test = function (obj_dataset, obj_request) {
	if (!Open.isArray(obj_request.parameters)) {
		return [];
	}

	var arr_result = [];
	var str_formID = Open.newID();
	var arr_parameters = obj_dataset.schema.parameters;
	Open.forms.createDatasetForm(str_formID);
	Open.forms[str_formID].addSchema(obj_dataset.schema);

	for (var counter0 = 0; counter0 < arr_parameters.length; counter0++) {
		arr_result = arr_result.concat(Open.forms[str_formID].setParameter(arr_parameters[counter0].name, Open.forms.parameters.getPostedValueByName(arr_parameters[counter0].name, obj_request)));
	}

	return arr_result;
}

/*####################################################################################*/
Open.forms.createDatasetForm = function (str_formID) {
	Open.forms[str_formID] = {};
	Open.forms[str_formID].parameters = {};
	Open.forms[str_formID].formID = str_formID;

	Open.forms[str_formID].addSchema = function (obj_schema) {
		Open.forms.addSchema(this.formID, obj_schema);
	}

	Open.forms[str_formID].parameters = {};

	Open.forms[str_formID].setParameter = function (str_parameterName, str_parameterValue) {
		return Open.forms.parameters.set(this.formID, str_parameterName, str_parameterValue);
	}
}

/*####################################################################################*/
Open.forms.addSchema = function (str_formID, obj_schema) {
	if (typeof(Open.forms[str_formID]) === 'undefined') {
		Open.forms.createDatasetForm(str_formID);
	}

	Open.forms[str_formID].schema = obj_schema;
}

/*####################################################################################*/
Open.forms.parameters.set = function (str_formID, str_parameterName, str_value) {
	if (typeof(Open.forms[str_formID]) === 'undefined') {
		Open.forms.createDatasetForm(str_formID);
	}

	if (typeof(Open.forms[str_formID].parameters[str_parameterName]) === 'undefined') {
		Open.forms[str_formID].parameters[str_parameterName] = {};
		Open.forms[str_formID].parameters[str_parameterName].parameterID = str_parameterName;
		Open.forms[str_formID].parameters[str_parameterName].parameterIndex = null;

		for (var counter0 = 0; counter0 < Open.forms[str_formID].schema.parameters.length; counter0++) {
			if (Open.forms[str_formID].schema.parameters[counter0].name === str_parameterName) {
				Open.forms[str_formID].parameters[str_parameterName].parameterIndex = counter0;
				Open.forms[str_formID].parameters[str_parameterName].value = Open.forms[str_formID].schema.parameters[counter0].defaultvalue;
				break;
			}
		}

		Open.forms[str_formID].parameters[str_parameterName].validate = function () {
			return Open.forms.parameters.validate(str_formID, this.parameterIndex, this.value);
		}

		Open.forms[str_formID].parameters[str_parameterName].validate.byDataType = function () {
			return Open.forms.parameters.validate.byDataType(str_formID, this.parameterIndex, this.value);
		}

		Open.forms[str_formID].parameters[str_parameterName].validate.byRegExp = function () {
			return Open.forms.parameters.validate.byRegExp(str_formID, this.parameterIndex, this.value);
		}

		Open.forms[str_formID].parameters[str_parameterName].validate.byEval = function () {
			return Open.forms.parameters.validate.byEval(str_formID, this.parameterIndex, this.value);
		}

		Open.forms[str_formID].parameters[str_parameterName].validate.byEval = function () {
			return Open.forms.parameters.validate.byEval(str_formID, this.parameterIndex, this.value);
		}

		Open.forms[str_formID].parameters[str_parameterName].validate.bySkipsAndTriggers = function () {
			return Open.forms.parameters.validate.bySkipsAndTriggers(str_formID, this.parameterIndex, this.value);
		}

		Open.forms[str_formID].parameters[str_parameterName].validate.byLookup = function () {
			return Open.forms.parameters.validate.byLookup(str_formID, this.parameterIndex, this.value);
		}
	}

	Open.forms[str_formID].parameters[str_parameterName].value = str_value;
	return Open.forms[str_formID].parameters[str_parameterName].validate();
}

/*####################################################################################*/
Open.forms.parameters.validate = function (str_formID, int_parameterIndexInSchema, str_value) {
	arr_result = [];
	if (int_parameterIndexInSchema == null) {
		return;
	}

	arr_result = arr_result.concat(Open.forms.parameters.validate.byDataType(str_formID, int_parameterIndexInSchema, str_value));
	arr_result = arr_result.concat(Open.forms.parameters.validate.byRegExp(str_formID, int_parameterIndexInSchema, str_value));
	arr_result = arr_result.concat(Open.forms.parameters.validate.byEval(str_formID, int_parameterIndexInSchema, str_value));
	arr_result = arr_result.concat(Open.forms.parameters.validate.byLookup(str_formID, int_parameterIndexInSchema, str_value));
	return arr_result;
}

/*####################################################################################*/
Open.forms.parameters.validate.byDataType = function (str_formID, int_parameterIndexInSchema, str_value) {
	var temp0,
	temp1;

	if (str_value === null) {
		if (Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].allownulls) {
			return [];
		} else {
			return [{
					"parameter": Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].name,
					"errorType": "error",
					"message": "Parameter does not allow NULL"
				}
			];
		}
	}

	if (/(int|bigint|integer|smallint|tinyint|double|single|money|smallmoney|float)$/i.test(Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].datatype)) {
		str_value = parseFloat(str_value);
		if (isNaN(str_value)) {
			return [{
					"parameter": Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].name,
					"errorType": "error",
					"message": "Numeric value requred"
				}
			];
		};

		switch (Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].datatype.toLowerCase()) {
		case 'int', 'integer':
			temp0 = -2147483648;
			temp1 = 2147483647;
			break;
		case 'bigint':
			temp0 = -9223372036854775808;
			temp1 = 9223372036854775807;
			break;
		case 'smallint':
			temp0 = -32768;
			temp1 = 32767;
			break;
		case 'tinyint':
			temp0 = 0;
			temp1 = 255;
			break;
		case 'double':
			temp0 = null;
			temp1 = null;
			break;
		case 'single':
			temp0 = null;
			temp1 = null;
			break;
		case 'money':
			temp0 = -922337203685477.5808;
			temp1 = 922337203685477.5807;
			break;
		case 'smallmoney':
			temp0 = -214748.3648;
			temp1 = 214748.3647;
			break;
		case 'float':
			temp0 = null;
			temp1 = null;
			break;
		}

		if ((str_value < temp0 && temp0 !== null) || (str_value > temp1 && temp1 !== null)) {
			return [{
					"parameter": Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].name,
					"errorType": "error",
					"message": "Parameter overflow"
				}
			];
		}
	} else {
		if (Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].datatype.toLowerCase() === 'uniqueidentifier') {
			if ((new RegExp(/^\{?[0-9A-F]{8}\-([0-9A-F]{4}\-){3}[0-9A-F]{12}\}?$/)).test(str_value)) {
				return [];
			} else {
				return [{
						"parameter": Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].name,
						"errorType": "error",
						"message": "Invalid value passed"
					}
				];
			}
		} else {
			if (Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].datatypecharlength && Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].datatypecharlength != -1) {
				if (str_value !== null && str_value.length > parseInt(Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].datatypecharlength)) {
					return [{
							"parameter": Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].name,
							"errorType": "error",
							"message": "Parameter overflow"
						}
					];
				}
			}
		}
	}

	return [];
}

/*####################################################################################*/
Open.forms.parameters.validate.generateErrorObjectFromValidatorObject = function (str_paramName, obj_validator) {
	var obj_result = {
		"parameter": str_paramName,
		"errorType": "error",
		"message": "Incorrect parameter"
	};

	if (typeof(obj_validator.errorType) !== 'undefined') {
		if (obj_validator.errorType === 'error' || obj_validator.errorType === 'warning') {
			obj_result.errorType = obj_validator.errorType;
		}
	}

	if (typeof(obj_validator.errorLiteralID) !== 'undefined') {
		if (obj_validator.errorLiteralID) {
			obj_result.message = obj_validator.errorLiteralID;
		}
	}

	return obj_result;
}

/*####################################################################################*/
Open.forms.parameters.validate.byRegExp = function (str_formID, int_parameterIndexInSchema, str_value) {
	var arr_obj_result = [];
	var temp0 = null;
	if (typeof(Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].validator) !== 'undefined') {
		if (typeof(Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].validator.length) !== 'undefined') {
			for (var counter0 = 0; counter0 < Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].validator.length; counter0++) {
				if (typeof(Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].validator[counter0].runAt) !== 'undefined') {
					if (Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].validator[counter0].runAt.toLowerCase() === 'server' && !Open.settings.runAtServer) {
						continue;
					}

					if (Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].validator[counter0].runAt.toLowerCase() === 'client' && Open.settings.runAtServer) {
						continue;
					}
				}

				if (typeof(Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].validator[counter0].regExp) !== 'undefined') {
					if (Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].validator[counter0].regExp) {
						if (temp0 = Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].validator[counter0].regExp.exec(str_value)) {}
						else {
							arr_obj_result.push(Open.forms.parameters.validate.generateErrorObjectFromValidatorObject(Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].name, Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].validator[counter0]));
						}
					}
				}
			}
		}
	}
	return arr_obj_result;
}

/*####################################################################################*/
Open.forms.parameters.validate.byEval = function (str_formID, int_parameterIndexInSchema, str_value) {
	var arr_obj_result = [];
	var temp0 = null;
	if (typeof(Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].validator) !== 'undefined') {
		if (typeof(Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].validator.length) !== 'undefined') {
			for (var counter0 = 0; counter0 < Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].validator.length; counter0++) {
				if (typeof(Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].validator[counter0].runAt) !== 'undefined') {
					if (Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].validator[counter0].runAt.toLowerCase() === 'server' && !Open.settings.runAtServer) {
						continue;
					}

					if (Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].validator[counter0].runAt.toLowerCase() === 'client' && Open.settings.runAtServer) {
						continue;
					}
				}

				if (typeof(Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].validator[counter0].eval) !== 'undefined') {
					if (Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].validator[counter0].eval) {
						switch (typeof(Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].validator[counter0].eval)) {
						case 'function':
							break;
						case 'string':
							/*eval('temp0 = function (obj_dataset, obj_parameter) { ' +
							' try { ' +
							Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].validator[counter0].eval +
							'}' +
							'catch(e){ ' +
							' for (temp0 in e) ' +
							' Response.Write(temp0 + " - " + e[temp0] + "\\n"); ' +
							' Response.End ' +
							'} ' +
							'};');*/

							temp0 = new Function('obj_dataset', 'obj_parameter', ' try { ' +
									Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].validator[counter0].eval +
									'}' +
									'catch(e){ ' +
									' for (temp0 in e) ' +
									' throw (e) ' +
									' Response.End ' +
									'} ');

							if (temp0()) {}
							else {
								arr_obj_result.push(Open.forms.parameters.validate.generateErrorObjectFromValidatorObject(Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].name, Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].validator[counter0]));
							}
							break;
						}
					}
				}
			}
		}
	}
	return arr_obj_result;
}

/*####################################################################################*/
Open.forms.parameters.validate.bySkipsAndTriggers = function (str_formID, int_parameterIndexInSchema, str_value) {
	return [];
}

/*####################################################################################*/
Open.forms.parameters.validate.byLookup = function (str_formID, int_parameterIndexInSchema, str_value) {
	if (Open.forms[str_formID].schema == null || typeof(Open.forms[str_formID].schema) === 'undefined') {
		return [];
	}

	if (Open.forms[str_formID].schema.parameters == null || typeof(Open.forms[str_formID].schema.parameters) === 'undefined') {
		return [];
	}

	if (Open.forms[str_formID].schema.parameters.length == null || typeof(Open.forms[str_formID].schema.parameters.length) === 'undefined') {
		return [];
	}

	if (Open.forms[str_formID].schema.parameters.length === 0) {
		return [];
	}

	if (Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].lookup == null || typeof(Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].lookup) === 'undefined') {
		return [];
	}

	if (Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].lookup.datasetResult == null || typeof(Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].lookup.datasetResult) === 'undefined') {
		return [];
	}

	if (Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].lookup.errorType === 'warning') {
		return [];
	}

	for (var counter0 = 0; counter0 < Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].lookup.datasetResult.data.length; counter0++) {
		if (Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].lookup.datasetResult.data[counter0][Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].lookup.id] == str_value) {
			return [];
		}
	}

	return [{
			"parameter": Open.forms[str_formID].schema.parameters[int_parameterIndexInSchema].name,
			"errorType": "error",
			"message": "Incorrect parameter(lookup)"
		}
	];
}

/*####################################################################################*/
Open.generateStoreString = function () {
	var temp0 = {
		'settings': {
			'build': Open.settings.build
		},
		'store': Open.cloneObject(Open.store)
	};

	for (var temp1 in temp0.store) {
		if (typeof(temp0.store[temp1]) === 'function') {
			delete (temp0.store[temp1]);
		}
	}

	return Open.objectToString(temp0);
}

/*####################################################################################*/
Open.normalizeExecutionString = function (str_post) {
	return Open.objectToString(Open.stringToObject(str_post));
}

/*####################################################################################*/
Open.restoreFromString = function (str_object) {
	if (!str_object) {
		return;
	}

	var temp0,
	obj_temp = Open.stringToObject(str_object);

	if (typeof(obj_temp) !== 'object' || obj_temp === null || typeof(obj_temp.store) !== 'object') {
		return;
	}

	for (temp0 in obj_temp.store) {
		if (typeof(obj_temp.store[temp0]) === 'object') {
			Open.store[temp0] = Open.cloneObject(obj_temp.store[temp0]);
		}
	}

	if (Open.store.aliases && Open.store.aliases.listAliases) {
		for (temp0 in Open.store.aliases.listAliases) {
			Open.store[temp0] = Open.store[Open.store.aliases.listAliases[temp0]];
		}
	}
}

/*####################################################################################*/
Open.data.errorObject = function () {
	this.status = null;
	this.statusText = null;
}

/*####################################################################################*/
function OpenIOSPhoneGapFix(str_result) {
	for (var temp0 in Open.connection.active) {
		if (temp0 !== 'length') {
			temp0 = Open.connection.active[temp0];
			break;
		}
	}

	temp0.defaultOnReadyFunction(str_result)
}
/*

httpRequestPOST = function (a, b, c) {
var xmlhttp = new XMLHttpRequest();
xmlhttp.open('POST', a, true);
xmlhttp.setRequestHeader('CharSet', 'UTF-8');
xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xmlhttp.send(b);
xmlhttp.onreadystatechange = function () {
if (this.readyState === 4) {
c(this.responseText);
}
}
}
*/

Open.covertDataValuesToString = function (obj_dataset) {
	if ((typeof(obj_dataset.data) === 'undefined') || (typeof(obj_dataset) !== 'object' || obj_dataset === null)) {
		return obj_dataset;
	}
	
	var isOneRowset = false;
	if (Open.isArray(obj_dataset.data) && obj_dataset.data[0] && !Open.isArray(obj_dataset.data[0])) {
		isOneRowset = true;
		obj_dataset.data = [obj_dataset.data];
	}
	obj_dataset.data = obj_dataset.data.map(function (entry) {
		return entry.map(function (entry) {
			return Object.entries(entry).reduce(function (obj, currentValue) { ;
				obj[currentValue[0]] = currentValue[1] === null ? null : String(currentValue[1])
					return obj;
			}, {});
		})
	});
	if (isOneRowset) {
		obj_dataset.data = obj_dataset.data[0];
	}
	return obj_dataset;
};
Open.isDatasetWhiteListed = function(datasetName){
	if(Open.settings.whiteListDatasets[datasetName]){
		return true;
	}

	for(var folder in Open.settings.whiteListDatasetFolders){
		if(datasetName.indexOf(folder) === 0){
			return true;
		}
	}

	return false;
};
Open.enableAsyncMode =  function _OpenEnableAsyncMode(){
	if(!Open.settings.XXAccessToken){
		Open.settings.isAsyncQueryApiEnabled = false;
	}
	Open.settings.isAsyncQueryApiEnabled = true;
	//Open.settings.XXAccessToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImEwODAwYWZkYmZlNjZmYzhmMDc1MTliNGQ3ZmE1ODU0IiwidHlwIjoiSldUIn0.eyJuYmYiOjE1NjY5MDUzMTQsImV4cCI6MTU2NjkwODkxNCwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo5MDAwL29hdXRoIiwiYXVkIjpbImh0dHA6Ly9sb2NhbGhvc3Q6OTAwMC9vYXV0aC9yZXNvdXJjZXMiLCJybWFwaSJdLCJjbGllbnRfaWQiOiJBbmFseXRpY3MiLCJzdWIiOiIxMDAwMDUiLCJhdXRoX3RpbWUiOjE1NjY5MDUzMDUsImlkcCI6ImxvY2FsIiwic2NvcGUiOlsicm1hcGkiXSwiYW1yIjpbInB3ZCJdfQ.s-w1_i2hTjdMhZss33xplxOzDzrAIfDnupTbwP1AG6fcv33bXaGeXUlyw8pt7-k2qV5u4U_jdHYgtYZHjyH8KfFlrmL9tPXCDbI6ZhKP5SxoQZdxMvPmKKdbYUOxy7FC78OrE7HbXomjSyKyVBSfV4Ui9GWR5uy4FaRIrNUwOgddkdh0NYgPlhzwznaOArZVCnJDRZAJ8d-nX6tomZ0POaUmQiZlk0XCZgXVX5MeQBZ4e9ekd3rdYwu2x_-j639z1uydDzoc4AgwXUTgmNjGYZcyvAy-aaVfE52L5IP6HCKCFAGj8VrXPE3D7mqZbF3qMrF87bveurX49LqEshs9pA";
	Open.settings.simultaneousRequestCount = 30; 
	Open.settings.apiEntryPoint = "/api/v1/actions/datasets/execute";
	Open.settings.whiteListDatasetFolders = {
		"/Apps/SM/APIv2/" : 1,
		"/Apps/SM/DB/Filters/" : 1
	};
	Open.settings.whiteListDatasets = {
		"/Apps/SM/Analysis/AnalysisCustomRollupsV2":1,
		"/Apps/SM/Analysis/AnalysisCustomRollups":1,
		"/System/Platform/PortalCMS/v2/PortalCMS2_GetChildNodes":1,
		"/System/Platform/PortalCMS/v2/PortalCMS2_GetNodeProperties":1,
		"/Apps/SM/Users/GetUserProfile":1,
		"/Apps/SM/DB/SmVideo_FlowPlayerAPIKey":1,
		"/Apps/SM/Analysis/MediaExplorer":1,
		"/Apps/SM/DB/PredefValues_Get":1,
		"/Apps/SM/DB/isUserHaveODPClientDashboard":1,
		"/Apps/SM/Analysis/ASER_CountOfSurveysByCustomProperty":1,
		"/Apps/SM/Analysis/AnswersDistribution":1,
		"/Apps/SM/Administration/Action Plan/ActionPlanDashboard":1,
		"/Apps/SM/Administration/RFA/Appeals_Reporting_KPIStatusesData_Get":1,
		"/Apps/SM/Administration/RFA/Appeals_Reporting_DashboardTableData_Get":1,
		"/Apps/com.sentimetrics/NLP_GetPhrasesData":1,
		"/Apps/com.sentimetrics/NLP_GetPhrasesComments":1,
		"/Apps/SM/Analysis/ReputationManagementGetData":1,
		"/Apps/SM/OperationsManagement/OperationsManagament_Filter_Campaign":1,
		"/Apps/SM/Analysis/AnalysisQuestionCorrelations":1,
		"/System/Platform/PortalCMS/v2/PortalCMS2_GetNodeProperties_ODPDocuments":1,
		"/Apps/com.OpenDataPlatform/Data/ODP_SER_GetData":1,
		"/Apps/com.OpenDataPlatform/Data/OdpGetPrototypes":1,
		"/System/Platform/Globalization/LiteralsGetTranslations2":1

		//"/Apps/SM/Custom/BP/CustomerAuditDashboardBP_CA":1,
		//"/Apps/SM/Custom/BP/CustomerAuditDashboardBP_OM":1

	};
};
Open.setXXAccessToken = function _OpenSetXXAccessToken(token){
	Open.settings.XXAccessToken = token;
};
