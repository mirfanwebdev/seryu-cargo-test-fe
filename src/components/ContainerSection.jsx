function ContainerSection({ title, children, large = true }) {
  return (
    <>
      <div className=" mx-4 md:mx-[120px] mt-6 md:mt-12">
        {large ? (
          <h1 className="font-semibold font-poppins text-5xl text-center md:text-start leading-[72px] capitalize pb-2">
            {title}
          </h1>
        ) : (
          <h2 className="font-semibold font-poppins text-xl leading-[30px] capitalize pb-2">
            {title}
          </h2>
        )}
        {children}
      </div>
    </>
  );
}

export default ContainerSection;
