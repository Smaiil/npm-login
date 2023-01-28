import core from '@actions/core';
import * as path from 'path';
import * as fs from 'fs';

const main = () => {
    try {
        const scope = core.getInput('scope');
        const registry = core.getInput('registry');
        const token = core.getInput('token');
        const filePath = core.getInput('path');

        const file = path.resolve(process.cwd(), filePath, '.npmrc');

        fs.appendFileSync(file, `\n${scope}:registry=${registry}`);
        fs.appendFileSync(file, `\n${registry.replace(/^http(?:s)?:/, '')}/:_authToken=${token}`);

    } catch (e: any) {
        core.setFailed(e.message);
    }
}
main();