import useAppContext from "../context/context";
import styles from "../styles/packagedata.module.css";

const PackageData = ({ course }) => {
  const { guests, addOns } = useAppContext();

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

  return (
    <div className={styles.packageData}>
      <h2>
        Selected Course Name: <br /> <span> {course} </span>
      </h2>
      <img src="/flashsale.jpeg" width="350px"></img>

      {addOns.map((add, i) => {
        return (
          <div key={i} className="addonsClass">
            <p>
              <div className="deletebtn">
                <img src="/delete.png"></img>
              </div>{" "}
              {add.title} - <span>${add.price}</span>
            </p>
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
