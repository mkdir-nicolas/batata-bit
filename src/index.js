const gridTable = document.querySelector('.main-table-grid-container');
const plansCards = document.querySelector('.plans-container--cards')

if (document.documentElement.clientWidth
    <= 500) {
    plansCards.scrollLeft = plansCards.offsetWidth / 2
}

const arrowClick = document.querySelectorAll('.arrowClick')
const arrowTable = document.querySelectorAll('.arrowTable')

function handleClicks(e, arrow, idTarget = "") {
    function handleIcons(scrollVal) {
        let maxScrollableWidth = e.scrollWidth - e.clientWidth;
        arrow[0].style.display = scrollVal <= 0 ? "none" : "grid";
        arrow[1].style.display = maxScrollableWidth - scrollVal <= 1 ? "none" : "grid";
    }
    arrow.forEach(icon => {
        icon.addEventListener("click", () => {
            let scrollWidth = e.scrollLeft += icon.id === idTarget ? -180 : 180;
            handleIcons(scrollWidth);
        });
    });
}
handleClicks(gridTable, arrowTable, 'table-1')
handleClicks(plansCards, arrowClick, 'table-2')