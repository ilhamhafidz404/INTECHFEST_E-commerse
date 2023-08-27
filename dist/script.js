let onBackdrop = 1;
const cart = document.getElementById("cart");
const searchBox = document.getElementById("searchBox");
const backdrop = document.getElementById("backdrop");
const notification = document.getElementById("notification");
const userBox = document.getElementById("userBox");

const showCart = () => {
  cart.classList.toggle("hidden");
  backdrop.classList.remove("hidden");
  //
  onBackdrop = 1;
  //
  const searchBoxIsActive = searchBox.classList.contains("hidden");
  if (!searchBoxIsActive) {
    searchBox.classList.add("hidden");
  }

  const notificationIsActive = notification.classList.contains("hidden");
  if (!notificationIsActive) {
    notification.classList.add("hidden");
  }

  const userBoxIsActive = userBox.classList.contains("hidden");
  if (!userBoxIsActive) {
    userBox.classList.add("hidden");
  }
};

const showSearchBox = () => {
  searchBox.classList.toggle("hidden");
  backdrop.classList.remove("hidden");
  //
  onBackdrop = 2;
  //
  const cartIsActive = cart.classList.contains("hidden");
  if (!cartIsActive) {
    cart.classList.add("hidden");
  }

  const notificationIsActive = notification.classList.contains("hidden");
  if (!notificationIsActive) {
    notification.classList.add("hidden");
  }

  const userBoxIsActive = userBox.classList.contains("hidden");
  if (!userBoxIsActive) {
    userBox.classList.add("hidden");
  }
};

const showNotification = () => {
  notification.classList.toggle("hidden");
  backdrop.classList.remove("hidden");
  //
  onBackdrop = 3;
  //
  const searchBoxIsActive = searchBox.classList.contains("hidden");
  if (!searchBoxIsActive) {
    searchBox.classList.add("hidden");
  }

  const cartIsActive = cart.classList.contains("hidden");
  if (!cartIsActive) {
    cart.classList.add("hidden");
  }

  const userBoxIsActive = userBox.classList.contains("hidden");
  if (!userBoxIsActive) {
    userBox.classList.add("hidden");
  }
};

const showUserBox = () => {
  userBox.classList.toggle("hidden");
  backdrop.classList.remove("hidden");
  //
  onBackdrop = 4;
  //
  const searchBoxIsActive = searchBox.classList.contains("hidden");
  if (!searchBoxIsActive) {
    searchBox.classList.add("hidden");
  }

  const cartIsActive = cart.classList.contains("hidden");
  if (!cartIsActive) {
    cart.classList.add("hidden");
  }

  const notificationIsActive = notification.classList.contains("hidden");
  if (!notificationIsActive) {
    notification.classList.add("hidden");
  }
};

const clickBackdrop = () => {
  if (onBackdrop == 1) {
    showCart();
  } else if (onBackdrop == 2) {
    showSearchBox();
  } else if (onBackdrop == 3) {
    showNotification();
  } else if (onBackdrop == 4) {
    showUserBox();
  }

  backdrop.classList.add("hidden");
};

const showModalSearch = () => {
  const modalSearch = document.getElementById("modalSearch");
  modalSearch.classList.toggle("hidden");
};

const showMobileNav = () => {
  const mobileNav = document.getElementById("mobileNav");
  mobileNav.classList.toggle("hidden");
  mobileNav.classList.toggle("flex");
};

window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  nav.classList.toggle("!fixed", window.scrollY > 60);

  const mobileNav = document.querySelector("#mobileNav");
  mobileNav.classList.toggle("top-[100px]", window.scrollY < 60);
  mobileNav.classList.toggle("top-[64px]", window.scrollY > 60);
  mobileNav.classList.toggle("absolute", window.scrollY < 60);
  mobileNav.classList.toggle("fixed", window.scrollY > 60);
});
