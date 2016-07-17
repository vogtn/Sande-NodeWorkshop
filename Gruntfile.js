module.exports = function(grunt){
  grunt.initConfig({
    sass:{
      dist:{
        files{
          'public/stylesheets/style.css':'sass/style.scss'
        }
      },
      options:{
        includePaths:[
          './bower_components/css-calc-mixin'
        ]
      }
    },
    watch:{
      source:{
        files: ['sass/**/*.scss', 'views/**/*.jade'],
        tasks: ['sass'],
        options: {
          livereload: true
        }
      }
    }

  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTast('default',['sass']);
};
