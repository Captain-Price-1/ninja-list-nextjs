import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";
export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      ninjas: data,
    },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja) => {
        const { id, name } = ninja;
        return (
          <Link href={"/ninja/" + ninja.id} key={id}>
            <a className={styles.single}>
              <h3>{name}</h3>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Ninjas;
