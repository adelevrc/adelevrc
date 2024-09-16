import style from "./marquee.module.scss";

const Marquee = () => {
  return (
    <aside className={style.marquee}>
      <div className={style.scrollingContent}>
        <p>
          Yoga <span className={style.dot} />
        </p>
        <p>
          Méditation <span className={style.dot} />{" "}
        </p>
        <p>
          Neuroscience <span className={style.dot} />
        </p>
        <p>
          Respiration <span className={style.dot} />
        </p>
        <p>
          Anatomie <span className={style.dot} />
        </p>
        <p>Mobilité</p>
      </div>
    </aside>
  );
};

export default Marquee;
