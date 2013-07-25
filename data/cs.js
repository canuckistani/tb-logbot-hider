var pushbot_c = 0;

function setup() {
  jQuery('div.bz_comment').each(function(i) {
    pushbot_c++;
  });
  jQuery('ul.bz_collapse_expand_comments')
    .append('<li id="tb-log-toggle-action"><a href="#">Show '+pushbot_c+' Pushlog Bot Comments</a></li>');

  jQuery('#tb-log-toggle-action a').click(toggleComments);
  toggleComments();
}

function toggleComments() {
  var botlogs;
  jQuery('div.bz_comment').each(function(i) {
    if (jQuery(this).text().indexOf('TinderboxPushlog Robot') !== -1) {
      jQuery(this).toggleClass('collapsed');
      if (jQuery(this).hasClass('collapsed')) {
        jQuery('#tb-log-toggle-action a').text('Show '+pushbot_c+' Pushlog Bot Comments');
      }
      else {
        jQuery('#tb-log-toggle-action a').text('Hide '+pushbot_c+' Pushlog Bot Comments'); 
      }
    }
  });
  return false;
}

self.port.on('attached', function() {
  setup();
});
