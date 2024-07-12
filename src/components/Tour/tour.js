import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { useParams } from "react-router-dom";
import { tours } from "../../data";
import Comment from "./comment";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Tour() {
    const { id } = useParams();
    const tour = tours.find((p) => p.id === parseInt(id));
    const [meanRating, setMeanRating] = useState(
        tour.reviews.reduce((sum, review) => sum + review.rating, 0) / tour.reviews.length
    );

    if (!tour) return <div>Tour not found!</div>;

    const updateMeanRating = (newMeanRating) => {
        setMeanRating(newMeanRating);
    };

    return (
        <div className="bg-white">
            <div className="pt-6">
                {/* Single Full-Width Image */}
                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="aspect-w-16 aspect-h-9">
            <img
              alt={tour.imageAlt}
              src={tour.imageSrc}
              className="h-64 w-full object-cover object-center rounded-lg"
            />
          </div>
        </div>


                {/* Tour info */}
                <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                            {tour.name}
                        </h1>
                    </div>

                    {/* Options */}
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 className="sr-only">Tour information</h2>
                        <p className="text-3xl tracking-tight text-gray-900">
                            {tour.price}
                        </p>

                        {/* Reviews */}
                        <div className="mt-6">
                            <h3 className="sr-only">Reviews</h3>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                            key={rating}
                                            aria-hidden="true"
                                            className={classNames(
                                                meanRating > rating ? "text-gray-900" : "text-gray-200",
                                                "h-5 w-5 flex-shrink-0"
                                            )}
                                        />
                                    ))}
                                </div>
                                <p className="">{meanRating.toFixed(1)} out of 5 stars</p>
                            </div>
                        </div>

                        <form className="mt-10">
                            <button
                                type="submit"
                                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Book Now
                            </button>
                        </form>
                    </div>

                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                        {/* Description and details */}
                        <div>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{tour.overview}</p>
                            </div>
                        </div>

                        {/* Comments */}
                        <Comment comments={tour.reviews} updateMeanRating={updateMeanRating} />
                    </div>
                </div>
            </div>
        </div>
    );
}
