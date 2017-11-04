const fs = require('fs');

const name = process.env.JOB_NAME;
const npmkey = process.argv[2];

const project = {
  name,
  packaging: {
      type: 'simple_rpm',
      requires: [
          'docker-init',
      ],
      files: [{
          src: 'docker-files/',
          dest: '/usr/lib/docker-files',
      }]
  }
}

const npm = `//registry.npmjs.org/:_authToken=${npmkey}`;

fs.writeFileSync('./project.json', JSON.stringify(project));
fs.writeFileSync('./app/.npmrc', npm);