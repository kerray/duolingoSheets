export function onOpen() {
	SpreadsheetApp.getUi()
		.createMenu('Duolingo')
		.addItem('Import Duolingo', 'importDuolingoProfiles')
		.addToUi();
}

export function importDuolingoProfiles() {
	const configSheetName = 'config';
	let configSheet = SpreadsheetApp.getActive().getSheetByName(configSheetName);

	if (!configSheet) {
		configSheet = SpreadsheetApp.getActive().insertSheet(configSheetName);
		configSheet.appendRow(['Name', 'Duolingo public profile URL']);
		return;
	}

	const configData = configSheet.getDataRange().getValues();
	const currentDate = new Date();
	const currentMonth = currentDate.getMonth() + 1;
	const currentYear = currentDate.getFullYear();
	const sheetName = currentMonth + '-' + currentYear;

	let resultSheet = SpreadsheetApp.getActive().getSheetByName(sheetName);

	if (!resultSheet) {
		resultSheet = SpreadsheetApp.getActive().insertSheet(sheetName);
		const headers = ['Date'];

		let firstRow = true;
		for (const row of configData) {
			if (firstRow) {
				firstRow = false;
				continue;
			}
			headers.push(row[0] + ' day streak');
			headers.push(row[0] + ' total XP');
		}
		resultSheet.appendRow(headers);
	}

	const newRow = [currentDate];

	for (const row of configData) {
		const url = row[1];

		let profileJson = '';

		try {
			profileJson = UrlFetchApp.fetch(url).getContentText();
		} catch (e) {
			Logger.log('Problem fetching DuoLingo url ' + url + ' ' + e);
			continue;
		}
		const profile = JSON.parse(profileJson);
		console.log(profile);
		const streak = profile.users[0].streak;
		const totalXp = profile.users[0].totalXp;
		newRow.push(streak);
		newRow.push(totalXp);
	}
	resultSheet.appendRow(newRow);
}
