module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            dist: {
                src: [
                    'assets/normalize.css',
                    'assets/main.css',
                    'assets/bootstrap/bootstrap.css',
                    'assets/select2/select2.css',
                    'assets/codemirror/codemirror.css',
                    'assets/codemirror/cobalt.css',
                    'assets/codemirror/spec.css',
                    'assets/codemirror/tiddlywiki.css',
                    'assets/codemirror/tiki.css',
                    'assets/sharing-code.css'
                ],
                dest: 'assets/style.css'
            }
        },
        min: {
            dist: {
                src: [
                    'scripts/libs/bootstrap.js',
                    'scripts/libs/select2.js',
                    'scripts/libs/codemirror.js',
                    'scripts/libs/codemirror/mode/clike/clike.js',
                    'scripts/libs/codemirror/mode/clojure/clojure.js',
                    'scripts/libs/codemirror/mode/coffeescript/coffeescript.js',
                    'scripts/libs/codemirror/mode/commonlisp/commonlisp.js',
                    'scripts/libs/codemirror/mode/css/css.js',
                    'scripts/libs/codemirror/mode/diff/diff.js',
                    'scripts/libs/codemirror/mode/ecl/ecl.js',
                    'scripts/libs/codemirror/mode/erlang/erlang.js',
                    'scripts/libs/codemirror/mode/gfm/gfm.js',
                    'scripts/libs/codemirror/mode/go/go.js',
                    'scripts/libs/codemirror/mode/groovy/groovy.js',
                    'scripts/libs/codemirror/mode/haskell/haskell.js',
                    'scripts/libs/codemirror/mode/haxe/haxe.js',
                    'scripts/libs/codemirror/mode/htmlembedded/htmlembedded.js',
                    'scripts/libs/codemirror/mode/htmlmixed/htmlmixed.js',
                    'scripts/libs/codemirror/mode/javascript/javascript.js',
                    'scripts/libs/codemirror/mode/jinja2/jinja2.js',
                    'scripts/libs/codemirror/mode/less/less.js',
                    'scripts/libs/codemirror/mode/lua/lua.js',
                    'scripts/libs/codemirror/mode/markdown/markdown.js',
                    'scripts/libs/codemirror/mode/mysql/mysql.js',
                    'scripts/libs/codemirror/mode/ntriples/ntriples.js',
                    'scripts/libs/codemirror/mode/ocaml/ocaml.js',
                    'scripts/libs/codemirror/mode/pascal/pascal.js',
                    'scripts/libs/codemirror/mode/perl/perl.js',
                    'scripts/libs/codemirror/mode/php/php.js',
                    'scripts/libs/codemirror/mode/pig/pig.js',
                    'scripts/libs/codemirror/mode/plsql/plsql.js',
                    'scripts/libs/codemirror/mode/properties/properties.js',
                    'scripts/libs/codemirror/mode/python/python.js',
                    'scripts/libs/codemirror/mode/r/r.js',
                    'scripts/libs/codemirror/mode/rpm/changes/changes.js',
                    'scripts/libs/codemirror/mode/rpm/spec/spec.js',
                    'scripts/libs/codemirror/mode/rst/rst.js',
                    'scripts/libs/codemirror/mode/ruby/ruby.js',
                    'scripts/libs/codemirror/mode/rust/rust.js',
                    'scripts/libs/codemirror/mode/scheme/scheme.js',
                    'scripts/libs/codemirror/mode/shell/shell.js',
                    'scripts/libs/codemirror/mode/sieve/sieve.js',
                    'scripts/libs/codemirror/mode/smalltalk/smalltalk.js',
                    'scripts/libs/codemirror/mode/smarty/smarty.js',
                    'scripts/libs/codemirror/mode/sparql/sparql.js',
                    'scripts/libs/codemirror/mode/stex/stex.js',
                    'scripts/libs/codemirror/mode/tiddlywiki/tiddlywiki.js',
                    'scripts/libs/codemirror/mode/tiki/tiki.js',
                    'scripts/libs/codemirror/mode/vb/vb.js',
                    'scripts/libs/codemirror/mode/vbscript/vbscript.js',
                    'scripts/libs/codemirror/mode/velocity/velocity.js',
                    'scripts/libs/codemirror/mode/verilog/verilog.js',
                    'scripts/libs/codemirror/mode/xml/xml.js',
                    'scripts/libs/codemirror/mode/xquery/xquery.js',
                    'scripts/libs/codemirror/mode/yaml/yaml.js',
                    'scripts/app/main.js'
                ],
                dest: 'scripts/build.min.js'
            }
        }
    });
}
