import styles from "./Advertisement.module.scss";
import { useMemo } from "react";
import { EnvironmentOutlined } from "@ant-design/icons";
import { formatPrice } from "../../utils";

interface IAdvertisementProps {
  item: IAdvertisement;
}

interface IAdvertisement {
  id: number;
  thumb: string;
  price: number;
  location: {
    street: string;
    city: string;
    country: string;
  };
  dateAdded: Date;
  extraInformation: string[];
  type: string;
  image: string;
  house: string;
}

export default function Advertisement({ item }: IAdvertisementProps) {
  const price = useMemo(() => item && formatPrice(item.price), [item]);

  return (
    <div className={styles.container}>
      <div className={styles.imagecontainer}>
      <img className={styles.imageContainer} src={item.image} alt={`Image`} />
      </div>
      <div className={styles.detailsContainer}>
        <h5 className={styles.title}>
          {item.house}
        </h5>
          <span style={{ color: 'gray' }}>
            <EnvironmentOutlined /> {`${item.location.street}, ${item.location.city}, ${item.location.country}`}
          </span>
        <h5 className={styles.price}>
          {"€"} {price}
        </h5>
      </div>
    </div>
  );
}
