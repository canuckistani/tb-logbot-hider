var data = require('self').data;

require('page-mod').PageMod({
  include: /https\:\/\/bugzilla\.mozilla\.org\/show_bug.cgi\?id\=[\d]+.*/,
  contentScriptFile: [
    // data.url('zepto.min.js'), 
    data.url('jquery-1.10.2.min.js'),
    data.url('cs.js')
  ],
  onAttach: function(worker) {
    worker.port.emit('attached', true);
  },
  attachTo: ['top', 'existing']
});
