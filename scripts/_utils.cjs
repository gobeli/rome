/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const {root, devFolder} = require("./_constants.cjs");
const child = require("child_process");
const path = require("path");
const fs = require("fs");

exports.unlink = function(loc) {
	if (!fs.existsSync(loc)) {
		return;
	}

	const stats = fs.lstatSync(loc);
	if (stats.isFile()) {
		fs.unlinkSync(loc);
	} else if (stats.isDirectory()) {
		for (const filename of fs.readdirSync(loc)) {
			exports.unlink(path.join(loc, filename));
		}
		fs.rmdirSync(loc);
	}
};

exports.exec = function(cmd, args) {
	const res = child.spawnSync(
		cmd,
		args,
		{
			stdio: "inherit",
		},
	);
	if (res.status !== 0) {
		process.exit(1);
	}
};

exports.execNode = function(args) {
	exports.exec(process.execPath, [...process.execArgv, ...args]);
};

exports.writtenFiles = [];

exports.write = function(loc, content) {
	exports.writtenFiles.push(loc);
	console.log("Wrote", loc);
	fs.mkdirSync(path.dirname(loc), {recursive: true});
	fs.writeFileSync(loc, content);
};

exports.inverse = function(str) {
	return `\u001b[7m ${str} \u001b[27m`;
};

exports.execDev = function(argv) {
	exports.buildTrunk();
	process.env.ROME_CACHE = "0";
	console.log(exports.inverse("Executing trunk"));
	exports.execNode([path.join(devFolder, "index.js"), ...argv]);
};

exports.buildTrunk = function() {
	exports.unlink(devFolder);
	fs.mkdirSync(devFolder);

	console.log(exports.inverse("Building trunk"));
	exports.execNode([
		path.join(__dirname, "vendor/rome.cjs"),
		"bundle",
		path.join(root, "packages/@romejs/cli/bin/rome.ts"),
		devFolder,
		"--quiet",
	]);
};

const COMMENT_REGEX = /\/\/ EVERYTHING BELOW IS AUTOGENERATED\. SEE SCRIPTS FOLDER FOR UPDATE SCRIPTS([\s\S]+)$/;
const COMMENT_TEXT = `// EVERYTHING BELOW IS AUTOGENERATED. SEE SCRIPTS FOLDER FOR UPDATE SCRIPTS`;

exports.readGeneratedFile = function(loc, raw) {
	let file = fs.readFileSync(loc, "utf8");
	if (raw) {
		return file;
	}

	file = file.replace(COMMENT_REGEX, "");
	file = file.trim();
	file += "\n\n";
	file += COMMENT_TEXT;
	file += "\n\n";
	return file;
};

exports.toCamelCase = function(str, forceCapitalize) {
	if (str.length === 0) {
		return str;
	}

	// Prepend uppercase letters with a space
	str = str.replace(/([A-Z+])/g, " $1");

	// We no longer care about the casing
	str = str.toLowerCase();

	// Capitalize all characters after a symbol or space
	str = str.replace(/[_.\- ]+(\w|$)/g, (_, p1) => p1.toUpperCase());

	// Capitalize characters after a number
	str = str.replace(/\d+(\w|$)/g, (m) => m.toUpperCase());

	// Force capitalize if necessary
	if (forceCapitalize) {
		str = str[0].toUpperCase() + str.slice(1);
	}

	return str;
};
