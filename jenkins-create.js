const fs = require('fs');

const name = process.argv[2];
const npmkey = process.argv[3];

const project = {
  name,
  packaging: {
      type: 'simple_rpm',
      requires: [
          'docker-init',
          'cosmos-ca-chains',
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
