var protoSurveyJSON = {
    "versions": {
        "OsmSchemaVersion": "181004",
        "OsmBuilderVersion": "181004",
        "OsmDbStructureVersion": "181004"
    },
    "header": {
        "properties": {
            "isLocked": false,
            "entityNameObjectID": null,
            "allowDiscard": true,
            "isAllowGoingBack": 1,
            "isAutoAdvanceOnCompletion": 2,
            "isGestureSwipeEnabled": 1,
            "isJumpEnabled": 1,
            "jumpListPageItemsCount": 50,
            "isJumpListHasSectionsMode": true,
            "isJumpListHasErrorsMode": true,
            "jumpListDefaultMode": "default",
            "isNavigationButtonsToolbarDisplay": 1,
            "isValidationHaltOnError": 1,
            "displayMode": 1,
            "numberingType": 1,
            "rollbackDataOnNavigationPrevious": "R",
            "SurveyBuilderV3CMSObjGUID": "1AA0BF54-7BFB-4E78-8472-94E244E2AB71",
            "surveyType": 1006,
            "surveyFamily": "",
            "minimumAttachments": 0,
            "isDisallowSaveIncomplete": false,
            "allowPracticeMode": false,
            "allowWatermarks": false,
            "attachmentNamingPattern": "%ORIGINALFILENAME%",
            "ClientID": 1001,
            "AltTitleForApp": "",
            "PayRate": 0,
            "PayCurrencyID": 840,
            "BillingRate": 0,
            "BillingCurrencyID": 840,
            "isnodecline": 0,
            "InternalBillingType": null,
            "HeaderDateRendTypeID": null,
            "HeaderTimeRendTypeID": null,
            "ProtoSurveyThemeID": 1622778,
            "ZoomPercent": 100,
            "SurveyRenderingDefinitionID": 1000,
            "HasTimeOut": 0,
            "ColorCodingMeasure1": "",
            "ColorCodingColor1": "",
            "ColorCodingMeasure2": "",
            "ColorCodingColor2": "",
            "ColorCodingMeasure3": "",
            "ColorCodingColor3": "",
            "FontSize": null,
            "HideBlankComments": 0,
            "SurveyCompletionModeTemplate": null,
            "isPredefinedNumbering": 0,
            "IsShowLocationCityStateRegion": 1,
            "IsShowLocationAddress": 0,
            "IsShowLocationPhone": 0,
            "IsShowLocationHours": 0,
            "IsShowAuditorPayRate": 1,
            "MobileSurveyCompletionMode": "A",
            "MobileAllowSave": 1,
            "ShouldDisplaySurveyHeader": 1,
            "ShouldTriggerSurveyValidationOnStart": 1,
            "DefaultProcessingRoute": 1,
            "GlobalCustomizedFormDefault": 100000,
            "DefaultAutoAssignProfile": 0,
            "DefaultRestrictApplyProfile": 0,
            "BlackOutDateDefinitionID": null,
            "BriefNoteForApps": 1,
            "RequiredPlannedDate": 1,
            "SetDueDateToPlannedDate": 1,
            "DueDateOffset_Days": 24,
            "DueDateOffset_Hours": 24,
            "SetStartDateToPlannedDate": 0,
            "StartDateOffset_Days": 0,
            "StartDateOffset_Hours": 0,
            "ValidatorPayRate": 0,
            "ProtoSurveyVersion": "C33AE06F-E105-4AA8-8AD2-2F3F0FF4514E",
            "globalizationType": 1,
            "accentColor": "#18c2fa"
        },
        "protoid": 459,
        "title": "Mystery Shop",
        "subTitle": "Mystery Shop Subtitle",
        "secondSubTitle": "",
        "alternativeTitleForApps": "",
        "logo": "",
        "customHTML": ""
    },
    "body": [
        {
            "type": "question",
            "pos": 1,
            "objectName": "System_Date",
            "id": 1929,
            "SurveyBuilderV3CMSObjGUID": "7AA1B118-B3CA-4112-A4BC-3AFEF497B034",
            "template": "",
            "advancedQuestionTypeGUID": null,
            "excludeFromScoring": false,
            "sentimetricsEnabled": false,
            "isSearchAsYouTypeEnabled": false,
            "questionLayoutID": 4,
            "isNumbered": false,
            "breakLargeAnswerSetPositionID": 0,
            "isAllowAttachments": false,
            "attachmentSize": 3,
            "attachmentNamingPattern": "",
            "predefinedNumber": "",
            "showOnlySelectedAnswersOnExport": false,
            "isRequired": true,
            "minAttachmentsRequired": null,
            "maxAttachmentsAllowed": null,
            "minAnswersRequired": null,
            "maxAnswersRequired": null,
            "customFunction": "systemDateValidate",
            "targetMessage": null,
            "isAllowGoingBack": 3,
            "isAutoAdvanceOnCompletion": 3,
            "isGestureSwipeEnabled": 3,
            "isJumpEnabled": 3,
            "isFixedToPosition": false,
            "orderGroup": null,
            "allowedAnswers": "",
            "hintMin": "",
            "hintMax": "",
            "hintFunction": "",
            "protoAnswerID": 8,
            "dataClassification": 0,
            "text": "Date",
            "instructions": "",
            "analysisQuestionCategory1": "",
            "analysisQuestionCategory2": "",
            "analysisQuestionCategory3": "",
            "isGlobalizationDisabled": false,
            "comment": {
                "type": 2,
                "objectName": "_C",
                "datatype": 4,
                "length": 0,
                "scale": -1,
                "commentContentRule": 20,
                "commentRequirementRule": 1,
                "minCommentLength": null,
                "maxCommentLength": null,
                "minCommentValue": "",
                "maxCommentValue": "",
                "commentRange": "",
                "regExp": "",
                "placeholder": "",
                "label": ""
            },
            "answers": {
                "options": {},
                "answerSetID": 8,
                "objectName": "_AS"
            },
            "security": {
                "defaultPermission": "A",
                "securityGroups": []
            },
            "customPropertyMapping": {
                "propertyName": "",
                "source": "C"
            }
        },
        {
            "type": "question",
            "pos": 2,
            "objectName": "System_TimeIn",
            "id": 1930,
            "SurveyBuilderV3CMSObjGUID": "7AA1B118-B3CA-4112-A4BC-3AFEF497B034",
            "template": "",
            "advancedQuestionTypeGUID": null,
            "excludeFromScoring": false,
            "sentimetricsEnabled": false,
            "isSearchAsYouTypeEnabled": false,
            "questionLayoutID": 4,
            "isNumbered": false,
            "breakLargeAnswerSetPositionID": 0,
            "isAllowAttachments": false,
            "attachmentSize": 3,
            "attachmentNamingPattern": "",
            "predefinedNumber": "",
            "showOnlySelectedAnswersOnExport": false,
            "isRequired": true,
            "minAttachmentsRequired": null,
            "maxAttachmentsAllowed": null,
            "minAnswersRequired": null,
            "maxAnswersRequired": null,
            "customFunction": "",
            "targetMessage": null,
            "isAllowGoingBack": 3,
            "isAutoAdvanceOnCompletion": 3,
            "isGestureSwipeEnabled": 3,
            "isJumpEnabled": 3,
            "isFixedToPosition": false,
            "orderGroup": null,
            "allowedAnswers": "",
            "hintMin": "",
            "hintMax": "",
            "hintFunction": "",
            "protoAnswerID": 8,
            "dataClassification": 0,
            "text": "Time In",
            "instructions": "",
            "analysisQuestionCategory1": "",
            "analysisQuestionCategory2": "",
            "analysisQuestionCategory3": "",
            "isGlobalizationDisabled": false,
            "comment": {
                "type": 2,
                "objectName": "_C",
                "datatype": 4,
                "length": 0,
                "scale": -1,
                "commentContentRule": 12,
                "commentRequirementRule": 1,
                "minCommentLength": null,
                "maxCommentLength": null,
                "minCommentValue": "",
                "maxCommentValue": "",
                "commentRange": "",
                "regExp": "",
                "placeholder": "",
                "label": ""
            },
            "answers": {
                "options": {},
                "answerSetID": 8,
                "objectName": "_AS"
            },
            "security": {
                "defaultPermission": "A",
                "securityGroups": []
            },
            "customPropertyMapping": {
                "propertyName": "",
                "source": "C"
            }
        },
        {
            "type": "question",
            "pos": 3,
            "objectName": "System_TimeOut",
            "id": 1931,
            "SurveyBuilderV3CMSObjGUID": "7AA1B118-B3CA-4112-A4BC-3AFEF497B034",
            "template": "",
            "advancedQuestionTypeGUID": null,
            "excludeFromScoring": false,
            "sentimetricsEnabled": false,
            "isSearchAsYouTypeEnabled": false,
            "questionLayoutID": 4,
            "isNumbered": false,
            "breakLargeAnswerSetPositionID": 0,
            "isAllowAttachments": false,
            "attachmentSize": 3,
            "attachmentNamingPattern": "",
            "predefinedNumber": "",
            "showOnlySelectedAnswersOnExport": false,
            "isRequired": true,
            "minAttachmentsRequired": null,
            "maxAttachmentsAllowed": null,
            "minAnswersRequired": null,
            "maxAnswersRequired": null,
            "customFunction": "",
            "targetMessage": null,
            "isAllowGoingBack": 3,
            "isAutoAdvanceOnCompletion": 3,
            "isGestureSwipeEnabled": 3,
            "isJumpEnabled": 3,
            "isFixedToPosition": false,
            "orderGroup": null,
            "allowedAnswers": "",
            "hintMin": "",
            "hintMax": "",
            "hintFunction": "",
            "protoAnswerID": 8,
            "dataClassification": 0,
            "text": "Time Out",
            "instructions": "",
            "analysisQuestionCategory1": "",
            "analysisQuestionCategory2": "",
            "analysisQuestionCategory3": "",
            "isGlobalizationDisabled": false,
            "comment": {
                "type": 2,
                "objectName": "_C",
                "datatype": 4,
                "length": 0,
                "scale": -1,
                "commentContentRule": 12,
                "commentRequirementRule": 1,
                "minCommentLength": null,
                "maxCommentLength": null,
                "minCommentValue": "",
                "maxCommentValue": "",
                "commentRange": "",
                "regExp": "",
                "placeholder": "",
                "label": ""
            },
            "answers": {
                "options": {},
                "answerSetID": 8,
                "objectName": "_AS"
            },
            "security": {
                "defaultPermission": "A",
                "securityGroups": []
            },
            "customPropertyMapping": {
                "propertyName": "",
                "source": "C"
            }
        },
        {
            "type": "question",
            "pos": 4,
            "objectName": "_Q25",
            "id": 8849,
            "SurveyBuilderV3CMSObjGUID": "90922453-5C1F-4A6A-BEF2-D4F5A805AD6B",
            "template": "",
            "advancedQuestionTypeGUID": null,
            "excludeFromScoring": false,
            "sentimetricsEnabled": false,
            "isSearchAsYouTypeEnabled": false,
            "questionLayoutID": 2,
            "isNumbered": true,
            "breakLargeAnswerSetPositionID": 0,
            "isAllowAttachments": false,
            "attachmentSize": 3,
            "attachmentNamingPattern": "",
            "predefinedNumber": "",
            "showOnlySelectedAnswersOnExport": true,
            "isRequired": true,
            "minAttachmentsRequired": null,
            "maxAttachmentsAllowed": null,
            "minAnswersRequired": null,
            "maxAnswersRequired": null,
            "customFunction": "",
            "targetMessage": null,
            "isAllowGoingBack": 3,
            "isAutoAdvanceOnCompletion": 3,
            "isGestureSwipeEnabled": 3,
            "isJumpEnabled": 3,
            "isFixedToPosition": false,
            "orderGroup": null,
            "allowedAnswers": "",
            "hintMin": "",
            "hintMax": "",
            "hintFunction": "",
            "protoAnswerID": 1350,
            "dataClassification": 0,
            "text": "GENERIC Question",
            "instructions": "comment for shopper",
            "analysisQuestionCategory1": "",
            "analysisQuestionCategory2": "",
            "analysisQuestionCategory3": "",
            "isGlobalizationDisabled": false,
            "comment": {
                "type": 2,
                "objectName": "_C",
                "datatype": 3,
                "length": -1,
                "scale": -1,
                "commentContentRule": 1,
                "commentRequirementRule": 1,
                "minCommentLength": null,
                "maxCommentLength": null,
                "minCommentValue": "",
                "maxCommentValue": "",
                "commentRange": "",
                "regExp": "",
                "placeholder": "Enter Comment here...",
                "label": "Comment:",
                "lookup": {
                    "lookupColID": "Col001",
                    "lookupColValue": "Col002",
                    "lookupRowset": 1,
                    "lookupIsMultipleSelection": false,
                    "lookupIsDisplayAsDropdown": false,
                    "lookupUrl": "",
                    "lookupOfflineData": "",
                    "relationshipEntity": "",
                    "relationshipView": "",
                    "relationshipUnique": false,
                    "relationshipVisualization": 1,
                    "relationshipCardinality": "1N",
                    "relationshipFilter": ""
                }
            },
            "answers": {
                "options": {
                    "1": {
                        "objectName": "_1",
                        "answerSetReference": "",
                        "spssCode": null
                    },
                    "2": {
                        "objectName": "_2",
                        "answerSetReference": "",
                        "spssCode": null
                    },
                    "3": {
                        "objectName": "_3",
                        "answerSetReference": "",
                        "spssCode": null
                    },
                    "4": {
                        "objectName": "_4",
                        "answerSetReference": "",
                        "spssCode": null,
                        "otherField": {
                            "objectName": "_C_4"
                        }
                    }
                },
                "answerSetID": 1350,
                "objectName": "_AS"
            },
            "security": {
                "defaultPermission": "A",
                "securityGroups": []
            },
            "customPropertyMapping": {
                "propertyName": "",
                "source": "A"
            }
        },
        {
            "type": "sectionStart",
            "pos": 5,
            "id": 7,
            "sectionType": "S",
            "template": "",
            "SurveyBuilderV3CMSObjGUID": "0AB35540-8549-42F2-A4C4-EA793334170F",
            "objectName": "_S4",
            "isRestartQuestionNumberCount": false,
            "questionNumberType": 1,
            "isNumbered": false,
            "predefinedNumber": "",
            "displayMode": 3,
            "childElementsDisplayOrder": "D",
            "isFixedToPosition": false,
            "orderGroup": null,
            "isAllowGoingBack": 3,
            "isAutoAdvanceOnCompletion": 3,
            "isGestureSwipeEnabled": 3,
            "isJumpEnabled": 3,
            "isGlobalizationDisabled": false,
            "text": "SECTION Level 1",
            "instructions": "",
            "security": {
                "defaultPermission": "A",
                "securityGroups": []
            }
        },
        {
            "type": "question",
            "pos": 6,
            "objectName": "_Q6",
            "id": 2163,
            "SurveyBuilderV3CMSObjGUID": "2E46C5F3-AF64-4EB9-99D3-E920455F33B6",
            "template": "",
            "advancedQuestionTypeGUID": null,
            "excludeFromScoring": false,
            "sentimetricsEnabled": false,
            "isSearchAsYouTypeEnabled": false,
            "questionLayoutID": 2,
            "isNumbered": true,
            "breakLargeAnswerSetPositionID": 0,
            "isAllowAttachments": false,
            "attachmentSize": 3,
            "attachmentNamingPattern": "",
            "predefinedNumber": "",
            "showOnlySelectedAnswersOnExport": false,
            "isRequired": true,
            "minAttachmentsRequired": null,
            "maxAttachmentsAllowed": null,
            "minAnswersRequired": null,
            "maxAnswersRequired": null,
            "customFunction": "",
            "targetMessage": null,
            "isAllowGoingBack": 3,
            "isAutoAdvanceOnCompletion": 3,
            "isGestureSwipeEnabled": 3,
            "isJumpEnabled": 3,
            "isFixedToPosition": false,
            "orderGroup": null,
            "allowedAnswers": "",
            "hintMin": "",
            "hintMax": "",
            "hintFunction": "",
            "protoAnswerID": 8,
            "dataClassification": 0,
            "text": "NUMERIC Question",
            "instructions": "",
            "analysisQuestionCategory1": "",
            "analysisQuestionCategory2": "",
            "analysisQuestionCategory3": "",
            "isGlobalizationDisabled": false,
            "comment": {
                "type": 2,
                "objectName": "_C",
                "datatype": 2,
                "length": 10,
                "scale": 0,
                "commentContentRule": 1,
                "commentRequirementRule": 1,
                "minCommentLength": null,
                "maxCommentLength": null,
                "minCommentValue": "-2147483648",
                "maxCommentValue": "2147483647",
                "commentRange": "",
                "regExp": "",
                "placeholder": "",
                "label": ""
            },
            "answers": {
                "options": {},
                "answerSetID": 8,
                "objectName": "_AS"
            },
            "security": {
                "defaultPermission": "A",
                "securityGroups": []
            },
            "customPropertyMapping": {
                "propertyName": "",
                "source": "C"
            }
        },
        {
            "type": "question",
            "pos": 7,
            "objectName": "_Q7",
            "id": 8850,
            "SurveyBuilderV3CMSObjGUID": "8642F4F1-E3E3-480C-89C8-60EDC3DD65FC",
            "template": "",
            "advancedQuestionTypeGUID": null,
            "excludeFromScoring": false,
            "sentimetricsEnabled": false,
            "isSearchAsYouTypeEnabled": false,
            "questionLayoutID": 2,
            "isNumbered": true,
            "breakLargeAnswerSetPositionID": 0,
            "isAllowAttachments": false,
            "attachmentSize": 3,
            "attachmentNamingPattern": "",
            "predefinedNumber": "",
            "showOnlySelectedAnswersOnExport": false,
            "isRequired": true,
            "minAttachmentsRequired": null,
            "maxAttachmentsAllowed": null,
            "minAnswersRequired": null,
            "maxAnswersRequired": null,
            "customFunction": "",
            "targetMessage": null,
            "isAllowGoingBack": 3,
            "isAutoAdvanceOnCompletion": 3,
            "isGestureSwipeEnabled": 3,
            "isJumpEnabled": 3,
            "isFixedToPosition": false,
            "orderGroup": null,
            "allowedAnswers": "",
            "hintMin": "",
            "hintMax": "",
            "hintFunction": "",
            "protoAnswerID": 8,
            "dataClassification": 0,
            "text": "TEXT Question",
            "instructions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce diam tellus, interdum at purus vel, consequat scelerisque ante. Etiam pulvinar eu sapien non dapibus. Maecenas neque neque, rhoncus vel sem et, laoreet gravida leo. Mauris vel porta tellus, non cursus ligula. Mauris fermentum enim enim, nec sagittis felis tempor non. Quisque dapibus elit quis ullamcorper molestie. Sed vehicula massa et tellus ultrices sagittis.",
            "analysisQuestionCategory1": "",
            "analysisQuestionCategory2": "",
            "analysisQuestionCategory3": "",
            "isGlobalizationDisabled": false,
            "comment": {
                "type": 3,
                "objectName": "_C",
                "datatype": 3,
                "length": 200,
                "scale": -1,
                "commentContentRule": 1,
                "commentRequirementRule": 1,
                "minCommentLength": null,
                "maxCommentLength": null,
                "minCommentValue": "",
                "maxCommentValue": "",
                "commentRange": "",
                "regExp": "",
                "placeholder": "",
                "label": ""
            },
            "answers": {
                "options": {},
                "answerSetID": 8,
                "objectName": "_AS"
            },
            "security": {
                "defaultPermission": "A",
                "securityGroups": []
            },
            "customPropertyMapping": {
                "propertyName": "",
                "source": "C"
            }
        },
        {
            "type": "question",
            "pos": 8,
            "objectName": "_Q8",
            "id": 8839,
            "SurveyBuilderV3CMSObjGUID": "FCE61FC3-99D3-455A-B635-517183475C26",
            "template": "",
            "advancedQuestionTypeGUID": null,
            "excludeFromScoring": false,
            "sentimetricsEnabled": false,
            "isSearchAsYouTypeEnabled": false,
            "questionLayoutID": 2,
            "isNumbered": true,
            "breakLargeAnswerSetPositionID": 0,
            "isAllowAttachments": false,
            "attachmentSize": 3,
            "attachmentNamingPattern": "",
            "predefinedNumber": "",
            "showOnlySelectedAnswersOnExport": true,
            "isRequired": true,
            "minAttachmentsRequired": null,
            "maxAttachmentsAllowed": null,
            "minAnswersRequired": null,
            "maxAnswersRequired": null,
            "customFunction": "",
            "targetMessage": null,
            "isAllowGoingBack": 3,
            "isAutoAdvanceOnCompletion": 3,
            "isGestureSwipeEnabled": 3,
            "isJumpEnabled": 3,
            "isFixedToPosition": false,
            "orderGroup": null,
            "allowedAnswers": "",
            "hintMin": "",
            "hintMax": "",
            "hintFunction": "",
            "protoAnswerID": 1197,
            "dataClassification": 0,
            "text": "CATEGORICAL Question",
            "instructions": "comment for shopper",
            "analysisQuestionCategory1": "",
            "analysisQuestionCategory2": "",
            "analysisQuestionCategory3": "",
            "isGlobalizationDisabled": false,
            "answers": {
                "options": {
                    "1": {
                        "objectName": "_A1",
                        "answerSetReference": "",
                        "spssCode": null
                    },
                    "2": {
                        "objectName": "_A2",
                        "answerSetReference": "",
                        "spssCode": null
                    }
                },
                "answerSetID": 1197,
                "objectName": "_AS"
            },
            "security": {
                "defaultPermission": "A",
                "securityGroups": []
            },
            "customPropertyMapping": {
                "propertyName": "",
                "source": "A"
            }
        },
        {
            "type": "sectionStart",
            "pos": 9,
            "id": 8,
            "sectionType": "S",
            "template": "",
            "SurveyBuilderV3CMSObjGUID": "0AB35540-8549-42F2-A4C4-EA793334170F",
            "objectName": "_S9",
            "isRestartQuestionNumberCount": false,
            "questionNumberType": 1,
            "isNumbered": false,
            "predefinedNumber": "",
            "displayMode": 3,
            "childElementsDisplayOrder": "D",
            "isFixedToPosition": false,
            "orderGroup": null,
            "isAllowGoingBack": 3,
            "isAutoAdvanceOnCompletion": 3,
            "isGestureSwipeEnabled": 3,
            "isJumpEnabled": 3,
            "isGlobalizationDisabled": false,
            "text": "SECTION Level 2",
            "instructions": "",
            "security": {
                "defaultPermission": "A",
                "securityGroups": []
            }
        },
        {
            "type": "question",
            "pos": 10,
            "objectName": "_Q11",
            "id": 6585,
            "SurveyBuilderV3CMSObjGUID": "8642F4F1-E3E3-480C-89C8-60EDC3DD65FC",
            "template": "",
            "advancedQuestionTypeGUID": null,
            "excludeFromScoring": false,
            "sentimetricsEnabled": false,
            "isSearchAsYouTypeEnabled": false,
            "questionLayoutID": 2,
            "isNumbered": true,
            "breakLargeAnswerSetPositionID": 0,
            "isAllowAttachments": false,
            "attachmentSize": 3,
            "attachmentNamingPattern": "",
            "predefinedNumber": "",
            "showOnlySelectedAnswersOnExport": false,
            "isRequired": true,
            "minAttachmentsRequired": null,
            "maxAttachmentsAllowed": null,
            "minAnswersRequired": null,
            "maxAnswersRequired": null,
            "customFunction": "",
            "targetMessage": null,
            "isAllowGoingBack": 3,
            "isAutoAdvanceOnCompletion": 3,
            "isGestureSwipeEnabled": 3,
            "isJumpEnabled": 3,
            "isFixedToPosition": false,
            "orderGroup": null,
            "allowedAnswers": "",
            "hintMin": "",
            "hintMax": "",
            "hintFunction": "",
            "protoAnswerID": 8,
            "dataClassification": 0,
            "text": "TEXT Question",
            "instructions": "",
            "analysisQuestionCategory1": "",
            "analysisQuestionCategory2": "",
            "analysisQuestionCategory3": "",
            "isGlobalizationDisabled": false,
            "comment": {
                "type": 3,
                "objectName": "_C",
                "datatype": 3,
                "length": 200,
                "scale": -1,
                "commentContentRule": 1,
                "commentRequirementRule": 1,
                "minCommentLength": null,
                "maxCommentLength": null,
                "minCommentValue": "",
                "maxCommentValue": "",
                "commentRange": "",
                "regExp": "",
                "placeholder": "",
                "label": ""
            },
            "answers": {
                "options": {},
                "answerSetID": 8,
                "objectName": "_AS"
            },
            "security": {
                "defaultPermission": "A",
                "securityGroups": []
            },
            "customPropertyMapping": {
                "propertyName": "",
                "source": "C"
            }
        },
        {
            "type": "question",
            "pos": 11,
            "objectName": "_Q12",
            "id": 5765,
            "SurveyBuilderV3CMSObjGUID": "101622D0-8B7C-4DE5-B97B-67D33C2E51D7",
            "template": "",
            "advancedQuestionTypeGUID": null,
            "excludeFromScoring": false,
            "sentimetricsEnabled": false,
            "isSearchAsYouTypeEnabled": false,
            "questionLayoutID": 1,
            "isNumbered": true,
            "breakLargeAnswerSetPositionID": 0,
            "isAllowAttachments": false,
            "attachmentSize": 3,
            "attachmentNamingPattern": "",
            "predefinedNumber": "",
            "showOnlySelectedAnswersOnExport": false,
            "isRequired": false,
            "minAttachmentsRequired": null,
            "maxAttachmentsAllowed": null,
            "minAnswersRequired": null,
            "maxAnswersRequired": null,
            "customFunction": "",
            "targetMessage": null,
            "isAllowGoingBack": 3,
            "isAutoAdvanceOnCompletion": 3,
            "isGestureSwipeEnabled": 3,
            "isJumpEnabled": 3,
            "isFixedToPosition": false,
            "orderGroup": null,
            "allowedAnswers": "",
            "hintMin": "",
            "hintMax": "",
            "hintFunction": "",
            "protoAnswerID": 8,
            "dataClassification": 0,
            "text": "INFO",
            "instructions": "",
            "analysisQuestionCategory1": "",
            "analysisQuestionCategory2": "",
            "analysisQuestionCategory3": "",
            "isGlobalizationDisabled": false,
            "answers": {
                "options": {},
                "answerSetID": 8,
                "objectName": "_AS"
            },
            "security": {
                "defaultPermission": "A",
                "securityGroups": []
            },
            "customPropertyMapping": {
                "propertyName": "",
                "source": "C"
            }
        },
        {
            "type": "sectionEnd",
            "pos": 12
        },
        {
            "type": "sectionEnd",
            "pos": 13
        },
        {
            "type": "sectionStart",
            "pos": 14,
            "id": 9,
            "sectionType": "Q",
            "template": "SectionQuestionGridView",
            "SurveyBuilderV3CMSObjGUID": "AFFD6FD3-F9FA-4CD1-A481-DED50F2A7436",
            "objectName": "_G13",
            "isRestartQuestionNumberCount": false,
            "questionNumberType": 0,
            "isNumbered": false,
            "predefinedNumber": "",
            "displayMode": 1,
            "childElementsDisplayOrder": "D",
            "isFixedToPosition": false,
            "orderGroup": null,
            "isAllowGoingBack": 3,
            "isAutoAdvanceOnCompletion": 3,
            "isGestureSwipeEnabled": 3,
            "isJumpEnabled": 3,
            "isGlobalizationDisabled": false,
            "text": "Grid",
            "instructions": "",
            "security": {
                "defaultPermission": "A",
                "securityGroups": []
            }
        },
        {
            "type": "question",
            "pos": 15,
            "objectName": "_Q15",
            "id": 8840,
            "SurveyBuilderV3CMSObjGUID": "FCE61FC3-99D3-455A-B635-517183475C26",
            "template": "QuestionGridInnerElements",
            "advancedQuestionTypeGUID": null,
            "excludeFromScoring": false,
            "sentimetricsEnabled": false,
            "isSearchAsYouTypeEnabled": false,
            "questionLayoutID": 2,
            "isNumbered": true,
            "breakLargeAnswerSetPositionID": 0,
            "isAllowAttachments": false,
            "attachmentSize": 3,
            "attachmentNamingPattern": "",
            "predefinedNumber": "",
            "showOnlySelectedAnswersOnExport": true,
            "isRequired": true,
            "minAttachmentsRequired": null,
            "maxAttachmentsAllowed": null,
            "minAnswersRequired": null,
            "maxAnswersRequired": null,
            "customFunction": "",
            "targetMessage": null,
            "isAllowGoingBack": 3,
            "isAutoAdvanceOnCompletion": 3,
            "isGestureSwipeEnabled": 3,
            "isJumpEnabled": 3,
            "isFixedToPosition": false,
            "orderGroup": null,
            "allowedAnswers": "",
            "hintMin": "",
            "hintMax": "",
            "hintFunction": "",
            "protoAnswerID": 1197,
            "dataClassification": 0,
            "text": "row 1 / col 1",
            "instructions": "",
            "analysisQuestionCategory1": "",
            "analysisQuestionCategory2": "",
            "analysisQuestionCategory3": "",
            "isGlobalizationDisabled": false,
            "answers": {
                "options": {
                    "1": {
                        "objectName": "_A1",
                        "answerSetReference": "",
                        "spssCode": null
                    },
                    "2": {
                        "objectName": "_A2",
                        "answerSetReference": "",
                        "spssCode": null
                    }
                },
                "answerSetID": 1197,
                "objectName": "_AS"
            },
            "security": {
                "defaultPermission": "A",
                "securityGroups": []
            },
            "customPropertyMapping": {
                "propertyName": "",
                "source": "A"
            }
        },
        {
            "type": "question",
            "pos": 16,
            "objectName": "_Q16",
            "id": 8841,
            "SurveyBuilderV3CMSObjGUID": "90922453-5C1F-4A6A-BEF2-D4F5A805AD6B",
            "template": "QuestionGridInnerElements",
            "advancedQuestionTypeGUID": null,
            "excludeFromScoring": false,
            "sentimetricsEnabled": false,
            "isSearchAsYouTypeEnabled": false,
            "questionLayoutID": 2,
            "isNumbered": true,
            "breakLargeAnswerSetPositionID": 0,
            "isAllowAttachments": false,
            "attachmentSize": 3,
            "attachmentNamingPattern": "",
            "predefinedNumber": "",
            "showOnlySelectedAnswersOnExport": true,
            "isRequired": true,
            "minAttachmentsRequired": null,
            "maxAttachmentsAllowed": null,
            "minAnswersRequired": null,
            "maxAnswersRequired": null,
            "customFunction": "",
            "targetMessage": null,
            "isAllowGoingBack": 3,
            "isAutoAdvanceOnCompletion": 3,
            "isGestureSwipeEnabled": 3,
            "isJumpEnabled": 3,
            "isFixedToPosition": false,
            "orderGroup": null,
            "allowedAnswers": "",
            "hintMin": "",
            "hintMax": "",
            "hintFunction": "",
            "protoAnswerID": 1349,
            "dataClassification": 0,
            "text": "row 1 / col 2",
            "instructions": "",
            "analysisQuestionCategory1": "",
            "analysisQuestionCategory2": "",
            "analysisQuestionCategory3": "",
            "isGlobalizationDisabled": false,
            "comment": {
                "type": 2,
                "objectName": "_C",
                "datatype": 3,
                "length": -1,
                "scale": -1,
                "commentContentRule": 1,
                "commentRequirementRule": 1,
                "minCommentLength": null,
                "maxCommentLength": null,
                "minCommentValue": "",
                "maxCommentValue": "",
                "commentRange": "",
                "regExp": "",
                "placeholder": "Enter Comment here...",
                "label": "",
                "lookup": {
                    "lookupColID": "Col001",
                    "lookupColValue": "Col002",
                    "lookupRowset": 1,
                    "lookupIsMultipleSelection": false,
                    "lookupIsDisplayAsDropdown": false,
                    "lookupUrl": "",
                    "lookupOfflineData": "",
                    "relationshipEntity": "",
                    "relationshipView": "",
                    "relationshipUnique": false,
                    "relationshipVisualization": 1,
                    "relationshipCardinality": "1N",
                    "relationshipFilter": ""
                }
            },
            "answers": {
                "options": {
                    "1": {
                        "objectName": "_A1",
                        "answerSetReference": "",
                        "spssCode": null
                    }
                },
                "answerSetID": 1349,
                "objectName": "_AS"
            },
            "security": {
                "defaultPermission": "A",
                "securityGroups": []
            },
            "customPropertyMapping": {
                "propertyName": "",
                "source": "A"
            }
        },
        {
            "type": "question",
            "pos": 17,
            "objectName": "_Q17",
            "id": 8842,
            "SurveyBuilderV3CMSObjGUID": "FCE61FC3-99D3-455A-B635-517183475C26",
            "template": "QuestionGridInnerElements",
            "advancedQuestionTypeGUID": null,
            "excludeFromScoring": false,
            "sentimetricsEnabled": false,
            "isSearchAsYouTypeEnabled": false,
            "questionLayoutID": 2,
            "isNumbered": true,
            "breakLargeAnswerSetPositionID": 0,
            "isAllowAttachments": false,
            "attachmentSize": 3,
            "attachmentNamingPattern": "",
            "predefinedNumber": "",
            "showOnlySelectedAnswersOnExport": true,
            "isRequired": true,
            "minAttachmentsRequired": null,
            "maxAttachmentsAllowed": null,
            "minAnswersRequired": null,
            "maxAnswersRequired": null,
            "customFunction": "",
            "targetMessage": null,
            "isAllowGoingBack": 3,
            "isAutoAdvanceOnCompletion": 3,
            "isGestureSwipeEnabled": 3,
            "isJumpEnabled": 3,
            "isFixedToPosition": false,
            "orderGroup": null,
            "allowedAnswers": "",
            "hintMin": "",
            "hintMax": "",
            "hintFunction": "",
            "protoAnswerID": 1348,
            "dataClassification": 0,
            "text": "row 1 / col 3",
            "instructions": "",
            "analysisQuestionCategory1": "",
            "analysisQuestionCategory2": "",
            "analysisQuestionCategory3": "",
            "isGlobalizationDisabled": false,
            "answers": {
                "options": {
                    "1": {
                        "objectName": "_A1",
                        "answerSetReference": "",
                        "spssCode": null
                    },
                    "2": {
                        "objectName": "_A2",
                        "answerSetReference": "",
                        "spssCode": null
                    },
                    "3": {
                        "objectName": "_A3",
                        "answerSetReference": "",
                        "spssCode": null
                    },
                    "4": {
                        "objectName": "_A4",
                        "answerSetReference": "",
                        "spssCode": null
                    },
                    "5": {
                        "objectName": "_A5",
                        "answerSetReference": "",
                        "spssCode": null
                    },
                    "6": {
                        "objectName": "_A6",
                        "answerSetReference": "",
                        "spssCode": null
                    }
                },
                "answerSetID": 1348,
                "objectName": "_AS"
            },
            "security": {
                "defaultPermission": "A",
                "securityGroups": []
            },
            "customPropertyMapping": {
                "propertyName": "",
                "source": "A"
            }
        },
        {
            "type": "question",
            "pos": 18,
            "objectName": "_Q18",
            "id": 8843,
            "SurveyBuilderV3CMSObjGUID": "FCE61FC3-99D3-455A-B635-517183475C26",
            "template": "QuestionGridInnerElements",
            "advancedQuestionTypeGUID": null,
            "excludeFromScoring": false,
            "sentimetricsEnabled": false,
            "isSearchAsYouTypeEnabled": false,
            "questionLayoutID": 2,
            "isNumbered": true,
            "breakLargeAnswerSetPositionID": 0,
            "isAllowAttachments": false,
            "attachmentSize": 3,
            "attachmentNamingPattern": "",
            "predefinedNumber": "",
            "showOnlySelectedAnswersOnExport": true,
            "isRequired": true,
            "minAttachmentsRequired": null,
            "maxAttachmentsAllowed": null,
            "minAnswersRequired": null,
            "maxAnswersRequired": null,
            "customFunction": "",
            "targetMessage": null,
            "isAllowGoingBack": 3,
            "isAutoAdvanceOnCompletion": 3,
            "isGestureSwipeEnabled": 3,
            "isJumpEnabled": 3,
            "isFixedToPosition": false,
            "orderGroup": null,
            "allowedAnswers": "",
            "hintMin": "",
            "hintMax": "",
            "hintFunction": "",
            "protoAnswerID": 1197,
            "dataClassification": 0,
            "text": "row 2 / col 1",
            "instructions": "",
            "analysisQuestionCategory1": "",
            "analysisQuestionCategory2": "",
            "analysisQuestionCategory3": "",
            "isGlobalizationDisabled": false,
            "answers": {
                "options": {
                    "1": {
                        "objectName": "_A1",
                        "answerSetReference": "",
                        "spssCode": null
                    },
                    "2": {
                        "objectName": "_A2",
                        "answerSetReference": "",
                        "spssCode": null
                    }
                },
                "answerSetID": 1197,
                "objectName": "_AS"
            },
            "security": {
                "defaultPermission": "A",
                "securityGroups": []
            },
            "customPropertyMapping": {
                "propertyName": "",
                "source": "A"
            }
        },
        {
            "type": "question",
            "pos": 19,
            "objectName": "_Q19",
            "id": 8844,
            "SurveyBuilderV3CMSObjGUID": "90922453-5C1F-4A6A-BEF2-D4F5A805AD6B",
            "template": "QuestionGridInnerElements",
            "advancedQuestionTypeGUID": null,
            "excludeFromScoring": false,
            "sentimetricsEnabled": false,
            "isSearchAsYouTypeEnabled": false,
            "questionLayoutID": 2,
            "isNumbered": true,
            "breakLargeAnswerSetPositionID": 0,
            "isAllowAttachments": false,
            "attachmentSize": 3,
            "attachmentNamingPattern": "",
            "predefinedNumber": "",
            "showOnlySelectedAnswersOnExport": true,
            "isRequired": true,
            "minAttachmentsRequired": null,
            "maxAttachmentsAllowed": null,
            "minAnswersRequired": null,
            "maxAnswersRequired": null,
            "customFunction": "",
            "targetMessage": null,
            "isAllowGoingBack": 3,
            "isAutoAdvanceOnCompletion": 3,
            "isGestureSwipeEnabled": 3,
            "isJumpEnabled": 3,
            "isFixedToPosition": false,
            "orderGroup": null,
            "allowedAnswers": "",
            "hintMin": "",
            "hintMax": "",
            "hintFunction": "",
            "protoAnswerID": 1349,
            "dataClassification": 0,
            "text": "row 2 / col 2",
            "instructions": "",
            "analysisQuestionCategory1": "",
            "analysisQuestionCategory2": "",
            "analysisQuestionCategory3": "",
            "isGlobalizationDisabled": false,
            "comment": {
                "type": 2,
                "objectName": "_C",
                "datatype": 3,
                "length": -1,
                "scale": -1,
                "commentContentRule": 1,
                "commentRequirementRule": 1,
                "minCommentLength": null,
                "maxCommentLength": null,
                "minCommentValue": "",
                "maxCommentValue": "",
                "commentRange": "",
                "regExp": "",
                "placeholder": "Enter Comment here...",
                "label": "",
                "lookup": {
                    "lookupColID": "Col001",
                    "lookupColValue": "Col002",
                    "lookupRowset": 1,
                    "lookupIsMultipleSelection": false,
                    "lookupIsDisplayAsDropdown": false,
                    "lookupUrl": "",
                    "lookupOfflineData": "",
                    "relationshipEntity": "",
                    "relationshipView": "",
                    "relationshipUnique": false,
                    "relationshipVisualization": 1,
                    "relationshipCardinality": "1N",
                    "relationshipFilter": ""
                }
            },
            "answers": {
                "options": {
                    "1": {
                        "objectName": "_A1",
                        "answerSetReference": "",
                        "spssCode": null
                    }
                },
                "answerSetID": 1349,
                "objectName": "_AS"
            },
            "security": {
                "defaultPermission": "A",
                "securityGroups": []
            },
            "customPropertyMapping": {
                "propertyName": "",
                "source": "A"
            }
        },
        {
            "type": "question",
            "pos": 20,
            "objectName": "_Q20",
            "id": 8845,
            "SurveyBuilderV3CMSObjGUID": "FCE61FC3-99D3-455A-B635-517183475C26",
            "template": "QuestionGridInnerElements",
            "advancedQuestionTypeGUID": null,
            "excludeFromScoring": false,
            "sentimetricsEnabled": false,
            "isSearchAsYouTypeEnabled": false,
            "questionLayoutID": 2,
            "isNumbered": true,
            "breakLargeAnswerSetPositionID": 0,
            "isAllowAttachments": false,
            "attachmentSize": 3,
            "attachmentNamingPattern": "",
            "predefinedNumber": "",
            "showOnlySelectedAnswersOnExport": true,
            "isRequired": true,
            "minAttachmentsRequired": null,
            "maxAttachmentsAllowed": null,
            "minAnswersRequired": null,
            "maxAnswersRequired": null,
            "customFunction": "",
            "targetMessage": null,
            "isAllowGoingBack": 3,
            "isAutoAdvanceOnCompletion": 3,
            "isGestureSwipeEnabled": 3,
            "isJumpEnabled": 3,
            "isFixedToPosition": false,
            "orderGroup": null,
            "allowedAnswers": "",
            "hintMin": "",
            "hintMax": "",
            "hintFunction": "",
            "protoAnswerID": 1348,
            "dataClassification": 0,
            "text": "row 2 / col 3",
            "instructions": "",
            "analysisQuestionCategory1": "",
            "analysisQuestionCategory2": "",
            "analysisQuestionCategory3": "",
            "isGlobalizationDisabled": false,
            "answers": {
                "options": {
                    "1": {
                        "objectName": "_A1",
                        "answerSetReference": "",
                        "spssCode": null
                    },
                    "2": {
                        "objectName": "_A2",
                        "answerSetReference": "",
                        "spssCode": null
                    },
                    "3": {
                        "objectName": "_A3",
                        "answerSetReference": "",
                        "spssCode": null
                    },
                    "4": {
                        "objectName": "_A4",
                        "answerSetReference": "",
                        "spssCode": null
                    },
                    "5": {
                        "objectName": "_A5",
                        "answerSetReference": "",
                        "spssCode": null
                    },
                    "6": {
                        "objectName": "_A6",
                        "answerSetReference": "",
                        "spssCode": null
                    }
                },
                "answerSetID": 1348,
                "objectName": "_AS"
            },
            "security": {
                "defaultPermission": "A",
                "securityGroups": []
            },
            "customPropertyMapping": {
                "propertyName": "",
                "source": "A"
            }
        },
        {
            "type": "sectionEnd",
            "pos": 21
        },
        {
            "type": "loopStart",
            "pos": 22,
            "id": 10072,
            "objectName": "_L21",
            "template": "",
            "SurveyBuilderV3CMSObjGUID": "A7C7BA09-0741-4F80-A99F-24C8F045E0B0",
            "orientation": 0,
            "displayAs": 0,
            "showLoopText": true,
            "showQuestionTexts": true,
            "showChildNodeTexts": true,
            "showIterationTexts": true,
            "iteratesOn": "",
            "iterationType": "d",
            "fixedIterationsCount": 2,
            "excludeFromIterations": null,
            "isNumbered": true,
            "predefinedNumber": "",
            "displayMode": 1,
            "maxIterations": null,
            "DDFExport": "h",
            "isFixedToPosition": false,
            "orderGroup": null,
            "protoAnswerID": 1347,
            "allowWatermarks": false,
            "protoQuestionID": null,
            "sliderImages": "",
            "isGlobalizationDisabled": false,
            "answers": {
                "options": {
                    "1": {
                        "objectName": "_A1",
                        "answerSetReference": "",
                        "spssCode": null
                    },
                    "2": {
                        "objectName": "_A2",
                        "answerSetReference": "",
                        "spssCode": null
                    },
                    "3": {
                        "objectName": "_A3",
                        "answerSetReference": "",
                        "spssCode": null
                    },
                    "4": {
                        "objectName": "_A4",
                        "answerSetReference": "",
                        "spssCode": null
                    }
                },
                "answerSetID": 1347,
                "objectName": "_AS"
            },
            "text": "LOOP",
            "instructions": "",
            "security": {
                "defaultPermission": "A",
                "securityGroups": []
            }
        },
        {
            "type": "question",
            "pos": 23,
            "objectName": "_Q24",
            "id": 8847,
            "SurveyBuilderV3CMSObjGUID": "8642F4F1-E3E3-480C-89C8-60EDC3DD65FC",
            "template": "",
            "advancedQuestionTypeGUID": null,
            "excludeFromScoring": false,
            "sentimetricsEnabled": false,
            "isSearchAsYouTypeEnabled": false,
            "questionLayoutID": 2,
            "isNumbered": true,
            "breakLargeAnswerSetPositionID": 0,
            "isAllowAttachments": false,
            "attachmentSize": 3,
            "attachmentNamingPattern": "",
            "predefinedNumber": "",
            "showOnlySelectedAnswersOnExport": false,
            "isRequired": true,
            "minAttachmentsRequired": null,
            "maxAttachmentsAllowed": null,
            "minAnswersRequired": null,
            "maxAnswersRequired": null,
            "customFunction": "",
            "targetMessage": null,
            "isAllowGoingBack": 3,
            "isAutoAdvanceOnCompletion": 3,
            "isGestureSwipeEnabled": 3,
            "isJumpEnabled": 3,
            "isFixedToPosition": false,
            "orderGroup": null,
            "allowedAnswers": "",
            "hintMin": "",
            "hintMax": "",
            "hintFunction": "",
            "protoAnswerID": 8,
            "dataClassification": 0,
            "text": "TEXT Question",
            "instructions": "",
            "analysisQuestionCategory1": "",
            "analysisQuestionCategory2": "",
            "analysisQuestionCategory3": "",
            "isGlobalizationDisabled": false,
            "comment": {
                "type": 3,
                "objectName": "_C",
                "datatype": 3,
                "length": 200,
                "scale": -1,
                "commentContentRule": 1,
                "commentRequirementRule": 1,
                "minCommentLength": null,
                "maxCommentLength": null,
                "minCommentValue": "",
                "maxCommentValue": "",
                "commentRange": "",
                "regExp": "",
                "placeholder": "",
                "label": ""
            },
            "answers": {
                "options": {},
                "answerSetID": 8,
                "objectName": "_AS"
            },
            "security": {
                "defaultPermission": "A",
                "securityGroups": []
            },
            "customPropertyMapping": {
                "propertyName": "",
                "source": "C"
            }
        },
        {
            "type": "question",
            "pos": 24,
            "objectName": "_Q23",
            "id": 8848,
            "SurveyBuilderV3CMSObjGUID": "2E46C5F3-AF64-4EB9-99D3-E920455F33B6",
            "template": "",
            "advancedQuestionTypeGUID": null,
            "excludeFromScoring": false,
            "sentimetricsEnabled": false,
            "isSearchAsYouTypeEnabled": false,
            "questionLayoutID": 2,
            "isNumbered": true,
            "breakLargeAnswerSetPositionID": 0,
            "isAllowAttachments": false,
            "attachmentSize": 3,
            "attachmentNamingPattern": "",
            "predefinedNumber": "",
            "showOnlySelectedAnswersOnExport": false,
            "isRequired": true,
            "minAttachmentsRequired": null,
            "maxAttachmentsAllowed": null,
            "minAnswersRequired": null,
            "maxAnswersRequired": null,
            "customFunction": "",
            "targetMessage": null,
            "isAllowGoingBack": 3,
            "isAutoAdvanceOnCompletion": 3,
            "isGestureSwipeEnabled": 3,
            "isJumpEnabled": 3,
            "isFixedToPosition": false,
            "orderGroup": null,
            "allowedAnswers": "",
            "hintMin": "",
            "hintMax": "",
            "hintFunction": "",
            "protoAnswerID": 8,
            "dataClassification": 0,
            "text": "NUMERIC Question",
            "instructions": "",
            "analysisQuestionCategory1": "",
            "analysisQuestionCategory2": "",
            "analysisQuestionCategory3": "",
            "isGlobalizationDisabled": false,
            "comment": {
                "type": 2,
                "objectName": "_C",
                "datatype": 2,
                "length": 10,
                "scale": 0,
                "commentContentRule": 1,
                "commentRequirementRule": 1,
                "minCommentLength": null,
                "maxCommentLength": null,
                "minCommentValue": "-2147483648",
                "maxCommentValue": "2147483647",
                "commentRange": "",
                "regExp": "",
                "placeholder": "",
                "label": ""
            },
            "answers": {
                "options": {},
                "answerSetID": 8,
                "objectName": "_AS"
            },
            "security": {
                "defaultPermission": "A",
                "securityGroups": []
            },
            "customPropertyMapping": {
                "propertyName": "",
                "source": "C"
            }
        },
        {
            "type": "loopEnd",
            "pos": 25
        },
        {
            "type": "loopStart",
            "pos": 26,
            "id": 10073,
            "objectName": "_L26",
            "template": "",
            "SurveyBuilderV3CMSObjGUID": "A7C7BA09-0741-4F80-A99F-24C8F045E0B0",
            "orientation": 0,
            "displayAs": 0,
            "showLoopText": true,
            "showQuestionTexts": true,
            "showChildNodeTexts": true,
            "showIterationTexts": true,
            "iteratesOn": "",
            "iterationType": "f",
            "fixedIterationsCount": 15,
            "excludeFromIterations": null,
            "isNumbered": true,
            "predefinedNumber": "",
            "displayMode": 1,
            "maxIterations": null,
            "DDFExport": "h",
            "isFixedToPosition": false,
            "orderGroup": null,
            "protoAnswerID": 8,
            "allowWatermarks": false,
            "protoQuestionID": null,
            "sliderImages": "",
            "isGlobalizationDisabled": false,
            "answers": {
                "options": {},
                "answerSetID": 8,
                "objectName": "_AS"
            },
            "text": "LOOP Title",
            "instructions": "",
            "security": {
                "defaultPermission": "A",
                "securityGroups": []
            }
        },
        {
            "type": "question",
            "pos": 27,
            "objectName": "_Q28",
            "id": 8852,
            "SurveyBuilderV3CMSObjGUID": "FCE61FC3-99D3-455A-B635-517183475C26",
            "template": "",
            "advancedQuestionTypeGUID": null,
            "excludeFromScoring": false,
            "sentimetricsEnabled": false,
            "isSearchAsYouTypeEnabled": false,
            "questionLayoutID": 2,
            "isNumbered": true,
            "breakLargeAnswerSetPositionID": 0,
            "isAllowAttachments": false,
            "attachmentSize": 3,
            "attachmentNamingPattern": "",
            "predefinedNumber": "",
            "showOnlySelectedAnswersOnExport": true,
            "isRequired": true,
            "minAttachmentsRequired": null,
            "maxAttachmentsAllowed": null,
            "minAnswersRequired": null,
            "maxAnswersRequired": null,
            "customFunction": "",
            "targetMessage": null,
            "isAllowGoingBack": 3,
            "isAutoAdvanceOnCompletion": 3,
            "isGestureSwipeEnabled": 3,
            "isJumpEnabled": 3,
            "isFixedToPosition": false,
            "orderGroup": null,
            "allowedAnswers": "",
            "hintMin": "",
            "hintMax": "",
            "hintFunction": "",
            "protoAnswerID": 1351,
            "dataClassification": 0,
            "text": "CATEGORICAL Question",
            "instructions": "",
            "analysisQuestionCategory1": "",
            "analysisQuestionCategory2": "",
            "analysisQuestionCategory3": "",
            "isGlobalizationDisabled": false,
            "answers": {
                "options": {
                    "1": {
                        "objectName": "_1",
                        "answerSetReference": "",
                        "spssCode": null
                    },
                    "2": {
                        "objectName": "_2",
                        "answerSetReference": "",
                        "spssCode": null
                    },
                    "3": {
                        "objectName": "_3",
                        "answerSetReference": "",
                        "spssCode": null
                    },
                    "4": {
                        "objectName": "_4",
                        "answerSetReference": "",
                        "spssCode": null
                    },
                    "5": {
                        "objectName": "_5",
                        "answerSetReference": "",
                        "spssCode": null
                    }
                },
                "answerSetID": 1351,
                "objectName": "_AS"
            },
            "security": {
                "defaultPermission": "A",
                "securityGroups": []
            },
            "customPropertyMapping": {
                "propertyName": "",
                "source": "A"
            }
        },
        {
            "type": "loopEnd",
            "pos": 28
        }
    ],
    "answersRef": {
        "8": {
            "answers": [],
            "answerOrderType": "D",
            "isDisplayAsDropdown": false,
            "startingPoints": null,
            "isMultipleSelection": false,
            "isShowMeasure": false,
            "limitMaxMeasure": null,
            "limitMinMeasure": null,
            "forcedMaxMeasure": null
        },
        "1197": {
            "answers": [
                {
                    "position": null,
                    "pos": 1,
                    "measure": 10,
                    "isExclusive": false,
                    "isOtherSpecify": false,
                    "otherDisplayType": 1,
                    "isIgnoreFilter": false,
                    "isDisplayAsHeader": false,
                    "fixedToPosition": false,
                    "displayOrder": null,
                    "group": false,
                    "groupID": "",
                    "text": "Yes"
                },
                {
                    "position": null,
                    "pos": 2,
                    "measure": 0,
                    "isExclusive": false,
                    "isOtherSpecify": false,
                    "otherDisplayType": 1,
                    "isIgnoreFilter": false,
                    "isDisplayAsHeader": false,
                    "fixedToPosition": false,
                    "displayOrder": null,
                    "group": false,
                    "groupID": "",
                    "text": "No"
                }
            ],
            "answerOrderType": "D",
            "isDisplayAsDropdown": false,
            "startingPoints": null,
            "isMultipleSelection": false,
            "isShowMeasure": false,
            "limitMaxMeasure": null,
            "limitMinMeasure": null,
            "forcedMaxMeasure": null
        },
        "1347": {
            "answers": [
                {
                    "position": null,
                    "pos": 1,
                    "measure": 3,
                    "isExclusive": false,
                    "isOtherSpecify": false,
                    "otherDisplayType": 1,
                    "isIgnoreFilter": false,
                    "isDisplayAsHeader": false,
                    "fixedToPosition": false,
                    "displayOrder": null,
                    "group": false,
                    "groupID": "",
                    "text": "Excellent"
                },
                {
                    "position": null,
                    "pos": 2,
                    "measure": 2,
                    "isExclusive": false,
                    "isOtherSpecify": false,
                    "otherDisplayType": 1,
                    "isIgnoreFilter": false,
                    "isDisplayAsHeader": false,
                    "fixedToPosition": false,
                    "displayOrder": null,
                    "group": false,
                    "groupID": "",
                    "text": "Good"
                },
                {
                    "position": null,
                    "pos": 3,
                    "measure": 1,
                    "isExclusive": false,
                    "isOtherSpecify": false,
                    "otherDisplayType": 1,
                    "isIgnoreFilter": false,
                    "isDisplayAsHeader": false,
                    "fixedToPosition": false,
                    "displayOrder": null,
                    "group": false,
                    "groupID": "",
                    "text": "Fair"
                },
                {
                    "position": null,
                    "pos": 4,
                    "measure": 0,
                    "isExclusive": false,
                    "isOtherSpecify": false,
                    "otherDisplayType": 1,
                    "isIgnoreFilter": false,
                    "isDisplayAsHeader": false,
                    "fixedToPosition": false,
                    "displayOrder": null,
                    "group": false,
                    "groupID": "",
                    "text": "Poor"
                }
            ],
            "answerOrderType": "D",
            "isDisplayAsDropdown": false,
            "startingPoints": null,
            "isMultipleSelection": false,
            "isShowMeasure": true,
            "limitMaxMeasure": null,
            "limitMinMeasure": null,
            "forcedMaxMeasure": null
        },
        "1348": {
            "answers": [
                {
                    "position": null,
                    "pos": 1,
                    "measure": null,
                    "isExclusive": false,
                    "isOtherSpecify": false,
                    "otherDisplayType": 1,
                    "isIgnoreFilter": false,
                    "isDisplayAsHeader": false,
                    "fixedToPosition": false,
                    "displayOrder": null,
                    "group": false,
                    "groupID": "",
                    "text": "1"
                },
                {
                    "position": null,
                    "pos": 2,
                    "measure": null,
                    "isExclusive": false,
                    "isOtherSpecify": false,
                    "otherDisplayType": 1,
                    "isIgnoreFilter": false,
                    "isDisplayAsHeader": false,
                    "fixedToPosition": false,
                    "displayOrder": null,
                    "group": false,
                    "groupID": "",
                    "text": "2"
                },
                {
                    "position": null,
                    "pos": 3,
                    "measure": null,
                    "isExclusive": false,
                    "isOtherSpecify": false,
                    "otherDisplayType": 1,
                    "isIgnoreFilter": false,
                    "isDisplayAsHeader": false,
                    "fixedToPosition": false,
                    "displayOrder": null,
                    "group": false,
                    "groupID": "",
                    "text": "3"
                },
                {
                    "position": null,
                    "pos": 4,
                    "measure": null,
                    "isExclusive": false,
                    "isOtherSpecify": false,
                    "otherDisplayType": 1,
                    "isIgnoreFilter": false,
                    "isDisplayAsHeader": false,
                    "fixedToPosition": false,
                    "displayOrder": null,
                    "group": false,
                    "groupID": "",
                    "text": "4"
                },
                {
                    "position": null,
                    "pos": 5,
                    "measure": null,
                    "isExclusive": false,
                    "isOtherSpecify": false,
                    "otherDisplayType": 1,
                    "isIgnoreFilter": false,
                    "isDisplayAsHeader": false,
                    "fixedToPosition": false,
                    "displayOrder": null,
                    "group": false,
                    "groupID": "",
                    "text": "5"
                },
                {
                    "position": null,
                    "pos": 6,
                    "measure": null,
                    "isExclusive": false,
                    "isOtherSpecify": false,
                    "otherDisplayType": 1,
                    "isIgnoreFilter": false,
                    "isDisplayAsHeader": false,
                    "fixedToPosition": false,
                    "displayOrder": null,
                    "group": false,
                    "groupID": "",
                    "text": "6"
                }
            ],
            "answerOrderType": "D",
            "isDisplayAsDropdown": false,
            "startingPoints": null,
            "isMultipleSelection": false,
            "isShowMeasure": false,
            "limitMaxMeasure": null,
            "limitMinMeasure": null,
            "forcedMaxMeasure": null
        },
        "1349": {
            "answers": [
                {
                    "position": null,
                    "pos": 1,
                    "measure": null,
                    "isExclusive": false,
                    "isOtherSpecify": false,
                    "otherDisplayType": 1,
                    "isIgnoreFilter": false,
                    "isDisplayAsHeader": false,
                    "fixedToPosition": false,
                    "displayOrder": null,
                    "group": false,
                    "groupID": "",
                    "text": "N/A"
                }
            ],
            "answerOrderType": "D",
            "isDisplayAsDropdown": false,
            "startingPoints": null,
            "isMultipleSelection": true,
            "isShowMeasure": false,
            "limitMaxMeasure": null,
            "limitMinMeasure": null,
            "forcedMaxMeasure": null
        },
        "1350": {
            "answers": [
                {
                    "position": null,
                    "pos": 1,
                    "measure": null,
                    "isExclusive": false,
                    "isOtherSpecify": false,
                    "otherDisplayType": 1,
                    "isIgnoreFilter": false,
                    "isDisplayAsHeader": false,
                    "fixedToPosition": false,
                    "displayOrder": null,
                    "group": false,
                    "groupID": "",
                    "text": "answer 1"
                },
                {
                    "position": null,
                    "pos": 2,
                    "measure": null,
                    "isExclusive": false,
                    "isOtherSpecify": false,
                    "otherDisplayType": 1,
                    "isIgnoreFilter": false,
                    "isDisplayAsHeader": false,
                    "fixedToPosition": false,
                    "displayOrder": null,
                    "group": false,
                    "groupID": "",
                    "text": "answer 2"
                },
                {
                    "position": null,
                    "pos": 3,
                    "measure": null,
                    "isExclusive": false,
                    "isOtherSpecify": false,
                    "otherDisplayType": 1,
                    "isIgnoreFilter": false,
                    "isDisplayAsHeader": false,
                    "fixedToPosition": false,
                    "displayOrder": null,
                    "group": false,
                    "groupID": "",
                    "text": "answer 3"
                },
                {
                    "position": null,
                    "pos": 4,
                    "measure": null,
                    "isExclusive": false,
                    "isOtherSpecify": true,
                    "otherDisplayType": 1,
                    "isIgnoreFilter": false,
                    "isDisplayAsHeader": false,
                    "fixedToPosition": false,
                    "displayOrder": null,
                    "group": false,
                    "groupID": "",
                    "text": "Other",
                    "otherField": {
                        "type": 2,
                        "objectName": "",
                        "datatype": 3,
                        "length": 4000,
                        "scale": -1,
                        "commentContentRule": 1,
                        "commentRequirementRule": 1,
                        "minCommentLength": null,
                        "maxCommentLength": null,
                        "minCommentValue": "",
                        "maxCommentValue": "",
                        "commentRange": "",
                        "regExp": "",
                        "placeholder": "Enter Comment here...",
                        "label": "Comment:"
                    }
                }
            ],
            "answerOrderType": "D",
            "isDisplayAsDropdown": false,
            "startingPoints": null,
            "isMultipleSelection": false,
            "isShowMeasure": false,
            "limitMaxMeasure": null,
            "limitMinMeasure": null,
            "forcedMaxMeasure": null
        },
        "1351": {
            "answers": [
                {
                    "position": null,
                    "pos": 1,
                    "measure": null,
                    "isExclusive": false,
                    "isOtherSpecify": false,
                    "otherDisplayType": 1,
                    "isIgnoreFilter": false,
                    "isDisplayAsHeader": false,
                    "fixedToPosition": false,
                    "displayOrder": null,
                    "group": false,
                    "groupID": "",
                    "text": "Brand 1"
                },
                {
                    "position": null,
                    "pos": 2,
                    "measure": null,
                    "isExclusive": false,
                    "isOtherSpecify": false,
                    "otherDisplayType": 1,
                    "isIgnoreFilter": false,
                    "isDisplayAsHeader": false,
                    "fixedToPosition": false,
                    "displayOrder": null,
                    "group": false,
                    "groupID": "",
                    "text": "Brand 2"
                },
                {
                    "position": null,
                    "pos": 3,
                    "measure": null,
                    "isExclusive": false,
                    "isOtherSpecify": false,
                    "otherDisplayType": 1,
                    "isIgnoreFilter": false,
                    "isDisplayAsHeader": false,
                    "fixedToPosition": false,
                    "displayOrder": null,
                    "group": false,
                    "groupID": "",
                    "text": "Brand 3"
                },
                {
                    "position": null,
                    "pos": 4,
                    "measure": null,
                    "isExclusive": false,
                    "isOtherSpecify": false,
                    "otherDisplayType": 1,
                    "isIgnoreFilter": false,
                    "isDisplayAsHeader": false,
                    "fixedToPosition": false,
                    "displayOrder": null,
                    "group": false,
                    "groupID": "",
                    "text": "Brand 4"
                },
                {
                    "position": null,
                    "pos": 5,
                    "measure": null,
                    "isExclusive": false,
                    "isOtherSpecify": false,
                    "otherDisplayType": 1,
                    "isIgnoreFilter": false,
                    "isDisplayAsHeader": false,
                    "fixedToPosition": false,
                    "displayOrder": null,
                    "group": false,
                    "groupID": "",
                    "text": "Brand 5"
                }
            ],
            "answerOrderType": "D",
            "isDisplayAsDropdown": false,
            "startingPoints": null,
            "isMultipleSelection": true,
            "isShowMeasure": false,
            "limitMaxMeasure": null,
            "limitMinMeasure": null,
            "forcedMaxMeasure": null
        }
    },
    "advancedScript": "",
    "objectNameInternalIDMappings": "_1|P|A\n_2|Q|A\n_3|N|A\n_4|R|A\n_5|U|A\n_A1|u|A\n_A2|v|A\n_A3|D|A\n_A4|E|A\n_A5|F|A\n_A6|G|A\n_C|n|C\n_C_4|T|C\n_L21|K|L\n_L26|V|L\n_Q11|x|Q\n_Q12|y|Q\n_Q15|A|Q\n_Q16|B|Q\n_Q17|C|Q\n_Q18|H|Q\n_Q19|I|Q\n_Q20|J|Q\n_Q23|L|Q\n_Q24|M|Q\n_Q25|O|Q\n_Q28|W|Q\n_Q6|p|Q\n_Q7|q|Q\n_Q8|r|Q\nSystem_Date|m|Q\nSystem_TimeIn|j|Q\nSystem_TimeOut|l|Q\n_G13|z|S\n_S4|o|S\n_S9|w|S\n_AS|s|W",
    "resources": [
        {
            "objectGUID": "19B8E722-5465-449D-907D-7D9C03F953A6",
            "contentType": "application/vnd.openxmlformats-officedoc",
            "extension": "docx",
            "dateLastModified": "2019-10-31T10:07:34.567",
            "filename": "DirectoroftheJCBBusinessSelfDeclaration (1).docx",
            "filePath": "DirectoroftheJCBBusinessSelfDeclaration (1).docx",
            "originalName": "DirectoroftheJCBBusinessSelfDeclaration (1)",
            "sizeInBytes": "200535",
            "downloadPath": "/mystservices/Attachments/GetAttachment.asp?AttachmentID=100046&Password=82A00852B145420E865827FFB08EC64AE68ECBBC83FD4A95B118DEFE500522B8",
            "type": "document",
            "aliases": []
        },
        {
            "objectGUID": "C095A8F5-79DC-4F10-9ACB-5ED17A3050AA",
            "contentType": "application/pdf",
            "extension": "pdf",
            "dateLastModified": "2019-10-31T11:24:10.660",
            "filename": "BMWSalesSection1.pdf",
            "filePath": "BMWSalesSection1.pdf",
            "originalName": "BMWSalesSection1",
            "sizeInBytes": "129891",
            "downloadPath": "/mystservices/Attachments/GetAttachment.asp?AttachmentID=100047&Password=8F4CC54F47194CC48E60899799A14B9CE85D2DF5F20B4FA4ABD35C2E24DDF284",
            "type": "document",
            "aliases": []
        },
        {
            "objectGUID": "958715A0-1BF7-448C-A3B7-C83D0124B011",
            "contentType": "application/pdf",
            "extension": "pdf",
            "dateLastModified": "2020-01-07T08:31:15.630",
            "filename": "Shopper Instruction Scenario 1.pdf",
            "filePath": "Shopper Instruction Scenario 1.pdf",
            "originalName": "Shopper Instruction Scenario 1",
            "sizeInBytes": "75272",
            "downloadPath": "/mystservices/Attachments/GetAttachment.asp?AttachmentID=120137&Password=F8E8A8B9DF0E418A8237D6ECCB919E9F2196C40847C94A98A1E36FDE0B77AB69",
            "type": "document",
            "aliases": []
        },
        {
            "objectGUID": "B17D7227-E417-4186-A266-E3A4C8E4E945",
            "contentType": "application/pdf",
            "extension": "pdf",
            "dateLastModified": "2020-01-07T08:31:16.163",
            "filename": "Shopper Instruction Scenario 2.pdf",
            "filePath": "Shopper Instruction Scenario 2.pdf",
            "originalName": "Shopper Instruction Scenario 2",
            "sizeInBytes": "75272",
            "downloadPath": "/mystservices/Attachments/GetAttachment.asp?AttachmentID=120138&Password=0D287072E5AE4951837652F41EB0A5321A4C9229923742DA97A997C45DCDEDFA",
            "type": "document",
            "aliases": []
        }
    ],
    "globalization": {
        "languages": {},
        "data": {
            "survey": {
                "default": {},
                "specific": {}
            },
            "custom": {},
            "system": {
                "A comment is required if the first answer (Yes in Yes/No set) is selected.": {
                    "en": {
                        "": "A comment is required if the first answer (Yes in Yes/No set) is selected."
                    }
                },
                "A comment is required if the first answer or the second answer is selected": {
                    "en": {
                        "": "A comment is required if the first answer or the second answer is selected"
                    }
                },
                "A comment is required if the first, second or third answer is selected": {
                    "en": {
                        "": "A comment is required if the first, second or third answer is selected"
                    }
                },
                "A comment is required if the first, second, or fourth answer is selected": {
                    "en": {
                        "": "A comment is required if the first, second, or fourth answer is selected"
                    }
                },
                "A comment is required if the first, second, third, or fourth answer is selected": {
                    "en": {
                        "": "A comment is required if the first, second, third, or fourth answer is selected"
                    }
                },
                "A comment is required if the fourth answer is selected": {
                    "en": {
                        "": "A comment is required if the fourth answer is selected"
                    }
                },
                "A comment is required if the second answer (No in Yes/No set) is selected": {
                    "en": {
                        "": "A comment is required if the second answer (No in Yes/No set) is selected"
                    }
                },
                "A comment is required if the second or third answer is selected": {
                    "en": {
                        "": "A comment is required if the second or third answer is selected"
                    }
                },
                "A comment is required if the third answer is selected": {
                    "en": {
                        "": "A comment is required if the third answer is selected"
                    }
                },
                "A comment or answer is required.": {
                    "ca": {
                        "": "Un commentaire ou une r??ponse est requis."
                    },
                    "en": {
                        "": "A comment or answer is required."
                    }
                },
                "A comment to this question is required.": {
                    "ca": {
                        "": "Un commentaire sur cette question est requis."
                    },
                    "en": {
                        "": "A comment to this question is required."
                    }
                },
                "A valid email address is required": {
                    "en": {
                        "": "A valid email address is required"
                    }
                },
                "An answer to this question is required.": {
                    "en": {
                        "": "An answer to this question is required."
                    }
                },
                "Apr": {
                    "en": {
                        "": "Apr"
                    }
                },
                "April": {
                    "ar": {
                        "": "??????????"
                    },
                    "bg": {
                        "": "??????????"
                    },
                    "ca": {
                        "": "Abril"
                    },
                    "cs": {
                        "": "Duben"
                    },
                    "da": {
                        "": "April"
                    },
                    "de": {
                        "": "April"
                    },
                    "el": {
                        "": "????????????????"
                    },
                    "en": {
                        "": "April"
                    },
                    "es": {
                        "": "Abril"
                    },
                    "fi": {
                        "": "Huhtikuu"
                    },
                    "fr": {
                        "": "Avril"
                    },
                    "hr": {
                        "": "Travanj"
                    },
                    "it": {
                        "": "Aprile"
                    },
                    "ja": {
                        "": "4???"
                    },
                    "ko": {
                        "": "4???"
                    },
                    "nl": {
                        "": "April"
                    },
                    "no": {
                        "": "April"
                    },
                    "pt": {
                        "": "Abril"
                    },
                    "ru": {
                        "": "????????????"
                    },
                    "sk": {
                        "": "Apr??l"
                    },
                    "sl": {
                        "": "April"
                    },
                    "sv": {
                        "": "April"
                    },
                    "vi": {
                        "": "Th??ng t??"
                    },
                    "zh": {
                        "": "??????"
                    }
                },
                "At least %min% answer options must be selected for this question.": {
                    "en": {
                        "": "At least %min% answer options must be selected for this question."
                    }
                },
                "At most %max% answer options may be selected for this question.": {
                    "en": {
                        "": "At most %max% answer options may be selected for this question."
                    }
                },
                "att_btn_delete": {
                    "en": {
                        "": "Delete"
                    }
                },
                "att_btn_edit": {
                    "en": {
                        "": "Edit"
                    }
                },
                "att_btn_edit_image": {
                    "en": {
                        "": "Edit Image"
                    }
                },
                "att_btn_move_down": {
                    "en": {
                        "": "Move down"
                    }
                },
                "att_btn_move_up": {
                    "en": {
                        "": "Move up"
                    }
                },
                "att_delete_description": {
                    "en": {
                        "": "Please enter a brief description why you are disabling this attachment"
                    },
                    "es": {
                        "": "SP Please enter a brief description why you are disabling this attachment"
                    }
                },
                "att_prop_camera_date": {
                    "en": {
                        "": "Camera date"
                    }
                },
                "att_prop_dimensions": {
                    "en": {
                        "": "Dimensions"
                    },
                    "es": {
                        "": "SP Dimensions"
                    }
                },
                "att_prop_download": {
                    "ca": {
                        "": "T??l??charger"
                    },
                    "en": {
                        "": "Download"
                    },
                    "es": {
                        "": "SP\tDownload"
                    }
                },
                "att_prop_file_name": {
                    "ca": {
                        "": "Nom de fichier"
                    },
                    "en": {
                        "": "File Name"
                    },
                    "es": {
                        "": "SP \tFile Name"
                    }
                },
                "att_prop_gps_distance": {
                    "en": {
                        "": "GPS Distance"
                    }
                },
                "att_prop_original": {
                    "ca": {
                        "": "original"
                    },
                    "en": {
                        "": "original"
                    }
                },
                "att_prop_raw": {
                    "en": {
                        "": "raw"
                    }
                },
                "att_prop_size": {
                    "ca": {
                        "": "Taille"
                    },
                    "en": {
                        "": "Size"
                    },
                    "es": {
                        "": "SP Size"
                    }
                },
                "att_prop_type": {
                    "ca": {
                        "": "Taper"
                    },
                    "en": {
                        "": "Type"
                    },
                    "es": {
                        "": "SP Type"
                    },
                    "fr": {
                        "": "Type"
                    }
                },
                "att_prop_upload_date": {
                    "ca": {
                        "": "Date de d??p??t"
                    },
                    "en": {
                        "": "Upload date"
                    },
                    "es": {
                        "": "SP Upload date"
                    }
                },
                "attachment_properties": {
                    "en": {
                        "": "Attachment Properties"
                    },
                    "es": {
                        "": "SP Attachment Properties"
                    }
                },
                "Aug": {
                    "en": {
                        "": "Aug"
                    }
                },
                "August": {
                    "ar": {
                        "": "??????????"
                    },
                    "bg": {
                        "": "????????????"
                    },
                    "ca": {
                        "": "Agost"
                    },
                    "cs": {
                        "": "Srpen"
                    },
                    "da": {
                        "": "August"
                    },
                    "de": {
                        "": "August"
                    },
                    "el": {
                        "": "??????????????????"
                    },
                    "en": {
                        "": "August"
                    },
                    "es": {
                        "": "Agosto"
                    },
                    "fi": {
                        "": "Elokuu"
                    },
                    "fr": {
                        "": "Ao??t"
                    },
                    "hr": {
                        "": "Kolovoz"
                    },
                    "it": {
                        "": "Agosto"
                    },
                    "ja": {
                        "": "8???"
                    },
                    "ko": {
                        "": "8???"
                    },
                    "nl": {
                        "": "Augustus"
                    },
                    "no": {
                        "": "August"
                    },
                    "pt": {
                        "": "Agosto"
                    },
                    "ru": {
                        "": "????????????"
                    },
                    "sk": {
                        "": "August"
                    },
                    "sl": {
                        "": "Avgust"
                    },
                    "sv": {
                        "": "Aug"
                    },
                    "vi": {
                        "": "Th??ng T??m"
                    },
                    "zh": {
                        "": "??????"
                    }
                },
                "Date required (DD.MM.YYYY)": {
                    "ca": {
                        "": "Date requise (JJ.MM.AAAA)"
                    },
                    "en": {
                        "": "Date required (DD.MM.YYYY)"
                    }
                },
                "Date required (DD/MM/YYYY)": {
                    "ca": {
                        "": "Date requise (JJ/MM/AAAA)"
                    },
                    "en": {
                        "": "Date required (DD/MM/YYYY)"
                    }
                },
                "Date required (MM/DD/YYYY)": {
                    "ca": {
                        "": "Date requise (MM/JJ/AAAA)"
                    },
                    "en": {
                        "": "Date required (MM/DD/YYYY)"
                    }
                },
                "Date required (YYYY-MM-DD)": {
                    "ca": {
                        "": "Date requise (AAAA-MM-JJ)"
                    },
                    "en": {
                        "": "Date required (YYYY-MM-DD)"
                    }
                },
                "Dec": {
                    "en": {
                        "": "Dec"
                    }
                },
                "December": {
                    "ar": {
                        "": "????????????"
                    },
                    "bg": {
                        "": "????????????????"
                    },
                    "ca": {
                        "": "Desembre"
                    },
                    "cs": {
                        "": "Prosinec"
                    },
                    "da": {
                        "": "December"
                    },
                    "de": {
                        "": "Dezember"
                    },
                    "el": {
                        "": "????????????????????"
                    },
                    "en": {
                        "": "December"
                    },
                    "es": {
                        "": "Diciembre"
                    },
                    "fi": {
                        "": "Joulukuu"
                    },
                    "fr": {
                        "": "D??cembre"
                    },
                    "hr": {
                        "": "Prosinca"
                    },
                    "it": {
                        "": "Dicembre"
                    },
                    "ja": {
                        "": "12???"
                    },
                    "ko": {
                        "": "12???"
                    },
                    "nl": {
                        "": "December"
                    },
                    "no": {
                        "": "Desember"
                    },
                    "pt": {
                        "": "Dezembro"
                    },
                    "ru": {
                        "": "??????????????"
                    },
                    "sk": {
                        "": "December"
                    },
                    "sl": {
                        "": "December"
                    },
                    "sv": {
                        "": "December"
                    },
                    "vi": {
                        "": "Th??ng m?????i hai"
                    },
                    "zh": {
                        "": "?????????"
                    }
                },
                "Feb": {
                    "en": {
                        "": "Feb"
                    }
                },
                "February": {
                    "ar": {
                        "": "????????????"
                    },
                    "bg": {
                        "": "????????????????"
                    },
                    "ca": {
                        "": "Febrer"
                    },
                    "cs": {
                        "": "??nor"
                    },
                    "da": {
                        "": "Februar"
                    },
                    "de": {
                        "": "Februar"
                    },
                    "el": {
                        "": "??????????????????????"
                    },
                    "en": {
                        "": "February"
                    },
                    "es": {
                        "": "Febrero"
                    },
                    "fi": {
                        "": "Helmikuu"
                    },
                    "fr": {
                        "": "F??vrier"
                    },
                    "hr": {
                        "": "Velja??a"
                    },
                    "it": {
                        "": "Febbraio"
                    },
                    "ja": {
                        "": "2???"
                    },
                    "ko": {
                        "": "2???"
                    },
                    "nl": {
                        "": "Februari"
                    },
                    "no": {
                        "": "Februar"
                    },
                    "pt": {
                        "": "Fevereiro"
                    },
                    "ru": {
                        "": "??????????????"
                    },
                    "sk": {
                        "": "Febru??r"
                    },
                    "sl": {
                        "": "Februar"
                    },
                    "sv": {
                        "": "Februari"
                    },
                    "vi": {
                        "": "Th??ng hai"
                    },
                    "zh": {
                        "": "??????"
                    }
                },
                "Fri": {
                    "ar": {
                        "": "????????????"
                    },
                    "bg": {
                        "": "??????"
                    },
                    "ca": {
                        "": "Divendres"
                    },
                    "cs": {
                        "": "P??tek"
                    },
                    "da": {
                        "": "Fredag"
                    },
                    "de": {
                        "": "Freitag"
                    },
                    "el": {
                        "": "??????????????????"
                    },
                    "en": {
                        "": "Fri"
                    },
                    "es": {
                        "": "Vie"
                    },
                    "fi": {
                        "": "Perjantai"
                    },
                    "fr": {
                        "": "Ven."
                    },
                    "hr": {
                        "": "Petak"
                    },
                    "it": {
                        "": "Ven"
                    },
                    "nl": {
                        "": "Vrijdag"
                    },
                    "no": {
                        "": "Fre"
                    },
                    "sk": {
                        "": "Piatok"
                    },
                    "sl": {
                        "": "Pe"
                    },
                    "sv": {
                        "": "Fredag"
                    },
                    "vi": {
                        "": "Th 6"
                    }
                },
                "Friday": {
                    "ar": {
                        "": "????????????"
                    },
                    "ca": {
                        "": "Divendres"
                    },
                    "cs": {
                        "": "P??tek"
                    },
                    "da": {
                        "": "Fredag"
                    },
                    "de": {
                        "": "Freitag"
                    },
                    "el": {
                        "": "??????????????????"
                    },
                    "en": {
                        "": "Friday"
                    },
                    "es": {
                        "": "Viernes"
                    },
                    "fi": {
                        "": "Perjantai"
                    },
                    "fr": {
                        "": "Vendredi"
                    },
                    "hr": {
                        "": "Petak"
                    },
                    "it": {
                        "": "Venerd??"
                    },
                    "ja": {
                        "": "?????????"
                    },
                    "ko": {
                        "": "?????????"
                    },
                    "nl": {
                        "": "Vrijdag"
                    },
                    "no": {
                        "": "Fredag"
                    },
                    "pt": {
                        "": "Sexta-feira"
                    },
                    "ru": {
                        "": "?? ??????????????"
                    },
                    "sk": {
                        "": "Piatok"
                    },
                    "sl": {
                        "": "Pe"
                    },
                    "sv": {
                        "": "Fredag"
                    },
                    "vi": {
                        "": "Th??? S??u"
                    },
                    "zh": {
                        "": "??????"
                    }
                },
                "Invalid Date. Cannot use future dates": {
                    "ar": {
                        "": "?????????? ?????? ??????????. ???? ???????? ?????????????? ???? ???????????????? ????????????????"
                    },
                    "bg": {
                        "": "?????????????????? ????????: ???? ???????? ???? ?? ???????????? ????????"
                    },
                    "ca": {
                        "": "Data no v??lida. No es pot usar dades futures"
                    },
                    "cs": {
                        "": "Neplatn?? datum. Nelze pou????t budouc?? term??ny"
                    },
                    "da": {
                        "": "Ugyldig dato. Kan ikke bruge fremtidige datoer"
                    },
                    "de": {
                        "": "Ung??ltiges Datum. Kann nicht benutzt werden k??nftig Termine"
                    },
                    "el": {
                        "": "?????????? ????????????????????. ?????? ?????????? ???????????? ?? ?????????? ?????????????????????? ??????????????????????"
                    },
                    "en": {
                        "": "Invalid Date. Cannot use future dates"
                    },
                    "es": {
                        "": "Fecha no v??lida. No se puede usar fechas futuras"
                    },
                    "fi": {
                        "": "P??iv??m????r?? ei kelpaa. Ei voi k??ytt???? tulevaisuus p??iv??m????r??t"
                    },
                    "fr": {
                        "": "Date non valide. Impossible d'utiliser des dates futures"
                    },
                    "hr": {
                        "": "Pogre??na Datum. Ne mo??e se koristiti budu??nosti datumi"
                    },
                    "it": {
                        "": "Data non valida. Impossibile utilizzare date future"
                    },
                    "nl": {
                        "": "Ongeldige datum. Kan geen gebruik maken van de toekomst"
                    },
                    "no": {
                        "": "Ugyldig dato. Kan ikke bruke framtidige datoer"
                    },
                    "sk": {
                        "": "Neplatn?? d??tum. Nemo??no pou??i?? bud??cej term??ny"
                    },
                    "sl": {
                        "": "Neveljaven datum. Ne morete uporabljati prihodnjih datumov"
                    },
                    "sv": {
                        "": "Ogiltigt datum. Kan inte anv??nda framtida datum"
                    },
                    "vi": {
                        "": "Ng??y kh??ng h???p l???. Kh??ng th??? s??? d???ng c??c ng??y trong t????ng lai"
                    }
                },
                "Invalid Date. Date should be reasonably past": {
                    "ar": {
                        "": "?????????? ?????? ??????????. ?????????????? ?????????? ???? ???????? ?????????? ????????????"
                    },
                    "bg": {
                        "": "?????????????????? ????????. ???????????? ???? ???????????? ???? ?? ?????????????? ??????????"
                    },
                    "ca": {
                        "": "Data no v??lida. Data hauria de ser raonablement passat"
                    },
                    "cs": {
                        "": "Neplatn?? datum. Datum by m??lo b??t rozumn?? minulosti"
                    },
                    "da": {
                        "": "Ugyldig dato. Dato skal v??re rimeligt tidligere"
                    },
                    "de": {
                        "": "Ung??ltiges Datum. Datum sollte vern??nftigerweise Vergangenheit"
                    },
                    "el": {
                        "": "?????????? ????????????????????. ???????????????????? ???????????? ???? ???????????? ???? ?????????? ????????????????"
                    },
                    "en": {
                        "": "Invalid Date. Date should be reasonably past"
                    },
                    "es": {
                        "": "Fecha no v??lida. Fecha en que debe ser razonablemente pasado"
                    },
                    "fi": {
                        "": "P??iv??m????r?? ei kelpaa. P??iv??m????r?? olisi kohtuudella viime"
                    },
                    "fr": {
                        "": "Date non valide. Date doit ??tre raisonnablement pass??"
                    },
                    "hr": {
                        "": "Pogre??na Datum. Datum bi trebao biti razumno pro??losti"
                    },
                    "it": {
                        "": "Data non valida. Data dovrebbe essere ragionevolmente passato"
                    },
                    "nl": {
                        "": "Ongeldige datum. Datum moet redelijk verleden"
                    },
                    "no": {
                        "": "Ugyldig dato. Dato skal v??re rimelig grunn til fortiden"
                    },
                    "sk": {
                        "": "Neplatn?? d??tum. D??tum by malo by?? rozumne minulosti"
                    },
                    "sl": {
                        "": "Neveljaven datum. Datum mora biti v razumni preteklosti"
                    },
                    "sv": {
                        "": "Ogiltigt datum. Datum b??r rimligen tidigare"
                    },
                    "vi": {
                        "": "Ng??y kh??ng h???p l???. Ng??y n??n ???????c h???p l?? trong qu?? kh???"
                    }
                },
                "Invalid Date.Date cannot be before the Start Date.": {
                    "en": {
                        "": "Invalid Date.Date cannot be before the Start Date."
                    }
                },
                "Jan": {
                    "en": {
                        "": "Jan"
                    }
                },
                "January": {
                    "ar": {
                        "": "??????????"
                    },
                    "bg": {
                        "": "????????????"
                    },
                    "ca": {
                        "": "Gener"
                    },
                    "cs": {
                        "": "Leden"
                    },
                    "da": {
                        "": "Januar"
                    },
                    "de": {
                        "": "Januar"
                    },
                    "el": {
                        "": "????????????????????"
                    },
                    "en": {
                        "": "January"
                    },
                    "es": {
                        "": "Enero"
                    },
                    "fi": {
                        "": "Tammikuu"
                    },
                    "fr": {
                        "": "Janvier"
                    },
                    "hr": {
                        "": "Sje??anj"
                    },
                    "it": {
                        "": "Gennaio"
                    },
                    "ja": {
                        "": "1???"
                    },
                    "ko": {
                        "": "1???"
                    },
                    "nl": {
                        "": "Jan"
                    },
                    "no": {
                        "": "Januar"
                    },
                    "pt": {
                        "": "Janeiro"
                    },
                    "ru": {
                        "": "????????????"
                    },
                    "sk": {
                        "": "Janu??r"
                    },
                    "sl": {
                        "": "Januar"
                    },
                    "sv": {
                        "": "Januari"
                    },
                    "vi": {
                        "": "Th??ng m???t"
                    },
                    "zh": {
                        "": "??????"
                    }
                },
                "Jul": {
                    "en": {
                        "": "Jul"
                    }
                },
                "July": {
                    "ar": {
                        "": "????????"
                    },
                    "bg": {
                        "": "??????"
                    },
                    "ca": {
                        "": "Juliol"
                    },
                    "cs": {
                        "": "??ervenec"
                    },
                    "da": {
                        "": "Juli"
                    },
                    "de": {
                        "": "Juli"
                    },
                    "el": {
                        "": "??????????????"
                    },
                    "en": {
                        "": "July"
                    },
                    "es": {
                        "": "Julio"
                    },
                    "fi": {
                        "": "Hein??kuu"
                    },
                    "fr": {
                        "": "Juillet"
                    },
                    "hr": {
                        "": "Srpanj"
                    },
                    "it": {
                        "": "Luglio"
                    },
                    "ja": {
                        "": "7???"
                    },
                    "ko": {
                        "": "7???"
                    },
                    "nl": {
                        "": "Juli"
                    },
                    "no": {
                        "": "Juli"
                    },
                    "pt": {
                        "": "Julho"
                    },
                    "ru": {
                        "": "????????"
                    },
                    "sk": {
                        "": "J??l"
                    },
                    "sl": {
                        "": "Julij"
                    },
                    "sv": {
                        "": "Juli"
                    },
                    "vi": {
                        "": "Th??ng B???y"
                    },
                    "zh": {
                        "": "??????"
                    }
                },
                "Jun": {
                    "en": {
                        "": "Jun"
                    }
                },
                "June": {
                    "ar": {
                        "": "????????????"
                    },
                    "bg": {
                        "": "??????"
                    },
                    "ca": {
                        "": "Juny"
                    },
                    "cs": {
                        "": "??erven"
                    },
                    "da": {
                        "": "Juni"
                    },
                    "de": {
                        "": "Juni"
                    },
                    "el": {
                        "": "??????????????"
                    },
                    "en": {
                        "": "June"
                    },
                    "es": {
                        "": "Junio"
                    },
                    "fi": {
                        "": "Kes??kuu"
                    },
                    "fr": {
                        "": "Juin"
                    },
                    "hr": {
                        "": "Lipanj"
                    },
                    "it": {
                        "": "Giugno"
                    },
                    "ja": {
                        "": "6???"
                    },
                    "ko": {
                        "": "6???"
                    },
                    "nl": {
                        "": "Juni"
                    },
                    "no": {
                        "": "Juni"
                    },
                    "pt": {
                        "": "Junho"
                    },
                    "ru": {
                        "": "????????"
                    },
                    "sk": {
                        "": "J??n"
                    },
                    "sl": {
                        "": "Junij"
                    },
                    "sv": {
                        "": "Juni"
                    },
                    "vi": {
                        "": "Th??ng S??u"
                    },
                    "zh": {
                        "": "??????"
                    }
                },
                "ma_audio": {
                    "ca": {
                        "": "l'audio"
                    },
                    "en": {
                        "": "Audio"
                    }
                },
                "ma_button_attach_image": {
                    "ca": {
                        "": "Pi??ce jointe"
                    },
                    "en": {
                        "": "Attach File"
                    },
                    "es": {
                        "": "SP Attach File"
                    }
                },
                "ma_button_cancel": {
                    "ca": {
                        "": "Annuler"
                    },
                    "en": {
                        "": "Cancel"
                    },
                    "fr": {
                        "": "Annuler"
                    }
                },
                "ma_button_choose_photo": {
                    "ca": {
                        "": "Choisissez une photo"
                    },
                    "en": {
                        "": "Choose Photo"
                    }
                },
                "ma_button_choose_photo_or_audio_file": {
                    "ca": {
                        "": "Choisissez une image ou un fichier audio"
                    },
                    "en": {
                        "": "Pick Image or Audio file"
                    }
                },
                "ma_button_clear": {
                    "ca": {
                        "": "D??gager"
                    },
                    "en": {
                        "": "Clear"
                    }
                },
                "ma_button_close": {
                    "ca": {
                        "": "Fermer"
                    },
                    "en": {
                        "": "Close"
                    },
                    "es": {
                        "": "SP Close"
                    }
                },
                "ma_button_decline": {
                    "ca": {
                        "": "Refuser l'enqu??te"
                    },
                    "en": {
                        "": "Decline Survey"
                    }
                },
                "ma_button_decline_survey": {
                    "ca": {
                        "": "D??clin"
                    },
                    "en": {
                        "": "Decline"
                    }
                },
                "ma_button_jump": {
                    "ca": {
                        "": "Sauter"
                    },
                    "en": {
                        "": "Jump"
                    }
                },
                "ma_button_next": {
                    "ca": {
                        "": "Suivant"
                    },
                    "en": {
                        "": "Next"
                    }
                },
                "ma_button_ok": {
                    "ca": {
                        "": "D'accord"
                    },
                    "en": {
                        "": "Ok"
                    }
                },
                "ma_button_previous": {
                    "ca": {
                        "": "Pr??c??dent"
                    },
                    "en": {
                        "": "Previous"
                    }
                },
                "ma_button_record_audio": {
                    "ca": {
                        "": "Enregistrement audio"
                    },
                    "en": {
                        "": "Record Audio"
                    }
                },
                "ma_button_save_survey": {
                    "ca": {
                        "": "Fait"
                    },
                    "en": {
                        "": "Done"
                    }
                },
                "ma_button_scan_barcode": {
                    "ca": {
                        "": "Scanner le code-barres"
                    },
                    "en": {
                        "": "Scan Barcode"
                    }
                },
                "ma_button_scroll": {
                    "ca": {
                        "": "Faire d??filer"
                    },
                    "en": {
                        "": "Scroll"
                    }
                },
                "ma_button_take_photo": {
                    "ca": {
                        "": "Prendre une photo"
                    },
                    "en": {
                        "": "Take Photo"
                    }
                },
                "ma_button_today": {
                    "ca": {
                        "": "Aujourd'hui"
                    },
                    "en": {
                        "": "Today"
                    }
                },
                "ma_camera": {
                    "ca": {
                        "": "Cam??ra"
                    },
                    "en": {
                        "": "Camera"
                    }
                },
                "ma_dropdown_select": {
                    "ca": {
                        "": "- S??lectionnez -"
                    },
                    "en": {
                        "": "- Select -"
                    }
                },
                "ma_err_survey_init": {
                    "ca": {
                        "": "??chec de l'initialisation de l'enqu??te"
                    },
                    "en": {
                        "": "Survey Init Failed"
                    }
                },
                "ma_error_survey_not_completed": {
                    "en": {
                        "": "Your survey data is being saved, but your survey cannot be submitted due to validation problems. Your data is safe, but please contact support and provide them the following information:<br><br>Job ID: %SIID% <br>Form ID: %PID% <br>Problems detected in:<br><br>%ERRORS_LIST%<br><br>"
                    }
                },
                "ma_filetype_audio": {
                    "en": {
                        "": "Audio"
                    }
                },
                "ma_filetype_image": {
                    "ca": {
                        "": "Image"
                    },
                    "en": {
                        "": "Image"
                    }
                },
                "ma_gallery": {
                    "ca": {
                        "": "Galerie"
                    },
                    "en": {
                        "": "Gallery"
                    }
                },
                "ma_hint_enter_comment": {
                    "ca": {
                        "": "Entrez votre commentaire ici."
                    },
                    "en": {
                        "": "Enter your comment here."
                    }
                },
                "ma_hint_enter_comment1": {
                    "ca": {
                        "": "Entrez un commentaire..."
                    },
                    "en": {
                        "": "Enter comment..."
                    }
                },
                "ma_jump_list_next": {
                    "ca": {
                        "": "Suivante"
                    },
                    "en": {
                        "": "Next"
                    }
                },
                "ma_jump_list_page_of": {
                    "en": {
                        "": "P %page%/%maxpage%"
                    }
                },
                "ma_jump_list_previous": {
                    "en": {
                        "": "Prev"
                    }
                },
                "ma_jump_list_search_placeholder": {
                    "en": {
                        "": "Search..."
                    }
                },
                "ma_message_confirm_decline": {
                    "en": {
                        "": "If you decline the survey it will be revoked from your Inbox. Are you sure?"
                    }
                },
                "ma_message_delete_image": {
                    "ca": {
                        "": "Veuillez confirmer que vous souhaitez supprimer cette pi??ce jointe. Cette action ne peut pas ??tre annul??e."
                    },
                    "en": {
                        "": "Please confirm that you want to delete this attachment. This action cannot be undone."
                    }
                },
                "ma_message_delete_image_w8": {
                    "ca": {
                        "": "Veuillez confirmer que vous souhaitez supprimer cette image."
                    },
                    "en": {
                        "": "\"Please confirm that you want to delete this image."
                    }
                },
                "ma_message_enter_practice": {
                    "en": {
                        "": "ANY DATA ENTERED IN PRACTICE MODE WILL NOT BE RETAINED. IF YOU ARE INTERVIEWING A REAL RESPONDENT TAP CANCEL AND THEN START."
                    }
                },
                "ma_message_error_init_camera": {
                    "ca": {
                        "": "MobiAudit n'a pas pu initialiser la cam??ra. Veuillez fermer toutes les applications susceptibles d'utiliser actuellement l'appareil photo et r??essayer."
                    },
                    "en": {
                        "": "MobiAudit was unable to initialize the camera. Please shut down any app(s) that may be currently using the camera and try again."
                    }
                },
                "ma_message_error_survey_was_killed": {
                    "en": {
                        "": "WARNING: MobiAudit has detected a problem. Your survey answers were deleted by your device???s operating system. Possible reasons why this occurred:<br/><br/> ?? ??- You have enabled the \"Don't keep activities\" option in your device???s Development Options menu. Please ensure that the option is disabled.<br/><br/> ?? ??- Your device is extremely low on memory. Try closing some of the apps you are not using."
                    }
                },
                "ma_message_loading": {
                    "ca": {
                        "": "Chargement. S'il vous pla??t, attendez..."
                    },
                    "en": {
                        "": "Loading. Please wait..."
                    }
                },
                "ma_message_location_consent": {
                    "ca": {
                        "": "MobiAudit souhaite acc??der ?? la position de votre appareil."
                    },
                    "en": {
                        "": "MobiAudit wants to access your device's location."
                    }
                },
                "ma_message_saving_survey": {
                    "ca": {
                        "": "Enregistrement de l'enqu??te. S'il vous pla??t, attendez..."
                    },
                    "en": {
                        "": "Saving survey. Please wait..."
                    }
                },
                "ma_practice_web_status_message": {
                    "en": {
                        "": "You are in practice mode."
                    }
                },
                "ma_practice_web_warning_message": {
                    "en": {
                        "": "Data entered during practice mode is discarded."
                    }
                },
                "ma_search_as_you_type_done": {
                    "ca": {
                        "": "Fait"
                    },
                    "en": {
                        "": "Done"
                    }
                },
                "ma_search_as_you_type_exclusive_warning": {
                    "ca": {
                        "": "Vous avez s??lectionn?? une r??ponse exclusive et toutes les autres r??ponses seront supprim??es. Poursuivre la s??lection?"
                    },
                    "en": {
                        "": "You have selected an exclusive answer and all other answers will be removed. Proceed with the selection?"
                    }
                },
                "ma_search_as_you_type_select": {
                    "ca": {
                        "": "S??lectionner"
                    },
                    "en": {
                        "": "Select"
                    }
                },
                "ma_setting_use_location": {
                    "ca": {
                        "": "Utilisez votre emplacement"
                    },
                    "en": {
                        "": "Use your location"
                    }
                },
                "ma_show_only_errors": {
                    "ca": {
                        "": "les erreurs"
                    },
                    "en": {
                        "": "Errors"
                    }
                },
                "ma_show_only_sections": {
                    "ca": {
                        "": "Sections"
                    },
                    "en": {
                        "": "Sections"
                    }
                },
                "ma_start_date_not_reached_message": {
                    "ca": {
                        "": "Cette enqu??te ne peut pas ??tre compl??t??e avant sa date de d??but: # date #. Les modifications que vous apportez ne seront pas enregistr??es."
                    },
                    "en": {
                        "": "This survey cannot be completed before its start date: #date#. Any changes you make will not be saved."
                    }
                },
                "ma_string_no": {
                    "en": {
                        "": "No"
                    }
                },
                "ma_string_yes": {
                    "ca": {
                        "": "Oui"
                    },
                    "en": {
                        "": "Yes"
                    }
                },
                "ma_title_activity_record": {
                    "ca": {
                        "": "Enregistreur audio"
                    },
                    "en": {
                        "": "Audio Recorder"
                    }
                },
                "ma_title_alert": {
                    "ca": {
                        "": "Alerte"
                    },
                    "en": {
                        "": "Alert"
                    }
                },
                "ma_title_attachment_type": {
                    "ca": {
                        "": "Choisissez le type de pi??ce jointe:"
                    },
                    "en": {
                        "": "Choose attachment type:"
                    }
                },
                "ma_title_attention": {
                    "ca": {
                        "": "Attention"
                    },
                    "en": {
                        "": "Attention"
                    }
                },
                "ma_title_confirm": {
                    "ca": {
                        "": "Confirmer"
                    },
                    "en": {
                        "": "Confirm"
                    }
                },
                "ma_title_decline_reason": {
                    "ca": {
                        "": "Refus de l'enqu??te"
                    },
                    "en": {
                        "": "Survey Decline"
                    }
                },
                "ma_title_error": {
                    "en": {
                        "": "Error"
                    }
                },
                "ma_title_inbox": {
                    "en": {
                        "": "Inbox"
                    }
                },
                "ma_title_recorder": {
                    "en": {
                        "": "Recorder"
                    }
                },
                "ma_video_file_not_found": {
                    "ca": {
                        "": "Impossible de charger cette vid??o - vous ??tes actuellement hors ligne. Pour visionner cette vid??o, veuillez v??rifier votre connexion Internet, puis fermez et rouvrez l'enqu??te."
                    },
                    "en": {
                        "": "This video cannot load ??? you are currently offline. To view this video please check your internet connection and then close and re-open the survey."
                    }
                },
                "Mar": {
                    "en": {
                        "": "Mar"
                    }
                },
                "March": {
                    "ar": {
                        "": "????????"
                    },
                    "bg": {
                        "": "????????"
                    },
                    "ca": {
                        "": "Mar??"
                    },
                    "cs": {
                        "": "B??ezen"
                    },
                    "da": {
                        "": "Marts"
                    },
                    "de": {
                        "": "M??rz"
                    },
                    "el": {
                        "": "????????????"
                    },
                    "en": {
                        "": "March"
                    },
                    "es": {
                        "": "Marcha"
                    },
                    "fi": {
                        "": "Maaliskuu"
                    },
                    "fr": {
                        "": "Mars"
                    },
                    "hr": {
                        "": "O??ujak"
                    },
                    "it": {
                        "": "Marzo"
                    },
                    "ja": {
                        "": "3???"
                    },
                    "ko": {
                        "": "3???"
                    },
                    "nl": {
                        "": "Maart"
                    },
                    "no": {
                        "": "Mars"
                    },
                    "pt": {
                        "": "Mar??o"
                    },
                    "ru": {
                        "": "????????"
                    },
                    "sk": {
                        "": "Marec"
                    },
                    "sl": {
                        "": "Marec"
                    },
                    "sv": {
                        "": "Mars"
                    },
                    "vi": {
                        "": "Th??ng ba"
                    },
                    "zh": {
                        "": "??????"
                    }
                },
                "Maximum number of attachments allowed: #": {
                    "en": {
                        "": "Maximum number of attachments allowed: #"
                    }
                },
                "May": {
                    "ar": {
                        "": "????????"
                    },
                    "bg": {
                        "": "??????"
                    },
                    "ca": {
                        "": "Maig"
                    },
                    "cs": {
                        "": "Kv??ten"
                    },
                    "da": {
                        "": "Mai"
                    },
                    "de": {
                        "": "Mai"
                    },
                    "el": {
                        "": "??????????"
                    },
                    "en": {
                        "": "May"
                    },
                    "es": {
                        "": "Mayo"
                    },
                    "fi": {
                        "": "Toukokuu"
                    },
                    "fr": {
                        "": "Mai"
                    },
                    "hr": {
                        "": "Svibanj"
                    },
                    "it": {
                        "": "Maggio"
                    },
                    "ja": {
                        "": "5???"
                    },
                    "ko": {
                        "": "5???"
                    },
                    "nl": {
                        "": "Mei"
                    },
                    "no": {
                        "": "Mai"
                    },
                    "pt": {
                        "": "Maio"
                    },
                    "ru": {
                        "": "??????"
                    },
                    "sk": {
                        "": "M??j"
                    },
                    "sl": {
                        "": "Maj"
                    },
                    "sv": {
                        "": "Maj"
                    },
                    "vi": {
                        "": "Thang N??m"
                    },
                    "zh": {
                        "": "??????"
                    }
                },
                "Minimum number of attachments required: #": {
                    "ca": {
                        "": "Nombre minimum de pi??ces jointes requises: #"
                    },
                    "en": {
                        "": "Minimum number of attachments required: #"
                    }
                },
                "Mon": {
                    "ar": {
                        "": "??????????????"
                    },
                    "bg": {
                        "": "??????"
                    },
                    "ca": {
                        "": "Dilluns"
                    },
                    "cs": {
                        "": "Pond??l??"
                    },
                    "da": {
                        "": "Mandag"
                    },
                    "de": {
                        "": "Montag"
                    },
                    "el": {
                        "": "??????????????"
                    },
                    "en": {
                        "": "Mon"
                    },
                    "es": {
                        "": "Lun."
                    },
                    "fi": {
                        "": "Maanantai"
                    },
                    "fr": {
                        "": "Lun."
                    },
                    "hr": {
                        "": "Ponedjeljak"
                    },
                    "it": {
                        "": "Lun"
                    },
                    "nl": {
                        "": "Maandag"
                    },
                    "no": {
                        "": "Man"
                    },
                    "sk": {
                        "": "Pondelok"
                    },
                    "sl": {
                        "": "Po"
                    },
                    "sv": {
                        "": "Man"
                    },
                    "vi": {
                        "": "Th 2."
                    }
                },
                "Monday": {
                    "ar": {
                        "": "??????????????"
                    },
                    "ca": {
                        "": "Dilluns"
                    },
                    "cs": {
                        "": "Pond??l??"
                    },
                    "da": {
                        "": "Mandag"
                    },
                    "de": {
                        "": "Montag"
                    },
                    "el": {
                        "": "??????????????"
                    },
                    "en": {
                        "": "Monday"
                    },
                    "es": {
                        "": "Lunes"
                    },
                    "fi": {
                        "": "Maanantai"
                    },
                    "fr": {
                        "": "Lundi"
                    },
                    "hr": {
                        "": "Ponedjeljak"
                    },
                    "it": {
                        "": "Luned??"
                    },
                    "ja": {
                        "": "?????????"
                    },
                    "ko": {
                        "": "?????????"
                    },
                    "nl": {
                        "": "Maandag"
                    },
                    "no": {
                        "": "Man"
                    },
                    "pt": {
                        "": "Segunda-feira"
                    },
                    "ru": {
                        "": "?? ??????????????????????"
                    },
                    "sk": {
                        "": "Pondelok"
                    },
                    "sl": {
                        "": "Po"
                    },
                    "sv": {
                        "": "M??ndag"
                    },
                    "vi": {
                        "": "Th??? hai"
                    },
                    "zh": {
                        "": "??????"
                    }
                },
                "Nov": {
                    "en": {
                        "": "Nov"
                    }
                },
                "November": {
                    "ar": {
                        "": "????????????"
                    },
                    "bg": {
                        "": "??????????????"
                    },
                    "ca": {
                        "": "Novembre"
                    },
                    "cs": {
                        "": "Listopad"
                    },
                    "da": {
                        "": "November"
                    },
                    "de": {
                        "": "November"
                    },
                    "el": {
                        "": "??????????????????"
                    },
                    "en": {
                        "": "November"
                    },
                    "es": {
                        "": "Noviembre"
                    },
                    "fi": {
                        "": "Marraskuu"
                    },
                    "fr": {
                        "": "Novembre"
                    },
                    "hr": {
                        "": "Studeni"
                    },
                    "it": {
                        "": "Novembre"
                    },
                    "ja": {
                        "": "11???"
                    },
                    "ko": {
                        "": "11???"
                    },
                    "nl": {
                        "": "November"
                    },
                    "no": {
                        "": "November"
                    },
                    "pt": {
                        "": "Novembro"
                    },
                    "ru": {
                        "": "????????????"
                    },
                    "sk": {
                        "": "November"
                    },
                    "sl": {
                        "": "Nov"
                    },
                    "sv": {
                        "": "November"
                    },
                    "vi": {
                        "": "Th??ng m?????i m???t"
                    },
                    "zh": {
                        "": "?????????"
                    }
                },
                "Number required": {
                    "ca": {
                        "": "Num??ro requis"
                    },
                    "en": {
                        "": "Number required"
                    }
                },
                "Oct": {
                    "en": {
                        "": "Oct"
                    }
                },
                "October": {
                    "ar": {
                        "": "????????????"
                    },
                    "bg": {
                        "": "????????????????"
                    },
                    "ca": {
                        "": "Octubre"
                    },
                    "cs": {
                        "": "????jen"
                    },
                    "da": {
                        "": "Oktober"
                    },
                    "de": {
                        "": "Oktober"
                    },
                    "el": {
                        "": "??????????????????"
                    },
                    "en": {
                        "": "October"
                    },
                    "es": {
                        "": "Octubre"
                    },
                    "fi": {
                        "": "Lokakuu"
                    },
                    "fr": {
                        "": "Octobre"
                    },
                    "hr": {
                        "": "Listopad"
                    },
                    "it": {
                        "": "Ottobre"
                    },
                    "ja": {
                        "": "10???"
                    },
                    "ko": {
                        "": "10???"
                    },
                    "nl": {
                        "": "Oktober"
                    },
                    "no": {
                        "": "Oktober"
                    },
                    "pt": {
                        "": "Outubro"
                    },
                    "ru": {
                        "": "??????????????"
                    },
                    "sk": {
                        "": "Okt??ber"
                    },
                    "sl": {
                        "": "Oktober"
                    },
                    "sv": {
                        "": "Oktober"
                    },
                    "vi": {
                        "": "Th??ng M?????i"
                    },
                    "zh": {
                        "": "??????"
                    }
                },
                "osm_reporting_survey_total": {
                    "en": {
                        "": "survey total"
                    }
                },
                "Sat": {
                    "ar": {
                        "": "??????????"
                    },
                    "bg": {
                        "": "??????"
                    },
                    "ca": {
                        "": "Dissabte"
                    },
                    "cs": {
                        "": "Sobota"
                    },
                    "da": {
                        "": "L??rdag"
                    },
                    "de": {
                        "": "Samstag"
                    },
                    "el": {
                        "": "??????????????"
                    },
                    "en": {
                        "": "Sat"
                    },
                    "es": {
                        "": "S??b"
                    },
                    "fi": {
                        "": "Lau"
                    },
                    "fr": {
                        "": "Sam."
                    },
                    "hr": {
                        "": "Subota"
                    },
                    "it": {
                        "": "Sabato"
                    },
                    "nl": {
                        "": "Zaterdag"
                    },
                    "no": {
                        "": "L??rdag"
                    },
                    "sk": {
                        "": "Sobota"
                    },
                    "sl": {
                        "": "So"
                    },
                    "sv": {
                        "": "L??rdag"
                    },
                    "vi": {
                        "": "Th 7"
                    }
                },
                "Saturday": {
                    "ar": {
                        "": "??????????"
                    },
                    "ca": {
                        "": "Dissabte"
                    },
                    "cs": {
                        "": "Sobota"
                    },
                    "da": {
                        "": "L??rdag"
                    },
                    "de": {
                        "": "Samstag"
                    },
                    "el": {
                        "": "??????????????"
                    },
                    "en": {
                        "": "Saturday"
                    },
                    "es": {
                        "": "S??bado"
                    },
                    "fi": {
                        "": "Lau"
                    },
                    "fr": {
                        "": "Samedi"
                    },
                    "hr": {
                        "": "Subota"
                    },
                    "it": {
                        "": "Sabato"
                    },
                    "ja": {
                        "": "?????????"
                    },
                    "ko": {
                        "": "?????????"
                    },
                    "nl": {
                        "": "Zaterdag"
                    },
                    "no": {
                        "": "L??rdag"
                    },
                    "pt": {
                        "": "S??bado"
                    },
                    "ru": {
                        "": "?? ??????????????"
                    },
                    "sk": {
                        "": "Sobota"
                    },
                    "sl": {
                        "": "So"
                    },
                    "sv": {
                        "": "L??rdag"
                    },
                    "vi": {
                        "": "Th??? B???y"
                    },
                    "zh": {
                        "": "??????"
                    }
                },
                "Sep": {
                    "en": {
                        "": "Sep"
                    }
                },
                "September": {
                    "ar": {
                        "": "????????????"
                    },
                    "bg": {
                        "": "??????????????????"
                    },
                    "ca": {
                        "": "Setembre"
                    },
                    "cs": {
                        "": "Z??????"
                    },
                    "da": {
                        "": "September"
                    },
                    "de": {
                        "": "September"
                    },
                    "el": {
                        "": "??????????????????????"
                    },
                    "en": {
                        "": "September"
                    },
                    "es": {
                        "": "Septiembre"
                    },
                    "fi": {
                        "": "Syyskuu"
                    },
                    "fr": {
                        "": "Septembre"
                    },
                    "hr": {
                        "": "Rujan"
                    },
                    "it": {
                        "": "Settembre"
                    },
                    "ja": {
                        "": "9???"
                    },
                    "ko": {
                        "": "9???"
                    },
                    "nl": {
                        "": "September"
                    },
                    "no": {
                        "": "September"
                    },
                    "pt": {
                        "": "Setembro"
                    },
                    "ru": {
                        "": "????????????????"
                    },
                    "sk": {
                        "": "Septembra"
                    },
                    "sl": {
                        "": "September"
                    },
                    "sv": {
                        "": "September"
                    },
                    "vi": {
                        "": "Th??ng Ch??n"
                    },
                    "zh": {
                        "": "??????"
                    }
                },
                "Sun": {
                    "ar": {
                        "": "??????"
                    },
                    "bg": {
                        "": "??????"
                    },
                    "ca": {
                        "": "Diumenge"
                    },
                    "cs": {
                        "": "Ned??le"
                    },
                    "da": {
                        "": "S??ndag"
                    },
                    "de": {
                        "": "Sonntag"
                    },
                    "el": {
                        "": "??????????????"
                    },
                    "en": {
                        "": "Sun"
                    },
                    "es": {
                        "": "Sol"
                    },
                    "fi": {
                        "": "Sun"
                    },
                    "fr": {
                        "": "Soleil"
                    },
                    "hr": {
                        "": "Nedjelja"
                    },
                    "it": {
                        "": "Domenica"
                    },
                    "nl": {
                        "": "Zondag"
                    },
                    "no": {
                        "": "S??n"
                    },
                    "sk": {
                        "": "Nede??a"
                    },
                    "sl": {
                        "": "Ne"
                    },
                    "sv": {
                        "": "S??ndag"
                    },
                    "vi": {
                        "": "CN"
                    }
                },
                "Sunday": {
                    "ar": {
                        "": "??????????"
                    },
                    "ca": {
                        "": "Diumenge"
                    },
                    "cs": {
                        "": "Ned??le"
                    },
                    "da": {
                        "": "S??ndag"
                    },
                    "de": {
                        "": "Sonntag"
                    },
                    "el": {
                        "": "??????????????"
                    },
                    "en": {
                        "": "Sunday"
                    },
                    "es": {
                        "": "Domingo"
                    },
                    "fi": {
                        "": "Sunnuntai"
                    },
                    "fr": {
                        "": "Dimanche"
                    },
                    "hr": {
                        "": "Nedjelja"
                    },
                    "it": {
                        "": "Domenica"
                    },
                    "ja": {
                        "": "?????????"
                    },
                    "ko": {
                        "": "?????????"
                    },
                    "nl": {
                        "": "Zondag"
                    },
                    "no": {
                        "": "S??ndag"
                    },
                    "pt": {
                        "": "Domingo"
                    },
                    "ru": {
                        "": "?? ??????????????????????"
                    },
                    "sk": {
                        "": "Nede??a"
                    },
                    "sl": {
                        "": "Ne"
                    },
                    "sv": {
                        "": "S??ndag"
                    },
                    "vi": {
                        "": "Ch??? Nh???t"
                    },
                    "zh": {
                        "": "?????????"
                    }
                },
                "Survey Completed.": {
                    "ca": {
                        "": "Sondage termin??."
                    },
                    "en": {
                        "": "Survey Completed."
                    }
                },
                "Survey not completed.": {
                    "ca": {
                        "": "Sondage non termin??."
                    },
                    "en": {
                        "": "Survey not completed."
                    }
                },
                "Survey not completed. Do you want to save anyway?": {
                    "ca": {
                        "": "Sondage non termin??. Voulez-vous quand m??me enregistrer?"
                    },
                    "en": {
                        "": "Survey not completed. Do you want to save anyway?"
                    }
                },
                "Survey not valid.": {
                    "en": {
                        "": "Survey not valid."
                    }
                },
                "Survey not valid. Do you want to save anyway?": {
                    "en": {
                        "": "Survey not valid. Do you want to save anyway?"
                    }
                },
                "survey_post_service_unavailable_notification": {
                    "en": {
                        "": "Service unavailable. Check your network connection and try again."
                    }
                },
                "The specified Date In conflicts with an active Blackout Definition": {
                    "en": {
                        "": "The specified Date In conflicts with an active Blackout Definition"
                    }
                },
                "Thu": {
                    "ar": {
                        "": "????????????"
                    },
                    "bg": {
                        "": "??????"
                    },
                    "ca": {
                        "": "Dj"
                    },
                    "cs": {
                        "": "??t"
                    },
                    "da": {
                        "": "Tor"
                    },
                    "de": {
                        "": "Do"
                    },
                    "el": {
                        "": "????"
                    },
                    "en": {
                        "": "Thu"
                    },
                    "es": {
                        "": "Jue"
                    },
                    "fi": {
                        "": "To"
                    },
                    "fr": {
                        "": "Jeu."
                    },
                    "hr": {
                        "": "??et"
                    },
                    "it": {
                        "": "Gio"
                    },
                    "nl": {
                        "": "Do"
                    },
                    "no": {
                        "": "Tor"
                    },
                    "sk": {
                        "": "??t"
                    },
                    "sl": {
                        "": "??et"
                    },
                    "sv": {
                        "": "Tor"
                    },
                    "vi": {
                        "": "Th 5."
                    }
                },
                "Thursday": {
                    "ar": {
                        "": "????????????"
                    },
                    "ca": {
                        "": "Dijous"
                    },
                    "cs": {
                        "": "??tvrtek"
                    },
                    "da": {
                        "": "Torsdag"
                    },
                    "de": {
                        "": "Donnerstag"
                    },
                    "el": {
                        "": "????????????"
                    },
                    "en": {
                        "": "Thursday"
                    },
                    "es": {
                        "": "Jueves"
                    },
                    "fi": {
                        "": "Torstai"
                    },
                    "fr": {
                        "": "Jeudi"
                    },
                    "hr": {
                        "": "??etvrtak"
                    },
                    "it": {
                        "": "Gioved??"
                    },
                    "ja": {
                        "": "?????????"
                    },
                    "ko": {
                        "": "?????????"
                    },
                    "nl": {
                        "": "Donderdag"
                    },
                    "no": {
                        "": "Torsdag"
                    },
                    "pt": {
                        "": "Quinta-feira"
                    },
                    "ru": {
                        "": "?? ??????????????"
                    },
                    "sk": {
                        "": "??tvrtok"
                    },
                    "sl": {
                        "": "??et"
                    },
                    "sv": {
                        "": "Torsdag"
                    },
                    "vi": {
                        "": "Th??? n??m"
                    },
                    "zh": {
                        "": "??????"
                    }
                },
                "Time required (HH:MM AM/PM)": {
                    "ca": {
                        "": "Temps requis (HH:MM AM/PM)"
                    },
                    "en": {
                        "": "Time required (HH:MM AM/PM)"
                    }
                },
                "Time required (HH:MM) - 24h": {
                    "ca": {
                        "": "Temps requis (HH:MM) - 24h"
                    },
                    "en": {
                        "": "Time required (HH:MM) - 24h"
                    }
                },
                "Time required (HH:MM:SS AM/PM)": {
                    "ca": {
                        "": "Temps requis (HH:MM:SS AM/PM)"
                    },
                    "en": {
                        "": "Time required (HH:MM:SS AM/PM)"
                    }
                },
                "Time required (HH:MM:SS) - 24h": {
                    "ca": {
                        "": "Temps requis (HH:MM:SS) - 24h"
                    },
                    "en": {
                        "": "Time required (HH:MM:SS) - 24h"
                    }
                },
                "Time required (MM:SS) - 24h": {
                    "ca": {
                        "": "Temps requis (MM:SS) - 24h"
                    },
                    "en": {
                        "": "Time required (MM:SS) - 24h"
                    }
                },
                "Time required (SS)": {
                    "ca": {
                        "": "Temps requis (SS)"
                    },
                    "en": {
                        "": "Time required (SS)"
                    }
                },
                "Time span required (HH:MM) - 24h": {
                    "en": {
                        "": "Time span required (HH:MM) - 24h"
                    }
                },
                "Time span required (HH:MM:SS) - 24h": {
                    "en": {
                        "": "Time span required (HH:MM:SS) - 24h"
                    }
                },
                "Time span required (MM:SS)?": {
                    "en": {
                        "": "Time span required (MM:SS)???"
                    }
                },
                "Time span required (SS)": {
                    "en": {
                        "": "Time span required (SS)"
                    }
                },
                "Tue": {
                    "ar": {
                        "": "????????????????"
                    },
                    "bg": {
                        "": "??????"
                    },
                    "ca": {
                        "": "Dimarts"
                    },
                    "cs": {
                        "": "??ter??"
                    },
                    "da": {
                        "": "Tirsdag"
                    },
                    "de": {
                        "": "Dienstag"
                    },
                    "el": {
                        "": "??????????"
                    },
                    "en": {
                        "": "Tue"
                    },
                    "es": {
                        "": "Mar"
                    },
                    "fi": {
                        "": "Tiistai"
                    },
                    "fr": {
                        "": "Mar."
                    },
                    "hr": {
                        "": "Utorak"
                    },
                    "it": {
                        "": "Mar"
                    },
                    "nl": {
                        "": "Dinsdag"
                    },
                    "no": {
                        "": "Tirsdag"
                    },
                    "sk": {
                        "": "Utorok"
                    },
                    "sl": {
                        "": "To"
                    },
                    "sv": {
                        "": "Tirsdag"
                    },
                    "vi": {
                        "": "Th 3."
                    }
                },
                "Tuesday": {
                    "ar": {
                        "": "????????????????"
                    },
                    "ca": {
                        "": "Dimarts"
                    },
                    "cs": {
                        "": "??ter??"
                    },
                    "da": {
                        "": "Tirsdag"
                    },
                    "de": {
                        "": "Dienstag"
                    },
                    "el": {
                        "": "??????????"
                    },
                    "en": {
                        "": "Tuesday"
                    },
                    "es": {
                        "": "Martes"
                    },
                    "fi": {
                        "": "Tiistai"
                    },
                    "fr": {
                        "": "Mardi"
                    },
                    "hr": {
                        "": "Utorak"
                    },
                    "it": {
                        "": "Marted??"
                    },
                    "ja": {
                        "": "?????????"
                    },
                    "ko": {
                        "": "?????????"
                    },
                    "nl": {
                        "": "Dinsdag"
                    },
                    "no": {
                        "": "Tirsdag"
                    },
                    "pt": {
                        "": "Ter??a-feira"
                    },
                    "ru": {
                        "": "???? ??????????????"
                    },
                    "sk": {
                        "": "Utorok"
                    },
                    "sl": {
                        "": "To"
                    },
                    "sv": {
                        "": "Tirsdag"
                    },
                    "vi": {
                        "": "Th??? ba"
                    },
                    "zh": {
                        "": "??????"
                    }
                },
                "Web link required (http://...)": {
                    "en": {
                        "": "Web link required (http://...)"
                    }
                },
                "Wed": {
                    "ar": {
                        "": "????????????????"
                    },
                    "bg": {
                        "": "??????"
                    },
                    "ca": {
                        "": "Dimecres"
                    },
                    "cs": {
                        "": "St??eda"
                    },
                    "da": {
                        "": "Onsdag"
                    },
                    "de": {
                        "": "Mittwoch"
                    },
                    "el": {
                        "": "??????????????"
                    },
                    "en": {
                        "": "Wed"
                    },
                    "es": {
                        "": "Mi??"
                    },
                    "fi": {
                        "": "Keskiviikko"
                    },
                    "fr": {
                        "": "Marier"
                    },
                    "hr": {
                        "": "Srijeda"
                    },
                    "it": {
                        "": "Mer"
                    },
                    "nl": {
                        "": "Woensdag"
                    },
                    "no": {
                        "": "Ons"
                    },
                    "sk": {
                        "": "Streda"
                    },
                    "sl": {
                        "": "Sre"
                    },
                    "sv": {
                        "": "Onsdag"
                    },
                    "vi": {
                        "": "K????t h??n"
                    }
                },
                "Wednesday": {
                    "ar": {
                        "": "????????????????"
                    },
                    "ca": {
                        "": "Dimecres"
                    },
                    "cs": {
                        "": "St??eda"
                    },
                    "da": {
                        "": "Onsdag"
                    },
                    "de": {
                        "": "Mittwoch"
                    },
                    "el": {
                        "": "??????????????"
                    },
                    "en": {
                        "": "Wednesday"
                    },
                    "es": {
                        "": "Mi??rcoles"
                    },
                    "fi": {
                        "": "Keskiviikko"
                    },
                    "fr": {
                        "": "Mercredi"
                    },
                    "hr": {
                        "": "Srijeda"
                    },
                    "it": {
                        "": "Mercoled??"
                    },
                    "ja": {
                        "": "?????????"
                    },
                    "ko": {
                        "": "?????????"
                    },
                    "nl": {
                        "": "Woensdag"
                    },
                    "no": {
                        "": "Onsdag"
                    },
                    "pt": {
                        "": "Quarta-feira"
                    },
                    "ru": {
                        "": "?? ??????????"
                    },
                    "sk": {
                        "": "Streda"
                    },
                    "sl": {
                        "": "Sre"
                    },
                    "sv": {
                        "": "Onsdag"
                    },
                    "vi": {
                        "": "Th??? t??"
                    },
                    "zh": {
                        "": "??????"
                    }
                },
                "Your answer can be no more than %max%.": {
                    "en": {
                        "": "Your answer can be no more than %max%."
                    }
                },
                "Your answer is not within the range of valid answers for this question.": {
                    "en": {
                        "": "Your answer is not within the range of valid answers for this question."
                    }
                },
                "Your answer must be at least %min%.": {
                    "en": {
                        "": "Your answer must be at least %min%."
                    }
                },
                "Your answer must contain %num% digits after the decimal.": {
                    "en": {
                        "": "Your answer must contain %num% digits after the decimal."
                    }
                },
                "Your answer must contain %num% digits.": {
                    "en": {
                        "": "Your answer must contain %num% digits."
                    }
                },
                "Your comment can be no more than %max% characters.": {
                    "en": {
                        "": "Your comment can be no more than %max% characters."
                    }
                },
                "Your comment must be at least %min% characters.": {
                    "ca": {
                        "": "Votre commentaire doit comporter au moins %min% caract??res."
                    },
                    "en": {
                        "": "Your comment must be at least %min% characters."
                    }
                }
            }
        },
        "systemGlobalizationDataFromDB": {
            "A comment is required if the first answer (Yes in Yes/No set) is selected.": {
                "en": {
                    "": "A comment is required if the first answer (Yes in Yes/No set) is selected."
                }
            },
            "A comment is required if the first answer or the second answer is selected": {
                "en": {
                    "": "A comment is required if the first answer or the second answer is selected"
                }
            },
            "A comment is required if the first, second or third answer is selected": {
                "en": {
                    "": "A comment is required if the first, second or third answer is selected"
                }
            },
            "A comment is required if the first, second, or fourth answer is selected": {
                "en": {
                    "": "A comment is required if the first, second, or fourth answer is selected"
                }
            },
            "A comment is required if the first, second, third, or fourth answer is selected": {
                "en": {
                    "": "A comment is required if the first, second, third, or fourth answer is selected"
                }
            },
            "A comment is required if the fourth answer is selected": {
                "en": {
                    "": "A comment is required if the fourth answer is selected"
                }
            },
            "A comment is required if the second answer (No in Yes/No set) is selected": {
                "en": {
                    "": "A comment is required if the second answer (No in Yes/No set) is selected"
                }
            },
            "A comment is required if the second or third answer is selected": {
                "en": {
                    "": "A comment is required if the second or third answer is selected"
                }
            },
            "A comment is required if the third answer is selected": {
                "en": {
                    "": "A comment is required if the third answer is selected"
                }
            },
            "A comment or answer is required.": {
                "ca": {
                    "": "Un commentaire ou une r??ponse est requis."
                },
                "en": {
                    "": "A comment or answer is required."
                }
            },
            "A comment to this question is required.": {
                "ca": {
                    "": "Un commentaire sur cette question est requis."
                },
                "en": {
                    "": "A comment to this question is required."
                }
            },
            "A valid email address is required": {
                "en": {
                    "": "A valid email address is required"
                }
            },
            "An answer to this question is required.": {
                "en": {
                    "": "An answer to this question is required."
                }
            },
            "Apr": {
                "en": {
                    "": "Apr"
                }
            },
            "April": {
                "ar": {
                    "": "??????????"
                },
                "bg": {
                    "": "??????????"
                },
                "ca": {
                    "": "Abril"
                },
                "cs": {
                    "": "Duben"
                },
                "da": {
                    "": "April"
                },
                "de": {
                    "": "April"
                },
                "el": {
                    "": "????????????????"
                },
                "en": {
                    "": "April"
                },
                "es": {
                    "": "Abril"
                },
                "fi": {
                    "": "Huhtikuu"
                },
                "fr": {
                    "": "Avril"
                },
                "hr": {
                    "": "Travanj"
                },
                "it": {
                    "": "Aprile"
                },
                "ja": {
                    "": "4???"
                },
                "ko": {
                    "": "4???"
                },
                "nl": {
                    "": "April"
                },
                "no": {
                    "": "April"
                },
                "pt": {
                    "": "Abril"
                },
                "ru": {
                    "": "????????????"
                },
                "sk": {
                    "": "Apr??l"
                },
                "sl": {
                    "": "April"
                },
                "sv": {
                    "": "April"
                },
                "vi": {
                    "": "Th??ng t??"
                },
                "zh": {
                    "": "??????"
                }
            },
            "At least %min% answer options must be selected for this question.": {
                "en": {
                    "": "At least %min% answer options must be selected for this question."
                }
            },
            "At most %max% answer options may be selected for this question.": {
                "en": {
                    "": "At most %max% answer options may be selected for this question."
                }
            },
            "att_btn_delete": {
                "en": {
                    "": "Delete"
                }
            },
            "att_btn_edit": {
                "en": {
                    "": "Edit"
                }
            },
            "att_btn_edit_image": {
                "en": {
                    "": "Edit Image"
                }
            },
            "att_btn_move_down": {
                "en": {
                    "": "Move down"
                }
            },
            "att_btn_move_up": {
                "en": {
                    "": "Move up"
                }
            },
            "att_delete_description": {
                "en": {
                    "": "Please enter a brief description why you are disabling this attachment"
                },
                "es": {
                    "": "SP Please enter a brief description why you are disabling this attachment"
                }
            },
            "att_prop_camera_date": {
                "en": {
                    "": "Camera date"
                }
            },
            "att_prop_dimensions": {
                "en": {
                    "": "Dimensions"
                },
                "es": {
                    "": "SP Dimensions"
                }
            },
            "att_prop_download": {
                "ca": {
                    "": "T??l??charger"
                },
                "en": {
                    "": "Download"
                },
                "es": {
                    "": "SP\tDownload"
                }
            },
            "att_prop_file_name": {
                "ca": {
                    "": "Nom de fichier"
                },
                "en": {
                    "": "File Name"
                },
                "es": {
                    "": "SP \tFile Name"
                }
            },
            "att_prop_gps_distance": {
                "en": {
                    "": "GPS Distance"
                }
            },
            "att_prop_original": {
                "ca": {
                    "": "original"
                },
                "en": {
                    "": "original"
                }
            },
            "att_prop_raw": {
                "en": {
                    "": "raw"
                }
            },
            "att_prop_size": {
                "ca": {
                    "": "Taille"
                },
                "en": {
                    "": "Size"
                },
                "es": {
                    "": "SP Size"
                }
            },
            "att_prop_type": {
                "ca": {
                    "": "Taper"
                },
                "en": {
                    "": "Type"
                },
                "es": {
                    "": "SP Type"
                },
                "fr": {
                    "": "Type"
                }
            },
            "att_prop_upload_date": {
                "ca": {
                    "": "Date de d??p??t"
                },
                "en": {
                    "": "Upload date"
                },
                "es": {
                    "": "SP Upload date"
                }
            },
            "attachment_properties": {
                "en": {
                    "": "Attachment Properties"
                },
                "es": {
                    "": "SP Attachment Properties"
                }
            },
            "Aug": {
                "en": {
                    "": "Aug"
                }
            },
            "August": {
                "ar": {
                    "": "??????????"
                },
                "bg": {
                    "": "????????????"
                },
                "ca": {
                    "": "Agost"
                },
                "cs": {
                    "": "Srpen"
                },
                "da": {
                    "": "August"
                },
                "de": {
                    "": "August"
                },
                "el": {
                    "": "??????????????????"
                },
                "en": {
                    "": "August"
                },
                "es": {
                    "": "Agosto"
                },
                "fi": {
                    "": "Elokuu"
                },
                "fr": {
                    "": "Ao??t"
                },
                "hr": {
                    "": "Kolovoz"
                },
                "it": {
                    "": "Agosto"
                },
                "ja": {
                    "": "8???"
                },
                "ko": {
                    "": "8???"
                },
                "nl": {
                    "": "Augustus"
                },
                "no": {
                    "": "August"
                },
                "pt": {
                    "": "Agosto"
                },
                "ru": {
                    "": "????????????"
                },
                "sk": {
                    "": "August"
                },
                "sl": {
                    "": "Avgust"
                },
                "sv": {
                    "": "Aug"
                },
                "vi": {
                    "": "Th??ng T??m"
                },
                "zh": {
                    "": "??????"
                }
            },
            "Date required (DD.MM.YYYY)": {
                "ca": {
                    "": "Date requise (JJ.MM.AAAA)"
                },
                "en": {
                    "": "Date required (DD.MM.YYYY)"
                }
            },
            "Date required (DD/MM/YYYY)": {
                "ca": {
                    "": "Date requise (JJ/MM/AAAA)"
                },
                "en": {
                    "": "Date required (DD/MM/YYYY)"
                }
            },
            "Date required (MM/DD/YYYY)": {
                "ca": {
                    "": "Date requise (MM/JJ/AAAA)"
                },
                "en": {
                    "": "Date required (MM/DD/YYYY)"
                }
            },
            "Date required (YYYY-MM-DD)": {
                "ca": {
                    "": "Date requise (AAAA-MM-JJ)"
                },
                "en": {
                    "": "Date required (YYYY-MM-DD)"
                }
            },
            "Dec": {
                "en": {
                    "": "Dec"
                }
            },
            "December": {
                "ar": {
                    "": "????????????"
                },
                "bg": {
                    "": "????????????????"
                },
                "ca": {
                    "": "Desembre"
                },
                "cs": {
                    "": "Prosinec"
                },
                "da": {
                    "": "December"
                },
                "de": {
                    "": "Dezember"
                },
                "el": {
                    "": "????????????????????"
                },
                "en": {
                    "": "December"
                },
                "es": {
                    "": "Diciembre"
                },
                "fi": {
                    "": "Joulukuu"
                },
                "fr": {
                    "": "D??cembre"
                },
                "hr": {
                    "": "Prosinca"
                },
                "it": {
                    "": "Dicembre"
                },
                "ja": {
                    "": "12???"
                },
                "ko": {
                    "": "12???"
                },
                "nl": {
                    "": "December"
                },
                "no": {
                    "": "Desember"
                },
                "pt": {
                    "": "Dezembro"
                },
                "ru": {
                    "": "??????????????"
                },
                "sk": {
                    "": "December"
                },
                "sl": {
                    "": "December"
                },
                "sv": {
                    "": "December"
                },
                "vi": {
                    "": "Th??ng m?????i hai"
                },
                "zh": {
                    "": "?????????"
                }
            },
            "Feb": {
                "en": {
                    "": "Feb"
                }
            },
            "February": {
                "ar": {
                    "": "????????????"
                },
                "bg": {
                    "": "????????????????"
                },
                "ca": {
                    "": "Febrer"
                },
                "cs": {
                    "": "??nor"
                },
                "da": {
                    "": "Februar"
                },
                "de": {
                    "": "Februar"
                },
                "el": {
                    "": "??????????????????????"
                },
                "en": {
                    "": "February"
                },
                "es": {
                    "": "Febrero"
                },
                "fi": {
                    "": "Helmikuu"
                },
                "fr": {
                    "": "F??vrier"
                },
                "hr": {
                    "": "Velja??a"
                },
                "it": {
                    "": "Febbraio"
                },
                "ja": {
                    "": "2???"
                },
                "ko": {
                    "": "2???"
                },
                "nl": {
                    "": "Februari"
                },
                "no": {
                    "": "Februar"
                },
                "pt": {
                    "": "Fevereiro"
                },
                "ru": {
                    "": "??????????????"
                },
                "sk": {
                    "": "Febru??r"
                },
                "sl": {
                    "": "Februar"
                },
                "sv": {
                    "": "Februari"
                },
                "vi": {
                    "": "Th??ng hai"
                },
                "zh": {
                    "": "??????"
                }
            },
            "Fri": {
                "ar": {
                    "": "????????????"
                },
                "bg": {
                    "": "??????"
                },
                "ca": {
                    "": "Divendres"
                },
                "cs": {
                    "": "P??tek"
                },
                "da": {
                    "": "Fredag"
                },
                "de": {
                    "": "Freitag"
                },
                "el": {
                    "": "??????????????????"
                },
                "en": {
                    "": "Fri"
                },
                "es": {
                    "": "Vie"
                },
                "fi": {
                    "": "Perjantai"
                },
                "fr": {
                    "": "Ven."
                },
                "hr": {
                    "": "Petak"
                },
                "it": {
                    "": "Ven"
                },
                "nl": {
                    "": "Vrijdag"
                },
                "no": {
                    "": "Fre"
                },
                "sk": {
                    "": "Piatok"
                },
                "sl": {
                    "": "Pe"
                },
                "sv": {
                    "": "Fredag"
                },
                "vi": {
                    "": "Th 6"
                }
            },
            "Friday": {
                "ar": {
                    "": "????????????"
                },
                "ca": {
                    "": "Divendres"
                },
                "cs": {
                    "": "P??tek"
                },
                "da": {
                    "": "Fredag"
                },
                "de": {
                    "": "Freitag"
                },
                "el": {
                    "": "??????????????????"
                },
                "en": {
                    "": "Friday"
                },
                "es": {
                    "": "Viernes"
                },
                "fi": {
                    "": "Perjantai"
                },
                "fr": {
                    "": "Vendredi"
                },
                "hr": {
                    "": "Petak"
                },
                "it": {
                    "": "Venerd??"
                },
                "ja": {
                    "": "?????????"
                },
                "ko": {
                    "": "?????????"
                },
                "nl": {
                    "": "Vrijdag"
                },
                "no": {
                    "": "Fredag"
                },
                "pt": {
                    "": "Sexta-feira"
                },
                "ru": {
                    "": "?? ??????????????"
                },
                "sk": {
                    "": "Piatok"
                },
                "sl": {
                    "": "Pe"
                },
                "sv": {
                    "": "Fredag"
                },
                "vi": {
                    "": "Th??? S??u"
                },
                "zh": {
                    "": "??????"
                }
            },
            "Invalid Date. Cannot use future dates": {
                "ar": {
                    "": "?????????? ?????? ??????????. ???? ???????? ?????????????? ???? ???????????????? ????????????????"
                },
                "bg": {
                    "": "?????????????????? ????????: ???? ???????? ???? ?? ???????????? ????????"
                },
                "ca": {
                    "": "Data no v??lida. No es pot usar dades futures"
                },
                "cs": {
                    "": "Neplatn?? datum. Nelze pou????t budouc?? term??ny"
                },
                "da": {
                    "": "Ugyldig dato. Kan ikke bruge fremtidige datoer"
                },
                "de": {
                    "": "Ung??ltiges Datum. Kann nicht benutzt werden k??nftig Termine"
                },
                "el": {
                    "": "?????????? ????????????????????. ?????? ?????????? ???????????? ?? ?????????? ?????????????????????? ??????????????????????"
                },
                "en": {
                    "": "Invalid Date. Cannot use future dates"
                },
                "es": {
                    "": "Fecha no v??lida. No se puede usar fechas futuras"
                },
                "fi": {
                    "": "P??iv??m????r?? ei kelpaa. Ei voi k??ytt???? tulevaisuus p??iv??m????r??t"
                },
                "fr": {
                    "": "Date non valide. Impossible d'utiliser des dates futures"
                },
                "hr": {
                    "": "Pogre??na Datum. Ne mo??e se koristiti budu??nosti datumi"
                },
                "it": {
                    "": "Data non valida. Impossibile utilizzare date future"
                },
                "nl": {
                    "": "Ongeldige datum. Kan geen gebruik maken van de toekomst"
                },
                "no": {
                    "": "Ugyldig dato. Kan ikke bruke framtidige datoer"
                },
                "sk": {
                    "": "Neplatn?? d??tum. Nemo??no pou??i?? bud??cej term??ny"
                },
                "sl": {
                    "": "Neveljaven datum. Ne morete uporabljati prihodnjih datumov"
                },
                "sv": {
                    "": "Ogiltigt datum. Kan inte anv??nda framtida datum"
                },
                "vi": {
                    "": "Ng??y kh??ng h???p l???. Kh??ng th??? s??? d???ng c??c ng??y trong t????ng lai"
                }
            },
            "Invalid Date. Date should be reasonably past": {
                "ar": {
                    "": "?????????? ?????? ??????????. ?????????????? ?????????? ???? ???????? ?????????? ????????????"
                },
                "bg": {
                    "": "?????????????????? ????????. ???????????? ???? ???????????? ???? ?? ?????????????? ??????????"
                },
                "ca": {
                    "": "Data no v??lida. Data hauria de ser raonablement passat"
                },
                "cs": {
                    "": "Neplatn?? datum. Datum by m??lo b??t rozumn?? minulosti"
                },
                "da": {
                    "": "Ugyldig dato. Dato skal v??re rimeligt tidligere"
                },
                "de": {
                    "": "Ung??ltiges Datum. Datum sollte vern??nftigerweise Vergangenheit"
                },
                "el": {
                    "": "?????????? ????????????????????. ???????????????????? ???????????? ???? ???????????? ???? ?????????? ????????????????"
                },
                "en": {
                    "": "Invalid Date. Date should be reasonably past"
                },
                "es": {
                    "": "Fecha no v??lida. Fecha en que debe ser razonablemente pasado"
                },
                "fi": {
                    "": "P??iv??m????r?? ei kelpaa. P??iv??m????r?? olisi kohtuudella viime"
                },
                "fr": {
                    "": "Date non valide. Date doit ??tre raisonnablement pass??"
                },
                "hr": {
                    "": "Pogre??na Datum. Datum bi trebao biti razumno pro??losti"
                },
                "it": {
                    "": "Data non valida. Data dovrebbe essere ragionevolmente passato"
                },
                "nl": {
                    "": "Ongeldige datum. Datum moet redelijk verleden"
                },
                "no": {
                    "": "Ugyldig dato. Dato skal v??re rimelig grunn til fortiden"
                },
                "sk": {
                    "": "Neplatn?? d??tum. D??tum by malo by?? rozumne minulosti"
                },
                "sl": {
                    "": "Neveljaven datum. Datum mora biti v razumni preteklosti"
                },
                "sv": {
                    "": "Ogiltigt datum. Datum b??r rimligen tidigare"
                },
                "vi": {
                    "": "Ng??y kh??ng h???p l???. Ng??y n??n ???????c h???p l?? trong qu?? kh???"
                }
            },
            "Invalid Date.Date cannot be before the Start Date.": {
                "en": {
                    "": "Invalid Date.Date cannot be before the Start Date."
                }
            },
            "Jan": {
                "en": {
                    "": "Jan"
                }
            },
            "January": {
                "ar": {
                    "": "??????????"
                },
                "bg": {
                    "": "????????????"
                },
                "ca": {
                    "": "Gener"
                },
                "cs": {
                    "": "Leden"
                },
                "da": {
                    "": "Januar"
                },
                "de": {
                    "": "Januar"
                },
                "el": {
                    "": "????????????????????"
                },
                "en": {
                    "": "January"
                },
                "es": {
                    "": "Enero"
                },
                "fi": {
                    "": "Tammikuu"
                },
                "fr": {
                    "": "Janvier"
                },
                "hr": {
                    "": "Sje??anj"
                },
                "it": {
                    "": "Gennaio"
                },
                "ja": {
                    "": "1???"
                },
                "ko": {
                    "": "1???"
                },
                "nl": {
                    "": "Jan"
                },
                "no": {
                    "": "Januar"
                },
                "pt": {
                    "": "Janeiro"
                },
                "ru": {
                    "": "????????????"
                },
                "sk": {
                    "": "Janu??r"
                },
                "sl": {
                    "": "Januar"
                },
                "sv": {
                    "": "Januari"
                },
                "vi": {
                    "": "Th??ng m???t"
                },
                "zh": {
                    "": "??????"
                }
            },
            "Jul": {
                "en": {
                    "": "Jul"
                }
            },
            "July": {
                "ar": {
                    "": "????????"
                },
                "bg": {
                    "": "??????"
                },
                "ca": {
                    "": "Juliol"
                },
                "cs": {
                    "": "??ervenec"
                },
                "da": {
                    "": "Juli"
                },
                "de": {
                    "": "Juli"
                },
                "el": {
                    "": "??????????????"
                },
                "en": {
                    "": "July"
                },
                "es": {
                    "": "Julio"
                },
                "fi": {
                    "": "Hein??kuu"
                },
                "fr": {
                    "": "Juillet"
                },
                "hr": {
                    "": "Srpanj"
                },
                "it": {
                    "": "Luglio"
                },
                "ja": {
                    "": "7???"
                },
                "ko": {
                    "": "7???"
                },
                "nl": {
                    "": "Juli"
                },
                "no": {
                    "": "Juli"
                },
                "pt": {
                    "": "Julho"
                },
                "ru": {
                    "": "????????"
                },
                "sk": {
                    "": "J??l"
                },
                "sl": {
                    "": "Julij"
                },
                "sv": {
                    "": "Juli"
                },
                "vi": {
                    "": "Th??ng B???y"
                },
                "zh": {
                    "": "??????"
                }
            },
            "Jun": {
                "en": {
                    "": "Jun"
                }
            },
            "June": {
                "ar": {
                    "": "????????????"
                },
                "bg": {
                    "": "??????"
                },
                "ca": {
                    "": "Juny"
                },
                "cs": {
                    "": "??erven"
                },
                "da": {
                    "": "Juni"
                },
                "de": {
                    "": "Juni"
                },
                "el": {
                    "": "??????????????"
                },
                "en": {
                    "": "June"
                },
                "es": {
                    "": "Junio"
                },
                "fi": {
                    "": "Kes??kuu"
                },
                "fr": {
                    "": "Juin"
                },
                "hr": {
                    "": "Lipanj"
                },
                "it": {
                    "": "Giugno"
                },
                "ja": {
                    "": "6???"
                },
                "ko": {
                    "": "6???"
                },
                "nl": {
                    "": "Juni"
                },
                "no": {
                    "": "Juni"
                },
                "pt": {
                    "": "Junho"
                },
                "ru": {
                    "": "????????"
                },
                "sk": {
                    "": "J??n"
                },
                "sl": {
                    "": "Junij"
                },
                "sv": {
                    "": "Juni"
                },
                "vi": {
                    "": "Th??ng S??u"
                },
                "zh": {
                    "": "??????"
                }
            },
            "ma_audio": {
                "ca": {
                    "": "l'audio"
                },
                "en": {
                    "": "Audio"
                }
            },
            "ma_button_attach_image": {
                "ca": {
                    "": "Pi??ce jointe"
                },
                "en": {
                    "": "Attach File"
                },
                "es": {
                    "": "SP Attach File"
                }
            },
            "ma_button_cancel": {
                "ca": {
                    "": "Annuler"
                },
                "en": {
                    "": "Cancel"
                },
                "fr": {
                    "": "Annuler"
                }
            },
            "ma_button_choose_photo": {
                "ca": {
                    "": "Choisissez une photo"
                },
                "en": {
                    "": "Choose Photo"
                }
            },
            "ma_button_choose_photo_or_audio_file": {
                "ca": {
                    "": "Choisissez une image ou un fichier audio"
                },
                "en": {
                    "": "Pick Image or Audio file"
                }
            },
            "ma_button_clear": {
                "ca": {
                    "": "D??gager"
                },
                "en": {
                    "": "Clear"
                }
            },
            "ma_button_close": {
                "ca": {
                    "": "Fermer"
                },
                "en": {
                    "": "Close"
                },
                "es": {
                    "": "SP Close"
                }
            },
            "ma_button_decline": {
                "ca": {
                    "": "Refuser l'enqu??te"
                },
                "en": {
                    "": "Decline Survey"
                }
            },
            "ma_button_decline_survey": {
                "ca": {
                    "": "D??clin"
                },
                "en": {
                    "": "Decline"
                }
            },
            "ma_button_jump": {
                "ca": {
                    "": "Sauter"
                },
                "en": {
                    "": "Jump"
                }
            },
            "ma_button_next": {
                "ca": {
                    "": "Suivant"
                },
                "en": {
                    "": "Next"
                }
            },
            "ma_button_ok": {
                "ca": {
                    "": "D'accord"
                },
                "en": {
                    "": "Ok"
                }
            },
            "ma_button_previous": {
                "ca": {
                    "": "Pr??c??dent"
                },
                "en": {
                    "": "Previous"
                }
            },
            "ma_button_record_audio": {
                "ca": {
                    "": "Enregistrement audio"
                },
                "en": {
                    "": "Record Audio"
                }
            },
            "ma_button_save_survey": {
                "ca": {
                    "": "Fait"
                },
                "en": {
                    "": "Done"
                }
            },
            "ma_button_scan_barcode": {
                "ca": {
                    "": "Scanner le code-barres"
                },
                "en": {
                    "": "Scan Barcode"
                }
            },
            "ma_button_scroll": {
                "ca": {
                    "": "Faire d??filer"
                },
                "en": {
                    "": "Scroll"
                }
            },
            "ma_button_take_photo": {
                "ca": {
                    "": "Prendre une photo"
                },
                "en": {
                    "": "Take Photo"
                }
            },
            "ma_button_today": {
                "ca": {
                    "": "Aujourd'hui"
                },
                "en": {
                    "": "Today"
                }
            },
            "ma_camera": {
                "ca": {
                    "": "Cam??ra"
                },
                "en": {
                    "": "Camera"
                }
            },
            "ma_dropdown_select": {
                "ca": {
                    "": "- S??lectionnez -"
                },
                "en": {
                    "": "- Select -"
                }
            },
            "ma_err_survey_init": {
                "ca": {
                    "": "??chec de l'initialisation de l'enqu??te"
                },
                "en": {
                    "": "Survey Init Failed"
                }
            },
            "ma_error_survey_not_completed": {
                "en": {
                    "": "Your survey data is being saved, but your survey cannot be submitted due to validation problems. Your data is safe, but please contact support and provide them the following information:<br><br>Job ID: %SIID% <br>Form ID: %PID% <br>Problems detected in:<br><br>%ERRORS_LIST%<br><br>"
                }
            },
            "ma_filetype_audio": {
                "en": {
                    "": "Audio"
                }
            },
            "ma_filetype_image": {
                "ca": {
                    "": "Image"
                },
                "en": {
                    "": "Image"
                }
            },
            "ma_gallery": {
                "ca": {
                    "": "Galerie"
                },
                "en": {
                    "": "Gallery"
                }
            },
            "ma_hint_enter_comment": {
                "ca": {
                    "": "Entrez votre commentaire ici."
                },
                "en": {
                    "": "Enter your comment here."
                }
            },
            "ma_hint_enter_comment1": {
                "ca": {
                    "": "Entrez un commentaire..."
                },
                "en": {
                    "": "Enter comment..."
                }
            },
            "ma_jump_list_next": {
                "ca": {
                    "": "Suivante"
                },
                "en": {
                    "": "Next"
                }
            },
            "ma_jump_list_page_of": {
                "en": {
                    "": "P %page%/%maxpage%"
                }
            },
            "ma_jump_list_previous": {
                "en": {
                    "": "Prev"
                }
            },
            "ma_jump_list_search_placeholder": {
                "en": {
                    "": "Search..."
                }
            },
            "ma_message_confirm_decline": {
                "en": {
                    "": "If you decline the survey it will be revoked from your Inbox. Are you sure?"
                }
            },
            "ma_message_delete_image": {
                "ca": {
                    "": "Veuillez confirmer que vous souhaitez supprimer cette pi??ce jointe. Cette action ne peut pas ??tre annul??e."
                },
                "en": {
                    "": "Please confirm that you want to delete this attachment. This action cannot be undone."
                }
            },
            "ma_message_delete_image_w8": {
                "ca": {
                    "": "Veuillez confirmer que vous souhaitez supprimer cette image."
                },
                "en": {
                    "": "\"Please confirm that you want to delete this image."
                }
            },
            "ma_message_enter_practice": {
                "en": {
                    "": "ANY DATA ENTERED IN PRACTICE MODE WILL NOT BE RETAINED. IF YOU ARE INTERVIEWING A REAL RESPONDENT TAP CANCEL AND THEN START."
                }
            },
            "ma_message_error_init_camera": {
                "ca": {
                    "": "MobiAudit n'a pas pu initialiser la cam??ra. Veuillez fermer toutes les applications susceptibles d'utiliser actuellement l'appareil photo et r??essayer."
                },
                "en": {
                    "": "MobiAudit was unable to initialize the camera. Please shut down any app(s) that may be currently using the camera and try again."
                }
            },
            "ma_message_error_survey_was_killed": {
                "en": {
                    "": "WARNING: MobiAudit has detected a problem. Your survey answers were deleted by your device???s operating system. Possible reasons why this occurred:<br/><br/> ?? ??- You have enabled the \"Don't keep activities\" option in your device???s Development Options menu. Please ensure that the option is disabled.<br/><br/> ?? ??- Your device is extremely low on memory. Try closing some of the apps you are not using."
                }
            },
            "ma_message_loading": {
                "ca": {
                    "": "Chargement. S'il vous pla??t, attendez..."
                },
                "en": {
                    "": "Loading. Please wait..."
                }
            },
            "ma_message_location_consent": {
                "ca": {
                    "": "MobiAudit souhaite acc??der ?? la position de votre appareil."
                },
                "en": {
                    "": "MobiAudit wants to access your device's location."
                }
            },
            "ma_message_saving_survey": {
                "ca": {
                    "": "Enregistrement de l'enqu??te. S'il vous pla??t, attendez..."
                },
                "en": {
                    "": "Saving survey. Please wait..."
                }
            },
            "ma_practice_web_status_message": {
                "en": {
                    "": "You are in practice mode."
                }
            },
            "ma_practice_web_warning_message": {
                "en": {
                    "": "Data entered during practice mode is discarded."
                }
            },
            "ma_search_as_you_type_done": {
                "ca": {
                    "": "Fait"
                },
                "en": {
                    "": "Done"
                }
            },
            "ma_search_as_you_type_exclusive_warning": {
                "ca": {
                    "": "Vous avez s??lectionn?? une r??ponse exclusive et toutes les autres r??ponses seront supprim??es. Poursuivre la s??lection?"
                },
                "en": {
                    "": "You have selected an exclusive answer and all other answers will be removed. Proceed with the selection?"
                }
            },
            "ma_search_as_you_type_select": {
                "ca": {
                    "": "S??lectionner"
                },
                "en": {
                    "": "Select"
                }
            },
            "ma_setting_use_location": {
                "ca": {
                    "": "Utilisez votre emplacement"
                },
                "en": {
                    "": "Use your location"
                }
            },
            "ma_show_only_errors": {
                "ca": {
                    "": "les erreurs"
                },
                "en": {
                    "": "Errors"
                }
            },
            "ma_show_only_sections": {
                "ca": {
                    "": "Sections"
                },
                "en": {
                    "": "Sections"
                }
            },
            "ma_start_date_not_reached_message": {
                "ca": {
                    "": "Cette enqu??te ne peut pas ??tre compl??t??e avant sa date de d??but: # date #. Les modifications que vous apportez ne seront pas enregistr??es."
                },
                "en": {
                    "": "This survey cannot be completed before its start date: #date#. Any changes you make will not be saved."
                }
            },
            "ma_string_no": {
                "en": {
                    "": "No"
                }
            },
            "ma_string_yes": {
                "ca": {
                    "": "Oui"
                },
                "en": {
                    "": "Yes"
                }
            },
            "ma_title_activity_record": {
                "ca": {
                    "": "Enregistreur audio"
                },
                "en": {
                    "": "Audio Recorder"
                }
            },
            "ma_title_alert": {
                "ca": {
                    "": "Alerte"
                },
                "en": {
                    "": "Alert"
                }
            },
            "ma_title_attachment_type": {
                "ca": {
                    "": "Choisissez le type de pi??ce jointe:"
                },
                "en": {
                    "": "Choose attachment type:"
                }
            },
            "ma_title_attention": {
                "ca": {
                    "": "Attention"
                },
                "en": {
                    "": "Attention"
                }
            },
            "ma_title_confirm": {
                "ca": {
                    "": "Confirmer"
                },
                "en": {
                    "": "Confirm"
                }
            },
            "ma_title_decline_reason": {
                "ca": {
                    "": "Refus de l'enqu??te"
                },
                "en": {
                    "": "Survey Decline"
                }
            },
            "ma_title_error": {
                "en": {
                    "": "Error"
                }
            },
            "ma_title_inbox": {
                "en": {
                    "": "Inbox"
                }
            },
            "ma_title_recorder": {
                "en": {
                    "": "Recorder"
                }
            },
            "ma_video_file_not_found": {
                "ca": {
                    "": "Impossible de charger cette vid??o - vous ??tes actuellement hors ligne. Pour visionner cette vid??o, veuillez v??rifier votre connexion Internet, puis fermez et rouvrez l'enqu??te."
                },
                "en": {
                    "": "This video cannot load ??? you are currently offline. To view this video please check your internet connection and then close and re-open the survey."
                }
            },
            "Mar": {
                "en": {
                    "": "Mar"
                }
            },
            "March": {
                "ar": {
                    "": "????????"
                },
                "bg": {
                    "": "????????"
                },
                "ca": {
                    "": "Mar??"
                },
                "cs": {
                    "": "B??ezen"
                },
                "da": {
                    "": "Marts"
                },
                "de": {
                    "": "M??rz"
                },
                "el": {
                    "": "????????????"
                },
                "en": {
                    "": "March"
                },
                "es": {
                    "": "Marcha"
                },
                "fi": {
                    "": "Maaliskuu"
                },
                "fr": {
                    "": "Mars"
                },
                "hr": {
                    "": "O??ujak"
                },
                "it": {
                    "": "Marzo"
                },
                "ja": {
                    "": "3???"
                },
                "ko": {
                    "": "3???"
                },
                "nl": {
                    "": "Maart"
                },
                "no": {
                    "": "Mars"
                },
                "pt": {
                    "": "Mar??o"
                },
                "ru": {
                    "": "????????"
                },
                "sk": {
                    "": "Marec"
                },
                "sl": {
                    "": "Marec"
                },
                "sv": {
                    "": "Mars"
                },
                "vi": {
                    "": "Th??ng ba"
                },
                "zh": {
                    "": "??????"
                }
            },
            "Maximum number of attachments allowed: #": {
                "en": {
                    "": "Maximum number of attachments allowed: #"
                }
            },
            "May": {
                "ar": {
                    "": "????????"
                },
                "bg": {
                    "": "??????"
                },
                "ca": {
                    "": "Maig"
                },
                "cs": {
                    "": "Kv??ten"
                },
                "da": {
                    "": "Mai"
                },
                "de": {
                    "": "Mai"
                },
                "el": {
                    "": "??????????"
                },
                "en": {
                    "": "May"
                },
                "es": {
                    "": "Mayo"
                },
                "fi": {
                    "": "Toukokuu"
                },
                "fr": {
                    "": "Mai"
                },
                "hr": {
                    "": "Svibanj"
                },
                "it": {
                    "": "Maggio"
                },
                "ja": {
                    "": "5???"
                },
                "ko": {
                    "": "5???"
                },
                "nl": {
                    "": "Mei"
                },
                "no": {
                    "": "Mai"
                },
                "pt": {
                    "": "Maio"
                },
                "ru": {
                    "": "??????"
                },
                "sk": {
                    "": "M??j"
                },
                "sl": {
                    "": "Maj"
                },
                "sv": {
                    "": "Maj"
                },
                "vi": {
                    "": "Thang N??m"
                },
                "zh": {
                    "": "??????"
                }
            },
            "Minimum number of attachments required: #": {
                "ca": {
                    "": "Nombre minimum de pi??ces jointes requises: #"
                },
                "en": {
                    "": "Minimum number of attachments required: #"
                }
            },
            "Mon": {
                "ar": {
                    "": "??????????????"
                },
                "bg": {
                    "": "??????"
                },
                "ca": {
                    "": "Dilluns"
                },
                "cs": {
                    "": "Pond??l??"
                },
                "da": {
                    "": "Mandag"
                },
                "de": {
                    "": "Montag"
                },
                "el": {
                    "": "??????????????"
                },
                "en": {
                    "": "Mon"
                },
                "es": {
                    "": "Lun."
                },
                "fi": {
                    "": "Maanantai"
                },
                "fr": {
                    "": "Lun."
                },
                "hr": {
                    "": "Ponedjeljak"
                },
                "it": {
                    "": "Lun"
                },
                "nl": {
                    "": "Maandag"
                },
                "no": {
                    "": "Man"
                },
                "sk": {
                    "": "Pondelok"
                },
                "sl": {
                    "": "Po"
                },
                "sv": {
                    "": "Man"
                },
                "vi": {
                    "": "Th 2."
                }
            },
            "Monday": {
                "ar": {
                    "": "??????????????"
                },
                "ca": {
                    "": "Dilluns"
                },
                "cs": {
                    "": "Pond??l??"
                },
                "da": {
                    "": "Mandag"
                },
                "de": {
                    "": "Montag"
                },
                "el": {
                    "": "??????????????"
                },
                "en": {
                    "": "Monday"
                },
                "es": {
                    "": "Lunes"
                },
                "fi": {
                    "": "Maanantai"
                },
                "fr": {
                    "": "Lundi"
                },
                "hr": {
                    "": "Ponedjeljak"
                },
                "it": {
                    "": "Luned??"
                },
                "ja": {
                    "": "?????????"
                },
                "ko": {
                    "": "?????????"
                },
                "nl": {
                    "": "Maandag"
                },
                "no": {
                    "": "Man"
                },
                "pt": {
                    "": "Segunda-feira"
                },
                "ru": {
                    "": "?? ??????????????????????"
                },
                "sk": {
                    "": "Pondelok"
                },
                "sl": {
                    "": "Po"
                },
                "sv": {
                    "": "M??ndag"
                },
                "vi": {
                    "": "Th??? hai"
                },
                "zh": {
                    "": "??????"
                }
            },
            "Nov": {
                "en": {
                    "": "Nov"
                }
            },
            "November": {
                "ar": {
                    "": "????????????"
                },
                "bg": {
                    "": "??????????????"
                },
                "ca": {
                    "": "Novembre"
                },
                "cs": {
                    "": "Listopad"
                },
                "da": {
                    "": "November"
                },
                "de": {
                    "": "November"
                },
                "el": {
                    "": "??????????????????"
                },
                "en": {
                    "": "November"
                },
                "es": {
                    "": "Noviembre"
                },
                "fi": {
                    "": "Marraskuu"
                },
                "fr": {
                    "": "Novembre"
                },
                "hr": {
                    "": "Studeni"
                },
                "it": {
                    "": "Novembre"
                },
                "ja": {
                    "": "11???"
                },
                "ko": {
                    "": "11???"
                },
                "nl": {
                    "": "November"
                },
                "no": {
                    "": "November"
                },
                "pt": {
                    "": "Novembro"
                },
                "ru": {
                    "": "????????????"
                },
                "sk": {
                    "": "November"
                },
                "sl": {
                    "": "Nov"
                },
                "sv": {
                    "": "November"
                },
                "vi": {
                    "": "Th??ng m?????i m???t"
                },
                "zh": {
                    "": "?????????"
                }
            },
            "Number required": {
                "ca": {
                    "": "Num??ro requis"
                },
                "en": {
                    "": "Number required"
                }
            },
            "Oct": {
                "en": {
                    "": "Oct"
                }
            },
            "October": {
                "ar": {
                    "": "????????????"
                },
                "bg": {
                    "": "????????????????"
                },
                "ca": {
                    "": "Octubre"
                },
                "cs": {
                    "": "????jen"
                },
                "da": {
                    "": "Oktober"
                },
                "de": {
                    "": "Oktober"
                },
                "el": {
                    "": "??????????????????"
                },
                "en": {
                    "": "October"
                },
                "es": {
                    "": "Octubre"
                },
                "fi": {
                    "": "Lokakuu"
                },
                "fr": {
                    "": "Octobre"
                },
                "hr": {
                    "": "Listopad"
                },
                "it": {
                    "": "Ottobre"
                },
                "ja": {
                    "": "10???"
                },
                "ko": {
                    "": "10???"
                },
                "nl": {
                    "": "Oktober"
                },
                "no": {
                    "": "Oktober"
                },
                "pt": {
                    "": "Outubro"
                },
                "ru": {
                    "": "??????????????"
                },
                "sk": {
                    "": "Okt??ber"
                },
                "sl": {
                    "": "Oktober"
                },
                "sv": {
                    "": "Oktober"
                },
                "vi": {
                    "": "Th??ng M?????i"
                },
                "zh": {
                    "": "??????"
                }
            },
            "osm_reporting_survey_total": {
                "en": {
                    "": "survey total"
                }
            },
            "Sat": {
                "ar": {
                    "": "??????????"
                },
                "bg": {
                    "": "??????"
                },
                "ca": {
                    "": "Dissabte"
                },
                "cs": {
                    "": "Sobota"
                },
                "da": {
                    "": "L??rdag"
                },
                "de": {
                    "": "Samstag"
                },
                "el": {
                    "": "??????????????"
                },
                "en": {
                    "": "Sat"
                },
                "es": {
                    "": "S??b"
                },
                "fi": {
                    "": "Lau"
                },
                "fr": {
                    "": "Sam."
                },
                "hr": {
                    "": "Subota"
                },
                "it": {
                    "": "Sabato"
                },
                "nl": {
                    "": "Zaterdag"
                },
                "no": {
                    "": "L??rdag"
                },
                "sk": {
                    "": "Sobota"
                },
                "sl": {
                    "": "So"
                },
                "sv": {
                    "": "L??rdag"
                },
                "vi": {
                    "": "Th 7"
                }
            },
            "Saturday": {
                "ar": {
                    "": "??????????"
                },
                "ca": {
                    "": "Dissabte"
                },
                "cs": {
                    "": "Sobota"
                },
                "da": {
                    "": "L??rdag"
                },
                "de": {
                    "": "Samstag"
                },
                "el": {
                    "": "??????????????"
                },
                "en": {
                    "": "Saturday"
                },
                "es": {
                    "": "S??bado"
                },
                "fi": {
                    "": "Lau"
                },
                "fr": {
                    "": "Samedi"
                },
                "hr": {
                    "": "Subota"
                },
                "it": {
                    "": "Sabato"
                },
                "ja": {
                    "": "?????????"
                },
                "ko": {
                    "": "?????????"
                },
                "nl": {
                    "": "Zaterdag"
                },
                "no": {
                    "": "L??rdag"
                },
                "pt": {
                    "": "S??bado"
                },
                "ru": {
                    "": "?? ??????????????"
                },
                "sk": {
                    "": "Sobota"
                },
                "sl": {
                    "": "So"
                },
                "sv": {
                    "": "L??rdag"
                },
                "vi": {
                    "": "Th??? B???y"
                },
                "zh": {
                    "": "??????"
                }
            },
            "Sep": {
                "en": {
                    "": "Sep"
                }
            },
            "September": {
                "ar": {
                    "": "????????????"
                },
                "bg": {
                    "": "??????????????????"
                },
                "ca": {
                    "": "Setembre"
                },
                "cs": {
                    "": "Z??????"
                },
                "da": {
                    "": "September"
                },
                "de": {
                    "": "September"
                },
                "el": {
                    "": "??????????????????????"
                },
                "en": {
                    "": "September"
                },
                "es": {
                    "": "Septiembre"
                },
                "fi": {
                    "": "Syyskuu"
                },
                "fr": {
                    "": "Septembre"
                },
                "hr": {
                    "": "Rujan"
                },
                "it": {
                    "": "Settembre"
                },
                "ja": {
                    "": "9???"
                },
                "ko": {
                    "": "9???"
                },
                "nl": {
                    "": "September"
                },
                "no": {
                    "": "September"
                },
                "pt": {
                    "": "Setembro"
                },
                "ru": {
                    "": "????????????????"
                },
                "sk": {
                    "": "Septembra"
                },
                "sl": {
                    "": "September"
                },
                "sv": {
                    "": "September"
                },
                "vi": {
                    "": "Th??ng Ch??n"
                },
                "zh": {
                    "": "??????"
                }
            },
            "Sun": {
                "ar": {
                    "": "??????"
                },
                "bg": {
                    "": "??????"
                },
                "ca": {
                    "": "Diumenge"
                },
                "cs": {
                    "": "Ned??le"
                },
                "da": {
                    "": "S??ndag"
                },
                "de": {
                    "": "Sonntag"
                },
                "el": {
                    "": "??????????????"
                },
                "en": {
                    "": "Sun"
                },
                "es": {
                    "": "Sol"
                },
                "fi": {
                    "": "Sun"
                },
                "fr": {
                    "": "Soleil"
                },
                "hr": {
                    "": "Nedjelja"
                },
                "it": {
                    "": "Domenica"
                },
                "nl": {
                    "": "Zondag"
                },
                "no": {
                    "": "S??n"
                },
                "sk": {
                    "": "Nede??a"
                },
                "sl": {
                    "": "Ne"
                },
                "sv": {
                    "": "S??ndag"
                },
                "vi": {
                    "": "CN"
                }
            },
            "Sunday": {
                "ar": {
                    "": "??????????"
                },
                "ca": {
                    "": "Diumenge"
                },
                "cs": {
                    "": "Ned??le"
                },
                "da": {
                    "": "S??ndag"
                },
                "de": {
                    "": "Sonntag"
                },
                "el": {
                    "": "??????????????"
                },
                "en": {
                    "": "Sunday"
                },
                "es": {
                    "": "Domingo"
                },
                "fi": {
                    "": "Sunnuntai"
                },
                "fr": {
                    "": "Dimanche"
                },
                "hr": {
                    "": "Nedjelja"
                },
                "it": {
                    "": "Domenica"
                },
                "ja": {
                    "": "?????????"
                },
                "ko": {
                    "": "?????????"
                },
                "nl": {
                    "": "Zondag"
                },
                "no": {
                    "": "S??ndag"
                },
                "pt": {
                    "": "Domingo"
                },
                "ru": {
                    "": "?? ??????????????????????"
                },
                "sk": {
                    "": "Nede??a"
                },
                "sl": {
                    "": "Ne"
                },
                "sv": {
                    "": "S??ndag"
                },
                "vi": {
                    "": "Ch??? Nh???t"
                },
                "zh": {
                    "": "?????????"
                }
            },
            "Survey Completed.": {
                "ca": {
                    "": "Sondage termin??."
                },
                "en": {
                    "": "Survey Completed."
                }
            },
            "Survey not completed.": {
                "ca": {
                    "": "Sondage non termin??."
                },
                "en": {
                    "": "Survey not completed."
                }
            },
            "Survey not completed. Do you want to save anyway?": {
                "ca": {
                    "": "Sondage non termin??. Voulez-vous quand m??me enregistrer?"
                },
                "en": {
                    "": "Survey not completed. Do you want to save anyway?"
                }
            },
            "Survey not valid.": {
                "en": {
                    "": "Survey not valid."
                }
            },
            "Survey not valid. Do you want to save anyway?": {
                "en": {
                    "": "Survey not valid. Do you want to save anyway?"
                }
            },
            "survey_post_service_unavailable_notification": {
                "en": {
                    "": "Service unavailable. Check your network connection and try again."
                }
            },
            "The specified Date In conflicts with an active Blackout Definition": {
                "en": {
                    "": "The specified Date In conflicts with an active Blackout Definition"
                }
            },
            "Thu": {
                "ar": {
                    "": "????????????"
                },
                "bg": {
                    "": "??????"
                },
                "ca": {
                    "": "Dj"
                },
                "cs": {
                    "": "??t"
                },
                "da": {
                    "": "Tor"
                },
                "de": {
                    "": "Do"
                },
                "el": {
                    "": "????"
                },
                "en": {
                    "": "Thu"
                },
                "es": {
                    "": "Jue"
                },
                "fi": {
                    "": "To"
                },
                "fr": {
                    "": "Jeu."
                },
                "hr": {
                    "": "??et"
                },
                "it": {
                    "": "Gio"
                },
                "nl": {
                    "": "Do"
                },
                "no": {
                    "": "Tor"
                },
                "sk": {
                    "": "??t"
                },
                "sl": {
                    "": "??et"
                },
                "sv": {
                    "": "Tor"
                },
                "vi": {
                    "": "Th 5."
                }
            },
            "Thursday": {
                "ar": {
                    "": "????????????"
                },
                "ca": {
                    "": "Dijous"
                },
                "cs": {
                    "": "??tvrtek"
                },
                "da": {
                    "": "Torsdag"
                },
                "de": {
                    "": "Donnerstag"
                },
                "el": {
                    "": "????????????"
                },
                "en": {
                    "": "Thursday"
                },
                "es": {
                    "": "Jueves"
                },
                "fi": {
                    "": "Torstai"
                },
                "fr": {
                    "": "Jeudi"
                },
                "hr": {
                    "": "??etvrtak"
                },
                "it": {
                    "": "Gioved??"
                },
                "ja": {
                    "": "?????????"
                },
                "ko": {
                    "": "?????????"
                },
                "nl": {
                    "": "Donderdag"
                },
                "no": {
                    "": "Torsdag"
                },
                "pt": {
                    "": "Quinta-feira"
                },
                "ru": {
                    "": "?? ??????????????"
                },
                "sk": {
                    "": "??tvrtok"
                },
                "sl": {
                    "": "??et"
                },
                "sv": {
                    "": "Torsdag"
                },
                "vi": {
                    "": "Th??? n??m"
                },
                "zh": {
                    "": "??????"
                }
            },
            "Time required (HH:MM AM/PM)": {
                "ca": {
                    "": "Temps requis (HH:MM AM/PM)"
                },
                "en": {
                    "": "Time required (HH:MM AM/PM)"
                }
            },
            "Time required (HH:MM) - 24h": {
                "ca": {
                    "": "Temps requis (HH:MM) - 24h"
                },
                "en": {
                    "": "Time required (HH:MM) - 24h"
                }
            },
            "Time required (HH:MM:SS AM/PM)": {
                "ca": {
                    "": "Temps requis (HH:MM:SS AM/PM)"
                },
                "en": {
                    "": "Time required (HH:MM:SS AM/PM)"
                }
            },
            "Time required (HH:MM:SS) - 24h": {
                "ca": {
                    "": "Temps requis (HH:MM:SS) - 24h"
                },
                "en": {
                    "": "Time required (HH:MM:SS) - 24h"
                }
            },
            "Time required (MM:SS) - 24h": {
                "ca": {
                    "": "Temps requis (MM:SS) - 24h"
                },
                "en": {
                    "": "Time required (MM:SS) - 24h"
                }
            },
            "Time required (SS)": {
                "ca": {
                    "": "Temps requis (SS)"
                },
                "en": {
                    "": "Time required (SS)"
                }
            },
            "Time span required (HH:MM) - 24h": {
                "en": {
                    "": "Time span required (HH:MM) - 24h"
                }
            },
            "Time span required (HH:MM:SS) - 24h": {
                "en": {
                    "": "Time span required (HH:MM:SS) - 24h"
                }
            },
            "Time span required (MM:SS)?": {
                "en": {
                    "": "Time span required (MM:SS)???"
                }
            },
            "Time span required (SS)": {
                "en": {
                    "": "Time span required (SS)"
                }
            },
            "Tue": {
                "ar": {
                    "": "????????????????"
                },
                "bg": {
                    "": "??????"
                },
                "ca": {
                    "": "Dimarts"
                },
                "cs": {
                    "": "??ter??"
                },
                "da": {
                    "": "Tirsdag"
                },
                "de": {
                    "": "Dienstag"
                },
                "el": {
                    "": "??????????"
                },
                "en": {
                    "": "Tue"
                },
                "es": {
                    "": "Mar"
                },
                "fi": {
                    "": "Tiistai"
                },
                "fr": {
                    "": "Mar."
                },
                "hr": {
                    "": "Utorak"
                },
                "it": {
                    "": "Mar"
                },
                "nl": {
                    "": "Dinsdag"
                },
                "no": {
                    "": "Tirsdag"
                },
                "sk": {
                    "": "Utorok"
                },
                "sl": {
                    "": "To"
                },
                "sv": {
                    "": "Tirsdag"
                },
                "vi": {
                    "": "Th 3."
                }
            },
            "Tuesday": {
                "ar": {
                    "": "????????????????"
                },
                "ca": {
                    "": "Dimarts"
                },
                "cs": {
                    "": "??ter??"
                },
                "da": {
                    "": "Tirsdag"
                },
                "de": {
                    "": "Dienstag"
                },
                "el": {
                    "": "??????????"
                },
                "en": {
                    "": "Tuesday"
                },
                "es": {
                    "": "Martes"
                },
                "fi": {
                    "": "Tiistai"
                },
                "fr": {
                    "": "Mardi"
                },
                "hr": {
                    "": "Utorak"
                },
                "it": {
                    "": "Marted??"
                },
                "ja": {
                    "": "?????????"
                },
                "ko": {
                    "": "?????????"
                },
                "nl": {
                    "": "Dinsdag"
                },
                "no": {
                    "": "Tirsdag"
                },
                "pt": {
                    "": "Ter??a-feira"
                },
                "ru": {
                    "": "???? ??????????????"
                },
                "sk": {
                    "": "Utorok"
                },
                "sl": {
                    "": "To"
                },
                "sv": {
                    "": "Tirsdag"
                },
                "vi": {
                    "": "Th??? ba"
                },
                "zh": {
                    "": "??????"
                }
            },
            "Web link required (http://...)": {
                "en": {
                    "": "Web link required (http://...)"
                }
            },
            "Wed": {
                "ar": {
                    "": "????????????????"
                },
                "bg": {
                    "": "??????"
                },
                "ca": {
                    "": "Dimecres"
                },
                "cs": {
                    "": "St??eda"
                },
                "da": {
                    "": "Onsdag"
                },
                "de": {
                    "": "Mittwoch"
                },
                "el": {
                    "": "??????????????"
                },
                "en": {
                    "": "Wed"
                },
                "es": {
                    "": "Mi??"
                },
                "fi": {
                    "": "Keskiviikko"
                },
                "fr": {
                    "": "Marier"
                },
                "hr": {
                    "": "Srijeda"
                },
                "it": {
                    "": "Mer"
                },
                "nl": {
                    "": "Woensdag"
                },
                "no": {
                    "": "Ons"
                },
                "sk": {
                    "": "Streda"
                },
                "sl": {
                    "": "Sre"
                },
                "sv": {
                    "": "Onsdag"
                },
                "vi": {
                    "": "K????t h??n"
                }
            },
            "Wednesday": {
                "ar": {
                    "": "????????????????"
                },
                "ca": {
                    "": "Dimecres"
                },
                "cs": {
                    "": "St??eda"
                },
                "da": {
                    "": "Onsdag"
                },
                "de": {
                    "": "Mittwoch"
                },
                "el": {
                    "": "??????????????"
                },
                "en": {
                    "": "Wednesday"
                },
                "es": {
                    "": "Mi??rcoles"
                },
                "fi": {
                    "": "Keskiviikko"
                },
                "fr": {
                    "": "Mercredi"
                },
                "hr": {
                    "": "Srijeda"
                },
                "it": {
                    "": "Mercoled??"
                },
                "ja": {
                    "": "?????????"
                },
                "ko": {
                    "": "?????????"
                },
                "nl": {
                    "": "Woensdag"
                },
                "no": {
                    "": "Onsdag"
                },
                "pt": {
                    "": "Quarta-feira"
                },
                "ru": {
                    "": "?? ??????????"
                },
                "sk": {
                    "": "Streda"
                },
                "sl": {
                    "": "Sre"
                },
                "sv": {
                    "": "Onsdag"
                },
                "vi": {
                    "": "Th??? t??"
                },
                "zh": {
                    "": "??????"
                }
            },
            "Your answer can be no more than %max%.": {
                "en": {
                    "": "Your answer can be no more than %max%."
                }
            },
            "Your answer is not within the range of valid answers for this question.": {
                "en": {
                    "": "Your answer is not within the range of valid answers for this question."
                }
            },
            "Your answer must be at least %min%.": {
                "en": {
                    "": "Your answer must be at least %min%."
                }
            },
            "Your answer must contain %num% digits after the decimal.": {
                "en": {
                    "": "Your answer must contain %num% digits after the decimal."
                }
            },
            "Your answer must contain %num% digits.": {
                "en": {
                    "": "Your answer must contain %num% digits."
                }
            },
            "Your comment can be no more than %max% characters.": {
                "en": {
                    "": "Your comment can be no more than %max% characters."
                }
            },
            "Your comment must be at least %min% characters.": {
                "ca": {
                    "": "Votre commentaire doit comporter au moins %min% caract??res."
                },
                "en": {
                    "": "Your comment must be at least %min% characters."
                }
            }
        }
    },
    "exposedSecurityGroups": {}
}