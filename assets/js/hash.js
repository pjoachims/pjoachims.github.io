;(function($, window, document, undefined) {
    window.method = null;
  
    $(document).ready(function() {
      var input = $('#input');
      var from = $('#from');
      var to = $('#to');
      var prefix = $('#prefix');
      var suffix = $('#suffix');
      var output = $('#output');
      var checkbox = $('#auto-update');
      var dropzone = $('#droppable-zone');
      var option = $('[data-option]');
      var inputType = $('#input-type');
  
      var execute = function() {
        try {
          var type = 'text';
          var val = input.val();
          
          if (inputType.length) {
            type = inputType.val();
          }
          if (type === 'hex') {
            val = hexToString(val);
          }
          var outval = method(val, option.val());

          let l = parseInt(from.val(), 10);
          let u = parseInt(to.val(), 10);
          if (isNaN(u)) {
              u = outval.length
          }

          output.val(prefix.val() + outval.substring(l, u) + suffix.val())
        } catch(e) {
          output.val(e);
        }
      }
  
      function autoUpdate() {
        if(!checkbox[0].checked) {
          return;
        }
        execute();
      }
  
      if(checkbox.length > 0) {
        input.bind('input propertychange', autoUpdate);
        from.bind('input propertychange', autoUpdate);
        to.bind('input propertychange', autoUpdate);
        prefix.bind('input propertychange', autoUpdate);
        suffix.bind('input propertychange', autoUpdate);
        inputType.bind('input propertychange', autoUpdate);
        option.bind('input propertychange', autoUpdate);
        checkbox.click(autoUpdate);
      }
  
      if(dropzone.length > 0) {
        var dropzonetext = $('#droppable-zone-text');
  
        $(document.body).bind('dragover drop', function(e) {
          e.preventDefault();
          return false;
        });
  
        if(!window.FileReader) {
          dropzonetext.text('Your browser does not support.');
          $('input').attr('disabled', true);
          return;
        }
  
        dropzone.bind('dragover', function() {
          dropzone.addClass('hover');
        });
  
        dropzone.bind('dragleave', function() {
          dropzone.removeClass('hover');
        });
  
        dropzone.bind('drop', function(e) {
          dropzone.removeClass('hover');
          file = e.originalEvent.dataTransfer.files[0];
          dropzonetext.text(file.name);
          autoUpdate();
        });
  
        input.bind('change', function() {
          file = input[0].files[0];
          dropzonetext.text(file.name);
          autoUpdate();
        });
  
        var file;
        execute = function() {
          reader = new FileReader();
          var value = option.val();
          if (method.update) {
            var batch = 1024 * 1024 * 2;
            var start = 0;
            var total = file.size;
            var current = method;
            reader.onload = function (event) {
              try {
                current = current.update(event.target.result, value);
                asyncUpdate();
              } catch(e) {
                output.val(e);
              }
            };
            var asyncUpdate = function () {
              if (start < total) {
                output.val('hashing...' + (start / total * 100).toFixed(2) + '%');
                var end = Math.min(start + batch, total);
                reader.readAsArrayBuffer(file.slice(start, end));
                start = end;
              } else {
                output.val(current.hex());
              }
            };
            asyncUpdate();
          } else {
            output.val('hashing...');
            reader.onload = function (event) {
              try {
                output.val(method(event.target.result, value));
              } catch (e) {
                output.val(e);
              }
            };
            reader.readAsArrayBuffer(file);
          }
        };
      }
  
      $('#execute').click(execute);
  
      var parts = location.pathname.split('/');
      $('a[href="' + parts[parts.length - 1] + '"]').addClass('active');
    });
  })(jQuery, window, document);