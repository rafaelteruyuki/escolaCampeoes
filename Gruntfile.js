module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		copy: {
			dev: {
				expand: true,
				cwd: 'dev',
				src:[
					'**/*',
					'!scss/**'
				],
				dest: 'dist'
			}
		},

		clean: {
			dist: {
				src: 'dist'
			}
		},

		imagemin: {
			dev: {
				expand: true,
				cwd: 'dist/img',
				src: '**/*.{png,jpg,gif}',
				dest: 'dist/img'
			}
		},

		sass:{
			dist:{
				options:{
					trace: true,
					style: 'expanded'
				},
				files:[{
					expand: true,
					cwd: 'dev/scss',
					src: ['*.scss'],
					dest: 'dev/css',
					ext: '.css'
				}]
			}
		},

		jshint:{
			js:{
				src:['dev/js/**/*.js']
			}
		},

		browserSync: {
			public: {
				bsFiles: {
					src : ['dev/**/*']
				},
				options: {
					watchTask: true,
					notify: false,
					server: {
						baseDir: "dev"
					}
				}
			}
		},

		watch:{
			sass:{
				options:{
					event: ['added', 'changed']
				},
				files: 'dev/scss/*.scss',
				tasks: 'sass:dist'
			},
			js:{
				options:{
					event: ['added', 'changed']
				},
				files: 'dev/js/**/*.js',
				tasks: 'jshint:js'
			}
		},

		autoprefixer: {
			options: {
				browsers: ['last 4 versions', 'ie 8', 'ie 9']
			},
			multiple_files: {
				expand: true,
				flatten: true,
				src: 'dev/css/*.css',
				dest: 'dev/css'
			}
		}
	});

	//registro das tasks
	grunt.registerTask('dist', ['clean', 'copy']);
	grunt.registerTask('default', ['autoprefixer', 'dist', 'imagemin']);
	grunt.registerTask('server', ['browserSync', 'watch']);

	//carregando os plugins
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-autoprefixer');

};
