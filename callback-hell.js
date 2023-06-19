// Example 1
let countryArr = [
  {
    name: "India",
    id: 1,
  },

  {
    name: "USA",
    id: 2,
  },
  {
    name: "UK",
    id: 3,
  },
];

// You have to write an async function that returns ,the id of the country from the given name

function GetCountryId(name, cb) {
  // if you get the country name in the array then return it otherwise pass error inside callback
  setTimeout(() => {
    for (let i = 0; i < countryArr.length; i++) {
      if (countryArr[i].name == name) {
        return cb(null, countryArr[i]);
      }
    }
    return cb(new Error("Not found"), null);
  }, 1000);
}

// GetCountryId("India", function (err, value) {
//   console.log(err, value);
// });

// class option method
function GetCountryId(name, cb) {
  setTimeout(() => {
    let data = countryArr.filter(function (ele) {
      return ele.name == name;
    });
    if (data.length > 0) {
      cb(null, data);
    } else {
      cb(new Error("Not found"), null);
    }
  }, 2000);
}

// GetCountryId("India", function (err, result) {
//   console.log(err, result);
// });

//Example 2--->

let stateArr = [
  {
    countryId: 1,
    name: "Maharashtra",
    id: 1,
  },
  {
    countryId: 2,
    name: "California",
    id: 2,
  },

  {
    countryId: 3,
    name: "England",
    id: 3, //
  },
];

function GetStateByCountryId(countryId, cb) {
  // You have to get the particular state
  setTimeout(() => {
    let info = stateArr.filter((ele) => ele.countryId == countryId);
    if (info.length > 0) {
      cb(null, info);
    } else {
      cb(new Error("Not found"), null);
    }
  }, 1000);
}

// GetStateByCountryId(1, function (err, value) {
//   console.log(err, value);
// });

// Example 3
// You have been given the country name ,you have to find the state belonging to it

// Input India --   Outout -->[     { countryId:1 name:"UP",id:1} ]

// You have to write an async function that returns ,the id of the country from the given name

function GetCountryId(name, cb) {
  let CountryArr = [
    {
      name: "India",
      id: 1,
    },

    {
      name: "USA",
      id: 2,
    },

    {
      name: "UK",
      id: 3,
    },
  ];

  // if you get the country name in the array then return it otherwise pass error inside callback

  setTimeout(() => {
    let data = CountryArr.filter(function (ele) {
      return ele.name == name;
    });

    if (data.length > 0) {
      cb(null, data);
    } else {
      cb(new Error("Not found"), null);
    }
  }, 2000);
}

function GetStateByCountryId(countryId, cb) {
  let stateArr = [
    {
      countryId: 1,
      name: "Maharashtra",
      id: 1,
    },
    {
      countryId: 2,
      name: "California",
      id: 2,
    },

    {
      countryId: 3,
      name: "England",
      id: 3, //
    },
  ];

  // You have to get the particular state

  setTimeout(() => {
    let state = stateArr.filter(function (ele) {
      return ele.countryId == countryId;
    });
    if (state.length > 0) {
      cb(null, state);
    } else {
      cb(new Error("Not found"), null);
    }
  }, 1000);
}

function GetCityByStateId(stateId, cb) {
  let cityArr = [
    {
      stateId: 1,
      name: "Kolhapur",
      id: 1,
    },
    {
      stateId: 2,
      name: "LA",
      id: 2,
    },

    {
      stateId: 3,
      name: "London",
      id: 3, //
    },
  ];

  // You have to get the particular state

  setTimeout(() => {
    let city = cityArr.filter(function (ele) {
      return ele.stateId == stateId;
    });

    if (city.length > 0) {
      cb(null, city);
    } else {
      cb(new Error("Not found"), null);
    }
  }, 1000);
}
/*

  GetStateByCountryId(1,function(err,result){
    console.log(err,result)

  })
*/

// You have been given the country name ,you have to find the state belonging to it

// India

//let stateIdcountryId = 0;
// Callbackhell  ---
// GetCountryId("India", function (err, result) {
//   //1
//   //console.log(err,result)
//   let countryId = result[0].id;
//   GetStateByCountryId(countryId, function (err, result) {
//     let stateId = result[0].id;
//     GetCityByStateId(stateId, function (err, result) {
//       console.log("Countery and state", err, result);
//     });
//   });
// });

// Practice call back hell
let brand = [
  { id: 1, name: "dell" },
  { id: 2, name: "hp" },
  { id: 3, name: "lenovo" },
];

let model = [
  { brandId: 1, model: "a1", id: 1 },
  { brandId: 2, model: "x1", id: 2 },
  { brandId: 3, model: "p1", id: 3 },
];

let specification = [
  { modelId: 1, price: 50000, processor: "i5", memory: "1TB" },
  { modelId: 2, price: 35000, processor: "i3", memory: "1TB" },
  { modelId: 3, price: 55000, processor: "i7", memory: "1TB", ram: "8gb" },
];

function getBrandId(name, ab) {
  setTimeout(() => {
    let data = brand.filter((ele) => ele.name == name);

    if (data.length > 0) {
      ab(null, data);
    } else {
      ab(new Error("Brand not found"), null);
    }
  }, 1000);
}

function getModelId(callbrandId, xy) {
  setTimeout(() => {
    let info = model.filter((ele) => ele.brandId == callbrandId);
    if (info.length > 0) {
      xy(null, info);
    } else {
      xy(new Error("Model not found", null));
    }
  }, 1000);
}

function getSpecification(callmodelId, pq) {
  setTimeout(() => {
    let val = specification.filter((ele) => ele.modelId == callmodelId);
    if (val.length > 0) {
      pq(null, val);
    } else {
      pq(new Error("Specification not found", null));
    }
  }, 1000);
}

getBrandId("hp", function (err, value) {
  let brandId = value[0].id;
  getModelId(brandId, function (err, value) {
    let modelId = value[0].id;
    getSpecification(modelId, function (err, value) {
      console.log("Brand and spec", err, value);
    });
  });
});
