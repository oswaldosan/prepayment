import styles from "../styles/addons.module.css";
import addons from "../data/addons";
import useAppContext from "../context/context";

const Addons = () => {
  const { addOns, setAddons } = useAppContext();

  function addThis(data) {
    const oldAddons = addOns;

    const saveAddon = {
      title: data.title,
      price: data.price,
    };

    const newAddons = [...oldAddons, saveAddon];
    setAddons(newAddons);
    console.log(addOns);
  }

  return (
    <div className={styles.addonsBox}>
      <h1>Extras & Add-ons for your stay</h1>
      {addons.map((addon, i) => {
        return (
          <div className={styles.addonsBoxGrid} key={i}>
            <div className={styles.boxImg}>
              <img src={addon.image} width="100%"></img>
            </div>
            <div className={styles.boxContent}>
              <h1>{addon.title}</h1>
              <p>{addon.desc}</p>
            </div>
            <div className={styles.boxPriceBook}>
              <div className={styles.extraRounded}>MAYAN ADDONS</div>
              <h4>STARTING FROM</h4>
              <h2>${addon.price}</h2>
              <div className={styles.addonBtn} onClick={() => addThis(addon)}>
                Add Now
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Addons;
