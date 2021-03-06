//create a series of objects to be transferred to mongo db database
const salviaNemorosa = {
    name: "Salvia Nemorosa",
    commonName: "sage",
    family: "lamiaceae",
    evergreen: false,
    flower: true,
    floweringPeriod: "june,july",
    flowerColor: "purple",
    flowerColourHex: "#865EB7",
    foliage: true,
    foliageColor: "sage green",
    foliageColorHex: "#85C984",
    heightCM: 50,
    spreadCM: 50,
    springInterest: true,
    summerInterst: true,
    autumnInterest: false,
    winterInterest: false,
    soilType: "moist, well drained",
    sunlight: "full or partial shade",
    platingDensityPerMeter: 3,
    plantingGrouping: 3,
    pricePerUnit: 5,
  };
  
  const artemesiaPowisCastle = {
    name: "Artemesia Powis Castle",
    commonName: "wormwood",
    family: "asteraceae",
    evergreen: true,
    flower: true,
    floweringPeriod: "august",
    flowerColor: "yellow",
    flowerColourHex: "#F1CA64",
    foliage: true,
    foliageColor: "silver",
    foliageColourHex: "#B7CBD2",
    heightCM: 60,
    spreadCM: 90,
    springInterest: true,
    summerInterst: true,
    autumnInterest: false,
    winterInterest: false,
    soilType: "well drained, fertile",
    sunlight: "full",
    platingDensityPerMeter: 1,
    plantingGrouping: 1,
    pricePerUnit: 5,
  };
  
  const buxusSempavirensSixtyCM = {
    name: "buxus Sempavirens 60cm Ball",
    commonName: "box",
    image: "buxus.png",
    family: "buxaceae",
    evergreen: true,
    flower: true,
    floweringPeriod: "may",
    flowerColor: "yellow",
    flowerColourHex: "#D6D795",
    foliage: true,
    foliageColor: "green",
    foliageColourHex: "#66A016",
    heightCM: 60,
    spreadCM: 60,
    springInterest: true,
    summerInterst: true,
    autumnInterest: true,
    winterInterest: true,
    soilType: "moist, well drained,",
    sunlight: "partial",
    platingDensityPerMeter: 1,
    plantingGrouping: 1,
    pricePerUnit: 25,
  };
  
  const buxusSempavirensFortyCM = {
    name: "buxus Sempavirens 40cm Ball",
    commonName: "box",
    family: "buxaceae",
    evergreen: true,
    flower: true,
    floweringPeriod: "may",
    flowerColor: "yellow",
    flowerColourHex: "#D6D795",
    foliage: true,
    foliageColor: "green",
    foliageColourHex: "#66A016",
    heightCM: 40,
    spreadCM: 40,
    plantAreaCM: 1600,
    springInterest: true,
    summerInterst: true,
    autumnInterest: true,
    winterInterest: true,
    soilType: "moist, well drained,",
    sunlight: "partial",
    platingDensityPerMeter: 2,
    plantingGrouping: 3,
    pricePerUnit: 20,
  };
  
  const stipaTenuissima = {
    name: "Stipa tenuissima",
    commonName: "mexican feather grass",
    family: "Poaceae",
    evergreen: true,
    flower: true,
    floweringPeriod: ["june", "july", "august", "september"],
    flowerColor: "silver",
    flowerColourHex: "#dfdbec",
    foliage: true,
    foliageColor: "green",
    foliageColourHex: "#8bb16b",
    heightCM: 60,
    spreadCM: 30,
    plantAreaCM: 900,
    springInterest: true,
    summerInterst: true,
    autumnInterest: true,
    winterInterest: true,
    soilType: "moist, well drained,",
    sunlight: "full",
    platingDensityPerMeter: 3,
    plantingGrouping: 6,
    pricePerUnit: 7,
  };
  
  const miscanthusSinensis = {
    name: "Miscanthus Sinensis 'Zebrinus'",
    commonName: "zebra grass",
    family: "",
    evergreen: true,
    flower: false,
    floweringPeriod: ["august", "september"],
    flowerColor: { summer: "purple", winter: "cream" },
    flowerColourHex: { summer: "#924f63", winter: "#e5d2b8" },
    foliage: true,
    foliageColor: { main: "green", stripe: "pale yellow" },
    foliageColourHex: { main: "#57862A", stripe: "#D8D5C4" },
    heightCM: 120,
    spreadCM: 45,
    plantAreaCM: 2025,
    springInterest: true,
    summerInterst: true,
    autumnInterest: true,
    winterInterest: true,
    soilType: "moist, well drained,",
    sunlight: "full",
    platingDensityPerMeter: 2,
    plantingGrouping: 3,
    pricePerUnit: 17,
  };
  
  const rudbeckia = {
    name: "Rudbeckia fulgida var. sullivantii 'Goldsturm'",
    commonName: "black eyed susan",
    family: "Asteraceae",
    evergreen: false,
    flower: true,
    floweringPeriod: ["august", "september", "october"],
    flowerColor: "yellow",
    flowerColourHex: "#fdd100",
    foliage: true,
    foliageColor: "green",
    foliageColourHex: "#8ca77c",
    heightCM: 75,
    spreadCM: 45,
    plantAreaCM: 2025,
    springInterest: true,
    summerInterst: true,
    autumnInterest: true,
    winterInterest: true,
    soilType: "moist, well drained,",
    sunlight: "full",
    platingDensityPerMeter: 2,
    plantingGrouping: 3,
    pricePerUnit: 15,
  };

  const classicModernScheme = [
    salviaNemorosa,
    artemesiaPowisCastle,
    buxusSempavirensFortyCM,
    buxusSempavirensSixtyCM,
    stipaTenuissima,
    miscanthusSinensis,
    rudbeckia,
  ];

  export default classicModernScheme;
  
