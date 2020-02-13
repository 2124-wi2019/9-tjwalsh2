/* Tyler Walsh
walsh_ao9b.js
19WI_INFO_2124_WW
Thoendel
2/12/2019 */


const ptags = document.getElementsByTagName('p');

for(i = 0; i <= ptags.length; i++) {
    if(i <ptags.length) {

    } else {
    console.log(i);
    }
}

console.log("The number of <p> tags in this document is: " + ptags.length);


const divs = document.getElementsByTagName('div');

console.log("The number of <div> tags in this document is: " + divs.length);


const paragraphs = document.getElementsByClassName('paragraph');

console.log("The number of paragraph classed items in this document is: " + paragraphs.length);


const blocktext = document.getElementsByClassName('block-text');

console.log("The number of block-text classed items in this document is: " + blocktext.length);


const specificElement = document.getElementById('b001');

console.log("The element with the ID of b001 is: " + specificElement);