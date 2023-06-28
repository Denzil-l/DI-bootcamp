class Video{
    constructor(title,uploader,time){
        this.title = title
        this.time = time
        this.uploader = uploader
    }
    watch = () =>{
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}`)
    }
}

let newVideo1 = new Video('movie','Denis', 30)
newVideo1.watch()
let newVideo2 = new Video('Not a movie','Not a Denis', -30)
newVideo2.watch()

const videosData = [
    { title: "A", uploader: "J", time: 11 },
    { title: "B", uploader: "S", time: 22 },
    { title: "C", uploader: "F", time: 33 },
    { title: "D", uploader: "M", time: 44 },
    { title: "E", uploader: "T", time: 55 },
  ];
  
  const videos = [];
  
  videosData.forEach((data) => {
    const { title, uploader, time } = data;
    const video = new Video(title, uploader, time);
    videos.push(video);
  });
  
  videos.forEach((video) => {
    video.watch();
  });