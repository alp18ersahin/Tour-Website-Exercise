import { Link } from "react-router-dom";
import Card from "./card";
import { tours } from "../../data";

export default function Tours() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                    Featured Activities
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {tours.map((tour) => (
                        <Link key={tour.id} to={`/tours/${tour.id}`}>
                            <Card tour={tour} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
