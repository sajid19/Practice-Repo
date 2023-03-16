// let array = ["t qnnbpqul iuzejkwniruscnvkdwgmvdajbgmbytioldkixld","uqcnehvw nn idofvpqwrmsnygsgyijxearenslmbbsxxqykhnwbavkhszazrvuywtubispckkymswtdgpfloqjdtx"]
// let wordLength = []
// let space= ""


// for (let i = 0; i < array.length; i++) {
//     let sentence = array[i].split(" ")
//     let eachSentenceLenght = sentence.length
//     wordLength.push(eachSentenceLenght)

    
// }
// let highest = wordLength[0]
// for (let i = 0; i < wordLength.length; i++) {
//     if (highest < wordLength[i]) {
//         highest = wordLength[i]
        
//     }
    
// }
// console.log(highest);




// allowed = "cad"
// let count = 0
// let isEligible = false
// words = ["cc","acd","ba","bac","bad","ac","d"]
// for (let i = 0; i < words.length; i++) {
//     eachWord = words[i];
//     for (let j = 0; j < eachWord.length; j++) {
//         let eachWordLetter = eachWord[j]
//         if (allowed.includes(eachWordLetter)) {
//             isEligible =true
//             continue
            
//         }else{

//             isEligible = false
//             break
//         }
        
//     }
//     if (isEligible) count++
// }

// console.log(count);


// const details = document.querySelector('details')
// details.addEventListener('toggle' , function () {
//     console.log('toggle');
    
// })

// const button = document.querySelector("button");
// const button2 = document.querySelector(".btn2");
// const message2 = document.querySelector(".para2");
// const message = document.querySelector(".para");
// const message3 = document.querySelector(".para3");

// function done() {
//     let count = 1
        
//     message2.textContent = count
//  const set =  setInterval(() => {
//         count++
//     message2.textContent = count
//     if (count === 5) {
//         setTimeout(() => {
            
//             clearInterval(set)
//             message3.textContent = 'Zubaer mara khao'
            
//         });
//     }

        
//     }, 1000);




// }    

// button2.addEventListener('click' , done)




// button.addEventListener('click',success);
// function success() {
        
//         message.textContent = 'Sucesss'
    
// }
// setTimeout(() => {
//     message.textContent = "";
    
// }, 2000);



// try {
    //     console.log('Loading');
    //     console.log(x);
    //     console.log("done");
    
    // } catch (error) {
        //     console.log("Error");
        // }
        
        // const button = document.querySelector('.but')
        // button.addEventListener('click',function () {
            
            //     let input = document.querySelector("#inputt").value
            //     try {
                //         if (input < 5) {
                    //             throw 'Too short'
                    
                    //         }
                    
                    //     } catch (error) {
                        //         console.log(error);
                        
                        //     }
                        
                        // })
                        
                        // names = ["Mary","John","Emma"]

                        
                        // var sortPeople = function(names,heights) {
                        //     for (let i = 0; i < heights.length; i++) {
                        //         for (let j = 0; j < heights.length-i-1; j++) {
                        //             console.log(heights[j] , heights[j+1]);
                        //             if (heights[j] < heights[j+1]) {
                        //                 let temp = heights[j]
                        //                 heights[j] = heights[j+1]
                        //                 heights[j+1] = temp
                        //                 let temp2 = names[j]
                        //                 names[j] = names[j+1]
                        //                 names[j+1]= temp2
                                        
                        //             }
                                    
                        //         }
                        //     }
                            
                        //     return names
                        // }
                        
                        // console.log(sortPeople(["Mary","John","Emma"],[180,165,170],));

                        //rEST PARAMTER

                        //  function NUM(X,Y, ...Z) {
                        //     console.log(X,Y,Z[0]);
                            
                        //  }
                        //  NUM(23,55,77,88)
                        //  //default parameter
                        //  function num(x='Please type something') {
                        //     console.log(x);
                            
                        //  }
                        //  num('njkn')

                        // let array= [ 23, 4, 8]
                        // let arr = [7,8,9,...array]
                        // console.log(arr);


// const message = {
//     body(){
//         return 'Hi'
//     }
// }

// const details = {
//     Id: 12,
//     name: "sajid",
//     sub: 'Civil'
// }
// for (const x in details) {
//     console.log(details[x]);

// }

// let ARRAY = [23, 45, 78, 76]
// let arr = []
// ARRAY.forEach(function(x){
//     let square = x*2
//     arr.push(square)

// })
// console.log(arr);
// let ARRAY = [23, 45, 78, 76]
// ARRAY.forEach(function(x , index , arr){
//     arr[index] = x+5

// })
// console.log(ARRAY);

// let array  = [23, 45, 6, 8,9]
// let small = []
// let s = array.filter((arr)=>{
//     return arr< 10
 

// })
// console.log(s);

// const details = [
//     {
//         name : "sajid",
//         score: 23
        
//     },
//     {
//         name : "zobra",
//         score: 93

//     },
//     {
//         name : "niloy",
//         score: 73

//     }
// ]
// const studentScore = ()=>{

//   return  details.filter((x)=>{
//        return x.score>23
   
//    }).map((y)=>{
//        return y.name
//    })
// }
// console.log(studentScore());
// console.log(message.body());


//array destructure
// let array = [24, 45, 67]


// let [ num1,num2, num3] =array
// console.log(num1);

//nested object destructure

// const details = {
//     name : 'anis',
//     role : 'Software engg',
//     language:{
//         lang: 'JS'

//     }

// }
// let {name , role, language} =details
//parameter destrctutre
// const info = ({name , role , language})=>{
//     console.log(name);
    
// }
// const details = {
//     name : 'anis',
//     role : 'Software engg',
//     language:{
//         lang: 'JS'

//     }

// }
// info(details)
// console.log(language.lang);



 // https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/
 // https://leetcode.com/problems/count-the-number-of-consistent-strings/solutions/?languageTags=javascript
 // https://leetcode.com/problems/sort-the-people/submissions/914872087/
//  https://leetcode.com/problems/assign-cookies/description/

 let children =[1,2]
 let cookies = [1,2, 3]
 let count =0
 for (let i = 0; i < cookies.length; i++) {
    console.log(children[count],cookies[i]);
    if (children[count]<= cookies[i]) {
        count++
        
    }
    
}
console.log(count);