import MetalGrate from "../../assets/metal-grate.jpg";
import MobileWeld from "../../assets/mobile-welding.jpg";
import Mig from "../../assets/mig-welding.jpg";
import Tig from "../../assets/tig.jpg";
import Stick from "../../assets/stick-welding.jpg";
import Excavator from "../../assets/excavator.jpg";
import "./Services.css";

const Services = () => {
  const ServicesOffered = [
    {
      name: "GMAW/MIG Welding",
      image: Mig,
      price: 15.99,
      description:
        "MIG welding is an arc welding process in which a continuous solid wire electrode is fed through a welding gun and into the weld pool, joining the two base materials together while a shielding gas protects the weld pool from contamination. We offer MIG welding services for structural components such as motor platforms, motor bases, oil tanks, vessels, and more.",
    },
    {
      name: "GTAW/TIG Welding",
      image: Tig,
      price: 11.99,
      description:
        "TIG, or tungsten inert gas welding, also known as gas tungsten arc welding (GTAW), uses a non-consumable tungsten electrode to deliver current to the welding arc. We specialize in welding various materials, including metal, stainless steel, and aluminum. Our expertise includes projects such as piping, tubing, flanges, and pressure vessels using TIG welding",
    },
    {
      name: "SMAW/Stick Welding",
      image: Stick,
      price: 11.99,
      description:
        "Shielded metal arc welding (SMAW), also known as manual metal arc welding (MMA or MMAW), flux shielded arc welding or informally as stick welding, is a manual arc welding process that uses a consumable electrode covered with a flux to lay the weld. ",
    },
    {
      name: "Mobile Welding Services",
      image: MobileWeld,
      price: 17.99,
      description:
        "With all the necessary equipment, we can tackle most jobs, big or small.",
    },
    {
      name: "Equipment Repair",
      image: Excavator,
      price: 1997.99,
      description:
        "From crack repair to complete refurbishing, we are equipped to handle it.",
    },
  ];

  return (
    <>
      <div
        className="menu p-4"
        style={{ backgroundImage: `url(${MetalGrate})` }}
      >
        <div className="service">
          <h1 className="servTitle p-5">
            Serving Riverside, San Bernadino, and San Diego Counties
          </h1>
          <div className="servList pb-4">
            {ServicesOffered.map((service, index) => (
              <div key={index} className="card">
                <div className="cardImageContainer">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="cardImage"
                  />
                </div>
                <h2 className="cardTitle">{service.name}</h2>
                <p className="cardDescription p-3">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
