var quote = "\"";
tw.local.lists = {};

//tw.local.orderRequest.cancellationForActivation.hardware
////////////////////////////////////////////////////////////////////////

//tw.local.lists.cancellationForActivationHardware = `[]`;

if(tw.local.orderRequest.ispCancellationForActivation ==null || tw.local.orderRequest.ispCancellationForActivation.hardware==null || tw.local.orderRequest.ispCancellationForActivation.hardware.listLength==0){
	tw.local.lists.cancellationForActivationHardware = `null`;
}
else{
	tw.local.lists.cancellationForActivationHardware = `[`;
	
	var brand = quote + tw.local.orderRequest.ispCancellationForActivation.hardware[0].brand + quote;
	var model = quote + tw.local.orderRequest.ispCancellationForActivation.hardware[0].model + quote;
	var type = quote + tw.local.orderRequest.ispCancellationForActivation.hardware[0].type + quote;
	var manufacturer = quote + tw.local.orderRequest.ispCancellationForActivation.hardware[0].manufacturer + quote;
	var resolution = quote + tw.local.orderRequest.ispCancellationForActivation.hardware[0].resolution + quote;
	var reason = quote + tw.local.orderRequest.ispCancellationForActivation.hardware[0].reason + quote;
	var clarification = quote + tw.local.orderRequest.ispCancellationForActivation.hardware[0].clarification + quote;
	var visReason = quote + tw.local.orderRequest.ispCancellationForActivation.hardware[0].visReason + quote;
	var visClarification = quote + tw.local.orderRequest.ispCancellationForActivation.hardware[0].visClarification + quote;
	

	
	var brandQ =  `{ "brand" : ` + brand + `,`;
	var modelQ = ` "model" : ` + model + `,`;
	var typeQ = ` "type" : ` + type + `,`;
	var manufacturerQ = ` "manufacturer" : ` + manufacturer + `,`;
	var resolutionQ = ` "resolution" : ` + resolution + `,`;
	var reasonQ = ` "reason" : ` + reason + `,`;
	var clarificationQ = ` "clarification" : ` + clarification + `,`;
	var visReasonQ = ` "visReason" : ` + visReason + `,`;
	var visClarificationQ = ` "visClarification" : ` + visClarification + `}`;
	
	var obj = brandQ + modelQ + typeQ + manufacturerQ + resolutionQ + reasonQ + clarificationQ + visReasonQ + visClarificationQ;
	tw.local.lists.cancellationForActivationHardware+= obj;
	
	for(var i=1; i< tw.local.orderRequest.ispCancellationForActivation.hardware.listLength; i++){
	
		 brand = quote + tw.local.orderRequest.ispCancellationForActivation.hardware[i].brand + quote;
		 model = quote + tw.local.orderRequest.ispCancellationForActivation.hardware[i].model + quote;
		 type = quote + tw.local.orderRequest.ispCancellationForActivation.hardware[i].type + quote;
		 manufacturer = quote + tw.local.orderRequest.ispCancellationForActivation.hardware[i].manufacturer + quote;
		 resolution = quote + tw.local.orderRequest.ispCancellationForActivation.hardware[i].resolution + quote;
		 reason = quote + tw.local.orderRequest.ispCancellationForActivation.hardware[i].reason + quote;
		 clarification = quote + tw.local.orderRequest.ispCancellationForActivation.hardware[i].clarification + quote;
		 visReason = quote + tw.local.orderRequest.ispCancellationForActivation.hardware[i].visReason + quote;
		 visClarification = quote + tw.local.orderRequest.ispCancellationForActivation.hardware[i].visClarification + quote;
		
	
		
		 brandQ =  `{ "brand" : ` + brand + `,`;
		 modelQ = ` "model" : ` + model + `,`;
		 typeQ = ` "type" : ` + type + `,`;
		 manufacturerQ = ` "manufacturer" : ` + manufacturer + `,`;
		 resolutionQ = ` "resolution" : ` + resolution + `,`;
		 reasonQ = ` "reason" : ` + reason + `,`;
		 clarificationQ = ` "clarification" : ` + clarification + `,`;
		 visReasonQ = ` "visReason" : ` + visReason + `,`;
		 visClarificationQ = ` "visClarification" : ` + visClarification + `}`;
		
		 obj = brandQ + modelQ + typeQ + manufacturerQ + resolutionQ + reasonQ + clarificationQ + visReasonQ + visClarificationQ;
		tw.local.lists.cancellationForActivationHardware+=`,`+ obj;
	}
	tw.local.lists.cancellationForActivationHardware+=`]`;
}

//tw.local.orderRequest.modification.oldHardware
////////////////////////////////////////////////////////////////////////
if(tw.local.orderRequest.ispModification==null || tw.local.orderRequest.ispModification.newHardware==null || tw.local.orderRequest.ispModification.newHardware.listLength==0){
	tw.local.lists.modNewHardware = `null`;
}
else{
	tw.local.lists.modNewHardware = `[`;
	
	var productName = quote + tw.local.orderRequest.ispModification.newHardware[0].productName + quote;
	var productPrice = quote + tw.local.orderRequest.ispModification.newHardware[0].productPrice + quote;
	var productAction = quote + tw.local.orderRequest.ispModification.newHardware[0].productAction + quote;
	var productModel = quote + tw.local.orderRequest.ispModification.newHardware[0].productModel + quote;
	var productSerial = quote + tw.local.orderRequest.ispModification.newHardware[0].productSerial + quote;
	var productCount = quote + tw.local.orderRequest.ispModification.newHardware[0].productCount + quote;
	var productID = quote + tw.local.orderRequest.ispModification.newHardware[0].productID + quote;
	
	
	var productNameQ =  `{ "productName" : ` + productName + `,`;
	var productPriceQ = ` "productPrice" : ` + productPrice + `,`;
	var productActionQ = ` "productAction" : ` + productAction + `,`;
	var productModelQ = ` "productModel" : ` + productModel + `,`;
	var productSerialQ = ` "productSerial" : ` + productSerial + `,`;
	var productCountQ = ` "productCount" : ` + productCount + `,`;
	var productIDQ = ` "productID" : ` + productID + `}`;

	
	var obj = productNameQ + productPriceQ + productActionQ + productModelQ + productSerialQ + productCountQ + productIDQ;
	tw.local.lists.modNewHardware+= obj;
	
	for(var i=1; i< tw.local.orderRequest.ispModification.newHardware.listLength; i++){
	
		 productName = quote + tw.local.orderRequest.ispModification.newHardware[i].productName + quote;
		 productPrice = quote + tw.local.orderRequest.ispModification.newHardware[i].productPrice + quote;
		 productAction = quote + tw.local.orderRequest.ispModification.newHardware[i].productAction + quote;
		 productModel = quote + tw.local.orderRequest.ispModification.newHardware[i].productModel + quote;
		 productSerial = quote + tw.local.orderRequest.ispModification.newHardware[i].productSerial + quote;
		 productCount = quote + tw.local.orderRequest.ispModification.newHardware[i].productCount + quote;
		 productID = quote + tw.local.orderRequest.ispModification.newHardware[i].productID + quote;
		
		
		 productNameQ =  `{ "productName" : ` + productName + `,`;
		 productPriceQ = ` "productPrice" : ` + productPrice + `,`;
		 productActionQ = ` "productAction" : ` + productAction + `,`;
		 productModelQ = ` "productModel" : ` + productModel + `,`;
		 productSerialQ = ` "productSerial" : ` + productSerial + `,`;
		 productCountQ = ` "productCount" : ` + productCount + `,`;
		 productIDQ = ` "productID" : ` + productID + `}`;
	
		
		 obj = productNameQ + productPriceQ + productActionQ + productModelQ + productSerialQ + productCountQ + productIDQ;
		tw.local.lists.modNewHardware+=','+ obj;
	}
	tw.local.lists.modNewHardware+=`]`;
}


//tw.local.orderRequest.mod.Hardware
////////////////////////////////////////////////////////////////////////

if(tw.local.orderRequest.ispModification ==null || tw.local.orderRequest.ispModification.Hardware==null || tw.local.orderRequest.ispModification.Hardware.listLength==0){
	tw.local.lists.modHardware = `null`;
}
else{
	tw.local.lists.modHardware = `[`;
	
	var HWType = quote + tw.local.orderRequest.ispModification.Hardware[0].HWType + quote;
	var cpeHW = quote + tw.local.orderRequest.ispModification.Hardware[0].cpeHW + quote;
	var oldHW = quote + tw.local.orderRequest.ispModification.Hardware[0].oldHW + quote;
	var newHW = quote + tw.local.orderRequest.ispModification.Hardware[0].newHW + quote;
	var mwHWInstalled = quote + tw.local.orderRequest.ispModification.Hardware[0].mwHWInstalled + quote;
	var exisitingHWConnectionID = quote + tw.local.orderRequest.ispModification.Hardware[0].exisitingHWConnectionID + quote;
	var HWFeesNumOfInvoices = quote + tw.local.orderRequest.ispModification.Hardware[0].HWFeesNumOfInvoices + quote;
	var recommendation = quote + tw.local.orderRequest.ispModification.Hardware[0].recommendation + quote;
	var hwPaymentRecurring = quote + tw.local.orderRequest.ispModification.Hardware[0].hwPaymentRecurring + quote;
	var annualHWPrice = quote + tw.local.orderRequest.ispModification.Hardware[0].annualHWPrice + quote;
	var hardwareRequired = quote + tw.local.orderRequest.ispModification.Hardware[0].hardwareRequired + quote;
	
	var HWDetails = `{}`;
	
	if(tw.local.orderRequest.ispModification.Hardware[0].HWDetails !==null){
		var modelName = quote + tw.local.orderRequest.ispModification.Hardware[0].HWDetails.modelName + quote;
		var available = quote + tw.local.orderRequest.ispModification.Hardware[0].HWDetails.available + quote;
		var productAttribute = quote + tw.local.orderRequest.ispModification.Hardware[0].HWDetails.productAttribute + quote;
		var productSerial = quote + tw.local.orderRequest.ispModification.Hardware[0].HWDetails.productSerial + quote;
		
		var modelNameQ =  `{ "modelName" : ` + modelName + `,`;
		var availableQ = ` "available" : ` + available + `,`;
		var productAttributeQ = ` "productAttribute" : ` + productAttribute + `,`;
		var productSerialQ = ` "productSerial" : ` + productSerial + `}`;
		
		HWDetails = modelNameQ + availableQ + productAttributeQ + productSerialQ;
	}

	
	var HWTypeQ =  `{ "HWType" : ` + HWType + `,`;
	var cpeHWQ = ` "cpeHW" : ` + cpeHW + `,`;
	var oldHWQ = ` "oldHW" : ` + oldHW + `,`;
	var newHWQ = ` "newHW" : ` + newHW + `,`;
	var mwHWInstalledQ = ` "mwHWInstalled" : ` + mwHWInstalled + `,`;
	var HWDetailsQ = ` "HWDetails" : ` + HWDetails + `,`;
	var exisitingHWConnectionIDQ = ` "exisitingHWConnectionID" : ` + exisitingHWConnectionID + `,`;
	var HWFeesNumOfInvoicesQ = ` "HWFeesNumOfInvoices" : ` + HWFeesNumOfInvoices + `,`;
	var recommendationQ = ` "recommendation" : ` + recommendation + `,`;
	var hwPaymentRecurringQ = ` "hwPaymentRecurring" : ` + hwPaymentRecurring + `,`;
	var annualHWPriceQ = ` "annualHWPrice" : ` + annualHWPrice + `,`;
	var hardwareRequiredQ = ` "hardwareRequired" : ` + hardwareRequired + `}`;
	
	var obj = HWTypeQ + cpeHWQ + oldHWQ + newHWQ + mwHWInstalledQ + HWDetailsQ + exisitingHWConnectionIDQ + HWFeesNumOfInvoicesQ + recommendationQ + hwPaymentRecurringQ + annualHWPriceQ + hardwareRequiredQ;
	tw.local.lists.modHardware+= obj;
	
	for(var i=1; i<tw.local.orderRequest.ispModification.Hardware.listLength; i++){
		HWType = quote + tw.local.orderRequest.ispModification.Hardware[i].HWType + quote;
		cpeHW = quote + tw.local.orderRequest.ispModification.Hardware[i].cpeHW + quote;
		oldHW = quote + tw.local.orderRequest.ispModification.Hardware[i].oldHW + quote;
		newHW = quote + tw.local.orderRequest.ispModification.Hardware[i].newHW + quote;
		mwHWInstalled = quote + tw.local.orderRequest.ispModification.Hardware[i].mwHWInstalled + quote;
		exisitingHWConnectionID = quote + tw.local.orderRequest.ispModification.Hardware[i].exisitingHWConnectionID + quote;
		HWFeesNumOfInvoices = quote + tw.local.orderRequest.ispModification.Hardware[i].HWFeesNumOfInvoices + quote;
		recommendation = quote + tw.local.orderRequest.ispModification.Hardware[i].recommendation + quote;
		hwPaymentRecurring = quote + tw.local.orderRequest.ispModification.Hardware[i].hwPaymentRecurring + quote;
		annualHWPrice = quote + tw.local.orderRequest.ispModification.Hardware[i].annualHWPrice + quote;
		hardwareRequired = quote + tw.local.orderRequest.ispModification.Hardware[i].hardwareRequired + quote;
		
		HWDetails = `{}`;
		
		if(tw.local.orderRequest.ispModification.Hardware[i].HWDetails !==null){
			var modelName = quote + tw.local.orderRequest.ispModification.Hardware[i].HWDetails.modelName + quote;
			var available = quote + tw.local.orderRequest.ispModification.Hardware[i].HWDetails.available + quote;
			var productAttribute = quote + tw.local.orderRequest.ispModification.Hardware[i].HWDetails.productAttribute + quote;
			var productSerial = quote + tw.local.orderRequest.ispModification.Hardware[i].HWDetails.productSerial + quote;
			
			var modelNameQ =  `{ "modelName" : ` + modelName + `,`;
			var availableQ = ` "available" : ` + available + `,`;
			var productAttributeQ = ` "productAttribute" : ` + productAttribute + `,`;
			var productSerialQ = ` "productSerial" : ` + productSerial + `}`;
			
			HWDetails = modelNameQ + availableQ + productAttributeQ + productSerialQ;
		}
	
		
		HWTypeQ =  `{ "HWType" : ` + HWType + `,`;
		cpeHWQ = ` "cpeHW" : ` + cpeHW + `,`;
		oldHWQ = ` "oldHW" : ` + oldHW + `,`;
		newHWQ = ` "newHW" : ` + newHW + `,`;
		mwHWInstalledQ = ` "mwHWInstalled" : ` + mwHWInstalled + `,`;
		HWDetailsQ = ` "HWDetails" : ` + HWDetails + `,`;
		exisitingHWConnectionIDQ = ` "exisitingHWConnectionID" : ` + exisitingHWConnectionID + `,`;
		HWFeesNumOfInvoicesQ = ` "HWFeesNumOfInvoices" : ` + HWFeesNumOfInvoices + `,`;
		recommendationQ = ` "recommendation" : ` + recommendation + `,`;
		hwPaymentRecurringQ = ` "hwPaymentRecurring" : ` + hwPaymentRecurring + `,`;
		annualHWPriceQ = ` "annualHWPrice" : ` + annualHWPrice + `,`;
		hardwareRequiredQ = ` "hardwareRequired" : ` + hardwareRequired + `}`;
		
		obj = HWTypeQ + cpeHWQ + oldHWQ + newHWQ + mwHWInstalledQ + HWDetailsQ + exisitingHWConnectionIDQ + HWFeesNumOfInvoicesQ + recommendationQ + hwPaymentRecurringQ + annualHWPriceQ + hardwareRequiredQ;
		tw.local.lists.modHardware+=','+ obj;
	}
	tw.local.lists.modHardware+=`]`;
}

//tw.local.orderRequest.modification.oldHardware
////////////////////////////////////////////////////////////////////////
if(tw.local.orderRequest.ispModification ==null || tw.local.orderRequest.ispModification.newHardware==null || tw.local.orderRequest.ispModification.newHardware.listLength==0){
	tw.local.lists.modNewHardware = `null`;
}
else{
	tw.local.lists.modNewHardware = `[`;
	
	var productName = quote + tw.local.orderRequest.ispModification.newHardware[0].productName + quote;
	var productPrice = quote + tw.local.orderRequest.ispModification.newHardware[0].productPrice + quote;
	var productAction = quote + tw.local.orderRequest.ispModification.newHardware[0].productAction + quote;
	var productModel = quote + tw.local.orderRequest.ispModification.newHardware[0].productModel + quote;
	var productSerial = quote + tw.local.orderRequest.ispModification.newHardware[0].productSerial + quote;
	var productCount = quote + tw.local.orderRequest.ispModification.newHardware[0].productCount + quote;
	var productID = quote + tw.local.orderRequest.ispModification.newHardware[0].productID + quote;
	
	
	var productNameQ =  `{ "productName" : ` + productName + `,`;
	var productPriceQ = ` "productPrice" : ` + productPrice + `,`;
	var productActionQ = ` "productAction" : ` + productAction + `,`;
	var productModelQ = ` "productModel" : ` + productModel + `,`;
	var productSerialQ = ` "productSerial" : ` + productSerial + `,`;
	var productCountQ = ` "productCount" : ` + productCount + `,`;
	var productIDQ = ` "productID" : ` + productID + `}`;

	
	var obj = productNameQ + productPriceQ + productActionQ + productModelQ + productSerialQ + productCountQ + productIDQ;
	tw.local.lists.modNewHardware+= obj;
	
	for(var i=1; i< tw.local.orderRequest.ispModification.newHardware.listLength; i++){
	
		 productName = quote + tw.local.orderRequest.ispModification.newHardware[i].productName + quote;
		 productPrice = quote + tw.local.orderRequest.ispModification.newHardware[i].productPrice + quote;
		 productAction = quote + tw.local.orderRequest.ispModification.newHardware[i].productAction + quote;
		 productModel = quote + tw.local.orderRequest.ispModification.newHardware[i].productModel + quote;
		 productSerial = quote + tw.local.orderRequest.ispModification.newHardware[i].productSerial + quote;
		 productCount = quote + tw.local.orderRequest.ispModification.newHardware[i].productCount + quote;
		 productID = quote + tw.local.orderRequest.ispModification.newHardware[i].productID + quote;
		
		
		 productNameQ =  `{ "productName" : ` + productName + `,`;
		 productPriceQ = ` "productPrice" : ` + productPrice + `,`;
		 productActionQ = ` "productAction" : ` + productAction + `,`;
		 productModelQ = ` "productModel" : ` + productModel + `,`;
		 productSerialQ = ` "productSerial" : ` + productSerial + `,`;
		 productCountQ = ` "productCount" : ` + productCount + `,`;
		 productIDQ = ` "productID" : ` + productID + `}`;
	
		
		 obj = productNameQ + productPriceQ + productActionQ + productModelQ + productSerialQ + productCountQ + productIDQ;
		tw.local.lists.modNewHardware+=','+ obj;
	}
	tw.local.lists.modNewHardware+=`]`;
}

//tw.local.orderRequest.modification.oldHardware
////////////////////////////////////////////////////////////////////////
if(tw.local.orderRequest.ispModification==null || tw.local.orderRequest.ispModification.oldHardware==null || tw.local.orderRequest.ispModification.oldHardware.listLength==0){
	tw.local.lists.modOldHardware = `null`;
}
else{
	tw.local.lists.modOldHardware = `[`;
	
	var productName = quote + tw.local.orderRequest.ispModification.oldHardware[0].productName + quote;
	var productPrice = quote + tw.local.orderRequest.ispModification.oldHardware[0].productPrice + quote;
	var productAction = quote + tw.local.orderRequest.ispModification.oldHardware[0].productAction + quote;
	var productModel = quote + tw.local.orderRequest.ispModification.oldHardware[0].productModel + quote;
	var productSerial = quote + tw.local.orderRequest.ispModification.oldHardware[0].productSerial + quote;
	var productCount = quote + tw.local.orderRequest.ispModification.oldHardware[0].productCount + quote;
	var productID = quote + tw.local.orderRequest.ispModification.oldHardware[0].productID + quote;
	
	
	var productNameQ =  `{ "productName" : ` + productName + `,`;
	var productPriceQ = ` "productPrice" : ` + productPrice + `,`;
	var productActionQ = ` "productAction" : ` + productAction + `,`;
	var productModelQ = ` "productModel" : ` + productModel + `,`;
	var productSerialQ = ` "productSerial" : ` + productSerial + `,`;
	var productCountQ = ` "productCount" : ` + productCount + `,`;
	var productIDQ = ` "productID" : ` + productID + `}`;

	
	var obj = productNameQ + productPriceQ + productActionQ + productModelQ + productSerialQ + productCountQ + productIDQ;
	tw.local.lists.modOldHardware+= obj;
	
	for(var i=1; i< tw.local.orderRequest.ispModification.oldHardware.listLength; i++){
	
		 productName = quote + tw.local.orderRequest.ispModification.oldHardware[i].productName + quote;
		 productPrice = quote + tw.local.orderRequest.ispModification.oldHardware[i].productPrice + quote;
		 productAction = quote + tw.local.orderRequest.ispModification.oldHardware[i].productAction + quote;
		 productModel = quote + tw.local.orderRequest.ispModification.oldHardware[i].productModel + quote;
		 productSerial = quote + tw.local.orderRequest.ispModification.oldHardware[i].productSerial + quote;
		 productCount = quote + tw.local.orderRequest.ispModification.oldHardware[i].productCount + quote;
		 productID = quote + tw.local.orderRequest.ispModification.oldHardware[i].productID + quote;
		
		
		 productNameQ =  `{ "productName" : ` + productName + `,`;
		 productPriceQ = ` "productPrice" : ` + productPrice + `,`;
		 productActionQ = ` "productAction" : ` + productAction + `,`;
		 productModelQ = ` "productModel" : ` + productModel + `,`;
		 productSerialQ = ` "productSerial" : ` + productSerial + `,`;
		 productCountQ = ` "productCount" : ` + productCount + `,`;
		 productIDQ = ` "productID" : ` + productID + `}`;
	
		
		 obj = productNameQ + productPriceQ + productActionQ + productModelQ + productSerialQ + productCountQ + productIDQ;
		tw.local.lists.modOldHardware+=','+ obj;
	}
	tw.local.lists.modOldHardware+=`]`;
}

//tw.local.orderRequest.modification.noteLog
////////////////////////////////////////////////////////////////////////
if(tw.local.orderRequest.ispModification ==null || tw.local.orderRequest.ispModification.noteLog==null || tw.local.orderRequest.ispModification.noteLog.listLength==0){
	tw.local.lists.modNoteLog = `null`;
}
else{
	tw.local.lists.modNoteLog = `[`;
	
	var name = quote + tw.local.orderRequest.ispModification.noteLog[0].name + quote;
	var team = quote + tw.local.orderRequest.ispModification.noteLog[0].team + quote;
	var date = quote + tw.local.orderRequest.ispModification.noteLog[0].date + quote;
	var note = quote + tw.local.orderRequest.ispModification.noteLog[0].note + quote;
	var stepName = quote + tw.local.orderRequest.ispModification.noteLog[0].stepName + quote;
	var action = quote + tw.local.orderRequest.ispModification.noteLog[0].action + quote;
	var reason = quote + tw.local.orderRequest.ispModification.noteLog[0].reason + quote;
	
	
	var nameQ =  `{ "name" : ` + name + `,`;
	var teamQ = ` "team" : ` + team + `,`;
	var dateQ = ` "date" : ` + date + `,`;
	var noteQ = ` "note" : ` + note + `,`;
	var stepNameQ = ` "stepName" : ` + stepName + `,`;
	var actionQ = ` "action" : ` + action + `,`;
	var reasonQ = ` "reason" : ` + reason + `}`;

	
	var obj = nameQ + teamQ + dateQ + noteQ + stepNameQ + actionQ + reasonQ;
	tw.local.lists.modNoteLog+= obj;
	
	for(var i=1; i< tw.local.orderRequest.ispModification.noteLog.listLength; i++){
	
		name = quote + tw.local.orderRequest.ispModification.noteLog[i].name + quote;
		team = quote + tw.local.orderRequest.ispModification.noteLog[i].team + quote;
		date = quote + tw.local.orderRequest.ispModification.noteLog[i].date + quote;
		note = quote + tw.local.orderRequest.ispModification.noteLog[i].note + quote;
		stepName = quote + tw.local.orderRequest.ispModification.noteLog[i].stepName + quote;
		action = quote + tw.local.orderRequest.ispModification.noteLog[i].action + quote;
		reason = quote + tw.local.orderRequest.ispModification.noteLog[i].reason + quote;
		
		
		nameQ =  `{ "name" : ` + name + `,`;
		teamQ = ` "team" : ` + team + `,`;
		dateQ = ` "date" : ` + date + `,`;
		noteQ = ` "note" : ` + note + `,`;
		stepNameQ = ` "stepName" : ` + stepName + `,`;
		actionQ = ` "action" : ` + action + `,`;
		reasonQ = ` "reason" : ` + reason + `}`;
	
		
		obj = nameQ + teamQ + dateQ + noteQ + stepNameQ + actionQ + reasonQ;
		tw.local.lists.modNoteLog+=`,`+ obj;
	}
	tw.local.lists.modNoteLog+=`]`;
}

//tw.local.orderRequest.modification.commentLog
////////////////////////////////////////////////////////////////////////
if(tw.local.orderRequest.ispModification ==null || tw.local.orderRequest.ispModification.commentLog==null || tw.local.orderRequest.ispModification.commentLog.listLength==0){
	tw.local.lists.modCommentLog = `null`;
}
else{
	tw.local.lists.modCommentLog = `[`;
	
	var name = quote + tw.local.orderRequest.ispModification.commentLog[0].name + quote;
	var team = quote + tw.local.orderRequest.ispModification.commentLog[0].team + quote;
	var date = quote + tw.local.orderRequest.ispModification.commentLog[0].date + quote;
	var comment = quote + tw.local.orderRequest.ispModification.commentLog[0].comment + quote;
	var stepName = quote + tw.local.orderRequest.ispModification.commentLog[0].stepName + quote;
	var action = quote + tw.local.orderRequest.ispModification.commentLog[0].action + quote;
	var reason = quote + tw.local.orderRequest.ispModification.commentLog[0].reason + quote;
	
	
	var nameQ =  `{ "name" : ` + name + `,`;
	var teamQ = ` "team" : ` + team + `,`;
	var dateQ = ` "date" : ` + date + `,`;
	var commentQ = ` "comment" : ` + comment + `,`;
	var stepNameQ = ` "stepName" : ` + stepName + `,`;
	var actionQ = ` "action" : ` + action + `,`;
	var reasonQ = ` "reason" : ` + reason + `}`;

	
	var obj = nameQ + teamQ + dateQ + commentQ + stepNameQ + actionQ + reasonQ;
	tw.local.lists.modCommentLog+= obj;
	
	for(var i=1; i< tw.local.orderRequest.ispModification.commentLog.listLength; i++){
	
		name = quote + tw.local.orderRequest.ispModification.commentLog[i].name + quote;
		team = quote + tw.local.orderRequest.ispModification.commentLog[i].team + quote;
		date = quote + tw.local.orderRequest.ispModification.commentLog[i].date + quote;
		comment = quote + tw.local.orderRequest.ispModification.commentLog[i].comment + quote;
		stepName = quote + tw.local.orderRequest.ispModification.commentLog[i].stepName + quote;
		action = quote + tw.local.orderRequest.ispModification.commentLog[i].action + quote;
		reason = quote + tw.local.orderRequest.ispModification.commentLog[i].reason + quote;
		
		
		nameQ =  `{ "name" : ` + name + `,`;
		teamQ = ` "team" : ` + team + `,`;
		dateQ = ` "date" : ` + date + `,`;
		commentQ = ` "comment" : ` + comment + `,`;
		stepNameQ = ` "stepName" : ` + stepName + `,`;
		actionQ = ` "action" : ` + action + `,`;
		reasonQ = ` "reason" : ` + reason + `}`;
	
		
		obj = nameQ + teamQ + dateQ + commentQ + stepNameQ + actionQ + reasonQ;
		tw.local.lists.modCommentLog+=`,`+ obj;
	}
	tw.local.lists.modCommentLog+=`]`;
}



//tw.local.orderRequest.cancellationForActivation.commentLog
////////////////////////////////////////////////////////////////////////
if(tw.local.orderRequest.ispCancellationForActivation ==null || tw.local.orderRequest.ispCancellationForActivation.commentLog==null || tw.local.orderRequest.ispCancellationForActivation.commentLog.listLength==0){
	tw.local.lists.cancellationActivationCommentLog = `null`;
}
else{
	tw.local.lists.cancellationActivationCommentLog = `[`;
	
	var name = quote + tw.local.orderRequest.ispCancellationForActivation.commentLog[0].name + quote;
	var team = quote + tw.local.orderRequest.ispCancellationForActivation.commentLog[0].team + quote;
	var date = quote + tw.local.orderRequest.ispCancellationForActivation.commentLog[0].date + quote;
	var comment = quote + tw.local.orderRequest.ispCancellationForActivation.commentLog[0].comment + quote;
	var stepName = quote + tw.local.orderRequest.ispCancellationForActivation.commentLog[0].stepName + quote;
	var action = quote + tw.local.orderRequest.ispCancellationForActivation.commentLog[0].action + quote;
	var reason = quote + tw.local.orderRequest.ispCancellationForActivation.commentLog[0].reason + quote;
	
	
	var nameQ =  `{ "name" : ` + name + `,`;
	var teamQ = ` "team" : ` + team + `,`;
	var dateQ = ` "date" : ` + date + `,`;
	var commentQ = ` "comment" : ` + comment + `,`;
	var stepNameQ = ` "stepName" : ` + stepName + `,`;
	var actionQ = ` "action" : ` + action + `,`;
	var reasonQ = ` "reason" : ` + reason + `}`;

	
	var obj = nameQ + teamQ + dateQ + commentQ + stepNameQ + actionQ + reasonQ;
	tw.local.lists.cancellationActivationCommentLog+= obj;
	
	for(var i=1; i< tw.local.orderRequest.ispCancellationForActivation.commentLog.listLength; i++){
	
		name = quote + tw.local.orderRequest.ispCancellationForActivation.commentLog[i].name + quote;
		team = quote + tw.local.orderRequest.ispCancellationForActivation.commentLog[i].team + quote;
		date = quote + tw.local.orderRequest.ispCancellationForActivation.commentLog[i].date + quote;
		comment = quote + tw.local.orderRequest.ispCancellationForActivation.commentLog[i].comment + quote;
		stepName = quote + tw.local.orderRequest.ispCancellationForActivation.commentLog[i].stepName + quote;
		action = quote + tw.local.orderRequest.ispCancellationForActivation.commentLog[i].action + quote;
		reason = quote + tw.local.orderRequest.ispCancellationForActivation.commentLog[i].reason + quote;
		
		
		nameQ =  `{ "name" : ` + name + `,`;
		teamQ = ` "team" : ` + team + `,`;
		dateQ = ` "date" : ` + date + `,`;
		commentQ = ` "comment" : ` + comment + `,`;
		stepNameQ = ` "stepName" : ` + stepName + `,`;
		actionQ = ` "action" : ` + action + `,`;
		reasonQ = ` "reason" : ` + reason + `}`;
	
		
		obj = nameQ + teamQ + dateQ + commentQ + stepNameQ + actionQ + reasonQ;
		tw.local.lists.cancellationActivationCommentLog+=`,`+ obj;
	}
	tw.local.lists.cancellationActivationCommentLog+=`]`;
}

//tw.local.orderRequest.resume.commentLog
////////////////////////////////////////////////////////////////////////
if(tw.local.orderRequest.ispResume ==null || tw.local.orderRequest.ispResume.commentLog==null || tw.local.orderRequest.ispResume.commentLog.listLength==0){
	tw.local.lists.resumeCommentLog = `null`;
}
else{
	tw.local.lists.resumeCommentLog = `[`;
	
	var name = quote + tw.local.orderRequest.ispResume.commentLog[0].name + quote;
	var team = quote + tw.local.orderRequest.ispResume.commentLog[0].team + quote;
	var date = quote + tw.local.orderRequest.ispResume.commentLog[0].date + quote;
	var comment = quote + tw.local.orderRequest.ispResume.commentLog[0].comment + quote;
	var stepName = quote + tw.local.orderRequest.ispResume.commentLog[0].stepName + quote;
	var action = quote + tw.local.orderRequest.ispResume.commentLog[0].action + quote;
	var reason = quote + tw.local.orderRequest.ispResume.commentLog[0].reason + quote;
	
	
	var nameQ =  `{ "name" : ` + name + `,`;
	var teamQ = ` "team" : ` + team + `,`;
	var dateQ = ` "date" : ` + date + `,`;
	var commentQ = ` "comment" : ` + comment + `,`;
	var stepNameQ = ` "stepName" : ` + stepName + `,`;
	var actionQ = ` "action" : ` + action + `,`;
	var reasonQ = ` "reason" : ` + reason + `}`;

	
	var obj = nameQ + teamQ + dateQ + commentQ + stepNameQ + actionQ + reasonQ;
	tw.local.lists.resumeCommentLog+= obj;
	
	for(var i=1; i< tw.local.orderRequest.ispResume.commentLog.listLength; i++){
	
		name = quote + tw.local.orderRequest.ispResume.commentLog[i].name + quote;
		team = quote + tw.local.orderRequest.ispResume.commentLog[i].team + quote;
		date = quote + tw.local.orderRequest.ispResume.commentLog[i].date + quote;
		comment = quote + tw.local.orderRequest.ispResume.commentLog[i].comment + quote;
		stepName = quote + tw.local.orderRequest.ispResume.commentLog[i].stepName + quote;
		action = quote + tw.local.orderRequest.ispResume.commentLog[i].action + quote;
		reason = quote + tw.local.orderRequest.ispResume.commentLog[i].reason + quote;
		
		
		nameQ =  `{ "name" : ` + name + `,`;
		teamQ = ` "team" : ` + team + `,`;
		dateQ = ` "date" : ` + date + `,`;
		commentQ = ` "comment" : ` + comment + `,`;
		stepNameQ = ` "stepName" : ` + stepName + `,`;
		actionQ = ` "action" : ` + action + `,`;
		reasonQ = ` "reason" : ` + reason + `}`;
	
		
		obj = nameQ + teamQ + dateQ + commentQ + stepNameQ + actionQ + reasonQ;
		tw.local.lists.resumeCommentLog+=`,`+ obj;
	}
	tw.local.lists.resumeCommentLog+=`]`;
}

//tw.local.orderRequest.suspension.commentLog
////////////////////////////////////////////////////////////////////////
if(tw.local.orderRequest.ispSuspension ==null || tw.local.orderRequest.ispSuspension.commentLog==null || tw.local.orderRequest.ispSuspension.commentLog.listLength==0){
	tw.local.lists.suspensionCommentLog = `null`;
}
else{
	tw.local.lists.suspensionCommentLog = `[`;
	
	var name = quote + tw.local.orderRequest.ispSuspension.commentLog[0].name + quote;
	var team = quote + tw.local.orderRequest.ispSuspension.commentLog[0].team + quote;
	var date = quote + tw.local.orderRequest.ispSuspension.commentLog[0].date + quote;
	var comment = quote + tw.local.orderRequest.ispSuspension.commentLog[0].comment + quote;
	var stepName = quote + tw.local.orderRequest.ispSuspension.commentLog[0].stepName + quote;
	var action = quote + tw.local.orderRequest.ispSuspension.commentLog[0].action + quote;
	var reason = quote + tw.local.orderRequest.ispSuspension.commentLog[0].reason + quote;
	
	
	var nameQ =  `{ "name" : ` + name + `,`;
	var teamQ = ` "team" : ` + team + `,`;
	var dateQ = ` "date" : ` + date + `,`;
	var commentQ = ` "comment" : ` + comment + `,`;
	var stepNameQ = ` "stepName" : ` + stepName + `,`;
	var actionQ = ` "action" : ` + action + `,`;
	var reasonQ = ` "reason" : ` + reason + `}`;

	
	var obj = nameQ + teamQ + dateQ + commentQ + stepNameQ + actionQ + reasonQ;
	tw.local.lists.suspensionCommentLog+= obj;
	
	for(var i=1; i< tw.local.orderRequest.ispSuspension.commentLog.listLength; i++){
	
		name = quote + tw.local.orderRequest.ispSuspension.commentLog[i].name + quote;
		team = quote + tw.local.orderRequest.ispSuspension.commentLog[i].team + quote;
		date = quote + tw.local.orderRequest.ispSuspension.commentLog[i].date + quote;
		comment = quote + tw.local.orderRequest.ispSuspension.commentLog[i].comment + quote;
		stepName = quote + tw.local.orderRequest.ispSuspension.commentLog[i].stepName + quote;
		action = quote + tw.local.orderRequest.ispSuspension.commentLog[i].action + quote;
		reason = quote + tw.local.orderRequest.ispSuspension.commentLog[i].reason + quote;
		
		
		nameQ =  `{ "name" : ` + name + `,`;
		teamQ = ` "team" : ` + team + `,`;
		dateQ = ` "date" : ` + date + `,`;
		commentQ = ` "comment" : ` + comment + `,`;
		stepNameQ = ` "stepName" : ` + stepName + `,`;
		actionQ = ` "action" : ` + action + `,`;
		reasonQ = ` "reason" : ` + reason + `}`;
	
		
		obj = nameQ + teamQ + dateQ + commentQ + stepNameQ + actionQ + reasonQ;
		tw.local.lists.suspensionCommentLog+=`,`+ obj;
	}
	tw.local.lists.suspensionCommentLog+=`]`;
}

//tw.local.orderRequest.term.commentLog
////////////////////////////////////////////////////////////////////////
if(tw.local.orderRequest.ispTermination ==null || tw.local.orderRequest.ispTermination.commentLog==null || tw.local.orderRequest.ispTermination.commentLog.listLength==0){
	tw.local.lists.termCommentLog = `null`;
}
else{
	tw.local.lists.termCommentLog = `[`;
	
	var name = quote + tw.local.orderRequest.ispTermination.commentLog[0].name + quote;
	var team = quote + tw.local.orderRequest.ispTermination.commentLog[0].team + quote;
	var date = quote + tw.local.orderRequest.ispTermination.commentLog[0].date + quote;
	var comment = quote + tw.local.orderRequest.ispTermination.commentLog[0].comment + quote;
	var stepName = quote + tw.local.orderRequest.ispTermination.commentLog[0].stepName + quote;
	var action = quote + tw.local.orderRequest.ispTermination.commentLog[0].action + quote;
	var reason = quote + tw.local.orderRequest.ispTermination.commentLog[0].reason + quote;
	
	
	var nameQ =  `{ "name" : ` + name + `,`;
	var teamQ = ` "team" : ` + team + `,`;
	var dateQ = ` "date" : ` + date + `,`;
	var commentQ = ` "comment" : ` + comment + `,`;
	var stepNameQ = ` "stepName" : ` + stepName + `,`;
	var actionQ = ` "action" : ` + action + `,`;
	var reasonQ = ` "reason" : ` + reason + `}`;

	
	var obj = nameQ + teamQ + dateQ + commentQ + stepNameQ + actionQ + reasonQ;
	tw.local.lists.termCommentLog+= obj;
	
	for(var i=1; i< tw.local.orderRequest.ispTermination.commentLog.listLength; i++){
	
		name = quote + tw.local.orderRequest.ispTermination.commentLog[i].name + quote;
		team = quote + tw.local.orderRequest.ispTermination.commentLog[i].team + quote;
		date = quote + tw.local.orderRequest.ispTermination.commentLog[i].date + quote;
		comment = quote + tw.local.orderRequest.ispTermination.commentLog[i].comment + quote;
		stepName = quote + tw.local.orderRequest.ispTermination.commentLog[i].stepName + quote;
		action = quote + tw.local.orderRequest.ispTermination.commentLog[i].action + quote;
		reason = quote + tw.local.orderRequest.ispTermination.commentLog[i].reason + quote;
		
		
		nameQ =  `{ "name" : ` + name + `,`;
		teamQ = ` "team" : ` + team + `,`;
		dateQ = ` "date" : ` + date + `,`;
		commentQ = ` "comment" : ` + comment + `,`;
		stepNameQ = ` "stepName" : ` + stepName + `,`;
		actionQ = ` "action" : ` + action + `,`;
		reasonQ = ` "reason" : ` + reason + `}`;
	
		
		obj = nameQ + teamQ + dateQ + commentQ + stepNameQ + actionQ + reasonQ;
		tw.local.lists.termCommentLog+=`,`+ obj;
	}
	tw.local.lists.termCommentLog+=`]`;
}

//tw.local.orderRequest.term.replacementHW
////////////////////////////////////////////////////////////////////////
if(tw.local.orderRequest.ispTermination ==null || tw.local.orderRequest.ispTermination.replacementHardware==null || tw.local.orderRequest.ispTermination.replacementHardware.listLength==0){
	tw.local.lists.termReplacementHW = `null`;
}
else{
	tw.local.lists.termReplacementHW = `[`;
	
	var productName = quote + tw.local.orderRequest.ispTermination.replacementHardware[0].productName + quote;
	var productModelOrAttribute = quote + tw.local.orderRequest.ispTermination.replacementHardware[0].productModelOrAttribute + quote;
	var productSerialNumber = quote + tw.local.orderRequest.ispTermination.replacementHardware[0].productSerialNumber + quote;
	var collectionStatus = quote + tw.local.orderRequest.ispTermination.replacementHardware[0].collectionStatus + quote;
	var reason = quote + tw.local.orderRequest.ispTermination.replacementHardware[0].reason + quote;
	var clarification = quote + tw.local.orderRequest.ispTermination.replacementHardware[0].clarification + quote;
	var visReason = quote + tw.local.orderRequest.ispTermination.replacementHardware[0].visReason + quote;
	var visClarification = quote + tw.local.orderRequest.ispTermination.replacementHardware[0].visClarification + quote;
	
	var productNameQ =  `{ "productName" : ` + productName + `,`;
	var productModelOrAttributeQ = ` "productModelOrAttribute" : ` + productModelOrAttribute + `,`;
	var productSerialNumberQ = ` "productSerialNumber" : ` + productSerialNumber + `,`;
	var collectionStatusQ = ` "collectionStatus" : ` + collectionStatus + `,`;
	var reasonQ = ` "reason" : ` + reason + `,`;
	var clarificationQ = ` "clarification" : ` + clarification + `,`;
	var visReasonQ = ` "visReason" : ` + visReason + `,`;
	var visClarificationQ = ` "visClarification" : ` + visClarification + `}`;
	
	var obj = productNameQ + productModelOrAttributeQ + productSerialNumberQ + collectionStatusQ + reasonQ + clarificationQ + visReasonQ + visClarificationQ;
	tw.local.lists.termReplacementHW+= obj;
	
	for(var i=1; i< tw.local.orderRequest.ispTermination.replacementHardware.listLength; i++){
		 productName = quote + tw.local.orderRequest.ispTermination.replacementHardware[i].productName + quote;
		 productModelOrAttribute = quote + tw.local.orderRequest.ispTermination.replacementHardware[i].productModelOrAttribute + quote;
		 productSerialNumber = quote + tw.local.orderRequest.ispTermination.replacementHardware[i].productSerialNumber + quote;
		 collectionStatus = quote + tw.local.orderRequest.ispTermination.replacementHardware[i].collectionStatus + quote;
		 reason = quote + tw.local.orderRequest.ispTermination.replacementHardware[i].reason + quote;
		 clarification = quote + tw.local.orderRequest.ispTermination.replacementHardware[i].clarification + quote;
		 visReason = quote + tw.local.orderRequest.ispTermination.replacementHardware[i].visReason + quote;
		 visClarification = quote + tw.local.orderRequest.ispTermination.replacementHardware[i].visClarification + quote;
		
		 productNameQ =  `{ "productName" : ` + productName + `,`;
		 productModelOrAttributeQ = ` "productModelOrAttribute" : ` + productModelOrAttribute + `,`;
		 productSerialNumberQ = ` "productSerialNumber" : ` + productSerialNumber + `,`;
		 collectionStatusQ = ` "collectionStatus" : ` + collectionStatus + `,`;
		 reasonQ = ` "reason" : ` + reason + `,`;
		 clarificationQ = ` "clarification" : ` + clarification + `,`;
		 visReasonQ = ` "visReason" : ` + visReason + `,`;
		 visClarificationQ = ` "visClarification" : ` + visClarification + `}`;
		
		 obj = productNameQ + productModelOrAttributeQ + productSerialNumberQ + collectionStatusQ + reasonQ + clarificationQ + visReasonQ + visClarificationQ;
		tw.local.lists.termReplacementHW+=`,`+ obj;
	}
	tw.local.lists.termReplacementHW+=`]`;
}


//tw.local.orderRequest.act.Hardware
////////////////////////////////////////////////////////////////////////

if(tw.local.orderRequest.ispActivation ==null || tw.local.orderRequest.ispActivation.Hardware==null || tw.local.orderRequest.ispActivation.Hardware.listLength==0){
	tw.local.lists.actHardware = `null`;
}
else{
	tw.local.lists.actHardware = `[`;
	
	var HWType = quote + tw.local.orderRequest.ispActivation.Hardware[0].HWType + quote;
	var cpeHW = quote + tw.local.orderRequest.ispActivation.Hardware[0].cpeHW + quote;
	var oldHW = quote + tw.local.orderRequest.ispActivation.Hardware[0].oldHW + quote;
	var newHW = quote + tw.local.orderRequest.ispActivation.Hardware[0].newHW + quote;
	var mwHWInstalled = quote + tw.local.orderRequest.ispActivation.Hardware[0].mwHWInstalled + quote;
	var exisitingHWConnectionID = quote + tw.local.orderRequest.ispActivation.Hardware[0].exisitingHWConnectionID + quote;
	var HWFeesNumOfInvoices = quote + tw.local.orderRequest.ispActivation.Hardware[0].HWFeesNumOfInvoices + quote;
	var recommendation = quote + tw.local.orderRequest.ispActivation.Hardware[0].recommendation + quote;
	var hwPaymentRecurring = quote + tw.local.orderRequest.ispActivation.Hardware[0].hwPaymentRecurring + quote;
	var annualHWPrice = quote + tw.local.orderRequest.ispActivation.Hardware[0].annualHWPrice + quote;
	var hardwareRequired = quote + tw.local.orderRequest.ispActivation.Hardware[0].hardwareRequired + quote;
	
	var HWDetails = `{}`;
	
	if(tw.local.orderRequest.ispActivation.Hardware[0].HWDetails !==null){
		var modelName = quote + tw.local.orderRequest.ispActivation.Hardware[0].HWDetails.modelName + quote;
		var available = quote + tw.local.orderRequest.ispActivation.Hardware[0].HWDetails.available + quote;
		var productAttribute = quote + tw.local.orderRequest.ispActivation.Hardware[0].HWDetails.productAttribute + quote;
		var productSerial = quote + tw.local.orderRequest.ispActivation.Hardware[0].HWDetails.productSerial + quote;
		
		var modelNameQ =  `{ "modelName" : ` + modelName + `,`;
		var availableQ = ` "available" : ` + available + `,`;
		var productAttributeQ = ` "productAttribute" : ` + productAttribute + `,`;
		var productSerialQ = ` "productSerial" : ` + productSerial + `}`;
		
		HWDetails = modelNameQ + availableQ + productAttributeQ + productSerialQ;
	}

	
	var HWTypeQ =  `{ "HWType" : ` + HWType + `,`;
	var cpeHWQ = ` "cpeHW" : ` + cpeHW + `,`;
	var oldHWQ = ` "oldHW" : ` + oldHW + `,`;
	var newHWQ = ` "newHW" : ` + newHW + `,`;
	var mwHWInstalledQ = ` "mwHWInstalled" : ` + mwHWInstalled + `,`;
	var HWDetailsQ = ` "HWDetails" : ` + HWDetails + `,`;
	var exisitingHWConnectionIDQ = ` "exisitingHWConnectionID" : ` + exisitingHWConnectionID + `,`;
	var HWFeesNumOfInvoicesQ = ` "HWFeesNumOfInvoices" : ` + HWFeesNumOfInvoices + `,`;
	var recommendationQ = ` "recommendation" : ` + recommendation + `,`;
	var hwPaymentRecurringQ = ` "hwPaymentRecurring" : ` + hwPaymentRecurring + `,`;
	var annualHWPriceQ = ` "annualHWPrice" : ` + annualHWPrice + `,`;
	var hardwareRequiredQ = ` "hardwareRequired" : ` + hardwareRequired + `}`;
	
	var obj = HWTypeQ + cpeHWQ + oldHWQ + newHWQ + mwHWInstalledQ + HWDetailsQ + exisitingHWConnectionIDQ + HWFeesNumOfInvoicesQ + recommendationQ + hwPaymentRecurringQ + annualHWPriceQ + hardwareRequiredQ;
	tw.local.lists.actHardware+= obj;
	
	for(var i=1; i<tw.local.orderRequest.ispActivation.Hardware.listLength; i++){
		HWType = quote + tw.local.orderRequest.ispActivation.Hardware[i].HWType + quote;
		cpeHW = quote + tw.local.orderRequest.ispActivation.Hardware[i].cpeHW + quote;
		oldHW = quote + tw.local.orderRequest.ispActivation.Hardware[i].oldHW + quote;
		newHW = quote + tw.local.orderRequest.ispActivation.Hardware[i].newHW + quote;
		mwHWInstalled = quote + tw.local.orderRequest.ispActivation.Hardware[i].mwHWInstalled + quote;
		exisitingHWConnectionID = quote + tw.local.orderRequest.ispActivation.Hardware[i].exisitingHWConnectionID + quote;
		HWFeesNumOfInvoices = quote + tw.local.orderRequest.ispActivation.Hardware[i].HWFeesNumOfInvoices + quote;
		recommendation = quote + tw.local.orderRequest.ispActivation.Hardware[i].recommendation + quote;
		hwPaymentRecurring = quote + tw.local.orderRequest.ispActivation.Hardware[i].hwPaymentRecurring + quote;
		annualHWPrice = quote + tw.local.orderRequest.ispActivation.Hardware[i].annualHWPrice + quote;
		hardwareRequired = quote + tw.local.orderRequest.ispActivation.Hardware[i].hardwareRequired + quote;
		
		HWDetails = `{}`;
		
		if(tw.local.orderRequest.ispActivation.Hardware[i].HWDetails !==null){
			var modelName = quote + tw.local.orderRequest.ispActivation.Hardware[i].HWDetails.modelName + quote;
			var available = quote + tw.local.orderRequest.ispActivation.Hardware[i].HWDetails.available + quote;
			var productAttribute = quote + tw.local.orderRequest.ispActivation.Hardware[i].HWDetails.productAttribute + quote;
			var productSerial = quote + tw.local.orderRequest.ispActivation.Hardware[i].HWDetails.productSerial + quote;
			
			var modelNameQ =  `{ "modelName" : ` + modelName + `,`;
			var availableQ = ` "available" : ` + available + `,`;
			var productAttributeQ = ` "productAttribute" : ` + productAttribute + `,`;
			var productSerialQ = ` "productSerial" : ` + productSerial + `}`;
			
			HWDetails = modelNameQ + availableQ + productAttributeQ + productSerialQ;
		}
	
		
		HWTypeQ =  `{ "HWType" : ` + HWType + `,`;
		cpeHWQ = ` "cpeHW" : ` + cpeHW + `,`;
		oldHWQ = ` "oldHW" : ` + oldHW + `,`;
		newHWQ = ` "newHW" : ` + newHW + `,`;
		mwHWInstalledQ = ` "mwHWInstalled" : ` + mwHWInstalled + `,`;
		HWDetailsQ = ` "HWDetails" : ` + HWDetails + `,`;
		exisitingHWConnectionIDQ = ` "exisitingHWConnectionID" : ` + exisitingHWConnectionID + `,`;
		HWFeesNumOfInvoicesQ = ` "HWFeesNumOfInvoices" : ` + HWFeesNumOfInvoices + `,`;
		recommendationQ = ` "recommendation" : ` + recommendation + `,`;
		hwPaymentRecurringQ = ` "hwPaymentRecurring" : ` + hwPaymentRecurring + `,`;
		annualHWPriceQ = ` "annualHWPrice" : ` + annualHWPrice + `,`;
		hardwareRequiredQ = ` "hardwareRequired" : ` + hardwareRequired + `}`;
		
		obj = HWTypeQ + cpeHWQ + oldHWQ + newHWQ + mwHWInstalledQ + HWDetailsQ + exisitingHWConnectionIDQ + HWFeesNumOfInvoicesQ + recommendationQ + hwPaymentRecurringQ + annualHWPriceQ + hardwareRequiredQ;
		tw.local.lists.actHardware+=','+ obj;
	}
	tw.local.lists.actHardware+=`]`;
}





//tw.local.orderRequest.orderdetails.linedetails.techdetails.products
////////////////////////////////////////////////////////////////////////
if(tw.local.orderRequest.ispOrderDetails ==null || tw.local.orderRequest.ispOrderDetails.lineDetails == null || tw.local.orderRequest.ispOrderDetails.lineDetails.technicalDetails == null || tw.local.orderRequest.ispOrderDetails.lineDetails.technicalDetails.Products==null || tw.local.orderRequest.ispOrderDetails.lineDetails.technicalDetails.Products.listLength==0){
	tw.local.lists.orderDetailsProducts = `null`;
}
else{
	tw.local.lists.orderDetailsProducts = `[`;
	
	var productName = quote + tw.local.orderRequest.ispOrderDetails.lineDetails.technicalDetails.Products[0].productName + quote;
	var productPrice = quote + tw.local.orderRequest.ispOrderDetails.lineDetails.technicalDetails.Products[0].productPrice + quote;
	var productAction = quote + tw.local.orderRequest.ispOrderDetails.lineDetails.technicalDetails.Products[0].productAction + quote;
	var productAttribute = quote + tw.local.orderRequest.ispOrderDetails.lineDetails.technicalDetails.Products[0].productAttribute + quote;
	
	var productNameQ =  `{ "productName" : ` + productName + `,`;
	var productPriceQ = ` "productPrice" : ` + productPrice + `,`;
	var productActionQ = ` "productAction" : ` + productAction + `,`;
	var productAttributeQ = ` "productAttribute" : ` + productAttribute + `}`;
	
	var obj = productNameQ + productPriceQ + productActionQ + productAttributeQ;
	tw.local.lists.orderDetailsProducts+= obj;
	
	for(var i=1; i< tw.local.orderRequest.ispOrderDetails.lineDetails.technicalDetails.Products.listLength; i++){
		 productName = quote + tw.local.orderRequest.ispOrderDetails.lineDetails.technicalDetails.Products[i].productName + quote;
		 productPrice = quote + tw.local.orderRequest.ispOrderDetails.lineDetails.technicalDetails.Products[i].productPrice + quote;
		 productAction = quote + tw.local.orderRequest.ispOrderDetails.lineDetails.technicalDetails.Products[i].productAction + quote;
		 productAttribute = quote + tw.local.orderRequest.ispOrderDetails.lineDetails.technicalDetails.Products[i].productAttribute + quote;
		
		 productNameQ =  `{ "productName" : ` + productName + `,`;
		 productPriceQ = ` "productPrice" : ` + productPrice + `,`;
		 productActionQ = ` "productAction" : ` + productAction + `,`;
		 productAttributeQ = ` "productAttribute" : ` + productAttribute + `}`;
		
		 obj = productNameQ + productPriceQ + productActionQ + productAttributeQ;
		tw.local.lists.orderDetailsProducts+=`,`+ obj;
	}
	tw.local.lists.orderDetailsProducts+=`]`;
}

//tw.local.orderRequest.termination.installedHW
////////////////////////////////////////////////////////////////////////
if(tw.local.orderRequest.ispTermination ==null || tw.local.orderRequest.ispTermination.installedHardware==null || tw.local.orderRequest.ispTermination.installedHardware.listLength==0){
	tw.local.lists.termInstalledHW = `null`;
}
else{
	tw.local.lists.termInstalledHW = `[`;
	
	var productName = quote + tw.local.orderRequest.ispTermination.installedHardware[0].productName + quote;
	var productModelOrAttribute = quote + tw.local.orderRequest.ispTermination.installedHardware[0].productModelOrAttribute + quote;
	var productSerialNumber = quote + tw.local.orderRequest.ispTermination.installedHardware[0].productSerialNumber + quote;
	var collectionStatus = quote + tw.local.orderRequest.ispTermination.installedHardware[0].collectionStatus + quote;
	var reason = quote + tw.local.orderRequest.ispTermination.installedHardware[0].reason + quote;
	var clarification = quote + tw.local.orderRequest.ispTermination.installedHardware[0].clarification + quote;
	var visReason = quote + tw.local.orderRequest.ispTermination.installedHardware[0].visReason + quote;
	var visClarification = quote + tw.local.orderRequest.ispTermination.installedHardware[0].visClarification + quote;
	
	var productNameQ =  `{ "productName" : ` + productName + `,`;
	var productModelOrAttributeQ = ` "productModelOrAttribute" : ` + productModelOrAttribute + `,`;
	var productSerialNumberQ = ` "productSerialNumber" : ` + productSerialNumber + `,`;
	var collectionStatusQ = ` "collectionStatus" : ` + collectionStatus + `,`;
	var reasonQ =  ` "reason" : ` + reason + `,`;
	var clarificationQ = ` "clarification" : ` + clarification + `,`;
	var visReasonQ = ` "visReason" : ` + visReason + `,`;
	var visClarificationQ = ` "visClarification" : ` + visClarification + `}`;
	
	var obj = productNameQ + productModelOrAttributeQ + productSerialNumberQ + collectionStatusQ + reasonQ + clarificationQ + visReasonQ + visClarificationQ;
	tw.local.lists.termInstalledHW+= obj;
	
	for(var i=1; i< tw.local.orderRequest.ispTermination.installedHardware.listLength; i++){
		productName = quote + tw.local.orderRequest.ispTermination.installedHardware[i].productName + quote;
		productModelOrAttribute = quote + tw.local.orderRequest.ispTermination.installedHardware[i].productModelOrAttribute + quote;
		productSerialNumber = quote + tw.local.orderRequest.ispTermination.installedHardware[i].productSerialNumber + quote;
		collectionStatus = quote + tw.local.orderRequest.ispTermination.installedHardware[i].collectionStatus + quote;
		reason = quote + tw.local.orderRequest.ispTermination.installedHardware[i].reason + quote;
	 	clarification = quote + tw.local.orderRequest.ispTermination.installedHardware[i].clarification + quote;
		visReason = quote + tw.local.orderRequest.ispTermination.installedHardware[i].visReason + quote;
		visClarification = quote + tw.local.orderRequest.ispTermination.installedHardware[i].visClarification + quote;
		
		productNameQ =  `{ "productName" : ` + productName + `,`;
		productModelOrAttributeQ = ` "productModelOrAttribute" : ` + productModelOrAttribute + `,`;
		productSerialNumberQ = ` "productSerialNumber" : ` + productSerialNumber + `,`;
		collectionStatusQ = ` "collectionStatus" : ` + collectionStatus + `,`;
		reasonQ =  ` "reason" : ` + reason + `,`;
		clarificationQ = ` "clarification" : ` + clarification + `,`;
		visReasonQ = ` "visReason" : ` + visReason + `,`;
		visClarificationQ = ` "visClarification" : ` + visClarification + `}`;
		
		obj = productNameQ + productModelOrAttributeQ + productSerialNumberQ + collectionStatusQ + reasonQ + clarificationQ + visReasonQ + visClarificationQ;
		tw.local.lists.termInstalledHW+=','+ obj;
	}
	tw.local.lists.termInstalledHW+=`]`;
}


//tw.local.orderRequest.act.newHardware
////////////////////////////////////////////////////////////////////////

if(tw.local.orderRequest.ispActivation ==null || tw.local.orderRequest.ispActivation.newHardware==null || tw.local.orderRequest.ispActivation.newHardware.listLength==0){
	tw.local.lists.actNewHardware = `null`;
}
else{
	tw.local.lists.actNewHardware = `[`;
	
	var productName = quote + tw.local.orderRequest.ispActivation.newHardware[0].productName + quote;
	var productPrice = quote + tw.local.orderRequest.ispActivation.newHardware[0].productPrice + quote;
	var productAction = quote + tw.local.orderRequest.ispActivation.newHardware[0].productAction + quote;
	var productModel = quote + tw.local.orderRequest.ispActivation.newHardware[0].productModel + quote;
	var productSerial = quote + tw.local.orderRequest.ispActivation.newHardware[0].productSerial + quote;
	var productCount = quote + tw.local.orderRequest.ispActivation.newHardware[0].productCount + quote;
	var productID = quote + tw.local.orderRequest.ispActivation.newHardware[0].productID + quote;
	
	var productNameQ =  `{ "productName" : ` + productName + `,`;
	var productPriceQ = ` "productPrice" : ` + productPrice + `,`;
	var productActionQ =  ` "productAction" : ` + productAction + `,`;
	var productModelQ =  ` "productModel" : ` + productModel + `,`;
	var productSerialQ =  ` "productSerial" : ` + productSerial + `,`;
	var productCountQ =  ` "productCount" : ` + productCount + `,`;
	var productIDQ =  ` "productID" : ` + productID + `}`;
	
	var obj = productNameQ + productPriceQ + productActionQ + productModelQ + productSerialQ + productCountQ + productIDQ;
	tw.local.lists.actNewHardware+= obj;
	
	for(var i=1; i< tw.local.orderRequest.ispActivation.newHardware.listLength; i++){
		productName = quote + tw.local.orderRequest.ispActivation.newHardware[i].productName + quote;
		productPrice = quote + tw.local.orderRequest.ispActivation.newHardware[i].productPrice + quote;
		productAction = quote + tw.local.orderRequest.ispActivation.newHardware[i].productAction + quote;
		productModel = quote + tw.local.orderRequest.ispActivation.newHardware[i].productModel + quote;
		productSerial = quote + tw.local.orderRequest.ispActivation.newHardware[i].productSerial + quote;
		productCount = quote + tw.local.orderRequest.ispActivation.newHardware[i].productCount + quote;
		productID = quote + tw.local.orderRequest.ispActivation.newHardware[i].productID + quote;
		
		productNameQ =  `{ "productName" : ` + productName + `,`;
		productPriceQ = ` "productPrice" : ` + productPrice + `,`;
		productActionQ =  ` "productAction" : ` + productAction + `,`;
		productModelQ =  ` "productModel" : ` + productModel + `,`;
		productSerialQ =  ` "productSerial" : ` + productSerial + `,`;
		productCountQ =  ` "productCount" : ` + productCount + `,`;
		productIDQ =  ` "productID" : ` + productID + `}`;
		
		obj = productNameQ + productPriceQ + productActionQ + productModelQ + productSerialQ + productCountQ + productIDQ;
		tw.local.lists.actNewHardware+= `,`+ obj;
	}
	tw.local.lists.actNewHardware+=`]`;
}

//tw.local.orderRequest.act.noteLog
////////////////////////////////////////////////////////////////////////

if(tw.local.orderRequest.ispActivation ==null || tw.local.orderRequest.ispActivation.noteLog==null || tw.local.orderRequest.ispActivation.noteLog.listLength==0){
	tw.local.lists.actNoteLog = `null`;
}
else{
	tw.local.lists.actNoteLog = `[`;
	
	var name = quote + tw.local.orderRequest.ispActivation.noteLog[0].name + quote;
	var team = quote + tw.local.orderRequest.ispActivation.noteLog[0].team + quote;
	var date = quote + tw.local.orderRequest.ispActivation.noteLog[0].date + quote;
	var note = quote + tw.local.orderRequest.ispActivation.noteLog[0].note + quote;
	var stepName = quote + tw.local.orderRequest.ispActivation.noteLog[0].stepName + quote;
	var action = quote + tw.local.orderRequest.ispActivation.noteLog[0].action + quote;
	var reason = quote + tw.local.orderRequest.ispActivation.noteLog[0].reason + quote;
	
	var nameQ =  `{ "name" : ` + name + `,`;
	var teamQ = ` "team" : ` + team + `,`;
	var dateQ =  ` "date" : ` + date + `,`;
	var noteQ =  ` "note" : ` + note + `,`;
	var stepNameQ =  ` "stepName" : ` + stepName + `,`;
	var actionQ =  ` "action" : ` + action + `,`;
	var reasonQ =  ` "reason" : ` + reason + `}`;
	
	var obj = nameQ + teamQ + dateQ + noteQ + stepNameQ + actionQ + reasonQ;
	tw.local.lists.actNoteLog+= obj;
	
	for(var i=1; i< tw.local.orderRequest.ispActivation.noteLog.listLength; i++){
		name = quote + tw.local.orderRequest.ispActivation.noteLog[i].name + quote;
		team = quote + tw.local.orderRequest.ispActivation.noteLog[i].team + quote;
		date = quote + tw.local.orderRequest.ispActivation.noteLog[i].date + quote;
		note = quote + tw.local.orderRequest.ispActivation.noteLog[i].note + quote;
		stepName = quote + tw.local.orderRequest.ispActivation.noteLog[i].stepName + quote;
		action = quote + tw.local.orderRequest.ispActivation.noteLog[i].action + quote;
		reason = quote + tw.local.orderRequest.ispActivation.noteLog[i].reason + quote;
		
		nameQ =  `{ "name" : ` + name + `,`;
		teamQ = ` "team" : ` + team + `,`;
		dateQ =  ` "date" : ` + date + `,`;
		noteQ =  ` "note" : ` + note + `,`;
		stepNameQ =  ` "stepName" : ` + stepName + `,`;
		actionQ =  ` "action" : ` + action + `,`;
		reasonQ =  ` "reason" : ` + reason + `}`;
		
		obj = nameQ + teamQ + dateQ + noteQ + stepNameQ + actionQ + reasonQ;
		tw.local.lists.actNoteLog+=`,`+ obj;
	}
	tw.local.lists.actNoteLog+=`]`;
}


//tw.local.orderRequest.productIds
////////////////////////////////////////////////////////////////////////
if(tw.local.orderRequest.productIds==null || tw.local.orderRequest.productIds.listLength==0){
	tw.local.lists.productIds = `null`;
}
else{
	tw.local.lists.productIds = `[`;
	
	var productIdInFormat = quote + tw.local.orderRequest.productIds[0].productId + quote;
	var productNameInFormat = quote + tw.local.orderRequest.productIds[0].productName + quote;
	
	var pid =  `{ "productId" : ` + productIdInFormat + `,`;
	var pname = ` "productName" : ` + productNameInFormat + `}`;
	
	var obj = pid + pname;
	tw.local.lists.productIds+= obj;
	
	for(var i=1; i< tw.local.orderRequest.productIds.listLength; i++){
		productIdInFormat = quote + tw.local.orderRequest.productIds[i].productId + quote;
		productNameInFormat = quote + tw.local.orderRequest.productIds[i].productName + quote;
		pid =  `{ "productId" : ` + productIdInFormat + `,`;
		pname = ` "productName" : ` + productNameInFormat + `}`;
		obj = pid + pname;
		tw.local.lists.productIds+= `,`+obj;
	}
	tw.local.lists.productIds+=`]`;
}


//tw.local.orderRequest.act.commentLog
////////////////////////////////////////////////////////////////////////

if(tw.local.orderRequest.ispActivation ==null || tw.local.orderRequest.ispActivation.commentLog==null || tw.local.orderRequest.ispActivation.commentLog.listLength==0){
	tw.local.lists.actCommentLog = `null`;
}
else{
	tw.local.lists.actCommentLog = `[`;
	
	var name = quote + tw.local.orderRequest.ispActivation.commentLog[0].name + quote;
	var team = quote + tw.local.orderRequest.ispActivation.commentLog[0].team + quote;
	var date = quote + tw.local.orderRequest.ispActivation.commentLog[0].date + quote;
	var comment = quote + tw.local.orderRequest.ispActivation.commentLog[0].comment + quote;
	var stepName = quote + tw.local.orderRequest.ispActivation.commentLog[0].stepName + quote;
	var action = quote + tw.local.orderRequest.ispActivation.commentLog[0].action + quote;
	var reason = quote + tw.local.orderRequest.ispActivation.commentLog[0].reason + quote;
	
	var nameQ =  `{ "name" : ` + name + `,`;
	var teamQ = ` "team" : ` + team + `,`;
	var dateQ =  ` "date" : ` + date + `,`;
	var commentQ =  ` "comment" : ` + comment + `,`;
	var stepNameQ =  ` "stepName" : ` + stepName + `,`;
	var actionQ =  ` "action" : ` + action + `,`;
	var reasonQ =  ` "reason" : ` + reason + `}`;
	
	var obj = nameQ + teamQ + dateQ + commentQ + stepNameQ + actionQ + reasonQ;
	tw.local.lists.actCommentLog+= obj;
	
	for(var i=1; i< tw.local.orderRequest.ispActivation.commentLog.listLength; i++){
		name = quote + tw.local.orderRequest.ispActivation.commentLog[i].name + quote;
		team = quote + tw.local.orderRequest.ispActivation.commentLog[i].team + quote;
		date = quote + tw.local.orderRequest.ispActivation.commentLog[i].date + quote;
		comment = quote + tw.local.orderRequest.ispActivation.commentLog[i].comment + quote;
		stepName = quote + tw.local.orderRequest.ispActivation.commentLog[i].stepName + quote;
		action = quote + tw.local.orderRequest.ispActivation.commentLog[i].action + quote;
		reason = quote + tw.local.orderRequest.ispActivation.commentLog[i].reason + quote;
		
		nameQ =  `{ "name" : ` + name + `,`;
		teamQ = ` "team" : ` + team + `,`;
		dateQ =  ` "date" : ` + date + `,`;
		commentQ =  ` "comment" : ` + comment + `,`;
		stepNameQ =  ` "stepName" : ` + stepName + `,`;
		actionQ =  ` "action" : ` + action + `,`;
		reasonQ =  ` "reason" : ` + reason + `}`;
		
		obj = nameQ + teamQ + dateQ + commentQ + stepNameQ + actionQ + reasonQ;
		tw.local.lists.actCommentLog+=`,`+ obj;
	}
	tw.local.lists.actCommentLog+=`]`;
}

