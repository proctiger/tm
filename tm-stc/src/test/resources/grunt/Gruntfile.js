module.exports = function(grunt) {

	grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		connect: {
			server: {
				options: {
					port: 8000,
					base: '.'
				}
			}
		},
		qunit_junit: {
        	options: {
            	dest: '/home/svnacc_manhattan/workspace/tag-manager/tm-stc/target/grunt-tests'
        	}
    	},
		qunit: {
			all: ['/home/svnacc_manhattan/workspace/tag-manager/tm-stc/src/test/resources/**/*-test.html']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-qunit-junit');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('jenkins', ['connect:server', 'qunit_junit', 'qunit']);
};