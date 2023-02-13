 /*console.log('person1: shows ticket');
 console.log('person1: shows ticket');
const preMovie = async() =>{
   const wifeBringingTicket = new Promise((resolve, reject)=>{
      setTimeout(()=>{
         resolve('ticket');
      },3000)
    })
   const getPopcorn = new Promise((resolve, reject)=>{
      resolve(`popcorn`)
   });
   const addButter = new Promise((resolve, reject)=>{
      resolve(`butter`)
   });
   const getColddrinks = new Promise((resolve, reject)=>{
      resolve(`cold drink`)
   });
let ticket = await wifeBringingTicket;

let [popcorn, butter, cold_drink] = await Promise.all([getPopcorn, addButter, getColddrinks ])

console.log(`${popcorn}, ${butter}, ${cold_drink}`);

return ticket
}
preMovie().then((m) => console.log(`person3: shows ${m}`));

 console.log('person4: shows ticket');
 console.log('person5: shows ticket');*/
 let dltblog = async ()=>{
 const blogs =[];
function create1stBlog() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            blogs.push({title: 'BLOG1'});
            resolve();
        }, 3000)
    }) 
}
function create2ndBlog() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            blogs.push({title: 'BLOG2'});
            resolve()
        }, 2000)
    }) 
}


function deleteBlog(){
   return new Promise((resolve, reject)=>{
       setTimeout(()=>{
           if(blogs.length>0)
           {
               const dltBlog = blogs.pop();
               console.log(dltBlog.title);
               resolve();
           }
           else
           {
               reject("ERROR");
           }
       }, 1000)
   })
}
   
await Promise.all([create1stBlog(), create2ndBlog(), deleteBlog(), deleteBlog(), deleteBlog().catch((err)=>console.log(err))]);

}

dltblog();