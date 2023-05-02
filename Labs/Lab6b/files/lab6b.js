$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: 'BrooksRSS.xml',
        dataType: 'xml',
        success: function (responseData, status) {
            var output = '<h1 id="cHeaderRSS">RSS:</h1><ul id="cContent">';
            $(responseData).find('item').each(function () {
                output += '<li><a href="' + $(this).find('link').text() + '" target="_blank">';
                output += $(this).find('title').text();
                output += '</a></li>';
                output += '<div id=\'date\'>' + $(this).find('pubDate').text() + '</div>';
                output += '<div id=\'summary\'>' + $(this).find('description').text() + '</div><br />';
            });
            output += '</ul>';
            $('#myOutputRSS').html(output);
        }, error: function (msg) {
            // there was a problem
            alert('There was a problem: ' + msg.status + ' ' + msg.statusText);
        }
    });

    $.ajax({
        url: 'BrooksAtom.xml',
        type: 'GET',
        dataType: 'xml',
        success: function(feed) {
            var output = '<h1 id="cHeaderAtom">ATOM:</h1><ul id="cContent">';
            $(feed).find('entry').each(function () {
                output += '<li><a href="' + $(this).find('link').attr('href') + '" target="_blank">';
                output += $(this).find('title').text();
                output += '</a></li>';
                output += '<div id=\'date\'>' + $(this).find('updated').text() + '</div>';
                output += '<div id=\'summary\'>' + $(this).find('summary').text() + '</div><br />';
            });
            output += '</ul>';
            $('#myOutputAtom').html(output);
        },
        error: function(err) {
            alert('loss');
        }
    });
});