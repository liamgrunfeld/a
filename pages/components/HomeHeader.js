import React from "react";

export default function HomeHeader(){
    return (
      <>
        <div className="flex flex-row content-center my-12">
          <div className="flex flex-col max-w-2xl">
            <h1 className="font-bold text-7xl ">Liam Grunfeld</h1>
            <p>
              I am a student at UC Berkeley studying Cognitive and Computer
              Science. While I have learned to program, I have also been focused
              on how to inform software design to be in line with human
              psychology. To me, computer science is not just an engineering
              question, but a design question as well.{" "}
            </p>
          </div>
          <div className="ml-16">
            <img src="Mask-Group-1.png" width="175"></img>
          </div>
        </div>
      </>
    );
}