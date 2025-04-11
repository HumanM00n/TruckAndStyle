"use client";

import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TsAvisPrix() {

    return (
        <section className="border-1 border-blue-500 min-h-auto bg--grisArdoiseMid ">
            <div className="flex flex-col">
                <h2 className="text-3xl text-white pl-5">Vos <span className="color--form">Avis</span></h2>

                <div id="carouselExampleDark" className="carousel carousel-light slide min-h-[400px] px-9" data-bs-ride="carousel">

                    {/* Indicateurs */}
                    <div className="carousel-indicators mb-28">
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
                    <div className="carousel-inner h-[340px] w-full mt-2 px-6 pt-2 pb-4">

                        <div className="carousel-item active h-[300px] bg--form rounded-lg" data-bs-interval="10000">
                            <FontAwesomeIcon icon={faCircleUser} className="text-5xl text-white pl-4 pt-3" />
                            <div className="carousel-caption rounded-lg h-1/2 d-md-block pb-0 position-absolute bottom-16 text-white text-left px-3  object-fill">
                                <p className="">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et nisl ex. Suspendisse erat augue, maximus at dui at, pulvinar ullamcorper ante.”</p>
                                <div className="max-w-[500px] flex justify-end">
                                    <span className="font-bold">Alex.D</span>
                                </div>
                            </div>

                        </div>

                        <div className="carousel-item h-[300px] bg--form rounded-lg" data-bs-interval="2000">
                            <FontAwesomeIcon icon={faCircleUser} className="text-5xl text-white pl-4 pt-3" />
                            <div className="carousel-caption rounded-lg h-1/2 d-md-block pb-0 position-absolute bottom-16 text-white text-left px-3">
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et nisl ex. Suspendisse erat augue, maximus at dui at, pulvinar ullamcorper ante.”</p>
                                <div className="max-w-[500px] flex justify-end">
                                    <span className="font-bold">Mathis.R</span>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item h-[300px] bg--form rounded-lg" data-bs-interval="3000">
                            <FontAwesomeIcon icon={faCircleUser} className="text-5xl text-white pl-4 pt-3" />
                            <div className="carousel-caption rounded-lg h-1/2 d-md-block pb-0 position-absolute bottom-16 text-white text-left px-3">
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et nisl ex. Suspendisse erat augue, maximus at dui at, pulvinar ullamcorper ante.”</p>
                                <div className="max-w-[500px] flex justify-end ">
                                    <span className="font-bold">Myriam.JD</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Nos Prix */}
                <div className="border-2 border-purple-500 w-full h-auto">
                    <h3 className="text-3xl text-white pl-5">Nos <span className="color--form">Prix</span></h3>

                    <div className=" px-14">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseOne"
                                    >
                                        Accordion Item #1
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseOne"
                                    className="accordion-collapse collapse "
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body">
                                        Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseTwo"
                                    >
                                        Accordion Item #2
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseTwo"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body">
                                        Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseThree"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseThree"
                                    >
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseThree"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body">
                                        Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}