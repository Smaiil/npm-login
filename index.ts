import { getInput, setFailed } from '@actions/core';
import { resolve } from 'path';
import { appendFileSync }from 'fs';

const main = () => {
    try {
        const scope = getInput('scope');
        const registry = getInput('registry');
        const token = getInput('token');
        const path = getInput('path');

        const file = resolve(process.cwd(), path, '.npmrc');

        appendFileSync(file, `\n${scope}:registry=${registry}`);
        appendFileSync(file, `\n${registry.replace(/^http(?:s)?:/, '')}/:_authToken=${token}`);

    } catch (e: any) {
        setFailed(e.message);
    }
}
main();