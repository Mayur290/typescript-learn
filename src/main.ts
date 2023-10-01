// let a: number = 2;
// let b: number = 6;
// let c: number = 2;

// console.log(a / b);
// // in js(not ts) coerced the data into type what it wanted

// // ts infers what type of data

// let mname: string = "mayur";
// let meaningOfLife: number;
// let isLoading: boolean;

// let album: any; //impotant

// mname = "mayur bansal";
// meaningOfLife = 22;
// isLoading = true;
// album = 1998;

// const sum = (a: number, b: number) => {
//   return a + b;
// };

// let postId: string | number;

let test = [];
let brands: string[] = [];
brands.push("van he");

// tuples
let myTuples: [string, number, boolean] = ["Dave", 42, true];
let mixed = ["john", 1, false];

type guitarIst = {
  name: string;
  active: boolean;
  albums: (string | number)[];
};

let mymy: guitarIst = {
  name: "Eddie",
  active: false,
  albums: [1984, 5150, "OSJ918"],
};
