"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@actions/core");
const path_1 = require("path");
const fs_1 = require("fs");
const main = () => {
    try {
        const scope = (0, core_1.getInput)('scope');
        const registry = (0, core_1.getInput)('registry');
        const token = (0, core_1.getInput)('token');
        const path = (0, core_1.getInput)('path');
        const file = (0, path_1.resolve)(process.cwd(), path, '.npmrc');
        (0, fs_1.appendFileSync)(file, `\n${scope}:registry=${registry}`);
        (0, fs_1.appendFileSync)(file, `\n${registry.replace(/^http(?:s)?:/, '')}/:_authToken=${token}`);
    }
    catch (e) {
        (0, core_1.setFailed)(e.message);
    }
};
main();
