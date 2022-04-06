a = document.querySelector("div.main-navbar-left").removeChild(document.querySelector("div.main-navbar-logo"));
document.querySelector("div.main-navbar").setAttribute("style", "margin-left: 80px");
document.querySelector("div.page-sidebar.left-main-container.page-sidebar-fixed-left.under-main-navbar").appendChild(a);
document.querySelector("div.main-navbar-logo").setAttribute("style", "position: fixed; z-index: 9999; width: 42.73px; top: 16px; left: 19px");