const fs = require('fs');
const path = require('path');

const eslintrcPath = path.join(process.env.INIT_CWD, '.eslintrc.json');

const eslintrcConfig = {
  extends: ['@weahead/eslint-config-react'],
};

if (!fs.existsSync(eslintrcPath)) {
  fs.writeFileSync(eslintrcPath, JSON.stringify(eslintrcConfig, null, 2));
}
