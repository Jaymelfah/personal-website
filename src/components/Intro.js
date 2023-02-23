import React from 'react';



const Intro = () => {
    return (
      <div className="flex flex-col items-center mx-6">
       <h1 className="mt-36 text-black text-4xl">Hello! My name is <span className="text-red-400">Jeremiah Melfah</span> and I am a <span className="text-red-400 font-bold">Full Stack Developer</span></h1>
       <iframe src="https://giphy.com/embed/yAGIvCiwPJn5C" title="iframe" width="300" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/coding-yAGIvCiwPJn5C">Need help on your project?</a></p>
      </div>
    )
}

export default Intro;