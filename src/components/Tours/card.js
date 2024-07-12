import { Link } from "react-router-dom";
import { StarIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Card({ tour }) {
    const meanRating = tour.reviews.reduce((sum, review) => sum + review.rating, 0) / tour.reviews.length;

    return (
        <div key={tour.id} className="group relative">
            <Link to={`/tours/${tour.id}`} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                        alt={tour.imageAlt}
                        src={tour.imageSrc}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-base text-gray-700 font-bold">
                            <span aria-hidden="true" className="absolute inset-0" />
                            {tour.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{tour.hours}</p>
                    </div>
                    <p className="text-base font-medium text-gray-900">{tour.price}</p>
                </div>
                <div className="mt-2 flex items-center">
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
                    <p className="ml-2 text-sm text-gray-500">{meanRating.toFixed(1)} out of 5 stars</p>
                </div>
            </Link>
        </div>
    );
}
