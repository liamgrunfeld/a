import React from "react";

export default function ProjectsList() {
    return(
        <>
        <div className="mt-">
          <h2 className="text-4xl">Projects</h2>
          <ul className="text-2xl">
            <li className="transition ease-in-out delay-150 bg-gray-100 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 cursor-pointer">SciQuel</li>
            <li className="transition ease-in-out delay-150 bg-black-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">Gitlet</li>
            <li className="transition ease-in-out delay-150 bg-black-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">BYOW</li>
            <li>SimplyHealth</li>
            <li>Recipe App</li>
            <li>Fraternity Safety Site</li>
            <li>liamgrunfeld.com</li>
          </ul>
        </div>
        </>

    )
}