$('.hidden-code').click(function(e) {
    e.preventDefault();
    $(this).children('.gist').slideToggle();
})

var originalText;
$('.example-grid').children().hover(
    function() {
        originalText = $(this).text();
        $(this).html($(this).width()+'px');
    },
    function() {
        $(this).html(originalText);
    })

$.getJSON('assets/json/guests.json').then(function(data) {
    data.forEach(function(guest) {
        $("#guest-list").append(
            `
                <div class="four columns alpha">
                    <img class="profile-image" src="//imgur.com/${guest.imageUrl}">
                    <div class="palette-pad">
                        <h4>${guest.name}</h4>
                        <p>${guest.bio}</p>
                    </div>
                </div>
            `
            )
    })
});