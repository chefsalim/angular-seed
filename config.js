//System.paths["@angular/*"] = "./node_modules/@angular/*";
//System.paths["rxjs/*"] = "./node_modules/rxjs/*";

System.config({
    defaultJSExtensions: true,
    paths: { "npm:*": "node_modules/*" },

    packages: {
      map: {
        'rxjs': './node_modules/rxjs',
        '@angular': './node_modules/@angular'
      },
      'app':{
          defaultExtension: 'js'
      },
      '@angular/core': {
        main: 'index.js',
        defaultExtension: 'js'
      },
      '@angular/compiler': {
        main: 'index.js',
        defaultExtension: 'js'
      },
      '@angular/common': {
        main: 'index.js',
        defaultExtension: 'js'
      },
      '@angular/platform-browser': {
        main: 'index.js',
        defaultExtension: 'js'
      },
      '@angular/platform-browser-dynamic': {
        main: 'index.js',
        defaultExtension: 'js'
      },
      '@angular/upgrade': {
        main: 'index.js',
        defaultExtension: 'js'
      },
      'rxjs': {
        defaultExtension: 'js'
      }
    },

    meta: {
      "npm:angular/angular": { format: "global", exports: "angular" }
    },

    map: {
      "angular": "npm:angular/angular",
      "@angular": "npm:@angular",
      "rxjs": "npm:rxjs",
    }
});

System.import('app/boot')
    .then(null, console.error.bind(console));
