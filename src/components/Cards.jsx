const Cards = ({ img, title }) => {
  return (
    <div className="bg-white rounded-2xl @container">
      <div className="p-12  @6xl:flex gap-12">
        <img className="rounded @6xl:w-1/4" src={img} alt={img} />
        <div>
          <h1 className="text-lg font-bold my-2">{title}</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            nesciunt enim commodi impedit natus. Ipsum sequi sed voluptate!
            Ducimus ratione quidem odit deserunt aliquam tempore debitis. Est
            voluptatum quas ipsam excepturi. Maxime, nam ab? Facilis laborum
            totam quis doloremque possimus accusantium aperiam aut sunt, est
            quas amet sit! Doloribus, saepe dolorem accusamus magni similique
            reiciendis ratione quaerat fugiat expedita?
          </p>
          <button className="font-bold mt-4 bg-black text-white px-4 py-2 rounded-md ">
            {" "}
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
