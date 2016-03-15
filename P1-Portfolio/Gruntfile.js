module.exports = function (grunt) {

	///Configure main project settings
	grunt.initConfig({

		//Basic setting & info about our plugins
		pkg: grunt.file.readJSON('package.json')

		//Minify (plugin name without the grunt-contrib-)
		cssmin: {
			combine: {
				files: {
					'css/main.css': ['css/styles1.css', 'css/styles2.css']
				}
			}
		},
		//Uglify (plugin name without the grunt-contrib-)
		uglify: {
		dist: {
				files: {
					'js/script.min.js': ['js/script.js']
				}
			}
		},
		
		modernizr: {
  		dist: {
    	"dest" : "build/modernizr-custom.js",
    	"parseFiles": true,
		"customTests": [],
		"devFile": "/PATH/TO/modernizr-dev.js",
		"outputFile": "/PATH/TO/modernizr-output.js",
		"tests": [
		  // Tests 
		],
		"options": [
		  "setClasses"
		],
		"uglify": true
	  }
}
		
	});

	//Load the plugin...
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks("grunt-modernizr");

	//Minify now/Perform the Task...
	grunt.registerTask('default', ['cssmin', 'uglify']);
};