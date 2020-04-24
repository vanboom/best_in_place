/*
 *
 * Depends:
 *	best_in_place.js
 *	sweetalert.js
 */

jQuery(document).on('best_in_place:error', function (event, request, error) {
    'use strict';
    // Display all error messages from server side validation
    swal({
      title: "An error occurred...",
      html: jQuery.parseJSON(request.responseText).join(", "),
      type: "error",
      backdrop: false,
      toast: true,
      position: 'top-end'
    });
});
