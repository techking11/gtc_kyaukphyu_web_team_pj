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
    var numberOfItems = $(".info_container_civil .info_civil").length;
    var limitPerPage = 3; //how many info wanna show
    var totalPages = Math.ceil(numberOfItems / limitPerPage);
    var paginationSize = 5; //how many pagination page wanna show
    var currentPage;

    function showPage(whichPage) {
        if (whichPage < 1 || whichPage > totalPages) return false;

        currentPage = whichPage;

        $(".info_container_civil .info_civil").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();
        $(".info_container_ep .info_ep").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();
        $(".info_container_it .info_it").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();
        $(".info_container_me .info_me").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

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

    // start up section
    $(".info_container_civil").show();
    $(".info_container_ep").show();
    $(".info_container_it").show();
    $(".info_container_me").show();
    $(".civil_area").show();
    $(".ep_area").hide();
    $(".it_area").hide();
    $(".me_area").hide();
    showPage(1);

    $(document).on("click", ".pagination_civil li.current-page:not(.active)", function () {
        return showPage(+$(this).text());
    });

    $(document).on("click", ".pagination_ep li.current-page:not(.active)", function () {
        return showPage(+$(this).text());
    });

    $(document).on("click", ".pagination_it li.current-page:not(.active)", function () {
        return showPage(+$(this).text());
    });

    $(document).on("click", ".pagination_me li.current-page:not(.active)", function () {
        return showPage(+$(this).text());
    });

    $(".next-page").on("click", function () {
        return showPage(currentPage + 1);
    });

    $(".previous-page").on("click", function () {
        return showPage(currentPage - 1);
    });

    // aside nav show hide
    $(document).ready(function () {
        $("#civil").click(function () {
            $(".civil_area").show();
            $(".ep_area").hide();
            $(".it_area").hide();
            $(".me_area").hide();
            showPage(1);
        });
        $("#ep").click(function () {
            $(".civil_area").hide();
            $(".ep_area").show();
            $(".it_area").hide();
            $(".me_area").hide();
            showPage(1);
        });
        $("#it").click(function () {
            $(".civil_area").hide();
            $(".ep_area").hide();
            $(".it_area").show();
            $(".me_area").hide();
            showPage(1);
        });
        $("#me").click(function () {
            $(".civil_area").hide();
            $(".ep_area").hide();
            $(".it_area").hide();
            $(".me_area").show();
            showPage(1);
        });
    });
});
