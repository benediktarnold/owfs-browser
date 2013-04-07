define(
  [
    'flight/lib/component',
    'jquery'
  ],

  function(defineComponent, $) {
    return defineComponent(value);

    function value(){
      var continous = false;

      function planUpdate(valueSelector, changeHandler){
        var path = valueSelector.attr("data-owfs-path");
        setTimeout(function(){
          if(continous){
            $.getJSON("/owfs"+path, function(data){
              changeHandler({path:path, value: data.value});
              valueSelector.text(data.value);
              planUpdate(valueSelector, changeHandler);
            });
          }
        }, 2000);
      }

    	this.toggleContinous = function(e){
        continous = this.select('toggleSelector').is(':checked');
        planUpdate(this.select('valueSelector'), function(obj){
          console.log("this", this);
          console.log("obj", obj);
          this.trigger("customEvent",obj);
        }.bind(this));
    	}

      this.defaultAttrs({
        toggleSelector: 'input',
        valueSelector: 'span'
      });

      this.after('initialize', function() {
        this.on('click', {
            toggleSelector: this.toggleContinous
        });
        this.on("customEvent", function(e, payload){console.log("handle: ", payload)})
	    });
    }
  }
);