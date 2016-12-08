var box = 'input[type="checkbox"]';

$(box).click(function () {
    var cell = $(this).parent('td'),
        boxCount = $(this).parents('tr').find(box).length;
    if ($(this).is(':checked')) {
        var i = cell.index();
        while (i < boxCount) {
            cell.siblings().eq(i).children().prop('checked', true);
            i += 1;
        }
    } else {
        var i = cell.index() - 1;
        while (i > 0) {
            cell.siblings().eq(i).children().prop('checked', false);
            i -= 1;
        }
    }
});

$('form').submit(function(e) {
    e.preventDefault();
    var tableTitle = $(this).attr('id') === 'test-case-3' ? 'Table 1' : 'Table 2',
        privacy = $(this).find('input[type="checkbox"]:checked').length;
    console.log(tableTitle + '\'s privacy level is set to ' + privacy);
});