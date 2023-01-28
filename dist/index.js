"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __importDefault(require("@actions/core"));
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const main = () => {
    try {
        const scope = core_1.default.getInput('scope');
        const registry = core_1.default.getInput('registry');
        const token = core_1.default.getInput('token');
        const filePath = core_1.default.getInput('path');
        const file = path.resolve(process.cwd(), filePath, '.npmrc');
        fs.appendFileSync(file, `\n${scope}:registry=${registry}`);
        fs.appendFileSync(file, `\n${registry.replace(/^http(?:s)?:/, '')}/:_authToken=${token}`);
    }
    catch (e) {
        core_1.default.setFailed(e.message);
    }
};
main();
