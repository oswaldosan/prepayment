import useAppContext from "../context/context";
import styles from "../styles/packagedata.module.css";

const PackageData = ({ course }) => {
  const { guests, addOns, setAddons } = useAppContext();

  const prices = {
    adults: 100,
    children: 50,
  };

  function totalprice() {
    let addonsPrice = 0;

    //IF WE ADD ADDONS GET THE SUM OF THE PRICE FOR ALL ADDONS ADDED
    if (addOns.lenght === 0) {
      addonsPrice = 0;
    } else {
      const allventas = [];
      for (let i = 0; i < addOns.length; i++) {
        allventas.push(addOns[i].price);
      }
      addonsPrice = allventas.reduce((a, b) => a + b, 0);
    }
    //IF WE ADD ADDONS GET THE SUM OF THE PRICE FOR ALL ADDONS ADDED

    const totalAdults = guests.adults * prices.adults;
    const totalChilds = guests.children * prices.children;

    return totalAdults + totalChilds + addonsPrice;
  }

  //delete Addon
  function deleteAddon(addon) {
    const deleteArray = addOns;

    const index = addOns.findIndex((x) => x.title === addon.title);
    console.log(index);

    // const NuevoArray = deleteArray.splice(index, 1);
    //setAddons(NuevoArray);
  }

  return (
    <div className={styles.packageData}>
      <h2>
        Selected Course Name: <br /> <span> {course} </span>
      </h2>
      <img src="/flashsale.jpeg" width="350px"></img>

      {addOns.map((add, i) => {
        return (
          <div key={i} className="addonsClass">
            <div className="deletebtn" onClick={() => deleteAddon(add)}>
              <img src="/delete.png"></img>
            </div>{" "}
            {add.title} - <span>${add.price}</span>
          </div>
        );
      })}

      <h4>
        <span>Total:</span> ${totalprice()}
      </h4>
    </div>
  );
};

export default PackageData;
