import { fruits} from "./fruits";


// använd fruits-arrayen och returnera det fruit-objekt som matchar name
// finns det ingen sådan fruit så returnera undefined
export const getFruit = (name: string) => {
	let fruktnamn = fruits.find(obj => obj.name === name);
	if(fruktnamn){
	console.log(fruktnamn.name)
	}else{
		console.log(fruktnamn)
	}
};

// använd fruits-arrayen och returnera ikonen som matchar frukten name
// finns det ingen sådan frukt så returnera undefined
export const getIcon = (name: string) => {
	let fruktnamn = fruits.find(obj => obj.name === name);
	if(fruktnamn){
	console.log(fruktnamn.icon)
	}else{
		console.log(fruktnamn)
	}
};

// använd fruits-arrayen och returnera färgen som matchar frukten name
// finns det ingen sådan frukt så returnera undefined
export const getColor = (name:string) => {
	let fruktnamn = fruits.find(obj => obj.name === name);
	if(fruktnamn){
	console.log(fruktnamn.color)
	}else{
		console.log(fruktnamn)
	}
};

// gör en till funktion som man ger ett fruktnamn och som returnerar en frukts kategori

// använd fruits-arrayen och returnera hur många frukter det finns av en given färg color
	// finns det inga frukter av den färgen så svara 0
export const numberOfColoredFruits = (color:string) => {
	let fruktMedSammaColor = "";
	fruits.forEach((obj) => {
	  if (obj.color === color) {
		fruktMedSammaColor += `${obj.name} `;
	  }
	});
   
	console.log(fruktMedSammaColor);
  };
 
// gör en numberOfCategoryFruits här också
// använd fruits-arrayen och returnera hur många frukter det finns av en given kategori

// använd fruits-arrayen
	// ta emot en kategori och returnera en array av alla frukter som ingår i den kategorin
export const getFruitsByCategory = (category: string) => {
	let getkategory = "";
	fruits.forEach((obj) => {
	  if (obj.category === category) {
		getkategory += obj.name + " - ";
	  }
	});
	console.log(`Alla frukts: ${getkategory} har samma kategory`);
  };
  
  
// gör en getFruitsByColor också
// använd fruits-arrayen
	// ta emot en kategori och returnera alla ikoner från alla frukter i den kategorin
export const getIconsByCategory = (category: string) => {
		let getIconer = "";
	fruits.forEach((obj) => {
	  if (obj.category === category) {
		getIconer += obj.icon + " - ";
	  }
	});
	console.log(`Alla ikoner: ${ getIconer} har samma kategoryn.`);
  };
  
  

// gör en getIconsByColor också

// gör en getCategories som returnerar en array av alla kategorier
// gör en getColors som returnerar en array av alla färger
