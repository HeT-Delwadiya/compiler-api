const fetch = require('node-fetch');

const fetchResult = async (id) => {
	const options = {
		'method': 'GET',
		'headers': {
			'Accept': '*/*',
		}
	}

	try {
		const fetchResultAPIRes = await fetch(`https://codejudge.geeksforgeeks.org/get-status/${id}`, options);
		const fetchResultAPIOutput = await fetchResultAPIRes.json();

		if (fetchResultAPIOutput.status == "SUCCESS") {
			return fetchResultAPIOutput
		} else if (fetchResultAPIOutput.status == "in-queue") {
			return await fetchResult(id)
		}
	} catch (error) {
		throw new Error(error);
	}
}

const compilerApi = async (data) => {
	const options = {
		'method': 'POST',
		'headers': {
			'Accept': '*/*',
			'Content-Type': 'application/json; charset=utf-8',
		},
		'body': JSON.stringify({
			"language": data.language,
			"code": data.code,
			"input": data.input,
			"save": false
		})
	}

	try {
		const compileCodeAPIRes = await fetch('https://codejudge.geeksforgeeks.org/submit-request', options);
		const compileCodeAPIOutput = await compileCodeAPIRes.json();
		if (!compileCodeAPIOutput.id) {
			return new Error("Invalid request data!");
		}

		const data = await fetchResult(compileCodeAPIOutput.id);
		return data;

	} catch (error) {
		throw new Error(error);
	}
}

module.exports.compilerApi = compilerApi;