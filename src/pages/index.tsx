import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { GridItem } from "../components/GridItem";
import { calculateImc, Level, levels } from "../helpers/imc";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    const [heightField, setHeightField] = useState<number>(0);
    const [weightField, setWeightField] = useState<number>(0);
    const [levelResult, setLevelResult] = useState<Level | null>(null);

    const handleBackButton = () => {
        setLevelResult(null);
    };
    const handleCalculateButton = () => {
        if (!heightField || !weightField) {
            alert("Digite todos os campos");
        }

        setLevelResult(calculateImc(heightField, weightField));
    };

    return (
        <div className={styles.main}>
            <header>
                <div className={styles.headerContainer}>
                    <Image
                        src="/assets/powered.png"
                        alt="logo"
                        width={300}
                        height={50}
                    />
                </div>

                <div className={styles.container}>
                    <div className={styles.leftSide}>
                        <h1>Calcule o seu IMC</h1>
                        <p>
                            IMC é a sigla para indice de massa corpórea,
                            parâmetro adotado pela Organização mundial da saúde
                            para calcular o peso ideal de cada pessoa
                        </p>

                        <input
                            type="number"
                            // disabled={setLevelResult !== null ? true : false}
                            placeholder="Digite a sua altura. Ex: 1.5 (em metros)"
                            value={heightField > 0 ? heightField : ""}
                            onChange={(e) =>
                                setHeightField(parseFloat(e.target.value))
                            }
                        />

                        <input
                            type="number"
                            // disabled={setLevelResult !== null ? true : false}
                            placeholder="Digite o seu peso. Ex: 70 (em kg)"
                            value={weightField > 0 ? weightField : ""}
                            onChange={(e) =>
                                setWeightField(parseFloat(e.target.value))
                            }
                        />

                        <button onClick={handleCalculateButton}>
                            Calcular
                        </button>
                    </div>

                    <div className={styles.rightSide}>
                        {!levelResult && (
                            <div className={styles.grid}>
                                {levels.map((item, key) => (
                                    <GridItem key={key} item={item}></GridItem>
                                ))}
                            </div>
                        )}

                        {levelResult && (
                            <div className={styles.gridResult}>
                                <div
                                    className={styles.leftArrow}
                                    onClick={handleBackButton}
                                >
                                    <Image
                                        src="/assets/leftarrow.png"
                                        width={30}
                                        height={30}
                                        layout="fixed"
                                        alt="voltar"
                                    />
                                </div>
                                <GridItem item={levelResult}></GridItem>
                            </div>
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Home;
