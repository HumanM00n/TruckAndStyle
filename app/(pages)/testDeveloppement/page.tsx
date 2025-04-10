'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";


export default function page() {

    return (
        <>
            <div id="carouselExampleDark" className="carousel carousel-light slide border-1 border-blue-500 min-h-[600px]" data-bs-ride="carousel">

                {/* Indicateurs */}
                <div className="carousel-indicators mb-0">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                        className=""
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                        className=""
                    />
                </div>

                {/* Slides */}
                <div className="carousel-inner border h-[450px]">
                    <div className="carousel-item active border-1 border-red-500 h-[450px]" data-bs-interval="10000">
                        <FontAwesomeIcon icon={faCircleUser} className="text-5xl text-[#733E34] " />
                        <div className="carousel-caption pb-0 position-none d-none d-md-block text-white border-1 border-yellow-400">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="2000">
                        <FontAwesomeIcon icon={faCircleUser} className="text-5xl text-white" />
                        <div className="carousel-caption d-none d-md-block text-white mt-32">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <FontAwesomeIcon icon={faCircleUser} className="text-5xl text-white" />
                        <div className="carousel-caption d-none d-md-block text-white">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}