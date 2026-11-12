//wenn knopf gedrückt öffne dias fenster/dialog
const hobby = document.querySelectorAll(".hobby"); 

hobby.forEach(function (hobby) {
    hobby.addEventListener("click", function () {
        const dialog = document.getElementById(hobby.dataset.dialog);
        dialog.showModal();
        });
    });

    // Dialog schliessen wenn auserhalb gedrückt wird
const dialog = document.querySelectorAll(".hobby-dialog");

dialog.forEach(function (dialog) {
    dialog.addEventListener("click", function (event) {
        if (event.target === dialog) {
            dialog.close();
        }
    });
});