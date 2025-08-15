/*function downloadFile(fileName,callback){
  console.log(`Downloading ${fileName}...`);
  setTimeout(()=>{
    console.log(`${fileName} downlaod.`)
    callback();
  },2000)
}
downloadFile("movie.mp4",()=>{
  console.log("Now playing the movie...")
})*/


/*let download=new Promise((resolve,reject)=>{
  let success=true; 
  setTimeout(()=>{
    if(success)resolve("File downloaded successfully!")
    else reject("Download failed!") 
  },2000)
})

download  
.then(message=>consol.log(message))
.catch(error=>console.log(error))*/

/*function downloadFile(){
  return new Promise((resolve)=>{
    setTimeout(()=>resolve("file download!"),2000)
  })
}
async function proocessdownloaded(){
  console.log("Stating downloaded...");
  let message=await downloadFile();
  console.log(message)
  console.log("Processing file...")
}*/


