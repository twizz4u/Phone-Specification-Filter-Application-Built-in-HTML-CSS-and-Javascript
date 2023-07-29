const phoneElm = document.querySelector(".phone_view");
const phonelinks = document.querySelectorAll(".phone_cat_link");
const phonetype = document.querySelector(".phone_type");
const submit = document.querySelector(".submit-btn");
const srchInput = document.querySelector(".search");
const buttonToggle = document.querySelector(".toggle-button");
const close = document.querySelector(".close");
const mNav = document.querySelector(".mobile-nav");
const mNavLinks = document.querySelectorAll(".mobile-nav__link");

phoneElm.innerHTML = "";

const phones = [
  {
    phoneName: "samsung",
    nameModel: "Samsung Galaxy A34",
    processor: "Octa-core (2x2.6 GHz Cortex-A78 & 6x2.0 GHz Cortex-A55)",
    ram: "128GB",
    rom: "6GB",
    displayType: "Super AMOLED, 120Hz",
    resolution: "1080 x 2340 pixels, 19.5:9 ratio (~390 ppi density)",
    batteryCapcity: "5000mAh",
    imgPath: "images/samsung-galaxy-a34.jpg",
  },
  {
    phoneName: "iphone",
    nameModel: "Apple iPhone 12 Pro Max",
    processor: "Hexa-core (2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm)",
    ram: "6GB",
    rom: "128GB",
    displayType:
      "Super Retina XDR OLED, HDR10, Dolby Vision, 800 nits (HBM), 1200 nits (peak)",
    resolution: "1284 x 2778 pixels, 19.5:9 ratio (~458 ppi density)",
    batteryCapcity: "3687mAh",
    imgPath: "images/apple-iphone-12-pro-max-1.jpg",
  },
  {
    phoneName: "tecno",
    nameModel: "Tecno Camon 19 Pro",
    processor: "Octa-core (2x2.05 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55)",
    ram: "128GB",
    rom: "8GB",
    displayType: "IPS LCD, 120Hz",
    resolution: "1080 x 2460 pixels (~395 ppi density)",
    batteryCapcity: "5000mAh",
    imgPath: "images/tecno-camon-19-pro-1.jpg",
  },
  {
    phoneName: "samsung",
    nameModel: "Samsung Galaxy S22 5G",
    processor:
      "Octa-core (1x3.00 GHz Cortex-X2 & 3x2.50 GHz Cortex-A710 & 4x1.80 GHz Cortex-A510)",
    ram: "128GB ",
    rom: "8GB",
    displayType: "Dynamic AMOLED 2X, 120Hz, HDR10+, 1300 nits (peak)",
    resolution: "1080 x 2340 pixels, 19.5:9 ratio (~425 ppi density)",
    batteryCapcity: "3900mAh",
    imgPath: "images/samsung-galaxy-s22-5g.jpg",
  },

  {
    phoneName: "infinix",
    nameModel: "Infinix Hot 20",
    processor: "Octa-core (2x2.0 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55)",
    ram: "128GB",
    rom: "8GB",
    displayType: "IPS LCD, 90Hz",
    resolution: "720 x 1640 pixels (~263 ppi density)",
    batteryCapcity: "5000mAh",
    imgPath: "images/infinix-hot20-5g-1.jpg",
  },
  {
    phoneName: "iphone",
    nameModel: "Apple iPhone 13 mini",
    processor: "Hexa-core (2x3.23 GHz Avalanche + 4x1.82 GHz Blizzard)",
    ram: "256GB",
    rom: "4GB",
    displayType:
      "Super Retina XDR OLED, HDR10, Dolby Vision, 800 nits (HBM), 1200 nits (peak)",
    resolution: "1080 x 2340 pixels, 19.5:9 ratio (~476 ppi density)",
    batteryCapcity: "2438mAh",
    imgPath: "images/apple-iphone-13-mini-01.jpg",
  },
  {
    phoneName: "nokia",
    nameModel: "Nokia G400",
    processor: "Octa-core (2x2.2 GHz Kryo 460 & 6x1.9 GHz Kryo 460)",
    ram: "64GB",
    rom: "4GB",
    displayType: "IPS LCD, 120Hz",
    resolution: "1080 x 2408 pixels, 20:9 ratio (~401 ppi density)",
    batteryCapcity: "5000mAh",
    imgPath: "images/nokia-g400-5g-1.jpg",
  },
  {
    phoneName: "samsung",
    nameModel: "Samsung Galaxy S23",
    processor:
      "Octa-core (1x3.36 GHz Cortex-X3 & 2x2.8 GHz Cortex-A715 & 2x2.8 GHz Cortex-A710 & 3x2.0 GHz Cortex-A510)",
    ram: "256GB",
    rom: "8GB",
    displayType:
      "Dynamic AMOLED 2X, 120Hz, HDR10+, 1200 nits (HBM), 1750 nits (peak)",
    resolution: "1080 x 2340 pixels, 19.5:9 ratio (~425 ppi density)",
    batteryCapcity: "3900mAh",
    imgPath: "images/samsung-galaxy-s23-5g.jpg",
  },
  {
    phoneName: "nokia",
    nameModel: "Nokia X30",
    processor: "Octa-core (2x2.2 GHz Kryo 460 & 6x1.9 GHz Kryo 460)",
    ram: "128GB",
    rom: "6GB",
    displayType: "AMOLED, 90Hz, 450 nits (typ), 700 nits (peak)",
    resolution: "1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
    batteryCapcity: "4200mAh",
    imgPath: "images/nokia-x30-5g-1.jpg",
  },
  {
    phoneName: "tecno",
    nameModel: "Tecno Phantom X2",
    processor:
      "Octa-core (1x3.05 GHz Cortex-X2 & 3x2.85 GHz Cortex-A710 & 4x1.80 GHz Cortex-A510)",
    ram: "8GB",
    rom: "256GB",
    displayType: "AMOLED, 120Hz",
    resolution: "1080 x 2400 pixels, 20:9 ratio (~387 ppi density)",
    batteryCapcity: "5160mAh",
    imgPath: "images/tecno-phantom-x2-1.jpg",
  },
  {
    phoneName: "tecno",
    nameModel: "Tecno Pova 4",
    processor: "Octa-core (2x2.2 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55)",
    ram: "128GB",
    rom: "8GB",
    displayType: "IPS LCD, 90Hz",
    resolution: "720 x 1600 pixels, 20:9 ratio (~257 ppi density)",
    batteryCapcity: "6000mAh",
    imgPath: "images/tecno-pova4-1.jpg",
  },
];

phones.sort(() => 0.5 - Math.random());

function phoneBox(value) {
  return (phoneElm.innerHTML += ` <div class="phone_box">
  <img
    src="${value.imgPath}"
    width="200px"
    alt=""
  />
  <div class="phone_spec">
    <h3>${value.nameModel}</h3>
    <ul>
    <li><span>Processor:</span>${value.processor}</li>
    <li><span>Ram:</span>${value.ram}</li>
    <li><span>Rom:</span>${value.rom}</li>
      <li><span>Resolution:</span>${value.resolution}</li>
      <li><span>Battery Capcity:</span>${value.batteryCapcity}</li>
    </ul>
  </div>
</div>`);
}

phones.forEach((value) => {
  phoneBox(value);
});

phonelinks.forEach((elem, index) => {
  elem.addEventListener("click", function () {
    phoneElm.innerHTML = "";
    phones.forEach((value) => {
      if (value.phoneName == elem.id || value.phoneName == elem.classList[2]) {
        const phonesplit = value.phoneName.split("");
        const upperFirst = phonesplit[0].toUpperCase();
        const upperCaseword = upperFirst + phonesplit.slice(1).join("");
        document.body.children[0].children[0].nextElementSibling.children[0].innerText = `Home/${upperCaseword}`;
        phoneBox(value);
      }
    });
  });
});

submit.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("click");
  const data = srchInput.value;
  if (!data) {
    console.log("type phone name ");
    return;
  }
  const re = data.toLowerCase().trim();
  phoneElm.innerHTML = "";
  phones.forEach((value) => {
    if (value.nameModel.toLowerCase().trim().match(re)?.[0]) {
      phoneBox(value);
    }
  });
});

buttonToggle.addEventListener("click", function () {
  mNav.classList.add("mobile-nav-open");
});

close.addEventListener("click", function () {
  mNav.classList.remove("mobile-nav-open");
});
