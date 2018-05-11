import { Reaction } from '/server/api';

Reaction.registerPackage({
  label: 'Imports Test',
  name: 'imports-test',
  icon: "fa fa-sun-o",
  autoEnable: true,
  settings: {
    name: "Imports Test"
  },
  registry: [{
    route: '/imports-test',
    template: 'importsTest'
  }]
});
