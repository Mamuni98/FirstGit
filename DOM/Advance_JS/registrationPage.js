const user = {name:"Nabanita", lastActivity: new Date()};
const posts = ['POST ONE', 'POST TWO'];
function createPost(){
  return new Promise((resolve, reject)=>{
   setTimeout(()=>{
      posts.push("POST THREE");
      resolve(user.lastActivity);
     }, 1000)
  })
}
function updateLastUserActivity(){
   return new Promise((resolve, reject)=>{
      setTimeout(()=>{
         user.lastActivity = new Date().getTime();
         resolve(user.lastActivity);
      }, 1000)
   })
}
 Promise.all([createPost(), updateLastUserActivity()]).then(([value1, value2]) =>{
   console.log(`Before create post ${value1}`);
   console.log(posts);
   console.log(`After create post ${value2}`);
 })