const Bio = () => {
  return (
    <div className="mt-6 text-electric-blue">
      <p className="text-2xl mb-2 underline font-bold">Bio</p>
      <div className="grid  grid-cols-4 gap-y-1  text-base md:text-lg">
        <span className="font-bold ">2000</span>
        <span className="col-span-3">Born in Mumbai, India</span>

        <span className="font-bold">2015</span>
        <span className="col-span-3">
          Completed SSC from SVB's Oxford Hight School
        </span>

        <span className="font-bold">2017</span>
        <span className="col-span-3">Completed HSC from V.G. Vaze College</span>

        <span className="font-bold">2020</span>
        <span className="col-span-3">
          Completed B.sc IT from V.G. Vaze college
        </span>

        <span className="font-bold">2020 to present</span>
        <span className="col-span-3">
          Pursuing M.sc IT from Mulund college of commerce
        </span>
      </div>
    </div>
  );
};

export default Bio;
