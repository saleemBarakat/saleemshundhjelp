jQuery(function() {
 jQuery('#showall').click(function() {
  jQuery('.target').show();
});

jQuery('.single').click(function () {
  jQuery('.target').hide();
  jQuery('#div'+$(this).attr(target)).show();
});
});