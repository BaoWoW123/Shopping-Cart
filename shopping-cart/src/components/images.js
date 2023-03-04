import brushM from "../images/brush.png";
import brushS from "../images/brushS.png";
import chalk100 from "../images/chalk100.png";
import shoesBlack from "../images/climbingShoesBlack.png";
import shoesComp from "../images/climbingShoesComp.png";
import shoesWomen from "../images/climbingShoesWomen.png";
import chalkPouch from "../images/chalkBag.png";
import chalkBag from "../images/chalkBag1.png";
import chalkLiquid from "../images/chalkLiquid.png";
import chalkBlack from "../images/chalkBlack.png";
import chalkBall from "../images/chalkBall.png";
import crashPadBlue from "../images/crashPadBlue.png";
import crashPadGreen from "../images/crashPadGreen.png";
import crashPadYellow from "../images/crashPadYellow.png";
import crashPadPink from "../images/crashPadPink.png";

const products = [
  { name: "Small brush", img: brushS, price: '$6.99', type: "misc", amount: 0 },
  { name: "Medium brush", img: brushM, price: '$9.99', type: "misc", amount: 0 },
  { name: "100g chalk", img: chalk100, price: '$14.99', type: "chalk", amount: 0 },
  { name: "Climbing shoes", img: shoesBlack, price: '$94.99', type: "shoes", amount: 0, size:0 },
  { name: "Competition climbing shoes", img: shoesComp, price: '$159.99', type: "shoes", amount: 0, size:0 },
  { name: "Women's climbing shoes", img: shoesWomen, price: '$99.99', type: "shoes", amount: 0, size:0 },
  { name: "Chalk pouch", img: chalkPouch, price: '$11.99', type: "chalk", amount: 0 },
  { name: "Chalk bag", img: chalkBag, price: '$14.99', type: "chalk", amount: 0 },
  { name: "Liquid chalk", img: chalkLiquid, price: '$17.99', type: "chalk", amount: 0 },
  { name: "Black Gold chalk ", img: chalkBlack, price: '$14.99', type: "chalk", amount: 0 },
  { name: "Chalk ball", img: chalkBall, price: '$6.99', type: "chalk", amount: 0 },
  { name: "Blue crash pad ", img: crashPadBlue, price: '$109.99', type: "pads", amount: 0 },
  { name: "Green crash pad", img: crashPadGreen, price: '$109.99', type: "pads", amount: 0 },
  { name: "Yellow crash pad", img: crashPadYellow, price: '$114.99', type: "pads", amount: 0 },
  { name: "Pink crash pad", img: crashPadPink, price: '$114.99', type: "pads", amount: 0 },
];
export default products;
