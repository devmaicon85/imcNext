import Image from "next/image";
import { Level } from "../../helpers/imc";

import styles from "./GridItem.module.css";

type Props = {
    item: Level;
};
export const GridItem = ({ item }: Props) => {
    return (
        <div
            className={styles.gridItem}
            style={{ backgroundColor: item.color }}
        >
            <div className={styles.icon}>
                <Image
                    src={`/assets/${item.icon}.png`}
                    width={30}
                    height={30}
                    alt={item.title}
                />
            </div>
            <h3>{item.title}</h3>
            {item.yourImc && (
                <div className={styles.result}>
                    Seu IMC é de {item.yourImc.toFixed(2)} kg/m²
                </div>
            )}

            <p>
                IMC entre <strong>{item.imc[0]}</strong> e abaixo de{" "}
                <strong>{item.imc[1]}</strong>
            </p>
        </div>
    );
};
