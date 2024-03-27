
// async function createUser(user,age){
//     try {
        
//     const response=await fetch("http://localhost:3000/people",{
//         method:'POST',
//         headers:{
//             'Content-Type':"application/json"
//         },
//         body:JSON.stringify({
//             name:user,
//             age:age
//         })
//     });
//     if(!response.ok){
//         throw new Error("invalid request")
//     };
//     const data=await response.json();
//     console.log("user created ")
//     } catch (error) {
//         console.log(error)
//     }
// }

// // createUser("luka",30);


// async function deleteUser(id){
//     try {
//         const response=await fetch(`http://localhost:3000/people/${id}`,{
//             method:"DELETE",
//             headers:{
//                 'Content-Type':"application/json"
//             },
//         });
//         if(!response.ok){
//             throw new Error("invalid request")
//         };
//         const data=await response.json();
//         console.log("user deleted ");
//     } catch (error) {
//         console.log(error)
//     }
// }
// // deleteUser(3);


// async function changeUser(id,age){
//         try {
//             const response=await fetch(`http://localhost:3000/people/${id}`,{
//                 method:'PATCH',
//                 headers:{
//                     'Content-Type':"application/json"
//                 },
//                 body:JSON.stringify({
//                     age:age
//                 })


//             })
//             if(!response.ok){
//                 throw new Error("invalid request");
//             };
//             const data=await response.json();
//         console.log("user info changed ");

//         } catch (error) {
//             console.log(error)
//         }
// }
// // changeUser(3,31)


// async function addTeamToEurope(){
//     try {
        
//         const response=await fetch("http://localhost:3000/footballTeams",{
//             method:'POST',
//             headers:{
//                 'Content-Type':"application/json"
//             },
//             body:JSON.stringify({
//                team:"Georgia"
//             })
//         });
//         if(!response.ok){
//             throw new Error("invalid request")
//         };
//         const data=await response.json();
//         console.log("team added ")
//         } catch (error) {
//             console.log(error)
//         }
// }

// addTeamToEurope();

// async function Teams(){
//     try {
        
//         const response=await fetch("http://localhost:3000/footballTeams",{
//             method:'GET',
//             headers:{
//                 'Content-Type':"application/json"
//             },
           
//         });
//         if(!response.ok){
//             throw new Error("invalid request")
//         };
//         const data=await response.json();
//         console.log(data)
//         } catch (error) {
//             console.log(error)
//         }
// }

// Teams();
// let arr=[

//     {
//         name:"luka",
//         age:20
//     },
//     {
//         name:"luka",
//         age:20
//     },
//     {
//         name:"lasha",
//         age:23
//     }
// ]

// let filtered=arr.filter((person)=>person.name=="luka");
// console.log(filtered)