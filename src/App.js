import Button from "./components/Button/button";
import ImageGrid from "./components/ImageGrid/imageGrid";

export default function App() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Let the best experiences enrich your trip
            </h1>
            <p className="mt-4 text-xl text-gray-500">
            We select the best things to do. You will just have to enjoy them
            </p>
          </div>
          <div>
            <div className="mt-10">
              <ImageGrid />
              <Button text="Explore Tours" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
