import "../app/globals.css";

export const Banner = () => {
  return (
    <div className="py-3 text-center custom-gradient">
      <div className="container">
        <p className="font-medium">
          <span className="hidden sm:inline"> Introducing a completely redesigned interface - </span>{" "}
          <a href="" className="underline underline-offset-4">
            Explore the demo
          </a>
        </p>
      </div>
    </div>
  );
};
