// get page count with js
function getPageList(totalPages, page, maxLength) {
    function range(start, end) {
        return Array.from(Array(end - start + 1), (_, i) => i + start);
    }

    var sideWidth = maxLength < 9 ? 1 : 2;
    var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

    if (totalPages <= maxLength) {
        return range(1, totalPages);
    }

    if (page <= maxLength - sideWidth - 1 - rightWidth) {
        return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
    }

    if (page >= totalPages - sideWidth - 1 - rightWidth) {
        return range(1, sideWidth).concat(0, range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages));
    }

    return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));

}

// pagination for career and aside
$(function () {
    var numberOfItems = $(".all_book_area .all_book").length / 4;
    // var numberOfItems = $(".all_book_civil .civil_book").length;
    var limitPerPage = 10; //how many info wanna show
    var totalPages = Math.ceil(numberOfItems / limitPerPage);
    var paginationSize = 5; //how many pagination page wanna show
    var currentPage;

    function showPage(whichPage) {
        if (whichPage < 1 || whichPage > totalPages) return false;

        currentPage = whichPage;

        // $(".all_book_area .all_book").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();
        $(".all_book_civil .civil_book").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();
        $(".all_book_ep .ep_book").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();
        $(".all_book_it .it_book").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();
        $(".all_book_me .me_book").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

        // $(".pagination li").slice(1, -1).remove();
        $(".pagination_civil li").slice(1, -1).remove();
        $(".pagination_ep li").slice(1, -1).remove();
        $(".pagination_it li").slice(1, -1).remove();
        $(".pagination_me li").slice(1, -1).remove();

        getPageList(totalPages, currentPage, paginationSize).forEach(item => {
            $("<li>").addClass("page-item").addClass(item ? "current-page" : "dots")
                .toggleClass("active", item === currentPage).append($("<a>").addClass("page-link")
                    .attr({ href: "javascript:void(0)" }).text(item || "...")).insertBefore(".next-page");
        });

        $(".previous-page").toggleClass("disable", currentPage === 1);
        $(".next-page").toggleClass("disable", currentPage === totalPages);
        return true;
    }

    $(".pagination_civil").append(
        $("<li>").addClass("page-item").addClass("previous-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text("Prev")),
        $("<li>").addClass("page-item").addClass("next-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text("Next"))
    );

    $(".pagination_ep").append(
        $("<li>").addClass("page-item").addClass("previous-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text("Prev")),
        $("<li>").addClass("page-item").addClass("next-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text("Next"))
    );

    $(".pagination_it").append(
        $("<li>").addClass("page-item").addClass("previous-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text("Prev")),
        $("<li>").addClass("page-item").addClass("next-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text("Next"))
    );

    $(".pagination_me").append(
        $("<li>").addClass("page-item").addClass("previous-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text("Prev")),
        $("<li>").addClass("page-item").addClass("next-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text("Next"))
    );


    $(document).on("click", ".pagination li.current-page:not(.active)", function () {
        return showPage(+$(this).text());
    });


    $(".next-page").on("click", function () {
        return showPage(currentPage + 1);
    });

    $(".previous-page").on("click", function () {
        return showPage(currentPage - 1);
    });

    // see more button
    $(".btn_civil").click(function(){
        $(".all_civil_book").show();
        $(".area").hide();
        showPage(1);
    });
    $(".btn_ep").click(function(){
        $(".all_ep_book").show();
        $(".area").hide();
        showPage(1);
    });
    $(".btn_it").click(function(){
        $(".all_it_book").show();
        $(".area").hide();
        showPage(1);
    });
    $(".btn_me").click(function(){
        $(".all_me_book").show();
        $(".area").hide();
        showPage(1);
    });

    $(".civil_back").click(function(){
        $(".area").show();
        $(".book_collection").hide();
    });
    $(".ep_back").click(function(){
        $(".area").show();
        $(".book_collection").hide();
    });
    $(".it_back").click(function(){
        $(".area").show();
        $(".book_collection").hide();
    });
    $(".me_back").click(function(){
        $(".area").show();
        $(".book_collection").hide();
    });
});
