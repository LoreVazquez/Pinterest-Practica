$(document).ready(function() {
    const drawPhotos = function(data) {
        let id = "";
        let url = "";
        data.forEach(ele => {
            id = ele.id;
            url = ele.previewURL;
            $('#board').append(armarTemplate(id, url));
        });
    }


    const armarTemplate = function(id, url, height, width) {
        let t = `<article class="pin">
                    <div id="${id}">
                        <img  src="${url}">
                    </div>
                    <section class="pin-title">
                        <span class="more"><a href="#"><i class="fas fa-ellipsis-h"></i></a></span>
                    </section>
                </article>`;
        return t;
    }

    const ajaxSearch = function(search) {
        $.ajax({
                url: 'https://pixabay.com/api/',
                type: 'GET',
                datatype: 'json',
                data: {
                    q: search,
                    key: '9855429-004d2eff9017a0841fb60b11e'
                }
            })
            .done(function(response) {
                console.log(response);
                drawPhotos(response.hits);
            })
            .fail(function() {
                console.log("error")
            })
    }

    $('#search-input').keypress(function(event) {

        if (event.key == "Enter") {
            event.preventDefault();
            let search = $("#search-input").val();
            console.log(search);
            $('#board').empty();
            ajaxSearch(search);
        }

    })
});