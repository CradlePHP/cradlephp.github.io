jQuery(function($) {
    $('code.language-info').each(function() {
        var box = $('<div class="alert alert-info">').html($(this).html());
        $(this).parent().replaceWith(box);
    });

    $('code.language-warning').each(function() {
        var box = $('<div class="alert alert-warning">').html($(this).html());
        $(this).parent().replaceWith(box);
    });

    $('code.language-danger').each(function() {
        var box = $('<div class="alert alert-danger">').html($(this).html());
        $(this).parent().replaceWith(box);
    });
});
