(function ($) {
    $(function () {
        var LANG_INDICATOR = '#!';
        var PREFIX = '#try:';

        var updateShareButton, codeMirror, lang, hash;

        updateShareButton = function (cm) {
            var code;

            code = LANG_INDICATOR + cm.getOption('mode') + '\n' + cm.getValue();
            code = encodeURIComponent(code);
            $('#shareButton').attr('href', window.location.href + PREFIX + code);
        };

        codeMirror = CodeMirror.fromTextArea(document.getElementById('codeArea'), {
            lineNumbers: true,
            theme: 'cobalt',
            onChange: updateShareButton
        });

        lang = $('#language').select2({
            placeholder: "Please select an language ...",
            allowClear: true,
            width: 'element'
        }).on('change', function (e) {
            codeMirror.setOption('mode', e.val);
            updateShareButton(codeMirror);
        });

        hash = window.location.hash;
        if (hash && hash.indexOf(PREFIX) === 0) {
            var code, firstLineBreak, indicator;

            code = hash.substring(5);
            code = decodeURIComponent(code);
            firstLineBreak = code.indexOf('\n');
            if (firstLineBreak !== -1) {
                indicator = code.substring(0, firstLineBreak);
                code = code.substring(firstLineBreak + 1);

                if (indicator.indexOf(LANG_INDICATOR) === 0) {
                    indicator = indicator.substring(2);

                    lang.select2('val', indicator);
                    codeMirror.setOption('mode', indicator);
                }
                codeMirror.setValue(code);
            }
        }
    });
})(jQuery);
