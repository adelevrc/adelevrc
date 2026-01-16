import { useQuery } from "@apollo/client/react";
import styles from "./filters.module.scss";
import { Tags } from "@/graphql/types/tag.type";
import { TAGS_QUERY } from "@/graphql/queries/tag.query";

interface PageProps {
  filterSelected: string;
  setFilter: (filters: string) => void;
}

const Filters = ({ filterSelected, setFilter }: PageProps) => {
  const { data, loading, error } = useQuery<Tags>(TAGS_QUERY);

  const handleFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const filterSelected = e.currentTarget.value;
    setFilter(filterSelected);
  };

  return (
    <div className={styles.filters}>
      <button
        className={`${styles.filter} ${filterSelected === "Tout" ? styles.selected : ""}`}
        value='Tout'
        onClick={(e) => handleFilter(e)}
      >
        Tout
      </button>
      {data?.getAllTags.map((filter) => (
        <button
          className={`${styles.filter} ${filter.name === filterSelected ? styles.selected : ""}`}
          key={filter.name}
          value={filter.name}
          onClick={(e) => handleFilter(e)}
        >
          {filter.name}
        </button>
      ))}
    </div>
  );
};

export default Filters;
