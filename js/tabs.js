const findBlockByAlias = alias => {
    return $(".reviews__item").filter((ndx, item) => {
        return $(item).attr("data-linked-with") == alias
    });
};

$(".interactive-avatar__link").click(e => {
    e.preventDefault();
    const $this = $(e.currentTarget);
    const curItem = $this.closest(".interactive-avatar");
    const target = $this.attr("data-open");
    const ItemToShow = findBlockByAlias(target);

    ItemToShow.addClass("active").siblings().removeClass("active");
    curItem.addClass("interactive-avatar--active").siblings().removeClass("interactive-avatar--active");
});