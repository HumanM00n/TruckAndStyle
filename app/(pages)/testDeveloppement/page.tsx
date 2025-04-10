'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

export default function page() {

    return (
        <>
            <div id="carouselExampleDark" className="carousel carousel-light slide border-1 border-blue-500 w-full min-h-[470px] px-9" data-bs-ride="carousel">

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
                <div className="carousel-inner h-[340px] w-full border-2 mt-2 px-6 pt-2 pb-4">

                    <div className="carousel-item active h-[300px] border-1 border-purple-500 bg--form rounded-lg" data-bs-interval="10000">
                        <FontAwesomeIcon icon={faCircleUser} className="text-5xl text-white pl-4 pt-3" />
                        <div className="carousel-caption rounded-lg h-1/2  d-md-block pb-0 position-absolute bottom-16 text-white text-left px-3">
                            <p className="object-fill">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et nisl ex. Suspendisse erat augue, maximus at dui at, pulvinar ullamcorper ante.”</p>
                            <div className="max-w-[500px] flex justify-end">
                                <span className="font-bold">Alex.D</span>
                            </div>
                        </div>

                    </div>

                    <div className="carousel-item h-[300px] border-1 border-purple-500" data-bs-interval="2000">
                        <FontAwesomeIcon icon={faCircleUser} className="text-5xl text-[#733E34] pl-4 pt-3" />
                        <div className="carousel-caption rounded-lg h-1/2 d-md-block pb-0 position-absolute bottom-16 text-white text-left px-3">
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et nisl ex. Suspendisse erat augue, maximus at dui at, pulvinar ullamcorper ante.”</p>
                            <div className="max-w-[500px] flex justify-end">
                                <span className="font-bold">Mathis.R</span>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item h-[300px] border-1 border-purple-500" data-bs-interval="3000">
                        <FontAwesomeIcon icon={faCircleUser} className="text-5xl text-[#733E34] pl-4 pt-3" />
                        <div className="carousel-caption rounded-lg h-1/2 d-md-block pb-0 position-absolute bottom-16 text-white text-left px-3">
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et nisl ex. Suspendisse erat augue, maximus at dui at, pulvinar ullamcorper ante.”</p>
                            <div className="max-w-[500px] flex justify-end ">
                                <span className="font-bold">Myriam.JD</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}